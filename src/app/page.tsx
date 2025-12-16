"use client";
import { useEffect } from "react";
import { toast } from "sonner";

export default function Home() {
  useEffect(() => {
    const theme = window.localStorage.getItem("theme");
    if (theme === "light") {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, []);

  const handleclick = async () => {
    try {
    } catch (error) {}
  };
  return (
    <>
      <main className="flex grow font-sans justify-center items-center">
        <div className="m-auto place-items-center justify-center items-center border px-4 py-4 glass-effect">
          <h1 className="text-4xl font-bold mb-4">Welcome to Home Page</h1>
          <p className="text-lg">This is centered text on the screen</p>
          <div className="mt-2">
            <button
              className="px-6 py-2 border rounded-lg hover:cursor-pointer"
              onClick={handleclick}
            >
              Signup
            </button>
          </div>
        </div>
      </main>

      {/* <div className="flex grow w-full justify-center items-center">
        <div className="w-64 border h-64 flex justify-center items-center">
          1
        </div>
        <div className="w-64 border h-64 flex justify-center items-center">
          2
        </div>
        <div className="w-64 border h-64 flex justify-center items-center">
          3
        </div>
      </div> */}
    </>
  );
}
