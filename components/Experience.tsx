import { experience } from "@/data/content";
import SectionHead from "./SectionHead";

export default function Experience() {
    return (
        <section className="section alt" id="experience">
            <div className="container">
                <SectionHead eyebrow="Experience" title="Every layer of the stack." />
                <ol className="roles">
                    {experience.map((role) => (
                        <li key={`${role.company}-${role.period}`} className={`role reveal${role.current ? " current" : ""}`}>
                            <div className="role-when">
                                {role.current && (
                                    <>
                                        <span className="badge">Current</span>
                                        <br />
                                    </>
                                )}
                                {role.period}
                                {role.location && (
                                    <>
                                        <br />
                                        {role.location}
                                    </>
                                )}
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
                                <p className="role-tags">{role.tags.join(" · ")}</p>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}
