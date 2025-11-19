import { motion } from 'framer-motion'
import { Sparkles, Rocket, Palette, Users } from 'lucide-react'

const items = [
  {
    icon: Sparkles,
    title: 'Portfolio that Converts',
    desc: 'Craft case studies and landing pages that tell a story and drive inquiries. We’ll design, write and measure together.'
  },
  {
    icon: Rocket,
    title: 'Systems & Workflow',
    desc: 'Design ops, handoff, and reusable components. Get faster without losing quality, from brief to dev-ready.'
  },
  {
    icon: Palette,
    title: 'Design + Product Thinking',
    desc: 'Make product decisions with confidence. Learn how to scope, prioritize and align UI with outcomes.'
  },
  {
    icon: Users,
    title: 'Career Navigation',
    desc: 'Positioning, pricing, and outreach. Build authority and attract clients or land your next role.'
  }
]

export default function Highlights() {
  return (
    <section id="highlights" className="relative py-28">
      <div className="absolute inset-0 bg-[radial-gradient(600px_250px_at_20%_10%,rgba(59,130,246,0.15),transparent_60%),radial-gradient(600px_250px_at_80%_30%,rgba(34,197,94,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">What we’ll unlock together</h2>
          <p className="mt-3 text-slate-300/90">A practical mentorship designed for ambitious web designers who want momentum.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur hover:bg-white/10 transition-colors"
            >
              <item.icon className="h-6 w-6 text-white" />
              <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-300/90">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
