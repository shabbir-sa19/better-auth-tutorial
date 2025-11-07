import { auth } from "@/lib/auth";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";

export default function Home() {
  const handleclick = async () => {
    try {
    } catch (error) {}
  };
  return (
    <div className="flex mb-0 w-full min-h-full items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      HomePage
      {/* <button onClick={handleclick}>signup</button> */}
    </div>
  );
}
