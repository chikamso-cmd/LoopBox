import React, { useState } from "react";
import { Mail } from "lucide-react";
import StatusBar from "../components/StatusBar";
import Header from "../components/Header";

// interface ForgotPasswordProps {
//   onNext: () => void;
// }

const ForgotPassword = ({ onNext }) => {
  const [email, setEmail] = useState("johndoe@gmail.com");

  return (
    <div className="flex flex-col h-full bg-white">
      <StatusBar />
      <Header onBack={() => {}} />

      <div className="px-8 mt-6">
        <h1 className="text-[26px] font-bold text-gray-900 mb-2">
          Forgot Password
        </h1>
        <p className="text-gray-500 text-[14px] font-medium leading-tight mb-8">
          Please enter your email address
        </p>

        <div className="relative group">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Mail size={20} className="text-gray-400" />
          </div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-[#F3F3F7] rounded-xl py-4 pl-12 pr-4 text-[15px] font-medium text-gray-700 outline-none border border-transparent focus:border-blue-200 transition-all duration-200"
            placeholder="Email Address"
          />
        </div>

        <button
          onClick={onNext}
          className="w-full mt-10 bg-[#002D72] text-white font-bold py-4 rounded-xl shadow-lg active:scale-[0.98] transition-all duration-200"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;
