import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <Highlights />
      <Testimonials />
      <Contact />
      <footer className="py-10 text-center text-slate-400/80">
        <p>© {new Date().getFullYear()} Haim Benisty — Mentor for Web Designers</p>
      </footer>
    </div>
  )
}

export default App
