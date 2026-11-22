import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#program', label: 'Program' },
  { href: '#kurikulum', label: 'Kurikulum' },
  { href: '#benefit', label: 'Benefit' },
  { href: '#harga', label: 'Harga' },
  { href: '#faq', label: 'FAQ' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Listener scroll dipasang sekali dan dibersihkan saat unmount
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Tutup menu mobile dengan tombol Escape
  useEffect(() => {
    if (!isOpen) return
    const onKey = (e) => e.key === 'Escape' && setIsOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen])

  const solid = scrolled || isOpen

  return (
    <nav
      aria-label="Navigasi utama"
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3" aria-label="Ke atas halaman">
            <img
              src="/assets/spi-logo.png"
              alt="Sekolah Programming Indonesia"
              className="h-10 md:h-14 w-auto"
            />
          </a>

          {/* Menu desktop */}
          <div className="hidden md:flex items-center gap-8">
            {links.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="font-medium text-gray-600 transition-colors hover:text-brand-600 focus:outline-none focus-visible:text-brand-600 focus-visible:underline"
              >
                {label}
              </a>
            ))}
            <a
              href="https://bit.ly/PendaftaranBootcamp2026SPIMalang"
              className="rounded-full bg-brand-600 px-5 py-2.5 font-semibold text-white shadow-lg shadow-brand-600/25 transition-all hover:-translate-y-0.5 hover:bg-brand-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
            >
              Daftar Sekarang
            </a>
          </div>

          {/* Kontrol mobile: tombol daftar tetap terlihat */}
          <div className="md:hidden flex items-center gap-2">
            <a
              href="https://bit.ly/PendaftaranBootcamp2026SPIMalang"
              className="rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white"
            >
              Daftar
            </a>
            <button
              type="button"
              onClick={() => setIsOpen((v) => !v)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? 'Tutup menu' : 'Buka menu'}
              className="rounded-full p-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600"
            >
              {isOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      <div
        id="mobile-menu"
        className={`md:hidden grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
          isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <ul className="px-4 pb-5 pt-2 space-y-1">
            {links.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setIsOpen(false)}
                  tabIndex={isOpen ? 0 : -1}
                  className="block rounded-xl px-4 py-3 text-lg font-medium text-gray-800 hover:bg-brand-50 hover:text-brand-600"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}