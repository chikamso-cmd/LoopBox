import React from "react";

const StatusBar = () => {
  return (
    <div className="flex justify-between items-center px-6 py-3 w-full text-sm font-semibold">
      <span>9:41</span>
      <div className="flex items-center gap-1.5">
        {/* Signal Bars */}
        <div className="flex items-end gap-[1px] h-3">
          <div className="w-[3px] h-1 bg-black rounded-[0.5px]"></div>
          <div className="w-[3px] h-1.5 bg-black rounded-[0.5px]"></div>
          <div className="w-[3px] h-2 bg-black rounded-[0.5px]"></div>
          <div className="w-[3px] h-2.5 bg-black rounded-[0.5px]"></div>
        </div>
        {/* WiFi Icon Mock */}
        <svg
          width="16"
          height="12"
          viewBox="0 0 16 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8 12L0 4C3 1 13 1 16 4L8 12Z" fill="black" />
        </svg>
        {/* Battery Mock */}
        <div className="w-6 h-3 border border-black/30 rounded-[2px] relative flex items-center p-[1px]">
          <div className="h-full w-4/5 bg-black rounded-[1px]"></div>
          <div className="absolute -right-[3px] w-[2px] h-1 bg-black/30 rounded-r-[1px]"></div>
        </div>
      </div>
    </div>
  );
};

export default StatusBar;
