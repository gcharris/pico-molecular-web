import { useState } from 'react'

const PASSWORD = 'RithmVision2025'

function SplashGate({ onSuccess, logoSrc }) {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    if (password.trim() === PASSWORD) {
      setError('')
      setPassword('')
      if (typeof onSuccess === 'function') {
        onSuccess()
      }
    } else {
      setError('The password you entered is incorrect. Please try again.')
    }
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#06122a] via-[#0d1f3a] to-[#050810] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.28),transparent_55%)] opacity-80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(56,189,248,0.2),transparent_65%)] opacity-70" />
      <div className="relative flex min-h-screen items-center justify-center px-6 py-12 sm:px-10">
        <div className="w-full max-w-[700px] space-y-12 rounded-[40px] border border-white/12 bg-white/12 p-12 text-white shadow-[0_40px_120px_rgba(9,22,45,0.45)] backdrop-blur-xl">
          <div className="flex flex-col items-center text-center">
            <img src={logoSrc} alt="Pico Molecular logo" className="h-16 w-auto" />
            <h1 className="mt-8 font-display text-3xl uppercase tracking-[0.45em] text-white/95 sm:text-4xl">
              WELCOME TO THE VISION
            </h1>
            <div className="mt-8 h-px w-24 bg-white/20" />
          </div>

          <div className="space-y-8 text-[16px] text-white/90 [line-height:1.75]">
            <p>
              "You've been invited to explore a bold idea—a glimpse into what Pico Molecular could become.
            </p>

            <p>
              What you'll see inside is a curated concept, a dream made tangible. The science, technology, advisors, partnerships, performance metrics, clinical data, and testimonials presented are part of an aspirational narrative—not established reality.
            </p>

            <div className="space-y-5">
              <div className="h-px w-full bg-white/15" />
              <div className="space-y-4">
                <p className="font-semibold text-white/95">This site does not represent:</p>
                <ul className="space-y-3 pl-1">
                  {[
                    'An FDA-approved or cleared medical device',
                    'Verified scientific claims or clinical trial results',
                    'Actual partnerships, customers, or advisory relationships',
                    'An offer or solicitation of investment or securities',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-white/85">
                      <span className="mt-1 text-lg text-brand-glow">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-5">
              <div className="h-px w-full bg-white/15" />
              <div className="space-y-4">
                <p className="font-semibold text-white/95">By entering the password provided by the founder, you acknowledge that:</p>
                <ul className="space-y-3 pl-1">
                  {[
                    'This is a vision showcase—a conceptual prototype',
                    'All content is speculative and for private evaluation only',
                    'You will not redistribute, publicize, or rely upon this as factual',
                    'Your access is limited to sharing in the strategic vision',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-white/85">
                      <span className="mt-1 text-lg text-brand-primary">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-5">
              <div className="h-px w-full bg-white/15" />
              <p>Enter the password to step into the future we're building."</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-3">
              <input
                type="password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value)
                  if (error) {
                    setError('')
                  }
                }}
                placeholder="Enter Password"
                className="w-full h-[56px] rounded-full border border-white/18 bg-white/12 px-6 text-[16px] text-white placeholder:text-white/55 focus:border-brand-primary/80 focus:outline-none focus:ring-4 focus:ring-brand-primary/30"
                autoComplete="off"
                autoFocus
              />
              {error ? (
                <p role="alert" className="text-sm font-medium text-red-300">
                  {error}
                </p>
              ) : null}
            </div>
            <button
              type="submit"
              className="inline-flex h-[58px] w-full items-center justify-center rounded-full bg-brand-primary px-6 text-lg font-semibold uppercase tracking-[0.3em] text-white shadow-[0_0_26px_rgba(59,130,246,0.55)] transition-transform transition-shadow duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-[0_0_36px_rgba(59,130,246,0.8)] focus:outline-none focus:ring-4 focus:ring-brand-primary/30"
            >
              ENTER THE VISION
            </button>
          </form>

          <p className="pt-4 text-center text-[12px] uppercase tracking-[0.35em] text-white/50">
            © 2025 Pico Molecular | Confidential Vision Document
          </p>
        </div>
      </div>
    </div>
  )
}

export default SplashGate
