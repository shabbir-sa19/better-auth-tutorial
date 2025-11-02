// app/debug/page.tsx
"use client";

import { authClient } from "@/lib/auth-client";

import { useState } from "react";

export default function DebugPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [sessionData, setSessionData] = useState<any>("");

  const checkSession = async () => {
    setIsLoading(true);
    const { data: session, error } = await authClient.getSession();
    setSessionData(session);
    setIsLoading(false);
  };
  const handleSignIn = async () => {
    setIsLoading(true);
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/dashboard",
      });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        Loading...
      </div>
    );
  }

  return (
    <div className="p-8 space-y-6">
      <h1 className="text-2xl font-bold">Debug Information</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className=" p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">Session State</h2>
          <pre className=" p-2 rounded text-sm">
            {JSON.stringify({ sessionData }, null, 2)}
          </pre>
        </div>
        <div className=" p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">Raw Session Data</h2>
          <button
            onClick={checkSession}
            className="mb-2 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Check Session
          </button>
        </div>
        <div className=" p-4 rounded shadow"></div>
        <div className=" p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">Test Actions</h2>
          <div className="space-x-2">
            <button
              onClick={() => authClient.signOut()}
              className="px-4 py-2 bg-red-500 text-white rounded"
            >
              Sign Out
            </button>
            <button
              onClick={handleSignIn}
              className="px-4 py-2 bg-red-500 text-white rounded"
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
