import { ArrowRight, Code, Brain, Trophy } from 'lucide-react'

const tracks = [
  {
    name: 'Basic Python',
    icon: Code,
    for: 'Belum pernah belajar programming',
    learn: 'Computational Thinking, Python, dan Website',
    result: 'Portofolio Pribadi',
  },
  {
    name: 'Basic AI',
    icon: Brain,
    for: 'Sudah pernah belajar Python',
    learn: 'Data Preprocessing, Data Training, dan Data Testing',
    result: 'Mini Proyek AI',
  },
]

export default function TracksSection() {
  return (
    <section id="pilihan-kelas" className="bg-gray-50 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-5">
            Yuk, pilih kelas yang sesuai dengan kamu
          </h2>
          <p className="text-gray-600 text-lg">
            Dua track yang dirancang untuk tingkat pemula hingga yang sudah
            familiar dengan Python.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {tracks.map(({ name, icon: Icon, for: audience, learn, result }) => (
            <div
              key={name}
              className="flex flex-col rounded-3xl border border-gray-200 bg-white p-7 sm:p-10"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-100 text-brand-600">
                  <Icon className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{name}</h3>
              </div>

              <dl className="space-y-6 mb-8">
                <div>
                  <dt className="text-sm font-medium text-gray-500 mb-1">
                    Cocok untuk
                  </dt>
                  <dd className="text-lg text-gray-900 leading-snug">
                    {audience}
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500 mb-1">
                    Yang kamu pelajari
                  </dt>
                  <dd className="text-lg text-gray-900 leading-snug">{learn}</dd>
                </div>
              </dl>

              <div className="mt-auto">
                <div className="flex items-center gap-4 rounded-2xl bg-brand-50 p-5 mb-6">
                  <Trophy className="w-6 h-6 shrink-0 text-brand-600" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      Hasil akhir
                    </p>
                    <p className="text-lg font-semibold text-brand-700">
                      {result}
                    </p>
                  </div>
                </div>
                <a
                  href="#daftar"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-8 py-3.5 font-semibold text-white shadow-lg shadow-brand-600/25 transition-colors hover:bg-brand-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
                >
                  Daftar track ini
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}