import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Mail, Phone, MapPin, Lock, Unlock } from 'lucide-react';
import { LinkedInIcon, GitHubIcon, InstagramIcon, WhatsAppIcon, HackerRankIcon } from '../Icons';
import { profile } from '../../data/resume';
import { useProjectVisibility } from '../../context/ProjectVisibilityContext';

export default function Footer({ onToast }) {
  const { showClientProjects, openUnlockModal } = useProjectVisibility();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggle = () => {
    openUnlockModal();
  };

  return (
    <footer className="mt-24 border-t border-zinc-200/40 dark:border-white/10 bg-zinc-50/50 dark:bg-zinc-950/40 text-zinc-600 dark:text-zinc-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-3">
            <div className="font-heading font-extrabold text-xl text-zinc-900 dark:text-white">
              {profile.name}
            </div>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 max-w-md leading-relaxed">
              {profile.bio}
            </p>
            <div className="flex items-center gap-3 pt-2 text-xs text-zinc-500 font-mono">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-indigo-500" />
                {profile.contact.location}
              </span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200">
              Navigation
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/" className="hover:text-indigo-500 transition-colors">Overview</Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-indigo-500 transition-colors">Projects & Client Work</Link>
              </li>
              <li>
                <Link to="/experience" className="hover:text-indigo-500 transition-colors">Work Experience</Link>
              </li>
              <li>
                <Link to="/achievements" className="hover:text-indigo-500 transition-colors">Achievements & Honors</Link>
              </li>
              <li>
                <Link to="/design" className="hover:text-indigo-500 transition-colors">UI/UX & Figma</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-indigo-500 transition-colors">Contact Hub</Link>
              </li>
            </ul>
          </div>

          {/* Socials & Connect */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200">
              Connect
            </div>
            <div className="flex flex-wrap gap-2">
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-zinc-100 dark:bg-white/5 hover:bg-[#0A66C2] text-zinc-600 dark:text-zinc-400 hover:text-white transition-all shadow-sm"
                title="LinkedIn"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-zinc-100 dark:bg-white/5 hover:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-white transition-all shadow-sm"
                title="GitHub"
              >
                <GitHubIcon className="w-4 h-4" />
              </a>
              <a
                href={profile.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-zinc-100 dark:bg-white/5 hover:bg-[#25D366] text-zinc-600 dark:text-zinc-400 hover:text-white transition-all shadow-sm"
                title="WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>
              <a
                href={profile.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-zinc-100 dark:bg-white/5 hover:bg-[#E1306C] text-zinc-600 dark:text-zinc-400 hover:text-white transition-all shadow-sm"
                title="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={profile.socials.hackerrank}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-zinc-100 dark:bg-white/5 hover:bg-[#00EA64] text-zinc-600 dark:text-zinc-400 hover:text-black transition-all shadow-sm"
                title="HackerRank"
              >
                <HackerRankIcon className="w-4 h-4" />
              </a>
            </div>
            <div className="pt-2">
              <a
                href={`mailto:${profile.contact.email}`}
                className="text-xs text-indigo-500 dark:text-indigo-400 hover:underline block truncate"
              >
                {profile.contact.email}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-200/40 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400">
            <span>© {new Date().getFullYear()} {profile.name}. All rights reserved.</span>

            {/* Secret discreet trigger known only by you */}
            <button
              onClick={handleToggle}
              type="button"
              className={`p-0.5 rounded transition-colors inline-flex items-center justify-center ${
                showClientProjects 
                  ? 'text-emerald-500 hover:text-emerald-400 opacity-90' 
                  : 'text-zinc-400/25 hover:text-zinc-400 dark:text-zinc-700 hover:dark:text-zinc-400'
              }`}
              aria-label="Toggle mode"
            >
              {showClientProjects ? (
                <Unlock className="w-3 h-3" />
              ) : (
                <Lock className="w-3 h-3" />
              )}
            </button>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-100 dark:bg-white/5 hover:bg-indigo-500 hover:text-white text-zinc-600 dark:text-zinc-400 transition-all border border-zinc-200/40 dark:border-white/10"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
