"use client";
import { authClient } from "@/lib/auth-client";
export default function Dashboard() {
  const { data: session } = authClient.useSession();

  return (
    <>
      <div className="min-h-full m-auto relative place-items-center">
        {/* border p-8 min-h-full m-auto*/}
        <div className="rounded-2xl p-8 shadow-2xl text-center">
          <h1 className="text-3xl font-bold text-white mb-2">
            Welcome to Dashboard
          </h1>
          <p className="font-bold text-white mb-2">{session?.user.name}</p>
        </div>
      </div>
    </>
  );
}
