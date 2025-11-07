"use client";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  const { data: session } = authClient.useSession();
  if (!session) {
    console.log("dashboard");
    // router.push("/");
  }
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      Dashboard
    </div>
  );
}
