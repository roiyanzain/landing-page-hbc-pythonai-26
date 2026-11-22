import { Code, Brain, Presentation, Briefcase, Award } from 'lucide-react'

const benefits = [
  {
    icon: Code,
    text: 'Memahami logika pemrograman dan dasar bahasa Python',
    className: 'lg:col-span-2',
  },
  {
    icon: Brain,
    text: 'Memahami bagaimana AI bekerja',
    className: 'lg:col-span-2',
  },
  {
    icon: Presentation,
    text: 'Mempresentasikan proyek akhirmu',
    className: 'lg:col-span-2',
  },
  {
    icon: Award,
    text: 'Mendapat sertifikat kelulusan dan student report',
    className: 'lg:col-span-2',
  },
  {
    icon: Briefcase,
    text: 'Punya portofolio untuk daftar kampus, magang, atau kerja',
    className: 'md:col-span-2 lg:col-span-4',
    featured: true,
  },
]

export default function BenefitsSection() {
  return (
    <section id="hasil" className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-5">
            Setelah 10 hari, kamu akan bisa:
          </h2>
        </div>

        <ul className="grid md:grid-cols-2 lg:grid-cols-6 gap-4 md:gap-6">
          {benefits.map(({ icon: Icon, text, className, featured }) =>
            featured ? (
              <li
                key={text}
                className={`relative isolate overflow-hidden rounded-3xl bg-brand-600 p-7 sm:p-10 text-white flex flex-col justify-between gap-10 ${className}`}
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 -z-10"
                >
                  <div className="absolute -top-24 -right-16 h-72 w-72 rounded-full bg-brand-400/40 blur-[90px]" />
                  <div className="absolute -bottom-28 -left-10 h-64 w-64 rounded-full bg-brand-900/40 blur-[90px]" />
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
                  <Icon className="w-7 h-7" aria-hidden="true" />
                </div>
                <p className="text-2xl sm:text-3xl font-semibold leading-snug max-w-xl">
                  {text}
                </p>
              </li>
            ) : (
              <li
                key={text}
                className={`flex flex-col gap-6 rounded-3xl border border-gray-200 bg-gray-50 p-7 sm:p-8 transition-colors hover:border-brand-200 hover:bg-brand-50 ${className}`}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-100 text-brand-600">
                  <Icon className="w-6 h-6" aria-hidden="true" />
                </div>
                <p className="text-lg font-semibold leading-snug text-gray-900">
                  {text}
                </p>
              </li>
            ),
          )}
        </ul>
      </div>
    </section>
  )
}