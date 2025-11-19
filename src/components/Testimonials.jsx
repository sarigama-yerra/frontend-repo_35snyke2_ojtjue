import { motion } from 'framer-motion'

const testimonials = [
  {
    quote:
      "Haim helped me restructure my portfolio and I booked two dream clients in a month. His feedback was specific, actionable, and fun.",
    name: 'Tamar R.',
    role: 'Freelance Web Designer'
  },
  {
    quote:
      "We built components and naming conventions that made my work feel 2x faster. I finally feel confident working with devs.",
    name: 'Jon S.',
    role: 'Product Designer'
  },
  {
    quote:
      "The weekly cadence kept me accountable and each session ended with a clear, realistic action plan.",
    name: 'Noa K.',
    role: 'Junior UI Designer'
  }
]

export default function Testimonials() {
  return (
    <section className="relative py-28">
      <div className="absolute inset-0 bg-[radial-gradient(800px_300px_at_50%_0%,rgba(99,102,241,0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">What mentees say</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <p className="text-slate-200">“{t.quote}”</p>
              <footer className="mt-4 text-sm text-slate-400">{t.name} · {t.role}</footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
