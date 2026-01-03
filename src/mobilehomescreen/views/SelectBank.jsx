import React, { useState } from "react";
import { ArrowLeft, Search } from "lucide-react";
import { Bank } from "../types";

// interface SelectBankProps {
//   onBack: () => void;
//   onSelect: (bank: Bank) => void;
// }

const banks = [
  { id: "access", name: "Access Bank", initial: "A" },
  { id: "diamond", name: "Diamond Bank", initial: "D" },
  { id: "ecobank", name: "Ecobank Nigeria Plc", initial: "E" },
  { id: "fcmb", name: "FCMB [First City Monument Bank PLC]", initial: "F" },
  { id: "fidelity", name: "Fidelity Bank", initial: "F" },
  { id: "firstbank", name: "First Bank", initial: "F" },
  { id: "globus", name: "Globus Bank", initial: "G" },
  { id: "uba", name: "UBA", initial: "U" },
];

const SelectBank = ({ onBack, onSelect }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBanks = banks.filter((bank) =>
    bank.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const groupedBanks = {};
  filteredBanks.forEach((bank) => {
    if (!groupedBanks[bank.initial]) {
      groupedBanks[bank.initial] = [];
    }
    groupedBanks[bank.initial].push(bank);
  });

  const sortedKeys = Object.keys(groupedBanks).sort();

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
          Select Bank
        </h1>
      </div>

      {/* Search Bar */}
      <div className="p-6">
        <div className="relative">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-500"
            size={20}
          />
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-gray-50 border border-gray-100 rounded-xl py-3 pl-12 pr-4 text-sm focus:outline-none focus:bg-white focus:border-blue-200 transition-all"
          />
        </div>
      </div>

      {/* Bank List */}
      <div className="flex-1 overflow-y-auto">
        {sortedKeys.map((key) => (
          <div key={key}>
            <div className="bg-gray-50 px-6 py-1 text-xs font-bold text-gray-500 uppercase tracking-wider">
              {key}
            </div>
            <div className="flex flex-col">
              {groupedBanks[key].map((bank) => (
                <button
                  key={bank.id}
                  onClick={() => onSelect(bank)}
                  className="flex items-center gap-4 px-6 py-4 hover:bg-gray-50 transition-colors border-b border-gray-50 group text-left w-full"
                >
                  <div className="w-10 h-10 rounded-full bg-red-700 flex items-center justify-center overflow-hidden shrink-0 shadow-sm group-active:scale-95 transition-transform">
                    {/* Simulated UBA-style logo as seen in the mockup */}
                    <div className="flex flex-col items-center">
                      <span className="text-white text-[8px] font-bold italic leading-none">
                        UBA
                      </span>
                      <div className="w-4 h-1 bg-white mt-0.5 rounded-full opacity-50"></div>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-blue-900 transition-colors">
                    {bank.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        ))}
        {filteredBanks.length === 0 && (
          <div className="p-12 text-center text-gray-400 text-sm italic">
            No banks found matching "{searchTerm}"
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="border-t border-gray-100 p-4">
        <p className="text-center text-[#3B66D1] text-[10px] font-bold tracking-wider uppercase opacity-60">
          Secure and Transparent
        </p>
      </div>
    </div>
  );
};

export default SelectBank;
