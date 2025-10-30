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
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#faf7f2] via-[#f7efea] to-[#fdf6f2]">
      <div className="relative mx-auto flex min-h-screen w-full max-w-[1400px] flex-col items-center justify-center gap-10 px-6 py-12 sm:px-10 lg:flex-row lg:gap-20">
        <div className="flex w-full items-stretch justify-center lg:w-[45%]">
          <div className="relative flex h-full w-full max-w-[540px] items-center justify-center overflow-hidden rounded-[20px] bg-white shadow-[0_32px_90px_rgba(68,54,45,0.18)]">
            <img
              src={founderBackground}
              alt="Founder portrait"
              className="pointer-events-none h-full max-h-[78vh] w-auto select-none object-contain"
            />
          </div>
        </div>

        <div className="flex w-full items-stretch justify-center lg:w-[55%]">
          <div className="flex h-full w-full max-w-[520px] flex-col justify-between rounded-[20px] bg-[rgba(42,52,60,0.82)] px-12 py-14 text-white shadow-[0_30px_80px_rgba(42,52,60,0.32)] backdrop-blur">
            <div>
              <div className="flex flex-col items-center text-center">
                <img src={logoSrc} alt="Pico Molecular logo" className="mb-6 h-auto w-[80px]" />
                <h1 className="text-[28px] font-semibold uppercase tracking-[0.16em] text-white">
                  WELCOME TO THE VISION
                </h1>
              </div>

              <div className="mt-6 space-y-4 text-[16px] text-white/95 [line-height:1.6]">
                <p>Hey—glad you&apos;re here. This is a peek at what Pico Molecular could grow into.</p>
                <p>Everything inside is aspirational—the science, the partnerships, the wins we&apos;re working toward.</p>
                <p>Step in as a trusted friend, keep the dream close, and enjoy the tour. ✨</p>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-4 sm:flex-row">
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
                  className="h-[56px] w-full rounded-lg border border-white/30 bg-white/12 px-5 text-[16px] text-white placeholder:text-white/65 focus:border-[#4a90e2]/80 focus:outline-none focus:ring-4 focus:ring-[#4a90e2]/30 sm:flex-1"
                  autoComplete="off"
                  autoFocus
                />
                <button
                  type="submit"
                  className="h-[56px] w-full rounded-lg bg-[#4a90e2] text-[17px] font-semibold text-white transition duration-300 hover:scale-[1.02] hover:bg-[#5aa4ff] focus:outline-none focus:ring-4 focus:ring-[#4a90e2]/35 sm:w-auto sm:px-6"
                >
                  Enter the Vision
                </button>
              </form>

              {error ? (
                <p role="alert" className="mt-3 text-sm font-medium text-red-200">
                  {error}
                </p>
              ) : null}

              <p className="mt-6 text-center text-[12px] italic text-white/70">
                *Not FDA-approved. Just a prototype concept.*
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(236,228,217,0.55),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(236,228,217,0.55),transparent_60%)]" />

      <div className="lg:hidden">
        <div className="absolute inset-0 -z-10 opacity-85">
          <div className="h-[65vh] w-full bg-cover bg-center" style={{ backgroundImage: `url(${founderBackground})` }} />
        </div>
      </div>
    </div>
  )
}

export default SplashGate
