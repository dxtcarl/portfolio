import { useEffect, useState } from 'react'
import { profile } from '../content'

const links = [
  { id: 'work', label: 'Work', n: '01' },
  { id: 'bench', label: 'Bench', n: '02' },
  { id: 'services', label: 'Services', n: '03' },
  { id: 'about', label: 'About', n: '04' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? 'border-b border-line bg-ink/95 backdrop-blur-sm' : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1180px] items-center justify-between gap-4 px-5 md:px-8">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-mono text-[13px] tracking-[0.24em] text-amber">DL</span>
          <span className="hidden font-mono text-[10px] tracking-[0.2em] text-dim sm:inline">
            / ANDROID &amp; BENCH WORK
          </span>
        </a>

        <nav className="hidden items-center gap-5 md:flex">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="group font-mono text-[11px] uppercase tracking-[0.16em] text-muted transition-colors hover:text-paper"
            >
              <span className="text-dim transition-colors group-hover:text-amber">{l.n}</span> {l.label}
            </a>
          ))}
          <a href="#contact" className="btn px-4 py-2.5 text-[10px]">
            Hire me
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
          className="flex h-11 w-11 items-center justify-center border border-line font-mono text-[11px] tracking-[0.2em] text-muted md:hidden"
        >
          {open ? 'CLOSE' : 'MENU'}
        </button>
      </div>

      {open ? (
        <div className="border-t border-line bg-ink px-5 pb-6 pt-2 md:hidden">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={() => setOpen(false)}
              className="flex items-baseline justify-between border-b border-line/70 py-4 font-mono text-[12px] uppercase tracking-[0.16em] text-muted"
            >
              {l.label}
              <span className="text-dim">{l.n}</span>
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-5 flex items-center justify-between border border-amber px-4 py-3.5 font-mono text-[11px] uppercase tracking-[0.18em] text-amber"
          >
            Hire me <span aria-hidden="true">→</span>
          </a>
          <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.14em] text-dim">{profile.location}</p>
        </div>
      ) : null}
    </header>
  )
}
