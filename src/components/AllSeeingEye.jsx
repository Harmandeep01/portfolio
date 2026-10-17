import React, { useState, useEffect } from 'react';
import HashTrigger from './HashTrigger';
import { ShieldCheck, Cpu, Terminal, Radio } from 'lucide-react';

export default function AllSeeingEye() {
  const [blink, setBlink] = useState(false);

  // Automatic periodic blink (no cursor tracking, fixed peaceful gaze)
  useEffect(() => {
    let timeoutId = null;
    const blinkInterval = setInterval(() => {
      setBlink(true);
      timeoutId = setTimeout(() => setBlink(false), 140);
    }, 4500);

    return () => {
      clearInterval(blinkInterval);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return (
    <section id="providence" className="py-20 border-t border-y2k-border relative bg-transparent overflow-hidden">
      
      {/* Background subtle cryptographic grid watermark */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(243,135,161,0.05),transparent_65%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
        
        {/* Classified Agency Header Banner */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-4 font-mono text-[11px] text-y2k-silver">
          <span className="text-y2k-pink">[DIRECTORATE_OF_SPECIAL_PROGRAMS]</span>
          <span>•</span>
          <span className="redacted">[SPECIAL_ACCESS_PROGRAM_09]</span>
          <span>•</span>
          <HashTrigger 
            code="SHA256:9f83a21c" 
            message="DECRYPTED [ENCLAVE_ALPHA]: Special Access Program clearance verified. Surveillance stream active." 
          />
        </div>

        <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-y2k-paleSilver uppercase tracking-tight mb-2">
          The Eye of Providence
        </h2>
        <p className="font-mono text-xs text-y2k-silver max-w-lg mb-8 uppercase tracking-wider">
          ANNUIT CŒPTIS • PROVIDENCE ENCLAVE
          <br />
          <span className="text-[10px] text-y2k-pink">CLEARANCE: COSMIC TOP SECRET // NEED-TO-KNOW STRICTLY ENFORCED</span>
        </p>

        {/* The USD All-Seeing Eye Pyramid Emblem (Mathematically Collinear, Clean, Fixed) */}
        <div className="relative w-72 sm:w-88 md:w-96 aspect-square p-6 bg-transparent border-2 border-y2k-border shadow-[0_0_35px_rgba(243,135,161,0.12)] flex flex-col items-center justify-center">
          
          {/* Y2K Corner Brackets */}
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-y2k-pink" />
          <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-y2k-pink" />
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-y2k-pink" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-y2k-pink" />

          {/* Clean USD Pyramid SVG */}
          <svg className="w-full h-full" viewBox="0 0 300 270">
            <defs>
              {/* Ethereal Halo Gradient */}
              <radialGradient id="esotericHalo" cx="50%" cy="40%" r="50%">
                <stop offset="0%" stopColor="rgb(var(--color-pink))" stopOpacity="0.25" />
                <stop offset="100%" stopColor="rgb(var(--color-pink))" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Radiant Sunburst behind the Capstone */}
            <circle cx="150" cy="86" r="70" fill="url(#esotericHalo)" />

            {/* SINGLE ROTATING ESOTERIC SYMBOL (Background Only) */}
            <g 
              style={{ transformOrigin: '150px 86px' }} 
              className="animate-spin-slow opacity-70 pointer-events-none"
            >
              <circle cx="150" cy="86" r="76" fill="none" stroke="rgb(var(--color-pink))" strokeWidth="1.2" strokeDasharray="3 4" />
              <circle cx="150" cy="86" r="64" fill="none" stroke="rgb(var(--color-silver))" strokeWidth="1" strokeDasharray="8 6" />
              {/* Sacred 12-point geometry */}
              <polygon points="150,22 205.43,118 94.57,118" fill="none" stroke="rgb(var(--color-pink))" strokeWidth="1" />
              <polygon points="150,150 205.43,54 94.57,54" fill="none" stroke="rgb(var(--color-pink))" strokeWidth="1" />
              <circle cx="150" cy="86" r="48" fill="none" stroke="rgb(var(--color-pink))" strokeWidth="1" strokeDasharray="2 3" />
            </g>

            {/* Static Radiant Sunbeams emitting from the Eye */}
            <g opacity="0.65" pointerEvents="none">
              {[0, 18, 36, 54, 72, 90, 108, 126, 144, 162, 180, 198, 216, 234, 252, 270, 288, 306, 324, 342].map((deg) => (
                <line
                  key={deg}
                  x1="150"
                  y1="86"
                  x2={150 + Math.cos((deg * Math.PI) / 180) * 62}
                  y2={86 + Math.sin((deg * Math.PI) / 180) * 62}
                  stroke="rgb(var(--color-pink))"
                  strokeWidth="1"
                  strokeDasharray="2 3"
                />
              ))}
            </g>

            {/* 
              PYRAMID GEOMETRY (USD COLLINEAR SPECIFICATION):
              Both capstone and lower pyramid lie on the exact same trajectory:
              Left side:  x = 150 - (y - 40) * 0.5
              Right side: x = 150 + (y - 40) * 0.5
              Gap: between y = 114 and y = 126 (12px clean air gap)
            */}

            {/* FIXED LOWER TRUNCATED PYRAMID */}
            <polygon 
              points="107,126 193,126 245,230 55,230" 
              fill="rgb(var(--color-surface))" 
              stroke="rgb(var(--color-border))" 
              strokeWidth="1.5" 
            />

            {/* Horizontal Masonry Brick Joints (Static, Clean) */}
            <line x1="98.5" y1="143" x2="201.5" y2="143" stroke="rgb(var(--color-border))" strokeWidth="0.8" />
            <line x1="90" y1="160" x2="210" y2="160" stroke="rgb(var(--color-border))" strokeWidth="0.8" />
            <line x1="81.5" y1="177" x2="218.5" y2="177" stroke="rgb(var(--color-border))" strokeWidth="0.8" />
            <line x1="73" y1="194" x2="227" y2="194" stroke="rgb(var(--color-border))" strokeWidth="0.8" />
            <line x1="64.5" y1="211" x2="235.5" y2="211" stroke="rgb(var(--color-border))" strokeWidth="0.8" />

            {/* Staggered Vertical Brick Joints */}
            <line x1="150" y1="126" x2="150" y2="143" stroke="rgb(var(--color-border))" strokeWidth="0.75" />
            <line x1="125" y1="143" x2="125" y2="160" stroke="rgb(var(--color-border))" strokeWidth="0.75" />
            <line x1="175" y1="143" x2="175" y2="160" stroke="rgb(var(--color-border))" strokeWidth="0.75" />
            <line x1="140" y1="160" x2="140" y2="177" stroke="rgb(var(--color-border))" strokeWidth="0.75" />
            <line x1="160" y1="160" x2="160" y2="177" stroke="rgb(var(--color-border))" strokeWidth="0.75" />
            <line x1="115" y1="177" x2="115" y2="194" stroke="rgb(var(--color-border))" strokeWidth="0.75" />
            <line x1="185" y1="177" x2="185" y2="194" stroke="rgb(var(--color-border))" strokeWidth="0.75" />
            <line x1="135" y1="194" x2="135" y2="211" stroke="rgb(var(--color-border))" strokeWidth="0.75" />
            <line x1="165" y1="194" x2="165" y2="211" stroke="rgb(var(--color-border))" strokeWidth="0.75" />
            <line x1="110" y1="211" x2="110" y2="230" stroke="rgb(var(--color-border))" strokeWidth="0.75" />
            <line x1="190" y1="211" x2="190" y2="230" stroke="rgb(var(--color-border))" strokeWidth="0.75" />

            {/* Roman Numerals at Base */}
            <text 
              x="150" 
              y="224" 
              textAnchor="middle" 
              fill="rgb(var(--color-pink))" 
              fontFamily="JetBrains Mono" 
              fontSize="9" 
              letterSpacing="2"
              className="font-bold tracking-widest select-none"
            >
              MDCCLXXVI
            </text>

            {/* 
              FIXED CAPSTONE (NO FLOATING, EXACT COLLINEAR ALIGNMENT WITH LOWER PYRAMID):
              Left: (113, 114) -> Apex: (150, 40) -> Right: (187, 114)
            */}
            <polygon 
              points="150,40 187,114 113,114" 
              fill="rgb(var(--color-card))" 
              stroke="rgb(var(--color-pink))" 
              strokeWidth="1.8" 
            />

            {/* THE ALL-SEEING EYE (FIXED POSITION, BLINKS AUTOMATICALLY ONLY) */}
            <g 
              style={{ 
                transformOrigin: '150px 86px',
                transform: blink ? 'scaleY(0.05)' : 'scaleY(1)',
                transition: 'transform 0.12s ease-out'
              }}
            >
              {/* Eyeball Almond Path */}
              <path
                d="M 132,86 Q 150,70 168,86 Q 150,102 132,86 Z"
                fill="#FFFFFF"
                stroke="rgb(var(--color-pink))"
                strokeWidth="1.8"
              />

              {/* Iris */}
              <circle 
                cx="150" 
                cy="86" 
                r="7" 
                fill="rgb(var(--color-light-pink))" 
                stroke="rgb(var(--color-pink))" 
                strokeWidth="1.2" 
              />

              {/* Central Pupil */}
              <circle 
                cx="150" 
                cy="86" 
                r="3.5" 
                fill="#121214" 
              />

              {/* Specular Glint */}
              <circle 
                cx="148" 
                cy="84.2" 
                r="1.2" 
                fill="#FFFFFF" 
              />
            </g>

            {/* Upper and Lower Motto Ribbon Text */}
            <text 
              x="150" 
              y="22" 
              textAnchor="middle" 
              fill="currentColor" 
              className="text-y2k-silver font-bold text-[10px] tracking-widest font-sans uppercase select-none"
            >
              ANNUIT CŒPTIS
            </text>
            <text 
              x="150" 
              y="256" 
              textAnchor="middle" 
              fill="currentColor" 
              className="text-y2k-silver font-bold text-[10px] tracking-widest font-sans uppercase select-none"
            >
              PROVIDENCE ENCLAVE
            </text>
          </svg>

          {/* Clean Static Seal Label */}
          <div className="absolute bottom-2 font-mono text-[9px] text-y2k-pink/80 tracking-widest uppercase select-none">
            ENCLAVE_EMBLEM // PROVIDENCE_SEAL
          </div>
        </div>

        {/* Agency Conspiracy Footnotes & Redacted Dossier */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 w-full font-mono text-xs">
          <div className="p-3 bg-y2k-card border border-y2k-border flex flex-col items-start gap-1">
            <span className="text-[10px] text-y2k-pink">ENCLAVE_ALPHA</span>
            <span className="text-y2k-paleSilver font-medium">COGNITIVE_REASON</span>
            <span className="text-[10px] text-y2k-silver">Trace: <span className="redacted">[CLASSIFIED_CORE]</span></span>
          </div>

          <div className="p-3 bg-y2k-card border border-y2k-border flex flex-col items-start gap-1">
            <span className="text-[10px] text-y2k-pink">ONTOLOGY_BUS</span>
            <span className="text-y2k-paleSilver font-medium">MCP_TOOL_DISPATCH</span>
            <span className="text-[10px] text-y2k-silver">Clearance: FOUNDRY_L4</span>
          </div>

          <div className="p-3 bg-y2k-card border border-y2k-border flex flex-col items-start gap-1">
            <span className="text-[10px] text-y2k-pink">SIGINT_STREAM</span>
            <span className="text-y2k-paleSilver font-medium">STREAMING_TELEMETRY</span>
            <span className="text-[10px] text-y2k-silver">Protocol: <span className="redacted">[SSE_ASYNC]</span></span>
          </div>

          <div className="p-3 bg-y2k-card border border-y2k-border flex flex-col items-start gap-1">
            <span className="text-[10px] text-y2k-pink">PROVIDENCE_SEAL</span>
            <span className="text-y2k-paleSilver font-medium">ZERO_HALLUCINATION</span>
            <span className="text-[10px] text-y2k-silver">Status: VERIFIED</span>
          </div>
        </div>

        {/* Clickable Hash Triggers */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <HashTrigger 
            code="SHA256:e3b0c442" 
            message="TRANSMISSION: Providence Enclave confirmed. The Eye of Providence verifies agentic convergence." 
          />
          <HashTrigger 
            code="[ENCLAVE//DOSSIER_99]" 
            message="TRANSMISSION: Deterministic outputs enforced, hallucinations purged from memory." 
          />
          <HashTrigger 
            code="[ONTOLOGY::SAP_OMEGA]" 
            message="TRANSMISSION: Schema locked. Fast tool dispatch via Model Context Protocol online." 
          />
        </div>

      </div>
    </section>
  );
}
