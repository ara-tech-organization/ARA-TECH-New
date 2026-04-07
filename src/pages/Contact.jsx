import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, ArrowRight, MessageSquare, Clock, Brain, Smartphone, Globe, Zap, Layers, PenTool, CheckCircle2 } from 'lucide-react'
import SectionWrapper from '../components/SectionWrapper'
import GlassCard from '../components/GlassCard'

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } }
const fadeUp = { hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] } } }

const projectTypes = [
  { value: 'software', label: 'Software Development', icon: Brain },
  { value: 'mobile', label: 'Mobile App', icon: Smartphone },
  { value: 'website', label: 'Website Development', icon: Globe },
  { value: 'ai', label: 'AI & Automation', icon: Zap },
  { value: 'product', label: 'Product Development', icon: Layers },
  { value: 'design', label: 'UI/UX Design', icon: PenTool },
  { value: 'other', label: 'Other / Not Sure', icon: MessageSquare },
]

const contactDetails = [
  { icon: Mail, label: 'Email Us', value: 'hello@aradiscover.com', href: 'mailto:hello@aradiscover.com', iconBg: 'bg-blue-50', iconColor: 'text-blue-500' },
  { icon: Phone, label: 'Call Us', value: '+1 (234) 567-8900', href: 'tel:+12345678900', iconBg: 'bg-violet-50', iconColor: 'text-violet-500' },
  { icon: MapPin, label: 'Location', value: 'Global — Remote-First', href: null, iconBg: 'bg-emerald-50', iconColor: 'text-emerald-500' },
  { icon: Clock, label: 'Response Time', value: 'Within 24 hours', href: null, iconBg: 'bg-orange-50', iconColor: 'text-orange-400' },
]

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', projectType: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [selectedType, setSelectedType] = useState('')

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1400))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <div>
      {/* ─── HERO ─── */}
      <section className="relative pt-40 pb-20 overflow-hidden bg-white">
        <div className="absolute inset-0 dot-grid opacity-50" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#ed2024]/5 rounded-full blur-[110px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-2xl mx-auto">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ed2024]/8 border border-[#ed2024]/20 text-[#ed2024] text-xs font-semibold mb-6 uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ed2024] animate-pulse" /> Let's Work Together
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-black text-[#0a0a0a] mb-5 leading-tight">
              Let's Build<br /><span className="text-[#ed2024]">Your Idea</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-gray-500 text-xl leading-relaxed">
              Tell us about your project and we'll get back to you within 24 hours with a tailored strategy.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ─── FORM + SIDEBAR ─── */}
      <SectionWrapper className="bg-gray-50">
        <div className="grid lg:grid-cols-[1fr_360px] gap-8">

          {/* FORM */}
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            {submitted ? (
              <div className="rounded-2xl bg-white border border-black/6 shadow-sm p-10 text-center overflow-hidden relative">
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#ed2024] to-transparent" />
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="w-20 h-20 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto mb-5">
                  <CheckCircle2 size={36} className="text-emerald-500" />
                </motion.div>
                <h2 className="text-2xl font-black text-[#0a0a0a] mb-3">Message Sent!</h2>
                <p className="text-gray-500 leading-relaxed mb-6">Our team will review your project details and get back to you within 24 hours with a tailored strategy.</p>
                <div className="flex items-center justify-center gap-2 text-[#ed2024] font-bold text-sm">
                  <Clock size={15} /> Expected response: Within 24 hours
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="rounded-2xl bg-white border border-black/6 shadow-sm p-8 overflow-hidden relative">
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#ed2024] to-transparent" />
                <h2 className="text-2xl font-black text-[#0a0a0a] mb-7">Start Your Project</h2>

                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                    <input name="name" value={form.name} onChange={handleChange} required placeholder="John Smith"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-black/8 text-[#0a0a0a] placeholder-gray-400 text-sm focus:outline-none focus:border-[#ed2024]/40 focus:ring-2 focus:ring-[#ed2024]/10 transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="john@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-black/8 text-[#0a0a0a] placeholder-gray-400 text-sm focus:outline-none focus:border-[#ed2024]/40 focus:ring-2 focus:ring-[#ed2024]/10 transition-all" />
                  </div>
                </div>

                <div className="mb-5">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                  <input name="phone" value={form.phone} onChange={handleChange} placeholder="+1 (234) 567-8900"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-black/8 text-[#0a0a0a] placeholder-gray-400 text-sm focus:outline-none focus:border-[#ed2024]/40 focus:ring-2 focus:ring-[#ed2024]/10 transition-all" />
                </div>

                <div className="mb-5">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Project Type *</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {projectTypes.map((type) => (
                      <button key={type.value} type="button"
                        onClick={() => { setSelectedType(type.value); setForm({ ...form, projectType: type.value }) }}
                        className={`flex items-center gap-2 px-3 py-2.5 rounded-xl border text-xs font-semibold transition-all text-left ${
                          selectedType === type.value
                            ? 'bg-[#ed2024] border-[#ed2024] text-white shadow-md shadow-[#ed2024]/20'
                            : 'bg-white border-black/8 text-gray-600 hover:border-[#ed2024]/30 hover:text-[#ed2024]'
                        }`}>
                        <type.icon size={12} className="shrink-0" /> {type.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-7">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Project Details *</label>
                  <textarea name="message" value={form.message} onChange={handleChange} required rows={5} placeholder="Tell us about your project, goals, timeline, and budget..."
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-black/8 text-[#0a0a0a] placeholder-gray-400 text-sm focus:outline-none focus:border-[#ed2024]/40 focus:ring-2 focus:ring-[#ed2024]/10 transition-all resize-none" />
                </div>

                <motion.button type="submit" disabled={loading} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-[#ed2024] text-white font-bold text-base hover:bg-[#c0181c] transition-all shadow-xl shadow-[#ed2024]/20 disabled:opacity-60 disabled:cursor-not-allowed">
                  {loading ? (
                    <><svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>Sending...</>
                  ) : (
                    <><Send size={17} />Send Message<ArrowRight size={15} /></>
                  )}
                </motion.button>
                <p className="text-center text-xs text-gray-400 mt-3">We never share your information. Privacy guaranteed.</p>
              </form>
            )}
          </motion.div>

          {/* SIDEBAR */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }} className="space-y-5">
            <div className="rounded-2xl bg-white border border-black/6 shadow-sm p-6 overflow-hidden relative">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-100 to-transparent" />
              <h3 className="text-[#0a0a0a] font-black text-base mb-5">Contact Information</h3>
              <div className="space-y-4">
                {contactDetails.map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className={`w-9 h-9 rounded-xl ${item.iconBg} flex items-center justify-center shrink-0`}>
                      <item.icon size={15} className={item.iconColor} />
                    </div>
                    <div>
                      <div className="text-gray-400 text-xs mb-0.5">{item.label}</div>
                      {item.href ? (
                        <a href={item.href} className="text-[#0a0a0a] text-sm font-semibold hover:text-[#ed2024] transition-colors">{item.value}</a>
                      ) : (
                        <div className="text-[#0a0a0a] text-sm font-semibold">{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-[#ed2024] p-6 overflow-hidden relative">
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-black/10 rounded-full blur-[20px]" />
              <h3 className="text-white font-black text-base mb-2 relative z-10">Free Consultation</h3>
              <p className="text-white/80 text-sm leading-relaxed mb-4 relative z-10">
                Book a free 30-minute strategy call with our senior engineers and designers.
              </p>
              <div className="space-y-2 relative z-10">
                {['No commitment required', 'Expert technical advice', 'Project estimation', 'Strategy recommendations'].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs text-white/90">
                    <CheckCircle2 size={12} className="text-white shrink-0" /> {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-white border border-black/6 shadow-sm p-6">
              <h3 className="text-[#0a0a0a] font-black text-sm mb-4">Our Promise</h3>
              <div className="space-y-3">
                {[
                  { icon: Clock, text: 'Response within 24 hours', color: 'text-blue-500' },
                  { icon: CheckCircle2, text: 'No spam, no pressure', color: 'text-emerald-500' },
                  { icon: Mail, text: 'Dedicated project manager', color: 'text-violet-500' },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3">
                    <item.icon size={14} className={`${item.color} shrink-0`} />
                    <span className="text-gray-600 text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* ─── FAQ ─── */}
      <SectionWrapper className="bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ed2024]/8 border border-[#ed2024]/20 text-[#ed2024] text-xs font-semibold mb-4 uppercase tracking-widest">FAQ</div>
            <h2 className="text-3xl font-black text-[#0a0a0a]">Common Questions</h2>
          </div>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-4">
            {[
              { q: 'How quickly can you start on my project?', a: 'We typically onboard new projects within 1–2 weeks of signing. For urgent projects, we can often start within days.' },
              { q: 'Do you work with startups or only enterprises?', a: 'We work with both — from pre-revenue startups building their first MVP to enterprise companies automating complex workflows.' },
              { q: 'What makes ARA different from other agencies?', a: "Our AI-first approach. We don't just build traditional software — we integrate AI into our development process and your final product. This means faster delivery, lower costs, and smarter outcomes." },
              { q: 'Can you work within our existing tech stack?', a: 'Yes. We have broad expertise across modern tech stacks and can integrate seamlessly with your existing systems, APIs, and infrastructure.' },
              { q: 'What does a typical project engagement look like?', a: 'Discovery call → detailed proposal → design/architecture → agile development sprints → launch and support. Every step is transparent and collaborative.' },
            ].map((faq, i) => (
              <GlassCard key={faq.q} delay={i * 0.07}>
                <h4 className="text-[#0a0a0a] font-bold mb-2">{faq.q}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
              </GlassCard>
            ))}
          </motion.div>
        </div>
      </SectionWrapper>
    </div>
  )
}

export default Contact
