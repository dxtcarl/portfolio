import { benchJobs, benchPhoto } from '../content'
import { asset } from '../lib/asset'
import SectionHead from './SectionHead'
import Reveal from './Reveal'

export default function Bench() {
  return (
    <section id="bench" className="border-y border-line bg-ink-2/30">
      <div className="mx-auto max-w-[1180px] px-5 py-20 md:px-8 md:py-28">
        <SectionHead
          n="02"
          label="Bench"
          title="Board-level work, logged job by job."
          note="Repair work · 2 yrs"
        />

        <Reveal className="mt-10 md:mt-14">
          <figure className="relative overflow-hidden border border-line">
            <img
              src={asset(benchPhoto.src)}
              alt={benchPhoto.alt}
              width={1200}
              height={750}
              loading="lazy"
              decoding="async"
              className="aspect-[16/10] w-full object-cover contrast-[1.03] saturate-[0.95]"
            />
            <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 bg-gradient-to-t from-ink via-ink/70 to-transparent px-4 pb-3 pt-10 font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
              <span>{benchPhoto.caption}</span>
              <span className="hidden text-dim sm:inline">Bench / 01</span>
            </figcaption>
          </figure>
        </Reveal>

        <Reveal className="mt-4">
          <div className="border border-line">
            {/* column labels — desktop only */}
            <div className="hidden grid-cols-12 gap-4 border-b border-line bg-ink/60 px-5 py-3 md:grid">
              {[
                ['Device', 'col-span-2'],
                ['Fault', 'col-span-4'],
                ['Work performed', 'col-span-3'],
                ['Result', 'col-span-3 text-right'],
              ].map(([label, span]) => (
                <span key={label} className={`font-mono text-[10px] uppercase tracking-[0.18em] text-dim ${span}`}>
                  {label}
                </span>
              ))}
            </div>

            <ul className="divide-y divide-line">
              {benchJobs.map((job, i) => (
                <li key={`${job.device}-${i}`} className="grid grid-cols-1 gap-1.5 px-5 py-4 md:grid-cols-12 md:items-baseline md:gap-4">
                  <div className="flex items-center gap-2 md:col-span-2">
                    <span
                      className={`font-mono text-[10px] tracking-[0.14em] ${i === 0 ? 'text-amber' : 'text-dim'}`}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="font-mono text-[12px] tracking-[0.04em] text-paper">{job.device}</span>
                  </div>
                  <p className="text-[15px] text-muted md:col-span-4">{job.fault}</p>
                  <p className="text-[15px] text-muted/85 md:col-span-3">{job.work}</p>
                  <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-moss md:col-span-3 md:text-right">
                    {job.result}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-dim">
            Sample log — replace these rows with jobs you actually did in src/content.js
          </p>
          <a
            href="#contact"
            className="font-mono text-[10px] uppercase tracking-[0.18em] text-amber underline decoration-amber/40 underline-offset-4 hover:decoration-amber"
          >
            Need a repair? →
          </a>
        </div>
      </div>
    </section>
  )
}
