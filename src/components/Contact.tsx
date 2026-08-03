const LINKS = [
  {
    label: 'Email',
    href: 'mailto:sarah.katherinefrancis@gmail.com',
    display: 'sarah.katherinefrancis@gmail.com',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/SarahKatherineFrancis',
    display: 'github.com/SarahKatherineFrancis',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sarah-kfrancis/',
    display: 'linkedin.com/in/sarah-kfrancis',
  },
]

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-24 sm:px-8">
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">contact</p>
      <h2 className="mt-4 font-heading text-3xl font-medium sm:text-4xl">Get in touch</h2>

      <div className="mt-10 flex flex-col gap-4">
        {LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.label === 'Email' ? undefined : '_blank'}
            rel="noreferrer"
            className="group flex items-baseline gap-4"
          >
            <span className="w-16 shrink-0 font-mono text-xs uppercase tracking-wide text-paper/40">
              {link.label}
            </span>
            <span className="text-lg text-paper/85 transition-colors group-hover:text-accent">
              {link.display}
            </span>
          </a>
        ))}
      </div>

      <p className="mt-24 font-mono text-xs text-paper/30">
        Sarah Francis — built with React, Vite &amp; Tailwind
      </p>
    </section>
  )
}
