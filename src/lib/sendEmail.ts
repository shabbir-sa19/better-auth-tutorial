import verifyEmail from "@/templeates/emails/VerifyEmail";
import { resend } from "./resend";
import resetEmail from "@/templeates/emails/ResetEmail";

type props = {
  to: string;
  subject: string;
  userName: string;
  url: string;
  from?: string;
  token?: string;
};

export async function sendVerifyEmail({
  to,
  subject,
  url,
  userName,
  token,
}: props): Promise<void> {
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
  url,
  subject,
  userName,
}: props): Promise<void> {
  await resend.emails.send({
    from: "testing@resend.dev",
    to,
    subject: subject || "Reset your password",
    react: resetEmail({ userName, url }),
  });
}
