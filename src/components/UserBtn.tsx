"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";

const UserBtn = () => {
  const session = authClient.useSession();
  if (!session) {
    return (
      <>
        <Link href="/login" className="">
          login
        </Link>
      </>
    );
  }
  return (
    <>
      <div>{session.data?.user.name}</div>
      <button
        className=""
        onClick={async () => {
          await authClient.signOut();
        }}
      >
        Logout
      </button>
    </>
  );
};

export default UserBtn;
