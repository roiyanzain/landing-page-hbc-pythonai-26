import { Phone, Mail, MapPin } from 'lucide-react'

const navLinks = [
  { href: '#program', label: 'Program' },
  { href: '#kurikulum', label: 'Kurikulum' },
  { href: '#benefit', label: 'Benefit' },
  { href: '#harga', label: 'Harga' },
  { href: '#faq', label: 'FAQ' },
]

function InstagramIcon({ className, ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function TikTokIcon({ className, ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  )
}

const linkClass =
  'text-gray-400 transition-colors hover:text-white focus:outline-none focus-visible:text-white focus-visible:underline'

export default function Footer() {
  return (
    <footer className="bg-brand-950 text-white border-t border-brand-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-5">
            <img
              src="/assets/logo-spi-white.png"
              alt="Sekolah Programming Indonesia"
              className="h-16 w-auto mb-6"
            />
            <p className="text-gray-400 leading-relaxed max-w-sm">
              Tempat belajar coding dan AI untuk pemula dengan metode hands-on
              dan mentor berpengalaman. Bangun portofolio nyata dengan kami.
            </p>
            <a
              href="#daftar"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 font-semibold text-brand-700 transition-colors hover:bg-brand-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-950"
            >
              Daftar sekarang
            </a>
          </div>

          {/* Navigasi */}
          <nav aria-label="Navigasi footer" className="lg:col-span-2">
            <h4 className="font-bold text-lg mb-5">Menu</h4>
            <ul className="space-y-3">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <a href={href} className={linkClass}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Kontak */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-lg mb-5">Kontak</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 shrink-0 text-brand-400" aria-hidden="true" />
                <span>Jl. Galunggung no. 78B, Kota Malang</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 shrink-0 text-brand-400" aria-hidden="true" />
                <a href="https://wa.me/6282224422292" className={linkClass}>
                  082224422292
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 shrink-0 text-brand-400" aria-hidden="true" />
                <a href="mailto:spi.malang01@gmail.com" className={`${linkClass} break-all`}>
                  spi.malang01@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Sosial */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-lg mb-5">Ikuti kami</h4>
            <ul className="space-y-4 text-gray-400">
            <li className="flex items-center gap-3">
                <InstagramIcon className="w-5 h-5 shrink-0 text-brand-400" />
                <a href="#" className={`${linkClass} break-all`}>
                  sekolahprogrammingmalang
                </a>
              </li>
              <li className="flex items-center gap-3">
                <TikTokIcon className="w-5 h-5 shrink-0 text-brand-400" />
                <a href="#" className={linkClass}>
                  spi.malang
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-800 pt-8 text-center sm:text-left">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Sekolah Programming Indonesia. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}