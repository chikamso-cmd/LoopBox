import React from "react";
import { ArrowLeft } from "lucide-react";

// interface BankTransferProps {
//   onBack: () => void;
// }

const BankTransfer = ({ onBack }) => {
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
        <div className="text-center mb-10">
          <h1 className="text-lg font-bold text-gray-800 mb-1">
            Bank Transfer
          </h1>
          <p className="text-xs text-gray-400">
            Make transfer to the account details provided
          </p>
        </div>

        {/* Transfer Info Card */}
        <div className="bg-[#F0F5FF] rounded-2xl p-8 space-y-10 mb-12">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">
                Account number
              </p>
              <h3 className="text-sm font-bold text-gray-800">2209068957</h3>
            </div>
            <div className="text-right">
              <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">
                Bank Name
              </p>
              <h3 className="text-sm font-bold text-gray-800">ZENITH BANK</h3>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">
                Account name
              </p>
              <h3 className="text-sm font-bold text-gray-800">LoopBox</h3>
            </div>
            <div className="text-right">
              <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">
                Account number refresh
              </p>
              <h3 className="text-sm font-bold text-gray-800">02:15</h3>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <button className="w-full bg-[#002266] text-white py-4 rounded-xl font-bold shadow-lg shadow-blue-50 active:scale-[0.98] transition-all">
            Confirm payment
          </button>
          <button
            onClick={onBack}
            className="w-full bg-white border border-gray-100 text-gray-400 py-4 rounded-xl font-bold active:scale-[0.98] transition-all"
          >
            Back to payment methods
          </button>
        </div>
      </div>
    </div>
  );
};

export default BankTransfer;
