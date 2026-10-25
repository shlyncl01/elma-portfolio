import useReveal from "../hooks/useReveal";

export default function Section({ id, title, children }) {
  const [ref, shown] = useReveal();
  return (
    <section
      id={id}
      ref={ref}
      className={`mb-24 scroll-mt-24 transition duration-700 ease-out ${
        shown ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <h2 className="mb-6 text-3xl font-bold text-[var(--ink)]">{title}</h2>
      {children}
    </section>
  );
}
