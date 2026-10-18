"use client";

import { useEffect, useState } from "react";
import { navLinks, personalInfo } from "@/data/content";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav className={`nav${scrolled ? " scrolled" : ""}${open ? " open" : ""}`} aria-label="Main">
            <div className="container nav-inner">
                <a href="#top" className="logo" onClick={() => setOpen(false)}>
                    rafael<span>.</span>gonzalez
                </a>

                <div className="nav-links" id="nav-links">
                    {navLinks.map((link) => (
                        <a key={link.href} href={link.href} className="nav-link" onClick={() => setOpen(false)}>
                            {link.name}
                        </a>
                    ))}
                    <a
                        href={personalInfo.resumeUrl}
                        className="btn btn-ghost btn-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Resume
                    </a>
                </div>

                <button
                    className="menu-btn"
                    onClick={() => setOpen(!open)}
                    aria-label={open ? "Close menu" : "Open menu"}
                    aria-expanded={open}
                    aria-controls="nav-links"
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        {open ? (
                            <path d="M6 6l12 12M18 6L6 18" />
                        ) : (
                            <path d="M4 7h16M4 12h16M4 17h16" />
                        )}
                    </svg>
                </button>
            </div>
        </nav>
    );
}
