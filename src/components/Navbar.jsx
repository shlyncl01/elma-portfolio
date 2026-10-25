import { ME } from "../data/content";
import { SunIcon, MoonIcon } from "./Icons";

export default function Navbar({ dark, onToggle }) {
  return (
    <nav className="fixed inset-x-0 top-0 z-30 flex items-center justify-between px-6 py-4 backdrop-blur-sm sm:px-8">
      <a href="#about" className="text-2xl font-bold tracking-tight text-[var(--ink)]" aria-label="Back to top">
        {ME.initials}
        <span className="text-[var(--accent)]">.</span>
      </a>

      <div className="flex items-center gap-3">
        <a
          href={ME.resume}
          download="Ashley-Nicole-Elma-Resume.pdf"
          className="rounded-full bg-[var(--accent)] px-5 py-2 text-sm font-semibold text-[var(--bg)] transition hover:opacity-90"
        >
          Resume
        </a>
        <button
          onClick={onToggle}
          aria-label="Switch between navy and light theme"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--tint)] text-[var(--ink)] transition hover:border-[var(--accent)]"
        >
          {dark ? <SunIcon /> : <MoonIcon />}
        </button>
      </div>
    </nav>
  );
}