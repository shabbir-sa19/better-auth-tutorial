"use client";
import { useEffect, useState } from "react";
import { redirect, useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
import Link from "next/link";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState("");
  const router = useRouter();
  const [rememberMe, setRememberMe] = useState(false);
  const { data: session } = authClient.useSession();

  useEffect(() => {
    if (session) {
      redirect("/dashboard");
    }
  }, [session]);

  const handleSignInSocial = async () => {
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/dashboard",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignInEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const formData = new FormData(e.currentTarget);
      const email = formData.get("email") as string;
      const password = formData.get("password") as string;

      const { data, error } = await authClient.signIn.email(
        {
          email: email, // required
          password: password, // required
          rememberMe: rememberMe,
        },
        {
          onSuccess(context) {
            redirect("/dashboard");
          },
          onError(context) {
            setErrors("errors : " + context.error.message.toString());
            toast(errors);
            return;
          },
        }
      );
      console.log(data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const serverSignInEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const formData = new FormData(e.currentTarget);
      const email = formData.get("email") as string;
      const password = formData.get("password") as string;

      let headersList = {
        Accept: "*/*",
        "Content-Type": "application/json",
      };

      let res = await fetch("api/user/login", {
        method: "POST",
        headers: headersList,
        body: JSON.stringify({
          email,
          password,
          rememberMe,
        }),
      });

      let data = await res.json();
      console.log(data);
      router.push("/dashboard");
    } catch (err) {
      console.log(err);
      toast("Error ", { description: errors });
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    try {
      const data = await authClient.signIn.social({
        provider: "google",
        callbackURL: "/dashboard",
      });

      if (!data.data) {
        console.log("Error");
        return;
      }

      console.log("Signed in successfully!");
      toast.success("Signed in successfully!");
      console.log(data);
    } catch (error) {
      console.log("An error occurred during sign in");
    } finally {
      setIsLoading(false);
    }
  };

  const forget_password = async () => {};

  // return (
  //   <div className="w-full h-full flex items-center justify-center m-auto">
  //     <form className="w-full md:w-1/3 rounded-lg">
  //       <div className="flex font-bold justify-center mt-6">
  //         <img className="h-20 w-20 mb-3" src="https://dummyimage.com/64x64" />
  //       </div>
  //       <h2 className="text-2xl text-center mb-8">Login</h2>
  //       <div className="px-12 pb-10">
  //         <div className="w-full mb-2">
  //           <div className="flex items-center">
  //             <input
  //               type="text"
  //               placeholder="Email Address"
  //               className="w-full border rounded px-3 py-2 text-gray-200 focus:outline-none"
  //             />
  //           </div>
  //         </div>
  //         <div className="w-full mb-2">
  //           <div className="flex items-center">
  //             <input
  //               type="password"
  //               placeholder="Password"
  //               className="w-full border rounded px-3 py-2 text-gray-200 focus:outline-none"
  //             />
  //           </div>
  //         </div>
  //         <button
  //           type="submit"
  //           className="w-full py-2 mt-8 rounded-full bg-blue-400 text-gray-100 focus:outline-none"
  //         >
  //           Login
  //         </button>
  //       </div>
  //     </form>
  //   </div>
  // );
  return (
    <section className="w-full lg:w-1/4 md:w-1/3 h-full min-w-max items-center justify-center text-center m-auto font-sans dark:bg-black">
      <div className="">
        <h2 className="text-3xl mt-2 text-center font-bold leading-tight tracking-tight text-gray-500 md:text-2xl dark:text-white">
          Log into your account
        </h2>
        <p className="text-sm p-4 font-light text-gray-500">
          Don't have an account?{" "}
          <Link
            href="/register"
            className="font-medium text-primary-600 hover:underline dark:text-primary-500"
          >
            Sign up here
          </Link>
        </p>
        <p className="text-center text-sm text-red-600">{errors}</p>
      </div>

      <div className="flex flex-wrap mt-2 gap-4">
        <button
          onClick={handleGoogleSignIn}
          disabled={isLoading}
          className="w-full flex justify-center items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 border border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            "Signing in..."
          ) : (
            <>
              <svg
                className="w-4 h-4 me-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                  clipRule={"evenodd"}
                />
              </svg>
              Sign in with Google
            </>
          )}
        </button>
        <button
          onClick={() => {
            console.log("");
          }}
          disabled={isLoading}
          className="w-full flex justify-center items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 border border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            "Signing in..."
          ) : (
            <>
              <svg
                className="w-5 h-5 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12.037 21.998a10.313 10.313 0 0 1-7.168-3.049 9.888 9.888 0 0 1-2.868-7.118 9.947 9.947 0 0 1 3.064-6.949A10.37 10.37 0 0 1 12.212 2h.176a9.935 9.935 0 0 1 6.614 2.564L16.457 6.88a6.187 6.187 0 0 0-4.131-1.566 6.9 6.9 0 0 0-4.794 1.913 6.618 6.618 0 0 0-2.045 4.657 6.608 6.608 0 0 0 1.882 4.723 6.891 6.891 0 0 0 4.725 2.07h.143c1.41.072 2.8-.354 3.917-1.2a5.77 5.77 0 0 0 2.172-3.41l.043-.117H12.22v-3.41h9.678c.075.617.109 1.238.1 1.859-.099 5.741-4.017 9.6-9.746 9.6l-.215-.002Z"
                  clipRule="evenodd"
                />
              </svg>
              Sign in with Github
            </>
          )}
        </button>
      </div>

      <span className="mt-auto">OR</span>

      <div className="mt-2">
        <form onSubmit={serverSignInEmail}>
          <div className="grid">
            <div className="mb-4">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <input
                name="password"
                type="password"
                id="password"
                placeholder="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div className="flex items-center mb-4">
              <input
                name="checkbox"
                id="checkbox"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label
                htmlFor="checkbox"
                className="ms-2 text-sm font-medium text-gray-600 dark:text-gray-300"
              >
                Remember me
              </label>
            </div>
            <button
              disabled={isLoading}
              type="submit"
              className="w-full flex justify-center items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 border border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Loging in..." : "Log In"}
            </button>
          </div>
        </form>
        <div className="">
          <p className="text-sm p-4 font-light text-gray-500">
            <Link
              href={"/"}
              className="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              Forgot Password?
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

