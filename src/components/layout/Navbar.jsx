import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Download, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { profile } from '../../data/resume';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: '/', label: 'Overview' },
    { to: '/projects', label: 'Projects' },
    { to: '/experience', label: 'Experience' },
    { to: '/achievements', label: 'Achievements' },
    { to: '/design', label: 'UI/UX Design' },
    { to: '/contact', label: 'Contact' }
  ];

  return (
    <header className="sticky top-4 z-50 w-full px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto rounded-2xl glass glow-border px-4 py-3 flex items-center justify-between shadow-xl">
        {/* Brand Link */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl overflow-hidden border border-zinc-700/80 bg-zinc-800 group-hover:border-indigo-500 transition-colors">
            <img src="/assets/unnamed.jpg" alt={profile.name} className="w-full h-full object-cover" />
          </div>
          <div>
            <div className="font-heading font-bold text-sm tracking-tight text-white group-hover:text-indigo-400 transition-colors">
              {profile.name}
            </div>
            <div className="text-[11px] text-zinc-400 font-mono -mt-0.5">
              Fullstack Developer
            </div>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 p-1 rounded-xl bg-white/5 border border-white/10">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <NavLink
                key={link.to}
                to={link.to}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-zinc-800 text-white shadow-sm font-semibold border border-white/10'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </NavLink>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          {/* Resume Download CTA */}
          <a
            href={profile.socials.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-md shadow-indigo-500/20 transition-all hover:scale-105"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-xl bg-white/5 text-zinc-300 border border-white/10"
          >
            {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden mt-2 p-4 rounded-2xl glass glow-border shadow-2xl space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-indigo-600 text-white font-semibold'
                    : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-white/5'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <a
            href={profile.socials.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between px-4 py-2.5 rounded-xl bg-zinc-100 dark:bg-white/5 text-zinc-700 dark:text-zinc-300 text-sm font-medium border border-zinc-200/50 dark:border-white/10"
          >
            <span>View Resume</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </header>
  );
}
