import React from "react";
import { Signal, Wifi, BatteryFull } from "lucide-react";

export const StatusBar= () => {
  return (
    <div className="flex justify-between items-center px-6 py-4 w-full">
      <span className="text-sm font-semibold text-gray-900">9:41</span>
      <div className="flex items-center space-x-1.5">
        <Signal className="w-4 h-4 text-gray-900" />
        <Wifi className="w-4 h-4 text-gray-900" />
        <BatteryFull className="w-5 h-5 text-gray-900" />
      </div>
    </div>
  );
};
