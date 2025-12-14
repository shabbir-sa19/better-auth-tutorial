"use client";
import { useEffect } from "react";
import { toast } from "sonner";

export default function Home() {
  useEffect(() => {
    // toast("welcome to homepage", { description: "desc" });
  }, []);

  const handleclick = async () => {
    try {
    } catch (error) {}
  };
  return (
    <>
      <main className="flex grow font-sans justify-center items-center">
        {/* <div
          className="absolute inset-0 -z-40"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(16, 185, 129, 0.25), transparent 70%), #000000",
          }}
        ></div> */}
        <div className="m-auto place-items-center justify-center items-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Welcome to Home Page
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            This is centered text on the screen
          </p>
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

      {/* 
      <div className="flex grow w-full justify-center items-center">
        <div className="w-64 border border-red-600 h-64">1</div>
        <div className="w-64 border border-red-600 h-64">2</div>
        <div className="w-64 border border-red-600 h-64">3</div>
      </div>
      */}
    </>
  );
}
