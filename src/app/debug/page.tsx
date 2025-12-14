// app/debug/page.tsx
"use client";

import { authClient } from "@/lib/auth-client";
import { APIError } from "better-auth";
import { useState } from "react";
import { toast } from "sonner";

export default function DebugPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<any>("");
  const errors = [];

  const checkSession = async () => {
    setIsLoading(true);

    const { data: session, error } = await authClient.getSession();
    try {
      setData(session);
    } catch (err) {
      setData(error?.message?.toString());
    } finally {
      setIsLoading(false);
    }
  };
  const handleSignUp = async () => {
    setIsLoading(true);
    try {
      const headersList = {
        "Content-Type": "application/json",
      };

      const email = "john.doe@example.com";

      const response = await fetch("/api/user/register", {
        method: "POST",
        headers: headersList,
        body: JSON.stringify({
          name: email.toString().split("@")[0],
          email: email.trim().toLowerCase(),
          password: "password1234",
        }),
      });
      const { data, error } = await response.json();

      if (!response.ok) {
        errors.push(error);
        setData(error);
        return;
      }
      console.log(data);
      setData(data);
      return;
    } catch (error) {
      errors.push(error);
      setData(error);
    } finally {
      setIsLoading(false);
    }
  };
  const handleLogin = async () => {
    setIsLoading(true);
    const email = "john.doe@example.com";
    try {
      const headersList = {
        Accept: "*/*",
        "Content-Type": "application/json",
      };
      const body = JSON.stringify({
        email: email.toLowerCase(),
        password: "password1234",
        rememberMe: true,
      });
      const response = await fetch("api/user/login", {
        method: "POST",
        headers: headersList,
        body,
      });
      const { data, error } = await response.json();
      const e = error as APIError;
      if (!response.ok) {
        console.log(e);
        toast.error(e.message.toString());
        return;
      }
      console.log(response);
      console.log(data);
      setData(data);
      toast.success("login Sucessfully");
    } catch (error) {
      const e = error as APIError;
      toast.error(e.message.toString());
      setData(e);
    } finally {
      setIsLoading(false);
    }
  };
  const handleMailer = async () => {
    setData("mailer function is not implimented");
  };
  const toaster = async () => {
    toast("Testing...", { description: "description" });
    setTimeout(() => {
      toast.success("Testing...", { description: "success" });
      setTimeout(() => {
        toast.error("Testing...", { description: "error" });
      }, 1000);
    }, 1000);
  };
  const _google = async () => {
    try {
      await authClient.signIn.social({
        provider: "google",
      });
      toast.success("login Sucessfully");
    } catch (error) {
      toast.error("an error occerred");
    }
  };
  if (isLoading) {
    return (
      <div className="flex grow min-h-full items-center justify-center font-sans">
        Loading...
      </div>
    );
  }

  return (
    <>
      <section className="m-auto w-full p-8 space-y-6 mt-0">
        <h1 className="text-2xl font-bold">Debug Information</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 p-2">
          <div className="md:col-span-2">
            <h2 className="text-lg font-semibold mb-2">Data</h2>
            <pre className="text-sm font-mono text-wrap">
              {JSON.stringify({ data }, null, 2)}
            </pre>
          </div>
          <div className="md:-col-end-1">
            <h2 className="text-lg font-semibold mb-2">Test Functions</h2>
            <div className="flex flex-col m-2">
              <button onClick={checkSession} className="button">
                Check Session
              </button>
              <button onClick={() => authClient.signOut()} className="button">
                log Out
              </button>
              <button onClick={handleSignUp} className="button">
                Sign in
              </button>
              <button onClick={handleLogin} className="button">
                Log In
              </button>
              <button onClick={_google} className="button">
                Sign up with google
              </button>
              <button
                onClick={() => {
                  setIsLoading(true);
                  setTimeout(() => {
                    console.log("Loader Test");
                    setIsLoading(false);
                  }, 2000);
                }}
                className="button"
              >
                Test Loader
              </button>
              <button
                onClick={() => {
                  toaster();
                }}
                className="button"
              >
                Toaster
              </button>
              <button onClick={() => {}} className="button"></button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
