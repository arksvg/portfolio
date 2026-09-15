import React, { useState } from 'react';
import { Palette, ExternalLink, Sparkles, Layers, Eye, Layout } from 'lucide-react';
import { figmaProjects } from '../data/resume';
import { FigmaIcon } from '../components/Icons';
import ProjectModal from '../components/ProjectModal';

export default function Design() {
  const [selectedDesign, setSelectedDesign] = useState(null);

  return (
    <div className="space-y-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 text-purple-500 dark:text-purple-400 text-xs font-semibold">
          <Palette className="w-3.5 h-3.5" />
          <span>UI/UX & Product Design</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-zinc-900 dark:text-white tracking-tight">
          Figma Prototypes & Case Studies
        </h1>
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
          Interactive prototypes, mobile streaming redesigns, design systems, and UX flows crafted in Figma.
        </p>
      </div>

      {/* Grid of Design Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {figmaProjects.map((item) => (
          <div
            key={item.id}
            className="group relative flex flex-col justify-between rounded-2xl glass glow-border overflow-hidden shadow-lg hover:-translate-y-1 transition-all duration-300 bg-zinc-900/40 dark:bg-zinc-950/60"
          >
            {/* Image Preview Banner */}
            <div 
              onClick={() => setSelectedDesign(item)}
              className="relative h-56 overflow-hidden bg-zinc-950 cursor-pointer border-b border-white/5"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
              
              <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-semibold text-purple-300 shadow-md">
                <FigmaIcon className="w-3.5 h-3.5" />
                <span>{item.category}</span>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between gap-3">
                  <div onClick={() => setSelectedDesign(item)} className="cursor-pointer flex-1">
                    <h3 className="text-lg font-bold font-heading text-zinc-900 dark:text-white group-hover:text-purple-400 transition-colors line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-xs font-medium text-purple-500 dark:text-purple-400 mt-0.5">
                      {item.subtitle}
                    </p>
                  </div>

                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-zinc-100 dark:bg-white/5 hover:bg-purple-600 hover:text-white text-zinc-400 transition-all shrink-0"
                    title="Open in Figma"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>

                <p className="mt-3 text-xs md:text-sm leading-relaxed text-zinc-600 dark:text-zinc-300 line-clamp-2">
                  {item.description}
                </p>
              </div>

              {/* Tags & Action */}
              <div className="mt-5 pt-3 border-t border-zinc-200/40 dark:border-white/5 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5 max-w-[80%]">
                  {item.tags?.map((t, idx) => (
                    <span
                      key={idx}
                      className="font-mono text-[10px] md:text-[11px] px-2 py-0.5 rounded-lg bg-zinc-100 dark:bg-white/5 text-zinc-600 dark:text-zinc-400 border border-zinc-200/40 dark:border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-purple-500 dark:text-purple-400 hover:underline flex items-center gap-1"
                >
                  <span>Figma</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        item={selectedDesign}
        onClose={() => setSelectedDesign(null)}
      />
    </div>
  );
}
