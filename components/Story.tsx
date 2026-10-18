import { story } from "@/data/content";
import SectionHead from "./SectionHead";

// Turns "**bold**" segments into <strong>.
function renderText(text: string) {
    return text.split(/\*\*(.+?)\*\*/g).map((part, i) => (i % 2 ? <strong key={i}>{part}</strong> : part));
}

export default function Story() {
    return (
        <section className="section alt" id="about">
            <div className="container">
                <SectionHead title="How I got here." />
                <div className="story reveal">
                    {story.map((p) => (
                        <p key={p.slice(0, 24)}>{renderText(p)}</p>
                    ))}
                </div>
            </div>
        </section>
    );
}
