import React from 'react';
import { Briefcase, Calendar, CheckCircle2, ChevronRight, Building } from 'lucide-react';
import HashTrigger from './HashTrigger';

export default function Experience() {
  const experiences = [
    {
      company: "K & A Technology Pvt Ltd",
      role: "AI Engineer",
      period: "March 2026 – Present",
      type: "Full-time",
      status: "CURRENTLY_ENGAGED",
      description: "Engineering production-grade agentic architectures, real-time LLM orchestration, and deterministic tool-calling workflows. Focusing strictly on AI engineering, multi-turn reasoning traces, and high-reliability systems.",
      highlights: [
        "Architecting autonomous agent workflows that interface with external tools and real-time APIs.",
        "Building low-latency streaming backends with FastAPI and Server-Sent Events (SSE).",
        "Implementing guardrails, deterministic output validation, and stateful memory across agent turns."
      ],
      skills: ["Autonomous Agents", "FastAPI SSE", "LLM Tool-Calling", "Python Async", "Production Workflows"]
    },
    {
      company: "SimplifyAITools",
      role: "AI Engineer Intern",
      period: "July 2025 – December 2025",
      type: "Internship",
      status: "COMPLETED",
      description: "Specialized in retrieval pipelines, AI application development, and rigorous prompt evaluation to deliver high-precision LLM tools for users.",
      highlights: [
        "Developed and optimized specialized AI tool integrations and workflow automation pipelines.",
        "Refined retrieval-augmented generation routines and evaluated responses for factual accuracy.",
        "Conducted prompt engineering and deterministic response testing across varied LLM providers."
      ],
      skills: ["RAG Pipelines", "Prompt Engineering", "FastAPI", "Evaluation", "LangChain"]
    }
  ];

  return (
    <section id="experience" className="py-20 border-t border-y2k-border relative w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full overflow-hidden">
        
        {/* Section Header with Intelligence Chronology */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4 pb-4 border-b border-y2k-border">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs text-y2k-pink">
              <span>// OPERATIONAL_CHRONOLOGY</span>
              <span>•</span>
              <HashTrigger code="CHRONOS::SAP_LOG" />
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-y2k-paleSilver uppercase tracking-tight">
              Work Experience
            </h2>
          </div>
          <p className="font-mono text-xs text-y2k-silver sm:text-right max-w-xs">
            [CLEARANCE_LOG: DECLASSIFIED]
            <br />
            Verifiable industrial deployments & engineering internships.
          </p>
        </div>

        {/* Experience Timeline Cards */}
        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <div
              key={exp.company}
              className="p-6 sm:p-8 bg-y2k-card border border-y2k-border hover:border-y2k-pink transition-all duration-200 relative group shadow-sm"
            >
              {/* Corner Accents */}
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-y2k-pink opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-y2k-pink opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 mb-4 border-b border-y2k-border/50">
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-y2k-paleSilver">
                      {exp.role}
                    </h3>
                    <span className="font-mono text-xs px-2 py-0.5 border border-y2k-pink/40 text-y2k-pink bg-y2k-surface font-medium">
                      @{exp.company}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 mt-2 font-mono text-xs text-y2k-silver">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-y2k-pink" />
                      {exp.period}
                    </span>
                    <span>•</span>
                    <span className="text-y2k-paleSilver font-medium">{exp.type}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className={`font-mono text-[10px] px-2.5 py-1 uppercase tracking-wider border ${
                    exp.status === 'CURRENTLY_ENGAGED'
                      ? 'border-emerald-500/50 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold'
                      : 'border-y2k-border bg-y2k-surface text-y2k-paleSilver'
                  }`}>
                    {exp.status === 'CURRENTLY_ENGAGED' ? '● CURRENT' : '✓ CONCLUDED'}
                  </span>
                  <HashTrigger code={`EXP::0${idx + 1}`} />
                </div>
              </div>

              <p className="text-y2k-paleSilver text-sm sm:text-base leading-relaxed mb-4">
                {exp.description}
              </p>

              {/* Bullet highlights */}
              <ul className="space-y-2 mb-6">
                {exp.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-y2k-silver">
                    <ChevronRight className="w-4 h-4 text-y2k-pink shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              {/* Skills tags */}
              <div className="flex flex-wrap items-center gap-2 pt-2">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-[11px] px-2.5 py-1 bg-y2k-surface border border-y2k-border text-y2k-paleSilver group-hover:border-y2k-pink/40 transition-colors font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Academic Anchor Note */}
        <div className="mt-8 p-4 bg-y2k-card border border-y2k-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-mono text-xs shadow-sm">
          <div className="flex items-center gap-2 text-y2k-silver">
            <Building className="w-4 h-4 text-y2k-pink" />
            <span>ALMA MATER: <strong className="text-y2k-paleSilver font-medium">Chandigarh University</strong></span>
          </div>
          <span className="text-y2k-silver/60">[FOUNDATIONAL_RIGOR // MCA]</span>
        </div>

      </div>
    </section>
  );
}
