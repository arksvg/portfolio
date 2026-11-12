import React from 'react';
import { profile } from '../data/resume';

export default function HeroPortrait() {
  return (
    <div className="relative w-full max-w-[340px] sm:max-w-[400px] md:max-w-[430px] lg:max-w-[480px] aspect-[4/5] flex items-center justify-center select-none mx-auto shrink-0 py-4">
      {/* ============================================================== */}
      {/* 1. ATMOSPHERIC NEON LIGHTING (Central Violet / Magenta Auras)   */}
      {/* ============================================================== */}
      <div 
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
      >
        {/* Core vibrant neon purple/magenta spotlight directly behind head */}
        <div className="w-[68%] h-[68%] rounded-full bg-gradient-to-tr from-purple-600 via-fuchsia-500 to-indigo-500 opacity-80 blur-[55px] sm:blur-[70px] animate-pulse-glow" />

        {/* Secondary wider ambient aura extending outward */}
        <div className="absolute w-[85%] h-[85%] rounded-full bg-gradient-to-br from-indigo-600/50 via-purple-700/40 to-pink-600/30 opacity-60 blur-[80px] sm:blur-[100px]" />
      </div>

      {/* ============================================================== */}
      {/* 2. FLOATING TRANSLUCENT GLASS PLATES (Layered Behind Subject)  */}
      {/* ============================================================== */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
      >
        {/* Main large tilted frosted glass card (tilted clockwise ~8°) */}
        <div 
          className="absolute w-[76%] h-[82%] rounded-[2.5rem] sm:rounded-[3rem] backdrop-blur-xl bg-gradient-to-br from-white/15 via-purple-500/10 to-indigo-600/15 border border-white/25 dark:border-white/20 shadow-[0_8px_32px_0_rgba(124,58,237,0.35)] animate-float-slow"
          style={{ transformOrigin: 'center center' }}
        />

        {/* Intersecting secondary glass card (tilted counter-clockwise ~-10°) */}
        <div 
          className="absolute w-[74%] h-[80%] rounded-[2.2rem] sm:rounded-[2.8rem] backdrop-blur-lg bg-gradient-to-tr from-purple-900/25 via-white/5 to-indigo-900/25 border border-purple-400/25 dark:border-purple-300/20 shadow-[0_4px_24px_rgba(0,0,0,0.3)] animate-float-reverse"
          style={{ transformOrigin: 'center center' }}
        />
      </div>

      {/* ============================================================== */}
      {/* 3. LUMINOUS ORBITAL RINGS & COSMIC PATHS                        */}
      {/* ============================================================== */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-10"
      >
        {/* Primary glowing orbital ellipse wrapping around */}
        <div 
          className="absolute w-[104%] h-[56%] rounded-[50%] border border-purple-400/45 shadow-[0_0_18px_rgba(192,132,252,0.45)]"
          style={{ transform: 'rotate(24deg)' }}
        />

        {/* Secondary counter-angled orbital ring */}
        <div 
          className="absolute w-[100%] h-[50%] rounded-[50%] border border-indigo-400/40 shadow-[0_0_14px_rgba(129,140,248,0.35)]"
          style={{ transform: 'rotate(-28deg)' }}
        />
      </div>

      {/* ============================================================== */}
      {/* 4. FLOATING 3D GLOSSY SPHERES & GLASS CHIPS                     */}
      {/* ============================================================== */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 pointer-events-none z-10"
      >
        {/* Top-Left Floating Glass Chip */}
        <div 
          className="absolute top-[8%] left-[2%] sm:left-[4%] w-10 h-12 sm:w-14 sm:h-16 rounded-2xl backdrop-blur-md bg-white/15 border border-white/35 shadow-[0_8px_24px_rgba(0,0,0,0.3)] animate-float-chip-1"
          style={{ transform: 'rotate(18deg)' }}
        />

        {/* Bottom-Right Floating Glass Chip */}
        <div 
          className="absolute bottom-[6%] right-[2%] sm:right-[4%] w-12 h-10 sm:w-16 sm:h-14 rounded-2xl backdrop-blur-md bg-white/15 border border-purple-400/35 shadow-[0_8px_24px_rgba(0,0,0,0.3)] animate-float-chip-2"
          style={{ transform: 'rotate(-14deg)' }}
        />

        {/* 3D Glossy Magenta Sphere (Right Edge) */}
        <div 
          className="absolute top-[34%] right-[1%] sm:right-[2%] w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[radial-gradient(circle_at_35%_35%,_#ffa6f2,_#c026d3_65%,_#581c87_100%)] shadow-[0_0_16px_rgba(244,114,182,0.8)] animate-float-orb"
        />

        {/* 3D Glossy Violet Sphere (Left Edge) */}
        <div 
          className="absolute top-[38%] left-[1%] sm:left-[2%] w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[radial-gradient(circle_at_35%_35%,_#c084fc,_#7c3aed_65%,_#3b0764_100%)] shadow-[0_0_14px_rgba(168,85,247,0.7)] animate-float-orb-reverse"
        />

        {/* Subtle luminous accent particles */}
        <span className="absolute top-[22%] right-[16%] w-1.5 h-1.5 rounded-full bg-fuchsia-400/80 shadow-[0_0_8px_rgba(232,121,249,0.9)] animate-ping" />
        <span className="absolute bottom-[28%] left-[12%] w-1.5 h-1.5 rounded-full bg-indigo-400/80 shadow-[0_0_8px_rgba(129,140,248,0.9)]" />
      </div>

      {/* ============================================================== */}
      {/* 5. HERO PORTRAIT CUTOUT (Subject with Transparent Background)  */}
      {/* ============================================================== */}
      <div className="relative z-20 w-[84%] sm:w-[86%] h-auto max-h-[96%] flex items-end justify-center pointer-events-auto">
        <img
          src="/assets/profile_photo_nobg.png"
          alt={profile.name}
          className="w-full h-auto object-contain object-bottom drop-shadow-[0_16px_32px_rgba(124,58,237,0.4)] transition-transform duration-500 ease-out hover:scale-[1.02]"
          loading="eager"
          decoding="async"
        />
      </div>
    </div>
  );
}
