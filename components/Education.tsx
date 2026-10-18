import { certifications, education, testimonial } from "@/data/content";
import SectionHead from "./SectionHead";

export default function Education() {
    return (
        <section className="section" id="education">
            <div className="container">
                <SectionHead index="05" label="education" title="Education & certifications" />
                <div className="edu-grid reveal">
                    <ol className="edu-list">
                        {education.map((e) => (
                            <li key={e.degree} className="edu-item">
                                <h3>{e.degree}</h3>
                                <div className="meta">
                                    {e.institution} · {e.period}
                                </div>
                                <p>{e.note}</p>
                            </li>
                        ))}
                    </ol>
                    <div className="cert-box">
                        <h3>certifications</h3>
                        <ul>
                            {certifications.map((c) => (
                                <li key={c}>{c}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                <blockquote className="quote reveal">
                    <p>&ldquo;{testimonial.quote}&rdquo;</p>
                    <footer>
                        <a href={testimonial.linkedin} target="_blank" rel="noopener noreferrer">
                            {testimonial.author}
                        </a>
                        , {testimonial.role}
                    </footer>
                </blockquote>
            </div>
        </section>
    );
}
