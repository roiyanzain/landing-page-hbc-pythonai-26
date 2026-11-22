import { FileText, CreditCard, CheckCircle2, Mail, Phone, MessageCircle } from 'lucide-react'

const steps = [
  {
    title: 'Isi formulir pendaftaran',
    icon: FileText,
    desc: 'Mengisi data diri dan memilih track yang diinginkan.',
  },
  {
    title: 'Lakukan pembayaran',
    icon: CreditCard,
    desc: 'Pembayaran bisa dilakukan secara transfer atau cicilan.',
  },
  {
    title: 'Konfirmasi & terima info kelas',
    icon: CheckCircle2,
    desc: 'Konfirmasi pembayaran dan tunggu jadwal kelas dari admin.',
  },
]

export default function HowToRegisterSection() {
  return (
    <section id="cara-daftar" className="bg-gray-50 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-5">
            Daftar dalam 3 langkah mudah
          </h2>
          <p className="text-gray-600 text-lg">
            Siap memulai perjalanan coding-mu? Ikuti langkah-langkah berikut.
          </p>
        </div>

        {/* Stepper */}
        <div className="relative max-w-5xl mx-auto mb-12 md:mb-16">
          <div
            aria-hidden="true"
            className="absolute top-6 left-[16.66%] right-[16.66%] hidden md:block h-px bg-brand-200"
          />
          <ol className="grid md:grid-cols-3 gap-10 md:gap-6">
            {steps.map(({ title, icon: Icon, desc }, i) => (
              <li key={title} className="flex flex-col items-center text-center">
                <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-brand-600 text-lg font-bold text-white ring-8 ring-gray-50 tabular-nums">
                  {i + 1}
                </span>
                <div className="mt-6 w-full flex-1 rounded-3xl border border-gray-200 bg-white p-7">
                  <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-100 text-brand-600">
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Kontak admin */}
        <div className="relative isolate overflow-hidden max-w-5xl mx-auto rounded-3xl bg-brand-600 p-7 sm:p-10 text-white">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -top-24 -right-16 h-72 w-72 rounded-full bg-brand-400/40 blur-[90px]" />
            <div className="absolute -bottom-28 -left-10 h-64 w-64 rounded-full bg-brand-900/40 blur-[90px]" />
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-5">Kontak admin</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:spi.malang01@gmail.com"
                    className="inline-flex items-center gap-3 text-brand-50 hover:text-white break-all"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/15">
                      <Mail className="w-5 h-5" aria-hidden="true" />
                    </span>
                    spi.malang01@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:082224422292"
                    className="inline-flex items-center gap-3 text-brand-50 hover:text-white"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/15">
                      <Phone className="w-5 h-5" aria-hidden="true" />
                    </span>
                    082224422292
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href="#daftar"
                className="flex items-center justify-center rounded-full bg-white px-6 py-4 font-semibold text-brand-700 shadow-xl shadow-brand-900/30 transition-colors hover:bg-brand-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-600"
              >
                Mulai daftar
              </a>
              <a
                href="https://wa.me/6282224422292"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full px-6 py-4 font-semibold text-white ring-1 ring-white/40 transition-colors hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <MessageCircle className="w-5 h-5" aria-hidden="true" />
                Tanya admin via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}