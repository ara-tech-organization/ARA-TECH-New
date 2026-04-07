import { motion } from 'framer-motion'
import { Shield, Mail } from 'lucide-react'

const PrivacyPolicy = () => {
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
            <Shield size={20} className="text-white" />
          </div>
          <h1 className="text-3xl font-black text-[#0a0a0a]">Privacy Policy</h1>
        </div>
        <p className="text-xs text-gray-400 uppercase tracking-widest mb-12">Effective Date: 07/04/2026</p>

        <p className="text-gray-600 text-sm leading-relaxed mb-10">
          At <span className="text-[#0a0a0a] font-semibold">ARA Discover Technologies</span>, we value your privacy and are committed to protecting your personal information.
        </p>

        <div className="space-y-10">
          {/* Section 1 */}
          <section>
            <h2 className="text-[#0a0a0a] font-bold text-lg mb-3 flex items-center gap-2">
              <span className="text-[#ed2024] font-black">1.</span> Information We Collect
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">We may collect the following information:</p>
            <ul className="space-y-2">
              {['Name, email address, phone number', 'Business details and project requirements', 'Website usage data (cookies, analytics tools)'].map((item) => (
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
              <span className="text-[#ed2024] font-black">2.</span> How We Use Your Information
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">We use your information to:</p>
            <ul className="space-y-2">
              {['Provide and improve our services', 'Communicate with you', 'Process inquiries and projects', 'Send updates or promotional content'].map((item) => (
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
              <span className="text-[#ed2024] font-black">3.</span> Data Protection
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              We implement appropriate security measures to protect your data from unauthorized access, disclosure, or misuse.
            </p>
          </section>

          <div className="h-px bg-gray-200" />

          {/* Section 4 */}
          <section>
            <h2 className="text-[#0a0a0a] font-bold text-lg mb-3 flex items-center gap-2">
              <span className="text-[#ed2024] font-black">4.</span> Third-Party Services
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              We may use third-party tools (such as analytics or payment gateways). These providers have their own privacy policies.
            </p>
          </section>

          <div className="h-px bg-gray-200" />

          {/* Section 5 */}
          <section>
            <h2 className="text-[#0a0a0a] font-bold text-lg mb-3 flex items-center gap-2">
              <span className="text-[#ed2024] font-black">5.</span> Your Rights
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">You have the right to:</p>
            <ul className="space-y-2">
              {['Access your data', 'Request correction or deletion', 'Opt out of communications'].map((item) => (
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
              <span className="text-[#ed2024] font-black">6.</span> Contact Us
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">For any privacy-related concerns:</p>
            <a
              href="mailto:info@aradiscovertechnologies.com"
              className="inline-flex items-center gap-2.5 text-sm text-gray-600 hover:text-[#ed2024] transition-colors"
            >
              <Mail size={14} className="text-[#ed2024]" />
              info@aradiscovertechnologies.com
            </a>
          </section>
        </div>
      </div>
    </motion.div>
  )
}

export default PrivacyPolicy
