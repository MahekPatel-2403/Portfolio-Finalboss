"use client";

import { useReveal } from "../hooks/useReveal";

const ArrowUpRight = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

const highlights = [
  {
    label: "Show 'No profile submitted.' when candidate profile is empty",
    desc: "Merged PR #130 · elekto-dev/elekto — Defensive rendering for empty candidate profiles.",
    link: "https://github.com/elekto-dev/elekto/pull/130",
    status: "merged",
  },
  {
    label: "feat(alert): allow line comments for PR alert type",
    desc: "Active PR #6531 · mindersec/minder — Implements line-specific feedback in the PR alert system.",
    link: "https://github.com/mindersec/minder/pull/6531",
    status: "open",
  },
  {
    label: "Fix pmon uptime parsing for long-running containers",
    desc: "Active PR #25643 · sonic-net/sonic-mgmt — Centralized uptime parsing to prevent readiness gate timeouts.",
    link: "https://github.com/sonic-net/sonic-mgmt/pull/25643",
    status: "open",
  },
  {
    label: "Fix dut_port_config list/dict inconsistency",
    desc: "Active PR #25490 · sonic-net/sonic-mgmt — Fixes type inconsistency in traffic_generation.py.",
    link: "https://github.com/sonic-net/sonic-mgmt/pull/25490",
    status: "open",
  },
  {
    label: "GitHub Profile & Contributions",
    desc: "Consistent open-source activity across Python, Go, and networking projects.",
    link: "https://github.com/MahekPatel-2403",
    status: "profile",
  },
];

export default function OpenSource() {
  const ref = useReveal();

  return (
    <section
      id="open-source"
      className="section"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <p className="section-label reveal">Community</p>
      <h2 className="section-title reveal reveal-delay-1">Open Source</h2>

      <p className="reveal reveal-delay-2 text-[1.0625rem] text-gray-600 leading-relaxed mb-8">
        Contributing to open-source software by fixing bugs, improving
        documentation, and implementing features.
      </p>

      <div className="reveal reveal-delay-3 border border-[#E5E7EB] rounded-xl overflow-hidden">
        {highlights.map((item, i) => (
          <div
            key={item.label}
            className="os-item px-5 group"
            style={{
              borderBottom:
                i < highlights.length - 1 ? "1px solid #F3F4F6" : "none",
            }}
          >
            {/* index */}
            <span
              className="text-xs font-medium text-gray-300 mt-0.5 flex-shrink-0 select-none"
              style={{ fontFamily: "IBM Plex Mono, monospace", minWidth: 20 }}
            >
              {String(i + 1).padStart(2, "0")}
            </span>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap mb-0.5">
                <p className="text-[0.9375rem] font-semibold text-gray-800 group-hover:text-gray-900 transition-colors leading-snug">
                  {item.label}
                </p>
                {item.status === "merged" && (
                  <span className="flex-shrink-0 text-[0.65rem] font-semibold px-1.5 py-0.5 rounded-full bg-purple-50 text-purple-700 border border-purple-100 uppercase tracking-wide">
                    Merged
                  </span>
                )}
                {item.status === "open" && (
                  <span className="flex-shrink-0 text-[0.65rem] font-semibold px-1.5 py-0.5 rounded-full bg-green-50 text-green-700 border border-green-100 uppercase tracking-wide">
                    Open
                  </span>
                )}
              </div>
              <p className="text-[0.8125rem] text-gray-500">{item.desc}</p>
            </div>

            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 text-gray-300 group-hover:text-accent transition-colors"
              aria-label={`View ${item.label}`}
            >
              <ArrowUpRight />
            </a>
          </div>
        ))}
      </div>

      <p className="reveal reveal-delay-4 mt-5 text-[0.8125rem] text-gray-400">
        Contributing to projects like{" "}
        <span className="text-gray-500 font-medium">elekto</span>,{" "}
        <span className="text-gray-500 font-medium">sonic-mgmt</span>, and{" "}
        <span className="text-gray-500 font-medium">minder</span> — fixing bugs
        and implementing features across Python and Go codebases.
      </p>
    </section>
  );
}
