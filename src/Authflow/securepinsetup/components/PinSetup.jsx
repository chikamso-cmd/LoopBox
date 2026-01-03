import React from "react";
import { ChevronLeft, X, ArrowRight } from "lucide-react";
import StatusBar from "./StatusBar";

// interface PinScreenProps {
//   pin: string[];
//   setPin: React.Dispatch<React.SetStateAction<string[]>>;
//   onComplete: (pin: string[]) => void;
// }

const PinScreen = ({ pin, setPin, onComplete }) => {
  const handleKeyPress = (val) => {
    const emptyIndex = pin.findIndex((char) => char === "");
    if (emptyIndex !== -1) {
      const newPin = [...pin];
      newPin[emptyIndex] = val;
      setPin(newPin);
    }
  };

  const handleDelete = () => {
    const lastFilledIndex = [...pin].reverse().findIndex((char) => char !== "");
    if (lastFilledIndex !== -1) {
      const actualIndex = 3 - lastFilledIndex;
      const newPin = [...pin];
      newPin[actualIndex] = "";
      setPin(newPin);
    }
  };

  const handleNext = () => {
    if (pin.every((char) => char !== "")) {
      onComplete(pin);
    }
  };

  return (
    <div className="flex-1 flex flex-col bg-white">
      <StatusBar />

      {/* Header */}
      <div className="px-4 py-2">
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center pt-8 px-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Create a pin</h1>
        <p className="text-gray-400 text-sm text-center leading-relaxed max-w-[200px] mb-12">
          Add a pin number to make your account secured
        </p>

        {/* Pin Slots */}
        <div className="flex gap-4 mb-auto">
          {pin.map((digit, i) => (
            <div
              key={i}
              className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center text-xl font-semibold text-gray-800 shadow-sm"
            >
              {digit}
            </div>
          ))}
        </div>
      </div>

      {/* Keyboard Container */}
      <div className="bg-gray-50/80 pt-10 pb-8 px-4 border-t border-gray-100">
        {/* Swipe indicator line */}
        <div className="w-16 h-1 bg-gray-200 rounded-full mx-auto mb-8"></div>

        <div className="grid grid-cols-3 gap-2 max-w-sm mx-auto">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <button
              key={num}
              onClick={() => handleKeyPress(num.toString())}
              className="h-14 bg-white rounded-lg flex items-center justify-center text-xl font-semibold text-gray-800 shadow-sm active:bg-gray-200 transition-colors"
            >
              {num}
            </button>
          ))}

          <button
            onClick={handleDelete}
            className="h-14 bg-white rounded-lg flex items-center justify-center shadow-sm active:bg-gray-200 transition-colors"
          >
            <X className="w-6 h-6 text-red-500" strokeWidth={3} />
          </button>

          <button
            onClick={() => handleKeyPress("0")}
            className="h-14 bg-white rounded-lg flex items-center justify-center text-xl font-semibold text-gray-800 shadow-sm active:bg-gray-200 transition-colors"
          >
            0
          </button>

          <button
            onClick={handleNext}
            className={`h-14 rounded-lg flex items-center justify-center shadow-sm transition-all ${
              pin.every((char) => char !== "")
                ? "bg-[#0D2B70] text-white active:bg-blue-900"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            <ArrowRight className="w-6 h-6" strokeWidth={3} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PinScreen;
