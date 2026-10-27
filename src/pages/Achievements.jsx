import React, { useState } from 'react';
import { 
  Trophy, Award, ExternalLink, Calendar, Building2, 
  Sparkles, CheckCircle, ShieldCheck, Flame, Medal,
  BookOpen, FileText, GraduationCap, Users, Copy, Check, Layers
} from 'lucide-react';
import { achievementsData, publicationsData } from '../data/resume';

export default function Achievements() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [previewImage, setPreviewImage] = useState(null);
  const [copiedPubLink, setCopiedPubLink] = useState(null);

  const categories = [
    { id: 'all', label: `All Honors (${achievementsData.length})` },
    { id: 'hackathons', label: 'Hackathons & Competitions' },
    { id: 'corporate', label: 'Corporate & Keynotes' },
    { id: 'academic', label: 'Academic & Civic' },
    { id: 'publications', label: `Publications (${publicationsData.length})` }
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
    if (activeCategory === 'publications') {
      return false;
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
      {filteredAchievements.length > 0 && (
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
      )}

      {/* Research & Publications Section */}
      {(activeCategory === 'all' || activeCategory === 'publications' || activeCategory === 'academic') && (
        <section id="publications" className="pt-8 border-t border-zinc-200/60 dark:border-white/10 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-semibold border border-indigo-500/20">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Scholarly Research & Publications</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-zinc-900 dark:text-white tracking-tight">
                Peer-Reviewed Publications
              </h2>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
                Scholarly research papers published in indexed international journals advancing conversational AI systems, neural network modeling, and real-time query processing.
              </p>
            </div>
            
            <div className="text-xs font-mono text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-white/5 px-3 py-1.5 rounded-xl border border-zinc-200 dark:border-white/10 self-start sm:self-auto">
              Total Publications: {publicationsData.length}
            </div>
          </div>

          <div className="space-y-6">
            {publicationsData.map((pub) => (
              <div
                key={pub.id}
                className="relative overflow-hidden rounded-3xl glow-border bg-gradient-to-br from-indigo-500/5 via-white to-purple-500/5 dark:from-indigo-950/20 dark:via-zinc-950/80 dark:to-purple-950/20 border border-zinc-200 dark:border-white/10 p-6 sm:p-8 shadow-sm hover:shadow-2xl transition-all duration-300 group"
              >
                {/* Decorative Ambient Glow */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

                <div className="relative space-y-5">
                  {/* Metadata Header Badges */}
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold border border-emerald-500/20 inline-flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5" />
                        {pub.badge}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-zinc-100 dark:bg-white/5 text-zinc-600 dark:text-zinc-300 text-xs font-semibold border border-zinc-200/60 dark:border-white/10">
                        {pub.volume}
                      </span>
                      {pub.issn && (
                        <span className="px-2.5 py-0.5 rounded-lg font-mono text-[11px] text-zinc-500 dark:text-zinc-400 bg-zinc-200/50 dark:bg-zinc-800/60">
                          {pub.issn}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                      <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                      <span>{pub.date}</span>
                    </div>
                  </div>

                  {/* Title & Journal */}
                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold font-heading text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {pub.title}
                    </h3>
                    <div className="text-sm font-semibold text-indigo-600 dark:text-indigo-300 flex items-center gap-2 flex-wrap">
                      <Building2 className="w-4 h-4 text-indigo-500 shrink-0" />
                      <span>{pub.journal}</span>
                    </div>
                  </div>

                  {/* Authors & Institutional Affiliation */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-2xl bg-zinc-50 dark:bg-white/[0.03] border border-zinc-200/60 dark:border-white/5 text-xs">
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5 text-zinc-500 dark:text-zinc-400 font-medium">
                        <Users className="w-3.5 h-3.5 text-zinc-400" />
                        <span>Authors:</span>
                      </div>
                      <p className="font-semibold text-zinc-800 dark:text-zinc-200 leading-relaxed">
                        {Array.isArray(pub.authors) ? pub.authors.join(', ') : pub.authors}
                      </p>
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5 text-zinc-500 dark:text-zinc-400 font-medium">
                        <GraduationCap className="w-3.5 h-3.5 text-zinc-400" />
                        <span>Academic Guide & Department:</span>
                      </div>
                      <p className="font-semibold text-zinc-800 dark:text-zinc-200 leading-relaxed">
                        {pub.guide} • {pub.department}, {pub.institution}
                      </p>
                    </div>
                  </div>

                  {/* Abstract / Overview */}
                  <div className="space-y-2">
                    <div className="text-xs font-bold uppercase tracking-wider text-zinc-400 font-mono">
                      Abstract:
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                      {pub.description}
                    </p>
                  </div>

                  {/* Architecture & Performance Highlights */}
                  {pub.metrics && pub.metrics.length > 0 && (
                    <div className="grid grid-cols-3 gap-3 pt-1">
                      {pub.metrics.map((metric, mIdx) => (
                        <div
                          key={mIdx}
                          className="p-3 rounded-xl bg-zinc-100 dark:bg-white/5 border border-zinc-200/50 dark:border-white/5 text-center"
                        >
                          <div className="text-[11px] text-zinc-500 dark:text-zinc-400 font-medium">
                            {metric.label}
                          </div>
                          <div className="text-sm sm:text-base font-extrabold font-heading text-zinc-900 dark:text-white mt-0.5">
                            {metric.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Research Domain Tags */}
                  {pub.tags && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {pub.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-lg bg-zinc-100 dark:bg-white/5 text-[11px] font-medium text-zinc-600 dark:text-zinc-400 border border-zinc-200/40 dark:border-white/5"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Action / Verified Links Bar */}
                  <div className="pt-4 border-t border-zinc-200/50 dark:border-white/10 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-lg shadow-indigo-500/25 transition-all hover:scale-105"
                      >
                        <FileText className="w-4 h-4" />
                        <span>Show Publication</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>

                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(pub.link);
                          setCopiedPubLink(pub.id);
                          setTimeout(() => setCopiedPubLink(null), 2000);
                        }}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-zinc-100 dark:bg-white/5 hover:bg-zinc-200 dark:hover:bg-white/10 text-zinc-700 dark:text-zinc-300 text-xs font-semibold border border-zinc-200/50 dark:border-white/10 transition-colors"
                        title="Copy Publication URL"
                      >
                        {copiedPubLink === pub.id ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-500" />
                            <span className="text-emerald-500">Link Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy Link</span>
                          </>
                        )}
                      </button>
                    </div>

                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-zinc-500 hover:text-indigo-500 dark:text-zinc-400 dark:hover:text-indigo-400 font-mono transition-colors flex items-center gap-1"
                    >
                      <span>ijarsct.co.in/May3i8.html</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

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
