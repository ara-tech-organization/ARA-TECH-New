import { motion } from 'framer-motion'
import { Clock } from 'lucide-react'

const SLAPolicy = () => {
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
            <Clock size={20} className="text-white" />
          </div>
          <h1 className="text-3xl font-black text-[#0a0a0a]">Service Level Agreement (SLA)</h1>
        </div>
        <p className="text-xs text-gray-400 uppercase tracking-widest mb-12">Effective Date: 07/04/2026</p>

        <div className="space-y-10">
          {/* Section 1 */}
          <section>
            <h2 className="text-[#0a0a0a] font-bold text-lg mb-3 flex items-center gap-2">
              <span className="text-[#ed2024] font-black">1.</span> Support Availability
            </h2>
            <ul className="space-y-2">
              {[
                'Business hours support',
                'Priority support (based on plan)',
              ].map((item, index) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ed2024] mt-1.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <div className="h-px bg-gray-200" />

          {/* Section 2 */}
          <section>
            <h2 className="text-[#0a0a0a] font-bold text-lg mb-3 flex items-center gap-2">
              <span className="text-[#ed2024] font-black">2.</span> Response Time
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Initial response within 24–48 hours.
            </p>
          </section>

          <div className="h-px bg-gray-200" />

          {/* Section 3 */}
          <section>
            <h2 className="text-[#0a0a0a] font-bold text-lg mb-3 flex items-center gap-2">
              <span className="text-[#ed2024] font-black">3.</span> Resolution Time
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Depends on issue complexity.
            </p>
          </section>
        </div>
      </div>
    </motion.div>
  )
}

export default SLAPolicy
