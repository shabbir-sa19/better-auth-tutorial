import { MongoClient, MongoClientOptions } from "mongodb";

// 1. Get URI and throw error if not found
const uri = process.env.MONGODB_URI || "mongodb://localhost:27017";
if (!uri) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

// 2. Define client options
const options: MongoClientOptions = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
  // In development, cache the connection promise on the global object
  // to prevent creating new connections on every hot reload
  const globalWithMongo = global as typeof globalThis & {
    _mongoClientPromise?: Promise<MongoClient>;
  };

  if (!globalWithMongo._mongoClientPromise) {
    client = new MongoClient(uri, options);
    globalWithMongo._mongoClientPromise = client.connect();
  }
  clientPromise = globalWithMongo._mongoClientPromise;
} else {
  // In production, just create a new client and promise
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

// Export a promise that resolves to the connected MongoClient
export default clientPromise;
