import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setOpen(false)
    }
  }

  const NavLink = ({ id, label }) => (
    <button
      onClick={() => scrollTo(id)}
      className="text-slate-200/90 hover:text-white transition-colors"
    >
      {label}
    </button>
  )

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur-md px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-blue-500 to-cyan-400 shadow-[0_0_35px_rgba(59,130,246,0.45)]" />
            <div className="leading-tight">
              <p className="text-white font-semibold">Haim Benisty</p>
              <p className="text-xs text-slate-300/70">Mentor for Web Designers</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <NavLink id="hero" label="Home" />
            <NavLink id="highlights" label="Why Mentor" />
            <NavLink id="contact" label="Start Mentoring" />
            <a href="/test" className="text-slate-400 hover:text-white text-sm">System Test</a>
            <button
              onClick={() => scrollTo('contact')}
              className="ml-2 rounded-xl bg-white text-slate-900 font-medium px-4 py-2 hover:bg-slate-200 transition-colors"
            >
              Book a Call
            </button>
          </nav>

          <button
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-2 rounded-2xl border border-white/10 bg-slate-900/80 backdrop-blur-md p-4 space-y-3">
            <NavLink id="hero" label="Home" />
            <div className="h-px bg-white/10" />
            <NavLink id="highlights" label="Why Mentor" />
            <div className="h-px bg-white/10" />
            <NavLink id="contact" label="Start Mentoring" />
            <a href="/test" className="block text-slate-400 hover:text-white text-sm">System Test</a>
            <button
              onClick={() => scrollTo('contact')}
              className="w-full rounded-xl bg-white text-slate-900 font-medium px-4 py-2 hover:bg-slate-200 transition-colors"
            >
              Book a Call
            </button>
          </div>
        )}
      </div>
    </header>
  )
}
