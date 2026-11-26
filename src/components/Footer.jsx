import { profile } from '../content'

// Computed once per page load, not on every render.
const YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink">
      <div className="mx-auto flex max-w-[1180px] flex-col gap-4 px-5 py-6 md:flex-row md:items-center md:justify-between md:px-8">
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-dim">
          © {YEAR} {profile.name}
        </p>
        <div className="flex items-center gap-5 font-mono text-[10px] uppercase tracking-[0.16em] text-dim">
          <span>React + Vite · Tailwind</span>
          <a href="#top" className="text-muted transition-colors hover:text-amber">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  )
}
