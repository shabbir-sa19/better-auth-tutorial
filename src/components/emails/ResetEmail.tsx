import {
  Button,
  Head,
  Hr,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

type Props = {
  userName?: string;
  url?: string;
};

const resetEmail = ({ userName, url }: Props) => {
  return (
    <Tailwind>
      <Head />
      <Preview>Password Reset Request for Your Account</Preview>
      <Section className="bg-gray-800 text-gray-200">
        <h2 className="text-2xl">Hi, {userName},</h2>
        <Text className="text-base leading-6 ">
          We received a request to reset the password for your account. To
          proceed, please click the button below. This link is valid for a
          limited time.
        </Text>
        <Button
          href={url}
          className="bg-indigo-600 text-white text-base font-semibold py-3 px-6 rounded-lg transition duration-150 hover:bg-indigo-700"
        >
          Reset Your Password
        </Button>
        <Text className="text-sm text-gray-600 leading-6">
          If you did not request a password reset, please ignore this email.
          Your current password will remain unchanged. To keep your account
          secure, please don&apos;t forward this email to anyone. See our Help
          Center for more details.
        </Text>
        <Hr className="my-4 border-gray-300 border-t-2" />
        <Text className="text-xs text-gray-400 mt-4">
          This email was sent by the Application Team. Please do not reply to
          this Email.
        </Text>
      </Section>
    </Tailwind>
  );
};

export default resetEmail;
