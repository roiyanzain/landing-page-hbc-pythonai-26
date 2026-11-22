import { useState } from 'react'
import { Plus, MessageCircle } from 'lucide-react'

const faqs = [
  {
    q: 'Apakah saya harus bisa coding dulu?',
    a: 'Tidak. Program dimulai dari dasar dan cocok untuk pemula.',
  },
  {
    q: 'Laptop seperti apa yang dibutuhkan?',
    a: 'Laptop dengan RAM minimal 4 GB dan sistem operasi Windows/macOS/Linux dengan satu browser terinstall.',
  },
  {
    q: 'Apakah ada sertifikat?',
    a: 'Ya, sertifikat diberikan untuk peserta yang menyelesaikan minimal 7 penugasan, final project, dan evaluation test.',
  },
  {
    q: 'Apakah tersedia cicilan untuk pembayaran?',
    a: 'Pembayaran bisa dilakukan dengan metode cicilan pembayaran. Konfirmasi dengan admin kami terlebih dahulu.',
  },
  {
    q: 'Kapan pendaftaran ditutup?',
    a: 'Pendaftaran ditutup pada 19 Desember 2026 atau saat kuota penuh.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Kiri: judul + bantuan */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 text-center lg:text-left">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-5">
              Pertanyaan yang sering ditanyakan
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto lg:mx-0">
              Masih ada yang ingin ditanyakan? Hubungi admin kami, biasanya
              langsung kami jawab.
            </p>
            <a
              href="https://wa.me/6282224422292"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-brand-600/25 transition-colors hover:bg-brand-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
            >
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
              Tanya via WhatsApp
            </a>
          </div>

          {/* Kanan: accordion */}
          <div className="lg:col-span-7 space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i
              return (
                <div
                  key={faq.q}
                  className={
                    'rounded-2xl border transition-colors ' +
                    (isOpen
                      ? 'border-brand-200 bg-brand-50'
                      : 'border-gray-200 bg-gray-50 hover:bg-gray-100')
                  }
                >
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      id={`faq-button-${i}`}
                      className="flex w-full items-center justify-between gap-4 rounded-2xl px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600"
                    >
                      <span className="text-lg font-semibold text-gray-900">
                        {faq.q}
                      </span>
                      <span
                        className={
                          'flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 motion-reduce:transition-none ' +
                          (isOpen
                            ? 'rotate-45 bg-brand-600 text-white'
                            : 'bg-white text-gray-500 ring-1 ring-gray-200')
                        }
                      >
                        <Plus className="w-4 h-4" aria-hidden="true" />
                      </span>
                    </button>
                  </h3>
                  <div
                    id={`faq-panel-${i}`}
                    role="region"
                    aria-labelledby={`faq-button-${i}`}
                    className={
                      'grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ' +
                      (isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]')
                    }
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-gray-600 leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}