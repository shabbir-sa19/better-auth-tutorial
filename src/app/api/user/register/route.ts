import { auth } from "@/lib/auth";
import { APIError } from "better-auth";
import { NextRequest, NextResponse } from "next/server";

const validateInput = (data: any) => {
  const errors = [];

  // Validate required fields
  if (!data.name || !data.email || !data.password) {
    errors.push("Name, email, and password are required");
  }

  // Name validation
  if (!data.name || data.name.trim().length < 2) {
    errors.push("Name must be at least 2 characters long");
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email)) {
    errors.push("Valid email is required");
  }

  // Password validation
  if (!data.password || data.password.length < 6) {
    errors.push("Password must be at least 6 characters long");
  }

  return errors;
};

export async function POST(request: NextRequest) {
  const errors = [];
  let msg: string;
  try {
    // Parse JSON body
    const body = await request.json();
    const { name, email, password } = body;

    // extract Form data from body
    // const formData = await request.formData();
    // const name = formData.get("name")?.toString() as string;
    // const email = formData.get("email")?.toString() as string;
    // const password = formData.get("password");

    const validationError = validateInput(body);

    if (validationError.length > 0) {
      return NextResponse.json({ error: validationError }, { status: 400 });
    }

    const response = await auth.api
      .signUpEmail({
        body: {
          name: name, // required
          email: email, // required
          password: password as string, // required
          rememberMe: true,
        },
      })
      .then((res) => {
        return NextResponse.json({ message: res }, { status: 200 });
      })
      .catch((err) => {
        if (err instanceof APIError) {
          return NextResponse.json(
            { error: err.message.toString() },
            { status: err.statusCode }
          );
        }
      });
    console.log(response);
    return NextResponse.json({ message: response }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err?.toString() }, { status: 500 });
  }
}

export function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("_id");
    return NextResponse.json({ message: query }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
  // query is "hello" for /api/search?query=hello
}
export async function PUT(request: NextRequest) {}

export async function DELETE(request: NextRequest) {}
