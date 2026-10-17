import React, { useState, useEffect } from 'react';
import { Menu, X, ExternalLink, Monitor, Laptop, Sun, Moon } from 'lucide-react';
import HashTrigger from './HashTrigger';

export default function Navbar({ crtEnabled, setCrtEnabled, themeMode, setThemeMode }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: 'Artifacts', href: '#artifacts' },
    { label: 'Experience', href: '#experience' },
    { label: 'Cognition', href: '#cognition' },
    { label: 'Terminal', href: '#terminal' },
    { label: 'Transmit', href: '#transmit' },
  ];

  // Close mobile drawer on Escape key
  useEffect(() => {
    if (!mobileOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileOpen]);

  const handleHomeClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (window.location.hash) {
      window.history.pushState(null, '', window.location.pathname);
    }
  };

  const handleThemeSelect = (mode) => {
    setThemeMode(mode);
    localStorage.setItem('surveillance_theme', mode);
  };

  return (
    <header className="sticky top-0 z-30 w-full bg-y2k-bg/90 backdrop-blur-md border-b border-y2k-border transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand / Home Link (Smooth Scroll to Top with zero page reload) */}
        <a 
          href="#" 
          onClick={handleHomeClick}
          className="flex items-center gap-3 group cursor-pointer select-none"
          title="Return to Home (Top)"
        >
          <div className="w-8 h-8 rounded-none border border-y2k-pink bg-y2k-card flex items-center justify-center font-mono font-bold text-xs text-y2k-pink group-hover:bg-y2k-pink group-hover:text-y2k-bg transition-colors duration-200">
            H01
          </div>
          <div className="flex flex-col text-left">
            <span className="font-display font-bold text-sm sm:text-base tracking-tight text-y2k-paleSilver group-hover:text-y2k-pink transition-colors">
              HARMANDEEP
            </span>
            <span className="font-mono text-[10px] text-y2k-silver flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse"></span>
              K & A Technology
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-6 font-mono text-xs uppercase tracking-wider">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-y2k-silver hover:text-y2k-pink transition-colors relative py-1 hover:border-b-2 hover:border-y2k-pink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right Action Tools */}
        <div className="hidden sm:flex items-center gap-2.5">
          
          {/* Segmented 3-Way Mode Switcher: SYS | DARK | LIGHT */}
          <div className="flex items-center border border-y2k-border bg-y2k-surface p-0.5 font-mono text-[10px]">
            <button
              type="button"
              onClick={() => handleThemeSelect('system')}
              aria-label="Switch to system theme"
              aria-pressed={themeMode === 'system'}
              className={`px-2 py-1 flex items-center gap-1 transition-colors cursor-pointer ${
                themeMode === 'system'
                  ? 'bg-y2k-pink text-y2k-bg font-bold shadow-sm'
                  : 'text-y2k-silver hover:text-y2k-pink'
              }`}
              title="System Auto Mode (Default)"
            >
              <Laptop className="w-3 h-3" />
              <span>SYS</span>
            </button>

            <button
              type="button"
              onClick={() => handleThemeSelect('blackops')}
              aria-label="Switch to black ops dark theme"
              aria-pressed={themeMode === 'blackops'}
              className={`px-2 py-1 flex items-center gap-1 transition-colors cursor-pointer ${
                themeMode === 'blackops'
                  ? 'bg-y2k-pink text-y2k-bg font-bold shadow-sm'
                  : 'text-y2k-silver hover:text-y2k-pink'
              }`}
              title="Black Ops (Dark Mode)"
            >
              <Moon className="w-3 h-3" />
              <span>DARK</span>
            </button>

            <button
              type="button"
              onClick={() => handleThemeSelect('recon')}
              aria-label="Switch to declassified light theme"
              aria-pressed={themeMode === 'recon'}
              className={`px-2 py-1 flex items-center gap-1 transition-colors cursor-pointer ${
                themeMode === 'recon'
                  ? 'bg-y2k-pink text-y2k-bg font-bold shadow-sm'
                  : 'text-y2k-silver hover:text-y2k-pink'
              }`}
              title="Declassified (Light Mode)"
            >
              <Sun className="w-3 h-3" />
              <span>LIGHT</span>
            </button>
          </div>

          {/* CRT Scanline Filter Toggle */}
          <button
            onClick={() => setCrtEnabled(!crtEnabled)}
            type="button"
            aria-label={`Toggle CRT scanline filter. Currently ${crtEnabled ? 'enabled' : 'disabled'}`}
            aria-pressed={crtEnabled}
            className={`px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider border flex items-center gap-1.5 transition-colors cursor-pointer ${
              crtEnabled
                ? 'border-y2k-pink text-y2k-pink bg-y2k-pink/10 shadow-[0_0_10px_rgba(243,135,161,0.2)]'
                : 'border-y2k-border text-y2k-silver hover:border-y2k-silver'
            }`}
            title="Toggle Y2K CRT Scanline filter"
          >
            <Monitor className="w-3.5 h-3.5" />
            <span>CRT {crtEnabled ? 'ON' : 'OFF'}</span>
          </button>

          <a
            href="https://www.linkedin.com/in/harmandeep01/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-y2k-paleSilver hover:text-y2k-pink border border-y2k-border hover:border-y2k-pink transition-all flex items-center gap-1"
          >
            LinkedIn
            <ExternalLink className="w-3 h-3 text-y2k-pink" />
          </a>

          <a
            href="https://github.com/Harmandeep01"
            target="_blank"
            rel="noopener noreferrer"
            className="px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-y2k-paleSilver hover:text-y2k-pink border border-y2k-border hover:border-y2k-pink transition-all flex items-center gap-1"
          >
            GitHub
            <ExternalLink className="w-3 h-3 text-y2k-pink" />
          </a>
        </div>

        {/* Mobile Hamburger / Quick Switch */}
        <div className="flex sm:hidden items-center gap-2">
          <div className="flex border border-y2k-border text-[9px] font-mono">
            <button
              onClick={() => handleThemeSelect('blackops')}
              type="button"
              aria-label="Switch to dark mode"
              aria-pressed={themeMode === 'blackops'}
              className={`px-1.5 py-1 ${themeMode === 'blackops' ? 'bg-y2k-pink text-y2k-bg font-bold' : 'text-y2k-silver'}`}
            >
              DARK
            </button>
            <button
              onClick={() => handleThemeSelect('recon')}
              type="button"
              aria-label="Switch to light mode"
              aria-pressed={themeMode === 'recon'}
              className={`px-1.5 py-1 ${themeMode === 'recon' ? 'bg-y2k-pink text-y2k-bg font-bold' : 'text-y2k-silver'}`}
            >
              LIGHT
            </button>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            type="button"
            className="p-1.5 border border-y2k-border text-y2k-silver hover:text-y2k-pink hover:border-y2k-pink"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className="sm:hidden border-t border-y2k-border bg-y2k-card/95 backdrop-blur-xl px-4 py-6 space-y-4 animate-fade-in">
          <div className="flex items-center justify-between pb-3 border-b border-y2k-border font-mono text-xs text-y2k-silver">
            <span>[AGENCY_INDEX // V2.3]</span>
            <HashTrigger code="SHA256:01ef" />
          </div>

          {/* Mobile 3-Way Mode Switcher */}
          <div className="py-2 border-b border-y2k-border/60 flex items-center justify-between">
            <span className="font-mono text-xs text-y2k-silver">MODE:</span>
            <div className="flex items-center gap-1 font-mono text-xs">
              <button
                onClick={() => handleThemeSelect('system')}
                type="button"
                className={`px-2 py-0.5 border ${themeMode === 'system' ? 'border-y2k-pink text-y2k-pink bg-y2k-pink/10' : 'border-y2k-border text-y2k-silver'}`}
              >
                SYS
              </button>
              <button
                onClick={() => handleThemeSelect('blackops')}
                type="button"
                className={`px-2 py-0.5 border ${themeMode === 'blackops' ? 'border-y2k-pink text-y2k-pink bg-y2k-pink/10' : 'border-y2k-border text-y2k-silver'}`}
              >
                DARK
              </button>
              <button
                onClick={() => handleThemeSelect('recon')}
                type="button"
                className={`px-2 py-0.5 border ${themeMode === 'recon' ? 'border-y2k-pink text-y2k-pink bg-y2k-pink/10' : 'border-y2k-border text-y2k-silver'}`}
              >
                LIGHT
              </button>
            </div>
          </div>

          <div className="flex flex-col space-y-3 font-mono text-sm uppercase tracking-wider">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-y2k-silver hover:text-y2k-pink transition-colors py-1 flex items-center justify-between"
              >
                <span>{item.label}</span>
                <span className="text-y2k-pink/60 text-xs">→</span>
              </a>
            ))}
          </div>
          <div className="pt-4 border-t border-y2k-border flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/harmandeep01/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-2 text-xs font-mono border border-y2k-border text-y2k-silver hover:border-y2k-pink hover:text-y2k-pink"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://github.com/Harmandeep01"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-2 text-xs font-mono border border-y2k-border text-y2k-silver hover:border-y2k-pink hover:text-y2k-pink"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
