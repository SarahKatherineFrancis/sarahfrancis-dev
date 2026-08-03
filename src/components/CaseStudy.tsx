const TECH = [
  'Node.js',
  'Express',
  'PostgreSQL',
  'JWT',
  'node-cron',
  'Nodemailer',
  'Jest',
  'Supertest',
]

const HIGHLIGHTS = [
  {
    title: 'Conflict-safe by construction',
    detail:
      'Booking writes take a row-level lock on the slot, so two simultaneous requests serialize — exactly one gets a 201, the other a clean 409. No polling, no retries, no double-bookings.',
  },
  {
    title: 'Idempotent slot generation',
    detail:
      'Providers define recurring availability once ("Mon–Fri, 9–5, 30-minute slots"). A unique constraint with ON CONFLICT DO NOTHING lets the generator re-run safely without duplicating slots.',
  },
  {
    title: 'Reminders that fire exactly once',
    detail:
      'A cron job checks for upcoming appointments and emails customers automatically, with guarantees against sending the same reminder twice.',
  },
  {
    title: 'Cancellation-aware scheduling',
    detail:
      'A partial unique index enforces one active booking per slot while still allowing rebooking once a prior booking is cancelled.',
  },
]

export function CaseStudy() {
  return (
    <section id="work" className="mx-auto max-w-5xl px-6 py-24 sm:px-8">
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">case study</p>
      <h2 className="mt-4 font-heading text-3xl font-medium sm:text-4xl">
        Booking Scheduler API
      </h2>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper/75">
        A scheduling backend for service providers: customers book open slots, providers define
        recurring availability instead of creating time slots by hand, and the system prevents
        double-bookings and forgotten appointments without manual intervention.
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        {TECH.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-paper/15 px-3 py-1 font-mono text-xs text-paper/70"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-16 grid gap-10 sm:grid-cols-2">
        {HIGHLIGHTS.map((item) => (
          <div key={item.title}>
            <h3 className="font-heading text-lg font-medium text-paper">{item.title}</h3>
            <p className="mt-2 text-base leading-relaxed text-paper/65">{item.detail}</p>
          </div>
        ))}
      </div>

      <a
        href="https://github.com/SarahKatherineFrancis/booking-scheduler-api"
        target="_blank"
        rel="noreferrer"
        className="mt-16 inline-flex items-center gap-2 font-mono text-sm text-accent underline-offset-4 hover:underline"
      >
        View source on GitHub →
      </a>
    </section>
  )
}
