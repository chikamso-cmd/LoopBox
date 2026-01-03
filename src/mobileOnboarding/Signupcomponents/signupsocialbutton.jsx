import React from "react";
import { SocialButtonProps } from "../types";

export const SocialButton = ({
  icon,
  label,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center w-full py-4 mb-3 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors shadow-sm"
    >
      <span className="mr-3">{icon}</span>
      <span className="text-gray-700 font-medium text-sm">{label}</span>
    </button>
  );
};
