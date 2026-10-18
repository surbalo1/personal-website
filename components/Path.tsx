import { signalPath } from "@/data/content";
import SectionHead from "./SectionHead";

export default function Path() {
    return (
        <section className="section alt" id="path">
            <div className="container wide">
                <SectionHead
                    eyebrow="Background"
                    title="From silicon to cloud."
                    intro="I started on the lab bench, soldering and debugging boards. Today I design cloud and AI solutions, and I still think about every layer in between."
                />
                <ol className="steps reveal">
                    {signalPath.map((step) => (
                        <li key={step.label}>
                            <strong>{step.label}</strong>
                            <span>{step.detail}</span>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}
