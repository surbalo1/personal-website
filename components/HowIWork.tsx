"use client";

import ScrollReveal from "./ScrollReveal";
import styles from "./HowIWork.module.css";

export default function HowIWork() {
    const steps = [
        {
            number: "01",
            title: "Understand constraints",
            description: "Map requirements and limitations before writing code.",
        },
        {
            number: "02",
            title: "Identify failure points",
            description: "Find where systems can break under real conditions.",
        },
        {
            number: "03",
            title: "Build with testing in mind",
            description: "Design solutions that can be validated systematically.",
        },
        {
            number: "04",
            title: "Iterate until stable",
            description: "Test, fix, repeat until reliable.",
        },
    ];

    return (
        <section className={styles.howIWork} id="approach">
            <div className="container">
                <ScrollReveal>
                    <div className="section-header">
                        <h2>How I Work</h2>
                    </div>
                </ScrollReveal>

                <div className={styles.stepsContainer}>
                    {steps.map((step, index) => (
                        <ScrollReveal key={index} delay={index * 150} direction="left">
                            <div className={styles.stepCard}>
                                <div className={styles.stepNumber}>{step.number}</div>
                                <div className={styles.stepContent}>
                                    <h3>{step.title}</h3>
                                    <p>{step.description}</p>
                                </div>
                                <div className={styles.stepArrow}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <line x1="5" y1="12" x2="19" y2="12" />
                                        <polyline points="12 5 19 12 12 19" />
                                    </svg>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
