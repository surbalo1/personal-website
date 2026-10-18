import { personalInfo } from "@/data/content";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-inner">
                <span>
                    © {new Date().getFullYear()} {personalInfo.name}
                </span>
                <span>{personalInfo.location}</span>
            </div>
        </footer>
    );
}
