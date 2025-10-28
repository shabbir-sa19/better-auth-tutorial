// app/debug/page.tsx
"use client";

import { authClient } from "@/lib/auth-client";

import { useState } from "react";

export default async function DebugPage() {
  let session = authClient.useSession();
  console.log(session);
  let vjv = authClient.getSession();
  console.log(vjv);
  const [isLoading, setIsLoading] = useState(false);
  const [sessionData, setSessionData] = useState<any>(null);

  const checkSession = async () => {
    const { data } = await authClient.getSession();
    console.log(data);
    setSessionData(data);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-8 space-y-6">
      <h1 className="text-2xl font-bold">Debug Information</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">Session State</h2>
          <pre className="bg-gray-100 p-2 rounded text-sm">
            {JSON.stringify({ session }, null, 2)}
          </pre>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">Raw Session Data</h2>
          <button
            onClick={checkSession}
            className="mb-2 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Check Session
          </button>
          <pre className="bg-gray-100 p-2 rounded text-sm">
            {JSON.stringify(sessionData, null, 2)}
          </pre>
        </div>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-2">Test Actions</h2>
        <div className="space-x-2">
          <button
            onClick={() => authClient.signOut()}
            className="px-4 py-2 bg-red-500 text-white rounded"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}
