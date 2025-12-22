"use client";

import { experience } from "@/data/content";
import ScrollReveal from "./ScrollReveal";
import styles from "./Experience.module.css";

export default function Experience() {
    return (
        <section className={styles.experience} id="experience">
            <div className="container">
                <ScrollReveal>
                    <div className="section-header">
                        <h2>Experience</h2>
                    </div>
                </ScrollReveal>

                <div className={styles.timeline}>
                    {experience.map((job, index) => (
                        <ScrollReveal key={job.id} delay={index * 100} direction={index % 2 === 0 ? "left" : "right"}>
                            <div className={styles.timelineItem}>
                                <div className={styles.timelineDot}>
                                    <div className={styles.dotInner}></div>
                                </div>
                                <div className={styles.timelineContent}>
                                    <div className={styles.timelineHeader}>
                                        <div>
                                            <h3 className={styles.jobTitle}>{job.title}</h3>
                                            <p className={styles.company}>{job.company}</p>
                                        </div>
                                        <div className={styles.meta}>
                                            <span className={styles.period}>{job.period}</span>
                                            <span className={styles.location}>{job.location}</span>
                                        </div>
                                    </div>

                                    <p className={styles.problem}>{job.problem}</p>

                                    <p className={styles.result}>{job.result}</p>

                                    <div className={styles.tools}>
                                        {job.tools.slice(0, 6).map((tool, idx) => (
                                            <span key={idx} className={styles.toolTag}>
                                                {tool}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
