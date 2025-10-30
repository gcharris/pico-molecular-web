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
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-r from-[#041020] via-[#0a1b32] to-[#041020]">
      <div className="relative mx-auto flex min-h-screen w-full max-w-[1400px] flex-col gap-10 px-6 py-12 sm:px-10 lg:flex-row lg:items-center lg:justify-center lg:gap-16">
        <div className="flex w-full items-center justify-center lg:w-[45%]">
          <div className="relative flex h-full w-full max-w-[520px] items-center justify-center overflow-hidden rounded-[32px] bg-[#061226] p-6 shadow-[0_35px_90px_rgba(5,15,35,0.55)] lg:h-[82vh]">
            <img
              src={founderBackground}
              alt="Founder portrait"
              className="pointer-events-none h-full max-h-[75vh] w-auto select-none object-contain"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#041020]/55 via-transparent to-[#041020]/5" />
          </div>
        </div>

        <div className="flex w-full items-center justify-center pb-16 lg:w-[55%] lg:justify-start lg:pb-0">
          <div className="w-full max-w-[520px] rounded-2xl bg-[rgba(20,40,70,0.82)] px-12 py-14 text-white shadow-[0_28px_80px_rgba(0,0,0,0.45)] backdrop-blur">
            <div className="flex flex-col items-center text-center">
              <img src={logoSrc} alt="Pico Molecular logo" className="mb-6 h-auto w-[80px]" />
              <h1 className="text-[28px] font-semibold uppercase tracking-[0.14em] text-white">
                WELCOME TO THE VISION
              </h1>
            </div>

            <div className="mt-6 space-y-4 text-[16px] text-white/95 [line-height:1.6]">
              <p>Hey—glad you&apos;re here. This is a peek at what Pico Molecular could grow into.</p>
              <p>Everything inside is aspirational—the science, the partnerships, the wins we&apos;re working toward.</p>
              <p>Step in as a trusted friend, keep the dream close, and enjoy the tour. ✨</p>
            </div>

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
                className="h-[56px] w-full rounded-lg border border-white/25 bg-white/10 px-5 text-[16px] text-white placeholder:text-white/65 focus:border-[#4a90e2]/80 focus:outline-none focus:ring-4 focus:ring-[#4a90e2]/30 sm:flex-1"
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

      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#041020]/60 via-transparent to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#041020]/60 via-transparent to-transparent" />

      <div className="lg:hidden">
        <div className="absolute inset-0 -z-10 opacity-80">
          <div className="h-[60vh] w-full bg-cover bg-center" style={{ backgroundImage: `url(${founderBackground})` }} />
        </div>
      </div>
    </div>
  )
}

export default SplashGate
