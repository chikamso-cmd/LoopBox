import React from "react";
import { ArrowLeftIcon } from "./Icons";

// interface ScreenLayoutProps {
//   onBack: () => void;
//   children: React.ReactNode;
// }

const ScreenLayout = ({ onBack, children }) => {
  return (
    <div className="flex justify-center min-h-screen items-center bg-[#f2f4f7] md:p-8">
      <div className="w-full max-w-[420px] h-[90vh] md:h-[844px] bg-white md:rounded-[40px] shadow-2xl relative flex flex-col overflow-hidden">
        {/* Status Bar Space Placeholder */}
        <div className="h-10 flex items-center justify-between px-6 py-2">
          <span className="text-xs font-semibold text-gray-800">9:41</span>
          <div className="flex space-x-1">
            <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
            <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
          </div>
        </div>

        {/* Back Button */}
        <div className="px-6 py-4">
          <button
            onClick={onBack}
            className="p-2 -ml-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ArrowLeftIcon className="w-5 h-5 text-gray-900" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col relative px-8">{children}</div>
      </div>
    </div>
  );
};

export default ScreenLayout;
