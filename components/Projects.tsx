"use client";

import { useState } from "react";
import { projects, type Project } from "@/data/content";
import SectionHead from "./SectionHead";

const filters = ["All", "AI", "IoT", "Embedded"] as const;
type Filter = (typeof filters)[number];

function Icon({ category }: { category: Project["category"] }) {
    const common = { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.4, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };
    if (category === "AI") {
        return (
            <svg {...common}>
                <path d="M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8z" />
                <path d="M18 15l.8 2.2L21 18l-2.2.8L18 21l-.8-2.2L15 18l2.2-.8z" />
            </svg>
        );
    }
    if (category === "IoT") {
        return (
            <svg {...common}>
                <circle cx="12" cy="14" r="2" />
                <path d="M8.5 10.5a5 5 0 0 1 7 0M6 8a8.5 8.5 0 0 1 12 0" />
                <path d="M12 16v5" />
            </svg>
        );
    }
    return (
        <svg {...common}>
            <rect x="6" y="6" width="12" height="12" rx="2" />
            <rect x="9.5" y="9.5" width="5" height="5" rx="1" />
            <path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3" />
        </svg>
    );
}

export default function Projects() {
    const [filter, setFilter] = useState<Filter>("All");
    const shown = projects.filter((p) => filter === "All" || p.category === filter);

    return (
        <section className="section alt" id="projects">
            <div className="container wide">
                <SectionHead title="Projects" intro="Things I've built on my own or at school." />
                <div className="segmented" role="group" aria-label="Filter projects">
                    {filters.map((f) => (
                        <button key={f} aria-pressed={filter === f} onClick={() => setFilter(f)}>
                            {f}
                        </button>
                    ))}
                </div>
                <div className="project-grid">
                    {shown.map((p) => (
                        <article key={p.title} className="project">
                            <div className={`project-art ${p.category.toLowerCase()}`}>
                                <Icon category={p.category} />
                            </div>
                            <span className="project-cat">{p.category}</span>
                            <h3>{p.title}</h3>
                            <p>{p.description}</p>
                            <div className="project-foot">
                                <span className="project-stack">{p.stack.join(" · ")}</span>
                                <a href={p.github} className="link" target="_blank" rel="noopener noreferrer">
                                    GitHub
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
