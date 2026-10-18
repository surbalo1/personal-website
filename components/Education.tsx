import { certifications, education, skills, testimonial } from "@/data/content";

export default function Education() {
    return (
        <section className="block" id="background">
            <h2>Background</h2>
            <ol className="rows">
                {education.map((e) => (
                    <li key={e.degree} className="row">
                        <span className="row-meta">{e.period}</span>
                        <div>
                            <h3>
                                {e.degree} <span className="at">· {e.institution}</span>
                            </h3>
                            <p>{e.note}</p>
                        </div>
                    </li>
                ))}
                <li className="row">
                    <span className="row-meta">Certifications</span>
                    <p>{certifications.join(", ")}</p>
                </li>
                {skills.map((s) => (
                    <li key={s.group} className="row">
                        <span className="row-meta">{s.group}</span>
                        <p>{s.items.join(", ")}</p>
                    </li>
                ))}
            </ol>

            <figure className="quote">
                <blockquote>&ldquo;{testimonial.quote}&rdquo;</blockquote>
                <figcaption>
                    <a href={testimonial.linkedin} target="_blank" rel="noopener noreferrer">
                        {testimonial.author}
                    </a>
                    , {testimonial.role}
                </figcaption>
            </figure>
        </section>
    );
}
