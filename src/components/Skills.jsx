import React from 'react';
import { Bot, Network, Cpu, Database, Binary, Zap, Eye, Check } from 'lucide-react';
import HashTrigger from './HashTrigger';

export default function Skills() {
  const pillars = [
    {
      title: "Agentic Systems & MCP",
      code: "PILLAR::01",
      icon: Bot,
      description: "Designing autonomous, multi-turn reasoning agents that interface with external APIs and real-world tools without human intervention.",
      skills: [
        "Model Context Protocol (MCP)",
        "ReAct & Tool-Execution Loops",
        "Deterministic Tool Calling",
        "Multi-turn Session Memory",
        "Live Reasoning Trace Streaming"
      ]
    },
    {
      title: "Precision RAG & Evaluation",
      code: "PILLAR::02",
      icon: Database,
      description: "Building resilient retrieval pipelines evaluated mathematically on recall, precision, and rank ordering across complex domains.",
      skills: [
        "Precision@K & Recall Benchmarking",
        "MRR & NDCG Rank Ordering",
        "Cross-Encoder Re-ranking",
        "Hierarchical & Semantic Chunking",
        "Vector Embeddings & Hybrid Search"
      ]
    },
    {
      title: "Real-time AI Infrastructure",
      code: "PILLAR::03",
      icon: Cpu,
      description: "Developing low-latency asynchronous backends specifically tailored for high-concurrency streaming LLM workflows.",
      skills: [
        "FastAPI Asynchronous Framework",
        "Server-Sent Events (SSE) Streaming",
        "MCP Client / Server Architecture",
        "Structured Schema Enforcement (Pydantic)",
        "AsyncIO Python Concurrency"
      ]
    },
    {
      title: "Orchestration & Frameworks",
      code: "PILLAR::04",
      icon: Network,
      description: "Mastering modern AI development frameworks with pure focus on deterministic behavior and zero hallucinations.",
      skills: [
        "LlamaIndex",
        "LangChain Ecosystem",
        "PyTorch Fundamentals",
        "Prompt Decomposition & Few-Shot Tuning",
        "Deterministic Guardrails"
      ]
    }
  ];

  return (
    <section id="cognition" className="py-20 border-t border-y2k-border relative w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full overflow-hidden">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4 pb-4 border-b border-y2k-border">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs text-y2k-pink">
              <span>// COGNITIVE_CAPABILITIES</span>
              <span>•</span>
              <HashTrigger code="0x1F::NEURAL_MAP" />
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-y2k-paleSilver uppercase tracking-tight">
              Systems & Cognition
            </h2>
          </div>
          <p className="font-mono text-xs text-y2k-silver sm:text-right max-w-xs">
            [STRICTLY_AI_ENGINEERING]
            <br />
            No generic tabular models — solely agentic systems, RAG, and LLM orchestration.
          </p>
        </div>

        {/* 4 Pillars Grid (Classified Systems Architecture) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="p-6 sm:p-8 bg-y2k-card border border-y2k-border hover:border-y2k-pink transition-all duration-200 group flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-y2k-border/50">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-y2k-surface border border-y2k-border text-y2k-pink group-hover:border-y2k-pink transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-display font-bold text-lg sm:text-xl text-y2k-paleSilver group-hover:text-y2k-pink transition-colors">
                        {pillar.title}
                      </h3>
                    </div>
                    <HashTrigger code={pillar.code} />
                  </div>

                  <p className="text-y2k-silver text-xs sm:text-sm leading-relaxed mb-6">
                    {pillar.description}
                  </p>

                  <ul className="space-y-2.5 font-mono text-xs">
                    {pillar.skills.map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-y2k-paleSilver">
                        <span className="w-1.5 h-1.5 bg-y2k-pink rounded-none shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-y2k-border/50 flex items-center justify-between font-mono text-[10px] text-y2k-silver/60">
                  <span>LEVEL: ADVANCED FRESHER</span>
                  <span>LATENCY: ZERO_TOLERANCE</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Binary Footer Trigger */}
        <div className="mt-8 flex justify-end">
          <HashTrigger code="01000001::AGENTIC_CORE" />
        </div>

      </div>
    </section>
  );
}
