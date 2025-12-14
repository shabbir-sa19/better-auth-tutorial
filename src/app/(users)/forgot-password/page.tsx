"use client";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import { toast } from "sonner";

const forgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const resetPassword = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsLoading(true);
    console.log(email);
    try {
      const { data, error } = await authClient.requestPasswordReset({
        email: email,
        redirectTo: "/reset-password",
      });

      if (error) {
        toast.error(error.message);
        console.log(error.message);
        setIsLoading(false);
        return;
      }
      toast(data.message || "Password reset link sent to your email");
    } catch (error) {
      toast.error(error as string);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex grow w-full items-center justify-center bg-transparent">
      <div className="w-full max-w-md glass-effect p-4">
        <h1 className="text-3xl font-extrabold text-center mb-8">
          Reset Password
        </h1>
        <p className="text-center text-gray-400 mb-8">
          Enter your email to receive a password reset link
        </p>
        <div className="mb-6">
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <button
          onClick={resetPassword}
          disabled={isLoading}
          className="w-full bg-blue-700 hover:bg-blue-800 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium py-2 px-4 rounded-lg transition"
        >
          {isLoading ? "Sending..." : "Reset Password"}
        </button>
      </div>
    </div>
  );
};

export default forgotPassword;
