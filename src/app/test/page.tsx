"use client";

import Link from "next/link";
import ResetEmail from "@/templeates/emails/ResetEmail";
import VerifyEmail from "@/templeates/emails/VerifyEmail";

type Props = {};

const TestPage = (props: Props) => {
  const logout = async (params: any) => {
    const theme = document.documentElement.getAttribute("data-theme");

    if (theme === "light") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  };
  return (
    <>
      <main className="h-full self-center p-4 m-auto items-center justify-center">
        {/* <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "repeating-linear-gradient(45deg, #000 0px, #111 2px, #000 4px, #222 6px)",
          }}
        ></div> */}
        <div
          className="absolute inset-0 -z-10 pointer-events-none"
          style={{
            background: "rgba(255, 255, 255, 0.02)",
            backdropFilter: "blur(45px) grayscale(20%)",
            WebkitBackdropFilter: "blur(45px) grayscale(20%)",
          }}
        ></div>

        <div className="text-center shadow-2xl rounded-2xl border p-4 glass-effect">
          <h1 className="text-4xl font-bold mb-4">Welcome to Test Page</h1>
          <p className="text-lg">This is centered text on the screen</p>
          <button onClick={logout} className="button-2">
            Logout
          </button>
          <ul>
            <li>
              <Link className="mr-2 button" href={"/change-password"}>
                change password
              </Link>
            </li>
            <li>
              <Link className="mr-2 button" href={"/forgot-password"}>
                frogotpassword
              </Link>
            </li>
            <li>
              <Link className="mr-2 button" href={"/reset-password"}>
                reset password
              </Link>
            </li>
          </ul>
        </div>
        <ResetEmail userName="testUser" url="http://localhost:3000" />
      </main>
    </>
  );
};

export default TestPage;
