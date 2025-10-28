"use client";
import { auth } from "@/lib/auth";
import { authClient } from "@/lib/auth-client";
import { getHeaders } from "better-auth/react";
import { useRouter } from "next/navigation";

import { useState } from "react";

const Logout = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      setIsLoading(true);
      await auth.api.signOut({
        headers: await getHeaders(),
      });
    } catch (error) {
      console.log("An error occurred during log out");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div>
      <button onClick={handleSignOut} className="" disabled={isLoading}>
        Sign Out
      </button>
    </div>
  );
};

export default Logout;
