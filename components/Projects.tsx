"use client";

import { useState } from "react";
import { projects, type Project } from "@/data/content";
import SectionHead from "./SectionHead";

const filters = ["All", "AI", "IoT", "Embedded"] as const;
type Filter = (typeof filters)[number];

export default function Projects() {
    const [filter, setFilter] = useState<Filter>("All");
    const shown = projects.filter((p: Project) => filter === "All" || p.category === filter);

    return (
        <section className="section" id="projects">
            <div className="container">
                <SectionHead
                    index="03"
                    label="projects"
                    title="Selected projects"
                    intro="Personal and academic work, from AI platforms to firmware. Code is on GitHub."
                />
                <div className="filters" role="group" aria-label="Filter projects">
                    {filters.map((f) => (
                        <button key={f} className="filter" aria-pressed={filter === f} onClick={() => setFilter(f)}>
                            {f}
                        </button>
                    ))}
                </div>
                <div className="project-grid">
                    {shown.map((p) => (
                        <a key={p.title} href={p.github} target="_blank" rel="noopener noreferrer" className="project">
                            <div className="project-top">
                                <span>{p.category.toLowerCase()}</span>
                                <svg className="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                                    <path d="M7 17L17 7M8 7h9v9" />
                                </svg>
                            </div>
                            <h3>{p.title}</h3>
                            <p>{p.description}</p>
                            <div className="project-impact">→ {p.impact}</div>
                            <div className="tags">
                                {p.stack.map((t) => (
                                    <span key={t} className="tag">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
