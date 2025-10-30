import { useState } from 'react'
import founderBackground from '../../photos/Josie with patch forearm.png'

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
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#040b1a] via-[#091a2d] to-[#02060f]">
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src={founderBackground}
          alt="Founder portrait"
          className="h-full max-h-screen w-auto object-contain pointer-events-none select-none"
          style={{ filter: 'blur(0.5px)' }}
        />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(4,11,26,0.85),transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(4,11,26,0.85),transparent_45%)]" />

      <div className="relative flex min-h-screen items-end justify-center px-6 pb-16 sm:pb-20">
        <div className="w-[90%] max-w-[650px] rounded-xl bg-[rgba(20,40,70,0.75)] px-8 py-6 text-white shadow-[0_15px_60px_rgba(0,0,0,0.4)] backdrop-blur-sm sm:w-[80%] sm:px-10 sm:py-7 md:w-full md:px-12 md:py-8">
          <div className="flex flex-col items-center text-center">
            <img src={logoSrc} alt="Pico Molecular logo" className="mb-5 h-auto w-[60px]" />
            <h1 className="text-[24px] font-semibold uppercase tracking-[0.14em] text-white">
              WELCOME TO THE VISION
            </h1>
          </div>

          <div className="mt-[18px] space-y-4 text-[16px] text-white/95 [line-height:1.6]">
            <p>Hey—glad you&apos;re here. This is a peek at what Pico Molecular could grow into.</p>
            <p>Everything inside is aspirational—the science, the partnerships, the wins we&apos;re working toward.</p>
            <p>Step in as a trusted friend, keep the dream close, and enjoy the tour. ✨</p>
          </div>

          <form onSubmit={handleSubmit} className="mt-[25px] flex flex-col gap-3 md:flex-row">
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
              className="h-[52px] w-full rounded-lg border border-white/25 bg-white/10 px-4 text-[16px] text-white placeholder:text-white/60 focus:border-[#4a90e2]/80 focus:outline-none focus:ring-4 focus:ring-[#4a90e2]/30 md:flex-1"
              autoComplete="off"
              autoFocus
            />
            <button
              type="submit"
              className="h-[52px] w-full rounded-lg bg-[#4a90e2] text-[17px] font-semibold text-white transition duration-300 hover:scale-[1.02] hover:bg-[#5aa4ff] focus:outline-none focus:ring-4 focus:ring-[#4a90e2]/40 md:w-auto md:px-6"
            >
              Enter the Vision
            </button>
          </form>
          {error ? (
            <p role="alert" className="mt-2 text-sm font-medium text-red-200">
              {error}
            </p>
          ) : null}

          <p className="mt-5 text-center text-[12px] italic text-white/70">
            *Not FDA-approved. Just a prototype concept.*
          </p>
        </div>
      </div>
    </div>
  )
}

export default SplashGate
