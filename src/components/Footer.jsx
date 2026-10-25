import { ME } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--line)] pb-8 pt-6 text-sm text-[var(--muted)]">
      <p>Designed & Built by {ME.name}</p>
      <p className="mt-1">© {new Date().getFullYear()} All Rights Reserved</p>
    </footer>
  );
}
