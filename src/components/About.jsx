import { bio, skills, profile, setupPhotos } from '../content'
import SectionHead from './SectionHead'
import Reveal from './Reveal'

export default function About() {
  return (
    <section id="about" className="border-t border-line bg-ink-2/20">
      <div className="mx-auto max-w-[1180px] px-5 py-20 md:px-8 md:py-28">
        <SectionHead n="04" label="About" title="Two trades, one habit: pull it apart, fix it, put it back." note={profile.location} />

        <div className="mt-10 grid gap-12 md:mt-14 md:grid-cols-12 md:gap-10">
          <Reveal className="md:col-span-6">
            <div className="space-y-5">
              {bio.map((paragraph) => (
                <p key={paragraph.slice(0, 24)} className="body-copy">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-8 border-l border-amber/50 pl-4">
              <p className="font-display text-[1.35rem] italic leading-snug text-paper">
                “If it is broken and I can trace why, it is not a mystery — it is a job.”
              </p>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-dim">
                — how I work
              </p>
            </div>
          </Reveal>

          <div className="md:col-span-6 md:pl-10">
            <div className="space-y-8">
              {skills.map((group, i) => (
                <Reveal key={group.label} delay={i * 80}>
                  <div>
                    <div className="flex items-baseline justify-between border-b border-line pb-2">
                      <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-amber">{group.label}</h3>
                      <span className="font-mono text-[10px] tracking-[0.14em] text-dim">
                        {String(group.items.length).padStart(2, '0')}
                      </span>
                    </div>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="border border-line px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-muted transition-colors hover:border-amber/50 hover:text-paper"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* the desk, photographed — proof of the setup, not stock imagery */}
        <Reveal className="mt-12 md:mt-16">
          <div className="flex items-center justify-between border-t border-line pt-3">
            <span className="kicker">The desk</span>
            <span className="kicker hidden sm:block">Photos · 2026</span>
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {setupPhotos.map((photo) => (
              <figure key={photo.src} className="group relative overflow-hidden border border-line bg-ink-2/30">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  width={900}
                  height={1200}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/3] w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/75 to-transparent px-4 pb-3 pt-10 font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                  {photo.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
