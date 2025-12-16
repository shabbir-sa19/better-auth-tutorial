"use client";
import UserBtn from "@/components/UserBtn";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  let pathname = usePathname();

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  const isActive = (path: string): boolean => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/dashboard", label: "Dashboard" },
    { href: "/login", label: "Login" },
    { href: "/signup", label: "Register" },
    { href: "/debug", label: "Debug" },
    { href: "/test", label: "Test" },
  ];

  return (
    <header className="sticky top-0 z-50 shadow-sm border-b-2 w-full">
      <nav className="max-w-full mx-0 px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="shrink-0">
          <span className="text-2xl font-bold">
            {pathname === "/"
              ? "HOME"
              : pathname.substring(1).toLocaleUpperCase()}
          </span>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={toggleNav}
          type="button"
          className="inline-flex items-center justify-center p-2 rounded-md md:hidden transition ease-in-out "
          aria-expanded="false"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Navigation links */}
        <div
          className={`${isOpen ? "flex" : "hidden"} md:flex absolute md:relative top-20 md:top-0 left-0 right-0 md:left-auto md:right-auto flex-col md:flex-row gap-1 md:gap-0 bg-dark border-b md:border-b-0 border-gray-200 dark:border-gray-700 md:p-0`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeNav}
              className={`px-4 py-2 min-w-24 rounded-sm text-sm font-medium md:text-center ease-in-out transition-all ${
                isActive(link.href)
                  ? "bg-blue-600 text-white dark:bg-blue-500"
                  : "hover:bg-gray-500"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* User button */}
        <div className="hidden md:flex items-center ml-2">
          <UserBtn />
        </div>
      </nav>
    </header>
  );
};

export default Header;
