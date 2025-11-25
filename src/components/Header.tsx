"use client";
import UserBtn from "@/components/UserBtn";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  return (
    <header className="max-h-12 w-full fixed z-50 body-font">
      <nav className="md:container flex mx-auto md:flex-row justify-between items-center p-4">
        <a className="flex title-font font-medium items-center mb-4 md:mb-0">
          <span className="ml-3 text-xl">{usePathname()}</span>
        </a>
        <div className="flex flex-wrap items-center text-base justify-center">
          <Link className="mr-5" href="/">
            Home
          </Link>
          <Link className="mr-5" href="/dashboard">
            Dashboard
          </Link>
          <Link className="mr-5" href="/login">
            login
          </Link>
          <Link className="mr-5" href="/register">
            register
          </Link>
          <Link className="mr-5" href="/debug">
            debug
          </Link>
          <Link className="mr-5" href="/profile">
            Profile
          </Link>
          <UserBtn />
        </div>
      </nav>
    </header>
  );
};

export default Header;
