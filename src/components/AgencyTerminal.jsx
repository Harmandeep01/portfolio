import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, ShieldAlert, Radio, CornerDownLeft } from 'lucide-react';
import HashTrigger from './HashTrigger';

export default function AgencyTerminal() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: "Y2K SURVEILLANCE TELEMETRY CONSOLE // AGENTIC TERMINAL V2.4" },
    { type: 'system', text: "SECURE CLEARANCE LEVEL: 4 [CLASSIFIED] - OPERATOR IDENTIFIED: HARMANDEEP01" },
    { type: 'info', text: "Type 'help' to inspect operational protocols, or click any chip below." }
  ]);
  const outputContainerRef = useRef(null);

  const executeCommand = (cmdText) => {
    const trimmed = cmdText.trim().toLowerCase();
    const newHistory = [...history, { type: 'user', text: `$ ${cmdText}` }];

    switch (trimmed) {
      case 'help':
        newHistory.push({
          type: 'response',
          text: `OPERATIONAL PROTOCOLS:
  • identity   : Operator credentials, clearance, alma mater
  • projects   : Inspect verified agentic systems
  • eval       : Precision@K, Recall, MRR retrieval metrics
  • mcp        : Model Context Protocol architecture details
  • ontology   : Decoupled client-server tool dispatch schema
  • sigint     : Real-time SSE telemetry & streaming channels
  • enclave    : Deterministic output grounding & validation
  • checksum   : SHA256 cryptographic verification status
  • status     : Real-time deployment @ K & A Technology
  • clear      : Wipe local CRT screen buffer`
        });
        break;

      case 'identity':
        newHistory.push({
          type: 'response',
          text: `OPERATOR DOSSIER:
  Codename   : Harmandeep (Harmandeep01)
  Specialty  : AI Engineer (Agentic Workflows, MCP, RAG Pipelines)
  Alma Mater : Chandigarh University
  Current    : AI Engineer @ K & A Technology Pvt Ltd (March 2026 – Present)
  Prior      : AI Engineer Intern @ SimplifyAITools (July 2025 – Dec 2025)
  Comms      : sharmandeep954@gmail.com`
        });
        break;

      case 'projects':
        newHistory.push({
          type: 'response',
          text: `VERIFIED ARTIFACTS:
  1. [LOGISTICS INTELLIGENCE AGENT] - Production RAG + MCP shipment tool lookup with streaming FastAPI SSE reasoning traces.
     Repo: github.com/Harmandeep01/logistics-agent
  2. [FINANCIAL RAG (FinRAG)] - Active development benchmarking Precision@K, MRR, and NDCG over SEC corporate disclosures.`
        });
        break;

      case 'eval':
        newHistory.push({
          type: 'response',
          text: `EVALUATION PARADIGM:
  • Precision@K : Precision measure verifying whether true context lies within top-k retrieved chunks.
  • MRR         : Mean Reciprocal Rank calculating the convergence speed of relevant financial tables.
  • NDCG        : Normalized Discounted Cumulative Gain penalizing low-relevance ranking drift.`
        });
        break;

      case 'mcp':
        newHistory.push({
          type: 'response',
          text: `MODEL CONTEXT PROTOCOL (MCP):
  Enables decoupled client-server stdio communications. Allows autonomous agents to discover and invoke tools dynamically at runtime without hardcoded monolithic bindings.`
        });
        break;

      case 'ontology':
        newHistory.push({
          type: 'response',
          text: `DECOUPLED ONTOLOGY SCHEMA:
  Autonomous agents invoke external schema endpoints with strict typing (Pydantic), decoupled dispatch, and auditable event telemetry.`
        });
        break;

      case 'sigint':
        newHistory.push({
          type: 'response',
          text: `REAL-TIME TELEMETRY STREAM:
  Real-time Server-Sent Events (SSE) telemetry. Zero token leakage, sub-50ms tool handoffs, and hardened stdio transport layers.`
        });
        break;

      case 'enclave':
        newHistory.push({
          type: 'response',
          text: `SECURE REASONING ENCLAVE:
  Clearance: SPECIAL ACCESS PROGRAM [SAP-09].
  Mandate: Total elimination of hallucinated tokens. All agentic decisions are grounded deterministically against verifiable knowledge bases.`
        });
        break;

      case 'checksum':
        newHistory.push({
          type: 'response',
          text: `CHECKSUM SHA256:
  7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069
  [STATUS: CRYPTOGRAPHICALLY_SOUND]`
        });
        break;

      case 'status':
        newHistory.push({
          type: 'response',
          text: `CURRENT STATUS:
  Stationed as AI Engineer at K & A Technology Pvt Ltd.
  Focus: Real-world agentic reliability, deterministic output schemas, and low-latency streaming.`
        });
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      default:
        newHistory.push({
          type: 'error',
          text: `Command not recognized: "${trimmed}". Type 'help' for protocol list.`
        });
    }

    setHistory(newHistory);
    setInput('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    executeCommand(input);
  };

  // Keep scroll inside the terminal container without shifting the page window
  useEffect(() => {
    if (outputContainerRef.current) {
      outputContainerRef.current.scrollTop = outputContainerRef.current.scrollHeight;
    }
  }, [history]);

  return (
    <section id="terminal" className="py-20 border-t border-y2k-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4 pb-4 border-b border-y2k-border">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs text-y2k-pink">
              <span>// COVERT_CONSOLE</span>
              <span>•</span>
              <HashTrigger code="0x7E::CLEARANCE_L4" />
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-y2k-paleSilver uppercase tracking-tight">
              Agency Terminal
            </h2>
          </div>
          <p className="font-mono text-xs text-y2k-silver sm:text-right max-w-xs">
            [COVERT_INTELLIGENCE_CRT_CONSOLE]
            <br />
            Interactive diagnostics and operational dossier inspection.
          </p>
        </div>

        {/* Terminal Container */}
        <div className="bg-y2k-card border-2 border-y2k-border shadow-[0_0_30px_rgba(243,135,161,0.12)] rounded-none overflow-hidden font-mono">
          
          {/* Top Terminal Bar */}
          <div className="bg-y2k-card px-4 py-2.5 border-b border-y2k-border flex items-center justify-between text-xs text-y2k-silver">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-y2k-pink rounded-none inline-block"></span>
              <span className="text-y2k-paleSilver font-bold">TERMINAL::HARMANDEEP-AI</span>
              <span className="text-y2k-silver/60 hidden sm:inline">[PORT_3000]</span>
            </div>
            <div className="flex items-center gap-3 text-[11px]">
              <span className="text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                ONLINE
              </span>
              <HashTrigger code="SHA256:01a4" />
            </div>
          </div>

          {/* Screen Output Area (Scrolls internally ONLY) */}
          <div 
            ref={outputContainerRef}
            role="log"
            aria-live="polite"
            className="p-4 sm:p-6 min-h-[280px] max-h-[380px] overflow-y-auto space-y-2.5 text-xs text-y2k-paleSilver scroll-smooth"
          >
            {history.map((entry, idx) => (
              <div key={idx} className="leading-relaxed">
                {entry.type === 'system' && (
                  <p className="text-y2k-pink font-semibold">{entry.text}</p>
                )}
                {entry.type === 'info' && (
                  <p className="text-y2k-silver">{entry.text}</p>
                )}
                {entry.type === 'user' && (
                  <p className="text-y2k-paleSilver font-bold">{entry.text}</p>
                )}
                {entry.type === 'response' && (
                  <pre className="text-y2k-lightPink bg-y2k-surface/60 p-3 border border-y2k-border/60 whitespace-pre-wrap font-mono mt-1">
                    {entry.text}
                  </pre>
                )}
                {entry.type === 'error' && (
                  <p className="text-red-400">{entry.text}</p>
                )}
              </div>
            ))}
          </div>

          {/* Quick Command Suggestions (Type=button so it NEVER scrolls or shifts page) */}
          <div className="px-4 py-2 bg-y2k-surface/40 border-t border-y2k-border flex flex-wrap items-center gap-2 text-[11px]">
            <span className="text-y2k-silver/70 text-[10px] uppercase">Quick Execute:</span>
            {['identity', 'projects', 'eval', 'mcp', 'ontology', 'sigint', 'enclave', 'checksum', 'clear'].map((cmd) => (
              <button
                key={cmd}
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  executeCommand(cmd);
                }}
                className="px-2 py-0.5 border border-y2k-border text-y2k-silver hover:border-y2k-pink hover:text-y2k-pink transition-colors bg-y2k-card cursor-pointer select-none"
              >
                {cmd}
              </button>
            ))}
          </div>

          {/* Input Prompt Form */}
          <form onSubmit={handleSubmit} className="p-3 bg-y2k-card border-t border-y2k-border flex items-center gap-2">
            <span className="text-y2k-pink font-bold" aria-hidden="true">$</span>
            <input
              type="text"
              value={input}
              maxLength={256}
              autoComplete="off"
              spellCheck="false"
              autoCapitalize="off"
              aria-label="Terminal command input"
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type command ('help', 'identity', 'ontology', 'eval')..."
              className="flex-1 bg-transparent text-y2k-paleSilver font-mono text-xs focus:outline-none placeholder:text-y2k-silver/40"
            />
            <button
              type="submit"
              aria-label="Execute command"
              className="px-3 py-1 bg-y2k-pink text-y2k-bg text-xs font-bold hover:bg-y2k-lightPink transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span>EXEC</span>
              <CornerDownLeft className="w-3 h-3" />
            </button>
          </form>

        </div>

      </div>
    </section>
  );
}
