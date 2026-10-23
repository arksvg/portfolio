import React, { createContext, useContext, useState, useEffect } from 'react';

// The 8 specific freelance/client projects that should only be visible when toggled ON
export const HIDDEN_CLIENT_PROJECT_IDS = [
  'sams_culinary',
  'jeeva_associates',
  'dfs_home_bakes',
  'an_microgreens',
  'rubi_masala',
  'varma_sakshi',
  'violinist',
  'sundaram_jewellery'
];

export const HIDDEN_CLIENT_PROJECT_NAMES = [
  "Sam's Culinary Art Class",
  "Jeeva Associates",
  "DFS Home Bakes",
  "AN Microgreens",
  "Rubi Masala",
  "Varma Sakshi",
  "Violinist.in",
  "Sundaram Jewellery"
];

export const isFreelanceProject = (project) => {
  if (!project) return false;
  const idMatch = project.id && HIDDEN_CLIENT_PROJECT_IDS.includes(project.id);
  const nameMatch = project.name && HIDDEN_CLIENT_PROJECT_NAMES.includes(project.name);
  return Boolean(idMatch || nameMatch);
};

const STORAGE_KEY = 'portfolio_show_client_projects';

const ProjectVisibilityContext = createContext({
  showClientProjects: false,
  toggleClientProjects: () => {},
  setShowClientProjects: () => {},
  isFreelanceProject: () => false
});

export function ProjectVisibilityProvider({ children }) {
  const [showClientProjects, setShowClientProjectsState] = useState(() => {
    // 1. Check URL query parameters (works on deployed site via direct link e.g. ?showProjects=true)
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.get('showProjects') === 'true' || params.get('clientProjects') === 'true') {
        try {
          localStorage.setItem(STORAGE_KEY, 'true');
        } catch (e) {
          // ignore localStorage errors in private browsing
        }
        return true;
      }
      if (params.get('showProjects') === 'false' || params.get('hideProjects') === 'true') {
        try {
          localStorage.setItem(STORAGE_KEY, 'false');
        } catch (e) {
          // ignore
        }
        return false;
      }

      // 2. Check localStorage persistence
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored !== null) {
          return stored === 'true';
        }
      } catch (e) {
        // ignore
      }
    }

    // Default: Hidden
    return false;
  });

  const setShowClientProjects = (val) => {
    setShowClientProjectsState(val);
    try {
      localStorage.setItem(STORAGE_KEY, String(val));
    } catch (e) {
      // ignore
    }
  };

  const toggleClientProjects = () => {
    setShowClientProjectsState((prev) => {
      const next = !prev;
      try {
        localStorage.setItem(STORAGE_KEY, String(next));
      } catch (e) {
        // ignore
      }
      return next;
    });
  };

  // Listen for storage changes across tabs or window navigation
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === STORAGE_KEY && e.newValue !== null) {
        setShowClientProjectsState(e.newValue === 'true');
      }
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return (
    <ProjectVisibilityContext.Provider
      value={{
        showClientProjects,
        toggleClientProjects,
        setShowClientProjects,
        isFreelanceProject
      }}
    >
      {children}
    </ProjectVisibilityContext.Provider>
  );
}

export const useProjectVisibility = () => useContext(ProjectVisibilityContext);
