type Props = {
    eyebrow?: string;
    title: string;
    intro?: string;
};

export default function SectionHead({ eyebrow, title, intro }: Props) {
    return (
        <header className="section-head reveal">
            {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
            <h2>{title}</h2>
            {intro && <p>{intro}</p>}
        </header>
    );
}
