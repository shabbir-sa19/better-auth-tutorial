"use client";
import { authClient } from "@/lib/auth-client";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

const UserBtn = () => {
  const { data: session } = authClient.useSession();
  const router = useRouter();
  const path = usePathname();

  if (!session) {
    if (path === "/login") {
      return <></>;
    }
    return (
      <Link href="/login" className="button-2">
        Login
      </Link>
    );
  }

  return (
    <button
      className="button-2"
      onClick={async () => {
        await authClient.signOut({
          fetchOptions: {
            onSuccess: () => {
              router.push("/login");
            },
          },
        });
      }}
    >
      Logout
    </button>
  );
};

export default UserBtn;
