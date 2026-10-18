import { skills } from "@/data/content";
import SectionHead from "./SectionHead";

export default function Skills() {
    return (
        <section className="section" id="skills">
            <div className="container">
                <SectionHead title="Skills" />
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
