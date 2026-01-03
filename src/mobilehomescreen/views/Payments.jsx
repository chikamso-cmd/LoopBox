import React from "react";
import { ArrowLeft, CreditCard, Building, Smartphone } from "lucide-react";
import { Screen } from "../types";

// interface PaymentsProps {
//   onBack: () => void;
//   onNavigate: (screen: Screen) => void;
// }

const Payments = ({ onBack, onNavigate }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <div className="p-4 flex items-center border-b border-gray-50">
        <button
          onClick={onBack}
          className="p-1 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ArrowLeft size={24} className="text-gray-600" />
        </button>
        <h1 className="flex-1 text-center text-lg font-bold pr-8">
          Add Payment
        </h1>
      </div>

      <div className="p-6 space-y-4">
        {/* Credit Card Card */}
        <button
          onClick={() => onNavigate("card-payment")}
          className="w-full flex items-center gap-4 p-4 border border-gray-100 rounded-xl text-left bg-white hover:bg-gray-50 transition-colors shadow-sm"
        >
          <div className="p-2 bg-[#002D72] text-white rounded-lg">
            <CreditCard size={20} />
          </div>
          <div>
            <h4 className="text-xs font-bold text-gray-800">Credit Card</h4>
            <p className="text-[10px] text-gray-400 leading-tight pr-4">
              Add money directly from your bank card or account
            </p>
          </div>
        </button>

        {/* Account Details Card */}
        <div className="bg-[#F0F5FF] rounded-xl p-5 space-y-6">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">
                Account name
              </p>
              <h3 className="text-sm font-bold text-gray-800">LoopBox</h3>
            </div>
            <div className="text-right">
              <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">
                Bank Name
              </p>
              <h3 className="text-sm font-bold text-gray-800">ZENITH BANK</h3>
            </div>
          </div>

          <div className="flex justify-between items-center pt-2">
            <div>
              <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">
                Account number
              </p>
              <h3 className="text-lg font-bold text-gray-800 tracking-wider">
                2209068957
              </h3>
            </div>
            <button className="bg-[#3B66D1] text-white text-[10px] px-4 py-2 rounded-lg font-bold shadow-sm active:scale-95 transition-transform">
              Copy Number
            </button>
          </div>
        </div>

        {/* OR Divider */}
        <div className="flex items-center gap-4 py-4">
          <div className="flex-1 h-px bg-gray-200"></div>
          <span className="text-[10px] text-gray-400 font-bold">OR</span>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        {/* Bank Transfer Card */}
        <button
          onClick={() => onNavigate("bank-transfer")}
          className="w-full flex items-center gap-4 p-4 border border-gray-100 rounded-xl text-left bg-white hover:bg-gray-50 transition-colors shadow-sm"
        >
          <div className="p-2 bg-[#002D72] text-white rounded-lg">
            <Building size={20} />
          </div>
          <div>
            <h4 className="text-xs font-bold text-gray-800">Bank Transfer</h4>
            <p className="text-[10px] text-gray-400 leading-tight">
              Add money via mobile or internet banking
            </p>
          </div>
        </button>

        {/* Bank USSD Card */}
        <button
          onClick={() => onNavigate("ussd-setup")}
          className="w-full flex items-center gap-4 p-4 border border-gray-100 rounded-xl text-left bg-white hover:bg-gray-50 transition-colors shadow-sm"
        >
          <div className="p-2 bg-[#002D72] text-white rounded-lg">
            <Smartphone size={20} />
          </div>
          <div>
            <h4 className="text-xs font-bold text-gray-800">Bank USSD</h4>
            <p className="text-[10px] text-gray-400 leading-tight">
              Add money via other banks' USSD code
            </p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Payments;
