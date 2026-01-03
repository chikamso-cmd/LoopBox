import React from "react";
import {
  ArrowLeft,
  User,
  ShieldCheck,
  List,
  CreditCard,
  Info,
  ChevronRight,
} from "lucide-react";
import { Screen } from "../types";

// interface SettingsProps {
//   onBack: () => void;
//   onNavigate: (screen: Screen) => void;
// }

const Settings = ({ onBack, onNavigate }) => {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Header */}
      <div className="p-4 flex items-center relative">
        <button
          onClick={onBack}
          className="p-1 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ArrowLeft size={24} className="text-gray-600" />
        </button>
        <h1 className="flex-1 text-center text-lg font-semibold pr-8">
          Settings
        </h1>
      </div>

      {/* Main Options Group */}
      <div className="px-4 mt-4">
        <div className="border border-gray-100 rounded-2xl overflow-hidden">
          <button className="w-full flex items-center gap-4 p-4 bg-white hover:bg-gray-50 transition-colors border-b border-gray-100">
            <div className="text-[#002D72]">
              <User size={20} />
            </div>
            <span className="flex-1 text-left text-sm font-medium text-gray-700">
              My Profile
            </span>
            <ChevronRight size={18} className="text-gray-300" />
          </button>

          <button className="w-full flex items-center gap-4 p-4 bg-white hover:bg-gray-50 transition-colors border-b border-gray-100">
            <div className="text-[#002D72]">
              <ShieldCheck size={20} />
            </div>
            <span className="flex-1 text-left text-sm font-medium text-gray-700">
              Login Settings
            </span>
            <ChevronRight size={18} className="text-gray-300" />
          </button>

          <button
            onClick={() => onNavigate("transaction-history")}
            className="w-full flex items-center gap-4 p-4 bg-white hover:bg-gray-50 transition-colors border-b border-gray-100"
          >
            <div className="text-[#002D72]">
              <List size={20} />
            </div>
            <span className="flex-1 text-left text-sm font-medium text-gray-700">
              Transaction History
            </span>
            <ChevronRight size={18} className="text-gray-300" />
          </button>

          <button className="w-full flex items-center gap-4 p-4 bg-white hover:bg-gray-50 transition-colors">
            <div className="text-[#002D72]">
              <CreditCard size={20} />
            </div>
            <span className="flex-1 text-left text-sm font-medium text-gray-700">
              Bank Card/Account
            </span>
            <ChevronRight size={18} className="text-gray-300" />
          </button>
        </div>

        {/* About Section */}
        <div className="mt-6">
          <button className="w-full flex items-center gap-4 p-4 bg-white border border-gray-100 rounded-2xl hover:bg-gray-50 transition-colors">
            <div className="text-[#002D72]">
              <Info size={20} />
            </div>
            <span className="flex-1 text-left text-sm font-medium text-gray-700">
              About
            </span>
            <ChevronRight size={18} className="text-gray-300" />
          </button>
        </div>

        {/* Sign Out Button */}
        <div className="mt-12 mb-10">
          <button className="w-full py-4 border border-gray-200 rounded-full text-sm font-bold text-gray-800 hover:bg-gray-50 active:scale-[0.98] transition-all">
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
