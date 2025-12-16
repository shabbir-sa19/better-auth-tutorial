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
    <Section className="bg-gray-700 text-gray-200">
      <h2 className="">Welcome {userName},</h2>
      <Button
        className="box-border w-full rounded-lg bg-indigo-600 px-3 py-3 text-center font-semibold text-white"
        href={baseUrl}
      >
        Get started
      </Button>
      <Hr className="my-4 border-gray-300 border-t-2" />
      <Text className="text-xs text-gray-400 mt-4">
        This email was sent by the Application Team please do not reply to this
        Email.
      </Text>
    </Section>
  </Tailwind>
);

export default WelcomeEmail;
