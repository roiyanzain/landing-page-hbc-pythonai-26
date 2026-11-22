import { Star, Users as UsersIcon } from 'lucide-react'

export default function SocialProof() {
  return (
    <section className="bg-white border-y border-gray-100 py-8 md:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-200 rounded-3xl border border-gray-200 bg-gray-50">
          <div className="flex items-center justify-center gap-4 px-6 py-6">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-100 text-brand-600">
              <UsersIcon className="w-6 h-6" aria-hidden="true" />
            </span>
            <div>
              <p className="text-3xl font-bold leading-none text-gray-900 tabular-nums">
                10+
              </p>
              <p className="mt-1 text-gray-600">alumni</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 px-6 py-6">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-100">
              <Star className="w-6 h-6 fill-amber-400 text-amber-400" aria-hidden="true" />
            </span>
            <div>
              <p className="text-3xl font-bold leading-none text-gray-900 tabular-nums">
                4.9<span className="text-xl font-semibold text-gray-400">/5</span>
              </p>
              <p className="mt-1 text-gray-600">rating dari peserta batch sebelumnya</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}