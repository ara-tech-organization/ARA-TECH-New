import { motion } from 'framer-motion'
import { AlertCircle } from 'lucide-react'

const Disclaimer = () => {
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
            <AlertCircle size={20} className="text-white" />
          </div>
          <h1 className="text-3xl font-black text-[#0a0a0a]">Disclaimer</h1>
        </div>
        <p className="text-xs text-gray-400 uppercase tracking-widest mb-12">Effective Date: 07/04/2026</p>

        <p className="text-gray-600 text-sm leading-relaxed mb-10">
          All information and services provided by <span className="text-[#0a0a0a] font-semibold">ARA Discover Technologies</span> are for general business purposes.
        </p>

        <div className="space-y-6">
          <h2 className="text-[#0a0a0a] font-bold text-lg flex items-center gap-2">
            <span className="text-[#ed2024] font-black">Key Points</span>
          </h2>
          <ul className="space-y-3">
            {[
              'We do not guarantee specific business outcomes',
              'AI-based outputs may vary',
              'We are not responsible for third-party services',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ed2024] mt-1.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

export default Disclaimer
