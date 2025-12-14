import * as React from "react";

interface EmailTemplateProps {
  userName: string;
  verificationUrl: string;
  companyName?: string;
  supportEmail?: string;
}

export const EmailVerificationTemplate: React.FC<
  Readonly<EmailTemplateProps>
> = ({
  userName,
  verificationUrl,
  companyName = "Alam incorp",
  supportEmail = "",
}) => (
  <div className="bg-gray-50 p-5 font-sans">
    <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="bg-linear-to-r from-blue-600 to-purple-600 px-10 py-8 text-center">
        <h1 className="text-3xl font-bold text-white mb-4">
          Verify Your Email Address
        </h1>
        <div className="w-16 h-1 bg-cyan-400 mx-auto rounded-full"></div>
      </div>

      {/* Content */}
      <div className="px-10 py-8">
        <p className="text-lg font-semibold text-gray-900 mb-6">
          Hello {userName},
        </p>

        <p className="text-gray-600 mb-8 leading-relaxed">
          Thank you for signing up for {companyName}! To complete your
          registration and start using your account, please verify your email
          address by clicking the button below:
        </p>

        {/* Verification Button */}
        <div className="text-center my-10">
          <a
            href={verificationUrl}
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg"
          >
            Verify Email Address
          </a>
        </div>

        {/* Alternative Link */}
        <div className="text-center mb-8">
          <p className="text-sm text-gray-500 mb-3">
            Or copy and paste this link in your browser:
          </p>
          <a
            href={verificationUrl}
            className="text-blue-500 hover:text-blue-700 text-sm break-all underline"
          >
            {verificationUrl}
          </a>
        </div>

        {/* Security Notice */}
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
          <p className="text-sm text-blue-800">
            <span className="font-semibold">Security Notice:</span> This
            verification link will expire in 24 hours. If you didn't create an
            account with {companyName}, please ignore this email.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-50 px-10 py-6 border-t border-gray-200 text-center">
        <p className="text-gray-600 text-sm mb-2">
          Need help? Contact our support team at{" "}
          <a
            href={`mailto:${supportEmail}`}
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            {supportEmail}
          </a>
        </p>
        <p className="text-gray-400 text-xs">
          © {new Date().getFullYear()} {companyName}. All rights reserved.
        </p>
      </div>
    </div>
  </div>
);

// Alternative minimalist version
export const MinimalEmailVerificationTemplate: React.FC<
  Readonly<EmailTemplateProps>
> = ({ userName, verificationUrl, companyName = "SocialSphere" }) => (
  <div className="bg-white p-6 font-sans max-w-lg mx-auto">
    <div className="text-center mb-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">
        Verify Your Email
      </h1>
      <div className="w-12 h-1 bg-blue-500 mx-auto"></div>
    </div>

    <p className="text-gray-700 mb-6">
      Hi <span className="font-semibold">{userName}</span>,
    </p>

    <p className="text-gray-600 mb-8">
      Please verify your email address to activate your {companyName} account.
    </p>

    <div className="text-center mb-8">
      <a
        href={verificationUrl}
        className="inline-block w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
      >
        Verify Email
      </a>
    </div>

    <div className="text-center">
      <p className="text-xs text-gray-500 mb-4">
        This link expires in 24 hours
      </p>
      <a
        href={verificationUrl}
        className="text-blue-500 hover:text-blue-700 text-xs break-all"
      >
        {verificationUrl}
      </a>
    </div>
  </div>
);

// Modern card version
export const CardEmailVerificationTemplate: React.FC<
  Readonly<EmailTemplateProps>
> = ({ userName, verificationUrl, companyName = "SocialSphere" }) => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 font-sans flex items-center justify-center">
    <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden">
      {/* Header with gradient */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 text-white text-center">
        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>
        <h1 className="text-2xl font-bold">Email Verification</h1>
        <p className="text-blue-100 mt-2">Welcome to {companyName}</p>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-gray-700 mb-4">
          Hello <span className="font-semibold text-gray-900">{userName}</span>,
        </p>

        <p className="text-gray-600 mb-6">
          You're almost ready to start using {companyName}. Click the button
          below to verify your email address and complete your registration.
        </p>

        {/* Verification Button */}
        <a
          href={verificationUrl}
          className="block w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-4 px-6 rounded-lg text-center transition-all duration-200 transform hover:scale-[1.02] shadow-md hover:shadow-lg mb-6"
        >
          Verify Email Address
        </a>

        {/* Alternative Text */}
        <div className="text-center mb-6">
          <p className="text-sm text-gray-500 mb-2">Or use this link:</p>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
            <a
              href={verificationUrl}
              className="text-blue-500 hover:text-blue-700 text-sm break-all font-mono"
            >
              {verificationUrl}
            </a>
          </div>
        </div>

        {/* Notice */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
          <div className="flex items-start">
            <svg
              className="w-5 h-5 text-amber-500 mt-0.5 mr-2 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-amber-800 text-sm">
              This verification link expires in 24 hours for security purposes.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-50 px-6 py-4 border-t border-gray-200 text-center">
        <p className="text-gray-500 text-xs">
          If you didn't create this account, please ignore this email.
        </p>
      </div>
    </div>
  </div>
);

// Plain text version (for email clients that don't support HTML)
export const EmailVerificationPlainText: React.FC<EmailTemplateProps> = ({
  userName,
  verificationUrl,
  companyName = "SocialSphere",
  supportEmail = "support@socialsphere.com",
}) => (
  <div className="whitespace-pre-wrap font-mono text-sm">
    {`Verify Your Email Address
========================

Hello ${userName},

Thank you for signing up for ${companyName}! To complete your registration 
and start using your account, please verify your email address by visiting:

${verificationUrl}

This verification link will expire in 24 hours.

If you didn't create an account with ${companyName}, please ignore this email.

Need help? Contact our support team: ${supportEmail}

© ${new Date().getFullYear()} ${companyName}. All rights reserved.`}
  </div>
);

// Usage example component
export const EmailExample: React.FC = () => {
  const exampleProps: EmailTemplateProps = {
    userName: "Alex Johnson",
    verificationUrl:
      "https://socialsphere.com/verify-email?token=abc123def456&email=alex@example.com",
    companyName: "SocialSphere",
    supportEmail: "support@socialsphere.com",
  };

  return (
    <div className="space-y-8">
      <EmailVerificationTemplate {...exampleProps} />
    </div>
  );
};
