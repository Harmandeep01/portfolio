import React from 'react';

export default function CrtOverlay({ enabled, isLight = false }) {
  if (!enabled) return null;

  return (
    <div className={`fixed inset-0 pointer-events-none z-40 crt-effect transition-opacity duration-300 ${
      isLight ? 'opacity-15' : 'opacity-60'
    }`}>
      {/* Moving scanline beam */}
      <div className="w-full h-24 bg-gradient-to-b from-transparent via-y2k-pink/[0.04] to-transparent animate-scanline" />
      
      {/* Vignette Corners */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_65%,rgba(0,0,0,0.4)_100%)]" />
    </div>
  );
}
