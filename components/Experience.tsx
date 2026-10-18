import { experience } from "@/data/content";

export default function Experience() {
    return (
        <section className="block" id="work">
            <h2>Work</h2>
            <ol className="rows">
                {experience.map((role) => (
                    <li key={`${role.company}-${role.period}`} className="row">
                        <span className="row-meta">{role.period}</span>
                        <div>
                            <h3>
                                {role.title} <span className="at">· {role.company}</span>
                                {role.current && <span className="now">Now</span>}
                            </h3>
                            <p>{role.summary}</p>
                            {role.location && <p className="small">{role.location}</p>}
                        </div>
                    </li>
                ))}
            </ol>
        </section>
    );
}