<svg
  className="w-5 h-5 text-gray-800 dark:text-white"
  aria-hidden="true"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  fill="currentColor"
  viewBox="0 0 24 24"
>
  <path
    fillRule="evenodd"
    d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
    clip-rule="evenodd"
  />
</svg>;
<svg
  className="w-5 h-5 text-gray-800 dark:text-white"
  aria-hidden="true"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  fill="currentColor"
  viewBox="0 0 24 24"
>
  <path
    fillRule="evenodd"
    d="M12.037 21.998a10.313 10.313 0 0 1-7.168-3.049 9.888 9.888 0 0 1-2.868-7.118 9.947 9.947 0 0 1 3.064-6.949A10.37 10.37 0 0 1 12.212 2h.176a9.935 9.935 0 0 1 6.614 2.564L16.457 6.88a6.187 6.187 0 0 0-4.131-1.566 6.9 6.9 0 0 0-4.794 1.913 6.618 6.618 0 0 0-2.045 4.657 6.608 6.608 0 0 0 1.882 4.723 6.891 6.891 0 0 0 4.725 2.07h.143c1.41.072 2.8-.354 3.917-1.2a5.77 5.77 0 0 0 2.172-3.41l.043-.117H12.22v-3.41h9.678c.075.617.109 1.238.1 1.859-.099 5.741-4.017 9.6-9.746 9.6l-.215-.002Z"
    clip-rule="evenodd"
  />
</svg>;
