import React, { useState } from "react";
import { OnboardingStep } from "./types";
import ScreenLayout from "./components/ScreenLayout";
import FingerprintScreen from "./components/FingerprintScreen";
import ReasonScreen from "./components/ReasonScreen";

const App = () => {
  const [step, setStep] = useState < OnboardingStep > "FINGERPRINT";

  const handleBack = () => {
    if (step === "REASON_SELECTION") {
      setStep("FINGERPRINT");
    }
    // Else: handle exit from app if needed
  };

  const handleNext = () => {
    if (step === "FINGERPRINT") {
      setStep("REASON_SELECTION");
    }
  };

  return (
    <ScreenLayout onBack={handleBack}>
      {step === "FINGERPRINT" && <FingerprintScreen onNext={handleNext} />}
      {step === "REASON_SELECTION" && <ReasonScreen onBack={handleBack} />}
    </ScreenLayout>
  );
};

export default App;
