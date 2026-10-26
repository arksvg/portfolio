import React, { useState } from 'react';
import { 
  Trophy, Award, ExternalLink, Calendar, Building2, 
  Sparkles, CheckCircle, ShieldCheck, Flame, Medal
} from 'lucide-react';
import { achievementsData } from '../data/resume';

export default function Achievements() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [previewImage, setPreviewImage] = useState(null);

  const categories = [
    { id: 'all', label: `All Honors (${achievementsData.length})` },
    { id: 'hackathons', label: 'Hackathons & Competitions' },
    { id: 'corporate', label: 'Corporate & Keynotes' },
    { id: 'academic', label: 'Academic & Civic' }
  ];

  const filteredAchievements = achievementsData.filter((item) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'hackathons') {
      return item.id.includes('hackathon') || item.badge.toLowerCase().includes('runner') || item.badge.toLowerCase().includes('winner') || item.badge.toLowerCase().includes('place');
    }
    if (activeCategory === 'corporate') {
      return item.associatedWith === 'NexTurn' || item.id.includes('ots') || item.id.includes('speaker') || item.id.includes('vcet') || item.badge.toLowerCase().includes('keynote');
    }
    if (activeCategory === 'academic') {
      return item.id.includes('valedictorian') || item.id.includes('nss') || item.id.includes('sih') || item.id.includes('speaker');
    }
    return true;
  });

  return (
    <div className="space-y-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-semibold border border-amber-500/20">
          <Trophy className="w-3.5 h-3.5" />
          <span>Recognitions & Accolades</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-zinc-900 dark:text-white tracking-tight">
          Key Achievements & Hackathon Honors
        </h1>
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
          National and state-level hackathon championship titles, internal innovation honors at NexTurn, on-the-spot excellence, and academic leadership awards.
        </p>
      </div>

      {/* Quick Metric Highlights */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl glass glow-border text-center">
          <div className="flex items-center justify-center text-amber-500 mb-1">
            <Trophy className="w-5 h-5" />
          </div>
          <div className="font-heading font-extrabold text-2xl text-zinc-900 dark:text-white">
            1st Prize
          </div>
          <div className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 mt-0.5">
            UYIR State Hackathon
          </div>
          <div className="text-[11px] text-zinc-500">
            Govt. of Tamil Nadu
          </div>
        </div>

        <div className="p-5 rounded-2xl glass glow-border text-center">
          <div className="flex items-center justify-center text-indigo-500 mb-1">
            <Medal className="w-5 h-5" />
          </div>
          <div className="font-heading font-extrabold text-2xl text-zinc-900 dark:text-white">
            2nd Runner Up
          </div>
          <div className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 mt-0.5">
            Youth Action 2026
          </div>
          <div className="text-[11px] text-zinc-500">
            Trichy City Corporation
          </div>
        </div>

        <div className="p-5 rounded-2xl glass glow-border text-center">
          <div className="flex items-center justify-center text-purple-500 mb-1">
            <Flame className="w-5 h-5" />
          </div>
          <div className="font-heading font-extrabold text-2xl text-zinc-900 dark:text-white">
            2nd Place
          </div>
          <div className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 mt-0.5">
            NextHack MobAiThon
          </div>
          <div className="text-[11px] text-zinc-500">
            NexTurn AI Innovation
          </div>
        </div>

        <div className="p-5 rounded-2xl glass glow-border text-center">
          <div className="flex items-center justify-center text-emerald-500 mb-1">
            <Sparkles className="w-5 h-5" />
          </div>
          <div className="font-heading font-extrabold text-2xl text-zinc-900 dark:text-white">
            OTS Award
          </div>
          <div className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 mt-0.5">
            On The Spot Honor
          </div>
          <div className="text-[11px] text-zinc-500">
            NexTurn Agile Delivery
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-zinc-200/50 dark:border-white/10">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
              activeCategory === cat.id
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/25'
                : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/5'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Achievements Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredAchievements.map((item) => (
          <div
            key={item.id || item.title}
            className="p-6 sm:p-7 rounded-3xl glow-border flex flex-col justify-between space-y-5 bg-white dark:bg-zinc-950/60 border border-zinc-200 dark:border-white/10 shadow-sm hover:shadow-xl transition-all duration-300 group"
          >
            <div className="space-y-4">
              {/* Header Badges */}
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-bold border border-amber-500/20 inline-flex items-center gap-1.5">
                  <Trophy className="w-3.5 h-3.5" />
                  {item.badge}
                </span>

                <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400">
                  {item.date || item.year}
                </span>
              </div>

              {/* Title & Organization */}
              <div>
                <h2 className="text-xl font-bold font-heading text-zinc-900 dark:text-white group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors leading-snug">
                  {item.title}
                </h2>
                <div className="text-xs font-medium text-zinc-500 dark:text-zinc-400 mt-1 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-zinc-400" />
                  <span>Issued by {item.issuer || item.organization}</span>
                  {(item.date || item.year) && (
                    <>
                      <span>•</span>
                      <span>{item.date || item.year}</span>
                    </>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-xs md:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                {item.description}
              </p>

              {/* Standard Card Media */}
              {item.image && (
                <div 
                  onClick={() => setPreviewImage(item)}
                  className="relative w-full h-56 rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-200 dark:border-white/10 mt-3 cursor-pointer group/img flex items-center justify-center shadow-inner"
                  title="Click to view full image"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-contain p-2 group-hover/img:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/30 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover/img:opacity-100 transition-opacity px-3 py-1.5 rounded-xl bg-black/70 backdrop-blur-md text-white text-xs font-medium border border-white/20">
                      View full document
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Interactive Links / Treasury Overlay Buttons */}
            {item.links && item.links.length > 0 && (
              <div className="pt-3 border-t border-zinc-200/40 dark:border-white/5 space-y-2">
                <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                  Verified Documentation & Media:
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.links.map((lnk, idx) => (
                    <a
                      key={idx}
                      href={lnk.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 text-indigo-600 dark:text-indigo-300 text-xs font-semibold border border-indigo-200/50 dark:border-indigo-500/30 transition-all hover:scale-105"
                    >
                      <span>{lnk.label}</span>
                      <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Full Image Preview Modal */}
      {previewImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setPreviewImage(null)}
        >
          <div 
            className="relative max-w-4xl max-h-[90vh] bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden p-3 shadow-2xl flex flex-col animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-3 border-b border-white/10">
              <div>
                <h3 className="font-heading font-bold text-sm text-white line-clamp-1">
                  {previewImage.title}
                </h3>
                <p className="text-xs text-zinc-400">
                  {previewImage.issuer || previewImage.organization}
                </p>
              </div>
              <button
                onClick={() => setPreviewImage(null)}
                className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors"
              >
                Close
              </button>
            </div>
            <div className="flex-1 overflow-auto p-2 flex items-center justify-center max-h-[75vh]">
              <img
                src={previewImage.image}
                alt={previewImage.title}
                className="max-w-full max-h-[75vh] object-contain rounded-xl"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
