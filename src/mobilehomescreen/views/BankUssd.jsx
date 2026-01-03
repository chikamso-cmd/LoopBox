import React from "react";
import { ArrowLeft, Landmark, ChevronDown } from "lucide-react";
import { Screen, Bank } from "../types";

// interface BankUSSDSetupProps {
//   onBack: () => void;
//   onNavigate: (screen: Screen) => void;
//   selectedBank: Bank | null;
// }

const BankUSSDSetup = ({
  onBack,
  onNavigate,
  selectedBank,
}) => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <div className="p-4 flex items-center relative">
        <button
          onClick={onBack}
          className="p-1 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ArrowLeft size={24} className="text-gray-600" />
        </button>
      </div>

      <div className="px-6 flex flex-col items-center">
        <h1 className="text-lg font-bold text-gray-800 mb-1">Bank USSD</h1>
        <p className="text-xs text-gray-400 mb-10">
          Add payment via other banks' USSD code
        </p>

        <div className="w-full flex flex-col gap-8">
          {/* Payment Method Selector */}
          <div>
            <label className="text-sm font-bold text-gray-700 block mb-2">
              Payment Method
            </label>
            <button
              onClick={() => onNavigate("select-bank")}
              className="w-full flex items-center justify-between border border-gray-200 rounded-xl p-4 text-sm text-gray-400 bg-white hover:border-blue-400 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <div className="text-gray-400 group-hover:text-blue-500">
                  <Landmark size={20} />
                </div>
                <span
                  className={selectedBank ? "text-gray-800 font-medium" : ""}
                >
                  {selectedBank ? selectedBank.name : "Select Bank"}
                </span>
              </div>
              <ChevronDown size={20} className="text-gray-300" />
            </button>
          </div>

          {/* Amount Input */}
          <div>
            <label className="text-sm font-bold text-gray-700 block mb-2">
              Amount ₦
            </label>
            <input
              type="text"
              placeholder="Enter Amount"
              className="w-full border border-gray-200 rounded-xl p-4 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
            />
          </div>

          {/* Next Button */}
          <button
            onClick={() => onNavigate("ussd")}
            className="w-full bg-[#3B66D1] text-white py-4 rounded-xl font-bold mt-4 shadow-lg active:scale-[0.98] transition-all hover:bg-blue-700 disabled:opacity-50 disabled:active:scale-100 disabled:bg-blue-300"
            disabled={!selectedBank}
          >
            Next
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-auto border-t border-gray-100 p-4">
        <p className="text-center text-[#3B66D1] text-[10px] font-bold tracking-wider uppercase opacity-60">
          Secured and Transparent
        </p>
      </div>
    </div>
  );
};

export default BankUSSDSetup;
