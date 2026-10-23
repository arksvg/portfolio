import React, { useState } from 'react';
import { 
  Copy, Check, Mail, Phone, MapPin, Download, 
  Sparkles, Cloud, Globe, Palette, FileText,
  Award, Code, Compass
} from 'lucide-react';
import { LinkedInIcon, GitHubIcon, InstagramIcon, WhatsAppIcon, HackerRankIcon } from './Icons';
import confetti from 'canvas-confetti';

export default function SidebarHero({ profile, onToast }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
      onToast({ message: "Email copied to clipboard!" });
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
      onToast({ message: "Phone number copied to clipboard!" });
    }
  };

  const handleCelebrate = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <aside className="w-full lg:w-[380px] xl:w-[420px] shrink-0">
      <div className="lg:sticky lg:top-8 space-y-6">
        {/* Main Profile Card */}
        <div className="relative rounded-3xl glass-card p-6 md:p-8 border border-zinc-200/20 dark:border-white/10 shadow-xl overflow-hidden">
          {/* Ambient Background Gradient Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-gradient-to-br from-indigo-500/25 to-purple-500/20 rounded-full blur-3xl -z-10" />

          {/* Top Avatar & Status */}
          <div className="flex items-start justify-between">
            <div className="relative group">
              <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-3xl overflow-hidden p-1 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 shadow-2xl transition-transform group-hover:scale-105 duration-300">
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  className="w-full h-full object-cover object-top rounded-[22px] bg-zinc-900"
                />
              </div>
            </div>

            {/* Quick Resume Link */}
            <a
              href={profile.socials.resume.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-2xl bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-500 dark:text-indigo-400 text-xs font-semibold border border-indigo-500/30 transition-all hover:scale-105"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>

          {/* Name & Headline */}
          <div className="mt-6">
            <div className="flex items-center gap-2">
              <h1 className="text-3xl md:text-4xl font-extrabold font-heading text-zinc-900 dark:text-white tracking-tight">
                {profile.name}
              </h1>
              <button 
                onClick={handleCelebrate}
                title="Celebrate!"
                className="p-1.5 rounded-full hover:bg-white/10 text-amber-400 transition-transform hover:scale-110"
              >
                <Sparkles className="w-4 h-4" />
              </button>
            </div>

            <p className="mt-2 text-sm md:text-base font-semibold text-indigo-500 dark:text-indigo-400 flex items-center gap-1.5">
              <Cloud className="w-4 h-4" />
              <span>{profile.headline}</span>
            </p>

            <p className="mt-2 text-xs md:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {profile.tagline}
            </p>
          </div>

          {/* Roles Pills */}
          <div className="mt-5 flex flex-wrap gap-2">
            {profile.roles.map((r, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-xl text-xs font-medium bg-zinc-100 dark:bg-white/5 border border-zinc-200/40 dark:border-white/10 text-zinc-700 dark:text-zinc-300"
              >
                {r.text}
              </span>
            ))}
          </div>

          {/* Direct Interactive Contacts */}
          <div className="mt-6 pt-5 border-t border-zinc-200/20 dark:border-white/10 space-y-2.5">
            {/* Email Button */}
            <div className="flex items-center justify-between p-2.5 rounded-2xl bg-zinc-50 dark:bg-white/5 border border-zinc-200/30 dark:border-white/5 hover:border-indigo-500/40 transition-colors">
              <div className="flex items-center gap-2.5 text-xs text-zinc-700 dark:text-zinc-300 truncate">
                <Mail className="w-4 h-4 text-red-400 shrink-0" />
                <span className="truncate">{profile.contact.email}</span>
              </div>
              <button
                onClick={() => handleCopy(profile.contact.email, 'email')}
                className="p-1.5 rounded-xl hover:bg-indigo-500/20 text-zinc-400 hover:text-indigo-400 transition-colors"
                title="Copy Email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Button */}
            <div className="flex items-center justify-between p-2.5 rounded-2xl bg-zinc-50 dark:bg-white/5 border border-zinc-200/30 dark:border-white/5 hover:border-indigo-500/40 transition-colors">
              <div className="flex items-center gap-2.5 text-xs text-zinc-700 dark:text-zinc-300 truncate">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{profile.contact.phone}</span>
              </div>
              <button
                onClick={() => handleCopy(profile.contact.phone, 'phone')}
                className="p-1.5 rounded-xl hover:bg-indigo-500/20 text-zinc-400 hover:text-indigo-400 transition-colors"
                title="Copy Phone"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location Pill */}
            <div className="flex items-center gap-2.5 px-3 py-2 text-xs text-zinc-500 dark:text-zinc-400">
              <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
              <span>{profile.contact.location}</span>
            </div>
          </div>

          {/* Social Quick Dock */}
          <div className="mt-6 pt-5 border-t border-zinc-200/20 dark:border-white/10 flex items-center justify-between">
            <a
              href={profile.socials.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-2xl bg-zinc-100 dark:bg-white/5 hover:bg-[#0A66C2] text-zinc-600 dark:text-zinc-300 hover:text-white transition-all hover:scale-110 shadow-sm"
              title="LinkedIn"
            >
              <LinkedInIcon className="w-4 h-4" />
            </a>
            <a
              href={profile.socials.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-2xl bg-zinc-100 dark:bg-white/5 hover:bg-zinc-900 text-zinc-600 dark:text-zinc-300 hover:text-white transition-all hover:scale-110 shadow-sm"
              title="GitHub"
            >
              <GitHubIcon className="w-4 h-4" />
            </a>
            <a
              href={profile.socials.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-2xl bg-zinc-100 dark:bg-white/5 hover:bg-[#25D366] text-zinc-600 dark:text-zinc-300 hover:text-white transition-all hover:scale-110 shadow-sm"
              title="WhatsApp"
            >
              <WhatsAppIcon className="w-4 h-4" />
            </a>
            <a
              href={profile.socials.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-2xl bg-zinc-100 dark:bg-white/5 hover:bg-[#E1306C] text-zinc-600 dark:text-zinc-300 hover:text-white transition-all hover:scale-110 shadow-sm"
              title="Instagram"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a
              href={profile.socials.hackerrank.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-2xl bg-zinc-100 dark:bg-white/5 hover:bg-[#00EA64] text-zinc-600 dark:text-zinc-300 hover:text-black transition-all hover:scale-110 shadow-sm"
              title="HackerRank"
            >
              <HackerRankIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-3 gap-3">
          {profile.stats.map((st, i) => (
            <div key={i} className="p-3.5 rounded-2xl glass-card text-center border border-zinc-200/20 dark:border-white/10">
              <div className="font-heading font-extrabold text-base md:text-lg text-indigo-500 dark:text-indigo-400">
                {st.value}
              </div>
              <div className="text-[11px] font-medium text-zinc-700 dark:text-zinc-300 mt-0.5">
                {st.label}
              </div>
              <div className="text-[9px] text-zinc-500 dark:text-zinc-500">
                {st.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Tag Cloud */}
        <div className="p-5 rounded-3xl glass-card border border-zinc-200/20 dark:border-white/10">
          <div className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>Core Competencies</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {profile.skillsOverview.map((s, i) => (
              <span
                key={i}
                className="px-2.5 py-1 rounded-xl text-xs font-medium bg-indigo-500/10 dark:bg-white/5 text-indigo-600 dark:text-indigo-300 border border-indigo-500/20 dark:border-white/10"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
