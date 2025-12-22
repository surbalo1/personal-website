import Link from "next/link";
import styles from "./blog.module.css";

export const metadata = {
    title: "Blog | Rafael Gonzalez",
    description: "Technical articles about embedded systems, IoT, and engineering problem-solving.",
};

const posts = [
    {
        slug: "debugging-iot-connectivity",
        title: "How I Debug IoT Connectivity Issues",
        excerpt: "A systematic approach to diagnosing and fixing connectivity problems in field-deployed IoT devices.",
        date: "Coming Soon",
        category: "IoT",
        readTime: "5 min",
    },
    {
        slug: "firmware-validation-workflow",
        title: "Building a Firmware Validation Workflow",
        excerpt: "Creating repeatable test processes for embedded systems using PLC test benches.",
        date: "Coming Soon",
        category: "Embedded",
        readTime: "7 min",
    },
    {
        slug: "hardware-software-integration",
        title: "Hardware-Software Integration: Lessons Learned",
        excerpt: "Common pitfalls and best practices when integrating firmware with custom hardware.",
        date: "Coming Soon",
        category: "Engineering",
        readTime: "6 min",
    },
];

export default function BlogPage() {
    return (
        <main className={styles.blogPage}>
            <div className="container">
                <div className={styles.header}>
                    <Link href="/" className={styles.backLink}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M19 12H5M12 19l-7-7 7-7" />
                        </svg>
                        Back to Home
                    </Link>
                    <h1>Technical Blog</h1>
                    <p>Articles about engineering problems and solutions</p>
                </div>

                <div className={styles.postsGrid}>
                    {posts.map((post) => (
                        <article key={post.slug} className={styles.postCard}>
                            <span className={styles.category}>{post.category}</span>
                            <h2>{post.title}</h2>
                            <p>{post.excerpt}</p>
                            <div className={styles.postMeta}>
                                <span>{post.date}</span>
                                <span>•</span>
                                <span>{post.readTime}</span>
                            </div>
                        </article>
                    ))}
                </div>

                <div className={styles.comingSoon}>
                    <p>🚧 Blog posts coming soon. Check back for technical articles.</p>
                </div>
            </div>
        </main>
    );
}
