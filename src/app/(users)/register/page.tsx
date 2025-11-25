"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<String | null>();
  const [terms, setTerms] = useState(false);
  const router = useRouter();

  const { data: session } = authClient.useSession();

  useEffect(() => {
    if (session) {
      // router.push("/");
      console.log(session.user.id);
    }
  }, [session]);

  const handleServerRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors(null);
    setIsLoading(true);
    try {
      const headersList = {
        "Content-Type": "application/json",
      };

      const bodyContent = new FormData(e.currentTarget);
      const formObject = Object.fromEntries(bodyContent.entries());

      const { name, email, password, confirmPassword } = formObject;

      if (password !== confirmPassword) {
        setErrors("Passwords do not match");
        toast("Error", { description: "Passwords do not match" });
        return;
      }
      console.log("response");
      const response = await fetch("/api/user/register", {
        method: "POST",
        headers: headersList,
        body: JSON.stringify({
          name: name.toString().trim(),
          email: email.toString().trim().toLowerCase(),
          password,
        }),
      });
      console.log(response);
      const { data, error } = await response.json();

      if (!response.ok) {
        setErrors(error);
        return;
      }
      console.log(data);

      router.push("/");
    } catch (registerError) {
      setErrors(registerError?.toString());
      console.log(errors);
      toast("Error", { description: errors });
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const formData = new FormData(e.currentTarget);
      const name = formData.get("name") ?? "";
      const email = formData.get("email") ?? "";
      const pass = formData.get("password")?.toString() ?? "";
      const confirm_pass = formData.get("confirm-password")?.toString() ?? "";

      if (pass !== confirm_pass) {
        setErrors("Passwords do not match.");
      }

      const { data, error } = await authClient.signUp.email(
        {
          name: name?.toString().trim().toLowerCase(),
          email: email?.toString().trim(),
          password: pass,
          // callbackURL: "/dashboard",
        },
        {
          onError(context) {
            setErrors(error?.message?.toString() ?? "");
            console.log("Sign up error:", error);
            return;
          },
          onSuccess(context) {
            console.log(context);
            redirect("/dashboard");
          },
        }
      );
    } catch (err) {
      console.log(err?.toString());
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="w-full lg:w-1/4 md:w-1/3 h-full min-w-max items-center justify-center text-center mx-auto font-sans dark:bg-black">
      <div className="">
        <h2 className="text-3xl mt-2 text-center font-bold leading-tight tracking-tight text-gray-500 md:text-2xl dark:text-white">
          Create an account
        </h2>
        <p className="text-sm p-4 font-light text-gray-500">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-medium text-primary-600 hover:underline dark:text-primary-500"
          >
            Login here
          </Link>
        </p>
        <p className="text-center text-sm  text-red-600">{errors}</p>
      </div>

      <div className="mt-8">
        <form onSubmit={handleServerRegister} className="">
          <div className="grid">
            <div className="mb-4">
              <input
                type="text"
                name="name"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Full Name"
                required={true}
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="john.doe@example.com"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required={true}
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required={true}
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirm Password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required={true}
              />
            </div>
            <div className="flex items-center mb-4">
              <input
                name="checkbox"
                id="terms"
                type="checkbox"
                checked={terms}
                onChange={(e) => setTerms(e.target.checked)}
                required={true}
              />
              <label
                htmlFor="terms"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                I accept the{" "}
                <a
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  href="#"
                >
                  Terms and Conditions
                </a>
              </label>
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex justify-center items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 border border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Registering..." : "Create an account"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;
