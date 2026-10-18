import { experience } from "@/data/content";
import SectionHead from "./SectionHead";

export default function Experience() {
    return (
        <section className="section" id="experience">
            <div className="container">
                <SectionHead
                    index="02"
                    label="experience"
                    title="From the lab bench to the cloud"
                    intro="Hardware, firmware, field work and customer-facing roles, now brought together in cloud and AI architecture."
                />
                <ol className="timeline">
                    {experience.map((role) => (
                        <li key={`${role.company}-${role.period}`} className={`role reveal${role.current ? " current" : ""}`}>
                            <div className="role-meta">
                                {role.current && (
                                    <div className="now">
                                        <span className="pulse" aria-hidden="true" /> now
                                    </div>
                                )}
                                <div>{role.period}</div>
                                {role.location && <div>{role.location}</div>}
                            </div>
                            <div>
                                <h3>{role.title}</h3>
                                <div className="role-company">{role.company}</div>
                                <p className="role-summary">{role.summary}</p>
                                <ul>
                                    {role.highlights.map((h) => (
                                        <li key={h}>{h}</li>
                                    ))}
                                </ul>
                                <div className="tags">
                                    {role.tags.map((t) => (
                                        <span key={t} className="tag">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}
