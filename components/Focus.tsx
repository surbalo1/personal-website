import { focusAreas } from "@/data/content";
import SectionHead from "./SectionHead";

export default function Focus() {
    return (
        <section className="section" id="focus">
            <div className="container">
                <SectionHead
                    index="01"
                    label="focus"
                    title="What I work on"
                    intro="I sit between business and engineering: understanding what a team needs, then designing a solution that can actually be built, run and supported."
                />
                <div className="section-body">
                    <div className="focus-grid reveal">
                        {focusAreas.map((area, i) => (
                            <article key={area.title} className="focus-item">
                                <span className="num">0{i + 1}</span>
                                <h3>{area.title}</h3>
                                <p>{area.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
