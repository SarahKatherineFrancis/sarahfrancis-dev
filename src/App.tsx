import { Hero } from './components/Hero'
import { CaseStudy } from './components/CaseStudy'
import { Contact } from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-ink font-sans text-paper">
      <Hero />
      <CaseStudy />
      <Contact />
    </div>
  )
}

export default App
