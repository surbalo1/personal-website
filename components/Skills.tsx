"use client";

import React from "react";
import { skills } from "@/data/content";
import ScrollReveal from "./ScrollReveal";
import styles from "./Skills.module.css";

export default function Skills() {
    const getIconForCategory = (category: string): React.ReactNode => {
        const icons: Record<string, React.ReactNode> = {
            "Embedded & Firmware": (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="4" y="4" width="16" height="16" rx="2" />
                    <rect x="9" y="9" width="6" height="6" />
                </svg>
            ),
            "IoT & Connectivity": (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12.55a11 11 0 0 1 14.08 0" />
                    <path d="M1.42 9a16 16 0 0 1 21.16 0" />
                    <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
                    <circle cx="12" cy="20" r="1" />
                </svg>
            ),
            "Software & AI": (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <circle cx="15.5" cy="8.5" r="1.5" />
                    <path d="M9 15c.83 1 1.94 1.5 3 1.5s2.17-.5 3-1.5" />
                </svg>
            ),
            "Tools & Platforms": (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                </svg>
            ),
            "Testing & Debug": (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
            ),
            Languages: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
            ),
        };
        return icons[category] || icons["Tools & Platforms"];
    };

    return (
        <section className={styles.skills} id="skills">
            <div className="container">
                <ScrollReveal>
                    <div className="section-header">
                        <h2>Skills</h2>
                    </div>
                </ScrollReveal>

                <div className={styles.skillsGrid}>
                    {Object.entries(skills).map(([category, items], index) => (
                        <ScrollReveal key={category} delay={index * 80}>
                            <div className={styles.skillCategory}>
                                <div className={styles.categoryHeader}>
                                    <span className={styles.categoryIcon}>
                                        {getIconForCategory(category)}
                                    </span>
                                    <h3>{category}</h3>
                                </div>
                                <div className={styles.skillTags}>
                                    {items.map((skill, idx) => (
                                        <span key={idx} className={styles.skillTag}>
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
