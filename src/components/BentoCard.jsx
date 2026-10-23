import React from 'react';
import { 
  ExternalLink, Mail, MessageCircle, FileText, 
  GraduationCap, Rocket, Sparkles, ArrowUpRight, Award, Globe
} from 'lucide-react';
import { LinkedInIcon, GitHubIcon, InstagramIcon, WhatsAppIcon, YouTubeIcon, FigmaIcon, HackerRankIcon } from './Icons';
import { motifs } from './Motifs';
import MapWidget from './MapWidget';

export default function BentoCard({ item, onSelect, onToast }) {
  if (item.type === 'map_widget') {
    return <MapWidget item={item} />;
  }

  const getSourceIcon = () => {
    if (item.sourceType === 'github') return <GitHubIcon className="w-4 h-4" />;
    if (item.sourceType === 'figma') return <FigmaIcon className="w-4 h-4" />;
    if (item.sourceType === 'youtube') return <YouTubeIcon className="w-4 h-4 text-red-500" />;
    if (item.sourceType === 'hackerrank') return <HackerRankIcon className="w-4 h-4 text-emerald-400" />;
    if (item.sourceType === 'drive') return <FileText className="w-4 h-4 text-amber-400" />;
    if (item.icon === 'Mail') return <Mail className="w-4 h-4 text-red-400" />;
    if (item.icon === 'Linkedin') return <LinkedInIcon className="w-4 h-4 text-sky-400" />;
    if (item.icon === 'MessageCircle') return <WhatsAppIcon className="w-4 h-4 text-emerald-400" />;
    if (item.icon === 'Instagram') return <InstagramIcon className="w-4 h-4 text-pink-400" />;
    if (item.icon === 'GraduationCap') return <GraduationCap className="w-5 h-5 text-blue-400" />;
    if (item.icon === 'Rocket') return <Rocket className="w-5 h-5 text-purple-400" />;
    return <ArrowUpRight className="w-4 h-4" />;
  };

  // Bio Cards (About Me)
  if (item.type === 'bio_card') {
    return (
      <div className="relative group overflow-hidden rounded-3xl glass-card p-6 md:p-7 flex flex-col justify-between min-h-[190px] border border-zinc-200/20 dark:border-white/10 hover:border-indigo-500/40">
        <div className={`absolute top-0 right-0 w-36 h-36 bg-gradient-to-br ${item.accentColor} rounded-full blur-3xl -z-10 opacity-70 group-hover:opacity-100 transition-opacity`} />
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 dark:bg-white/10 text-indigo-500 dark:text-indigo-300 border border-indigo-500/20 dark:border-white/10 flex items-center gap-1.5">
              {getSourceIcon()}
              {item.title}
            </span>
            <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
              {item.highlight}
            </span>
          </div>
          <p className="text-zinc-700 dark:text-zinc-300 text-sm md:text-base leading-relaxed">
            {item.text}
          </p>
        </div>
      </div>
    );
  }

  // Client-Side Projects with Motifs (Matching Exact Client Project Style)
  if (item.motif) {
    const MotifComponent = motifs[item.motif];
    return (
      <button
        type="button"
        onClick={() => onSelect(item)}
        className="w-full text-left group rounded-3xl glass-card overflow-hidden border border-zinc-200/20 dark:border-white/10 hover:border-indigo-500/50 shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
      >
        {/* Concept View Graphic Banner */}
        <div className="relative h-48 w-full flex items-center justify-center overflow-hidden bg-zinc-900/60 dark:bg-zinc-950/80 border-b border-white/5">
          <div 
            className="absolute h-56 w-56 rounded-full blur-[70px] transition-all group-hover:scale-125 duration-500 opacity-60 group-hover:opacity-100"
            style={{ backgroundColor: item.glowColor || 'rgba(99, 102, 241, 0.25)' }}
          />
          {MotifComponent && (
            <MotifComponent className="relative w-40 h-40 transition-transform duration-500 group-hover:scale-110" />
          )}

          {/* Category Pill */}
          <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-semibold text-indigo-300 shadow-md">
            <Sparkles className="w-3 h-3 text-indigo-400" />
            <span>{item.category || "Client Project"}</span>
          </div>

          <span className="absolute bottom-3 right-3 font-mono text-[10px] text-zinc-400 bg-black/50 px-2 py-0.5 rounded-md backdrop-blur-sm border border-white/10">
            concept view
          </span>
        </div>

        {/* Content Body */}
        <div className="p-6 flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-lg font-bold font-heading text-zinc-900 dark:text-white group-hover:text-indigo-400 transition-colors">
                  {item.name || item.title}
                </h3>
                <p className="text-sm font-medium text-indigo-500 dark:text-indigo-400 mt-0.5">
                  {item.tagline || item.subtitle}
                </p>
              </div>
              <ArrowUpRight
                size={18}
                className="shrink-0 mt-1 text-zinc-400 group-hover:text-indigo-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
              />
            </div>

            <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300 line-clamp-2">
              {item.description}
            </p>
          </div>

          {/* Tech Stack Chips */}
          <div className="mt-4 pt-3 border-t border-zinc-200/10 dark:border-white/5 flex flex-wrap gap-2">
            {(item.tech || item.tags)?.map((t) => (
              <span
                key={t}
                className="font-mono text-[11px] px-2.5 py-1 rounded-xl bg-zinc-100 dark:bg-white/5 text-zinc-600 dark:text-zinc-400 border border-zinc-200/40 dark:border-white/10"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </button>
    );
  }

  // Social Connect Mini Cards
  if (item.category === 'Email' || item.category === 'Professional Network' || item.category === 'Direct Messaging' || item.category === 'Social') {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex flex-col justify-between p-5 rounded-3xl glass-card border border-zinc-200/20 dark:border-white/10 hover:border-indigo-500/50 min-h-[170px] overflow-hidden"
      >
        <div className="flex items-start justify-between">
          <div 
            className="w-11 h-11 rounded-2xl flex items-center justify-center text-white shadow-md transition-transform group-hover:scale-110"
            style={{ backgroundColor: item.color || '#6366f1' }}
          >
            {item.favicon ? (
              <img src={item.favicon} alt="" className="w-6 h-6 object-contain" />
            ) : (
              getSourceIcon()
            )}
          </div>

          <div className="p-2 rounded-xl bg-zinc-100 dark:bg-white/5 group-hover:bg-indigo-500 group-hover:text-white transition-all">
            <ArrowUpRight className="w-4 h-4 text-zinc-500 dark:text-zinc-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <h4 className="font-heading font-bold text-lg text-zinc-900 dark:text-white">
              {item.title}
            </h4>
            {item.followers && (
              <span className="px-2 py-0.5 rounded-full bg-pink-500/20 text-pink-400 text-[11px] font-bold">
                {item.followers} followers
              </span>
            )}
          </div>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 truncate">
            {item.subtitle}
          </p>
        </div>

        {item.image && (
          <div className="absolute right-0 bottom-0 w-24 h-24 opacity-20 group-hover:opacity-40 transition-opacity -rotate-12 translate-x-4 translate-y-4">
            <img src={item.image} alt="" className="w-full h-full object-cover rounded-2xl" />
          </div>
        )}
      </a>
    );
  }

  // Standard Projects / Figma / Achievements Cards
  return (
    <div
      onClick={() => onSelect(item)}
      className="group relative flex flex-col justify-between overflow-hidden rounded-3xl glass-card cursor-pointer border border-zinc-200/20 dark:border-white/10 hover:border-indigo-500/50 min-h-[220px]"
    >
      {/* Media Image Banner */}
      {item.image && (
        <div className="relative w-full h-44 overflow-hidden bg-zinc-900">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent" />
          
          {/* Top badges */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
            {item.category && (
              <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-semibold text-indigo-300 flex items-center gap-1 shadow-md">
                {getSourceIcon()}
                <span>{item.category}</span>
              </span>
            )}
            {item.badge && (
              <span className="px-2.5 py-1 rounded-full bg-amber-500/90 text-white text-[11px] font-bold shadow-md">
                {item.badge}
              </span>
            )}
          </div>
        </div>
      )}

      {/* Content Container */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {!item.image && (
            <div className="flex items-center justify-between mb-2">
              <span className="px-2.5 py-1 rounded-full bg-indigo-500/10 dark:bg-white/10 text-[11px] font-semibold text-indigo-400 dark:text-indigo-300 flex items-center gap-1">
                {getSourceIcon()}
                <span>{item.category || "Project"}</span>
              </span>
              {item.badge && (
                <span className="text-xs font-bold text-amber-400">{item.badge}</span>
              )}
            </div>
          )}

          <h3 className="font-heading font-bold text-base md:text-lg text-zinc-900 dark:text-white line-clamp-1 group-hover:text-indigo-400 transition-colors">
            {item.title}
          </h3>

          <p className="mt-1.5 text-xs md:text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2 leading-relaxed">
            {item.description || item.subtitle || "Click to view prototype and technical details."}
          </p>
        </div>

        {/* Footer / Tags & Direct Link */}
        <div className="mt-4 pt-3 border-t border-zinc-200/10 dark:border-white/5 flex items-center justify-between">
          <div className="flex flex-wrap gap-1.5 max-w-[75%]">
            {(item.tech || item.tags)?.slice(0, 2).map((t, idx) => (
              <span 
                key={idx} 
                className="px-2 py-0.5 rounded-lg bg-zinc-100 dark:bg-white/5 text-[11px] text-zinc-600 dark:text-zinc-400 border border-zinc-200/30 dark:border-white/5"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-1.5 text-xs font-medium text-indigo-400 group-hover:translate-x-1 transition-transform">
            <span>View</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    </div>
  );
}
