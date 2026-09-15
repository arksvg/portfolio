import React, { useState, useEffect } from 'react';
import { MapPin, Navigation, Clock, ExternalLink } from 'lucide-react';

export default function MapWidget({ item }) {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format to Indian Standard Time (Asia/Kolkata)
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <a
      href={item.href || "https://www.google.com/maps/@9.8399616,78.4832344,13z"}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block w-full h-[220px] rounded-3xl overflow-hidden glass-card p-0 border border-zinc-200/20 dark:border-white/10 hover:border-indigo-500/50 transition-all duration-500 shadow-lg"
    >
      {/* Map Graphic / Background */}
      <div className="absolute inset-0 bg-[#0f172a] overflow-hidden">
        {/* Subtle Map Grid lines */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" />
        
        {/* Stylized Topographic / Geometric Curves */}
        <svg className="absolute inset-0 w-full h-full opacity-30 stroke-sky-400/40" xmlns="http://www.w3.org/2000/svg">
          <circle cx="70%" cy="50%" r="40" fill="none" strokeWidth="1" strokeDasharray="3 3" />
          <circle cx="70%" cy="50%" r="80" fill="none" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="70%" cy="50%" r="130" fill="none" strokeWidth="1" strokeDasharray="5 5" />
          <path d="M 0 100 Q 150 40 400 120 T 800 60" fill="none" strokeWidth="1.5" />
          <path d="M 0 160 Q 200 100 450 180 T 800 120" fill="none" strokeWidth="1" />
        </svg>

        {/* Animated Clouds from original Bento assets */}
        <img
          src="/assets/cloud.png"
          alt="Cloud layer"
          className="absolute -top-12 -left-12 w-[450px] opacity-25 filter blur-[2px] animate-cloud-drift pointer-events-none"
        />
        <img
          src="/assets/cloud.png"
          alt="Cloud layer high"
          className="absolute -bottom-16 -right-16 w-[400px] opacity-40 filter blur-[1px] animate-cloud-drift pointer-events-none"
          style={{ animationDuration: '24s', animationDirection: 'reverse' }}
        />

        {/* Animated Plane & Plane Shadow */}
        <div className="absolute top-1/2 left-1/3 pointer-events-none animate-plane-float">
          <img
            src="/assets/planeshadow.png"
            alt=""
            className="w-7 opacity-50 translate-x-3 translate-y-3"
          />
          <img
            src="/assets/plane.png"
            alt="Airplane"
            className="w-7 filter drop-shadow-[0_8px_12px_rgba(0,0,0,0.5)] -translate-y-3"
          />
        </div>

        {/* Location Radar Target Pin */}
        <div className="absolute right-[28%] top-[48%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
          {/* Pulsing radar waves */}
          <div className="absolute w-12 h-12 rounded-full bg-sky-400/30 animate-radar-ring" />
          <div className="absolute w-8 h-8 rounded-full bg-indigo-500/40 animate-ping" />
          {/* Center Pin Marker */}
          <div className="relative z-10 w-6 h-6 rounded-full bg-white shadow-xl flex items-center justify-center border-2 border-sky-500">
            <div className="w-2.5 h-2.5 rounded-full bg-indigo-600 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Foreground Information Floating Glass Chips */}
      <div className="absolute inset-0 p-4 flex flex-col justify-between z-20 pointer-events-none">
        {/* Top Info Bar */}
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-950/75 backdrop-blur-md border border-white/10 text-white text-xs font-semibold shadow-lg">
            <MapPin className="w-3.5 h-3.5 text-sky-400 animate-bounce" />
            <span>Sivaganga, Tamil Nadu</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-zinc-950/75 backdrop-blur-md border border-white/10 text-zinc-300 text-xs font-mono shadow-lg">
            <Clock className="w-3 h-3 text-emerald-400" />
            <span>{time || "IST"}</span>
          </div>
        </div>

        {/* Bottom CTA / Coordinates Bar */}
        <div className="flex items-end justify-between">
          <div className="px-3 py-1.5 rounded-xl bg-zinc-950/75 backdrop-blur-md border border-white/10 text-zinc-400 text-[11px] font-mono">
            9.84° N, 78.48° E • India (UTC+5:30)
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-600/90 text-white text-xs font-medium backdrop-blur-md shadow-lg group-hover:bg-indigo-500 group-hover:scale-105 transition-all">
            <span>Explore Map</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    </a>
  );
}
