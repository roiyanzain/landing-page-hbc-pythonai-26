import { Play, Code, Headphones, Users as UsersIcon, Film } from 'lucide-react'

const methods = [
  {
    icon: Play,
    title: 'Live class interaktif',
    desc: 'Belajar langsung dengan mentor secara real-time, bukan hanya menonton video.',
    className: 'lg:col-span-2',
  },
  {
    icon: Code,
    title: 'Praktik setiap sesi',
    desc: 'Setiap materi langsung diikuti dengan latihan praktik.',
    className: 'lg:col-span-2',
  },
  {
    icon: Headphones,
    title: 'Mentoring & code review',
    desc: 'Kamu mendapat masukan langsung dari mentor untuk kode yang kamu buat.',
    className: 'lg:col-span-2',
  },
  {
    icon: UsersIcon,
    title: 'Komunitas peserta',
    desc: 'Gabung dengan komunitas peserta bootcamp untuk saling belajar dan berbagi.',
    className: 'lg:col-span-3',
  },
  {
    icon: Film,
    title: 'Rekaman sesi (untuk kelas online)',
    desc: 'Akses rekaman setiap sesi untuk diulang kapan saja kamu butuh.',
    className: 'lg:col-span-3',
  },
]

export default function MethodSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-5 text-balance">
            Belajar bersama, bukan sekadar baca materi
          </h2>
          <p className="text-gray-600 text-lg">
            Metode pembelajaran yang dirancang agar kamu tidak hanya paham
            teori, tetapi mampu membangun sendiri.
          </p>
        </div>

        <ul className="grid md:grid-cols-2 lg:grid-cols-6 gap-4 md:gap-6">
          {methods.map(({ icon: Icon, title, desc, className }, i) => (
            <li
              key={title}
              className={`group flex flex-col rounded-3xl border border-gray-200 bg-gray-50 p-7 sm:p-8 transition-colors hover:border-brand-200 hover:bg-brand-50 ${
                i === methods.length - 1 ? 'md:col-span-2' : ''
              } ${className}`}
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-100 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                <Icon className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-600 leading-relaxed">{desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}