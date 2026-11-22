import { Download, BookOpen, Brain, Clock } from 'lucide-react'

const bootcamps = [
  {
    title: 'Bootcamp Python',
    icon: BookOpen,
    items: [
      { text: 'Computational Thinking dan basic syntax Python' },
      { text: 'Mutasi untuk tipe data primitive dan non-primitive' },
      { text: 'Sequence, pengkondisian (IF ELSE), dan perulangan (FOR WHILE)' },
      { text: 'Fungsi, parameter, dan argumen' },
      { text: 'Handle error di program' },
      { text: 'Handle file teks, biner, dan CSV' },
      { text: 'Program berbasis objek dan sifat-sifatnya' },
      {
        text: 'Membangun website dengan dasar bahasa Python menggunakan Streamlit',
        tag: 'Proyek',
      },
    ],
  },
  {
    title: 'Bootcamp AI',
    icon: Brain,
    items: [
      { text: 'Mendeskripsikan, mengonversi, splitting, dan normalisasi data' },
      { text: 'Melatih data' },
      { text: 'Menguji data dengan matrix' },
    ],
  },
]

function CurriculumCard({ title, icon: Icon, items }) {
  return (
    <div className="h-full rounded-3xl border border-gray-200 bg-white p-6 sm:p-10">
      <div className="flex items-center gap-4 mb-8">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-100 text-brand-600">
          <Icon className="w-6 h-6" aria-hidden="true" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
        <span className="ml-auto shrink-0 rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-600">
          {items.length} materi
        </span>
      </div>

      <ol>
        {items.map((item, i) => {
          const isLast = i === items.length - 1
          return (
            <li key={item.text} className="relative flex gap-4 pb-6 last:pb-0">
              {!isLast && (
                <span
                  aria-hidden="true"
                  className="absolute left-[17px] top-10 bottom-0 w-px bg-brand-200"
                />
              )}
              <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-100 text-sm font-bold text-brand-700 tabular-nums">
                {i + 1}
              </span>
              <div className="pt-1.5">
                <p className="text-gray-800 leading-relaxed">{item.text}</p>
                {item.tag && (
                  <span className="mt-2 inline-block rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-semibold text-amber-800">
                    {item.tag}
                  </span>
                )}
              </div>
            </li>
          )
        })}
      </ol>
    </div>
  )
}

export default function CurriculumSection() {
  return (
    <section id="kurikulum" className="bg-gray-50 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-5">
            Perjalanan belajarmu, hari demi hari
          </h2>
          <p className="text-gray-600 text-lg">
            Setiap hari kamu akan mendapatkan materi baru yang dibimbing
            langsung oleh mentor.
          </p>
        </div>

        {/* Dua bootcamp dengan ukuran dan gaya yang sama */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {bootcamps.map((b) => (
            <CurriculumCard key={b.title} {...b} />
          ))}
        </div>

        {/* Jam belajar + unduh silabus */}
        <div className="mt-8 md:mt-10 flex flex-col md:flex-row items-center justify-between gap-5 rounded-3xl border border-gray-200 bg-white px-6 py-6 sm:px-10">
          <p className="flex items-start gap-3 text-gray-600 text-center md:text-left">
            <Clock className="mt-1 h-5 w-5 shrink-0 text-brand-600" aria-hidden="true" />
            <span>
              <strong className="font-semibold text-gray-900">Jam belajar:</strong>{' '}
              jadwal lengkap ada di silabus.
            </span>
          </p>
          <a
            href="#"
            className="inline-flex w-full md:w-auto items-center justify-center gap-2 rounded-full bg-brand-600 px-8 py-3.5 font-semibold text-white shadow-lg shadow-brand-600/25 transition-colors hover:bg-brand-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
          >
            <Download className="w-4 h-4" aria-hidden="true" />
            Unduh silabus lengkap (PDF)
          </a>
        </div>
      </div>
    </section>
  )
}