import React from 'react';
import ConsciousnessEye from './ConsciousnessEye';
import HashTrigger from './HashTrigger';
import { ArrowDownRight, Terminal, Shield, Cpu, Radio } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full max-w-full flex items-center justify-center pt-8 pb-16 overflow-hidden">
      {/* Background ambient cryptographic grid aura */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(243,135,161,0.12),transparent_70%)] pointer-events-none" />

      {/* Decorative Matrix Grid watermark */}
      <div className="absolute top-8 left-8 font-mono text-[10px] text-y2k-silver/30 space-y-1 hidden lg:block select-none pointer-events-none">
        <div>COORDINATES: 30.7333° N, 76.7794° E</div>
        <div>INSTITUTION: CHANDIGARH UNIVERSITY</div>
        <div>CLEARANCE: LEVEL_4 // CLASSIFIED</div>
        <div>SPECIAL_ACCESS: [SAP-ZERO-01]</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center w-full max-w-full">
          
          {/* Left Column: Intelligence Dossier (7 cols) */}
          <div className="lg:col-span-7 space-y-6 w-full max-w-full">
            
            {/* Top Classified Header with Binary Tag */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono tracking-widest uppercase bg-y2k-surface border border-y2k-border text-y2k-pink">
                <span className="w-2 h-2 rounded-full bg-y2k-pink animate-pulse"></span>
                AI ENGINEER // AGENTIC ARCHITECT
              </span>
              <HashTrigger code="01100011::COGNITION" />
            </div>

            {/* Main Headline: Bold Hard-Ending Sans strictly on two distinct lines */}
            <div className="space-y-1 w-full max-w-full">
              <h1 className="font-display font-extrabold text-[2.75rem] xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight uppercase leading-[0.92]">
                <span className="block text-y2k-paleSilver whitespace-nowrap">HARMAN</span>
                <span className="block text-y2k-pink text-glow-pink whitespace-nowrap">DEEP</span>
              </h1>
            </div>

            {/* AI Engineer Tagline (Fresher AI Engineer: Agents, RAG, MCP, LLMs) */}
            <p className="text-base sm:text-xl text-y2k-silver max-w-xl font-normal leading-relaxed break-words">
              Architecting <span className="text-y2k-paleSilver font-semibold">autonomous agentic systems</span>, 
              evaluating precision <span className="text-y2k-paleSilver font-semibold">RAG pipelines</span>, and orchestrating 
              deterministic LLM tool-calling architectures.
            </p>

            {/* Micro-Credentials Dossier */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 font-mono text-xs w-full max-w-full">
              <div className="p-3 bg-y2k-card border border-y2k-border flex items-start gap-2.5 hover:border-y2k-pink/50 transition-colors">
                <Cpu className="w-4 h-4 text-y2k-pink shrink-0 mt-0.5" />
                <div>
                  <span className="text-y2k-silver block text-[10px] uppercase">Current Engagement</span>
                  <span className="text-y2k-paleSilver font-medium">K & A Technology Pvt Ltd</span>
                  <span className="text-y2k-pink block text-[10px]">AI Engineer (Mar 2026 – Present)</span>
                </div>
              </div>

              <div className="p-3 bg-y2k-card border border-y2k-border flex items-start gap-2.5 hover:border-y2k-pink/50 transition-colors">
                <Shield className="w-4 h-4 text-y2k-pink shrink-0 mt-0.5" />
                <div>
                  <span className="text-y2k-silver block text-[10px] uppercase">Academia</span>
                  <span className="text-y2k-paleSilver font-medium">Chandigarh University</span>
                  <span className="text-y2k-silver/70 block text-[10px]">Postgraduate Studies</span>
                </div>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-3 w-full max-w-full">
              <a
                href="#artifacts"
                className="px-5 sm:px-6 py-2.5 sm:py-3 bg-y2k-pink text-y2k-bg font-mono font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-y2k-lightPink transition-all duration-150 shadow-[0_0_20px_rgba(243,135,161,0.35)]"
              >
                <span>Inspect Artifacts</span>
                <ArrowDownRight className="w-4 h-4" />
              </a>

              <a
                href="#terminal"
                className="px-5 sm:px-6 py-2.5 sm:py-3 bg-y2k-surface text-y2k-silver border border-y2k-border font-mono text-xs uppercase tracking-wider flex items-center gap-2 hover:text-y2k-pink hover:border-y2k-pink transition-all duration-150"
              >
                <Terminal className="w-4 h-4 text-y2k-pink" />
                <span>Decrypt Terminal</span>
              </a>

              <div className="flex items-center ml-auto sm:ml-0">
                <HashTrigger code="SHA256:7f83b165" />
              </div>
            </div>

          </div>

          {/* Right Column: Evolving Consciousness Eye & Surveillance Symbolism (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative w-full max-w-full overflow-hidden">
            <div className="relative p-4 sm:p-8 bg-y2k-card border border-y2k-border backdrop-blur-sm w-full max-w-full flex flex-col items-center overflow-hidden">
              
              {/* Corner brackets Y2K style */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-y2k-pink" />
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-y2k-pink" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-y2k-pink" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-y2k-pink" />

              <div className="w-full flex items-center justify-between pb-3 border-b border-y2k-border/60 font-mono text-[10px] text-y2k-silver/80">
                <span className="flex items-center gap-1.5">
                  <Radio className="w-3 h-3 text-y2k-pink" />
                  SPECIAL_ACCESS // LEVEL_4
                </span>
                <span>SHA256:7f83b165</span>
              </div>

              {/* The Interactive Consciousness Eye */}
              <div className="my-4 py-2 w-full flex justify-center overflow-hidden">
                <ConsciousnessEye />
              </div>

              {/* Secret agency readout */}
              <div className="w-full pt-3 border-t border-y2k-border/60 flex items-center justify-between font-mono text-[10px] text-y2k-silver/70">
                <span>REASONING: NON_HALLUCINATING</span>
                <HashTrigger code="0x8F::ENCLAVE_DISPATCH" />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
