import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

    const formData = Object.fromEntries(new FormData(e.currentTarget))

    try {
      const res = await fetch(`${baseUrl}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('Thanks! I will get back to you within 24 hours.')
      e.currentTarget.reset()
    } catch (err) {
      setStatus('Something went wrong. Please try again later.')
    }
  }

  return (
    <section id="contact" className="relative py-28">
      <div className="absolute inset-0 bg-[radial-gradient(600px_250px_at_20%_0%,rgba(34,197,94,0.12),transparent_60%),radial-gradient(600px_250px_at_80%_100%,rgba(59,130,246,0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Start your mentorship</h2>
            <p className="mt-3 text-slate-300/90">Tell me where you are and where you want to go. We’ll start with a short intro call and create a simple plan.</p>
            <ul className="mt-6 space-y-2 text-slate-300/90 text-sm list-disc list-inside">
              <li>Weekly 1:1 sessions</li>
              <li>Portfolio and case study reviews</li>
              <li>Hands-on Figma and component systems</li>
              <li>Async feedback between calls</li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="grid grid-cols-1 gap-4">
              <input name="name" required placeholder="Your name" className="w-full rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-white/30" />
              <input type="email" name="email" required placeholder="Email" className="w-full rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-white/30" />
              <input name="website" placeholder="Portfolio/Website (optional)" className="w-full rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-white/30" />
              <textarea name="message" required placeholder="What would you like help with?" rows="4" className="w-full rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-white/30" />
            </div>
            <button className="mt-5 w-full rounded-xl bg-white text-slate-900 font-medium px-5 py-3 hover:bg-slate-200 transition-colors">Send</button>
            {status && <p className="mt-3 text-sm text-slate-200">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
