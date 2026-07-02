"use client";

import { useReveal } from "../hooks/useReveal";

const currentlyLearning = [
  "FastAPI",
  "PostgreSQL",
  "Docker",
  "Linux",
  "System Design",
];

const interestedIn = [
  "Backend Development",
  "Distributed Systems",
  "Computer Networking",
  "Open Source",
];

export default function About() {
  const ref = useReveal();

  return (
    <section id="about" className="section" ref={ref as React.RefObject<HTMLElement>}>
      <p className="section-label reveal">About</p>
      <h2 className="section-title reveal reveal-delay-1">About</h2>

      <p className="reveal reveal-delay-2 text-[1.0625rem] text-gray-600 leading-relaxed mb-10">
        I&apos;m a Computer Science student passionate about{" "}
        <span className="text-gray-800 font-medium">backend engineering</span>,
        networking,{" "}
        <span className="text-gray-800 font-medium">distributed systems</span>,
        and open source.
        <br />
        <br />I enjoy building scalable APIs, designing backend systems, working
        with databases, and exploring computer networking.
      </p>

      <div className="reveal reveal-delay-3 grid grid-cols-1 sm:grid-cols-2 gap-8">
        {/* Currently Learning */}
        <div>
          <p className="skill-group-title mb-4">Currently Learning</p>
          <ul className="space-y-2">
            {currentlyLearning.map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-[0.9375rem] text-gray-700">
                <span className="dot-accent flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Interested In */}
        <div>
          <p className="skill-group-title mb-4">Interested In</p>
          <ul className="space-y-2">
            {interestedIn.map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-[0.9375rem] text-gray-700">
                <span className="dot-accent flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
