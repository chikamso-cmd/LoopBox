import React, { ReactNode } from "react";

// interface InputFieldProps {
//   icon: ReactNode;
//   placeholder: string;
//   type?: string;
//   rightIcon?: ReactNode;
//   value?: string;
//   onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
// }

export const InputField= ({
  icon,
  placeholder,
  type = "text",
  rightIcon,
  value,
  onChange,
}) => {
  return (
    <div className="flex items-center bg-[#F5F6FA] rounded-xl px-4 py-3.5 border border-transparent focus-within:border-blue-200 transition-all">
      <div className="mr-3">{icon}</div>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="bg-transparent flex-1 text-[15px] text-gray-800 placeholder-gray-400 outline-none w-full font-medium"
      />
      {rightIcon && <div className="ml-2">{rightIcon}</div>}
    </div>
  );
};
