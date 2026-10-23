import React from 'react';
import BentoCard from './BentoCard';
import { 
  User, Sparkles, FolderGit2, Trophy, 
  Terminal, Palette, Handshake, SearchX 
} from 'lucide-react';

const sectionIcons = {
  User: User,
  Sparkles: Sparkles,
  FolderGit2: FolderGit2,
  Trophy: Trophy,
  Terminal: Terminal,
  Palette: Palette,
  Handshake: Handshake
};

export default function BentoGrid({ sections, activeFilter, searchQuery, onSelect, onToast }) {
  const filteredSections = sections.map(sec => {
    if (activeFilter !== 'all' && sec.id !== activeFilter) {
      return { ...sec, items: [] };
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchingItems = sec.items.filter(item => {
        const titleMatch = item.title?.toLowerCase().includes(q) || item.name?.toLowerCase().includes(q);
        const descMatch = item.description?.toLowerCase().includes(q) || item.text?.toLowerCase().includes(q);
        const tagMatch = (item.tags || item.tech)?.some(t => t.toLowerCase().includes(q));
        const catMatch = item.category?.toLowerCase().includes(q);
        return titleMatch || descMatch || tagMatch || catMatch;
      });
      return { ...sec, items: matchingItems };
    }

    return sec;
  }).filter(sec => sec.items.length > 0);

  const totalItemsCount = filteredSections.reduce((acc, sec) => acc + sec.items.length, 0);

  if (totalItemsCount === 0) {
    return (
      <div className="flex-1 min-h-[400px] flex flex-col items-center justify-center p-8 rounded-3xl glass-card text-center border border-zinc-200/20 dark:border-white/10">
        <SearchX className="w-12 h-12 text-zinc-500 mb-3" />
        <h3 className="font-heading text-lg font-bold text-zinc-800 dark:text-zinc-200">
          No matching cards found
        </h3>
        <p className="text-sm text-zinc-500 mt-1 max-w-sm">
          Try searching for something else like "React", "Figma", "Hackathon", or "Cloud".
        </p>
      </div>
    );
  }

  return (
    <div className="flex-1 space-y-10">
      {filteredSections.map((sec) => {
        const SectionIcon = sectionIcons[sec.icon] || FolderGit2;
        return (
          <section key={sec.id} className="space-y-4">
            {/* Section Header */}
            <div className="flex items-center justify-between px-2">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-indigo-500/10 dark:bg-white/5 text-indigo-500 dark:text-indigo-400 border border-indigo-500/20 dark:border-white/10">
                  <SectionIcon className="w-4 h-4" />
                </div>
                <h2 className="font-heading font-extrabold text-xl md:text-2xl text-zinc-900 dark:text-white tracking-tight">
                  {sec.title}
                </h2>
              </div>
              <span className="text-xs font-semibold text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-white/5 px-2.5 py-1 rounded-full border border-zinc-200/40 dark:border-white/10">
                {sec.items.length} {sec.items.length === 1 ? 'item' : 'items'}
              </span>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-12 gap-4 md:gap-5">
              {sec.items.map((item) => (
                <div 
                  key={item.id} 
                  className={`${item.colSpan || 'col-span-12 md:col-span-6'} transition-all`}
                >
                  <BentoCard 
                    item={item} 
                    onSelect={onSelect}
                    onToast={onToast}
                  />
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
