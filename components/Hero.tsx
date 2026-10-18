import Image from "next/image";
import { intro, personalInfo } from "@/data/content";

export default function Hero() {
    return (
        <section className="hero" id="top">
            <div className="container">
                <Image
                    className="hero-photo"
                    src="/rafael-headshot.jpg"
                    alt="Rafael Gonzalez"
                    width={480}
                    height={480}
                    priority
                />
                <h1>Hi, I&apos;m Rafael.</h1>
                <p className="hero-sub">
                    {personalInfo.title} at {personalInfo.company}, {personalInfo.location}.
                </p>
                <p className="hero-intro">{intro}</p>
                <div className="hero-cta">
                    <a href="#contact" className="btn btn-primary">
                        Get in touch
                    </a>
                    <a href={personalInfo.linkedin} className="link" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </a>
                    <a href={personalInfo.resumeUrl} className="link" target="_blank" rel="noopener noreferrer">
                        Resume
                    </a>
                </div>
            </div>
        </section>
    );
}
