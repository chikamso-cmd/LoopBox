import React from "react";
import { ArrowLeft, ChevronDown } from "lucide-react";
import { Screen } from "../types";

// interface MembersListProps {
//   onBack: () => void;
//   onNavigate: (screen: Screen) => void;
// }

const MembersList = ({ onBack, onNavigate }) => {
  const members = [
    {
      name: "Josphine Rex",
      time: "Tuesday 9:45 Am",
      date: "20/04/2024",
      image: "https://picsum.photos/seed/m1/100/100",
    },
    {
      name: "Josphine Rex",
      time: "Tuesday 9:45 Am",
      date: "20/04/2024",
      image: "https://picsum.photos/seed/m2/100/100",
    },
    {
      name: "Josphine Rex",
      time: "Tuesday 9:45 Am",
      date: "20/04/2024",
      image: "https://picsum.photos/seed/m3/100/100",
    },
    {
      name: "Josphine Rex",
      time: "Tuesday 9:45 Am",
      date: "20/04/2024",
      image: "https://picsum.photos/seed/m4/100/100",
    },
    {
      name: "Josphine Rex",
      time: "Tuesday 9:45 Am",
      date: "20/04/2024",
      image: "https://picsum.photos/seed/m5/100/100",
    },
    {
      name: "Josphine Rex",
      time: "Tuesday 9:45 Am",
      date: "20/04/2024",
      image: "https://picsum.photos/seed/m6/100/100",
    },
    {
      name: "Josphine Rex",
      time: "Tuesday 9:45 Am",
      date: "20/04/2024",
      image: "https://picsum.photos/seed/m7/100/100",
    },
    {
      name: "Josphine Rex",
      time: "Tuesday 9:45 Am",
      date: "20/04/2024",
      image: "https://picsum.photos/seed/m8/100/100",
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
          Members
        </h1>
      </div>

      {/* Filters */}
      <div className="px-4 py-2 flex gap-3">
        <button className="bg-[#3B66D1] text-white text-[10px] px-6 py-2 rounded-lg flex items-center gap-2 font-medium">
          Date <ChevronDown size={14} />
        </button>
        <button className="bg-[#3B66D1] text-white text-[10px] px-6 py-2 rounded-lg flex items-center gap-2 font-medium">
          Day <ChevronDown size={14} />
        </button>
      </div>

      {/* Members List Section */}
      <div className="mt-6 mx-4">
        <div className="bg-[#F0F5FF] rounded-t-xl p-3">
          <h3 className="text-sm font-semibold text-gray-700">Members List</h3>
        </div>
        <div className="bg-white border-x border-b border-[#F0F5FF] rounded-b-xl overflow-hidden mb-6">
          {members.map((member, idx) => (
            <div
              key={idx}
              className="flex justify-between items-center p-3 border-b border-gray-50 last:border-0"
            >
              <div className="flex items-center gap-3">
                <img
                  src={member.image}
                  className="w-10 h-10 rounded-full object-cover"
                  alt=""
                />
                <div>
                  <h4 className="text-xs font-bold text-gray-800">
                    {member.name}
                  </h4>
                  <p className="text-[10px] text-gray-400 font-medium">
                    {member.time}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[10px] text-gray-500 font-bold mb-0.5">
                  Date Joinde
                </p>
                <p className="text-[10px] text-gray-400 font-medium">
                  {member.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MembersList;
