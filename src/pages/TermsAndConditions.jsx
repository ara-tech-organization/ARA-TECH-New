import { motion } from 'framer-motion'
import { FileText, Mail } from 'lucide-react'

const TermsAndConditions = () => {
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
            <FileText size={20} className="text-white" />
          </div>
          <h1 className="text-3xl font-black text-[#0a0a0a]">Terms & Conditions</h1>
        </div>
        <p className="text-xs text-gray-400 uppercase tracking-widest mb-12">Effective Date: 07/04/2026</p>

        <p className="text-gray-600 text-sm leading-relaxed mb-10">
          By accessing our website and services, you agree to the following terms:
        </p>

        <div className="space-y-10">
          {/* Section 1 */}
          <section>
            <h2 className="text-[#0a0a0a] font-bold text-lg mb-3 flex items-center gap-2">
              <span className="text-[#ed2024] font-black">1.</span> Services
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              ARA Discover Technologies provides software development, mobile app development, website development, AI & automation solutions, and product development services.
            </p>
          </section>

          <div className="h-px bg-gray-200" />

          {/* Section 2 */}
          <section>
            <h2 className="text-[#0a0a0a] font-bold text-lg mb-3 flex items-center gap-2">
              <span className="text-[#ed2024] font-black">2.</span> User Responsibilities
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">You agree to:</p>
            <ul className="space-y-2">
              {['Provide accurate information', 'Use our services lawfully', 'Not misuse our platform'].map((item) => (
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
              <span className="text-[#ed2024] font-black">3.</span> Intellectual Property
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              All content, designs, and code developed remain the property of ARA Discover Technologies until full payment is completed.
            </p>
          </section>

          <div className="h-px bg-gray-200" />

          {/* Section 4 */}
          <section>
            <h2 className="text-[#0a0a0a] font-bold text-lg mb-3 flex items-center gap-2">
              <span className="text-[#ed2024] font-black">4.</span> Payments
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              All payments must be made as per agreed terms. Delays may impact project timelines.
            </p>
          </section>

          <div className="h-px bg-gray-200" />

          {/* Section 5 */}
          <section>
            <h2 className="text-[#0a0a0a] font-bold text-lg mb-3 flex items-center gap-2">
              <span className="text-[#ed2024] font-black">5.</span> Limitation of Liability
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">We are not liable for:</p>
            <ul className="space-y-2">
              {['Indirect or consequential damages', 'Losses caused by third-party tools or services'].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ed2024] mt-1.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <div className="h-px bg-gray-200" />

          {/* Section 6 */}
          <section>
            <h2 className="text-[#0a0a0a] font-bold text-lg mb-3 flex items-center gap-2">
              <span className="text-[#ed2024] font-black">6.</span> Changes to Terms
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              We may update these terms at any time.
            </p>
          </section>
        </div>
      </div>
    </motion.div>
  )
}

export default TermsAndConditions
