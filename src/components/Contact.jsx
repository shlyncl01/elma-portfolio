import { useState } from "react";
import Section from "./Section";
import { ME } from "../data/content";
import { MailIcon } from "./Icons";

const field =
  "w-full rounded-md border border-[var(--line)] bg-[var(--field)] px-4 py-2 text-[var(--ink)] focus:outline-none focus:ring-2 focus:ring-blue-500";

export default function Contact() {
  const [sent, setSent] = useState(false);

  // No server needed: opens the visitor's email app with the message filled in.
  const onSubmit = (e) => {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Portfolio message from ${d.get("name")}`);
    const body = encodeURIComponent(`${d.get("message")}\n\n— ${d.get("name")} (${d.get("email")})`);
    window.location.href = `mailto:${ME.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <Section id="contact" title="Contact Me">
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <p className="mb-6 text-[var(--soft)] md:text-lg">
            I'm available for OJT from November 2026, 400 hours, onsite or remote. Whether you have a question or just want
            to say hi, I'll get back to you!
          </p>
          <div className="space-y-3 text-sm">
            <p className="flex items-center gap-3">
              <MailIcon />
              <a href={`mailto:${ME.email}`} className="text-[var(--accent)] hover:underline">
                {ME.email}
              </a>
            </p>
            <p className="text-[var(--muted)]">{ME.phone}</p>
            <p className="text-[var(--muted)]">{ME.location}</p>
          </div>
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          {[
            ["name", "Name", "text"],
            ["email", "Email", "email"],
          ].map(([id, label, type]) => (
            <div key={id}>
              <label htmlFor={id} className="mb-1 block text-sm font-medium text-[var(--soft)]">
                {label}
              </label>
              <input id={id} name={id} type={type} required className={field} />
            </div>
          ))}
          <div>
            <label htmlFor="message" className="mb-1 block text-sm font-medium text-[var(--soft)]">
              Message
            </label>
            <textarea id="message" name="message" rows="5" required className={field} />
          </div>
          <button
            type="submit"
            className="rounded-full bg-[var(--accent)] px-7 py-3 font-semibold text-[var(--bg)] transition hover:opacity-90"
          >
            Send Message
          </button>
          {sent && (
            <p role="status" className="text-sm text-[var(--accent)]">
              Your email app should open with the message ready to send.
            </p>
          )}
        </form>
      </div>
    </Section>
  );
}
