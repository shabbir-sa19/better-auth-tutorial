"use client";
import UserBtn from "@/components/UserBtn";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  return (
    <header className="h-14 w-full z-50 body-font border-b">
      <nav className="flex mx-auto md:container md:flex-row justify-between items-center">
        <a className="flex title-font font-medium items-center">
          <span className="ml-3 text-xl">{usePathname()}</span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2"
              d="M5 7h14M5 12h14M5 17h14"
            />
          </svg>
        </button>
        <div className="inline-flex align-middle items-center justify-end">
          <ul className="">
            <Link className={`mr-5`} href="/">
              Home
            </Link>
            <Link className="mr-5" href="/dashboard">
              Dashboard
            </Link>
            <Link className="mr-5" href="/login">
              login
            </Link>
            <Link className="mr-5" href="/signup">
              register
            </Link>
            <Link className="mr-5" href="/debug">
              debug
            </Link>
            <Link className="mr-5" href="/test">
              Test
            </Link>
          </ul>
          {/* <div className="border m-1 p-1">aaa</div> */}
          <UserBtn />
        </div>
      </nav>
    </header>
  );
};

export default Header;
