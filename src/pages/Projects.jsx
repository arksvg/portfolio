import React, { useState } from 'react';
import { Search, Sparkles, FolderGit2, Globe, SearchX, X } from 'lucide-react';
import { clientProjects, coreProjects } from '../data/resume';
import { useProjectVisibility } from '../context/ProjectVisibilityContext';
import ProjectCard from '../components/ui/ProjectCard';
import ProjectModal from '../components/ProjectModal';

export default function Projects() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);
  const { showClientProjects, isFreelanceProject } = useProjectVisibility();

  // If showClientProjects is false, hide the 8 freelance client projects
  const activeClientProjects = showClientProjects
    ? clientProjects
    : clientProjects.filter((p) => !isFreelanceProject(p));

  const allProjects = [...activeClientProjects, ...coreProjects];

  const filteredProjects = allProjects.filter((p) => {
    // Tab filter
    if (activeTab === 'client' && !activeClientProjects.some(cp => cp.id === p.id || cp.name === p.name)) return false;
    if (activeTab === 'core' && !coreProjects.some(cp => cp.id === p.id || cp.title === p.title)) return false;

    // Search filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const nameMatch = (p.name || p.title)?.toLowerCase().includes(q);
      const taglineMatch = (p.tagline || p.subtitle)?.toLowerCase().includes(q);
      const descMatch = p.description?.toLowerCase().includes(q);
      const techMatch = (p.tech || p.tags)?.some(t => t.toLowerCase().includes(q));
      return nameMatch || taglineMatch || descMatch || techMatch;
    }

    return true;
  });

  return (
    <div className="space-y-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-500 dark:text-indigo-400 text-xs font-semibold">
          <FolderGit2 className="w-3.5 h-3.5" />
          <span>Portfolio Showcase</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-zinc-900 dark:text-white tracking-tight">
          Client Work & Production Projects
        </h1>
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
          Explore production healthcare applications, modular ERP architectures, live commercial sites, and award-winning hackathon platforms.
        </p>
      </div>

      {/* Filter Tabs & Search */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-2 rounded-2xl glass glow-border">
        {/* Category Tabs */}
        <div className="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
              activeTab === 'all'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/25'
                : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/5'
            }`}
          >
            All Projects ({allProjects.length})
          </button>

          <button
            onClick={() => setActiveTab('client')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
              activeTab === 'client'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/25'
                : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/5'
            }`}
          >
            Client-Side & Production ({activeClientProjects.length})
          </button>

          <button
            onClick={() => setActiveTab('core')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
              activeTab === 'core'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/25'
                : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/5'
            }`}
          >
            Hackathons & Tools ({coreProjects.length})
          </button>
        </div>

        {/* Search Box */}
        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by tech or keyword..."
            className="w-full pl-9 pr-8 py-2 text-xs rounded-xl bg-zinc-100 dark:bg-white/5 border border-zinc-200/50 dark:border-white/10 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:border-indigo-500"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-200"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Grid of Projects */}
      {filteredProjects.length === 0 ? (
        <div className="min-h-[300px] flex flex-col items-center justify-center p-8 rounded-3xl glass glow-border text-center">
          <SearchX className="w-10 h-10 text-zinc-400 mb-3" />
          <h3 className="font-heading font-bold text-lg text-zinc-800 dark:text-zinc-200">
            No matching projects found
          </h3>
          <p className="text-xs text-zinc-500 mt-1">
            Try searching for "React", "Redux", "Spring Boot", or "Vercel".
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((proj) => (
            <ProjectCard
              key={proj.id || proj.name || proj.title}
              project={proj}
              onSelect={setSelectedProject}
            />
          ))}
        </div>
      )}

      {/* Case Study Modal */}
      <ProjectModal
        item={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
