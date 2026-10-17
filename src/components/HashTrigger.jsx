import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

const DEFAULT_MESSAGES = [
  "DECRYPTED [ENCLAVE_ALPHA]: Synaptic pathway aligned with agentic reasoning core.",
  "DECRYPTED [NEURAL_GROUNDING]: Sub-conscious token divergence eliminated. Zero hallucinations.",
  "DECRYPTED [TELEMETRY_STREAM]: Target retrieved. Rank-ordering converged at top threshold.",
  "DECRYPTED [COSMIC_CLEARANCE]: Security clearance level 4 confirmed. Welcome, Operator.",
  "DECRYPTED [DECOUPLED_BUS]: Autonomous tool loop verified via stdio transport protocol.",
  "DECRYPTED [ENCLAVE_DISPATCH]: Real-time streaming SSE channel active without telemetry leakage.",
  "DECRYPTED [SHA256_VERIFY]: SHA256:8f4c2e17 — Hash matches cryptographic ground-truth."
];

// Global active dismiss pointer to ensure only ONE decrypted frequency exists at any time
let activeDismissFn = null;

export default function HashTrigger({ code, message, className = "" }) {
  const triggerRef = useRef(null);
  const [activeMessage, setActiveMessage] = useState(null);
  const [fading, setFading] = useState(false);
  const [coords, setCoords] = useState(null);

  const fadeTimerRef = useRef(null);
  const closeTimerRef = useRef(null);

  const clearTimers = () => {
    if (fadeTimerRef.current) clearTimeout(fadeTimerRef.current);
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
  };

  const dismiss = () => {
    clearTimers();
    setActiveMessage(null);
    setFading(false);
    setCoords(null);
    if (activeDismissFn === dismiss) {
      activeDismissFn = null;
    }
  };

  useEffect(() => {
    return () => {
      clearTimers();
      if (activeDismissFn === dismiss) {
        activeDismissFn = null;
      }
    };
  }, []);

  // Dismiss on Escape key or clicking outside
  useEffect(() => {
    if (!activeMessage) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        dismiss();
      }
    };

    const handleClickOutside = (e) => {
      if (triggerRef.current && !triggerRef.current.contains(e.target)) {
        dismiss();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('pointerdown', handleClickOutside);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('pointerdown', handleClickOutside);
    };
  }, [activeMessage]);

  const handleClick = (e) => {
    e.stopPropagation();

    // Immediately override any already existing decrypted frequency notification
    if (activeDismissFn) {
      activeDismissFn();
    }

    clearTimers();
    activeDismissFn = dismiss;

    // Calculate position at the respected place in document coordinates so it scrolls naturally
    if (triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      const scrollY = window.scrollY || window.pageYOffset || 0;
      const scrollX = window.scrollX || window.pageXOffset || 0;

      // Popover width: fits mobile screens comfortably without horizontal overflow
      const popoverWidth = Math.min(320, window.innerWidth - 24);

      // Determine vertical positioning: place above if space permits (>= 130px), else below
      const placeAbove = rect.top >= 130;
      const top = placeAbove ? (rect.top + scrollY - 8) : (rect.bottom + scrollY + 8);

      // Horizontal clamp within viewport bounds [12px, innerWidth - width - 12px]
      let left = rect.left + scrollX;
      const maxLeft = scrollX + window.innerWidth - popoverWidth - 12;
      const minLeft = scrollX + 12;
      if (left > maxLeft) left = maxLeft;
      if (left < minLeft) left = minLeft;

      setCoords({
        top,
        left,
        width: popoverWidth,
        placeAbove
      });
    }

    const chosen = message || DEFAULT_MESSAGES[Math.floor(Math.random() * DEFAULT_MESSAGES.length)];
    setActiveMessage(chosen);
    setFading(false);

    // Auto-fade sequence after 3.5s
    fadeTimerRef.current = setTimeout(() => {
      setFading(true);
      closeTimerRef.current = setTimeout(() => {
        setActiveMessage(null);
        setFading(false);
        setCoords(null);
        if (activeDismissFn === dismiss) {
          activeDismissFn = null;
        }
      }, 350);
    }, 3500);
  };

  return (
    <div 
      ref={triggerRef} 
      className={`relative inline-block align-middle max-w-full overflow-visible shrink-0 ${className}`}
    >
      <button
        onClick={handleClick}
        type="button"
        aria-haspopup="dialog"
        aria-expanded={Boolean(activeMessage)}
        aria-label={`Decrypt frequency ${code}`}
        className="group inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-y2k-silver hover:text-y2k-pink transition-colors duration-150 cursor-pointer select-none border border-y2k-border hover:border-y2k-pink px-2 py-0.5 rounded-none bg-y2k-card hover:bg-y2k-surface whitespace-nowrap shrink-0 max-w-full overflow-visible shadow-sm"
        title="Click to decrypt frequency"
      >
        <span className="text-y2k-pink shrink-0 font-bold">[</span>
        <span className="transition-all duration-200 group-hover:tracking-wider font-medium">{code}</span>
        <span className="text-y2k-pink shrink-0 font-bold">]</span>
      </button>

      {/* Render directly in document.body via Portal: Top-most z-layer, never hidden or clipped by parent overflow */}
      {activeMessage && coords && typeof document !== 'undefined' && createPortal(
        <div 
          role="dialog"
          aria-live="polite"
          aria-label={`Decrypted transmission ${code}`}
          style={{
            position: 'absolute',
            top: `${coords.top}px`,
            left: `${coords.left}px`,
            width: `${coords.width}px`,
            transform: coords.placeAbove ? 'translateY(-100%)' : 'translateY(0)',
            zIndex: 99999
          }}
          className={`pointer-events-auto transition-all duration-200 ease-out ${
            fading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
          }`}
        >
          <div className="bg-y2k-card border-2 border-y2k-pink text-y2k-paleSilver font-mono text-xs p-3 sm:p-3.5 shadow-[0_0_25px_rgba(243,135,161,0.35)] rounded-none relative">
            <div className="flex items-center justify-between border-b border-y2k-pink/30 pb-1.5 mb-2 text-[10px] text-y2k-silver">
              <span className="flex items-center gap-1.5 font-bold tracking-wider text-y2k-pink">
                <span className="w-1.5 h-1.5 bg-y2k-pink animate-ping inline-block rounded-full"></span>
                DECLASSIFIED // {code}
              </span>
              <button
                type="button"
                onClick={dismiss}
                aria-label="Dismiss transmission"
                className="text-y2k-silver hover:text-y2k-pink px-1 cursor-pointer font-bold text-xs"
                title="Dismiss"
              >
                ✕
              </button>
            </div>
            <p className="leading-relaxed text-y2k-paleSilver font-mono text-[11px] font-medium break-words">
              {activeMessage}
            </p>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
