import { betterAuth } from "better-auth";
import clientPromise from "@/lib/mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { nextCookies } from "better-auth/next-js";
import { sendResetPasswordEmail, sendVerifyEmail } from "./sendEmail";

const DBNAME = process.env.DBNAME || "Demo_Database";
const client = await clientPromise;
const db = client.db(DBNAME);

export const auth = betterAuth({
  baseURL: process.env.NEXT_APP_URL || "http://localhost:3000",

  database: mongodbAdapter(db, { client }),

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },

  emailAndPassword: {
    enabled: true,
    sendResetPassword: async ({ user, url, token }, request) => {
      await sendResetPasswordEmail({
        to: user.email,
        userName: user.name,
        subject: "Reset your password",
        url,
      });
    },

    onPasswordReset: async ({ user }, request) => {
      // your logic here
      console.log(`Password for user ${user.email} has been reset.`);
    },
  },

  emailVerification: {
    sendOnSignUp: true,
    sendVerificationEmail: async ({ user, url, token }, request) => {
      await sendVerifyEmail({
        to: user.email,
        userName: user.name,
        subject: "Verify your email address",
        token,
        url,
      });
    },
  },
  plugins: [nextCookies()],
});
