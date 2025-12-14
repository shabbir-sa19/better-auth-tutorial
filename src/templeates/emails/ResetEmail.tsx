import { Button, Head, Section, Tailwind, Text } from "@react-email/components";

type Props = {
  userName?: string;
  url?: string;
};

const resetEmail = ({ userName, url }: Props) => {
  return (
    <Tailwind>
      <Head />
      <Section className="">
        <h2 className="text-center">Reset your password</h2>
        <Text className="text-base text-gray-700">Hi, {userName},</Text>
        <Text className="text-base text-gray-700 leading-6">
          We received a request to reset the password for your account. To
          proceed, please click the button below. This link is valid for a
          limited time.
        </Text>
        <Button
          href={url}
          className="bg-indigo-600 text-white text-base font-semibold py-3 px-6 rounded-lg transition duration-150 hover:bg-indigo-700"
        >
          Reset Password
        </Button>
        <Text className="text-sm text-gray-600 leading-6">
          If you did not request a password reset, please ignore this email.
          Your current password will remain unchanged. To keep your account
          secure, please don&apos;t forward this email to anyone. See our Help
          Center for{" "}
        </Text>
        <Text className="text-xs text-gray-400 mt-4">
          This email was sent by the Application Team. Please do not reply to
          this message.
        </Text>
      </Section>
    </Tailwind>
  );
};

export default resetEmail;
