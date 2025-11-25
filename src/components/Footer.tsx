import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full z-50 bottom-0 mt-auto sm:flex sm:items-center sm:justify-between p-4 sm:p-6 xl:p-8 bg-black justify-around">
      <div className="">
        <p className="mb-4 text-sm text-center text-gray-500 dark:text-gray-400 sm:mb-0">
          &copy; {new Date().getFullYear()} Shabbir Alam | All Right Reserved
        </p>
      </div>
      <ul className="flex justify-center items-center space-x-1">
        <li>
          <Link href={"/"}></Link>
        </li>
        <li>
          <Link href={"/"}></Link>
        </li>
        <li>
          <Link href={"/"}></Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
