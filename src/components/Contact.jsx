import { profile } from '../content'
import SectionHead from './SectionHead'
import Reveal from './Reveal'

export default function Contact() {
  const links = [
    profile.links.github
      ? { label: 'GitHub', value: profile.links.github.replace(/^https?:\/\/(www\.)?github\.com\//, '@'), href: profile.links.github }
      : null,
    profile.links.facebook ? { label: 'Facebook', value: profile.links.facebook.replace(/^https?:\/\//, ''), href: profile.links.facebook } : null,
  ].filter(Boolean)

  return (
    <section id="contact" className="blueprint border-t border-line">
      <div className="mx-auto max-w-[1180px] px-5 py-20 md:px-8 md:py-28">
        <SectionHead n="05" label="Contact" title="Let’s fix something — or build the next one." note="Open for work" />

        <div className="mt-10 grid gap-10 md:mt-14 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <a
              href={`mailto:${profile.email}`}
              className="group inline-block border-b border-paper/25 pb-1 font-display text-[clamp(1.6rem,4.2vw,3rem)] leading-tight text-paper transition-colors hover:border-amber hover:text-amber"
            >
              {profile.email}
              <span className="ml-3 inline-block font-mono text-[12px] align-middle text-amber opacity-0 transition-opacity group-hover:opacity-100">
                ↗
              </span>
            </a>

            <div className="mt-8 grid gap-px border border-line bg-line sm:grid-cols-2">
              <a
                href={`tel:${profile.phone}`}
                className="group bg-ink px-4 py-4 transition-colors hover:bg-ink-2"
              >
                <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-dim">Phone</span>
                <span className="mt-1 block font-mono text-[13px] tracking-[0.06em] text-paper group-hover:text-amber">
                  {profile.phone}
                </span>
              </a>
              <div className="bg-ink px-4 py-4">
                <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-dim">Based in</span>
                <span className="mt-1 block font-mono text-[13px] tracking-[0.04em] text-paper">
                  {profile.location}
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal className="md:col-span-5" delay={100}>
            <div className="border border-line bg-ink-2/40 p-5">
              <span className="kicker text-muted">Elsewhere</span>
              <ul className="mt-4 divide-y divide-line/80">
                {links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-between gap-3 py-3"
                    >
                      <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted group-hover:text-paper">
                        {l.label}
                      </span>
                      <span className="font-mono text-[10px] tracking-[0.06em] text-dim group-hover:text-amber">
                        {l.value} ↗
                      </span>
                    </a>
                  </li>
                ))}
                {links.length === 0 ? (
                  <li className="py-3 font-mono text-[10px] tracking-[0.12em] text-dim">
                    No links yet — add them in src/content.js
                  </li>
                ) : null}
              </ul>

              <div className="mt-4 border-t border-line pt-4">
                <p className="font-mono text-[10px] leading-relaxed tracking-[0.1em] text-dim">
                  Repairs are bench work in Floridablanca. App and web builds can be done remote.
                </p>
              </div>
            </div>

            <a className="btn mt-4 w-full justify-center" href={`mailto:${profile.email}?subject=Project%20inquiry`}>
              Start a project
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
