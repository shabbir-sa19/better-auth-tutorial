import { betterAuth } from "better-auth";
import clientPromise from "@/lib/mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const DBNAME = process.env.DBNAME || "myDatabase";
const client = await clientPromise;
const db = client.db(DBNAME);

export const auth = betterAuth({
  baseURL: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  database: mongodbAdapter(db, {
    client,
  }),
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
  emailAndPassword: {
    enabled: true,
  },
  plugins: [],
});
