import { connectToDatabase } from "@/lib/dbConnect";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  // await connectToDatabase();
  try {
    const data = await request.json();
    console.log(data);
  } catch (error) {}
}
