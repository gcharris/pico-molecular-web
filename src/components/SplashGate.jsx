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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.25),transparent_55%)] opacity-80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(56,189,248,0.18),transparent_60%)] opacity-60" />
      <div className="relative flex min-h-screen items-center justify-center px-6 py-12 sm:px-10">
        <div className="w-full max-w-3xl space-y-10 rounded-[36px] border border-white/10 bg-white/10 p-10 text-white shadow-2xl backdrop-blur">
          <div className="flex flex-col items-center gap-6 text-center">
            <img src={logoSrc} alt="Pico Molecular logo" className="h-16 w-auto" />
            <h1 className="font-display text-3xl uppercase tracking-[0.45em] text-white/90 sm:text-4xl">WELCOME TO THE VISION</h1>
          </div>

          <div className="space-y-6 text-sm leading-relaxed text-white/80">
            <p>
              "You've been invited to explore a bold idea—a glimpse into what Pico Molecular could become.
            </p>
            <p>
              What you'll see inside is a curated concept, a dream made tangible. The science, technology, advisors, partnerships, performance metrics, clinical data, and testimonials presented are part of an aspirational narrative—not established reality.
            </p>
            <p>This site does not represent:</p>
            <ul className="space-y-2 pl-2">
              <li>• An FDA-approved or cleared medical device</li>
              <li>• Verified scientific claims or clinical trial results</li>
              <li>• Actual partnerships, customers, or advisory relationships</li>
              <li>• An offer or solicitation of investment or securities</li>
            </ul>
            <p>By entering the password provided by the founder, you acknowledge that:</p>
            <ul className="space-y-2 pl-2">
              <li>✓ This is a vision showcase—a conceptual prototype</li>
              <li>✓ All content is speculative and for private evaluation only</li>
              <li>✓ You will not redistribute, publicize, or rely upon this as factual</li>
              <li>✓ Your access is limited to sharing in the strategic vision</li>
            </ul>
            <p>Enter the password to step into the future we're building."</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
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
                className="w-full rounded-full border border-white/20 bg-white/10 px-6 py-3 text-base text-white placeholder:text-white/50 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/60"
                autoComplete="off"
                autoFocus
              />
              {error ? (
                <p role="alert" className="text-sm font-medium text-red-400">
                  {error}
                </p>
              ) : null}
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(59,130,246,0.45)] transition hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(59,130,246,0.65)] focus:outline-none focus:ring-2 focus:ring-brand-primary/80 focus:ring-offset-2 focus:ring-offset-transparent"
            >
              ENTER THE VISION
            </button>
          </form>

          <p className="pt-4 text-center text-xs uppercase tracking-[0.3em] text-white/50">
            © 2025 Pico Molecular | Confidential Vision Document
          </p>
        </div>
      </div>
    </div>
  )
}

export default SplashGate
