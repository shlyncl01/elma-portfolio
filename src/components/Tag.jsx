export default function Tag({ children }) {
  return (
    <span className="rounded-full bg-[var(--tint)] px-3 py-1 text-[10px] font-medium text-[var(--ink)] md:text-xs">
      {children}
    </span>
  );
}
