"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";

const UserBtn = () => {
  const { data: session } = authClient.useSession();
  if (!session) {
    return (
      <>
        <Link
          href="/login"
          className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
        >
          Login
        </Link>
      </>
    );
  }
  return (
    <>
      <div className="">
        <button
          className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
          onClick={async () => {
            await authClient.signOut();
          }}
        >
          Logout
        </button>
      </div>
    </>
  );
};

export default UserBtn;
