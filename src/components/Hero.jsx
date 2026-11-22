import { useEffect, useMemo, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  MoveRight,
  BookOpen,
  CalendarDays,
  MapPin,
  Users,
  Check,
  Sparkles,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const infos = [
  { icon: CalendarDays, text: '21 Des 2026 - 8 Jan 2027' },
  { icon: MapPin, text: 'Online & Offline' },
  { icon: Users, text: 'Kuota terbatas' },
]

export default function Hero() {
  const [titleNumber, setTitleNumber] = useState(0)
  const reduceMotion = useReducedMotion()
  const titles = useMemo(
    () => ['Bisa Coding', 'Portofolio Baru', 'Skill Baru'],
    [],
  )

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTitleNumber((n) => (n === titles.length - 1 ? 0 : n + 1))
    }, 2000)
    return () => clearTimeout(timeoutId)
  }, [titleNumber, titles])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="relative w-full overflow-hidden">
      {/* Gradasi tipis di belakang */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 right-[-10%] h-[28rem] w-[28rem] sm:h-[36rem] sm:w-[36rem] rounded-full bg-gradient-to-br from-brand-200 via-brand-400 to-brand-cyan opacity-25 blur-3xl bg-[length:200%_200%] animate-gradient-shift motion-reduce:animate-none" />
        <div className="absolute top-1/2 left-[-15%] h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-gradient-to-tr from-brand-cyan via-brand-200 to-brand-100 opacity-30 blur-3xl bg-[length:200%_200%] animate-gradient-shift motion-reduce:animate-none" />
        {/* Pola titik halus, memudar ke bawah */}
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgb(148 163 184 / 0.45) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
            WebkitMaskImage:
              'linear-gradient(to bottom, black 0%, transparent 75%)',
            maskImage: 'linear-gradient(to bottom, black 0%, transparent 75%)',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Padding atas besar agar tidak mepet navbar fixed (h-16 / md:h-20) */}
        <div className="grid lg:grid-cols-12 items-center gap-14 lg:gap-8 pt-28 pb-16 sm:pt-36 sm:pb-20 lg:pt-44 lg:pb-28">
          {/* Kiri: pesan utama */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            <Button
              variant="secondary"
              size="sm"
              className="gap-3 rounded-full px-4 mb-7"
              onClick={() => scrollTo('daftar')}
            >
              SPI Holiday Bootcamp 2026 <MoveRight className="w-4 h-4" />
            </Button>

            {/* Ukuran fluid: besar di ponsel, tetap muat sampai layar 320px */}
            <h1 className="w-full text-[length:clamp(2.75rem,13vw,3.75rem)] sm:text-6xl xl:text-7xl font-bold tracking-tighter leading-[1.08] grid grid-cols-1 justify-items-center lg:justify-items-start">
              <span className="bg-gradient-to-r from-brand-900 via-brand-600 to-brand-cyan bg-[length:200%_200%] animate-gradient-shift motion-reduce:animate-none bg-clip-text text-transparent">
                Tahun Baru,
              </span>
              <span className="relative grid w-full place-items-center lg:place-items-start hero-text-mask pb-2 pt-1">
                {titles.map((title, index) => (
                  <motion.span
                    key={title}
                    className="col-start-1 row-start-1 font-bold bg-gradient-to-r from-brand-900 via-brand-600 to-brand-cyan bg-[length:200%_200%] animate-gradient-shift motion-reduce:animate-none bg-clip-text text-transparent whitespace-nowrap"
                    initial={{ opacity: 0, y: -100 }}
                    transition={
                      reduceMotion
                        ? { duration: 0 }
                        : { type: 'spring', stiffness: 50 }
                    }
                    animate={
                      titleNumber === index
                        ? { y: 0, opacity: 1 }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl leading-relaxed text-muted-foreground max-w-xl">
              Belajar Python dan AI langsung praktik bareng mentor
              berpengalaman. Tanpa perlu background IT, pulang bawa portofolio
              nyata.
            </p>

            {/* CTA: besar, jelas terpisah dari teks */}
            <div className="mt-10 flex w-full flex-col sm:w-auto sm:flex-row gap-4">
              {/* Tombol utama: gradasi bergerak, glow, kilau */}
              <div className="relative w-full sm:w-auto">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-1 rounded-full bg-gradient-to-r from-brand-600 to-brand-cyan opacity-50 blur-lg motion-safe:animate-pulse"
                />
                <button
                  type="button"
                  onClick={() => scrollTo('daftar')}
                  className="group relative flex min-h-[3.75rem] w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-brand-700 via-brand-600 to-brand-500 bg-[length:200%_200%] px-8 text-lg font-bold text-white shadow-xl shadow-brand-600/40 transition-all animate-gradient-shift motion-reduce:animate-none hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-brand-600/50 active:translate-y-0 active:scale-[0.98] focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-300 sm:w-auto sm:px-10"
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
                        repeatDelay: 2,
                      }}
                    />
                  )}
                  <span className="relative">Amankan Kursimu Sekarang</span>
                  <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-white/20 transition-transform group-hover:translate-x-1">
                    <MoveRight className="h-5 w-5" aria-hidden="true" />
                  </span>
                </button>
              </div>

              {/* Tombol sekunder: solid putih dengan border tebal */}
              <button
                type="button"
                onClick={() => scrollTo('kurikulum')}
                className="group flex min-h-[3.75rem] w-full items-center justify-center gap-3 rounded-full border-2 border-brand-200 bg-white px-8 text-lg font-semibold text-brand-700 shadow-md shadow-brand-600/10 transition-all hover:-translate-y-0.5 hover:border-brand-400 hover:bg-brand-50 active:translate-y-0 active:scale-[0.98] focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-200 sm:w-auto"
              >
                <BookOpen className="h-5 w-5" aria-hidden="true" />
                Lihat Kurikulum
              </button>
            </div>

            {/* Urgensi tepat di bawah CTA */}
            <p className="mt-5 flex items-center gap-2.5 text-sm sm:text-base text-muted-foreground">
              <span className="relative flex h-2.5 w-2.5 shrink-0" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75 motion-safe:animate-ping" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-amber-500" />
              </span>
              Harga early bird berakhir 30 Nov 2026. Hemat hingga 12,5%.
            </p>

            {/* Info singkat */}
            <ul className="mt-10 flex flex-wrap justify-center lg:justify-start gap-2.5">
              {infos.map(({ icon: Icon, text }) => (
                <li
                  key={text}
                  className="flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 px-4 py-2 text-sm text-gray-700 backdrop-blur"
                >
                  <Icon className="w-4 h-4 text-primary" aria-hidden="true" />
                  {text}
                </li>
              ))}
            </ul>
          </div>

          {/* Kanan: kartu kode sebagai visual utama */}
          <motion.div
            className="lg:col-span-5 relative mx-auto w-full max-w-md lg:max-w-none"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="rounded-2xl bg-gray-900 shadow-2xl shadow-brand-600/20 ring-1 ring-gray-900/10">
              <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="ml-3 text-xs text-gray-400">portofolio.py</span>
              </div>

              <pre className="overflow-x-auto px-4 py-5 sm:px-6 text-xs sm:text-sm leading-7 font-mono text-gray-200">
                <code>
                  <span className="text-gray-500"># 21 Des - 8 Jan</span>
                  {'\n'}
                  <span className="text-violet-400">def</span>{' '}
                  <span className="text-sky-300">pulang_liburan</span>(kamu):
                  {'\n'}
                  {'    '}chatbot = kamu.<span className="text-sky-300">bangun</span>(
                  <span className="text-emerald-300">"AI"</span>)
                  {'\n'}
                  {'    '}kamu.<span className="text-sky-300">pajang</span>(chatbot)
                  {'\n'}
                  {'    '}
                  <span className="text-violet-400">return</span>{' '}
                  <span className="text-emerald-300">"Portofolio siap"</span>
                </code>
              </pre>

              <div className="flex items-center gap-2 border-t border-white/10 px-4 py-3 sm:px-6 text-xs sm:text-sm font-mono text-emerald-300">
                <Check className="w-4 h-4" aria-hidden="true" />
                Portofolio siap
              </div>
            </div>

            {/* Chip melayang */}
            <div className="absolute -top-4 right-2 sm:-right-4 flex items-center gap-2 rounded-full bg-white px-3.5 py-2 text-sm font-semibold text-gray-900 shadow-lg ring-1 ring-gray-200">
              <Sparkles className="w-4 h-4 text-brand-600" aria-hidden="true" />
              Python &amp; AI
            </div>
            <div className="absolute -bottom-5 left-2 sm:-left-5 flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm shadow-lg ring-1 ring-gray-200">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                <Check className="w-3.5 h-3.5" aria-hidden="true" />
              </span>
              <span className="font-medium text-gray-900">
                Tanpa background IT
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}