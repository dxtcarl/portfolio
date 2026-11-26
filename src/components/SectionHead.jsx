export default function SectionHead({ n, label, title, note, id }) {
  return (
    <div className="border-t border-line pt-4">
      <div className="flex items-baseline justify-between gap-6">
        <span className="kicker">
          <span className="text-amber">{n}</span> / {label}
        </span>
        {note ? <span className="kicker hidden text-right sm:block">{note}</span> : null}
      </div>
      <h2
        id={id}
        className="mt-5 max-w-3xl font-display text-[clamp(2.3rem,5vw,3.75rem)] leading-[0.98] tracking-[-0.015em] text-paper"
      >
        {title}
      </h2>
    </div>
  )
}
