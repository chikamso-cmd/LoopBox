import React, { useState } from "react";
import ForgotPassword from "./screens/ForgotPassword";
import VerifyCode from "./screens/VerifyCode";

// export enum Screen {
//   FORGOT_PASSWORD = 'FORGOT_PASSWORD',
//   VERIFY_CODE = 'VERIFY_CODE'
// }

const MainAuth = () => {
  const [currentScreen, setCurrentScreen] =
    useState < Screen > Screen.FORGOT_PASSWORD;

  const navigateTo = (screen) => {
    setCurrentScreen(screen);
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      {/* Mobile Wrapper */}
      <div className="w-full max-w-[390px] h-[844px] bg-white rounded-[40px] shadow-2xl overflow-hidden relative flex flex-col border-[8px] border-gray-900">
        {currentScreen === Screen.FORGOT_PASSWORD && (
          <ForgotPassword onNext={() => navigateTo(Screen.VERIFY_CODE)} />
        )}
        {currentScreen === Screen.VERIFY_CODE && (
          <VerifyCode onBack={() => navigateTo(Screen.FORGOT_PASSWORD)} />
        )}

        {/* iOS Home Indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-black rounded-full pointer-events-none"></div>
      </div>
    </div>
  );
};

export default MainAuth;
