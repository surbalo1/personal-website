import Image from "next/image";
import { heroChips, intro, personalInfo } from "@/data/content";

export default function Hero() {
    return (
        <section className="hero" id="top">
            <div className="hero-glow" aria-hidden="true" />
            <div className="container wide hero-grid">
                <div className="hero-text">
                    <p className="hero-kicker">
                        <span className="dot" aria-hidden="true" />
                        {personalInfo.title} at {personalInfo.company}
                    </p>
                    <h1>
                        Hi, I&apos;m Rafael.
                        <span>I build things from the board to the cloud.</span>
                    </h1>
                    <p className="hero-intro">{intro}</p>
                    <div className="hero-cta">
                        <a href="#contact" className="btn btn-primary">
                            Get in touch
                        </a>
                        <a href={personalInfo.linkedin} className="link" target="_blank" rel="noopener noreferrer">
                            LinkedIn
                        </a>
                    </div>
                </div>

                <div className="hero-visual">
                    <Image
                        className="hero-photo"
                        src="/rafael-headshot.jpg"
                        alt="Rafael Gonzalez"
                        width={720}
                        height={720}
                        sizes="(max-width: 860px) 280px, 420px"
                        priority
                    />
                    {heroChips.map((chip, i) => (
                        <span key={chip} className={`chip chip-${i + 1}`}>
                            {chip}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
