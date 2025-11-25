import verifyEmail from "@/templeates/emails/verifyEmail";
import { resend } from "./resend";

export async function sendVerifyEmail({
  to,
  from,
  token,
  url,
  subject,
  userName,
}: {
  to: string;
  from?: string;
  token: string;
  subject?: string;
  url?: string;
  userName: string;
}): Promise<void> {
  await resend.emails.send({
    from: "testing@resend.dev",
    to,
    subject: subject || "Verify your email address",
    react: verifyEmail({
      userName: userName,
      url: url || `${process.env.BETTER_AUTH_URL}/verify?token=${token}`,
    }),
  });
}
export async function sendResetPasswordEmail({
  to,
  from,
  token,
  url,
  subject,
  userName,
}: {
  to: string;
  from?: string;
  token?: string;
  subject?: string;
  url?: string;
  userName?: string;
}) {}
