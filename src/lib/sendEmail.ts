import { resend } from "./resend";
import verifyEmail from "@/components/emails/VerifyEmail";
import ResetEmail from "@/components/emails/ResetEmail";

type EmailProps = {
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
}: EmailProps): Promise<void> {
  await resend.emails.send({
    from: "testing@resend.dev",
    to,
    subject: subject || "Verify your email address",
    react: verifyEmail({ userName, url }),
  });
}
export async function sendResetPasswordEmail({
  to,
  url,
  subject,
  userName,
}: EmailProps): Promise<void> {
  await resend.emails.send({
    from: "testing@resend.dev",
    to,
    subject: subject || "Reset your password",
    react: ResetEmail({ userName, url }),
  });
}
