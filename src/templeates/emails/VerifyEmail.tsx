import { Button, Hr, Section, Tailwind, Text } from "@react-email/components";

interface verifyEmailProps {
  userName: string;
  url: string;
}

const verifyEmail = ({ userName, url }: verifyEmailProps) => {
  return (
    <Tailwind>
      <Section className="text-center">
        <h2 className="">Welcome {userName},</h2>
        <Text>Hello my section!</Text>
        <Button
          className="box-border w-full rounded-lg bg-indigo-600 px-3 py-3 text-center font-semibold text-white"
          href={url}
        >
          Get started
        </Button>
      </Section>
      <Hr className="my-4 border-gray-300 border-t-2" />
      <Section className="text-center"></Section>
    </Tailwind>
  );
};

export default verifyEmail;
