import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-40 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 backdrop-blur">
            <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <p className="text-sm text-white/80">Now accepting 1:1 mentees</p>
          </div>

          <h1 className="mt-6 text-4xl sm:text-6xl font-bold tracking-tight text-white">
            Level up your web design career with a mentor who ships
          </h1>
          <p className="mt-4 text-lg text-slate-300/90">
            I help web designers become product-minded creators: portfolio that converts, workflows that scale, and real-world projects that stand out.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contact" className="rounded-xl bg-white text-slate-900 font-medium px-5 py-3 hover:bg-slate-200 transition-colors">
              Book a Free Intro Call
            </a>
            <a href="#highlights" className="rounded-xl border border-white/20 text-white px-5 py-3 hover:bg-white/10 transition-colors">
              See how I mentor
            </a>
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/30 to-slate-950/80" />
    </section>
  )
}
