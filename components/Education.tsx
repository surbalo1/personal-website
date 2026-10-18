import { certifications, education, testimonial } from "@/data/content";
import SectionHead from "./SectionHead";

export default function Education() {
    return (
        <section className="section" id="education">
            <div className="container wide">
                <SectionHead eyebrow="Education" title="Always learning." />
                <div className="edu-grid reveal">
                    {education.map((e) => (
                        <article key={e.degree} className="edu-card">
                            <span className="when">{e.period}</span>
                            <h3>{e.degree}</h3>
                            <div className="where">{e.institution}</div>
                            <p>{e.note}</p>
                        </article>
                    ))}
                    <article className="edu-card">
                        <span className="when">Certifications</span>
                        <ul>
                            {certifications.map((c) => (
                                <li key={c}>{c}</li>
                            ))}
                        </ul>
                    </article>
                </div>

                <blockquote className="quote reveal">
                    <p>&ldquo;{testimonial.quote}&rdquo;</p>
                    <footer>
                        <a href={testimonial.linkedin} className="link" target="_blank" rel="noopener noreferrer">
                            {testimonial.author}
                        </a>
                        <br />
                        {testimonial.role}
                    </footer>
                </blockquote>
            </div>
        </section>
    );
}
