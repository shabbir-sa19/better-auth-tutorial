import React from "react";
import UserBtn from "@/components/UserBtn";
import Link from "next/link";

const Header = () => {
  return (
    <div>
      <nav>
        <div className="flex flex-wrap m-5 gap-3">
          <Link href="/">Home</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/login">login</Link>
          <Link href="/register">register</Link>
          <Link href="/debug">debug</Link>
          <Link href="/">Home</Link>
        </div>
        <div className="">
          <UserBtn />
        </div>
      </nav>
    </div>
  );
};

export default Header;
