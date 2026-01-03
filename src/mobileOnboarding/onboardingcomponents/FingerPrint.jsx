import React from "react";
import { FingerprintIcon } from "./Icons";

// interface FingerprintScreenProps {
//   onNext: () => void;
// }

const FingerprintScreen = ({ onNext }) => {
  return (
    <div className="flex flex-col h-full items-center">
      <div className="text-center mt-12 mb-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">
          Fingerprint
        </h1>
        <p className="text-[#8e95a1] text-[15px] px-6 leading-relaxed">
          Set high level security for your account by fingerprint lock.
        </p>
      </div>

      {/* Center Visual */}
      <div className="absolute inset-0 top-[20%] bottom-[20%] fingerprint-gradient -z-10" />

      <div className="mb-[15%]">
        <button
          onClick={onNext}
          className="w-24 h-24 bg-white rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.08)] flex items-center justify-center text-gray-800 hover:scale-105 active:scale-95 transition-transform"
        >
          <FingerprintIcon className="w-10 h-10" />
        </button>
      </div>

      <div className="mt-auto mb-10 text-center">
        <p className="text-[#8e95a1] text-xs px-12 leading-relaxed">
          By setting fingerprint you agree to our{" "}
          <span className="text-gray-900 font-bold">terms</span> and{" "}
          <span className="text-gray-900 font-bold">conditions</span>
        </p>
      </div>
    </div>
  );
};

export default FingerprintScreen;
