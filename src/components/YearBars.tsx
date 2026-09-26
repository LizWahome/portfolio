export function YearBars({
  data,
}: {
  data: { year: string; value: number }[];
}) {
  const max = Math.max(...data.map((d) => d.value));

  return (
    <div className="flex items-end gap-6 sm:gap-10">
      {data.map((d) => (
        <div key={d.year} className="flex flex-1 flex-col items-center gap-3">
          <span className="font-mono text-xs text-text-secondary">
            {d.value.toLocaleString()}
          </span>
          <div className="flex h-40 w-full items-end">
            <div
              className="w-full rounded-t bg-accent/80"
              style={{ height: `${Math.max((d.value / max) * 100, 4)}%` }}
            />
          </div>
          <span className="font-mono text-xs text-text-tertiary">
            {d.year}
          </span>
        </div>
      ))}
    </div>
  );
}
