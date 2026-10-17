import React, { useState } from 'react';
import { Mail, Send, Copy, Check, ExternalLink, ShieldCheck } from 'lucide-react';
import HashTrigger from './HashTrigger';

// Clean inline SVG for LinkedIn & GitHub to guarantee zero dependency issues
const LinkedInIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.8v8.37h-2.8V10.9M7.86 6.54a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26Z"/>
  </svg>
);

const GitHubIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "sharmandeep954@gmail.com";

  const handleCopy = async () => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = email;
        textArea.style.position = "fixed";
        textArea.style.opacity = "0";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="transmit" className="py-20 border-t border-y2k-border relative w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full overflow-hidden">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4 pb-4 border-b border-y2k-border">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs text-y2k-pink">
              <span>// TRANSMISSION_CHANNEL</span>
              <span>•</span>
              <HashTrigger code="0xFF::TRANSMIT_INIT" />
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-y2k-paleSilver uppercase tracking-tight">
              Initiate Contact
            </h2>
          </div>
          <p className="font-mono text-xs text-y2k-silver sm:text-right max-w-xs">
            [ENCRYPTED_SIGNAL]
            <br />
            Direct communication frequency for engineering collaborations.
          </p>
        </div>

        {/* Transmission Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Email Channel */}
          <div className="p-6 bg-y2k-card border border-y2k-border hover:border-y2k-pink transition-all duration-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-y2k-border">
                <span className="font-mono text-xs text-y2k-silver uppercase flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-y2k-pink" />
                  Direct Email
                </span>
                <span className="text-emerald-400 font-mono text-[10px]">VERIFIED</span>
              </div>
              <h3 className="font-display font-bold text-lg text-y2k-paleSilver mb-2">
                Electronic Mail
              </h3>
              <p className="font-mono text-xs text-y2k-lightPink break-all mb-4">
                {email}
              </p>
            </div>

            <div className="flex items-center gap-2 pt-4 border-t border-y2k-border">
              <a
                href={`mailto:${email}`}
                className="flex-1 py-2 bg-y2k-pink text-y2k-bg text-center font-mono font-bold text-xs uppercase hover:bg-y2k-lightPink transition-colors flex items-center justify-center gap-1"
              >
                <Send className="w-3 h-3" />
                <span>Send Mail</span>
              </a>
              <button
                onClick={handleCopy}
                type="button"
                aria-label={copied ? "Email copied to clipboard" : "Copy email address to clipboard"}
                className="p-2 border border-y2k-border hover:border-y2k-pink text-y2k-silver hover:text-y2k-pink transition-colors"
                title="Copy to clipboard"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* LinkedIn Channel */}
          <div className="p-6 bg-y2k-card border border-y2k-border hover:border-y2k-pink transition-all duration-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-y2k-border">
                <span className="font-mono text-xs text-y2k-silver uppercase flex items-center gap-1.5">
                  <LinkedInIcon className="w-3.5 h-3.5 text-y2k-pink" />
                  Professional Network
                </span>
                <span className="text-y2k-pink font-mono text-[10px]">CONNECTED</span>
              </div>
              <h3 className="font-display font-bold text-lg text-y2k-paleSilver mb-2">
                LinkedIn Profile
              </h3>
              <p className="font-mono text-xs text-y2k-silver mb-4">
                Harmandeep • AI Engineer
                <br />
                K & A Technology Pvt Ltd
              </p>
            </div>

            <div className="pt-4 border-t border-y2k-border">
              <a
                href="https://www.linkedin.com/in/harmandeep01/"
                target="_blank"
                rel="noopener noreferrer me"
                className="w-full py-2 border border-y2k-border hover:border-y2k-pink hover:text-y2k-pink text-y2k-silver text-center font-mono text-xs uppercase transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Open LinkedIn</span>
                <ExternalLink className="w-3.5 h-3.5 text-y2k-pink" />
              </a>
            </div>
          </div>

          {/* GitHub Channel */}
          <div className="p-6 bg-y2k-card border border-y2k-border hover:border-y2k-pink transition-all duration-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-y2k-border">
                <span className="font-mono text-xs text-y2k-silver uppercase flex items-center gap-1.5">
                  <GitHubIcon className="w-3.5 h-3.5 text-y2k-pink" />
                  Source Code
                </span>
                <span className="text-y2k-silver font-mono text-[10px]">PUBLIC</span>
              </div>
              <h3 className="font-display font-bold text-lg text-y2k-paleSilver mb-2">
                GitHub Repository
              </h3>
              <p className="font-mono text-xs text-y2k-silver mb-4">
                @Harmandeep01
                <br />
                Agents, RAG & MCP Repositories
              </p>
            </div>

            <div className="pt-4 border-t border-y2k-border">
              <a
                href="https://github.com/Harmandeep01"
                target="_blank"
                rel="noopener noreferrer me"
                className="w-full py-2 border border-y2k-border hover:border-y2k-pink hover:text-y2k-pink text-y2k-silver text-center font-mono text-xs uppercase transition-colors flex items-center justify-center gap-1.5"
              >
                <span>View Repositories</span>
                <ExternalLink className="w-3.5 h-3.5 text-y2k-pink" />
              </a>
            </div>
          </div>

        </div>

        {/* Verification Footer Note */}
        <div className="mt-8 p-4 bg-y2k-surface/40 border border-y2k-border flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs text-y2k-silver">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-y2k-pink" />
            <span>ENCRYPTION: 4096-BIT RSA // VERIFIED OPERATOR HARMANDEEP</span>
          </div>
          <HashTrigger code="0xFF::TRANSMIT_EOF" />
        </div>

      </div>
    </section>
  );
}
