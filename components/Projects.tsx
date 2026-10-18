import { projects } from "@/data/content";

function ChatMock() {
    return (
        <div className="mock chat" aria-hidden="true">
            <div className="bubble in">Hi, can I refill my prescription for [NAME]?</div>
            <div className="redact">PHI removed before the LLM sees it</div>
            <div className="bubble out">Of course. I&apos;ve sent the refill request to the pharmacist and will text you when it&apos;s ready.</div>
        </div>
    );
}

function ChartMock() {
    return (
        <div className="mock chart" aria-hidden="true">
            <div className="chart-head">
                <span>
                    <i className="live" /> 52 devices online
                </span>
                <span>0.8 s latency</span>
            </div>
            <svg viewBox="0 0 300 100" preserveAspectRatio="none">
                <path
                    className="line"
                    d="M0 70 L20 64 L40 68 L60 52 L80 58 L100 40 L120 46 L140 34 L160 42 L180 28 L200 36 L220 22 L240 30 L260 18 L280 26 L300 14"
                />
                <path
                    className="area"
                    d="M0 70 L20 64 L40 68 L60 52 L80 58 L100 40 L120 46 L140 34 L160 42 L180 28 L200 36 L220 22 L240 30 L260 18 L280 26 L300 14 L300 100 L0 100 Z"
                />
            </svg>
        </div>
    );
}

export default function Projects() {
    const [pharmacy, coaching, iot, ...rest] = projects;
    const featured = [
        { p: pharmacy, mock: <ChatMock />, tone: "blue" },
        { p: iot, mock: <ChartMock />, tone: "green" },
    ];
    const small = [coaching, ...rest];

    return (
        <section className="section alt" id="projects">
            <div className="container wide">
                <p className="eyebrow">Side projects</p>
                <h2 className="section-title">Things I&apos;ve built.</h2>

                <div className="featured">
                    {featured.map(({ p, mock, tone }) => (
                        <a key={p.title} href={p.github} target="_blank" rel="noopener noreferrer" className={`feature t-${tone}`}>
                            {mock}
                            <div className="feature-text">
                                <span className="tag">{p.category}</span>
                                <h3>{p.title}</h3>
                                <p>{p.description}</p>
                                <span className="link">View on GitHub</span>
                            </div>
                        </a>
                    ))}
                </div>

                <div className="minis">
                    {small.map((p) => (
                        <a key={p.title} href={p.github} target="_blank" rel="noopener noreferrer" className="mini">
                            <span className="tag">{p.category}</span>
                            <h3>{p.title}</h3>
                            <p>{p.description}</p>
                            <span className="mini-stack">{p.stack.join(" · ")}</span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
