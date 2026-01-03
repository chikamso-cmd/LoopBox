import React, { useState } from "react";
import {
  ChevronLeft,
  User,
  Lock,
  EyeOff,
  Signal,
  Wifi,
  Battery,
} from "lucide-react";
import { InputField } from "./logincomponents/InputField";
import { SocialButton } from "./logincomponents/SocialButton";

const MobileLogin = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col w-full max-w-[400px] h-[812px] bg-white shadow-2xl overflow-hidden relative font-sans sm:rounded-[40px] border-[8px] border-black">
      {/* Status Bar */}
      <div className="flex justify-between items-center px-8 pt-4 pb-2 text-[14px] font-semibold">
        <span>9:41</span>
        <div className="flex items-center gap-1.5">
          <Signal size={14} strokeWidth={2.5} />
          <Wifi size={14} strokeWidth={2.5} />
          <Battery size={20} strokeWidth={2.5} />
        </div>
      </div>

      <div className="flex-1 px-6 overflow-y-auto no-scrollbar">
        {/* Navigation */}
        <button className="mt-4 p-2 -ml-2 hover:bg-gray-100 rounded-full transition-colors">
          <ChevronLeft size={24} className="text-gray-900" />
        </button>

        {/* Header Text */}
        <div className="mt-8">
          <h1 className="text-[28px] font-bold text-[#111111]">
            Hi, Welcome back!
          </h1>
          <p className="text-[14px] text-gray-400 mt-1">
            Sign in to your account
          </p>
        </div>

        {/* Form */}
        <div className="mt-10 space-y-4">
          <InputField
            icon={<User size={18} className="text-gray-300" />}
            placeholder="John Doe"
            type="text"
          />

          <div className="relative">
            <InputField
              icon={<Lock size={18} className="text-gray-300" />}
              placeholder="••••••••"
              type={showPassword ? "text" : "password"}
              rightIcon={
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="p-1 focus:outline-none"
                >
                  <EyeOff size={18} className="text-gray-300" />
                </button>
              }
            />
          </div>

          <div className="flex justify-end mt-1">
            <button className="text-[13px] font-semibold text-[#1B4B9A] hover:underline">
              Forgot Password?
            </button>
          </div>

          <button className="w-full bg-[#0B255D] hover:bg-[#071940] text-white py-4 rounded-xl font-bold text-[16px] transition-all active:scale-[0.98] mt-4">
            Log In
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center my-10">
          <div className="flex-1 border-t border-gray-100"></div>
          <span className="px-4 text-[12px] text-gray-400 font-medium">
            Or Continue with social account
          </span>
          <div className="flex-1 border-t border-gray-100"></div>
        </div>

        {/* Social Buttons */}
        <div className="space-y-4">
          <SocialButton provider="google" label="Log In with Google" />
          <SocialButton provider="apple" label="Log In with Apple" />
        </div>

        {/* Footer */}
        <div className="mt-auto pt-10 pb-8 text-center">
          <p className="text-[13px] text-gray-600">
            Don't have an account?{" "}
            <button className="text-[#1B4B9A] font-bold hover:underline">
              Sign Up
            </button>
          </p>
        </div>
      </div>

      {/* Home Indicator */}
      <div className="h-[5px] w-[134px] bg-black rounded-full mx-auto mb-2 mt-2"></div>
    </div>
  );
};

export default MobileLogin;
