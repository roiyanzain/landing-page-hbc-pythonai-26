import { ArrowRight, MessageCircle } from 'lucide-react'

export default function CTASection() {
  return (
    <section
      id="daftar"
      className="relative isolate overflow-hidden bg-brand-900 py-20 md:py-28 text-white"
    >
      {/* Dekorasi */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-32 h-[34rem] w-[34rem] rounded-full bg-brand-500/30 blur-[120px]" />
        <div className="absolute -bottom-48 -right-32 h-[30rem] w-[30rem] rounded-full bg-brand-400/20 blur-[110px]" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgb(255 255 255 / 0.4) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
            WebkitMaskImage:
              'linear-gradient(to bottom right, black 0%, transparent 65%)',
            maskImage: 'linear-gradient(to bottom right, black 0%, transparent 65%)',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-6 text-center lg:text-left">
            <h2 className="text-4xl md:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
              Liburan tahun baru, skill juga harus baru
            </h2>
            <p className="text-brand-100 text-lg md:text-xl max-w-lg mx-auto lg:mx-0">
              Gabung bersama kami dan mulai perjalanan coding-mu di sini.
            </p>
          </div>

          <div className="lg:col-span-6 rounded-3xl bg-white/10 p-6 sm:p-8 ring-1 ring-white/15 backdrop-blur-sm">
            <div>
              <p className="text-xl font-semibold">Siap bergabung?</p>
              <p className="mt-1 mb-5 text-brand-100">
                Kuota terbatas, daftar segera untuk menikmati harga early bird.
              </p>
              <a
                href="https://bit.ly/PendaftaranBootcamp2026SPIMalang"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-semibold text-brand-700 shadow-xl shadow-black/20 transition-colors hover:bg-brand-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-900"
              >
                Daftar Holiday Bootcamp sekarang
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>

            <div className="my-7 h-px bg-white/15" />

            <div>
              <p className="text-xl font-semibold">Butuh konsultasi?</p>
              <p className="mt-1 mb-5 text-brand-100">
                Chat admin kami via WhatsApp gratis untuk info lebih lanjut.
              </p>
              <a
                href="https://wa.me/6282224422292"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-full px-8 py-4 text-lg font-semibold text-white ring-1 ring-white/40 transition-colors hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <MessageCircle className="w-5 h-5" aria-hidden="true" />
                Masih ragu? Konsultasi gratis
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}