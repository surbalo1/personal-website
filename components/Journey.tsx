import { journey, personalInfo } from "@/data/content";

export default function Journey() {
    return (
        <section className="section" id="journey">
            <div className="container wide">
                <div className="head-row">
                    <div>
                        <p className="eyebrow">Journey</p>
                        <h2>From Chihuahua to Microsoft.</h2>
                    </div>
                    <a href={personalInfo.linkedin} className="link" target="_blank" rel="noopener noreferrer">
                        More on LinkedIn
                    </a>
                </div>
            </div>
            <ol className="journey" aria-label="Career timeline">
                {journey.map((c) => (
                    <li key={c.title} className={`chapter c-${c.color}`}>
                        <span className="chapter-year">{c.year}</span>
                        <span className="chapter-place">{c.place}</span>
                        <h3>{c.title}</h3>
                        <p>{c.text}</p>
                    </li>
                ))}
            </ol>
            <p className="container wide scroll-hint" aria-hidden="true">
                Scroll →
            </p>
        </section>
    );
}
