import { projects } from '../content'
import SectionHead from './SectionHead'
import Reveal from './Reveal'

function SampleTag() {
  return (
    <span className="border border-rust/60 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.18em] text-rust">
      Sample
    </span>
  )
}

function Stack({ items }) {
  return (
    <ul className="flex flex-wrap gap-x-4 gap-y-1.5">
      {items.map((s) => (
        <li key={s} className="font-mono text-[10px] uppercase tracking-[0.14em] text-dim">
          {s}
        </li>
      ))}
    </ul>
  )
}

/* Three app screenshots in thin device frames, slightly fanned like prints
   on a bench. Swipes horizontally on phones, sits still on desktop. */
function PhoneStrip({ images, compact = false }) {
  if (!images || images.length === 0) return null

  const tilt = compact ? ['', '', ''] : ['md:-rotate-[1.5deg]', '', 'md:rotate-[1.5deg]']
  const basis = compact ? 'basis-[40%]' : 'basis-[44%]'

  return (
    <div className="-mx-2 flex snap-x snap-mandatory gap-3 overflow-x-auto px-2 pb-1 md:mx-0 md:gap-4 md:overflow-visible md:px-0 md:pb-0">
      {images.map((img, i) => (
        <figure
          key={img.src}
          className={`group/phone min-w-0 shrink-0 ${basis} snap-start transition-transform duration-300 md:basis-0 md:flex-1 md:hover:-translate-y-1 md:hover:rotate-0 ${
            tilt[i % tilt.length]
          }`}
        >
          <div className="rounded-[20px] border border-line bg-[#141210] p-[3px] shadow-[0_22px_45px_-26px_rgba(0,0,0,0.95)] md:rounded-[24px] md:p-1">
            <img
              src={img.src}
              alt={img.alt}
              width={738}
              height={1600}
              loading={i === 0 ? 'eager' : 'lazy'}
              decoding="async"
              className="aspect-[738/1600] w-full rounded-[17px] object-cover object-top md:rounded-[20px]"
            />
          </div>
          {compact ? null : (
            <figcaption className="mt-2.5 hidden font-mono text-[9px] uppercase tracking-[0.16em] text-dim md:block">
              <span className="text-amber/70">{String(i + 1).padStart(2, '0')}</span> {img.label}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  )
}

function LeadCard({ p }) {
  const shots = p.images && p.images.length > 0 ? p.images : null

  return (
    <a
      href={p.link || undefined}
      className={`group relative block border border-line bg-ink-2/40 p-5 transition-colors duration-200 md:p-7 ${
        p.link ? 'hover:border-amber/70' : 'cursor-default'
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <span className="kicker text-muted">{p.tag}</span>
        <div className="flex items-center gap-2">
          {p.isSample ? <SampleTag /> : null}
          <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-dim">{p.status}</span>
        </div>
      </div>

      {shots ? (
        <div className="mt-6 grid gap-7 md:grid-cols-12 md:gap-9">
          <div className="md:col-span-5 md:flex md:h-full md:flex-col md:justify-center">
            <h3 className="font-display text-[clamp(2rem,3.4vw,2.9rem)] leading-[1] tracking-[-0.01em] text-paper">
              {p.name}
            </h3>
            <p className="mt-2 font-mono text-[10px] uppercase leading-relaxed tracking-[0.14em] text-dim">
              {p.role}
            </p>
            <p className="body-copy mt-4 text-[15.5px] leading-relaxed">{p.summary}</p>
            <div className="mt-6 flex items-end justify-between gap-4 border-t border-line pt-3">
              <Stack items={p.stack} />
              {p.link ? (
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-amber opacity-0 transition-opacity group-hover:opacity-100">
                  Open ↗
                </span>
              ) : null}
            </div>
          </div>
          <div className="md:col-span-7">
            <PhoneStrip images={shots} />
          </div>
        </div>
      ) : (
        <div className="mt-6 grid gap-6 md:grid-cols-2 md:gap-10">
          <div>
            <h3 className="font-display text-[clamp(2rem,3.4vw,2.9rem)] leading-[1] tracking-[-0.01em] text-paper">
              {p.name}
            </h3>
            <p className="mt-2 font-mono text-[10px] uppercase leading-relaxed tracking-[0.14em] text-dim">{p.role}</p>
          </div>
          <div>
            <p className="body-copy text-[15.5px] leading-relaxed">{p.summary}</p>
            <div className="mt-5 flex items-end justify-between gap-4 border-t border-line pt-3">
              <Stack items={p.stack} />
              {p.link ? (
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-amber opacity-0 transition-opacity group-hover:opacity-100">
                  Open ↗
                </span>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </a>
  )
}

function Card({ p, delay }) {
  const shots = p.images && p.images.length > 0 ? p.images : null

  return (
    <Reveal delay={delay} className="h-full">
      <a
        href={p.link || undefined}
        className={`group flex h-full flex-col border border-line bg-ink-2/30 p-5 transition-colors duration-200 ${
          p.link ? 'hover:border-amber/70' : 'cursor-default'
        }`}
      >
        <div className="flex items-center justify-between gap-3">
          <span className="kicker text-muted">{p.tag}</span>
          {p.isSample ? <SampleTag /> : null}
        </div>

        {/* A card with no screenshots centres its text instead of leaving a void */}
        <div className={shots ? '' : 'my-auto'}>
          <h3 className="mt-4 font-display text-[1.9rem] leading-[1.02] text-paper">{p.name}</h3>
          <p className="body-copy mt-3 text-[15px] leading-relaxed">{p.summary}</p>
          <div className="mt-4">
            <Stack items={p.stack} />
          </div>
        </div>

        {shots ? (
          <div className="mt-5">
            <PhoneStrip images={shots} compact />
          </div>
        ) : null}

        <div className="mt-auto pt-5">
          <div className="flex items-center justify-between gap-3 border-t border-line pt-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-dim">{p.status}</span>
            {p.link ? (
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-amber opacity-0 transition-opacity group-hover:opacity-100">
                Open ↗
              </span>
            ) : null}
          </div>
        </div>
      </a>
    </Reveal>
  )
}

/* A web system instead of a phone app: text left, real modules listed right. */
function WideCard({ p, delay }) {
  return (
    <Reveal delay={delay} className="md:col-span-2">
      <a
        href={p.link || undefined}
        target={p.link ? '_blank' : undefined}
        rel={p.link ? 'noreferrer' : undefined}
        className={`group flex h-full flex-col border border-line bg-ink-2/30 p-5 transition-colors duration-200 md:p-7 ${
          p.link ? 'hover:border-amber/70' : 'cursor-default'
        }`}
      >
        <div className="flex items-center justify-between gap-3">
          <span className="kicker text-muted">{p.tag}</span>
          <div className="flex items-center gap-2">
            {p.isSample ? <SampleTag /> : null}
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-dim">{p.status}</span>
          </div>
        </div>

        <div className="mt-5 grid gap-8 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-6 md:flex md:h-full md:flex-col">
            <h3 className="font-display text-[clamp(1.9rem,3vw,2.6rem)] leading-[1.02] text-paper">{p.name}</h3>
            <p className="mt-2 font-mono text-[10px] uppercase leading-relaxed tracking-[0.14em] text-dim">{p.role}</p>
            <p className="body-copy mt-4 text-[15.5px] leading-relaxed">{p.summary}</p>
            <div className="mt-5 flex items-end justify-between gap-4 border-t border-line pt-3 md:mt-auto">
              <Stack items={p.stack} />
              {p.link ? (
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-amber opacity-0 transition-opacity group-hover:opacity-100">
                  Repo ↗
                </span>
              ) : null}
            </div>
          </div>

          <div className="md:col-span-6">
            <ul className="divide-y divide-line border-y border-line">
              {p.modules.map((m, i) => (
                <li key={m.name} className="flex gap-3 py-2.5">
                  <span className="mt-0.5 font-mono text-[9px] tracking-[0.14em] text-amber/70">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="min-w-0">
                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-paper">{m.name}</span>
                    <span className="mt-0.5 block text-[13px] leading-snug text-muted">{m.detail}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </a>
    </Reveal>
  )
}

export default function Work() {
  const [lead, ...rest] = projects
  if (!lead) return null

  return (
    <section id="work" className="mx-auto max-w-[1180px] px-5 py-20 md:px-8 md:py-28">
      <SectionHead
        n="01"
        label="Work"
        title="Apps and systems I have shipped, and the code under them."
        note="Selected projects"
      />

      <div className="mt-10 md:mt-14">
        <Reveal>
          <LeadCard p={lead} />
        </Reveal>

        {rest.length > 0 ? (
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {rest.map((p, i) =>
              p.wide ? (
                <WideCard key={p.id} p={p} delay={i * 80} />
              ) : (
                <Card key={p.id} p={p} delay={i * 80} />
              ),
            )}
          </div>
        ) : null}
      </div>

      <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.14em] text-dim">
        Cards marked <span className="text-rust">Sample</span> use placeholder copy — edit src/content.js, then set{' '}
        <span className="text-muted">isSample: false</span> to drop the tag.
      </p>
    </section>
  )
}
