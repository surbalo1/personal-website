import { focusAreas, stats } from "@/data/content";
import SectionHead from "./SectionHead";

type Area = (typeof focusAreas)[number];

function Tile({ area, className = "" }: { area: Area; className?: string }) {
    return (
        <article className={`tile reveal ${className}`}>
            <h3>{area.title}</h3>
            <p>{area.text}</p>
        </article>
    );
}

function Stat({ value, label }: { value: string; label: string }) {
    return (
        <article className="tile stat span-2 reveal">
            <div className="big">{value}</div>
            <p>{label}</p>
        </article>
    );
}

export default function Focus() {
    const [cloud, ai, advisory, edge] = focusAreas;

    return (
        <section className="section" id="focus">
            <div className="container wide">
                <SectionHead
                    eyebrow="What I do"
                    title="Where business meets engineering."
                    intro="I listen to what a team needs, then design a solution that can actually be built, run and supported."
                />
                <div className="bento">
                    <Tile area={cloud} className="span-4" />
                    <Stat {...stats[0]} />
                    <Tile area={ai} className="dark" />
                    <Tile area={advisory} />
                    <Stat {...stats[1]} />
                    <Tile area={edge} className="span-4" />
                </div>
            </div>
        </section>
    );
}
