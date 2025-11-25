import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

interface WelcomeEmailProps {
  userName: string;
}

const baseUrl = process.env.BETTER_AUTH_URL || "http://localhost:3000/";

export const WelcomeEmail = ({ userName }: WelcomeEmailProps) => (
  <Tailwind>
    <h2 className="">Welcome {userName},</h2>
    <Button
      className="box-border w-full rounded-lg bg-indigo-600 px-3 py-3 text-center font-semibold text-white"
      href={baseUrl}
    >
      Get started
    </Button>
  </Tailwind>
);

export default WelcomeEmail;
