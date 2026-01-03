import React from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Screen } from "../types";

// interface WithdrawSuccessProps {
//   onNavigate: (screen: Screen) => void;
// }

const WithdrawSuccess = ({ onNavigate }) => {
  const transactionId = Math.floor(Math.random() * 1000000000).toString();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-white text-center">
      <div className="mb-8 relative">
        <div className="absolute inset-0 bg-green-100 rounded-full scale-150 blur-xl opacity-50 animate-pulse"></div>
        <CheckCircle2 size={100} className="text-green-500 relative z-10" />
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-2">
        Withdrawal Successful!
      </h2>
      <p className="text-gray-500 mb-10 px-4">
        Your funds are being processed and will be credited to your account
        shortly.
      </p>

      <div className="w-full bg-gray-50 rounded-3xl p-6 mb-12 flex flex-col gap-4 border border-gray-100">
        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-500">Transaction ID</span>
          <span className="font-mono font-medium text-gray-900">
            #{transactionId}
          </span>
        </div>
        <div className="border-t border-dashed border-gray-200 my-1"></div>
        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-500">Withdrawal Amount</span>
          <span className="font-bold text-gray-900">N10,000</span>
        </div>
        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-500">Processing Fee</span>
          <span className="font-bold text-gray-900">N100</span>
        </div>
        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-500">Total Deducted</span>
          <span className="font-bold text-blue-900">N10,100</span>
        </div>
      </div>

      <button
        onClick={() => onNavigate("home")}
        className="w-full bg-[#002D72] text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-xl hover:bg-[#003a94] transition-all active:scale-95"
      >
        Back to Dashboard
        <ArrowRight size={20} />
      </button>

      <p className="mt-8 text-xs text-gray-400 font-medium uppercase tracking-widest">
        LoopBox Secure Payout
      </p>
    </div>
  );
};

export default WithdrawSuccess;
