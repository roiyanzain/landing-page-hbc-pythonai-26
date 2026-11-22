import {
  GraduationCap,
  BookOpen,
  Briefcase,
  ShieldCheck,
  Laptop,
  Wifi,
  Sparkles,
} from 'lucide-react'

const audiences = [
  {
    icon: GraduationCap,
    label: 'Siswa SMA/SMK',
    desc: 'Ingin punya skill tambahan dan bekal sebelum kuliah.',
  },
  {
    icon: BookOpen,
    label: 'Mahasiswa',
    desc: 'Ingin menambah portofolio atau pindah ke bidang IT/data.',
  },
  {
    icon: Briefcase,
    label: 'Umum / pekerja / career switcher',
    desc: 'Ingin belajar skill digital dari nol.',
  },
]

const preparations = [
  { icon: Laptop, label: 'Laptop' },
  { icon: Wifi, label: 'Koneksi internet stabil' },
  { icon: Sparkles, label: 'Semangat belajar' },
]

export default function ForWhoSection() {
  return (
    <section className="bg-gray-50 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            Program ini dibuat untuk kamu yang...
          </h2>
        </div>

        <ul className="grid md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
          {audiences.map(({ icon: Icon, label, desc }) => (
            <li
              key={label}
              className="rounded-3xl border border-gray-200 bg-white p-7 sm:p-8"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-100 text-brand-600">
                <Icon className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{label}</h3>
              <p className="text-gray-600 leading-relaxed">{desc}</p>
            </li>
          ))}
        </ul>

        {/* Syarat dan persiapan */}
        <div className="relative isolate overflow-hidden rounded-3xl bg-brand-600 p-7 sm:p-10 text-white">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -top-24 -right-16 h-72 w-72 rounded-full bg-brand-400/40 blur-[90px]" />
            <div className="absolute -bottom-28 -left-10 h-64 w-64 rounded-full bg-brand-900/40 blur-[90px]" />
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/15">
                <ShieldCheck className="w-6 h-6" aria-hidden="true" />
              </span>
              <p className="text-xl md:text-2xl font-semibold leading-snug">
                Tidak perlu background IT, laptop spesifikasi tinggi, atau
                pengalaman coding sebelumnya.
              </p>
            </div>

            <div>
              <p className="mb-4 font-semibold text-brand-100">
                Yang perlu disiapkan
              </p>
              <ul className="flex flex-wrap gap-3">
                {preparations.map(({ icon: Icon, label }) => (
                  <li
                    key={label}
                    className="flex items-center gap-2 rounded-full bg-white/15 px-4 py-2.5 font-medium ring-1 ring-white/20"
                  >
                    <Icon className="w-4 h-4" aria-hidden="true" />
                    {label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}