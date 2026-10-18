"use client";

import { useState } from "react";
import { personalInfo } from "@/data/content";

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
        <section className="block" id="contact">
            <h2>Contact</h2>
            <p className="block-intro">
                The easiest way to reach me is by email at{" "}
                <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>, or you can leave a note here.
            </p>
            <form className="form" onSubmit={onSubmit}>
                <div className="form-row">
                    <label>
                        Name
                        <input name="name" value={form.name} onChange={onChange} required autoComplete="name" />
                    </label>
                    <label>
                        Email
                        <input type="email" name="email" value={form.email} onChange={onChange} required autoComplete="email" />
                    </label>
                </div>
                <label>
                    Message
                    <textarea name="message" value={form.message} onChange={onChange} required rows={4} />
                </label>
                <div className="form-foot">
                    <button type="submit" className="btn" disabled={status === "sending"}>
                        {status === "sending" ? "Sending…" : "Send"}
                    </button>
                    <span className={`form-status ${status === "error" ? "err" : ""}`} role="status">
                        {status === "success" && "Thanks, I'll get back to you soon."}
                        {status === "error" && "That didn't go through. Please email me instead."}
                    </span>
                </div>
            </form>
        </section>
    );
}
