import Section from "./Section";
import SkillIcons from "./SkillIcons";
import { ABOUT, SKILLS } from "../data/content";

// Turns **bold** markers into <strong>
const bold = (text) =>
  text.split("**").map((part, i) =>
    i % 2 ? (
      <strong key={i} className="font-semibold text-[var(--ink)]">
        {part}
      </strong>
    ) : (
      part
    )
  );

export default function About() {
  return (
    <Section id="about" title="About Me">
      <div className="space-y-6 leading-relaxed text-[var(--soft)] md:text-lg">
        {ABOUT.map((p) => (
          <p key={p}>{bold(p)}</p>
        ))}
      </div>

      <h3 className="mb-8 mt-12 text-xl font-medium text-[var(--ink)]">Core Skills</h3>
      <div className="grid gap-10">
        {SKILLS.map((g) => (
          <div key={g.group}>
            <h4 className="mb-5 text-center text-lg font-medium text-[var(--accent)]">{g.group}</h4>
            <SkillIcons items={g.items} />
          </div>
        ))}
      </div>
    </Section>
  );
}
