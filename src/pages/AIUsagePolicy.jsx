import { motion } from 'framer-motion'
import { Brain } from 'lucide-react'

const AIUsagePolicy = () => {
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
            <Brain size={20} className="text-white" />
          </div>
          <h1 className="text-3xl font-black text-[#0a0a0a]">AI Usage & Ethics Policy</h1>
        </div>
        <p className="text-xs text-gray-400 uppercase tracking-widest mb-12">Effective Date: 07/04/2026</p>

        <div className="space-y-10">
          <section>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              ARA Discover Technologies uses Artificial Intelligence to enhance services and solutions.
            </p>
          </section>

          <div className="h-px bg-gray-200" />

          {/* Section 1 */}
          <section>
            <h2 className="text-[#0a0a0a] font-bold text-lg mb-3 flex items-center gap-2">
              <span className="text-[#ed2024] font-black">1.</span> Our AI Principles
            </h2>
            <ul className="space-y-2">
              {[
                'Ethical and responsible usage',
                'Data privacy protection',
                'Transparency in AI implementation',
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
              <span className="text-[#ed2024] font-black">2.</span> Limitations
            </h2>
            <ul className="space-y-2">
              {[
                'AI outputs may not always be 100% accurate',
                'Human review is applied where necessary',
              ].map((item, index) => (
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
              <span className="text-[#ed2024] font-black">3.</span> Commitment
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              We ensure AI is used to enhance efficiency, not replace responsibility.
            </p>
          </section>
        </div>
      </div>
    </motion.div>
  )
}

export default AIUsagePolicy
