import React from 'react';
import HashTrigger from './HashTrigger';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-y2k-border bg-y2k-bg text-y2k-silver font-mono text-xs relative w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 w-full overflow-hidden">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-6 border-b border-y2k-border/40">
          <div className="flex items-center gap-3">
            <span className="font-display font-bold text-y2k-paleSilver text-base">HARMANDEEP</span>
            <span className="text-y2k-silver/40">|</span>
            <span className="text-y2k-pink">AI ENGINEER</span>
            <span className="text-y2k-silver/40">|</span>
            <span>CHANDIGARH UNIVERSITY</span>
          </div>

          <div className="flex items-center gap-4">
            <HashTrigger code="SHA256:4b8f2d9e" />
            <HashTrigger code="PROVIDENCE::SEAL_09" />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-y2k-silver/70">
          <div>
            © {new Date().getFullYear()} HARMANDEEP. SPECIAL ACCESS PROGRAM [SAP-09] • ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-y2k-pink transition-colors">STRICTLY AI (AGENTS • RAG • MCP)</span>
            <span className="text-emerald-400">● LATENCY_OK</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
