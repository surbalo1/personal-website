"use client";

import { useState } from "react";
import { navLinks, personalInfo } from "@/data/content";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const close = () => setOpen(false);

    return (
        <nav className={`nav${open ? " open" : ""}`} aria-label="Main">
            <div className="container wide nav-inner">
                <a href="#top" className="logo" onClick={close}>
                    {personalInfo.shortName}
                </a>

                <div className="nav-links" id="nav-links">
                    {navLinks.map((link) => (
                        <a key={link.href} href={link.href} className="nav-link" onClick={close}>
                            {link.name}
                        </a>
                    ))}
                    <a href={personalInfo.linkedin} className="nav-cta" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </a>
                </div>

                <button
                    className="menu-btn"
                    onClick={() => setOpen(!open)}
                    aria-label={open ? "Close menu" : "Open menu"}
                    aria-expanded={open}
                    aria-controls="nav-links"
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                        {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 9h16M4 15h16" />}
                    </svg>
                </button>
            </div>
        </nav>
    );
}
