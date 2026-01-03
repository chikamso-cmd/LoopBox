import React from "react";

// interface StatusBarProps {
//   dark?: boolean;
// }

const StatusBar = ({ dark = false }) => {
  const color = dark ? "text-black" : "text-white";
  return (
    <div
      className={`w-full h-10 px-6 flex justify-between items-center absolute top-0 z-50 ${color}`}
    >
      <span className="text-xs font-semibold">9:41</span>
      <div className="flex items-center gap-1.5">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zM7 12a5 5 0 1010 0 5 5 0 00-10 0z" />
        </svg>
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13 2.05v2.02c4.39.54 7.5 4.53 7.5 9.18s-3.11 8.64-7.5 9.18v2.02c5.5.56 10-3.94 10-9.6s-4.5-10.16-10-9.6zM11 2.05c-5.5.56-10 3.94-10 9.6s4.5 10.16 10 9.6v-2.02c-4.39-.54-7.5-4.53-7.5-9.18s3.11-8.64 7.5-9.18V2.05z" />
        </svg>
        <div className="w-5 h-2.5 border border-current rounded-sm relative flex items-center px-0.5">
          <div className="h-full bg-current w-3/4 rounded-3xs"></div>
        </div>
      </div>
    </div>
  );
};

export default StatusBar;
