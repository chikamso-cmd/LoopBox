
import React from 'react';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

// interface NextToReceiveProps {
//   onBack: () => void;
// }

const NextToReceive = ({ onBack }) => {
  // Simulating the "Turn reached" state (Step 10 of 10)
  const currentStep = 10;
  const totalSteps = 10;
  const isTurnReached = currentStep === totalSteps;

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <div className="p-4 flex items-center relative border-b border-gray-50">
        <button onClick={onBack} className="p-1 hover:bg-gray-100 rounded-full transition-colors">
          <ArrowLeft size={24} className="text-gray-600" />
        </button>
        <h1 className="flex-1 text-center text-lg font-bold pr-8">Next to receive</h1>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-8 space-y-6">
        {/* User Card */}
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex flex-col items-center">
          <div className="relative mb-4">
            <img 
              src="https://picsum.photos/seed/rex/120/120" 
              className="w-20 h-20 rounded-full border-4 border-blue-50 object-cover" 
              alt="Josphine Rex" 
            />
          </div>
          <div className="text-center mb-6">
            <h3 className="font-bold text-lg text-gray-800">Josphine Rex</h3>
            <p className="text-xs text-gray-400 font-medium">Member ID: #12345</p>
          </div>
          
          <div className="w-full space-y-3 pt-6 border-t border-gray-50">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500 font-medium">Expected Amount:</span>
              <span className="text-sm font-bold text-gray-800">₦90,000</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500 font-medium">Status:</span>
              <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${
                isTurnReached ? 'bg-green-600 text-white' : 'bg-orange-500 text-white'
              }`}>
                {isTurnReached ? 'Ready to withdraw' : 'Pending'}
              </span>
            </div>
          </div>
        </div>

        {/* Position in Cycle */}
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
          <h4 className="text-sm font-bold text-gray-700 mb-6">Position in Cycle</h4>
          <div className="relative px-2">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 z-0"></div>
            <div className="absolute top-1/2 left-0 h-0.5 bg-[#002D72] -translate-y-1/2 z-0" style={{ width: `${(currentStep - 1) / (totalSteps - 1) * 100}%` }}></div>
            
            <div className="flex justify-between items-center relative z-10">
              {[...Array(totalSteps)].map((_, i) => (
                <div 
                  key={i} 
                  className={`w-4 h-4 rounded-full flex items-center justify-center transition-all ${
                    i < currentStep ? 'bg-[#002D72]' : 'bg-white border-2 border-blue-100'
                  }`}
                >
                  {i < currentStep && <div className="w-1.5 h-1.5 bg-white rounded-full"></div>}
                </div>
              ))}
            </div>
          </div>
          <p className="text-center text-[10px] text-gray-400 mt-4 font-medium">
            Step <span className="text-[#002D72] font-bold">{currentStep}</span> of {totalSteps}
          </p>
        </div>

        {/* Action / Success Block */}
        {isTurnReached && (
          <div className="bg-[#F9FAFB] rounded-3xl p-6 flex flex-col items-center text-center">
            <CheckCircle2 size={40} className="text-green-600 mb-3" />
            <h4 className="font-bold text-gray-800 text-base">Congratulations!</h4>
            <p className="text-xs text-gray-500 mt-1 mb-6 px-6 leading-relaxed">
              Your turn is here. Please proceed to withdraw your funds.
            </p>
            <button className="w-full bg-[#2D8A39] text-white py-4 rounded-2xl font-bold shadow-lg shadow-green-100 active:scale-[0.98] transition-all">
              Withdraw Funds
            </button>
          </div>
        )}

        {/* Community Info */}
        <div className="bg-[#F0F5FF] rounded-3xl p-6 space-y-4">
          <h4 className="text-sm font-bold text-gray-700">Community info</h4>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-blue-900 shadow-sm">
                <span className="text-[10px] font-bold">L</span>
              </div>
              <div className="flex-1">
                <p className="text-[10px] text-gray-400 uppercase font-bold">Name</p>
                <p className="text-xs font-bold text-gray-800">LOOPBOX</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-blue-900 shadow-sm">
                <span className="text-[10px] font-bold">C</span>
              </div>
              <div className="flex-1">
                <p className="text-[10px] text-gray-400 uppercase font-bold">Cycle Start Date</p>
                <p className="text-xs font-bold text-gray-800">Nov 29, 2024</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-blue-900 shadow-sm">
                <span className="text-[10px] font-bold">T</span>
              </div>
              <div className="flex-1">
                <p className="text-[10px] text-gray-400 uppercase font-bold">Total Members</p>
                <p className="text-xs font-bold text-gray-800">45</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextToReceive;
