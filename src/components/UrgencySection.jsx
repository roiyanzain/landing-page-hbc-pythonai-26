import { useState, useEffect } from 'react'
import { Clock, MoveRight } from 'lucide-react'

// Deadline: 19 Desember 2026 pukul 18.00 WIB (UTC+7) => 11:00 UTC
const DEADLINE = new Date('2026-12-19T11:00:00Z').getTime()

function getTimeLeft() {
  const distance = Math.max(DEADLINE - Date.now(), 0)
  return {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((distance % (1000 * 60)) / 1000),
    expired: distance === 0,
  }
}

const pad = (n) => String(n).padStart(2, '0')

export default function UrgencySection() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft)

  useEffect(() => {
    const timer = setInterval(() => {
      const next = getTimeLeft()
      setTimeLeft(next)
      if (next.expired) clearInterval(timer)
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const units = [
    { label: 'Hari', value: timeLeft.days },
    { label: 'Jam', value: timeLeft.hours },
    { label: 'Menit', value: timeLeft.minutes },
    { label: 'Detik', value: timeLeft.seconds, highlight: true },
  ]

  return (
    <section
      id="urgensi"
      className="relative isolate overflow-hidden bg-brand-600 py-16 md:py-24 text-white"
    >
      {/* Dekorasi latar */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-32 h-[32rem] w-[32rem] rounded-full bg-brand-400/40 blur-[120px]" />
        <div className="absolute -bottom-48 -left-32 h-[28rem] w-[28rem] rounded-full bg-brand-900/40 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgb(255 255 255 / 0.35) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
            WebkitMaskImage:
              'linear-gradient(to right, black 0%, transparent 70%)',
            maskImage: 'linear-gradient(to right, black 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 items-center gap-10 lg:gap-16">
          {/* Kiri: pesan */}
          <div className="text-center lg:text-left">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-sm font-medium text-brand-100 ring-1 ring-white/15 mb-5">
              <Clock className="w-4 h-4" aria-hidden="true" />
              Kursi dan waktu terbatas
            </p>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Pendaftaran ditutup pada
            </h2>
            <p className="mt-3 text-2xl md:text-3xl font-semibold text-white/90">
              19 Desember 2026
            </p>
            <p className="mt-2 text-brand-100 text-base md:text-lg">
              Pukul 18.00 WIB, atau saat kuota penuh.
            </p>
          </div>

          {/* Kanan: countdown + CTA */}
          <div>
            <div
              role="timer"
              aria-live="off"
              aria-label="Hitung mundur penutupan pendaftaran"
              className="grid grid-cols-4 gap-2.5 sm:gap-4"
            >
              {units.map(({ label, value, highlight }) => (
                <div
                  key={label}
                  className={
                    'flex flex-col items-center justify-center rounded-2xl py-4 sm:py-7 ring-1 ' +
                    (highlight
                      ? 'bg-white text-brand-600 ring-white'
                      : 'bg-white/10 text-white ring-white/15 backdrop-blur-sm')
                  }
                >
                  <span className="text-3xl sm:text-5xl font-bold leading-none tabular-nums">
                    {pad(value)}
                  </span>
                  <span
                    className={
                      'mt-2 sm:mt-3 text-xs sm:text-sm font-medium ' +
                      (highlight ? 'text-brand-700' : 'text-brand-100')
                    }
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="https://bit.ly/PendaftaranBootcamp2026SPIMalang"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-semibold text-brand-700 shadow-xl shadow-brand-900/30 transition-colors hover:bg-brand-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-600"
            >
              Daftar sebelum terlambat
              <MoveRight className="w-5 h-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}