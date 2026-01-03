import React from "react";
import { Check, ChevronLeft, Star } from "lucide-react";
import StatusBar from "./StatusBar";

// interface SuccessScreenProps {
//   onReset: () => void;
// }

const SuccessScreen = ({ onReset }) => {
  return (
    <div className="flex-1 flex flex-col bg-white">
      <StatusBar />

      {/* Header */}
      <div className="px-4 py-2">
        <button
          onClick={onReset}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-8 relative">
        {/* Animated Success Icon Group */}
        <div className="relative mb-12">
          {/* Dashed outer circle */}
          <div className="w-40 h-40 border-2 border-dashed border-blue-200 rounded-full flex items-center justify-center animate-spin-slow"></div>

          {/* Inner solid circle */}
          <div className="absolute inset-4 bg-blue-50 rounded-full flex items-center justify-center">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg border border-blue-50">
              <Check className="w-14 h-14 text-[#0D2B70]" strokeWidth={3} />
            </div>
          </div>

          {/* Sparkles/Stars as seen in the mockup */}
          <Star
            className="absolute top-2 -right-4 w-6 h-6 text-[#0D2B70] fill-[#0D2B70] animate-bounce"
            style={{ animationDelay: "0s" }}
          />
          <Star
            className="absolute bottom-8 -right-8 w-5 h-5 text-[#0D2B70] fill-[#0D2B70] animate-bounce"
            style={{ animationDelay: "0.5s" }}
          />
          <Star
            className="absolute top-4 -left-6 w-5 h-5 text-[#0D2B70] fill-[#0D2B70] animate-bounce"
            style={{ animationDelay: "1s" }}
          />
        </div>

        {/* Text */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Congrats!</h2>
          <p className="text-gray-400 text-sm leading-relaxed max-w-[200px] mx-auto">
            Your account is successfully created
          </p>
        </div>
      </div>

      {/* Primary Action Button */}
      <div className="px-6 py-10">
        <button
          onClick={onReset}
          className="w-full bg-[#0D2B70] text-white font-semibold py-4 rounded-xl shadow-lg active:scale-[0.98] transition-all hover:bg-blue-900"
        >
          Continue
        </button>
      </div>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default SuccessScreen;
