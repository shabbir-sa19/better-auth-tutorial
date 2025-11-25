import { auth } from "@/lib/auth";
import { APIError } from "better-auth";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    // Parse JSON body
    const body = await request.json();
    const { email, password, rememberMe } = body;
    const data = await auth.api.signInEmail({
      headers: await headers(),
      body: {
        email,
        password,
        rememberMe,
      },
    });
    if (!data.user) {
      return NextResponse.json({ error: "User NOT Found" }, { status: 401 });
    }
    return NextResponse.json({ message: data }, { status: 200 });
  } catch (error) {
    const e = error as APIError;
    return NextResponse.json(
      { error: e.message },
      { status: e.statusCode || 400 }
    );
  }
}
