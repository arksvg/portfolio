import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Download, Mail, Phone, MapPin, 
  Sparkles, Cloud, Code2, Palette, ShieldCheck, 
  Terminal, Globe, ArrowUpRight, Copy, Check 
} from 'lucide-react';
import { profile, clientProjects, coreProjects } from '../data/resume';
import { useProjectVisibility } from '../context/ProjectVisibilityContext';
import ProjectCard from '../components/ui/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import MapWidget from '../components/MapWidget';

export default function Home({ onToast }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const { showClientProjects, isFreelanceProject } = useProjectVisibility();

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

  const activeClientProjects = showClientProjects
    ? clientProjects
    : clientProjects.filter((p) => !isFreelanceProject(p));

  // Top featured projects for homepage spotlight
  const featuredSpotlight = [
    clientProjects[0], // Care Space
    clientProjects[1], // Admin ERP
    coreProjects[0],   // UYIR Hackathon Winner
    showClientProjects ? clientProjects[2] : coreProjects[4] // Sam's Culinary if toggled ON, otherwise Currency Converter (Live Web App)
  ];

  return (
    <div className="space-y-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Hero Section */}
      <section className="relative pt-6 md:pt-12 pb-8">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 text-indigo-500 dark:text-indigo-400 text-xs font-semibold border border-indigo-500/20">
              <Code2 className="w-3.5 h-3.5" />
              <span>Associate Full Stack Developer L3 @ NexTurn</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-zinc-900 dark:text-white tracking-tight leading-[1.15]">
              Fullstack Developer Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Scalable Web Systems</span> & Intuitive UIs
            </h1>

            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {profile.bio}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-lg shadow-indigo-500/25 transition-all hover:scale-105"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-100 dark:bg-white/5 hover:bg-zinc-200 dark:hover:bg-white/10 text-zinc-800 dark:text-zinc-200 font-semibold text-sm border border-zinc-200/50 dark:border-white/10 transition-colors"
              >
                <span>Get In Touch</span>
              </Link>

              <a
                href={profile.socials.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-100 dark:bg-white/5 hover:bg-zinc-200 dark:hover:bg-white/10 text-zinc-800 dark:text-zinc-200 font-semibold text-sm border border-zinc-200/50 dark:border-white/10 transition-colors"
              >
                <Download className="w-4 h-4 text-indigo-500" />
                <span>Resume</span>
              </a>
            </div>

            {/* Quick Contact Chips */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-4 text-xs">
              <button
                onClick={() => handleCopy(profile.contact.email, 'email')}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-white/5 hover:bg-indigo-500/10 text-zinc-600 dark:text-zinc-400 border border-zinc-200/40 dark:border-white/10 transition-colors"
                title="Copy Email"
              >
                <Mail className="w-3.5 h-3.5 text-red-400" />
                <span>{profile.contact.email}</span>
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>

              <button
                onClick={() => handleCopy(profile.contact.phone, 'phone')}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-white/5 hover:bg-indigo-500/10 text-zinc-600 dark:text-zinc-400 border border-zinc-200/40 dark:border-white/10 transition-colors"
                title="Copy Phone"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>{profile.contact.phone}</span>
                {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {/* Right Avatar Card (Clean Solid Border) */}
          <div className="relative shrink-0">
            <div className="w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-3xl overflow-hidden border-2 border-zinc-200 dark:border-zinc-800 shadow-xl bg-zinc-100 dark:bg-zinc-900 transition-transform hover:scale-[1.02] duration-300">
              <img
                src={profile.avatar}
                alt={profile.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {profile.stats.map((st, i) => (
          <div key={i} className="p-5 rounded-2xl glass glow-border text-center">
            <div className="font-heading font-extrabold text-2xl md:text-3xl text-indigo-500 dark:text-indigo-400">
              {st.value}
            </div>
            <div className="text-xs md:text-sm font-semibold text-zinc-800 dark:text-zinc-200 mt-1">
              {st.label}
            </div>
            <div className="text-[11px] text-zinc-500 dark:text-zinc-400">
              {st.sub}
            </div>
          </div>
        ))}
      </section>

      {/* Featured Projects Spotlight */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-indigo-500 dark:text-indigo-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Spotlight</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-zinc-900 dark:text-white mt-1">
              Featured Production & Client Work
            </h2>
          </div>
          <Link
            to="/projects"
            className="text-xs font-semibold text-indigo-500 dark:text-indigo-400 hover:underline flex items-center gap-1"
          >
            <span>View All ({activeClientProjects.length + coreProjects.length} Projects)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredSpotlight.map((proj) => (
            <ProjectCard
              key={proj.id || proj.name || proj.title}
              project={proj}
              onSelect={setSelectedProject}
            />
          ))}
        </div>
      </section>

      {/* Core Technical Matrix */}
      <section className="space-y-6">
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-indigo-500 dark:text-indigo-400 flex items-center gap-1.5">
            <Code2 className="w-3.5 h-3.5" />
            <span>Technical Expertise</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-zinc-900 dark:text-white mt-1">
            Skills & Engineering Tooling
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-6 rounded-2xl glass glow-border space-y-3">
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center">
              <Globe className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-base text-zinc-900 dark:text-white">
              Frontend & UI
            </h3>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {(profile.skills?.frontend || profile.technicalSkills?.frontend || []).map((s, i) => (
                <span key={i} className="px-2.5 py-1 rounded-lg bg-zinc-100 dark:bg-white/5 text-xs text-zinc-700 dark:text-zinc-300 font-mono">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-2xl glass glow-border space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
              <Terminal className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-base text-zinc-900 dark:text-white">
              Backend & Java / APIs
            </h3>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {(profile.skills?.backend || profile.technicalSkills?.backend || []).map((s, i) => (
                <span key={i} className="px-2.5 py-1 rounded-lg bg-zinc-100 dark:bg-white/5 text-xs text-zinc-700 dark:text-zinc-300 font-mono">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-2xl glass glow-border space-y-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
              <Cloud className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-base text-zinc-900 dark:text-white">
              Cloud & CI/CD Tooling
            </h3>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {(profile.skills?.cloud || profile.technicalSkills?.toolsWorkflow || []).map((s, i) => (
                <span key={i} className="px-2.5 py-1 rounded-lg bg-zinc-100 dark:bg-white/5 text-xs text-zinc-700 dark:text-zinc-300 font-mono">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-2xl glass glow-border space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center">
              <Palette className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-base text-zinc-900 dark:text-white">
              UI/UX & Design Systems
            </h3>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {(profile.skills?.design || profile.technicalSkills?.languages || []).map((s, i) => (
                <span key={i} className="px-2.5 py-1 rounded-lg bg-zinc-100 dark:bg-white/5 text-xs text-zinc-700 dark:text-zinc-300 font-mono">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location & Contact Preview Banner */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center p-8 rounded-3xl glass glow-border">
        <div className="lg:col-span-6 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 dark:text-emerald-400 text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Open to Collaborations</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-zinc-900 dark:text-white">
            Based in South India, Available Globally
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
            Whether you are looking to build modern scalable cloud architectures, develop full-stack applications, or design intuitive user experiences, I am ready to collaborate.
          </p>
          <div className="pt-2 flex items-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs shadow-md transition-all hover:scale-105"
            >
              <span>Schedule Conversation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        <div className="lg:col-span-6">
          <MapWidget item={{ href: "https://www.google.com/maps/@9.8399616,78.4832344,13z" }} />
        </div>
      </section>

      {/* Project Case Study Modal */}
      <ProjectModal
        item={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
