import WelcomeEmail from "@/components/email";
import { resend } from "@/lib/resend";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const email = searchParams.get("email") as string;
  const user = searchParams.get("user") as string;
  const url = searchParams.get("url") as string;

  const res = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Hello World",
    react: WelcomeEmail({ userFirstname: user }),
  });

  const { data, error } = res;
  console.log(data);
  if (!data?.id) {
    return NextResponse.json(
      { error: `Failed to send email ${error?.message}` },
      { status: error?.statusCode || 500 }
    );
  }
  return NextResponse.json(
    { message: "Email sent successfully" },
    { status: 200 }
  );
}
