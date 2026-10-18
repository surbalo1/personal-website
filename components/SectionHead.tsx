type Props = {
    index: string;
    label: string;
    title: string;
    intro?: string;
};

export default function SectionHead({ index, label, title, intro }: Props) {
    return (
        <header className="section-head reveal">
            <span className="section-index">
                {index} / {label}
            </span>
            <div>
                <h2>{title}</h2>
                {intro && <p>{intro}</p>}
            </div>
        </header>
    );
}
