import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import CrtOverlay from './components/CrtOverlay';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import AllSeeingEye from './components/AllSeeingEye';
import AgencyTerminal from './components/AgencyTerminal';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [crtEnabled, setCrtEnabled] = useState(true);
  
  // Theme mode: 'system' (default), 'blackops' (dark), 'recon' (light)
  const [themeMode, setThemeMode] = useState(() => {
    return localStorage.getItem('surveillance_theme') || 'system';
  });

  const [isLightMode, setIsLightMode] = useState(false);

  // Sync theme with DOM and listen to OS changes when in 'system' mode
  useEffect(() => {
    const applyTheme = () => {
      let isDark = true;
      if (themeMode === 'system') {
        isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      } else if (themeMode === 'blackops') {
        isDark = true;
      } else if (themeMode === 'recon') {
        isDark = false;
      }

      setIsLightMode(!isDark);

      if (!isDark) {
        document.documentElement.classList.add('theme-recon');
        document.body.classList.add('theme-recon');
      } else {
        document.documentElement.classList.remove('theme-recon');
        document.body.classList.remove('theme-recon');
      }
    };

    applyTheme();

    // Listen to OS system color changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemChange = () => {
      if (themeMode === 'system') {
        applyTheme();
      }
    };

    mediaQuery.addEventListener('change', handleSystemChange);
    return () => mediaQuery.removeEventListener('change', handleSystemChange);
  }, [themeMode]);

  // Handle scroll restoration: keep position on normal refresh, land on Home on hard reload
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'auto';
    }

    const nav = performance.getEntriesByType('navigation')[0];
    if (nav && nav.type === 'reload' && window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className={`relative min-h-screen bg-y2k-bg text-y2k-paleSilver font-sans selection:bg-y2k-pink selection:text-y2k-bg transition-colors duration-200 ${
      isLightMode ? 'theme-recon' : ''
    }`}>
      {/* Vintage Y2K CRT Scanline Filter Overlay */}
      <CrtOverlay enabled={crtEnabled} isLight={isLightMode} />

      {/* Navigation Dock */}
      <Navbar 
        crtEnabled={crtEnabled} 
        setCrtEnabled={setCrtEnabled}
        themeMode={themeMode}
        setThemeMode={setThemeMode}
      />

      {/* Main Content Flow */}
      <main className="relative z-10">
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <AllSeeingEye />
        <AgencyTerminal />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
