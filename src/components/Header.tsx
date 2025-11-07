"use client";
import UserBtn from "@/components/UserBtn";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  return (
    <div className="max-h-24 w-full">
      <nav className="flex flex-row justify-between items-center mx-8 my-0">
        <div className="m-2">{usePathname()}</div>
        <div className="flex flex-wrap m-2 mx-8 gap-4 items-center">
          <Link href="/">Home</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/login">login</Link>
          <Link href="/register">register</Link>
          <Link href="/debug">debug</Link>
          {/* <Link href="/">Home</Link> */}
          <UserBtn />
        </div>
      </nav>
    </div>
  );
};

export default Header;
