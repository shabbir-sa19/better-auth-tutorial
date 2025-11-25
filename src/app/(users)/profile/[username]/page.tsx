"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

interface UserProfile {
  firstName: string;
  lastName: string;
  email: string;
  bio: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
  website: string;
  twitter: string;
  instagram: string;
}

const Profile = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState("");
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("");
  const router = useRouter();
  const { data: session } = authClient.useSession();

  //   const [profile, setProfile] = useState<UserProfile>(
  //     // {
  //     // firstName: "Alex",
  //     // lastName: "Johnson",
  //     // email: "alex.johnson@example.com",
  //     // bio: "Digital creator and tech enthusiast. Love exploring new technologies and sharing knowledge with the community.",
  //     // address: "123 Main Street, Apt 4B",
  //     // city: "San Francisco",
  //     // state: "CA",
  //     // zipCode: "94105",
  //     // phone: "(555) 123-4567",
  //     // website: "https://alexjohnson.dev",
  //     // twitter: "@alexjohnson",
  //     // instagram: "@alex.johnson",
  //   // }
  // );

  //   useEffect(() => {
  //     if (!session) {
  //       redirect("/login");
  //     }
  //   }, [session]);

  //   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //     const { name, value } = e.target;
  //     // setProfile((prev) => ({
  //     //   ...prev,
  //     //   [name]: value,
  //     // }));
  //   };

  //   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     const file = e.target.files?.[0];
  //     if (file) {
  //       setProfileImage(file);
  //       const reader = new FileReader();
  //       reader.onloadend = () => {
  //         setImagePreview(reader.result as string);
  //       };
  //       reader.readAsDataURL(file);
  //     }
  //   };

  //   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //     e.preventDefault();
  //     setIsLoading(true);

  //     try {
  //       // Simulate API call
  //       await new Promise((resolve) => setTimeout(resolve, 2000));

  //       // In a real application, you would upload the image and update the profile
  //       console.log("Profile data:", profile);
  //       console.log("Profile image:", profileImage);

  //       toast.success("Profile updated successfully!");
  //       router.push("/dashboard");
  //     } catch (error) {
  //       console.error("Error updating profile:", error);
  //       setErrors("Failed to update profile. Please try again.");
  //       toast.error("Failed to update profile");
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  const handleSubmit = () => {};
  return (
    <section className="w-full max-w-4xl mx-auto p-6 font-sans dark:bg-black min-h-screen">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">
          Update Your Profile
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mt-2">
          Keep your information up to date
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Profile Picture Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white flex items-center">
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
            Profile Picture
          </h3>

          <div className="flex flex-col items-center space-y-4">
            <div className="relative">
              <img
                src={
                  imagePreview ||
                  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80"
                }
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover border-4 border-gray-200 dark:border-gray-600"
              />
            </div>

            <label className="cursor-pointer">
              <span className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Change Photo
              </span>
              <input type="file" accept="image/*" className="hidden" />
            </label>
          </div>
        </div>

        {/* Personal Information Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white flex items-center">
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
            </svg>
            Personal Information
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              />
            </div>

            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              />
            </div>

            <div className="md:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              />
            </div>

            <div className="md:col-span-2">
              <label
                htmlFor="bio"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Bio
              </label>
              <textarea
                id="bio"
                name="bio"
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
          </div>
        </div>

        {/* Contact Information Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white flex items-center">
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            Contact Information
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>

            <div>
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>

            <div>
              <label
                htmlFor="state"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                State
              </label>
              <input
                type="text"
                id="state"
                name="state"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>

            <div>
              <label
                htmlFor="zipCode"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                ZIP Code
              </label>
              <input
                type="text"
                id="zipCode"
                name="zipCode"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
          </div>
        </div>

        {/* Online Presence Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white flex items-center">
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
                clipRule="evenodd"
              />
            </svg>
            Online Presence
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label
                htmlFor="website"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Website
              </label>
              <input
                type="url"
                id="website"
                name="website"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="https://example.com"
              />
            </div>

            <div>
              <label
                htmlFor="twitter"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Twitter
              </label>
              <input
                type="text"
                id="twitter"
                name="twitter"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="@username"
              />
            </div>

            <div>
              <label
                htmlFor="instagram"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Instagram
              </label>
              <input
                type="text"
                id="instagram"
                name="instagram"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="@username"
              />
            </div>
          </div>
        </div>

        {/* Error Display */}
        {errors && (
          <div className="text-center text-red-600 text-sm bg-red-50 dark:bg-red-900/20 py-2 rounded-lg">
            {errors}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between">
          <Link
            href="/dashboard"
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors text-center"
          >
            Cancel
          </Link>

          <button
            type="submit"
            disabled={isLoading}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:bg-blue-700 dark:hover:bg-blue-800 border border-transparent disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
          >
            {isLoading ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Updating...
              </>
            ) : (
              "Save Changes"
            )}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Profile;
