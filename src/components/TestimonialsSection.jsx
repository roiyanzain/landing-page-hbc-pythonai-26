import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Hasan Ahmad',
    role: 'Siswa MTs di Malang',
    quote:
      'Saya dulu belum terlalu bisa pakai laptop, tapi setelah saya ikut bootcamp disini, saya terbantu karena akhirnya saya cukup paham pakainya sekaligus saya juga bisa belajar coding Python, mantap pokoknya!',
  },
  {
    name: 'Maximillian Murtihardjana',
    role: 'Siswa SMA di Malang',
    quote:
      'Seru sekali, belajar dasar-dasarnya Python mulai dari sintaks sampai bisa bikin project sendiri.',
  },
  {
    name: 'Alexandria',
    role: 'Siswa SMA di Malang',
    quote:
      'Belajar disini asik, mentor-mentornya juga membantu dan kita dibimbing bukan hanya diajar.',
  },
]

const initials = (name) =>
  name
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()

export default function TestimonialsSection() {
  return (
    <section className="bg-gray-50 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            Kata mereka yang sudah merasakan
          </h2>
        </div>

        <ul className="grid md:grid-cols-3 gap-4 md:gap-6">
          {testimonials.map((t) => (
            <li
              key={t.name}
              className="flex flex-col rounded-3xl border border-gray-200 bg-white p-7 sm:p-8"
            >
              <div className="flex items-center justify-between mb-6">
                <Quote className="w-9 h-9 text-brand-200" aria-hidden="true" />
                <div
                  className="flex items-center gap-0.5"
                  role="img"
                  aria-label="Rating 5 dari 5"
                >
                  {[0, 1, 2, 3, 4].map((s) => (
                    <Star
                      key={s}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                      aria-hidden="true"
                    />
                  ))}
                </div>
              </div>

              <blockquote className="flex-1 text-lg leading-relaxed text-gray-800">
                {t.quote}
              </blockquote>

              <div className="mt-8 flex items-center gap-3 border-t border-gray-100 pt-6">
                <span
                  aria-hidden="true"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-100 text-sm font-bold text-brand-700"
                >
                  {initials(t.name)}
                </span>
                <div>
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}