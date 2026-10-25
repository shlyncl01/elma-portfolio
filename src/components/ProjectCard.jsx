import { useState } from "react";
import Tag from "./Tag";

export default function ProjectCard({ project }) {
  const { title, text, tags, link, image } = project;
  const [imgOk, setImgOk] = useState(Boolean(image));

  // Has a live link → clickable card. No link → plain card with a "demo on request" tooltip.
  const Wrapper = link ? "a" : "div";
  const wrapperProps = link
    ? { href: link, target: "_blank", rel: "noreferrer" }
    : { tabIndex: 0 };

  return (
    <Wrapper
      {...wrapperProps}
      className={`group/card relative mb-8 grid grid-cols-12 gap-4 rounded-lg p-4 transition duration-300 hover:!opacity-100 hover:bg-[var(--tint)] group-hover/list:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] ${
        link ? "" : "cursor-default"
      }`}
    >
      {/* Tooltip */}
      <span className="pointer-events-none absolute -top-3 left-1/2 z-10 hidden -translate-x-1/2 whitespace-nowrap rounded bg-slate-100 px-3 py-1 text-xs font-medium text-slate-800 shadow group-hover/card:block group-focus-visible/card:block">
        {link ? "Visit live site" : "Demo available on request"}
      </span>

      <div className="col-span-12 md:col-span-5 lg:col-span-4">
        <div className="aspect-video overflow-hidden rounded-md border border-[var(--line)] bg-[var(--field)]">
          {imgOk ? (
            <img
              src={image}
              alt={`${title} screenshot`}
              loading="lazy"
              onError={() => setImgOk(false)}
              className="h-full w-full object-cover transition duration-300 group-hover/card:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-2xl font-bold text-[var(--accent)]/70">
              {title
                .split(" ")
                .map((w) => w[0])
                .join("")
                .slice(0, 3)}
            </div>
          )}
        </div>
      </div>

      <div className="col-span-12 flex flex-col md:col-span-7 lg:col-span-8">
        <h3 className="mb-1 flex items-center text-base font-medium text-[var(--ink)] group-hover/card:text-[var(--accent)] md:text-lg">
          {title}
          {link && (
            <span className="ml-2 inline-block transition duration-300 group-hover/card:-translate-y-0.5 group-hover/card:translate-x-1">
              ↗
            </span>
          )}
        </h3>
        <p className="mb-3 text-sm text-[var(--soft)] md:text-base">{text}</p>
        <div className="mt-auto flex flex-wrap gap-2">
          {tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}