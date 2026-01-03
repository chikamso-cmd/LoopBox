import React from "react";
import { ArrowLeft, ChevronDown } from "lucide-react";

// interface TransactionHistoryProps {
//   onBack: () => void;
// }

const TransactionHistory = ({ onBack }) => {
  const transactions = [
    {
      id: "1",
      name: "Josphine Rex",
      amount: "+N10,000",
      status: "Successful",
      date: "20/04/23, 9:34",
      image: "https://picsum.photos/seed/t1/100/100",
      color: "text-green-600",
    },
    {
      id: "2",
      name: "Josphine Rex",
      amount: "+N10,000",
      status: "Successful",
      date: "20/04/23, 9:34",
      image: "https://picsum.photos/seed/t2/100/100",
      color: "text-green-600",
    },
    {
      id: "3",
      name: "Josphine Rex",
      amount: "+N10,000",
      status: "Pending..",
      date: "20/04/23, 9:34",
      image: "https://picsum.photos/seed/t3/100/100",
      color: "text-orange-500",
    },
    {
      id: "4",
      name: "Josphine Rex",
      amount: "+N10,000",
      status: "Successful",
      date: "20/04/23, 9:34",
      image: "https://picsum.photos/seed/t4/100/100",
      color: "text-green-600",
    },
    {
      id: "5",
      name: "Josphine Rex",
      amount: "- N180,000",
      status: "Pending..",
      date: "20/04/23, 9:34",
      image: "https://picsum.photos/seed/t5/100/100",
      color: "text-green-600",
    },
    {
      id: "6",
      name: "Josphine Rex",
      amount: "+N10,000",
      status: "Successful",
      date: "20/04/23, 9:34",
      image: "https://picsum.photos/seed/t6/100/100",
      color: "text-green-600",
    },
    {
      id: "7",
      name: "Josphine Rex",
      amount: "+N10,000",
      status: "Failed",
      date: "20/04/23, 9:34",
      image: "https://picsum.photos/seed/t7/100/100",
      color: "text-red-500",
    },
    {
      id: "8",
      name: "Josphine Rex",
      amount: "+N10,000",
      status: "Pending..",
      date: "20/04/23, 9:34",
      image: "https://picsum.photos/seed/t8/100/100",
      color: "text-orange-500",
    },
    {
      id: "9",
      name: "Josphine Rex",
      amount: "+N10,000",
      status: "Successful",
      date: "20/04/23, 9:34",
      image: "https://picsum.photos/seed/t9/100/100",
      color: "text-green-600",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="p-4 flex items-center relative">
        <button
          onClick={onBack}
          className="p-1 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ArrowLeft size={24} className="text-gray-600" />
        </button>
        <h1 className="flex-1 text-center text-lg font-semibold pr-8">
          Transaction History
        </h1>
      </div>

      {/* Filter Buttons */}
      <div className="px-4 py-2 flex gap-3">
        <button className="bg-[#3B66D1] text-white text-[10px] px-4 py-2 rounded-lg flex items-center gap-2 font-medium shadow-sm">
          All Categories <ChevronDown size={14} />
        </button>
        <button className="bg-[#3B66D1] text-white text-[10px] px-4 py-2 rounded-lg flex items-center gap-2 font-medium shadow-sm">
          All Status <ChevronDown size={14} />
        </button>
      </div>

      {/* Month Section */}
      <div className="mx-4 mt-6 bg-[#F0F5FF] rounded-t-xl p-4">
        <div className="flex items-center gap-1 mb-2">
          <span className="font-bold text-sm">Jan</span>
          <ChevronDown size={14} className="text-gray-600" />
        </div>
        <div className="flex gap-4 text-xs">
          <span className="text-gray-500">
            In <span className="text-gray-800 font-bold ml-1">₦180,000</span>
          </span>
          <span className="text-gray-500">
            Out <span className="text-gray-800 font-bold ml-1">₦180,000</span>
          </span>
        </div>
      </div>

      {/* Transactions List */}
      <div className="mx-4 bg-white border-x border-b border-[#F0F5FF] rounded-b-xl overflow-hidden mb-6">
        {transactions.map((t, idx) => (
          <div
            key={idx}
            className="flex justify-between items-center p-3 border-b border-gray-50 last:border-0"
          >
            <div className="flex items-center gap-3">
              <img
                src={t.image}
                className="w-10 h-10 rounded-full object-cover"
                alt=""
              />
              <div>
                <h4 className="text-xs font-bold text-gray-800">{t.name}</h4>
                <p className="text-[10px] text-gray-400 font-medium">
                  {t.date}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p
                className={`text-xs font-bold ${
                  t.amount.startsWith("-") ? "text-green-600" : "text-green-600"
                }`}
              >
                {t.amount.startsWith("-") ? t.amount : `+${t.amount}`}
              </p>
              <span
                className={`text-[9px] px-2 py-0.5 rounded-full font-bold ${
                  t.status === "Successful"
                    ? "bg-green-50 text-green-500"
                    : t.status === "Pending.."
                    ? "bg-orange-50 text-orange-400"
                    : "bg-red-50 text-red-400"
                }`}
              >
                {t.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionHistory;
