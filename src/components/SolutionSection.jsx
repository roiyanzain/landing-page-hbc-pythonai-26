import { Zap, Layers, UserRound } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Cocok untuk pemula dan dasar',
    desc: 'Mulai dari nol tanpa perlu background IT atau pengalaman coding sebelumnya.',
  },
  {
    icon: Layers,
    title: 'Proyek untuk portofolio kamu',
    desc: 'Bangun project nyata yang bisa kamu tunjukkan saat daftar kampus, magang, atau kerja.',
  },
  {
    icon: UserRound,
    title: 'Didampingi mentor',
    desc: 'Belajar bareng mentor berpengalaman dengan mentoring dan code review setiap sesi.',
  },
]

export default function SolutionSection() {
  return (
    <section id="benefit" className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            SPI Holiday Bootcamp Python dan AI, 10 hari intensif
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Program belajar intensif selama 10 hari dengan kurikulum yang
            dirancang dari dasar sampai membuat proyek akhir. Kamu belajar
            dengan metode{' '}
            <strong className="text-gray-900">learning by doing</strong>:
            sedikit teori, banyak praktik, dan selalu ada mentor yang siap
            membantu.
          </p>
        </div>

        <ul className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200 rounded-3xl border border-gray-200 bg-gray-50">
          {features.map(({ icon: Icon, title, desc }) => (
            <li key={title} className="p-8 sm:p-10">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-600 text-white">
                <Icon className="w-7 h-7" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
              <p className="text-gray-600 leading-relaxed">{desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}