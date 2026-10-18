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

    return (
        <section className="section contact" id="contact">
            <div className="container">
                <SectionHead
                    title="Say hi."
                    intro="Whether it's about cloud, AI or something you're building, my inbox is open."
                />
                <div className="contact-actions reveal">
                    <a href={`mailto:${personalInfo.email}`} className="btn btn-primary">
                        Email me
                    </a>
                    <a href={personalInfo.linkedin} className="link" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </a>
                    <a href={personalInfo.github} className="link" target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                </div>

                <form className="form" onSubmit={onSubmit}>
                    <p className="form-title">Or send a message</p>
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
                        <textarea name="message" value={form.message} onChange={onChange} required rows={5} placeholder="Message" />
                    </label>
                    <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
                        {status === "sending" ? "Sending..." : "Send"}
                    </button>
                    <p className={`form-status ${status === "error" ? "err" : "ok"}`} role="status">
                        {status === "success" && "Thanks! Your message was sent."}
                        {status === "error" && "Something went wrong. Please email me directly."}
                    </p>
                </form>
            </div>
        </section>
    );
}
