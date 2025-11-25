"use client";
import { useEffect } from "react";
import { toast } from "sonner";

export default function Home() {
  useEffect(() => {
    toast("welcome to homepage", { description: "desc" });
  }, []);

  const handleclick = async () => {
    try {
    } catch (error) {}
  };
  return (
    <div className="w-full min-h-full m-auto place-items-center font-sans">
      <div
        className="absolute inset-0 -z-40"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(16, 185, 129, 0.25), transparent 70%), #000000",
        }}
      />
      <div className="min-h-full m-auto relative place-items-center">
        <h1>HomePage</h1>
      </div>
      {/* <button onClick={handleclick}>signup</button> */}
    </div>
  );
}
