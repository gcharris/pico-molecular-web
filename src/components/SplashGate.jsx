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
    <div className="relative min-h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${founderBackground})`,
          filter: 'blur(3px)',
          transform: 'scale(1.05)',
        }}
      />
      <div className="absolute inset-0 bg-[rgba(10,30,50,0.5)]" />

      <div className="relative flex min-h-screen items-center justify-center px-6 py-16">
        <div className="w-full max-w-[450px] rounded-2xl bg-[rgba(20,40,70,0.85)] p-8 text-white shadow-[0_10px_50px_rgba(0,0,0,0.3)] backdrop-blur sm:p-10 md:p-12">
          <div className="flex flex-col items-center text-center">
            <img src={logoSrc} alt="Pico Molecular logo" className="mb-6 h-auto w-24" />
            <h1 className="text-[28px] font-bold uppercase tracking-[0.12em] text-white">
              WELCOME TO THE VISION
            </h1>
          </div>

          <div className="mt-8 space-y-5 text-[17px] text-white/95 [line-height:1.7]">
            <p>
              Hey! You&apos;ve been invited to explore what Pico Molecular could become—a vision site, not reality (yet).
            </p>
            <p>
              Everything here is aspirational: the science, partnerships, advisors, and performance claims. By entering, you agree this is just for sharing the dream with close friends. Keep it between us. ✨
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-10 space-y-4">
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
              className="h-[55px] w-full rounded-lg border border-white/25 bg-white/10 px-5 text-[16px] text-white placeholder:text-white/60 focus:border-[#4a90e2]/80 focus:outline-none focus:ring-4 focus:ring-[#4a90e2]/30"
              autoComplete="off"
              autoFocus
            />
            <button
              type="submit"
              className="h-[55px] w-full rounded-lg bg-[#4a90e2] text-[17px] font-semibold text-white transition duration-300 hover:scale-[1.02] hover:bg-[#5aa4ff] focus:outline-none focus:ring-4 focus:ring-[#4a90e2]/40"
            >
              Enter the Vision
            </button>
            {error ? (
              <p role="alert" className="text-sm font-medium text-red-200">
                {error}
              </p>
            ) : null}
          </form>

          <p className="mt-6 text-center text-[13px] italic text-white/70">
            *Not FDA-approved. Just a prototype concept.*
          </p>
        </div>
      </div>
    </div>
  )
}

export default SplashGate
