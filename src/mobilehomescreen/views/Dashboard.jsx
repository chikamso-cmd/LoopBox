import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";

// interface CardPaymentProps {
//   onBack: () => void;
// }

const CardPayment = ({ onBack }) => {
  const [amount, setAmount] = useState("");

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <div className="p-4 flex items-center">
        <button
          onClick={onBack}
          className="p-1 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ArrowLeft size={24} className="text-gray-600" />
        </button>
      </div>

      <div className="px-6 py-2">
        <div className="text-center mb-12">
          <h1 className="text-lg font-bold text-gray-800 mb-1">Credit Card</h1>
          <p className="text-xs text-gray-400">
            Add payment directly from your bank card
          </p>
        </div>

        <div className="space-y-12">
          {/* Amount Input */}
          <div>
            <label className="text-sm font-bold text-gray-800 block mb-3">
              Amount ₦
            </label>
            <input
              type="text"
              placeholder="Enter Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full border border-gray-200 rounded-xl p-4 text-sm font-medium focus:outline-none focus:border-[#3B66D1] focus:ring-1 focus:ring-[#3B66D1] transition-all"
            />
          </div>

          {/* Next Button */}
          <button
            className="w-full bg-[#002266] text-white py-4 rounded-xl font-bold shadow-lg shadow-blue-50 active:scale-[0.98] transition-all disabled:opacity-50"
            disabled={!amount}
          >
            Next
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-auto border-t border-gray-100 p-4">
        <p className="text-center text-[#3B66D1] text-[10px] font-bold tracking-wider uppercase opacity-60">
          Secure and Transparent
        </p>
      </div>
    </div>
  );
};

export default CardPayment;
