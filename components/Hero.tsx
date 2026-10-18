import Image from "next/image";
import { hero, personalInfo, signalPath } from "@/data/content";

export default function Hero() {
    return (
        <section className="hero" id="top">
            <div className="container">
                <div className="hero-grid">
                    <div>
                        <span className="status">
                            <span className="pulse" aria-hidden="true" />
                            {hero.eyebrow}
                        </span>
                        <h1>
                            <span className="hero-name">{personalInfo.shortName}</span>
                            {hero.headline}
                        </h1>
                        <p className="hero-intro">{hero.intro}</p>

                        <div className="hero-cta">
                            <a href="#contact" className="btn btn-primary">
                                Get in touch
                            </a>
                            <a href={personalInfo.linkedin} className="btn btn-ghost" target="_blank" rel="noopener noreferrer">
                                LinkedIn
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                                    <path d="M7 17L17 7M8 7h9v9" />
                                </svg>
                            </a>
                        </div>

                        <dl className="hero-stats">
                            {hero.stats.map((s) => (
                                <div key={s.label}>
                                    <dt>{s.label}</dt>
                                    <dd>{s.value}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>

                    <div className="hero-photo">
                        <figure className="photo-frame">
                            <span className="corner tl" />
                            <span className="corner tr" />
                            <span className="corner bl" />
                            <span className="corner br" />
                            <Image
                                src="/rafael-headshot.jpg"
                                alt="Portrait of Rafael Gonzalez"
                                width={900}
                                height={900}
                                sizes="(max-width: 860px) 200px, 320px"
                                priority
                            />
                            <figcaption>
                                <span>fig. 01</span>
                                <span>r. gonzalez</span>
                            </figcaption>
                        </figure>
                    </div>
                </div>

                <div className="path">
                    <p className="path-label">{"// signal path: from the board to the cloud"}</p>
                    <ol>
                        {signalPath.map((step) => (
                            <li key={step.label}>
                                <strong>{step.label}</strong>
                                <span>{step.detail}</span>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </section>
    );
}
