import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Download, Menu, X, ArrowUpRight } from 'lucide-react';
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
      <div className="max-w-6xl mx-auto rounded-full bg-[#0a0d1d]/85 backdrop-blur-2xl border border-white/10 px-4 py-2 flex items-center justify-between shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
        {/* Left: Brand Identity */}
        <Link to="/" className="flex items-center gap-3 group shrink-0">
          <div className="w-9 h-9 rounded-full overflow-hidden border border-white/20 bg-zinc-800 shrink-0 shadow-inner ring-1 ring-white/10">
            <img src="/assets/profile_photo.jpg" alt={profile.name} className="w-full h-full object-cover" />
          </div>
          <div className="text-left">
            <div className="font-heading font-bold text-sm tracking-tight text-white leading-tight group-hover:text-blue-400 transition-colors">
              {profile.name}
            </div>
            <div className="text-[11px] text-zinc-400 font-normal leading-tight hidden sm:block">
              {profile.title} @ {profile.company}
            </div>
          </div>
        </Link>

        {/* Subtle Vertical Divider */}
        <div className="h-6 w-[1px] bg-white/10 mx-2 hidden lg:block" />

        {/* Center: Desktop Nav Pills */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <NavLink
                key={link.to}
                to={link.to}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-blue-600 text-white font-semibold shadow-[0_0_20px_rgba(37,99,235,0.45)]'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </NavLink>
            );
          })}
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-2">
          {/* Resume Download Pill Button */}
          <a
            href={profile.socials.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-500 hover:from-purple-500 hover:to-blue-400 text-white text-xs font-semibold shadow-lg shadow-purple-600/30 transition-all hover:scale-105"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-full bg-white/5 text-zinc-300 border border-white/10 hover:bg-white/10 transition-colors"
            aria-label="Toggle Navigation"
          >
            {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden mt-2 p-4 rounded-3xl bg-[#0a0d1d]/95 backdrop-blur-2xl border border-white/10 shadow-2xl space-y-2 animate-in fade-in slide-in-from-top-2 duration-200 max-w-6xl mx-auto">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-2.5 rounded-2xl text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-blue-600 text-white font-semibold shadow-md shadow-blue-500/30'
                    : 'text-zinc-300 hover:bg-white/5'
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
            className="flex items-center justify-between px-4 py-2.5 rounded-2xl bg-white/5 text-zinc-300 text-sm font-medium border border-white/10 hover:bg-white/10"
          >
            <span>View Resume</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </header>
  );
}
