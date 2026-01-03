
import React, { useState, useEffect } from 'react';
import { X, ChevronRight } from 'lucide-react';
import StatusBar from '../components/StatusBar';
import Header from '../components/Header';

// interface VerifyCodeProps {
//   onBack: () => void;
// }

const VerifyCode = ({ onBack }) => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [timeLeft, setTimeLeft] = useState(55);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleKeyPress = (val) => {
    if (val === 'delete') {
      const newOtp = [...otp];
      const lastFilledIndex = otp.map(x => x !== '').lastIndexOf(true);
      if (lastFilledIndex !== -1) {
        newOtp[lastFilledIndex] = '';
        setOtp(newOtp);
      }
      return;
    }

    if (val === 'submit') {
      // Handle submission logic if needed
      return;
    }

    const firstEmptyIndex = otp.indexOf('');
    if (firstEmptyIndex !== -1) {
      const newOtp = [...otp];
      newOtp[firstEmptyIndex] = val;
      setOtp(newOtp);
    }
  };

  return (
    <div className="flex flex-col h-full bg-white">
      <StatusBar />
      <Header onBack={onBack} />

      <div className="flex-1 flex flex-col items-center px-8">
        <h1 className="text-[26px] font-bold text-gray-900 mb-2 mt-2">Verify Code</h1>
        <p className="text-gray-500 text-[14px] text-center font-medium leading-tight mb-10 max-w-[200px]">
          Code have been sent to your email
        </p>

        {/* OTP Input Boxes */}
        <div className="flex gap-4 mb-8">
          {otp.map((digit, idx) => (
            <div
              key={idx}
              className={`w-16 h-16 rounded-xl flex items-center justify-center text-2xl font-bold ${
                digit ? 'bg-[#E5E5EA] text-gray-900' : 'bg-[#F2F2F7] text-gray-400'
              }`}
            >
              {digit || '0'}
            </div>
          ))}
        </div>

        <p className="text-[14px] font-medium text-gray-500">
          Resend Code in <span className="text-[#4C82E6]">{timeLeft}s</span>
        </p>
      </div>

      {/* Numeric Keypad Drawer */}
      <div className="bg-[#F2F2F7] pt-3 pb-8 px-2 rounded-t-[40px] shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
        {/* Small handle indicator */}
        <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-4"></div>
        
        <div className="grid grid-cols-3 gap-2 px-2">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <KeyButton key={num} onClick={() => handleKeyPress(num.toString())}>
              {num}
            </KeyButton>
          ))}
          
          {/* Action Row */}
          <KeyButton onClick={() => handleKeyPress('delete')}>
            <X size={24} className="text-red-500" />
          </KeyButton>
          
          <KeyButton onClick={() => handleKeyPress('0')}>
            0
          </KeyButton>
          
          <KeyButton onClick={() => handleKeyPress('submit')} variant="action">
            <ChevronRight size={28} className="text-gray-700" />
          </KeyButton>
        </div>
      </div>
    </div>
  );
};

// interface KeyButtonProps {
//   children: React.ReactNode;
//   onClick: () => void;
//   variant?: 'number' | 'action';
// }

const KeyButton =  ({ children, onClick, variant = 'number' }) => {
  return (
    <button
      onClick={onClick}
      className={`h-[54px] flex items-center justify-center rounded-lg text-xl font-semibold transition-all duration-100 active:scale-95 ${
        variant === 'number' 
          ? 'bg-white text-gray-800' 
          : 'bg-[#CED0D6] text-gray-800'
      }`}
    >
      {children}
    </button>
  );
};

export default VerifyCode;
