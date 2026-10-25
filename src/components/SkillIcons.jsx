import { useState } from "react";

function Skill({ name, slug, color, src: customSrc, invert }) {
  const [failed, setFailed] = useState(false);
  const src = customSrc || `https://cdn.simpleicons.org/${slug}${color ? `/${color}` : ""}`;

  return (
    <li
      tabIndex={0}
      className="group/skill relative flex h-12 min-w-12 items-center justify-center rounded-md transition duration-200 hover:-translate-y-1 hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
    >
      {/* Name tooltip: shows when the cursor touches the icon (or on keyboard focus) */}
      <span
        role="tooltip"
        className="pointer-events-none absolute -top-10 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded bg-slate-100 px-3 py-1 text-xs font-medium text-slate-800 opacity-0 shadow-md transition duration-150 group-hover/skill:opacity-100 group-focus-visible/skill:opacity-100"
      >
        {name}
        <span className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-slate-100" />
      </span>

      {failed ? (
        <span className="rounded-full bg-[var(--tint)] px-3 py-1 text-xs font-medium text-[var(--ink)]">{name}</span>
      ) : (
        <img
          src={src}
          alt={name}
          loading="lazy"
          onError={() => setFailed(true)}
          className={`h-10 w-10 object-contain ${invert ? "dark:invert" : ""}`}
        />
      )}
    </li>
  );
}

export default function SkillIcons({ items }) {
  return (
    <ul className="flex flex-wrap justify-center gap-x-6 gap-y-4">
      {items.map((s) => (
        <Skill key={s.name} {...s} />
      ))}
    </ul>
  );
}
