import Image from "next/image";
import { bio, personalInfo } from "@/data/content";

export default function Intro() {
    return (
        <section className="intro" id="top">
            <Image
                className="avatar"
                src="/rafael-headshot.jpg"
                alt="Rafael Gonzalez"
                width={240}
                height={240}
                priority
            />
            <h1>Rafael Gonzalez</h1>
            <p className="role-line">
                {personalInfo.title} at {personalInfo.company} · {personalInfo.location}
            </p>
            <div className="bio">
                {bio.map((p) => (
                    <p key={p.slice(0, 24)}>{p}</p>
                ))}
            </div>
            <ul className="inline-links">
                <li>
                    <a href={`mailto:${personalInfo.email}`}>Email</a>
                </li>
                <li>
                    <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </a>
                </li>
                <li>
                    <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                </li>
                <li>
                    <a href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer">
                        Resume (PDF)
                    </a>
                </li>
            </ul>
        </section>
    );
}
