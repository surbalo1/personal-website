import { certifications, skills } from "@/data/content";

export default function Toolbox() {
    const all = skills.filter((s) => s.group !== "Languages").flatMap((s) => s.items);
    const half = Math.ceil(all.length / 2);
    const rows = [all.slice(0, half), all.slice(half)];

    return (
        <section className="section toolbox" id="skills">
            <div className="container wide">
                <p className="eyebrow">Toolbox</p>
                <h2 className="section-title">What I work with.</h2>
            </div>
            <div className="marquees" aria-label="Skills">
                {rows.map((row, r) => (
                    <div key={r} className={`marquee${r ? " reverse" : ""}`}>
                        <div className="marquee-track">
                            {[...row, ...row].map((item, i) => (
                                <span key={i} className="pill" aria-hidden={i >= row.length}>
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className="container wide facts">
                <div>
                    <h3>Certifications</h3>
                    <p>{certifications.join(" · ")}</p>
                </div>
                <div>
                    <h3>Languages</h3>
                    <p>Spanish · English (C1) · German (A2)</p>
                </div>
                <div>
                    <h3>Education</h3>
                    <p>B.Sc. Electronic Engineering, Instituto Tecnológico de Chihuahua · Fulbright, UT Austin</p>
                </div>
            </div>
        </section>
    );
}
