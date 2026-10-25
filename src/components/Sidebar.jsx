import { ME, NAV } from "../data/content";
import { socialIcon } from "./Icons";
import useTypewriter from "../hooks/useTypewriter";

export default function Sidebar({ active }) {
  const name = useTypewriter(ME.typed);
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <header className="pt-28 lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-[40%] lg:flex-col lg:justify-between lg:py-28">
      <div>
        <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-3 py-1 text-xs font-medium text-[var(--ink)]">
          <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
          {ME.status}
        </p>

        <p className="text-lg font-bold text-[var(--accent)]">Hello, I'm</p>
        <h1 className="cursor min-h-[1.2em] text-4xl font-bold text-[var(--ink)] sm:text-5xl">{name}</h1>
        <h2 className="mb-4 mt-1 text-lg font-medium text-[var(--soft)] md:text-xl">{ME.role}</h2>
        <p className="max-w-md leading-relaxed text-[var(--muted)] md:text-lg">{ME.tagline}</p>

        <nav className="mt-10 hidden lg:block" aria-label="Sections">
          <ul className="space-y-4">
            {NAV.map(([id, label]) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    go(id);
                  }}
                  className={`group flex items-center gap-4 text-sm font-medium uppercase tracking-widest transition ${
                    active === id ? "text-[var(--ink)]" : "text-[var(--muted)] hover:text-[var(--ink)]"
                  }`}
                >
                  <span
                    className={`h-px bg-[var(--accent)] transition-all duration-300 ${
                      active === id ? "w-20 opacity-100" : "w-12 opacity-70 group-hover:w-16"
                    }`}
                  />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <ul className="mt-10 flex items-center gap-5 text-[var(--muted)] lg:mt-0">
        {[...ME.socials, { label: "Email", href: `mailto:${ME.email}` }].map((s) => {
          const Icon = socialIcon[s.label];
          return (
            <li key={s.label}>
              <a
                href={s.href}
                target={s.label === "Email" ? undefined : "_blank"}
                rel="noreferrer"
                aria-label={s.label}
                className="block transition hover:-translate-y-0.5 hover:text-[var(--accent)]"
              >
                <Icon />
              </a>
            </li>
          );
        })}
      </ul>
    </header>
  );
}
