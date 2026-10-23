import React from 'react';
import { ArrowUp, Heart, Sparkles } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-20 pt-8 pb-12 border-t border-zinc-200/20 dark:border-white/10 text-center text-xs text-zinc-500">
      <div className="max-w-[1400px] mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span>© {new Date().getFullYear()} Ratnakumar A. All rights reserved.</span>
          <span>•</span>
          <span className="text-indigo-400 font-medium">Bento CV Portfolio</span>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-100 dark:bg-white/5 hover:bg-indigo-500/20 hover:text-indigo-400 text-zinc-600 dark:text-zinc-400 transition-colors border border-zinc-200/30 dark:border-white/10"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
