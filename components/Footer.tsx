import { personalInfo } from "@/data/content";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container wide footer-inner">
                <span>
                    Copyright © {new Date().getFullYear()} {personalInfo.name}
                </span>
                <span>{personalInfo.location}</span>
            </div>
        </footer>
    );
}
