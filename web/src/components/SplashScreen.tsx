import React, { useEffect, useState } from "react";

type SplashScreenProps = {
  onFinish: () => void;
};

export default function SplashScreen({ onFinish }: SplashScreenProps) {
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Start fade out after 2s
    const timer1 = setTimeout(() => setFading(true), 2000);
    // Unmount after fade completes (2.5s total)
    const timer2 = setTimeout(onFinish, 2500);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-night-air transition-opacity duration-700 ${
        fading ? "opacity-0" : "opacity-100"
      }`}
    >
      <style>{`
        .bg-night-air {
          background-color: #0E1624;
        }
        
        .text-limestone {
          color: #E2D6CD;
        }
        
        @keyframes breathe {
          0%, 100% {
            opacity: 0.7;
            transform: scale(1);
          }
          50% {
            opacity: 0.9;
            transform: scale(1.02);
          }
        }
        
        .animate-breathe {
          animation: breathe 3s ease-in-out infinite;
        }
      `}</style>

      {/* THE LOGO - Honed Limestone */}
      <svg
        viewBox="0 0 200 120"
        className="w-48 h-auto text-limestone mb-8"
        fill="none"
        stroke="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer Arc: The Embrace (Breathing Animation) */}
        <path
          d="M 72 70 C 88 80, 112 80, 128 70"
          strokeWidth="12"
          strokeLinecap="round"
          className="animate-breathe"
        />
        {/* Inner Arc: The Cared-for (Solid) */}
        <path
          d="M 82 68 C 94 74, 106 74, 118 68"
          strokeWidth="8.5"
          strokeLinecap="round"
          style={{ opacity: 1 }}
        />
      </svg>

      {/* Brand Name */}
      <h1 className="text-limestone text-3xl font-bold tracking-[0.3em] uppercase">
        Kerunity
      </h1>
    </div>
  );
}
