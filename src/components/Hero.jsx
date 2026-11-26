import { profile, heroLine, statLine } from '../content'
import { asset } from '../lib/asset'
import Reveal from './Reveal'

const specRows = [
  ['Base', profile.location],
  ['Android', `Kotlin · ${profile.facts.androidMonths}`],
  ['Web', `MERN · ${profile.facts.webYears}`],
  ['Technician', `${profile.facts.technicianYears} · repair work`],
  ['Repaired', `${profile.facts.devices} devices`],
]

export default function Hero() {
  return (
    <section className="blueprint relative pb-0 pt-24 md:pt-28">
      <div className="mx-auto max-w-[1180px] px-5 md:px-8">
        <div className="flex items-center justify-between border-b border-line pb-3.5">
          <span className="kicker">Portfolio — est. 2026</span>
          <span className="kicker flex items-center gap-2 text-muted">
            <span className={profile.available ? 'dot-live' : 'dot-live bg-dim shadow-none'} />
            {profile.available ? 'Open for work' : 'Not taking work'}
          </span>
        </div>

        <div className="grid gap-12 pt-10 md:grid-cols-12 md:gap-10 md:pt-14">
          {/* ---------- name + intro ---------- */}
          <div className="md:col-span-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-dim">
              {profile.location.replace(', PH', '')}
            </p>

            <h1 className="mt-4 font-display text-[clamp(3.1rem,8.6vw,6.6rem)] leading-[0.84] tracking-[-0.02em]">
              <span className="block text-paper">{profile.firstName}</span>
              <span className="block italic text-amber">{profile.lastName}</span>
            </h1>

            <p className="mt-7 max-w-md font-mono text-[11px] uppercase leading-relaxed tracking-[0.18em] text-muted">
              {profile.title}
            </p>

            <p className="body-copy mt-6 max-w-xl">{heroLine}</p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a className="btn" href="#work">
                See the work <span aria-hidden="true">→</span>
              </a>
              <a className="btn btn--ghost" href="#contact">
                Hire me
              </a>
            </div>
          </div>

          {/* ---------- spec sheet / photo frame ---------- */}
          <Reveal className="md:col-span-5" delay={120}>
            <div className="border border-line bg-ink-2/70">
              <div className="flex items-center justify-between border-b border-line px-4 py-3">
                <span className="kicker text-muted">Spec sheet</span>
                <span className="font-mono text-[10px] tracking-[0.16em] text-dim">PH · 03</span>
              </div>

              <dl className="divide-y divide-line/80">
                {specRows.map(([k, v]) => (
                  <div key={k} className="flex items-baseline justify-between gap-4 px-4 py-3">
                    <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-dim">{k}</dt>
                    <dd className="text-right font-mono text-[11px] tracking-[0.04em] text-paper">{v}</dd>
                  </div>
                ))}
              </dl>

              <div className="p-4">
                {profile.photo ? (
                  <img
                    src={asset(profile.photo)}
                    alt={`Portrait of ${profile.name}`}
                    width={1000}
                    height={1250}
                    className="h-[380px] w-full border border-line object-cover object-[50%_10%] grayscale-[15%] contrast-[1.04] transition-[filter] duration-500 hover:grayscale-0"
                  />
                ) : (
                  <div className="flex aspect-[3/2] w-full flex-col items-center justify-center gap-2 border border-dashed border-line bg-ink/60 px-4 text-center">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-dim">Photo</span>
                    <span className="font-mono text-[10px] leading-relaxed tracking-[0.08em] text-dim/80">
                      drop a file in /public
                      <br />
                      then set profile.photo
                    </span>
                  </div>
                )}
              </div>
            </div>
          </Reveal>
        </div>

        {/* ---------- stat strip ---------- */}
        <div className="mt-12 grid grid-cols-2 border-t border-line md:mt-16 md:grid-cols-4">
          {statLine.map((s, i) => (
            <div
              key={s.label}
              className={`px-1 py-5 md:px-4 ${i % 2 === 1 ? 'border-l border-line pl-4' : ''} ${
                i > 1 ? 'border-t border-line md:border-t-0' : ''
              } ${i > 0 ? 'md:border-l md:border-line' : ''}`}
            >
              <div className="font-display text-[26px] leading-none text-paper">{s.value}</div>
              <div className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-dim">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
