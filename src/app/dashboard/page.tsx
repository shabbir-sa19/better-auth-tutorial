"use client";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  const { data: session } = authClient.useSession();

  const logout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login"); // redirect to login page
        },
      },
    });
  };

  return (
    <>
      <div className="min-h-full m-auto relative place-items-center">
        {/* border p-8 min-h-full m-auto*/}
        <div className="bg"></div>
        <div className="rounded-2xl p-8 shadow-2xl text-center glass-effect">
          <h1 className="text-3xl font-bold text-white mb-2">
            Welcome to Dashboard
          </h1>
          <p className="font-bold text-white mb-2">{session?.user.name}</p>
          <button onClick={logout} className="button-2">
            Logout
          </button>
        </div>
      </div>
    </>
  );
}
