"use client";
import { useState } from "react";
import { redirect, useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState("");
  const router = useRouter();
  const { data: session } = authClient.useSession();

  if (session) {
    router.push("/dashboard");
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

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
    try {
      console.log(email);
      console.log(password);
      console.log(rememberMe);

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
          },
        }
      );
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      setIsLoading(true);
      const { data, error } = await authClient.signIn.social({
        provider: "google",
        callbackURL: "/dashboard",
      });

      if (error) {
        console.log(error.message);
        return;
      }

      console.log("Signed in successfully!");
    } catch (error) {
      console.log("An error occurred during sign in");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="flex justify-center items-center m-auto p-8 rounded-2xl bg-zinc-50 font-sans dark:bg-black">
      <div className="w-2xs space-y-4 md:space-y-8">
        <h2 className="text-3xl mt-2 text-center font-bold leading-tight tracking-tight text-gray-500 md:text-2xl dark:text-white">
          LogIn to your account
        </h2>
        <p className="text-center text-sm  text-red-600 dark:text-red-500">
          <span className="font-medium">{errors}</span>
        </p>
        <div className="mt-8">
          <form onSubmit={handleSignInEmail}>
            <div className="grid">
              <div className="mb-4">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  placeholder="john.doe@example.com"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password">Password</label>
                <input
                  name="password"
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  placeholder="•••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div className="flex items-center mb-8">
                <input
                  name="checkbox"
                  id="checkbox"
                  type="checkbox"
                  onClick={() => {
                    setRememberMe(!rememberMe);
                  }}
                />
                <label
                  htmlFor="checkbox"
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Remember me
                </label>
              </div>
            </div>

            <button
              disabled={isLoading}
              type="submit"
              className="w-full flex justify-center items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 border border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Signing in..." : "Sign in"}
            </button>
            <div className="flex justify-center items-center gap-"></div>
          </form>
        </div>
        <h2 className="flex justify-center items-center">OR</h2>
        <div className="flex justify-center items-center">
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
                  viewBox="0 0 18 19"
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
        </div>
      </div>
    </section>
  );
}
