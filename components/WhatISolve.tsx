"use client";

import ScrollReveal from "./ScrollReveal";
import styles from "./WhatISolve.module.css";

export default function WhatISolve() {
    const problemTypes = [
        {
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                    <line x1="12" y1="9" x2="12" y2="13" />
                    <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
            ),
            title: "Systems failing in real conditions",
            description: "IoT devices that disconnect, sensors that drift, firmware that crashes.",
            metric: "25% faster debugging",
        },
        {
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="4" y="4" width="16" height="16" rx="2" />
                    <rect x="9" y="9" width="6" height="6" />
                    <line x1="9" y1="1" x2="9" y2="4" />
                    <line x1="15" y1="1" x2="15" y2="4" />
                </svg>
            ),
            title: "Hardware-software mismatch",
            description: "When firmware and hardware do not integrate cleanly.",
            metric: "MSP430, RSL10, ESP32",
        },
        {
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="9" y1="15" x2="15" y2="15" />
                </svg>
            ),
            title: "Missing validation workflows",
            description: "Prototypes without testing processes or documentation.",
            metric: "98% QA yield",
        },
        {
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
            ),
            title: "Cross-border coordination",
            description: "Technical teams across disciplines and countries.",
            metric: "3 countries",
        },
    ];

    return (
        <section className={styles.whatISolve} id="problems">
            <div className="container">
                <ScrollReveal>
                    <div className="section-header">
                        <h2>Problems I Solve</h2>
                    </div>
                </ScrollReveal>

                <div className={styles.problemsGrid}>
                    {problemTypes.map((problem, index) => (
                        <ScrollReveal key={index} delay={index * 100}>
                            <div className={styles.problemCard}>
                                <div className={styles.iconWrapper}>{problem.icon}</div>
                                <h3>{problem.title}</h3>
                                <p className={styles.description}>{problem.description}</p>
                                <div className={styles.metric}>
                                    <span>{problem.metric}</span>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
