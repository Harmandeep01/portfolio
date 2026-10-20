import React, { useEffect, useRef, useState } from 'react';

// Helper to determine if the client is a mobile device
const isMobileDevice = () => {
  if (typeof window === 'undefined') return false;
  const isSmallScreen = window.innerWidth < 768;
  const isTouchPrimary = window.matchMedia && window.matchMedia('(hover: none) and (pointer: coarse)').matches;
  const isMobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  return isSmallScreen || isTouchPrimary || isMobileUA;
};

export default function ConsciousnessEye({ className = "" }) {
  const containerRef = useRef(null);
  const [pupilPos, setPupilPos] = useState({ x: 0, y: 0 });
  const [blink, setBlink] = useState(false);

  useEffect(() => {
    let animationFrameId = null;
    let blinkTimer = null;
    let blinkCloseTimer = null;
    let isMounted = true;

    const handleMouseMove = (e) => {
      // Keep eye non-mouse-sensing on mobile devices (fixed in center)
      if (isMobileDevice()) return;
      if (!containerRef.current) return;
      if (animationFrameId) return;

      animationFrameId = requestAnimationFrame(() => {
        animationFrameId = null;
        if (!containerRef.current || !isMounted) return;
        if (isMobileDevice()) {
          setPupilPos({ x: 0, y: 0 });
          return;
        }

        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const dx = e.clientX - centerX;
        const dy = e.clientY - centerY;
        const distance = Math.min(Math.hypot(dx, dy), 120);
        const angle = Math.atan2(dy, dx);
        
        const maxOffset = 18; // maximum pupil movement
        const moveDistance = (distance / 120) * maxOffset;
        
        setPupilPos({
          x: Math.cos(angle) * moveDistance,
          y: Math.sin(angle) * moveDistance
        });
      });
    };

    const handleResize = () => {
      if (isMobileDevice()) {
        setPupilPos({ x: 0, y: 0 });
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('resize', handleResize);

    // Periodic conscious blink with proper random intervals and cleanup
    const scheduleNextBlink = () => {
      const delay = 5000 + Math.random() * 4000;
      blinkTimer = setTimeout(() => {
        if (!isMounted) return;
        setBlink(true);
        blinkCloseTimer = setTimeout(() => {
          if (!isMounted) return;
          setBlink(false);
          scheduleNextBlink();
        }, 180);
      }, delay);
    };

    scheduleNextBlink();

    return () => {
      isMounted = false;
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      if (blinkTimer) clearTimeout(blinkTimer);
      if (blinkCloseTimer) clearTimeout(blinkCloseTimer);
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className={`relative flex items-center justify-center select-none ${className}`}
      style={{ width: '100%', maxWidth: '340px', aspectRatio: '1/1' }}
    >
      {/* Outer Rotating Geometry Ring */}
      <svg 
        className="absolute inset-0 w-full h-full animate-spin-slow opacity-65 text-y2k-pink"
        viewBox="0 0 200 200"
      >
        <circle cx="100" cy="100" r="94" fill="none" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 4" />
        <circle cx="100" cy="100" r="82" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="12 6" />
        {/* Intersecting Triangles / Capstone geometry */}
        <polygon points="100,12 176,144 24,144" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.8" />
        <polygon points="100,188 176,56 24,56" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.8" />
        {/* Cardinal tick marks */}
        <line x1="100" y1="2" x2="100" y2="10" stroke="currentColor" strokeWidth="2" />
        <line x1="100" y1="190" x2="100" y2="198" stroke="currentColor" strokeWidth="2" />
        <line x1="2" y1="100" x2="10" y2="100" stroke="currentColor" strokeWidth="2" />
        <line x1="190" y1="100" x2="198" y2="100" stroke="currentColor" strokeWidth="2" />
      </svg>

      {/* Counter-rotating Matrix Binary Ring */}
      <div 
        className="absolute inset-4 rounded-full border border-y2k-silver/40 animate-spin-slow"
        style={{ animationDirection: 'reverse', animationDuration: '40s' }}
      >
        <div className="absolute top-1 left-1/2 -translate-x-1/2 font-mono text-[8px] text-y2k-pink font-semibold tracking-widest">
          SHA256:7f83b165 4b8f2d9e 1a0c99f3
        </div>
        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 font-mono text-[8px] text-y2k-silver font-semibold tracking-widest">
          [ENCLAVE::NODE_82]
        </div>
      </div>

      {/* Main Eye of Providence Body */}
      <svg 
        className="w-5/6 h-5/6 drop-shadow-[0_0_20px_rgba(243,135,161,0.2)] transition-transform duration-200"
        viewBox="0 0 200 200"
      >
        <defs>
          <radialGradient id="irisGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgb(var(--color-light-pink))" />
            <stop offset="65%" stopColor="rgb(var(--color-pink))" />
            <stop offset="100%" stopColor="#121214" />
          </radialGradient>
          <linearGradient id="scleraGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="rgb(var(--color-surface))" />
          </linearGradient>
        </defs>

        {/* Eye Outline Evolving Shape */}
        <g 
          className="transition-all duration-150"
          style={{ 
            transformOrigin: '100px 100px',
            transform: blink ? 'scaleY(0.04)' : 'scaleY(1)' 
          }}
        >
          {/* Eyeball Path */}
          <path
            d="M 20,100 Q 100,35 180,100 Q 100,165 20,100 Z"
            fill="transparent"
            stroke="rgb(var(--color-pink))"
            strokeWidth="2"
          />

          {/* Eye Corner Hardware Details (Surveillance Agency Monocle) */}
          <line x1="12" y1="100" x2="28" y2="100" stroke="currentColor" strokeWidth="1.5" className="text-y2k-silver" />
          <line x1="172" y1="100" x2="188" y2="100" stroke="currentColor" strokeWidth="1.5" className="text-y2k-silver" />
          <circle cx="20" cy="100" r="2.5" fill="rgb(var(--color-pink))" />
          <circle cx="180" cy="100" r="2.5" fill="rgb(var(--color-pink))" />

          {/* Iris and Pupil Group (Moves with mouse) */}
          <g 
            style={{ 
              transform: `translate(${pupilPos.x}px, ${pupilPos.y}px)`,
              transition: 'transform 0.12s ease-out' 
            }}
          >
            {/* Outer Iris Rays */}
            <circle cx="100" cy="100" r="34" fill="none" stroke="rgb(var(--color-pink))" strokeWidth="1" strokeDasharray="2 3" opacity="0.8" />
            <circle cx="100" cy="100" r="28" fill="url(#irisGrad)" />

            {/* Core Pupil */}
            <circle cx="100" cy="100" r="14" fill="#121214" stroke="rgb(var(--color-pink))" strokeWidth="1.8" />
            
            {/* Secret Monocle Crosshair */}
            <line x1="100" y1="88" x2="100" y2="112" stroke="rgb(var(--color-pink))" strokeWidth="1" opacity="0.9" />
            <line x1="88" y1="100" x2="112" y2="100" stroke="rgb(var(--color-pink))" strokeWidth="1" opacity="0.9" />

            {/* Specular Highlight */}
            <circle cx="94" cy="94" r="3.5" fill="#FFFFFF" opacity="0.9" />
            <circle cx="104" cy="104" r="1.5" fill="#FFFFFF" opacity="0.5" />
          </g>
        </g>
      </svg>

      {/* Status Badge below eye */}
      <div className="absolute -bottom-3 px-2 py-0.5 bg-y2k-card border border-y2k-border font-mono text-[9px] text-y2k-pink tracking-widest uppercase flex items-center gap-1.5 shadow-sm">
        <span className="w-1.5 h-1.5 bg-y2k-pink rounded-full animate-ping"></span>
        <span>PROVIDENCE // SURVEILLANCE_ACTIVE</span>
      </div>
    </div>
  );
}
