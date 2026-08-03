import { PipelineDiagram } from './PipelineDiagram'

export function Hero() {
  return (
    <header className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-24 sm:px-8">
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
        backend + automation developer
      </p>
      <h1 className="mt-6 font-heading text-4xl font-medium leading-tight sm:text-5xl md:text-6xl">
        Sarah Francis
      </h1>
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/75">
        I build backend systems that hold up under real conditions — conflict-safe bookings,
        automated reminders, scheduling logic that actually runs on time.
      </p>

      <div className="mt-20">
        <PipelineDiagram />
      </div>
    </header>
  )
}
