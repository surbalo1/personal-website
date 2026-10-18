import Image from "next/image";
import { hero, personalInfo } from "@/data/content";

export default function Hero() {
    return (
        <section className="hero" id="top">
            <div className="container">
                <p className="hero-eyebrow">{hero.eyebrow}</p>
                <h1>
                    {hero.headline}
                    <span>{hero.headlineMuted}</span>
                </h1>
                <p className="hero-intro">{hero.intro}</p>
                <div className="hero-cta">
                    <a href="#contact" className="btn btn-primary">
                        Get in touch
                    </a>
                    <a href={personalInfo.linkedin} className="link" target="_blank" rel="noopener noreferrer">
                        View LinkedIn
                    </a>
                </div>
                <figure className="hero-photo">
                    <Image
                        src="/rafael-headshot.jpg"
                        alt="Portrait of Rafael Gonzalez"
                        width={900}
                        height={900}
                        sizes="(max-width: 734px) 320px, 440px"
                        priority
                    />
                    <figcaption className="hero-caption">
                        {personalInfo.shortName} · {personalInfo.location}
                    </figcaption>
                </figure>
            </div>
        </section>
    );
}
