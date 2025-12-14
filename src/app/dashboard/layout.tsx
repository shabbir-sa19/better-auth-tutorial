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
      <div className="w-full flex grow m-auto">{children}</div>
    </>
  );
}
