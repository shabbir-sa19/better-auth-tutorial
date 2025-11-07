import { MongoClient } from "mongodb";
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;
const DBNAME = process.env.DBNAME || "portfolio";

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI");
}

const client = new MongoClient(MONGODB_URI);
const db = client.db();
// Global is used here to maintain a cached connection across hot reloads in development

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export const connectToDatabase = async () => {
  // 1. Return cached connection if available
  if (cached.conn) {
    return cached.conn;
  }
  // 2. Return cached promise if available
  if (!cached.promise) {
    const options = {
      useNewUrlParser: true,
      bufferCommands: false,
    };
    // 3. Create the connection promise
    cached.promise = mongoose
      .connect(`${MONGODB_URI}/${DBNAME}`, options)
      .then((mongoose) => {
        return mongoose.connection;
      });

    try {
      cached.conn = await cached.promise;
    } catch (error) {
      // Reset the promise on error to allow retries
      cached.promise = null;
      console.error("MongoDB connection error:", error);
      process.exit(1);
    }
    return cached.conn;
  }
};
