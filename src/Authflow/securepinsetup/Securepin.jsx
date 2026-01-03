
import React, { useState } from 'react';
import PinScreen from './components/PinScreen';
import SuccessScreen from './components/SuccessScreen';

const SecurePin = () => {
  const [screen, setScreen] = useState<'create' | 'success'>('create');
  const [pin, setPin] = useState(['', '', '', '']);

  const handleComplete = (finalPin) => {
    // Simulate processing
    setScreen('success');
  };

  const handleReset = () => {
    setPin(['', '', '', '']);
    setScreen('create');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-0 md:p-8">
      {/* Container simulating a mobile device for desktop view, full screen for mobile */}
      <div className="w-full max-w-[400px] h-full md:h-[844px] bg-white md:rounded-[40px] md:shadow-2xl overflow-hidden relative flex flex-col border-none md:border-[8px] md:border-gray-900">
        {screen === 'create' ? (
          <PinScreen pin={pin} setPin={setPin} onComplete={handleComplete} />
        ) : (
          <SuccessScreen onReset={handleReset} />
        )}
        
        {/* Mock Home Indicator for that iOS feel */}
        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-32 h-1 bg-black rounded-full opacity-20 hidden md:block"></div>
      </div>
    </div>
  );
};

export default SecurePin;
