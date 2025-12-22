"use client";

import ScrollReveal from "./ScrollReveal";
import styles from "./Testimonials.module.css";

const testimonials = [
    {
        quote: "Rafael is a skilled and reliable professional who consistently showed dedication and teamwork during our time working together. I am confident he will be a valuable asset in any organization.",
        author: "Alfredo Luna Luis",
        role: "Mechanical and Electrical Engineer",
        linkedIn: "https://www.linkedin.com/in/alfredo-luna-luis-691740223/",
    },
];

export default function Testimonials() {
    if (testimonials.length === 0) return null;

    return (
        <section className={styles.testimonials} id="testimonials">
            <div className="container">
                <ScrollReveal>
                    <div className="section-header">
                        <h2>What Others Say</h2>
                    </div>
                </ScrollReveal>

                <div className={styles.testimonialsGrid}>
                    {testimonials.map((testimonial, index) => (
                        <ScrollReveal key={index} delay={index * 150}>
                            <blockquote className={styles.testimonialCard}>
                                <div className={styles.quoteIcon}>
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                    </svg>
                                </div>
                                <p className={styles.quote}>&ldquo;{testimonial.quote}&rdquo;</p>
                                <footer className={styles.author}>
                                    <div>
                                        <a
                                            href={testimonial.linkedIn}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.authorLink}
                                        >
                                            <cite className={styles.authorName}>{testimonial.author}</cite>
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className={styles.linkedInIcon}>
                                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                            </svg>
                                        </a>
                                        <p className={styles.authorRole}>{testimonial.role}</p>
                                    </div>
                                </footer>
                            </blockquote>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
