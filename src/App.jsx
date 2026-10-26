import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Toast from './components/Toast';
import SecurityConsoleModal from './components/SecurityConsoleModal';
import { ProjectVisibilityProvider } from './context/ProjectVisibilityContext';

import Home from './pages/Home';
import Projects from './pages/Projects';
import Design from './pages/Design';
import Experience from './pages/Experience';
import Achievements from './pages/Achievements';
import Contact from './pages/Contact';

export default function App() {
  const [toast, setToast] = useState(null);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
  }, []);

  const showToast = (toastData) => {
    setToast(toastData);
    setTimeout(() => {
      setToast(null);
    }, 3000);
  };

  return (
    <ProjectVisibilityProvider>
      <div className="min-h-screen bg-ambient bg-dot-pattern flex flex-col justify-between selection:bg-indigo-500 selection:text-white">
        {/* Top Floating Navbar with Router Links */}
        <Navbar />

        {/* Main Routed Page Content */}
        <main className="flex-1 w-full">
          <Routes>
            <Route path="/" element={<Home onToast={showToast} />} />
            <Route path="/projects" element={<Projects onToast={showToast} />} />
            <Route path="/design" element={<Design onToast={showToast} />} />
            <Route path="/experience" element={<Experience onToast={showToast} />} />
            <Route path="/achievements" element={<Achievements onToast={showToast} />} />
            <Route path="/contact" element={<Contact onToast={showToast} />} />
            <Route path="*" element={<Home onToast={showToast} />} />
          </Routes>
        </main>

        {/* Footer Layout */}
        <Footer onToast={showToast} />

        {/* Security Console Terminal Modal for Global Unlock */}
        <SecurityConsoleModal onToast={showToast} />

        {/* Toast Notification */}
        <Toast
          toast={toast}
          onClose={() => setToast(null)}
        />
      </div>
    </ProjectVisibilityProvider>
  );
}
