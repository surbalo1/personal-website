import { experience } from "@/data/content";
import SectionHead from "./SectionHead";

export default function Experience() {
    return (
        <section className="section" id="experience">
            <div className="container">
                <SectionHead title="Experience" />
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
                                <p className="role-tags">{role.tags.join(" · ")}</p>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}
