"use client";

import Image from "next/image";
import { personalInfo } from "@/data/content";
import TechBackground from "./TechBackground";
import styles from "./Hero.module.css";

export default function Hero() {
    return (
        <section className={styles.hero} id="hero">
            <div className={styles.backgroundGradient}></div>
            <TechBackground />
            <div className={`container ${styles.heroContent}`}>
                <div className={styles.mainContent}>
                    <div className={styles.textContent}>
                        <p className={styles.greeting}>Hi, I'm</p>
                        <h1 className={styles.name}>Rafael Gonzalez</h1>
                        <p className={styles.title}>Electronics & Systems Engineer</p>
                        <h2 className={styles.headline}>
                            I bridge <span className={styles.highlight}>hardware</span> and <span className={styles.highlight}>software</span> to build validated systems that reduce technical risk.
                        </h2>

                        <div className={styles.cta}>
                            <a
                                href={personalInfo.resumeUrl}
                                className="btn btn-primary btn-lg"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                    <polyline points="7 10 12 15 17 10" />
                                    <line x1="12" y1="15" x2="12" y2="3" />
                                </svg>
                                Download Resume
                            </a>
                            <a href="#contact" className="btn btn-secondary btn-lg">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                                </svg>
                                Let's Talk
                            </a>
                        </div>

                        <div className={styles.quickStats}>
                            <div className={styles.stat}>
                                <span className={styles.statValue}>5+</span>
                                <span className={styles.statLabel}>Technical Roles</span>
                            </div>
                            <div className={styles.stat}>
                                <span className={styles.statValue}>3</span>
                                <span className={styles.statLabel}>Countries</span>
                            </div>
                            <div className={styles.stat}>
                                <span className={styles.statValue}>98%</span>
                                <span className={styles.statLabel}>QA Yield</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.photoContainer}>
                        <div className={styles.photoWrapper}>
                            <Image
                                src="/rafael-traje.png"
                                alt="Rafael Gonzalez - Electronics Engineer"
                                width={300}
                                height={300}
                                className={styles.photo}
                                priority
                            />
                            <div className={styles.photoGlow}></div>
                        </div>
                    </div>
                </div>

                <div className={styles.scrollIndicator}>
                    <span>Explore</span>
                    <div className={styles.scrollLine}></div>
                </div>
            </div>
        </section>
    );
}
