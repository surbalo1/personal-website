import { navLinks, personalInfo } from "@/data/content";

export default function Navbar() {
    return (
        <nav className="nav" aria-label="Main">
            <div className="page nav-inner">
                <a href="#top" className="logo">
                    {personalInfo.shortName}
                </a>
                <div className="nav-links">
                    {navLinks.map((link) => (
                        <a key={link.href} href={link.href}>
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
}
