import {
  Button,
  Head,
  Hr,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

interface verifyEmailProps {
  userName: string;
  url: string;
}

const verifyEmail = ({ userName, url }: verifyEmailProps) => {
  return (
    <Tailwind>
      <Head />
      <Preview>Welcome! Please Verify Your Email Address</Preview>
      <Section className="bg-gray-800 text-gray-200">
        <h2 className="text-2xl">Welcome {userName},</h2>
        <Text className="text-base leading-6 ">
          Please click the button below to verify your email and activate your
          account.
        </Text>
        <Button
          className="bbg-green-600 text-white text-base font-semibold py-3 px-6 rounded-lg transition duration-150 hover:bg-green-700"
          href={url}
        >
          Verify Email Address
        </Button>
        <Text className="text-sm text-gray-600 leading-6">
          If you did not sign up for an account, you can safely ignore this
          email.
        </Text>
        <Hr className="my-4 border-gray-300 border-t-2" />
        <Text className="text-xs text-gray-400 mt-4">
          This email was sent by the Application Team please do not reply to
          this Email.
        </Text>
      </Section>
    </Tailwind>
  );
};

export default verifyEmail;
