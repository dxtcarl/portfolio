import { tickerWords } from '../content'

function Row({ ariaHidden }) {
  return (
    <div className="flex shrink-0 items-center" aria-hidden={ariaHidden || undefined}>
      {tickerWords.map((word) => (
        <span
          key={word}
          className="flex items-center gap-7 whitespace-nowrap px-7 font-mono text-[11px] uppercase tracking-[0.26em] text-muted"
        >
          {word}
          <span className="text-amber/80">✶</span>
        </span>
      ))}
    </div>
  )
}

export default function Ticker() {
  return (
    <div className="marquee relative overflow-hidden border-y border-line bg-ink-2/50 py-3">
      <div className="marquee-track">
        <Row />
        <Row ariaHidden />
      </div>
    </div>
  )
}
