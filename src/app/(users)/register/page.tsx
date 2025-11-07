"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { NextRequest } from "next/server";
import React, { useState } from "react";

type Props = {};

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const handleRegister = async () => {
    setIsLoading(true);

    try {
      const { data, error } = await authClient.signUp.email({
        name: "John Doe", // required
        email: "john.doe@example.com", // required
        password: "", // required
        image: "",
        callbackURL: "",
      });
    } catch (error) {
      console.log(error);
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
        <div className="mt-8">
          <form onSubmit={() => {}} className="">
            <div className="grid">
              <div className="mb-4">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="john.doe@example.com"
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
                  type="confirm-password"
                  name="confirm-password"
                  id="confirm-password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required={true}
                />
              </div>
              <div className="flex items-center mb-8">
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
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
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
