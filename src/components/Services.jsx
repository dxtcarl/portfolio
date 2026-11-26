import { services, profile } from '../content'
import SectionHead from './SectionHead'
import Reveal from './Reveal'

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-[1180px] px-5 py-20 md:px-8 md:py-28">
      <SectionHead n="03" label="Services" title="Four ways to hire me." note="App · Web · Bench" />

      <div className="mt-10 divide-y divide-line border-y border-line md:mt-14">
        {services.map((s, i) => (
          <Reveal key={s.n} delay={i * 70}>
            <div className="group grid gap-3 px-1 py-7 transition-colors duration-200 hover:bg-ink-2/40 md:grid-cols-12 md:items-baseline md:gap-6 md:px-3">
              <span className="font-mono text-[11px] tracking-[0.18em] text-dim md:col-span-1">{s.n}</span>
              <h3 className="font-display text-[clamp(1.7rem,2.6vw,2.2rem)] leading-[1.05] text-paper md:col-span-4">
                {s.title}
              </h3>
              <p className="body-copy max-w-xl text-[15.5px] md:col-span-4">{s.body}</p>
              <div className="md:col-span-3 md:text-right">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-amber">{s.experience}</span>
                <span className="mt-1 block font-mono text-[9px] uppercase tracking-[0.16em] text-dim">{s.price}</span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-8">
        <div className="flex flex-col items-start justify-between gap-5 border border-line bg-ink-2/50 p-6 md:flex-row md:items-center md:p-8">
          <div>
            <p className="font-display text-[clamp(1.5rem,2.4vw,2rem)] leading-tight text-paper">
              Tell me what broke — or what you want built.
            </p>
            <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-dim">
              {profile.location} · replies by email or phone
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a className="btn" href={`mailto:${profile.email}`}>
              Email me
            </a>
            <a className="btn btn--ghost" href={`tel:${profile.phone}`}>
              {profile.phone}
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
