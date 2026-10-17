import React from 'react';
import { ExternalLink, Video, GitBranch, Terminal, Layers, Activity, CheckCircle, Clock } from 'lucide-react';
import HashTrigger from './HashTrigger';

export default function Projects() {
  return (
    <section id="artifacts" className="py-20 border-t border-y2k-border relative w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full overflow-hidden">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4 pb-4 border-b border-y2k-border w-full max-w-full">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs text-y2k-pink">
              <span>// PRIMARY_SYSTEMS</span>
              <span>•</span>
              <HashTrigger code="0x4B::ARTIFACTS" />
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-y2k-paleSilver uppercase tracking-tight">
              Featured Artifacts
            </h2>
          </div>
          <p className="font-mono text-xs text-y2k-silver sm:text-right max-w-xs">
            [DETERMINISTIC_AI_ENGINEERING]
            <br />
            Production-grade agents & evaluation-driven RAG pipelines.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-full">

          {/* PROJECT 1: Logistics Intelligence Agent */}
          <div className="bg-y2k-card border border-y2k-border hover:border-y2k-pink transition-all duration-200 flex flex-col justify-between relative group p-5 sm:p-8 w-full max-w-full overflow-hidden">
            <div className="space-y-5">
              
              {/* Card Meta & Status */}
              <div className="flex items-center justify-between font-mono text-xs pb-3 border-b border-y2k-border/60">
                <span className="flex items-center gap-2 text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  PRODUCTION_GRADE // COMPLETED
                </span>
                <HashTrigger code="MCP::STDIO_CLIENT" />
              </div>

              {/* Title */}
              <div>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-y2k-paleSilver group-hover:text-y2k-pink transition-colors">
                  Logistics Intelligence Agent
                </h3>
                <p className="font-mono text-xs text-y2k-silver mt-1">
                  Autonomous Multi-Tool Agent with MCP & Streaming Backend
                </p>
              </div>

              {/* Description */}
              <p className="text-y2k-paleSilver text-sm sm:text-base leading-relaxed">
                Engineered an industrial-grade agent combining <strong className="text-y2k-paleSilver font-semibold">document search (RAG)</strong> with <strong className="text-y2k-paleSilver font-semibold">live shipment lookups</strong> using Model Context Protocol (MCP) tools behind an asynchronous streaming FastAPI backend.
              </p>

              {/* Architectural Highlights */}
              <div className="bg-y2k-surface/80 p-4 border border-y2k-border font-mono text-xs space-y-2.5">
                <div className="text-[10px] text-y2k-pink uppercase tracking-widest flex items-center gap-1.5 pb-1 border-b border-y2k-border">
                  <Activity className="w-3 h-3" />
                  <span>Execution Architecture</span>
                </div>
                <div className="text-y2k-silver space-y-1.5 text-[11px] leading-relaxed">
                  <div>• <strong>Real-time Streaming SSE:</strong> Emits live reasoning traces to the client UI as tools fire — showing why and how decisions are made.</div>
                  <div>• <strong>MCP Client & Server:</strong> Dynamic tool discovery via stdio transport protocol separating agent logic from execution.</div>
                  <div>• <strong>Multi-turn Memory:</strong> Retains context and shipment tracking parameters across complex user sessions.</div>
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 pt-1 font-mono text-[11px]">
                {['Python', 'FastAPI SSE', 'Model Context Protocol (MCP)', 'RAG', 'Vector Index', 'AsyncIO'].map((tag) => (
                  <span key={tag} className="px-2.5 py-1 bg-y2k-surface border border-y2k-border text-y2k-silver">
                    {tag}
                  </span>
                ))}
              </div>

            </div>

            {/* Links and Actions */}
            <div className="pt-6 mt-6 border-t border-y2k-border flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
              <div className="flex items-center gap-3">
                <a
                  href="https://drive.google.com/file/d/1pN6XhVOb6OpnpEpOnps5B7kBQd5I772O/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 bg-y2k-pink text-y2k-bg font-bold flex items-center gap-1.5 hover:bg-y2k-lightPink transition-colors shadow-sm"
                >
                  <Video className="w-3.5 h-3.5" />
                  <span>Watch Demo</span>
                </a>
                
                <a
                  href="https://github.com/Harmandeep01/logistics-agent"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 border border-y2k-border text-y2k-silver hover:text-y2k-pink hover:border-y2k-pink flex items-center gap-1.5 transition-colors"
                >
                  <GitBranch className="w-3.5 h-3.5 text-y2k-pink" />
                  <span>Repository</span>
                </a>
              </div>

              <span className="text-[10px] text-y2k-silver/60">ID: LOG-AGT-01</span>
            </div>

          </div>

          {/* PROJECT 2: Financial RAG (FinRAG) */}
          <div className="bg-y2k-card border border-y2k-border hover:border-y2k-pink transition-all duration-200 flex flex-col justify-between relative group p-5 sm:p-8 w-full max-w-full overflow-hidden">
            <div className="space-y-5">
              
              {/* Card Meta & Status */}
              <div className="flex items-center justify-between font-mono text-xs pb-3 border-b border-y2k-border/60">
                <span className="flex items-center gap-2 text-y2k-pink">
                  <span className="w-2 h-2 rounded-full bg-y2k-pink animate-ping"></span>
                  ACTIVE_RESEARCH // BENCHMARKING
                </span>
                <HashTrigger code="SHA256:3d9f1a0b" />
              </div>

              {/* Title */}
              <div>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-y2k-paleSilver group-hover:text-y2k-pink transition-colors">
                  Financial RAG (FinRAG)
                </h3>
                <p className="font-mono text-xs text-y2k-silver mt-1">
                  High-Precision Financial Disclosure Retrieval & Rigorous Evaluation
                </p>
              </div>

              {/* Description */}
              <p className="text-y2k-paleSilver text-sm sm:text-base leading-relaxed">
                Currently building an evaluation-first retrieval engine tailored for tabular SEC 10-K/10-Q reports, quarterly earnings disclosures, and dense fiscal statements where hallucination is unacceptable.
              </p>

              {/* Evaluation Metrics & Architecture */}
              <div className="bg-y2k-surface/80 p-4 border border-y2k-border font-mono text-xs space-y-2.5">
                <div className="text-[10px] text-y2k-pink uppercase tracking-widest flex items-center gap-1.5 pb-1 border-b border-y2k-border">
                  <Layers className="w-3 h-3" />
                  <span>Evaluation Benchmarks (In Progress)</span>
                </div>
                <div className="text-y2k-silver space-y-1.5 text-[11px] leading-relaxed">
                  <div>• <strong>Top-K Retrieval Convergence:</strong> Rigorously benchmarking Top-K accuracy across challenging financial query subsets.</div>
                  <div>• <strong>Rank & Recall:</strong> Measuring MRR (Mean Reciprocal Rank) and NDCG metrics against ground-truth audited tables.</div>
                  <div>• <strong>Cross-Encoder Re-ranking:</strong> Dual-stage retrieval combining dense vector similarity with precision neural re-ranking.</div>
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 pt-1 font-mono text-[11px]">
                {['Python', 'LlamaIndex', 'Top-K Precision Recall', 'MRR / NDCG', 'PyTorch', 'Vector Index'].map((tag) => (
                  <span key={tag} className="px-2.5 py-1 bg-y2k-surface border border-y2k-border text-y2k-silver">
                    {tag}
                  </span>
                ))}
              </div>

            </div>

            {/* Links and Status Readout */}
            <div className="pt-6 mt-6 border-t border-y2k-border flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1.5 bg-y2k-surface border border-y2k-pink/50 text-y2k-lightPink text-xs flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-y2k-pink" />
                  <span>In Active Development</span>
                </span>
              </div>

              <span className="text-[10px] text-y2k-silver/60">ID: FIN-RAG-02</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
