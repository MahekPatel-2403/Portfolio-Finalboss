"use client";

import { useReveal } from "../hooks/useReveal";

interface SkillGroup {
  category: string;
  skills: string[];
}

const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    skills: ["Python", "SQL", "JavaScript"],
  },
  {
    category: "Backend",
    skills: ["FastAPI", "Flask", "REST APIs", "JWT Authentication"],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "SQLite", "SQLAlchemy"],
  },
  {
    category: "Networking",
    skills: ["HTTP", "Squid Proxy", "WebSockets"],
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "Docker", "Linux", "VS Code"],
  },
];

export default function Skills() {
  const ref = useReveal();

  return (
    <section
      id="skills"
      className="section"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <p className="section-label reveal">Expertise</p>
      <h2 className="section-title reveal reveal-delay-1">Skills</h2>

      <div className="space-y-8">
        {skillGroups.map((group, i) => (
          <div
            key={group.category}
            className={`reveal reveal-delay-${Math.min(i + 2, 4)}`}
          >
            <p className="skill-group-title">{group.category}</p>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span key={skill} className="skill-pill">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
