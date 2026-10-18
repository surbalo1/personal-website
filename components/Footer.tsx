import { personalInfo } from "@/data/content";

export default function Footer() {
    return (
        <footer className="page footer">
            © {new Date().getFullYear()} {personalInfo.name}
        </footer>
    );
}
