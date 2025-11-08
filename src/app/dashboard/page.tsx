"use client";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  const { data: session } = authClient.useSession();
  if (!session) {
    router.push("/login");
  }
  return (
    <div className="flex flex-col h-full items-center justify-center">
      <p>Welcome, {session?.user.name}</p>
      <p>Dashboard</p>
    </div>
  );
}
