"use client";

import { useState, useEffect } from "react";
import { navLinks, personalInfo } from "@/data/content";
import styles from "./Navbar.module.css";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
            <div className={`container ${styles.navContainer}`}>
                <a href="#" className={styles.logo}>
                    <span className={styles.logoText}>RGC</span>
                </a>

                <div className={`${styles.navLinks} ${isMobileMenuOpen ? styles.open : ""}`}>
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={styles.navLink}
                            onClick={handleNavClick}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href={personalInfo.resumeUrl}
                        className={`btn btn-primary ${styles.resumeBtn}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Resume
                    </a>
                </div>

                <button
                    className={`${styles.mobileMenuBtn} ${isMobileMenuOpen ? styles.open : ""}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    );
}
