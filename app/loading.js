'use client';

import Image from 'next/image';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950">
      <div className="flex flex-col items-center justify-center space-y-8">
        {/* Logo Animation Container */}
        <div className="relative">
          {/* Outer rotating ring */}
          <div className="absolute inset-0 w-32 h-32 border-2 border-transparent border-t-cyan-500 border-r-blue-500 rounded-full animate-spin"></div>
          
          {/* Inner pulsing ring */}
          <div className="absolute inset-2 w-28 h-28 border border-transparent border-t-emerald-500 border-l-green-500 rounded-full animate-spin-slow"></div>
          
          {/* Logo container with pulse effect */}
          <div className="relative w-32 h-32 flex items-center justify-center">
            <div className="animate-pulse-scale">
              <Image
                src="/l.png"
                alt="TechTalks logo"
                width={80}
                height={80}
                className="w-20 h-20 drop-shadow-lg"
              />
            </div>
          </div>
          
          {/* Glowing effect */}
          <div className="absolute inset-0 w-32 h-32 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-xl animate-pulse"></div>
        </div>

        {/* Loading Text */}
        <div className="text-center space-y-3">
          <h2 className="text-2xl font-bold text-white animate-fade-in">
            TechTalks
          </h2>
          <p className="text-slate-300 animate-fade-in-delay">
            Loading your learning experience...
          </p>
          
          {/* Progress dots */}
          <div className="flex justify-center space-x-2 mt-4">
            <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce-delay-1"></div>
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce-delay-2"></div>
          </div>
        </div>

        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full blur-3xl animate-float-delay"></div>
        </div>
      </div>
    </div>
  );
}

