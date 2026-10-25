import Section from "./Section";
import Tag from "./Tag";
import { EXPERIENCE } from "../data/content";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="-mx-4">
        {EXPERIENCE.map((e) => {
          const Wrapper = e.link ? "a" : "div";
          const linkProps = e.link ? { href: e.link, target: "_blank", rel: "noreferrer" } : {};
          return (
            <Wrapper
              key={e.title + e.org}
              {...linkProps}
              className="group grid grid-cols-12 gap-2 rounded-lg p-4 transition hover:bg-[var(--tint)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] md:gap-8"
            >
              <p className="col-span-4 pt-1 font-mono text-xs text-[var(--muted)] md:col-span-3 md:text-sm">
                {e.when}
              </p>

              <div className="col-span-8 md:col-span-9">
                <h3 className="mb-1 flex items-center text-base font-medium text-[var(--ink)] group-hover:text-[var(--accent)] md:text-lg">
                  {e.title} · {e.org}
                  {e.link && (
                    <span className="ml-2 inline-block transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1">
                      ↗
                    </span>
                  )}
                </h3>
                <p className="mb-3 text-sm text-[var(--soft)] md:text-base">{e.text}</p>
                <div className="flex flex-wrap gap-2">
                  {e.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </div>
            </Wrapper>
          );
        })}
      </div>
    </Section>
  );
}