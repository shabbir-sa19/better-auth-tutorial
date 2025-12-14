"use client";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
// newpassword1234

const ChangePassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const bodyContent = new FormData(e.currentTarget);
      const formObject = Object.fromEntries(bodyContent.entries());
      const { currentPassword, newpassword, confirmpassword } = formObject;

      if (newpassword !== confirmpassword) {
        toast.error("Error", { description: "Passwords do not match" });
        return;
      }
      const { data, error } = await authClient.changePassword({
        newPassword: newpassword as string, // required
        currentPassword: currentPassword as string, // required
        revokeOtherSessions: true,
      });
      if (error) {
        toast.error("Error", { description: error.message });
        return;
      }
      console.log(data?.token);
      toast.success("your password has changed");
      redirect("/");
    } catch (error) {
      if (error instanceof Error) {
        toast.error("Error", { description: error.message });
      }
      toast.error("An unexpexted server error");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="items-center justify-center place-items-center self-center p-4 m-auto glass-effect">
      <div className="text-center">
        <h2 className="mt-6 text-3xl font-extrabold">Change your Password</h2>
      </div>
      {/* The Form */}
      <form className="mt-8 space-y-8" onSubmit={handleSubmit}>
        <div className="rounded-md space-y-4">
          <div>
            <label htmlFor="currentPassword" className="sr-only">
              Old Password
            </label>
            <input
              id="currentPassword"
              name="currentPassword"
              // type="password"
              required
              className="relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 rounded-lg"
              placeholder="Old Password"
            />
          </div>
          <div>
            <label htmlFor="newpassword" className="sr-only">
              New Password
            </label>
            <input
              id="newpassword"
              name="newpassword"
              // type="password"
              required
              className="appearance-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-200 rounded-lg"
              placeholder="New Password"
            />
          </div>
          <div>
            <label htmlFor="confirmpassword" className="sr-only">
              Confirm New Password
            </label>
            <input
              id="confirmpassword"
              name="confirmpassword"
              // type="password"
              required
              className="appearance-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-200 rounded-lg"
              placeholder="Confirm Password"
            />
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 hover:shadow-lg hover:cursor-pointer"
          >
            Change Password
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
