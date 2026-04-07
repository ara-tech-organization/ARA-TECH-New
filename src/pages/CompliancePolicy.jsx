import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const CompliancePolicy = () => {
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
            <CheckCircle size={20} className="text-white" />
          </div>
          <h1 className="text-3xl font-black text-[#0a0a0a]">Compliance / GDPR Statement</h1>
        </div>
        <p className="text-xs text-gray-400 uppercase tracking-widest mb-12">Effective Date: 07/04/2026</p>

        <div className="space-y-10">
          <section>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              ARA Discover Technologies complies with applicable data protection regulations.
            </p>
          </section>

          <div className="h-px bg-gray-200" />

          {/* Section 1 */}
          <section>
            <h2 className="text-[#0a0a0a] font-bold text-lg mb-3 flex items-center gap-2">
              <span className="text-[#ed2024] font-black">1.</span> We Ensure
            </h2>
            <ul className="space-y-2">
              {[
                'Lawful data processing',
                'User data protection',
                'Transparency in data usage',
              ].map((item, index) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ed2024] mt-1.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </motion.div>
  )
}

export default CompliancePolicy
