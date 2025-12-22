"use client";

import { education, certifications } from "@/data/content";
import ScrollReveal from "./ScrollReveal";
import styles from "./Education.module.css";

export default function Education() {
    return (
        <section className={styles.education} id="education">
            <div className="container">
                <ScrollReveal>
                    <div className="section-header">
                        <h2>Education</h2>
                    </div>
                </ScrollReveal>

                <div className={styles.educationGrid}>
                    {education.map((edu, index) => (
                        <ScrollReveal key={edu.id} delay={index * 150}>
                            <div className={styles.educationCard}>
                                <div className={styles.cardIcon}>
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                                        <path d="M6 12v5c3 3 9 3 12 0v-5" />
                                    </svg>
                                </div>
                                <span className={styles.period}>{edu.period}</span>
                                <h3>{edu.degree}</h3>
                                <p className={styles.institution}>{edu.institution}</p>
                                <p className={styles.location}>{edu.location}</p>
                                {edu.gpa && (
                                    <div className={styles.gpa}>
                                        <span>GPA: {edu.gpa}</span>
                                    </div>
                                )}
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                <ScrollReveal delay={300}>
                    <div className={styles.certificationsSection}>
                        <h3 className={styles.certTitle}>Certifications</h3>
                        <div className={styles.certGrid}>
                            {certifications.map((cert, index) => (
                                <div key={index} className={styles.certCard}>
                                    <h4>{cert.category}</h4>
                                    <ul>
                                        {cert.items.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
