import { Rocket, Users, BookOpen, Sparkles, PartyPopper } from 'lucide-react'

const items = [
  {
    icon: Rocket,
    title: 'Upgrade skill',
    desc: 'Mulai dari dasar Python sampai bikin proyek AI pertamamu.',
  },
  {
    icon: Users,
    title: 'Dapat teman baru',
    desc: 'Kenalan dan belajar bareng peserta lain yang punya minat sama.',
  },
  {
    icon: BookOpen,
    title: 'Dapat ilmu baru',
    desc: 'Materi praktis yang langsung bisa dipakai, bukan sekadar teori.',
  },
  {
    icon: Sparkles,
    title: 'Punya cerita baru',
    desc: 'Pulang dengan karya dan pengalaman yang seru untuk diceritakan.',
  },
]

export default function ProblemSection() {
  return (
    <section id="program" className="bg-gray-50 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Kiri: judul */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <p className="inline-block rounded-full bg-brand-100 px-3 py-1 text-sm font-semibold text-brand-700 mb-5">
              Kenapa harus ikut bootcamp ini?
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-gray-900 leading-tight mb-6">
              Liburan anti bosan, belajar skill baru untuk masa depan
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-md">
              Seringkali liburan cuma diisi rebahan dan scroll sosmed. Padahal
              waktu liburanmu bisa jadi lebih berguna.
            </p>
          </div>

          {/* Kanan: manfaat */}
          <div className="lg:col-span-7">
            <p className="text-sm font-semibold text-gray-500 mb-4">
              Di liburan ini, kamu bisa:
            </p>
            <ul className="grid sm:grid-cols-2 gap-4">
              {items.map(({ icon: Icon, title, desc }) => (
                <li
                  key={title}
                  className="rounded-2xl bg-white border border-gray-200 p-6"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-100 text-brand-600 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Banner penutup */}
        <div className="mt-12 md:mt-16 rounded-3xl bg-brand-600 px-6 py-8 md:px-12 md:py-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-8">
          <div className="shrink-0 w-14 h-14 rounded-2xl bg-white/15 text-white flex items-center justify-center">
            <PartyPopper className="w-7 h-7" aria-hidden="true" />
          </div>
          <div className="flex-1">
            <p className="text-white text-xl md:text-2xl font-semibold leading-snug">
              Kabar baiknya, semua itu bisa kamu dapatkan di SPI Holiday
              Bootcamp Python dan AI!
            </p>
          </div>
          <a
            href="https://bit.ly/PendaftaranBootcamp2026SPIMalang"
            className="shrink-0 inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 font-semibold text-brand-700 hover:bg-brand-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-600 transition-colors"
          >
            Daftar sekarang
          </a>
        </div>
      </div>
    </section>
  )
}