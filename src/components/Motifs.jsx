import React from 'react';

export function LandmarksMotif({ className = "w-40 h-40" }) {
  return (
    <svg className={className} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="80" cy="80" r="70" stroke="url(#landmarks-grad)" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.4" />
      <circle cx="80" cy="80" r="50" fill="url(#landmarks-fill)" opacity="0.15" />
      {/* Pose Landmark Skeleton Geometry */}
      <circle cx="80" cy="42" r="8" fill="url(#landmarks-grad)" />
      <line x1="80" y1="50" x2="80" y2="85" stroke="url(#landmarks-grad)" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="80" y1="58" x2="55" y2="75" stroke="url(#landmarks-grad)" strokeWidth="2" strokeLinecap="round" />
      <line x1="80" y1="58" x2="105" y2="75" stroke="url(#landmarks-grad)" strokeWidth="2" strokeLinecap="round" />
      <line x1="55" y1="75" x2="45" y2="98" stroke="url(#landmarks-grad)" strokeWidth="2" strokeLinecap="round" />
      <line x1="105" y1="75" x2="115" y2="98" stroke="url(#landmarks-grad)" strokeWidth="2" strokeLinecap="round" />
      <line x1="80" y1="85" x2="62" y2="120" stroke="url(#landmarks-grad)" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="80" y1="85" x2="98" y2="120" stroke="url(#landmarks-grad)" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="55" cy="75" r="4" fill="#38BDF8" />
      <circle cx="105" cy="75" r="4" fill="#38BDF8" />
      <circle cx="45" cy="98" r="4" fill="#818CF8" />
      <circle cx="115" cy="98" r="4" fill="#818CF8" />
      <circle cx="62" cy="120" r="4" fill="#6366F1" />
      <circle cx="98" cy="120" r="4" fill="#6366F1" />
      <defs>
        <linearGradient id="landmarks-grad" x1="40" y1="40" x2="120" y2="120" gradientUnits="userSpaceOnUse">
          <stop stopColor="#38BDF8" />
          <stop offset="1" stopColor="#6366F1" />
        </linearGradient>
        <radialGradient id="landmarks-fill" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(80 80) scale(50)">
          <stop stopColor="#38BDF8" />
          <stop offset="1" stopColor="#6366F1" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}

export function ModulesMotif({ className = "w-40 h-40" }) {
  return (
    <svg className={className} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="80" cy="80" r="70" stroke="url(#modules-grad)" strokeWidth="1.5" strokeDasharray="5 5" opacity="0.4" />
      <circle cx="80" cy="80" r="50" fill="url(#modules-fill)" opacity="0.15" />
      {/* 3D Modular Isometric Cubes */}
      <g transform="translate(80 80)">
        {/* Top Cube */}
        <path d="M0 -36 L24 -22 L0 -8 L-24 -22 Z" fill="#818CF8" />
        <path d="M-24 -22 L0 -8 V16 L-24 2 Z" fill="#6366F1" />
        <path d="M0 -8 L24 -22 V2 L0 16 Z" fill="#4F46E5" />
        {/* Left Bottom Cube */}
        <path d="M-36 0 L-12 14 L-36 28 L-60 14 Z" fill="#A78BFA" opacity="0.8" />
        <path d="M-60 14 L-36 28 V48 L-60 34 Z" fill="#8B5CF6" opacity="0.8" />
        <path d="M-36 28 L-12 14 V34 L-36 48 Z" fill="#7C3AED" opacity="0.8" />
        {/* Right Bottom Cube */}
        <path d="M36 0 L60 14 L36 28 L12 14 Z" fill="#C084FC" opacity="0.8" />
        <path d="M12 14 L36 28 V48 L12 34 Z" fill="#A855F7" opacity="0.8" />
        <path d="M36 28 L60 14 V34 L36 48 Z" fill="#9333EA" opacity="0.8" />
      </g>
      <defs>
        <linearGradient id="modules-grad" x1="40" y1="40" x2="120" y2="120" gradientUnits="userSpaceOnUse">
          <stop stopColor="#A855F7" />
          <stop offset="1" stopColor="#6366F1" />
        </linearGradient>
        <radialGradient id="modules-fill" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(80 80) scale(50)">
          <stop stopColor="#A855F7" />
          <stop offset="1" stopColor="#6366F1" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}

export function CulinaryMotif({ className = "w-40 h-40" }) {
  return (
    <svg className={className} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="80" cy="80" r="70" stroke="url(#culinary-grad)" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.4" />
      <circle cx="80" cy="80" r="50" fill="url(#culinary-fill)" opacity="0.15" />
      <path d="M60 90C52 90 48 84 48 76C48 66 58 62 62 62C62 52 70 44 80 44C90 44 98 52 98 62C102 62 112 66 112 76C112 84 108 90 100 90H60Z" fill="url(#culinary-grad)" opacity="0.85" />
      <rect x="58" y="92" width="44" height="12" rx="4" fill="url(#culinary-grad)" />
      <line x1="68" y1="94" x2="68" y2="102" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <line x1="80" y1="94" x2="80" y2="102" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <line x1="92" y1="94" x2="92" y2="102" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <defs>
        <linearGradient id="culinary-grad" x1="40" y1="40" x2="120" y2="120" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F59E0B" />
          <stop offset="1" stopColor="#EF4444" />
        </linearGradient>
        <radialGradient id="culinary-fill" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(80 80) scale(50)">
          <stop stopColor="#F59E0B" />
          <stop offset="1" stopColor="#EF4444" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}

export function CorporateMotif({ className = "w-40 h-40" }) {
  return (
    <svg className={className} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="80" cy="80" r="70" stroke="url(#corp-grad)" strokeWidth="1.5" strokeDasharray="6 6" opacity="0.4" />
      <circle cx="80" cy="80" r="52" fill="url(#corp-fill)" opacity="0.15" />
      <path d="M80 42L112 56V82C112 102 98 118 80 124C62 118 48 102 48 82V56L80 42Z" stroke="url(#corp-grad)" strokeWidth="2.5" fill="none" />
      <path d="M70 70H90M70 82H90M70 94H84" stroke="url(#corp-grad)" strokeWidth="2" strokeLinecap="round" />
      <defs>
        <linearGradient id="corp-grad" x1="40" y1="40" x2="120" y2="120" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3B82F6" />
          <stop offset="1" stopColor="#6366F1" />
        </linearGradient>
        <radialGradient id="corp-fill" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(80 80) scale(52)">
          <stop stopColor="#3B82F6" />
          <stop offset="1" stopColor="#6366F1" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}

export function BakeryMotif({ className = "w-40 h-40" }) {
  return (
    <svg className={className} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="80" cy="80" r="70" stroke="url(#bake-grad)" strokeWidth="1.5" strokeDasharray="5 5" opacity="0.4" />
      <circle cx="80" cy="80" r="50" fill="url(#bake-fill)" opacity="0.15" />
      <path d="M50 110H110V88C110 88 102 92 95 88C88 84 82 90 80 90C78 90 72 84 65 88C58 92 50 88 50 88V110Z" fill="url(#bake-grad)" />
      <path d="M60 88H100V70C100 70 94 73 90 70C86 67 82 72 80 72C78 72 74 67 70 70C66 73 60 70 60 70V88Z" fill="url(#bake-grad)" opacity="0.9" />
      <rect x="78" y="52" width="4" height="14" rx="2" fill="#F59E0B" />
      <circle cx="80" cy="48" r="3" fill="#EF4444" />
      <defs>
        <linearGradient id="bake-grad" x1="40" y1="40" x2="120" y2="120" gradientUnits="userSpaceOnUse">
          <stop stopColor="#EC4899" />
          <stop offset="1" stopColor="#F43F5E" />
        </linearGradient>
        <radialGradient id="bake-fill" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(80 80) scale(50)">
          <stop stopColor="#EC4899" />
          <stop offset="1" stopColor="#F43F5E" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}

export function MicrogreensMotif({ className = "w-40 h-40" }) {
  return (
    <svg className={className} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="80" cy="80" r="70" stroke="url(#green-grad)" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.4" />
      <circle cx="80" cy="80" r="50" fill="url(#green-fill)" opacity="0.15" />
      <path d="M80 115V75" stroke="url(#green-grad)" strokeWidth="3" strokeLinecap="round" />
      <path d="M80 85C80 85 96 82 102 68C102 68 88 64 78 78" fill="url(#green-grad)" />
      <path d="M80 75C80 75 64 72 58 58C58 58 72 54 82 68" fill="url(#green-grad)" opacity="0.85" />
      <ellipse cx="80" cy="116" rx="28" ry="8" fill="url(#green-grad)" opacity="0.4" />
      <defs>
        <linearGradient id="green-grad" x1="40" y1="40" x2="120" y2="120" gradientUnits="userSpaceOnUse">
          <stop stopColor="#10B981" />
          <stop offset="1" stopColor="#059669" />
        </linearGradient>
        <radialGradient id="green-fill" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(80 80) scale(50)">
          <stop stopColor="#10B981" />
          <stop offset="1" stopColor="#059669" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}

export function SpiceMotif({ className = "w-40 h-40" }) {
  return (
    <svg className={className} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="80" cy="80" r="70" stroke="url(#spice-grad)" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.4" />
      <circle cx="80" cy="80" r="50" fill="url(#spice-fill)" opacity="0.15" />
      <path d="M50 85C50 105 63 118 80 118C97 118 110 105 110 85H50Z" fill="url(#spice-grad)" />
      <path d="M80 44C80 44 94 56 94 72C94 80 88 86 80 86C72 86 66 80 66 72C66 56 80 44 80 44Z" fill="url(#spice-flame)" opacity="0.95" />
      <defs>
        <linearGradient id="spice-grad" x1="40" y1="40" x2="120" y2="120" gradientUnits="userSpaceOnUse">
          <stop stopColor="#EA580C" />
          <stop offset="1" stopColor="#DC2626" />
        </linearGradient>
        <linearGradient id="spice-flame" x1="66" y1="44" x2="94" y2="86" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FBBF24" />
          <stop offset="1" stopColor="#EF4444" />
        </linearGradient>
        <radialGradient id="spice-fill" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(80 80) scale(50)">
          <stop stopColor="#EA580C" />
          <stop offset="1" stopColor="#DC2626" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}

export function WellnessMotif({ className = "w-40 h-40" }) {
  return (
    <svg className={className} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="80" cy="80" r="70" stroke="url(#well-grad)" strokeWidth="1.5" strokeDasharray="6 3" opacity="0.4" />
      <circle cx="80" cy="80" r="50" fill="url(#well-fill)" opacity="0.15" />
      <path d="M80 45C80 45 92 65 92 80C92 90 86 95 80 95C74 95 68 90 68 80C68 65 80 45 80 45Z" fill="url(#well-grad)" />
      <path d="M60 65C60 65 72 80 72 92C72 98 68 102 62 102C56 102 52 98 52 92C52 80 60 65 60 65Z" fill="url(#well-grad)" opacity="0.8" />
      <path d="M100 65C100 65 88 80 88 92C88 98 92 102 98 102C104 102 108 98 108 92C108 80 100 65 100 65Z" fill="url(#well-grad)" opacity="0.8" />
      <circle cx="80" cy="108" r="4" fill="#06B6D4" />
      <defs>
        <linearGradient id="well-grad" x1="40" y1="40" x2="120" y2="120" gradientUnits="userSpaceOnUse">
          <stop stopColor="#14B8A6" />
          <stop offset="1" stopColor="#0EA5E9" />
        </linearGradient>
        <radialGradient id="well-fill" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(80 80) scale(50)">
          <stop stopColor="#14B8A6" />
          <stop offset="1" stopColor="#0EA5E9" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}

export function ViolinMotif({ className = "w-40 h-40" }) {
  return (
    <svg className={className} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="80" cy="80" r="70" stroke="url(#music-grad)" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.4" />
      <circle cx="80" cy="80" r="50" fill="url(#music-fill)" opacity="0.15" />
      <path d="M72 44C66 50 64 60 70 70C62 76 60 90 70 104C74 110 80 114 86 114C92 114 98 110 102 104C112 90 110 76 102 70C108 60 106 50 100 44C92 48 80 48 72 44Z" stroke="url(#music-grad)" strokeWidth="2.5" fill="none" />
      <line x1="84" y1="36" x2="84" y2="120" stroke="url(#music-grad)" strokeWidth="1.5" />
      <line x1="88" y1="36" x2="88" y2="120" stroke="url(#music-grad)" strokeWidth="1.5" />
      <circle cx="86" cy="80" r="3" fill="#A855F7" />
      <defs>
        <linearGradient id="music-grad" x1="40" y1="40" x2="120" y2="120" gradientUnits="userSpaceOnUse">
          <stop stopColor="#A855F7" />
          <stop offset="1" stopColor="#6366F1" />
        </linearGradient>
        <radialGradient id="music-fill" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(80 80) scale(50)">
          <stop stopColor="#A855F7" />
          <stop offset="1" stopColor="#6366F1" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}

export function JewelleryMotif({ className = "w-40 h-40" }) {
  return (
    <svg className={className} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="80" cy="80" r="70" stroke="url(#jewel-grad)" strokeWidth="1.5" strokeDasharray="5 5" opacity="0.4" />
      <circle cx="80" cy="80" r="50" fill="url(#jewel-fill)" opacity="0.15" />
      <path d="M54 66L80 42L106 66L80 118L54 66Z" stroke="url(#jewel-grad)" strokeWidth="2" fill="none" />
      <path d="M54 66H106" stroke="url(#jewel-grad)" strokeWidth="1.5" />
      <path d="M68 66L80 118L92 66" stroke="url(#jewel-grad)" strokeWidth="1.5" fill="none" />
      <path d="M68 66L80 42L92 66" stroke="url(#jewel-grad)" strokeWidth="1.5" fill="none" />
      <defs>
        <linearGradient id="jewel-grad" x1="40" y1="40" x2="120" y2="120" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F59E0B" />
          <stop offset="1" stopColor="#EAB308" />
        </linearGradient>
        <radialGradient id="jewel-fill" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(80 80) scale(50)">
          <stop stopColor="#F59E0B" />
          <stop offset="1" stopColor="#EAB308" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}

export const motifs = {
  landmarks: LandmarksMotif,
  modules: ModulesMotif,
  culinary: CulinaryMotif,
  corporate: CorporateMotif,
  bakery: BakeryMotif,
  microgreens: MicrogreensMotif,
  spice: SpiceMotif,
  wellness: WellnessMotif,
  violin: ViolinMotif,
  jewellery: JewelleryMotif
};

export const Motifs = motifs;
