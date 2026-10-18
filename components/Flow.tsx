import { flow } from "@/data/content";

export default function Flow() {
    return (
        <section className="flow-section" id="stack">
            <div className="container wide">
                <p className="eyebrow">The full stack, literally</p>
                <h2 className="reveal">
                    I&apos;ve worked on every box
                    <br />
                    in this diagram.
                </h2>
                <ol className="flow reveal" aria-label="From sensor to AI">
                    {flow.map((node, i) => (
                        <li key={node.label} className={`node${i === flow.length - 1 ? " last" : ""}`}>
                            <span className="node-num">0{i + 1}</span>
                            <strong>{node.label}</strong>
                            <span className="node-detail">{node.detail}</span>
                        </li>
                    ))}
                </ol>
                <p className="flow-note reveal">
                    Most cloud architects start at the cloud. I started at the sensor, so when a customer says
                    &ldquo;the data looks weird&rdquo;, I know where to look.
                </p>
            </div>
        </section>
    );
}
