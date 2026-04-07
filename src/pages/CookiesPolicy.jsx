import { motion } from 'framer-motion'
import { Cookie } from 'lucide-react'

const CookiesPolicy = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-white text-[#0a0a0a]"
    >
      <div className="max-w-3xl mx-auto px-6 py-24">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-[#ed2024] flex items-center justify-center shadow-lg shadow-[#ed2024]/30">
            <Cookie size={20} className="text-white" />
          </div>
          <h1 className="text-3xl font-black text-[#0a0a0a]">Cookie Policy</h1>
        </div>
        <p className="text-xs text-gray-400 uppercase tracking-widest mb-12">Effective Date: 07/04/2026</p>

        <p className="text-gray-600 text-sm leading-relaxed mb-10">
          We use cookies to improve user experience and analyze website traffic.
        </p>

        <div className="space-y-10">
          {/* Section 1 */}
          <section>
            <h2 className="text-[#0a0a0a] font-bold text-lg mb-3 flex items-center gap-2">
              <span className="text-[#ed2024] font-black">1.</span> What Are Cookies?
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Cookies are small data files stored on your device.
            </p>
          </section>

          <div className="h-px bg-gray-200" />

          {/* Section 2 */}
          <section>
            <h2 className="text-[#0a0a0a] font-bold text-lg mb-3 flex items-center gap-2">
              <span className="text-[#ed2024] font-black">2.</span> How We Use Cookies
            </h2>
            <ul className="space-y-2">
              {['Website performance tracking', 'User behavior analysis', 'Improving services'].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ed2024] mt-1.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <div className="h-px bg-gray-200" />

          {/* Section 3 */}
          <section>
            <h2 className="text-[#0a0a0a] font-bold text-lg mb-3 flex items-center gap-2">
              <span className="text-[#ed2024] font-black">3.</span> Managing Cookies
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              You can disable cookies through your browser settings.
            </p>
          </section>
        </div>
      </div>
    </motion.div>
  )
}

export default CookiesPolicy
