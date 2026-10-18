"use client";

import { useState } from "react";
import { personalInfo } from "@/data/content";
import SectionHead from "./SectionHead";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState<Status>("idle");

    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");
        try {
            const res = await fetch("https://formspree.io/f/mykgdzrz", {
                method: "POST",
                headers: { "Content-Type": "application/json", Accept: "application/json" },
                body: JSON.stringify(form),
            });
            if (!res.ok) throw new Error();
            setStatus("success");
            setForm({ name: "", email: "", message: "" });
        } catch {
            setStatus("error");
        }
    };

    const links = [
        { label: "email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
        { label: "linkedin", value: "in/rafael-glez-chong", href: personalInfo.linkedin },
        { label: "github", value: "github.com/surbalo1", href: personalInfo.github },
    ];

    return (
        <section className="section" id="contact">
            <div className="container">
                <SectionHead
                    index="06"
                    label="contact"
                    title="Let's talk"
                    intro="Questions about cloud, AI or a project idea? Send me a message. I usually reply within a few days."
                />
                <div className="contact-grid reveal">
                    <ul className="contact-links">
                        {links.map((l) => (
                            <li key={l.label}>
                                <a
                                    href={l.href}
                                    {...(l.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                >
                                    <span className="label">{l.label}</span>
                                    <span className="value">{l.value}</span>
                                    <span aria-hidden="true">→</span>
                                </a>
                            </li>
                        ))}
                    </ul>

                    <form className="form" onSubmit={onSubmit}>
                        <label>
                            name
                            <input name="name" value={form.name} onChange={onChange} required autoComplete="name" />
                        </label>
                        <label>
                            email
                            <input type="email" name="email" value={form.email} onChange={onChange} required autoComplete="email" />
                        </label>
                        <label>
                            message
                            <textarea name="message" value={form.message} onChange={onChange} required rows={5} />
                        </label>
                        <div>
                            <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
                                {status === "sending" ? "Sending..." : "Send message"}
                            </button>
                        </div>
                        <p className="form-status ok" role="status">
                            {status === "success" && "Thanks! Your message was sent."}
                        </p>
                        {status === "error" && (
                            <p className="form-status err" role="alert">
                                Something went wrong. Please email me directly.
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
}
