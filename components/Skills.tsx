import { skills } from "@/data/content";
import SectionHead from "./SectionHead";

export default function Skills() {
    return (
        <section className="section" id="skills">
            <div className="container">
                <SectionHead index="04" label="skills" title="Toolbox" />
                <div className="skills reveal">
                    {skills.map((s) => (
                        <div key={s.group} className="skill-row">
                            <h3>{s.group}</h3>
                            <div className="tags">
                                {s.items.map((item) => (
                                    <span key={item} className="tag">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
