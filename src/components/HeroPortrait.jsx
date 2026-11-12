import React from 'react';
import { profile } from '../data/resume';

export default function HeroPortrait() {
  return (
    <div className="relative w-full max-w-[360px] sm:max-w-[430px] lg:max-w-[500px] aspect-[4/5] flex items-center justify-center select-none mx-auto shrink-0 py-2">
      {/* ============================================================== */}
      {/* 1. ATMOSPHERIC AMBIENT GLOW                                    */}
      {/* ============================================================== */}
      <div 
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
      >
        <div className="w-[85%] h-[85%] rounded-full bg-gradient-to-br from-blue-600/35 via-indigo-600/30 to-purple-700/25 blur-[85px] animate-pulse-glow" />
      </div>

      {/* ============================================================== */}
      {/* 2. SLEEK DIAGONAL GLOW CAPSULES (Matching screenshot)          */}
      {/* ============================================================== */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
      >
        {/* Main prominent royal blue diagonal capsule */}
        <div 
          className="absolute w-44 sm:w-56 h-[390px] sm:h-[490px] rounded-full bg-gradient-to-b from-blue-600/50 via-indigo-600/35 to-transparent border border-blue-400/20 shadow-[0_0_60px_rgba(37,99,235,0.25)]"
          style={{ transform: 'rotate(-35deg)' }}
        />

        {/* Secondary overlapping violet capsule */}
        <div 
          className="absolute w-36 sm:w-44 h-[320px] sm:h-[410px] rounded-full bg-gradient-to-b from-indigo-700/30 via-purple-700/20 to-transparent border border-purple-500/15"
          style={{ transform: 'rotate(-35deg) translate(-25px, 20px)' }}
        />
      </div>

      {/* ============================================================== */}
      {/* 3. FLOATING GLASS WIDGET CARDS                                  */}
      {/* ============================================================== */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none z-20">
        {/* Top-Left: Code Badge </> */}
        <div 
          className="absolute top-[18%] left-[2%] sm:left-[-10px] w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#0d1226]/85 border border-white/15 backdrop-blur-xl shadow-2xl flex items-center justify-center animate-float-slow"
          style={{ transform: 'rotate(-8deg)' }}
        >
          <span className="font-mono font-bold text-lg sm:text-xl text-indigo-400">&lt;/&gt;</span>
        </div>

        {/* Bottom-Right: Cyan Bar Chart Badge */}
        <div 
          className="absolute bottom-[22%] right-[2%] sm:right-[-10px] w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#0d1226]/85 border border-white/15 backdrop-blur-xl shadow-2xl flex items-center justify-center animate-float-reverse"
          style={{ transform: 'rotate(8deg)' }}
        >
          <div className="flex items-end gap-1 px-1">
            <span className="w-1.5 h-3 bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(34,211,238,0.6)]" />
            <span className="w-1.5 h-5 bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(34,211,238,0.6)]" />
            <span className="w-1.5 h-4 bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(34,211,238,0.6)]" />
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* 4. HERO PORTRAIT CUTOUT (No Background Subject)                */}
      {/* ============================================================== */}
      <div className="relative z-10 w-[88%] sm:w-[90%] h-auto max-h-[96%] flex items-end justify-center pointer-events-auto">
        <img
          src="/assets/profile_photo_nobg.png"
          alt={profile.name}
          className="w-full h-auto object-contain max-h-[450px] sm:max-h-[520px] drop-shadow-[0_25px_50px_rgba(0,0,0,0.85)]"
          loading="eager"
        />
      </div>
    </div>
  );
}
