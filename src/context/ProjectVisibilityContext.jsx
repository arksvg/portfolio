import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { fetchGlobalUnlockState, updateGlobalUnlockState, SECRET_CODE } from '../services/cloudSync';
import confetti from 'canvas-confetti';

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
  isSyncing: false,
  isModalOpen: false,
  openUnlockModal: () => {},
  closeUnlockModal: () => {},
  toggleClientProjects: () => {},
  unlockGlobally: async () => {},
  lockGlobally: async () => {},
  isFreelanceProject: () => false
});

export function ProjectVisibilityProvider({ children }) {
  const [showClientProjects, setShowClientProjectsState] = useState(() => {
    // 1. Check URL query parameters
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.get('showProjects') === 'true' || params.get('clientProjects') === 'true') {
        try {
          localStorage.setItem(STORAGE_KEY, 'true');
        } catch (e) {}
        return true;
      }
      if (params.get('showProjects') === 'false' || params.get('hideProjects') === 'true') {
        try {
          localStorage.setItem(STORAGE_KEY, 'false');
        } catch (e) {}
        return false;
      }

      // 2. Check localStorage cache
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored !== null) {
          return stored === 'true';
        }
      } catch (e) {}
    }

    return false;
  });

  const [isSyncing, setIsSyncing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openUnlockModal = () => setIsModalOpen(true);
  const closeUnlockModal = () => setIsModalOpen(false);

  // Sync state changes to local storage & state
  const applyState = useCallback((val) => {
    setShowClientProjectsState(val);
    try {
      localStorage.setItem(STORAGE_KEY, String(val));
    } catch (e) {}
  }, []);

  // Fetch global state from cloud on mount, on window focus, and periodically
  useEffect(() => {
    let isMounted = true;
    async function syncFromCloud() {
      try {
        const cloudState = await fetchGlobalUnlockState();
        if (isMounted && typeof cloudState === 'boolean') {
          applyState(cloudState);
        }
      } catch (err) {
        // ignore
      }
    }

    syncFromCloud();

    const handleFocus = () => {
      syncFromCloud();
    };
    window.addEventListener('focus', handleFocus);
    const interval = setInterval(syncFromCloud, 30000);

    return () => {
      isMounted = false;
      window.removeEventListener('focus', handleFocus);
      clearInterval(interval);
    };
  }, [applyState]);

  // Unlock globally with secret code
  const unlockGlobally = async (code) => {
    if (code !== SECRET_CODE) {
      throw new Error("Invalid secret code. Access denied.");
    }

    setIsSyncing(true);
    try {
      // 1. Update cloud
      await updateGlobalUnlockState(true);
      // 2. Update local state
      applyState(true);

      // 3. Trigger celebration confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.7 }
        });
      } catch (e) {}

      return true;
    } finally {
      setIsSyncing(false);
    }
  };

  // Lock globally with secret code
  const lockGlobally = async (code) => {
    if (code !== SECRET_CODE) {
      throw new Error("Invalid secret code. Access denied.");
    }

    setIsSyncing(true);
    try {
      await updateGlobalUnlockState(false);
      applyState(false);
      return true;
    } finally {
      setIsSyncing(false);
    }
  };

  const toggleClientProjects = () => {
    openUnlockModal();
  };

  // Optional console commands for DevTools
  useEffect(() => {
    if (typeof window === 'undefined') return;

    window.unlock = async (providedCode) => {
      if (!providedCode) {
        console.log("Usage: unlock('Arksvg@23!')");
        return;
      }
      try {
        await unlockGlobally(providedCode);
        console.log("Showcase unlocked globally.");
      } catch (err) {
        console.error(err.message);
      }
    };

    window.lock = async (providedCode) => {
      if (!providedCode) {
        console.log("Usage: lock('Arksvg@23!')");
        return;
      }
      try {
        await lockGlobally(providedCode);
        console.log("Showcase locked globally.");
      } catch (err) {
        console.error(err.message);
      }
    };

    return () => {
      delete window.unlock;
      delete window.lock;
    };
  }, [showClientProjects]);

  return (
    <ProjectVisibilityContext.Provider
      value={{
        showClientProjects,
        isSyncing,
        isModalOpen,
        openUnlockModal,
        closeUnlockModal,
        toggleClientProjects,
        unlockGlobally,
        lockGlobally,
        isFreelanceProject
      }}
    >
      {children}
    </ProjectVisibilityContext.Provider>
  );
}

export const useProjectVisibility = () => useContext(ProjectVisibilityContext);
