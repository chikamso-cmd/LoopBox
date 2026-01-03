import React, { useState } from "react";
import { REASON_OPTIONS, ReasonOption } from "../types";
import { CheckIcon } from "./Icons";

// interface ReasonScreenProps {
//   onBack: () => void;
// }

const ReasonScreen = ({ onBack }) => {
  const [selectedId, setSelectedId] = useState (null );
  const [otherReason, setOtherReason] = useState("");

  const handleSelect = (id) => {
    setSelectedId(id);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="mt-6 mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">
          Main reason for using Loopbox?
        </h1>
        <p className="text-[#8e95a1] text-[15px] leading-relaxed">
          We need to know the regulatory reason and also we're curious!
        </p>
      </div>

      <div className="space-y-4 overflow-y-auto pb-10 flex-1 scrollbar-hide">
        {REASON_OPTIONS.map((option) => (
          <div key={option.id}>
            <button
              onClick={() => handleSelect(option.id)}
              className={`w-full p-5 rounded-xl border flex items-center justify-between transition-all duration-200 ${
                selectedId === option.id
                  ? "border-gray-200 bg-white"
                  : "border-[#f1f2f4] bg-white"
              }`}
            >
              <span
                className={`text-[15px] font-medium ${
                  selectedId === option.id ? "text-gray-900" : "text-gray-600"
                }`}
              >
                {option.label}
              </span>
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                  selectedId === option.id
                    ? "bg-[#18c781] text-white shadow-[0_4px_10px_rgba(24,199,129,0.3)]"
                    : "bg-[#f1f2f4]"
                }`}
              >
                {selectedId === option.id && (
                  <CheckIcon className="w-3.5 h-3.5" />
                )}
              </div>
            </button>

            {/* Conditional Input for "Other" */}
            {option.id === "other" && selectedId === "other" && (
              <div className="mt-3 animate-in fade-in slide-in-from-top-2 duration-300">
                <textarea
                  value={otherReason}
                  onChange={(e) => setOtherReason(e.target.value)}
                  placeholder="Please specify your reason"
                  className="w-full p-5 bg-[#f5f6f8] rounded-xl text-gray-700 placeholder-gray-400 text-sm focus:outline-none focus:ring-1 focus:ring-gray-200 resize-none h-24"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReasonScreen;
