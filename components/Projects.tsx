"use client";

import { useState } from "react";
import { projects } from "@/data/content";
import SectionHead from "./SectionHead";

const filters = ["All", "AI", "IoT", "Embedded"] as const;
type Filter = (typeof filters)[number];

export default function Projects() {
    const [filter, setFilter] = useState<Filter>("All");
    const shown = projects.filter((p) => filter === "All" || p.category === filter);

    return (
        <section className="section" id="projects">
            <div className="container wide">
                <SectionHead
                    eyebrow="Projects"
                    title="Things I've built."
                    intro="Personal and academic work, from AI platforms to firmware."
                />
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
                            <span className="project-cat">{p.category}</span>
                            <h3>{p.title}</h3>
                            <p>{p.description}</p>
                            <div className="project-impact">{p.impact}</div>
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
