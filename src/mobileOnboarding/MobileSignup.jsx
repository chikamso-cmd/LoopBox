import React, { useState } from "react";
import { ArrowLeft, User, Mail, Lock } from "lucide-react";
import { StatusBar } from "./logincomponents/StatusBar";
import { InputField } from "./logincomponents/InputField";
import { SocialButton } from "./logincomponents/SocialButton";

const MobileSignup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleUpdate = () => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleCreateAccount = () => {
    console.log("Account created with:", formData);
    alert("Account creation simulated!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      {/* Phone Mockup Container */}
      <div className="w-full max-w-[390px] bg-white rounded-[40px] shadow-2xl overflow-hidden relative flex flex-col min-h-[844px]">
        <StatusBar />

        {/* Main Content Area */}
        <div className="px-8 pt-2 pb-8 flex-1 overflow-y-auto">
          {/* Back Button */}
          <button className="mb-8 p-1 hover:bg-gray-100 rounded-full transition-colors">
            <ArrowLeft className="w-6 h-6 text-gray-900" />
          </button>

          {/* Header */}
          <div className="mb-10">
            <h1 className="text-2xl font-bold text-gray-900 mb-1">
              Hi, Register yourself
            </h1>
            <p className="text-sm text-gray-500 font-medium">
              Create an account
            </p>
          </div>

          {/* Form */}
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <InputField
              icon={<User className="w-5 h-5" />}
              placeholder="John Doe"
              value={formData.name}
              onChange={(val) => handleUpdate("name", val)}
            />
            <InputField
              icon={<Mail className="w-5 h-5" />}
              placeholder="johndoe@gmail.com"
              type="email"
              value={formData.email}
              onChange={(val) => handleUpdate("email", val)}
            />
            <InputField
              icon={<Lock className="w-5 h-5" />}
              placeholder="••••••••"
              type="password"
              value={formData.password}
              onChange={(val) => handleUpdate("password", val)}
              showPasswordToggle
            />
            <InputField
              icon={<Lock className="w-5 h-5" />}
              placeholder="••••••••"
              type="password"
              value={formData.confirmPassword}
              onChange={(val) => handleUpdate("confirmPassword", val)}
              showPasswordToggle
            />

            <button
              onClick={handleCreateAccount}
              className="w-full bg-[#00246B] text-white py-4 rounded-xl font-semibold text-base mt-4 shadow-lg active:scale-95 transition-all"
            >
              Create account
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center justify-center my-8">
            <span className="text-xs text-gray-400 font-medium bg-white px-3">
              Or Continue with social account
            </span>
          </div>

          {/* Social Buttons */}
          <div className="space-y-3">
            <SocialButton
              icon={
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
              }
              label="Log In with Google"
              onClick={() => alert("Google login clicked")}
            />
            <SocialButton
              icon={
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.05 20.28c-.96.95-2.23 1.54-3.66 1.63-1.3.08-2.65-.45-3.61-.45-.99 0-2.31.53-3.61.45-1.43-.09-2.7-0.68-3.66-1.63-1.95-1.94-1.95-5.09 0-7.03 1-1 2.3-1.6 3.7-1.6 1.3 0 2.4.5 3.3.5.9 0 2-.5 3.3-.5 1.4 0 2.7.6 3.7 1.6 1.95 1.94 1.95 5.09 0 7.03z"
                    fill="black"
                  />
                  <path
                    d="M12.42 5.37C12.42 3.86 13.62 2.64 15.11 2.64C15.11 4.15 13.91 5.37 12.42 5.37Z"
                    fill="black"
                  />
                </svg>
              }
              label="Log In with Apple"
              onClick={() => alert("Apple login clicked")}
            />
          </div>

          {/* Footer Link */}
          <div className="mt-12 text-center pb-6">
            <p className="text-xs text-gray-500 font-medium">
              Already have an account?{" "}
              <a href="#" className="text-blue-700 font-bold hover:underline">
                Log In
              </a>
            </p>
          </div>
        </div>

        {/* iPhone Bottom Bar */}
        <div className="flex justify-center py-2 pb-5 bg-white">
          <div className="w-32 h-1.5 bg-black rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default MobileSignup;
