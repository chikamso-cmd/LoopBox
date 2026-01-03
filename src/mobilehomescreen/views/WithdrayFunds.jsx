import React, { useState } from "react";
import { ArrowLeft, Wallet, Loader2, ChevronDown } from "lucide-react";
import { Screen } from "../types";

// interface WithdrawFundsProps {
//   onBack: () => void;
//   onNavigate: (screen: Screen) => void;
// }

const WithdrawFunds = ({
  onBack,
  onNavigate,
}) => {
  const [amount, setAmount] = useState("10,000");
  const [isLoading, setIsLoading] = useState(false);

  const handleWithdraw = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onNavigate("withdraw-success");
    }, 1500);
  };

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
        <h1 className="text-lg font-bold text-gray-800 mb-1">Withdraw Funds</h1>
        <p className="text-xs text-gray-400 mb-8">
          Withdraw your available balance from LoopBox
        </p>

        {/* Balance Card */}
        <div className="bg-[#F0F5FF] rounded-2xl p-6 flex items-center justify-between mb-8">
          <div>
            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-1">
              Available Balance
            </p>
            <p className="text-2xl font-bold text-gray-900 tracking-tight">
              ₦ 900,000
            </p>
          </div>
          <div className="w-12 h-12 bg-[#002D72] rounded-xl flex items-center justify-center text-white shadow-lg">
            <Wallet size={24} />
          </div>
        </div>

        {/* Form Fields */}
        <div className="space-y-6">
          <div>
            <label className="text-sm font-bold text-gray-700 block mb-2">
              Withdrawal Amount
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold">
                ₦
              </span>
              <input
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full bg-gray-50 border border-transparent rounded-xl py-4 pl-10 pr-4 text-sm font-medium focus:bg-white focus:ring-1 focus:ring-blue-100 focus:outline-none transition-all"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 w-0.5 h-4 bg-gray-200"></div>
            </div>
          </div>

          <div>
            <label className="text-sm font-bold text-gray-700 block mb-2">
              Withdrawal Method
            </label>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <Wallet size={18} />
              </div>
              <select className="w-full bg-gray-50 border border-transparent rounded-xl py-4 pl-12 pr-10 text-sm font-medium focus:bg-white focus:outline-none appearance-none cursor-pointer">
                <option>Bank Transfer</option>
                <option>Direct Payout</option>
              </select>
              <ChevronDown
                size={18}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-bold text-gray-700 block mb-2">
              Choose Account
            </label>
            <div className="relative">
              <select className="w-full bg-gray-50 border border-transparent rounded-xl py-4 px-4 text-sm font-medium text-gray-400 focus:bg-white focus:outline-none appearance-none cursor-pointer italic">
                <option>choose an account</option>
                <option>Zenith Bank - 2209****67</option>
                <option>Add new account +</option>
              </select>
              <ChevronDown
                size={18}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
              />
            </div>
          </div>

          <button
            onClick={handleWithdraw}
            disabled={isLoading}
            className="w-full bg-[#002266] text-white py-4 rounded-xl font-bold mt-8 shadow-xl flex items-center justify-center gap-2 active:scale-[0.98] transition-all hover:bg-blue-900"
          >
            {isLoading ? (
              <>
                <Loader2 size={20} className="animate-spin" />
                Processing...
              </>
            ) : (
              "Continue"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default WithdrawFunds;
