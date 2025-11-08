"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import { NextRequest } from "next/server";
import React, { useState } from "react";

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState("");
  const router = useRouter();

  const { data: session } = authClient.useSession();

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const formData = new FormData(e.currentTarget);

      const name = formData.get("name") ?? "";
      const email = formData.get("email") ?? "";
      const pass = formData.get("password")?.toString() ?? "";
      const confirm_pass = formData.get("confirm-password");

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
      console.log("Signed up:", data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="flex justify-center items-center m-auto p-8 bg-zinc-50 font-sans dark:bg-black rounded-2xl">
      <div className="w-2xs space-y-4 md:space-y-8">
        <h1 className="text-3xl mt-2 text-center font-bold leading-tight tracking-tight text-gray-500 md:text-2xl dark:text-white">
          Create an account
        </h1>
        <p className="text-center text-sm  text-red-600 dark:text-red-500">
          <span className="font-medium">{errors}</span>
        </p>
        <div className="mt-8">
          <form onSubmit={handleRegister} className="">
            <div className="grid">
              <div className="mb-4">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="First Name"
                  required={true}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="john.doe@example.com"
                  onChange={(e) => {
                    console.log(e.target.value);
                  }}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required={true}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required={true}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="confirm-password">Confirm password</label>
                <input
                  type="password"
                  name="confirm-password"
                  id="confirm-password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required={true}
                />
              </div>
              <div className="flex items-center mb-4">
                <input
                  id="terms"
                  type="checkbox"
                  className=""
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
                className="w-full flex justify-center items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 border border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "Wait for a moment..." : "Create an account"}
              </button>
            </div>
            <p className="text-sm p-4 font-light text-gray-500 dark:text-gray-400">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Login here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
