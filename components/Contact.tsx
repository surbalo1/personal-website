"use client";

import { useState } from "react";
import { personalInfo, testimonial } from "@/data/content";

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

    return (
        <section className="contact" id="contact">
            <div className="container wide">
                <figure className="quote reveal">
                    <blockquote>&ldquo;{testimonial.quote}&rdquo;</blockquote>
                    <figcaption>
                        <a href={testimonial.linkedin} target="_blank" rel="noopener noreferrer">
                            {testimonial.author}
                        </a>
                        , {testimonial.role}
                    </figcaption>
                </figure>

                <div className="contact-grid">
                    <div className="reveal">
                        <p className="eyebrow">Contact</p>
                        <h2 className="contact-title">Let&apos;s build something.</h2>
                        <a className="big-email" href={`mailto:${personalInfo.email}`}>
                            {personalInfo.email}
                        </a>
                        <div className="contact-links">
                            <a href={personalInfo.linkedin} className="link" target="_blank" rel="noopener noreferrer">
                                LinkedIn
                            </a>
                            <a href={personalInfo.github} className="link" target="_blank" rel="noopener noreferrer">
                                GitHub
                            </a>
                        </div>
                    </div>

                    <form className="form reveal" onSubmit={onSubmit}>
                        <label>
                            <span className="sr-only">Name</span>
                            <input name="name" value={form.name} onChange={onChange} required autoComplete="name" placeholder="Name" />
                        </label>
                        <label>
                            <span className="sr-only">Email</span>
                            <input type="email" name="email" value={form.email} onChange={onChange} required autoComplete="email" placeholder="Email" />
                        </label>
                        <label>
                            <span className="sr-only">Message</span>
                            <textarea name="message" value={form.message} onChange={onChange} required rows={4} placeholder="What are you working on?" />
                        </label>
                        <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
                            {status === "sending" ? "Sending…" : "Send message"}
                        </button>
                        <p className={`form-status ${status === "error" ? "err" : "ok"}`} role="status">
                            {status === "success" && "Thanks! I'll get back to you soon."}
                            {status === "error" && "That didn't go through. Please email me instead."}
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
}
