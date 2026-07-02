"use client";

import { useReveal } from "../hooks/useReveal";

interface Project {
  title: string;
  starred?: boolean;
  description: string;
  features?: string[];
  stack: string[];
  github: string;
  demo?: string;
}

const projects: Project[] = [
  {
    title: "HTTP Proxy Server",
    starred: true,
    description:
      "Configured and deployed a forward HTTP proxy using Squid on Ubuntu Linux to route client traffic, implement access control policies (ACLs), and monitor HTTP requests through proxy logs.",
    stack: ["Squid", "Linux", "HTTP", "Networking"],
    github: "https://github.com/MahekPatel-2403/HTTP-Proxy-Server",
  },
  {
    title: "TaskFlow API",
    description:
      "RESTful task management API built with FastAPI, PostgreSQL, SQLAlchemy, and JWT authentication.",
    features: [
      "User Authentication",
      "CRUD Operations",
      "PostgreSQL Database",
      "JWT Authorization",
      "REST API Design",
    ],
    stack: ["FastAPI", "PostgreSQL", "SQLAlchemy", "JWT"],
    github: "https://github.com/MahekPatel-2403/TaskFlow-API",
  },
  {
    title: "Socket Talk",
    description:
      "Real-time chat application using WebSockets for instant communication between users.",
    features: [
      "Real-time Messaging",
      "Persistent Connections",
      "Multi-client Communication",
    ],
    stack: ["Python", "WebSockets"],
    github: "https://github.com/MahekPatel-2403/SocketTalk",
  },
  {
    title: "Weather AI Agent",
    description:
      "AI-powered weather assistant using Hugging Face models to answer weather-related queries through natural language.",
    stack: ["Python", "Hugging Face", "APIs"],
    github: "https://github.com/MahekPatel-2403/WeatherAIAgent",
  },
];

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

const StarIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="#FBBF24" stroke="#FBBF24" strokeWidth="1.5">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export default function Projects() {
  const ref = useReveal();

  return (
    <section
      id="projects"
      className="section"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <p className="section-label reveal">Work</p>
      <h2 className="section-title reveal reveal-delay-1">Projects</h2>

      <div className="space-y-4">
        {projects.map((project, i) => (
          <div
            key={project.title}
            className={`project-card reveal reveal-delay-${Math.min(i + 2, 4)}`}
            id={`project-card-${project.title.toLowerCase().replace(/\s+/g, "-")}`}
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-4 mb-3">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="font-semibold text-[1rem] text-gray-900 tracking-tight">
                  {project.title}
                </h3>
                {project.starred && (
                  <span className="flex items-center gap-1 text-xs text-amber-600 font-medium bg-amber-50 px-2 py-0.5 rounded-full border border-amber-100">
                    <StarIcon />
                    Featured
                  </span>
                )}
              </div>

              {/* Links */}
              <div className="flex items-center gap-3 flex-shrink-0">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-gray-500 hover:text-gray-900 font-medium flex items-center gap-1 transition-colors"
                >
                  GitHub <ArrowUpRight />
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-accent hover:text-accent-hover font-medium flex items-center gap-1 transition-colors"
                  >
                    Live Demo <ArrowUpRight />
                  </a>
                )}
              </div>
            </div>

            {/* Description */}
            <p className="text-[0.9rem] text-gray-600 leading-relaxed mb-4">
              {project.description}
            </p>

            {/* Features */}
            {project.features && (
              <ul className="mb-4 grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-1.5">
                {project.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-1.5 text-[0.8125rem] text-gray-600"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            )}

            {/* Tech stack */}
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <span key={tech} className="tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
