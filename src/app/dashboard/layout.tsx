"use client";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { data: session } = authClient.useSession();

  useEffect(() => {
    if (!session) {
      router.push("/login");
    }
  }, [session]);
  return (
    <>
      <div className="w-full min-h-full m-auto bg-black">
        {/* X Organizations Black Background with Top Glow */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(120, 180, 255, 0.25), transparent 70%), #000000",
          }}
        />
        {/* Your Content/Components */}
        {children}
        {/* <div className="border grid place-items-center relative">
          <div className="rounded-2xl p-8 shadow-2xl">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-white mb-2">
                Welcome to Dashboard
              </h1>
              <p className="text-gray-400">Select an option to get started</p>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}
