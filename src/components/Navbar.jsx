import React from 'react';
import { Sun, Moon, Search, Share2, X } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Navbar({ 
  darkMode, 
  setDarkMode, 
  activeFilter, 
  setActiveFilter, 
  searchQuery, 
  setSearchQuery,
  onToast 
}) {
  const categories = [
    { id: 'all', label: 'All Cards' },
    { id: 'client_work', label: 'Client Work' },
    { id: 'projects', label: 'Projects' },
    { id: 'figma', label: 'Figma UX' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'about', label: 'About' },
    { id: 'hackerrank', label: 'HackerRank' },
    { id: 'connect', label: 'Connect' }
  ];

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.1 }
    });
    onToast({ message: "Portfolio link copied to clipboard!" });
  };

  return (
    <header className="sticky top-4 z-40 w-full mb-8">
      <nav className="max-w-[1400px] mx-auto p-2.5 md:p-3 rounded-3xl glass-card border border-zinc-200/30 dark:border-white/10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left: Category Filters */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-3.5 py-1.5 rounded-2xl text-xs font-semibold whitespace-nowrap transition-all ${
                activeFilter === cat.id
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md shadow-indigo-500/25 scale-105'
                  : 'bg-zinc-100 dark:bg-white/5 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Right: Search & Actions */}
        <div className="flex items-center gap-2 w-full md:w-auto justify-end">
          {/* Search Bar */}
          <div className="relative flex-1 md:w-48 lg:w-60">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects & skills..."
              className="w-full pl-8 pr-7 py-1.5 text-xs rounded-2xl bg-zinc-100 dark:bg-white/5 border border-zinc-200/40 dark:border-white/10 text-zinc-800 dark:text-zinc-200 placeholder-zinc-400 focus:outline-none focus:border-indigo-500/60"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-200"
              >
                <X className="w-3 h-3" />
              </button>
            )}
          </div>

          {/* Share Profile */}
          <button
            onClick={handleShare}
            className="p-2 rounded-2xl bg-zinc-100 dark:bg-white/5 hover:bg-indigo-500 hover:text-white text-zinc-600 dark:text-zinc-300 border border-zinc-200/30 dark:border-white/10 transition-all hover:scale-105 shadow-sm"
            title="Share Portfolio"
          >
            <Share2 className="w-4 h-4" />
          </button>

          {/* Theme Switcher */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-2xl bg-zinc-100 dark:bg-white/5 hover:bg-amber-500/20 text-zinc-600 dark:text-zinc-300 hover:text-amber-400 border border-zinc-200/30 dark:border-white/10 transition-all hover:scale-105 shadow-sm"
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-500" />}
          </button>
        </div>
      </nav>
    </header>
  );
}
