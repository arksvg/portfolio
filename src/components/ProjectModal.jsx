import React from 'react';
import { X, ExternalLink, Sparkles, CheckCircle2, AlertCircle, Wrench } from 'lucide-react';
import { motifs } from './Motifs';

export default function ProjectModal({ item, onClose }) {
  if (!item) return null;

  const MotifComponent = item.motif ? motifs[item.motif] : null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/70 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700/60 shadow-2xl text-zinc-900 dark:text-zinc-100 p-6 md:p-8 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors border border-zinc-200 dark:border-white/10 z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Visual Banner (Image or Motif Concept) */}
        {item.image ? (
          <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-950 border border-zinc-200 dark:border-white/10 mb-6 group">
            <img
              src={item.image}
              alt={item.title || item.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {item.category && (
              <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs font-semibold text-white flex items-center gap-1.5 shadow-lg">
                <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                <span>{item.category}</span>
              </div>
            )}
            {item.badge && (
              <div className="absolute top-4 right-16 px-3 py-1.5 rounded-full bg-amber-500 backdrop-blur-md text-white text-xs font-bold shadow-lg">
                {item.badge}
              </div>
            )}
          </div>
        ) : MotifComponent ? (
          <div className="relative w-full h-56 rounded-2xl overflow-hidden bg-gradient-to-b from-slate-100 to-slate-200/50 dark:from-zinc-800/60 dark:to-zinc-950/80 border border-zinc-200 dark:border-white/10 mb-6 flex items-center justify-center">
            <div 
              className="absolute h-64 w-64 rounded-full blur-[70px] opacity-40 dark:opacity-70"
              style={{ backgroundColor: item.glowColor || 'rgba(99, 102, 241, 0.3)' }}
            />
            <MotifComponent className="relative w-40 h-40" />
            <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white/90 dark:bg-zinc-900/80 backdrop-blur-md border border-zinc-200 dark:border-white/10 text-xs font-semibold text-indigo-600 dark:text-indigo-300 flex items-center gap-1.5 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400" />
              <span>{item.category || "Client Work"}</span>
            </div>
            <span className="absolute bottom-3 right-3 font-mono text-[10px] text-zinc-500 dark:text-zinc-400 bg-white/80 dark:bg-black/40 px-2 py-0.5 rounded-md backdrop-blur-sm border border-zinc-200 dark:border-white/5">
              concept view
            </span>
          </div>
        ) : null}

        {/* Header & Title */}
        <div className="space-y-1.5">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            <span>{item.category || "Project Showcase"}</span>
            {(item.tagline || item.subtitle) && <span>• {item.tagline || item.subtitle}</span>}
          </div>
          <h2 className="text-2xl md:text-3xl font-bold font-heading text-zinc-900 dark:text-white">
            {item.name || item.title}
          </h2>
        </div>

        {/* Description */}
        <p className="mt-4 text-zinc-600 dark:text-zinc-300 text-sm md:text-base leading-relaxed">
          {item.description || item.text}
        </p>

        {/* Problem Statement (if provided) */}
        {item.problem && (
          <div className="mt-5 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs md:text-sm text-zinc-800 dark:text-zinc-300 space-y-1">
            <div className="font-bold text-amber-600 dark:text-amber-400 flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4" />
              <span>Challenge / Problem Statement</span>
            </div>
            <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">{item.problem}</p>
          </div>
        )}

        {/* Features List (if provided) */}
        {item.features && item.features.length > 0 && (
          <div className="mt-5 space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              Key Features & Architectural Highlights
            </div>
            <div className="space-y-1.5">
              {item.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs md:text-sm text-zinc-700 dark:text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Contribution (if provided) */}
        {item.contribution && (
          <div className="mt-5 p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-xs md:text-sm text-zinc-800 dark:text-zinc-300 space-y-1">
            <div className="font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5">
              <Wrench className="w-4 h-4" />
              <span>Key Contribution</span>
            </div>
            <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">{item.contribution}</p>
          </div>
        )}

        {/* Tech Stack Pills */}
        {(item.tech || item.tags) && (
          <div className="mt-6 space-y-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              Technologies & Tools
            </div>
            <div className="flex flex-wrap gap-2">
              {(item.tech || item.tags).map((tag, i) => (
                <span 
                  key={i}
                  className="px-3 py-1 rounded-xl bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-white/10 font-mono text-xs text-zinc-700 dark:text-zinc-200 flex items-center gap-1"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="mt-8 pt-6 border-t border-zinc-200 dark:border-zinc-800 flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 text-sm font-medium transition-colors"
          >
            Close
          </button>

          {(item.href || item.link) && (
            <a
              href={item.href || item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm shadow-lg shadow-indigo-500/25 transition-all hover:scale-105"
            >
              <span>Visit Live Website</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
