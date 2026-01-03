import React from "react";
import { ArrowLeft } from "lucide-react";

// interface HeaderProps {
//   onBack?: () => void;
// }

const Header = ({ onBack }) => {
  return (
    <div className="px-6 py-4">
      <button
        onClick={onBack}
        className="p-2 -ml-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
      >
        <ArrowLeft size={24} color="#000" />
      </button>
    </div>
  );
};

export default Header;
