"use client";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Logout = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      setIsLoading(true);
      authClient.signOut();
    } catch (error) {
      console.log("An error occurred during log out");
    } finally {
      setIsLoading(false);
      router.push("/login");
    }
  };
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <button onClick={handleSignOut} className="" disabled={isLoading}>
        Sign Out
      </button>
    </div>
  );
};

export default Logout;
