import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Check, Clock } from 'lucide-react'

// Early bird berakhir: 30 November 2026 pukul 12.00 WIB (UTC+7) => 05:00 UTC
const EARLY_BIRD_DEADLINE = new Date('2026-11-30T05:00:00Z').getTime()

const pad = (n) => String(n).padStart(2, '0')

function getRemaining() {
  const distance = Math.max(EARLY_BIRD_DEADLINE - Date.now(), 0)
  return {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((distance % (1000 * 60)) / 1000),
    expired: distance === 0,
  }
}

const features = [
  'Semua fasilitas bootcamp',
  'Modul & materi belajar',
  'Rekaman sesi',
  'Sertifikat kelulusan',
]

function FeatureList({ tone }) {
  const iconClass =
    tone === 'brand'
      ? 'bg-brand-100 text-brand-600'
      : 'bg-gray-200 text-gray-500'
  return (
    <ul className="space-y-3 text-gray-700">
      {features.map((f) => (
        <li key={f} className="flex items-center gap-3">
          <span
            className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${iconClass}`}
          >
            <Check className="h-3 w-3" strokeWidth={3} aria-hidden="true" />
          </span>
          {f}
        </li>
      ))}
    </ul>
  )
}

export default function PricingSection() {
  const reduceMotion = useReducedMotion()
  const [time, setTime] = useState(getRemaining)
  const active = !time.expired

  // Cek tiap detik; berhenti sendiri setelah deadline lewat
  useEffect(() => {
    const timer = setInterval(() => {
      const next = getRemaining()
      setTime(next)
      if (next.expired) clearInterval(timer)
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const units = [
    { label: 'Hari', value: time.days },
    { label: 'Jam', value: time.hours },
    { label: 'Menit', value: time.minutes },
    { label: 'Detik', value: time.seconds },
  ]

  return (
    <section id="harga" className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-5">
            {active
              ? 'Daftar lebih awal, bayar lebih hemat'
              : 'Pilih paket yang tepat untuk kamu'}
          </h2>
          <p className="text-gray-600 text-lg">
            Fasilitas kedua paket sama persis. Bedanya hanya di harga dan waktu
            pendaftaran.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10 max-w-4xl mx-auto items-stretch">
          {/* Reguler */}
          <div
            className={
              'flex flex-col rounded-3xl p-7 sm:p-9 ' +
              (active
                ? 'border border-gray-200 bg-gray-50'
                : 'border-2 border-brand-600 bg-brand-50')
            }
          >
            <div>
              <h3 className="text-xl font-bold text-gray-900">Reguler</h3>
              <p className="mt-1 text-sm text-gray-500">
                Pendaftaran normal, 30 Nov (12.00 WIB) - 14 Des
              </p>
            </div>

            <div className="mt-6 mb-8 flex items-baseline gap-1.5">
              <span className="text-lg font-semibold text-gray-500">Rp</span>
              <span className="text-4xl sm:text-5xl font-bold text-gray-900 tabular-nums">
                800.000
              </span>
            </div>

            <FeatureList tone={active ? 'gray' : 'brand'} />

            <a
              href="https://bit.ly/PendaftaranBootcamp2026SPIMalang"
              className={
                'mt-auto flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 ' +
                (active
                  ? 'mt-8 bg-white text-gray-700 ring-1 ring-gray-300 hover:bg-gray-100'
                  : 'mt-8 bg-brand-600 text-white shadow-xl shadow-brand-600/30 hover:bg-brand-700')
              }
            >
              Pilih paket reguler
              {!active && <ArrowRight className="w-5 h-5" aria-hidden="true" />}
            </a>
          </div>

          {/* Early Bird: tampil duluan di ponsel */}
          <div className="relative order-first md:order-none">
            {active && (
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-3 rounded-[2rem] bg-gradient-to-r from-brand-500 via-brand-cyan to-brand-600 opacity-30 blur-2xl bg-[length:200%_200%] animate-gradient-shift motion-reduce:animate-none"
              />
            )}

            {/* Border gradasi bergerak saat aktif */}
            <div
              className={
                'relative h-full rounded-3xl p-[2px] ' +
                (active
                  ? 'bg-gradient-to-r from-brand-500 via-brand-cyan to-brand-600 bg-[length:200%_200%] animate-gradient-shift motion-reduce:animate-none'
                  : 'bg-gray-200')
              }
            >
              <div
                className={
                  'flex h-full flex-col rounded-[calc(1.5rem-2px)] bg-white p-7 sm:p-9 ' +
                  (active ? '' : 'opacity-70 grayscale')
                }
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Early Bird
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      23 Nov - 30 Nov (12.00 WIB)
                    </p>
                  </div>
                  <span
                    className={
                      'shrink-0 rounded-full px-3 py-1 text-sm font-semibold ' +
                      (active
                        ? 'bg-amber-100 text-amber-800'
                        : 'bg-gray-200 text-gray-600')
                    }
                  >
                    {active ? 'Hemat Rp 100.000' : 'Sudah berakhir'}
                  </span>
                </div>

                <div className="mt-6 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <div className="flex items-baseline gap-1.5">
                    <span
                      className={
                        'text-lg font-semibold ' +
                        (active ? 'text-brand-600' : 'text-gray-500')
                      }
                    >
                      Rp
                    </span>
                    <span
                      className={
                        'text-4xl sm:text-5xl font-bold tabular-nums ' +
                        (active ? 'text-brand-700' : 'text-gray-500')
                      }
                    >
                      700.000
                    </span>
                  </div>
                  <span className="text-lg text-gray-400 line-through tabular-nums">
                    Rp 800.000
                  </span>
                </div>

                {/* Hitung mundur */}
                {active && (
                  <div
                    role="timer"
                    aria-live="off"
                    aria-label="Hitung mundur berakhirnya harga early bird"
                    className="mt-6 rounded-2xl bg-brand-50 p-4"
                  >
                    <p className="flex items-center gap-2 text-sm font-medium text-brand-700 mb-3">
                      <Clock className="w-4 h-4" aria-hidden="true" />
                      Harga ini berakhir dalam
                    </p>
                    <div className="grid grid-cols-4 gap-2">
                      {units.map(({ label, value }) => (
                        <div
                          key={label}
                          className="flex flex-col items-center rounded-xl bg-white py-2.5 ring-1 ring-brand-100"
                        >
                          <span className="text-xl sm:text-2xl font-bold leading-none text-gray-900 tabular-nums">
                            {pad(value)}
                          </span>
                          <span className="mt-1.5 text-xs text-gray-500">
                            {label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-8">
                  <FeatureList tone="brand" />
                </div>

                {active ? (
                  <a
                    href="https://bit.ly/PendaftaranBootcamp2026SPIMalang"
                    className="group relative mt-8 flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-brand-600 px-6 py-4 text-base font-semibold text-white shadow-xl shadow-brand-600/30 transition-colors hover:bg-brand-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
                  >
                    {!reduceMotion && (
                      <motion.span
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/35 to-transparent"
                        initial={{ x: '-150%' }}
                        animate={{ x: '450%' }}
                        transition={{
                          duration: 1.4,
                          ease: 'easeInOut',
                          repeat: Infinity,
                          repeatDelay: 1.8,
                        }}
                      />
                    )}
                    <span className="relative">Ambil harga early bird</span>
                    <ArrowRight
                      className="relative w-5 h-5 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </a>
                ) : (
                  <button
                    type="button"
                    disabled
                    className="mt-8 w-full cursor-not-allowed rounded-full bg-gray-200 px-6 py-4 font-semibold text-gray-500"
                  >
                    Early bird sudah berakhir
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <p className="mt-12 text-center text-gray-600">
          Tersedia pembayaran cicilan. Konsultasi dengan admin kami untuk info
          lebih lanjut.
        </p>
      </div>
    </section>
  )
}