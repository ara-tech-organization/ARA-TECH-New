import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Layers, Zap, BarChart3, Bot, ArrowRight, Sparkles, Clock, ChevronRight } from 'lucide-react'
import SectionWrapper, { SectionHeader } from '../components/SectionWrapper'
import GlassCard from '../components/GlassCard'

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } }
const fadeUp = { hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] } } }

const products = [
  { icon: Zap, title: 'Business Automation Suite', tag: 'Available Now', available: true, desc: 'A comprehensive automation platform that streamlines workflows, eliminates repetitive tasks, and integrates with your existing tools.', features: ['Drag & Drop Workflow Builder', 'CRM & ERP Integration', 'Smart Notifications', 'Analytics Dashboard'], iconBg: 'bg-blue-50', iconColor: 'text-blue-500' },
  { icon: Layers, title: 'SaaS Launch Platform', tag: 'Available Now', available: true, desc: 'A ready-to-deploy SaaS boilerplate with multi-tenancy, subscription management, and role-based access control.', features: ['Multi-Tenant Architecture', 'Stripe Billing Integration', 'Role-Based Access', 'White-Label Ready'], iconBg: 'bg-violet-50', iconColor: 'text-violet-500' },
  { icon: Bot, title: 'AI Assistant Builder', tag: 'Coming Soon', available: false, desc: 'Build custom AI chatbots and assistants without writing a single line of code. Train on your own data and deploy anywhere.', features: ['No-Code AI Training', 'Multi-Channel Deployment', 'Lead Qualification', 'Live Handoff Support'], iconBg: 'bg-emerald-50', iconColor: 'text-emerald-500' },
  { icon: BarChart3, title: 'Smart Analytics Engine', tag: 'Coming Soon', available: false, desc: 'Predictive analytics and business intelligence platform powered by AI — surface actionable insights automatically.', features: ['Predictive Dashboards', 'Automated Reports', 'Anomaly Detection', 'Data Integration APIs'], iconBg: 'bg-orange-50', iconColor: 'text-orange-400' },
]

const Products = () => {
  return (
    <div>
      {/* ─── HERO ─── */}
      <section className="relative pt-40 pb-20 overflow-hidden bg-white">
        <div className="absolute inset-0 dot-grid opacity-50" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#ed2024]/5 rounded-full blur-[110px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl mx-auto">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ed2024]/8 border border-[#ed2024]/20 text-[#ed2024] text-xs font-semibold mb-6 uppercase tracking-widest">
              <Sparkles size={13} /> Our Products
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-black text-[#0a0a0a] mb-6 leading-tight">
              Digital Products That<br /><span className="text-[#ed2024]">Solve Real Problems</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-gray-500 text-xl leading-relaxed">
              Innovative digital products that solve real-world business problems — from automation suites to AI-powered applications.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ─── PRODUCTS ─── */}
      <SectionWrapper className="bg-gray-50">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.05 }} className="grid md:grid-cols-2 gap-5">
          {products.map((p, i) => (
            <motion.div
              key={p.title}
              variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } } }}
              whileHover={{ scale: 1.02, transition: { duration: 0.18 } }}
              className={`relative rounded-2xl p-7 border overflow-hidden transition-all duration-300 group ${
                p.available ? 'bg-white border-black/6 hover:border-black/12 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] shadow-sm' : 'bg-gray-50/80 border-black/5 opacity-80'
              }`}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
              <div className="flex items-start justify-between mb-5">
                <div className={`w-12 h-12 rounded-2xl ${p.iconBg} flex items-center justify-center`}>
                  <p.icon size={22} className={p.iconColor} />
                </div>
                <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${
                  p.available ? 'bg-green-50 text-green-600 border-green-200' : 'bg-gray-100 text-gray-400 border-gray-200'
                }`}>
                  {!p.available && <Clock size={11} />} {p.tag}
                </div>
              </div>
              <h3 className={`text-xl font-black mb-3 transition-colors ${p.available ? 'text-[#0a0a0a] group-hover:text-[#ed2024]' : 'text-gray-500'}`}>{p.title}</h3>
              <p className="text-gray-500 leading-relaxed mb-5 text-sm">{p.desc}</p>
              <div className="grid grid-cols-2 gap-2 mb-5">
                {p.features.map((f) => (
                  <div key={f} className="flex items-center gap-1.5 text-xs text-gray-600">
                    <span className="w-1 h-1 rounded-full bg-gray-400 shrink-0" /> {f}
                  </div>
                ))}
              </div>
              {p.available ? (
                <Link to="/contact" className="inline-flex items-center gap-1 text-xs font-bold text-[#ed2024] hover:text-[#c0181c] transition-colors">
                  Learn More <ChevronRight size={12} />
                </Link>
              ) : (
                <span className="inline-flex items-center gap-1 text-xs text-gray-400"><Clock size={12} /> Coming Soon</span>
              )}
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>

      {/* ─── PHILOSOPHY ─── */}
      <SectionWrapper className="bg-white">
        <SectionHeader label="Why We Build Products" title="Beyond Services — We Ship Products" subtitle="We don't just build for clients. We build our own products because we believe in eating our own cooking." />
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid sm:grid-cols-3 gap-5">
          {[
            { title: 'Real-World Tested', desc: 'Every product is stress-tested in real business environments before release.' },
            { title: 'AI at the Core', desc: "AI isn't bolted on — it's built into the foundation of every product we create." },
            { title: 'Built to Scale', desc: 'From 10 users to 10,000 — our products handle growth without breaking.' },
          ].map((item, i) => (
            <GlassCard key={item.title} delay={i * 0.09}>
              <div className="text-4xl font-black text-[#ed2024]/20 mb-3 leading-none">0{i + 1}</div>
              <h3 className="text-[#0a0a0a] font-black text-base mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </GlassCard>
          ))}
        </motion.div>
      </SectionWrapper>

      {/* ─── CTA ─── */}
      <section className="bg-[#0a0a0a] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="relative rounded-3xl border border-white/8 p-12 md:p-20 text-center overflow-hidden">
            <div className="absolute inset-0 dot-grid opacity-[0.04]" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-[#ed2024]/12 rounded-full blur-[70px]" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Interested in Early Access?</h2>
              <p className="text-gray-400 text-lg max-w-lg mx-auto mb-8">Join our waitlist or discuss how our products can transform your business operations.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#ed2024] text-white font-bold hover:bg-[#c0181c] transition-all shadow-xl shadow-[#ed2024]/25 hover:scale-105">
                  Get Early Access <ArrowRight size={18} />
                </Link>
                <Link to="/services" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/8 text-white font-semibold border border-white/15 hover:bg-white/12 transition-all hover:scale-105">
                  View Services
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Products
