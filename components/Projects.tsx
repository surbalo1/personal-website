import { projects } from "@/data/content";

export default function Projects() {
    return (
        <section className="block" id="projects">
            <h2>Projects</h2>
            <p className="block-intro">Things I&apos;ve built on my own or at school. The code is on GitHub.</p>
            <ul className="projects">
                {projects.map((p) => (
                    <li key={p.title}>
                        <a href={p.github} target="_blank" rel="noopener noreferrer" className="project">
                            <h3>
                                {p.title} <span aria-hidden="true">↗</span>
                            </h3>
                            <p>{p.description}</p>
                            <p className="small">{p.stack.join(", ")}</p>
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
}
