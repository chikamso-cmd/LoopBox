import React, { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Screen } from "../types";

// interface USSDPaymentProps {
//   onBack: () => void;
//   onNavigate: (screen: Screen) => void;
// }

const USSDPaymen = ({ onBack, onNavigate }) => {
  const [timeLeft, setTimeLeft] = useState(180); // 3 minutes in seconds

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return {
      mins: mins.toString().padStart(2, "0"),
      secs: secs.toString().padStart(2, "0"),
    };
  };

  const { mins, secs } = formatTime(timeLeft);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <div className="p-4 flex items-center border-b border-gray-50 relative">
        <button
          onClick={onBack}
          className="p-1 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Go back"
        >
          <ArrowLeft size={24} className="text-gray-700" />
        </button>
        <h1 className="flex-1 text-center text-lg font-semibold pr-8">
          Dial USSD code
        </h1>
      </div>

      <div className="px-6 py-8 flex flex-col items-center">
        <p className="text-gray-500 text-sm text-center mb-1">
          Dial the code below to fund LOOPBOX Account with
        </p>
        <p className="text-[#002D72] font-bold text-lg mb-8">N 10,000</p>

        {/* Bank Logo & Info */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center overflow-hidden">
            <span className="text-white font-bold text-xs italic">access</span>
          </div>
          <span className="text-gray-700 font-medium">Access Bank</span>
        </div>

        {/* USSD Code */}
        <h2 className="text-[#3B66D1] text-3xl font-bold tracking-wider mb-8 italic">
          *901*0000*2833#
        </h2>

        {/* Instructions */}
        <p className="text-[#D97706] text-xs text-center mb-12">
          Dial the code and fund loopbox within the validity period
        </p>

        {/* Timer Display */}
        <div className="flex flex-col items-center mb-12">
          <div className="flex gap-4 items-center mb-2">
            <div className="flex gap-2">
              <span className="text-3xl font-bold tracking-[0.5em]">
                {mins}
              </span>
            </div>
            <span className="text-3xl font-bold">:</span>
            <div className="flex gap-2">
              <span className="text-3xl font-bold tracking-[0.5em]">
                {secs}
              </span>
            </div>
          </div>
          <div className="flex gap-12 text-[10px] text-gray-500 uppercase tracking-widest">
            <span>Minutes</span>
            <span>Seconds</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="w-full flex flex-col gap-4 mb-16">
          <button
            className="w-full bg-[#002266] text-white py-4 rounded-xl font-bold transition-transform active:scale-95 shadow-lg"
            onClick={() => {
              navigator.clipboard.writeText("*901*0000*2833#");
              alert("Code copied to clipboard!");
            }}
          >
            Copy Code
          </button>
          <button
            onClick={() => onNavigate("withdraw-success")} // Reusing success screen for demo
            className="w-full border border-[#002266] text-[#002266] py-4 rounded-xl font-bold transition-transform active:scale-95"
          >
            I have completed the payment
          </button>
        </div>

        {/* Terms/Info Footer */}
        <div className="w-full text-[10px] text-gray-400 space-y-3 px-2">
          <div className="flex gap-2">
            <span className="shrink-0">-</span>
            <p>
              Ensure the phone number you're dialing the code with is linked to
              your Access Bank account.
            </p>
          </div>
          <div className="flex gap-2">
            <span className="shrink-0">-</span>
            <p>
              If the session ends after activating the USSD service, return to
              this page and dial the code again and dial the code again and
              complete the transaction.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Sticky Info */}
      <div className="mt-auto border-t border-gray-100 p-4">
        <p className="text-center text-[#3B66D1] text-[10px] font-bold tracking-wider uppercase">
          Secure and Transparent
        </p>
      </div>
    </div>
  );
};

export default USSDPayment;
