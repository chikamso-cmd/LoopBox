import React from "react";

// interface LogoProps {
//   color?: string;
//   size?: "sm" | "md" | "lg";
// }

const Logo = ({ color = "#D4A056", size = "md" }) => {
  const sizes = {
    sm: "text-xl",
    md: "text-3xl",
    lg: "text-5xl",
  };

  const iconSizes = {
    sm: "w-8 h-8",
    md: "w-14 h-14",
    lg: "w-24 h-24",
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className={`${iconSizes[size]} relative group`}>
        {/* Modern Fintech "Loop" SVG */}
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Main Loop */}
          <path
            d="M30 50C30 38.9543 38.9543 30 50 30C61.0457 30 70 38.9543 70 50C70 61.0457 61.0457 70 50 70"
            stroke={color}
            strokeWidth="10"
            strokeLinecap="round"
          />
          {/* Second Loop Offset */}
          <path
            d="M50 30C61.0457 30 70 38.9543 70 50C70 61.0457 61.0457 70 50 70C38.9543 70 30 61.0457 30 50"
            stroke={color}
            strokeWidth="10"
            strokeOpacity="0.4"
            strokeLinecap="round"
          />
          {/* Central Focus Point */}
          <circle cx="50" cy="50" r="8" fill={color} />
        </svg>
      </div>
      <span
        className={`${sizes[size]} font-black tracking-tighter uppercase italic`}
        style={{ color }}
      >
        LoopBox
      </span>
    </div>
  );
};

export default Logo;
