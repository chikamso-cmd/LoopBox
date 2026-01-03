import React from "react";
import { ArrowLeft } from "lucide-react";

// interface UpcomingBillsProps {
//   onBack: () => void;
// }

const UpcomingBills = ({ onBack }) => {
  const bills = [
    {
      month: "May",
      day: "29",
      title: "Monthly",
      desc: "Last Charge - 29 May, 2023",
      amount: "₦ 10,000",
    },
    {
      month: "Jun",
      day: "29",
      title: "Monthly",
      desc: "Last Charge - 29 Jun, 2023",
      amount: "₦ 10,000",
    },
    {
      month: "July",
      day: "29",
      title: "Monthly",
      desc: "Last Charge - 29 July, 2023",
      amount: "₦ 10,000",
    },
    {
      month: "Jun",
      day: "29",
      title: "Monthly",
      desc: "Last Charge - 29 Jun, 2023",
      amount: "₦ 10,000",
    },
    {
      month: "Jun",
      day: "29",
      title: "Monthly",
      desc: "Last Charge - 29 Jun, 2023",
      amount: "₦ 10,000",
    },
    {
      month: "Jun",
      day: "29",
      title: "Monthly",
      desc: "Last Charge - 29 Jun, 2023",
      amount: "₦ 10,000",
    },
  ];

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
        <h1 className="flex-1 text-center text-lg font-bold pr-8">
          Upcoming Bills
        </h1>
      </div>

      <div className="px-4 py-6">
        <div className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
          {bills.map((bill, i) => (
            <div
              key={i}
              className="flex items-center gap-4 p-4 bg-white border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <div className="bg-[#F0F5FF] text-[#002D72] rounded-xl p-2 w-14 text-center shrink-0 shadow-sm">
                <p className="text-[10px] uppercase font-bold tracking-wider">
                  {bill.month}
                </p>
                <p className="text-lg font-extrabold leading-tight">
                  {bill.day}
                </p>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-bold text-gray-800 truncate">
                  {bill.title}
                </h4>
                <p className="text-[10px] text-gray-400 font-medium truncate">
                  {bill.desc}
                </p>
              </div>
              <div className="text-right">
                <span className="text-sm font-bold text-gray-800 whitespace-nowrap">
                  {bill.amount}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-auto p-8 text-center">
        <p className="text-[10px] text-gray-400 font-medium uppercase tracking-[0.2em]">
          Automated Payouts Enabled
        </p>
      </div>
    </div>
  );
};

export default UpcomingBills;
