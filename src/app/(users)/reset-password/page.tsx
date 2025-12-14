"use client";
import { authClient } from "@/lib/auth-client";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

const resetPassword = () => {
  const [password, setPassword] = useState("");
  const params = useSearchParams();
  const token = params.get("token") as string;
  const msg = params.get("error") as string;

  if (!token) {
    console.log(`Warning : ${msg}`);
  }
  const reset = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!token) {
      return;
    }
    console.log(token);

    const { data, error } = await authClient.resetPassword({
      newPassword: "resetpassword123", // required
      token, // required
    });

    if (!data) {
      console.log(error);
      return;
    }
    console.log(data?.status);
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      if (!token) {
        toast.error(msg);
        console.log(msg);
        return;
      }
      const { data, error } = await authClient.resetPassword({
        newPassword: password, // required
        token, // required
      });
      if (error) {
        toast.error(error.statusText, { description: error.message });
        return;
      }
      toast.success(data.status);
    } catch (error) {
      if (error instanceof Error) {
        toast.error("error", { description: error.message });
      }
    }
  };

  return (
    <div className="flex grow w-full items-center justify-center bg-transparent">
      <div className="w-full max-w-md glass-effect p-4">
        <h2 className="text-3xl font-extrabold text-center mb-8">
          Enter your new Password
        </h2>
        <div className="mb-6">
          <input
            type="text"
            name="text"
            id="Password"
            placeholder="New Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-700 hover:bg-blue-800 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium py-2 px-4 rounded-lg transition"
          disabled={password ? false : true}
        >
          Reset Password
        </button>
      </div>
    </div>
  );
};

export default resetPassword;
