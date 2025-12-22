"use client";

import ScrollReveal from "./ScrollReveal";
import styles from "./About.module.css";

export default function About() {
    const stats = [
        { value: "5+", label: "Technical Roles" },
        { value: "3", label: "Countries" },
        { value: "98%", label: "QA Yield" },
        { value: "25%", label: "Faster Debug" },
    ];

    return (
        <section className={styles.about} id="about">
            <div className="container">
                <ScrollReveal>
                    <div className={styles.statement}>
                        <h2>I reduce uncertainty, fix systems, and make things work reliably.</h2>
                    </div>
                </ScrollReveal>

                <div className={styles.statsGrid}>
                    {stats.map((stat, index) => (
                        <ScrollReveal key={index} delay={index * 100} direction="scale">
                            <div className={styles.statCard}>
                                <span className={styles.statValue}>{stat.value}</span>
                                <span className={styles.statLabel}>{stat.label}</span>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                <ScrollReveal delay={400}>
                    <div className={styles.credentials}>
                        <div className={styles.credentialItem}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="10" />
                                <line x1="2" y1="12" x2="22" y2="12" />
                                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                            </svg>
                            <span>Germany & USA Experience</span>
                        </div>
                        <div className={styles.credentialItem}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                                <path d="M6 12v5c3 3 9 3 12 0v-5" />
                            </svg>
                            <span>UT Austin Fulbright Scholar</span>
                        </div>
                        <div className={styles.credentialItem}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="4" y="4" width="16" height="16" rx="2" />
                                <rect x="9" y="9" width="6" height="6" />
                            </svg>
                            <span>MSP430, RSL10, ESP32</span>
                        </div>
                        <div className={styles.credentialItem}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="8" r="7" />
                                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                            </svg>
                            <span>Azure AZ-900 Certified</span>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
