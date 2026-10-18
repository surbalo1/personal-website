import { skills } from "@/data/content";
import SectionHead from "./SectionHead";

export default function Skills() {
    return (
        <section className="section alt" id="skills">
            <div className="container">
                <SectionHead eyebrow="Skills" title="Tech specs." />
                <div className="specs reveal">
                    {skills.map((s) => (
                        <div key={s.group} className="spec">
                            <h3>{s.group}</h3>
                            <ul>
                                {s.items.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
