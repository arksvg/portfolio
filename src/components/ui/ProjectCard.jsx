import React from 'react';
import { ArrowUpRight, ExternalLink, Sparkles, Globe, Eye } from 'lucide-react';
import { motifs } from '../Motifs';

export default function ProjectCard({ project, onSelect }) {
  const MotifComponent = project.motif ? motifs[project.motif] : null;

  return (
    <div
      className="group relative flex flex-col justify-between rounded-2xl glow-border overflow-hidden bg-white dark:bg-zinc-950/60 border border-zinc-200/80 dark:border-white/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      {/* Top Banner (Image or Motif) */}
      {project.image ? (
        <div 
          onClick={() => onSelect(project)}
          className={`relative h-48 flex items-center justify-center overflow-hidden ${project.bannerBg || 'bg-zinc-100 dark:bg-zinc-950/80'} cursor-pointer border-b border-zinc-200/60 dark:border-white/5 group`}
        >
          <img
            src={project.image}
            alt={project.title || project.name}
            className={`w-full h-full ${project.id === 'care_space' || project.objectFit === 'cover' ? 'object-cover p-0' : 'object-contain p-4'} group-hover:scale-105 transition-transform duration-500`}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          {project.badge && (
            <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-amber-500 text-white text-[11px] font-bold shadow-md z-10">
              {project.badge}
            </span>
          )}
          {project.category && (
            <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-semibold text-white shadow-md z-10">
              {project.category}
            </span>
          )}
        </div>
      ) : project.motif && MotifComponent ? (
        <div 
          onClick={() => onSelect(project)}
          className="relative h-48 flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-zinc-900/50 cursor-pointer border-b border-zinc-200/60 dark:border-white/5"
        >
          <div 
            className="absolute h-56 w-56 rounded-full blur-[65px] opacity-30 dark:opacity-40 group-hover:opacity-60 dark:group-hover:opacity-80 transition-all duration-500 group-hover:scale-125"
            style={{ backgroundColor: project.glowColor || 'rgba(99, 102, 241, 0.25)' }}
          />
          <MotifComponent className="relative w-40 h-40 transition-transform duration-500 group-hover:scale-110" />
          <span className="absolute bottom-3 right-3 font-mono text-[10px] text-zinc-500 dark:text-zinc-400 bg-white/80 dark:bg-black/40 px-2 py-0.5 rounded-md backdrop-blur-sm border border-zinc-200 dark:border-white/5">
            concept view
          </span>
          {project.category && (
            <span className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/90 dark:bg-black/60 backdrop-blur-md border border-zinc-200 dark:border-white/10 text-[11px] font-semibold text-indigo-600 dark:text-indigo-300 shadow-sm">
              <Sparkles className="w-3 h-3 text-indigo-500 dark:text-indigo-400" />
              <span>{project.category}</span>
            </span>
          )}
        </div>
      ) : null}

      {/* Content Section */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-start justify-between gap-3">
            <div onClick={() => onSelect(project)} className="cursor-pointer flex-1">
              <h3 className="text-lg font-bold font-heading text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-1">
                {project.name || project.title}
              </h3>
              <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mt-0.5 line-clamp-1">
                {project.tagline || project.subtitle}
              </p>
            </div>

            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-xl bg-zinc-100 dark:bg-white/5 hover:bg-indigo-600 hover:text-white text-zinc-500 dark:text-zinc-400 transition-all shrink-0 shadow-sm"
                title="Open Live Website"
              >
                <ArrowUpRight size={16} />
              </a>
            ) : (
              <button
                onClick={() => onSelect(project)}
                className="p-1.5 rounded-xl bg-zinc-100 dark:bg-white/5 hover:bg-indigo-600 hover:text-white text-zinc-500 dark:text-zinc-400 transition-all shrink-0 shadow-sm"
                title="View Case Study"
              >
                <Eye size={16} />
              </button>
            )}
          </div>

          <p className="mt-3 text-xs md:text-sm leading-relaxed text-zinc-600 dark:text-zinc-300 line-clamp-2">
            {project.description}
          </p>
        </div>

        {/* Tech Stack Chips & Action Link */}
        <div className="mt-5 pt-3 border-t border-zinc-100 dark:border-white/5 flex items-center justify-between">
          <div className="flex flex-wrap gap-1.5 max-w-[80%]">
            {(project.tech || project.tags)?.slice(0, 3).map((t) => (
              <span
                key={t}
                className="font-mono text-[10px] md:text-[11px] px-2 py-0.5 rounded-lg bg-zinc-100 dark:bg-white/5 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-white/10"
              >
                {t}
              </span>
            ))}
          </div>

          <button
            onClick={() => onSelect(project)}
            className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1"
          >
            <span>Details</span>
          </button>
        </div>
      </div>
    </div>
  );
}
