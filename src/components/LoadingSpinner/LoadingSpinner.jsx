"use client";
import React, { useEffect, useState } from "react";

const LoadingSpinner = () => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => setHidden(true), 300);
          }, 100);
          return 100;
        }
        return Math.min(prev + Math.random() * 30 + 30, 100);
      });
    }, 30);
    return () => clearInterval(interval);
  }, []);

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#f5f4f0] transition-opacity duration-700 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Animated logo container */}
      <div className="relative flex items-center justify-center w-28 h-28 mb-8">
        {/* Outer rotating ring */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, #38bdf8, #6366f1, #a855f7, #38bdf8)",
            animation: "spin 1.6s linear infinite",
          }}
        />
        {/* Inner static circle with profile logo (does not spin) */}
        <div className="relative z-10 w-24 h-24 rounded-full bg-[#f5f4f0] flex items-center justify-center shadow-lg p-1 overflow-hidden">
          <img
            src="/logo.jpg"
            alt="Abdullah Al Zubaer Logo"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>

      {/* Name */}
      <h1 className="text-xl font-bold text-gray-800 mb-1 tracking-wide">
        Abdullah Al Zubaer
      </h1>
      <p className="text-sm text-gray-500 mb-8 tracking-widest uppercase">
        Full Stack Developer
      </p>

      {/* Progress bar */}
      <div className="w-56 h-1 rounded-full bg-gray-200 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-sky-400 to-blue-600 transition-all duration-300 ease-out"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>

      {/* Keyframe for spin */}
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default LoadingSpinner;
