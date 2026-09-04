export function Kpi({ value, label }: { value: string; label: string }) {
  return (
    <div className="border-l-2 border-accent pl-4">
      <div className="font-mono text-2xl sm:text-3xl text-text tabular-nums">
        {value}
      </div>
      <div className="mt-1 text-sm text-text-secondary">{label}</div>
    </div>
  );
}
