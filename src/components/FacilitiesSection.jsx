import {
  BookOpen,
  Video,
  Award,
  Users,
  Gift,
  Cookie,
  Droplets,
  Building2,
} from 'lucide-react'

const groups = [
  {
    title: 'Untuk semua peserta',
    note: 'Online maupun offline',
    className: 'lg:col-span-7',
    items: [
      { icon: BookOpen, label: 'Modul & materi belajar' },
      { icon: Video, label: 'Rekaman sesi' },
      { icon: Award, label: 'Sertifikat kelulusan' },
      { icon: Users, label: 'Akses komunitas alumni' },
      {
        icon: Gift,
        label: 'Student report dan merchandise',
        tag: 'Bonus',
      },
    ],
  },
  {
    title: 'Khusus kelas offline',
    note: 'Untuk peserta yang belajar di kelas',
    className: 'lg:col-span-5',
    items: [
      { icon: Cookie, label: 'Snack' },
      { icon: Droplets, label: 'Air mineral' },
      { icon: Building2, label: 'Ruang kelas eksklusif' },
    ],
  },
]

export default function FacilitiesSection() {
  return (
    <section id="fasilitas" className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-5">
            Yang kamu dapatkan dalam paket bootcamp
          </h2>
          <p className="text-gray-600 text-lg">
            Semua fasilitas di bawah ini sudah termasuk di harga paket.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {groups.map(({ title, note, items, className }) => (
            <div
              key={title}
              className={`rounded-3xl border border-gray-200 bg-gray-50 p-6 sm:p-10 ${className}`}
            >
              <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
              <p className="mt-1 text-gray-500">{note}</p>

              <ul className="mt-6 divide-y divide-gray-200">
                {items.map(({ icon: Icon, label, tag }) => (
                  <li key={label} className="flex items-center gap-4 py-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-brand-600">
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </span>
                    <span className="text-lg font-medium text-gray-800 leading-snug">
                      {label}
                    </span>
                    {tag && (
                      <span className="ml-auto shrink-0 rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-semibold text-amber-800">
                        {tag}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}