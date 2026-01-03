import React, { useState, useEffect } from "react";
import { ScreenType } from "./types";
import Logo from "./components/Logo";
import StatusBar from "./components/StatusBar";
import { ONBOARDING_STEPS, COLORS } from "./constants";

const SplashScreen = () => {
  const [currentScreen, setCurrentScreen] =
    useState < ScreenType > ScreenType.SPLASH_1;
  const [onboardingIndex, setOnboardingIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Auto-advance splash screens with smoother timing
  useEffect(() => {
    if (currentScreen === ScreenType.SPLASH_1) {
      const timer = setTimeout(
        () => setCurrentScreen(ScreenType.SPLASH_2),
        2000
      );
      return () => clearTimeout(timer);
    }
    if (currentScreen === ScreenType.SPLASH_2) {
      const timer = setTimeout(() => {
        setCurrentScreen(ScreenType.WELCOME);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [currentScreen]);

  const handleNext = () => {
    if (onboardingIndex < ONBOARDING_STEPS.length - 1) {
      setOnboardingIndex((prev) => prev + 1);
      setCurrentScreen(ONBOARDING_STEPS[onboardingIndex + 1].id);
    } else {
      alert("Welcome to the Loop! Let's get you signed in.");
    }
  };

  const handleSkip = () => {
    const lastIndex = ONBOARDING_STEPS.length - 1;
    setOnboardingIndex(lastIndex);
    setCurrentScreen(ONBOARDING_STEPS[lastIndex].id);
  };

  const isSplash =
    currentScreen === ScreenType.SPLASH_1 ||
    currentScreen === ScreenType.SPLASH_2;

  return (
    <div className="relative w-full h-screen overflow-hidden bg-white selection:bg-blue-100 font-sans">
      {/* 1. Splash Screen 1: The Immersive Entry */}
      {currentScreen === ScreenType.SPLASH_1 && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#002B7F]">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[4000ms] ease-out opacity-40"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2000&auto=format&fit=crop')`,
              transform: isMounted ? "scale(1)" : "scale(1.2)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#002B7F]/60 via-[#002B7F]/90 to-[#002B7F]" />
          <StatusBar dark={false} />
          <div className="relative z-10 animate-in fade-in zoom-in-95 duration-1000">
            <Logo color="#FFFFFF" size="lg" />
          </div>
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-36 h-1 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-white/40 animate-progress w-full origin-left" />
          </div>
        </div>
      )}

      {/* 2. Splash Screen 2: The Clean Reveal */}
      {currentScreen === ScreenType.SPLASH_2 && (
        <div className="fixed inset-0 z-40 bg-white flex items-center justify-center animate-in fade-in duration-500">
          <StatusBar dark={true} />
          <div className="animate-in zoom-in-90 duration-700">
            <Logo size="md" />
          </div>
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-36 h-1 bg-black/5 rounded-full" />
        </div>
      )}

      {/* 3. Main Onboarding Flow */}
      {!isSplash && (
        <main className="flex flex-col md:flex-row h-full w-full animate-in fade-in slide-in-from-bottom-4 duration-700">
          <StatusBar dark={true} />

          {/* Top/Left Section: Visual Focus */}
          <section className="relative w-full h-[45%] md:h-full md:w-1/2 bg-[#F8FAFC] flex flex-col items-center justify-center overflow-hidden">
            {/* Decorative pattern for mobile top */}
            <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-white to-transparent md:hidden pointer-events-none" />

            <div className="relative w-full h-full flex items-center justify-center p-8 md:p-12 lg:p-20">
              {ONBOARDING_STEPS[onboardingIndex].image ? (
                <div className="w-full h-full max-w-sm md:max-w-none rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl ring-8 ring-white animate-in zoom-in-95 duration-700">
                  <img
                    src={ONBOARDING_STEPS[onboardingIndex].image}
                    alt="Loop Box Lifestyle"
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="w-48 h-48 md:w-72 md:h-72 bg-white rounded-[2.5rem] md:rounded-[4rem] shadow-xl border border-blue-50 flex items-center justify-center animate-in scale-in duration-500 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent rounded-[2.5rem] md:rounded-[4rem]" />
                  <div className="relative z-10 transform md:scale-150">
                    {ONBOARDING_STEPS[onboardingIndex].icon}
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Bottom/Right Section: Content & Interaction */}
          <section className="relative flex-1 bg-white flex flex-col pt-6 md:pt-0 pb-12 px-8 md:px-16 lg:px-24 justify-between md:justify-center">
            {/* Nav Header (Mobile) */}
            <div className="flex justify-end md:absolute md:top-12 md:right-12">
              {onboardingIndex < ONBOARDING_STEPS.length - 1 && (
                <button
                  onClick={handleSkip}
                  className="text-gray-400 font-bold text-xs uppercase tracking-[0.2em] py-2 px-4 hover:text-gray-600 transition-colors"
                >
                  Skip
                </button>
              )}
            </div>

            <div className="max-w-md mx-auto md:mx-0 flex-1 md:flex-none flex flex-col justify-center space-y-4 md:space-y-8 animate-in slide-in-from-bottom-8 duration-700 delay-100">
              {/* Tiny brand marker for desktop side */}
              <div className="hidden md:block">
                <div className="w-12 h-1.5 bg-[#D4A056] rounded-full mb-6" />
              </div>

              <h1 className="text-3xl md:text-5xl font-black text-[#111827] leading-[1.1] tracking-tight whitespace-pre-line">
                {ONBOARDING_STEPS[onboardingIndex].title}
              </h1>
              <p className="text-gray-500 text-base md:text-xl leading-relaxed md:font-medium">
                {ONBOARDING_STEPS[onboardingIndex].description}
              </p>
            </div>

            {/* Controls */}
            <div className="max-w-md mx-auto md:mx-0 w-full space-y-8 mt-8 md:mt-16">
              {/* Pagination indicators - centered on mobile, left on desktop */}
              <div className="flex items-center justify-center md:justify-start gap-2.5">
                {ONBOARDING_STEPS.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      i === onboardingIndex
                        ? "w-10 bg-[#002B7F]"
                        : "w-1.5 bg-gray-200"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="w-full py-5 md:py-6 rounded-2xl font-black text-white text-lg tracking-wide shadow-2xl hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-3 group relative overflow-hidden"
                style={{ backgroundColor: COLORS.primary }}
              >
                <span className="relative z-10">
                  {ONBOARDING_STEPS[onboardingIndex].buttonLabel}
                </span>
                <svg
                  className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
                {/* Subtle shine effect */}
                <div className="absolute top-0 -inset-full h-full w-1/2 z-0 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-shine" />
              </button>
            </div>

            {/* Footer / Indicator */}
            <div className="mt-8 md:mt-0 md:absolute md:bottom-12 md:left-24 flex justify-center md:justify-start">
              <div className="md:hidden w-32 h-1 bg-black/5 rounded-full" />
              <span className="hidden md:block text-[10px] font-bold text-gray-300 uppercase tracking-widest">
                Trusted by 50k+ contributors worldwide
              </span>
            </div>
          </section>
        </main>
      )}

      <style>{`
        @keyframes shine {
          100% {
            left: 200%;
          }
        }
        @keyframes progress {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
        .animate-shine {
          animation: shine 0.8s ease-in-out;
        }
        .animate-progress {
          animation: progress 2s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
};

export default SplashScreen;
