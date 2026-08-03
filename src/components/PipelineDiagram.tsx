import { useEffect, useState } from 'react'

const STAGES = [
  {
    label: 'Booking created',
    detail: 'POST /bookings — row lock acquired on the slot',
  },
  {
    label: 'Conflict checked',
    detail: 'Request serializes on the lock — clean 201 or 409',
  },
  {
    label: 'Reminder sent',
    detail: 'Cron job emails the customer once, never twice',
  },
]

const INTERVAL_MS = 2400

export function PipelineDiagram() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % STAGES.length)
    }, INTERVAL_MS)
    return () => window.clearInterval(id)
  }, [])

  return (
    <div className="w-full max-w-md">
      <p className="mb-8 font-mono text-[11px] uppercase tracking-[0.2em] text-paper/40">
        live automation flow
      </p>

      <div className="relative h-4">
        <div className="absolute left-[16.6667%] right-[16.6667%] top-1/2 h-px -translate-y-1/2 bg-paper/15" />
        <div className="absolute inset-0 flex">
          {STAGES.map((stage, i) => (
            <div key={stage.label} className="flex flex-1 items-center justify-center">
              <span className="relative flex h-4 w-4 items-center justify-center">
                {i === active && (
                  <span className="absolute h-full w-full rounded-full bg-accent/30 animate-pulse-node" />
                )}
                <span
                  className={[
                    'h-2 w-2 rounded-full border transition-colors duration-500',
                    i === active
                      ? 'border-accent bg-accent'
                      : i < active
                        ? 'border-paper/40 bg-paper/40'
                        : 'border-paper/25 bg-transparent',
                  ].join(' ')}
                />
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex">
        {STAGES.map((stage, i) => (
          <div key={stage.label} className="flex-1 px-1 text-center">
            <span
              className={[
                'font-mono text-[11px] uppercase tracking-wide transition-colors duration-500',
                i === active ? 'text-accent' : 'text-paper/55',
              ].join(' ')}
            >
              {stage.label}
            </span>
          </div>
        ))}
      </div>

      <p className="mt-6 h-4 font-mono text-xs text-paper/45" aria-live="polite">
        {STAGES[active].detail}
      </p>
    </div>
  )
}
