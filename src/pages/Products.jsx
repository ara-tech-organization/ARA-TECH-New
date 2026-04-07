import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Layers, Zap, Brain, ArrowRight, Sparkles, Clock } from 'lucide-react'

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } }
const fadeUp = { hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] } } }

const products = [
  {
    icon: Zap,
    title: 'Business Automation Tools',
    desc: 'Smart automation systems that eliminate repetitive tasks, streamline workflows, and help your business run efficiently — with less manual effort.',
    features: ['Workflow Automation', 'Data Entry Elimination', 'Notification Systems', 'Report Generation'],
    iconBg: 'bg-blue-50', iconColor: 'text-blue-500', border: 'border-blue-100',
  },
  {
    icon: Layers,
    title: 'SaaS Platforms',
    desc: 'Cloud-based software platforms built for scale — subscription-based, multi-tenant, and ready for global users from day one.',
    features: ['Multi-Tenant Architecture', 'Subscription Billing', 'Role-Based Access', 'Analytics Built-In'],
    iconBg: 'bg-violet-50', iconColor: 'text-violet-500', border: 'border-violet-100',
  },
  {
    icon: Brain,
    title: 'AI-Based Applications',
    desc: 'Next-generation applications powered by Artificial Intelligence — from smart recommendations to intelligent automation and predictive systems.',
    features: ['AI Recommendations', 'Predictive Analytics', 'Natural Language Processing', 'Intelligent Automation'],
    iconBg: 'bg-emerald-50', iconColor: 'text-emerald-500', border: 'border-emerald-100',
  },
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
              We create innovative digital products that solve real-world problems — built with AI, automation, and modern technology.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ─── PRODUCTS ─── */}
      <section className="bg-gray-50 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.05 }}
            className="grid md:grid-cols-3 gap-6">
            {products.map((p, i) => (
              <motion.div key={p.title}
                variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } } }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`relative rounded-3xl bg-white border ${p.border} p-8 overflow-hidden group hover:shadow-xl hover:shadow-black/6 transition-all duration-300`}>
                <div className={`absolute -top-10 -right-10 w-40 h-40 ${p.iconBg} rounded-full blur-[50px] opacity-60`} />
                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-2xl ${p.iconBg} flex items-center justify-center mb-6`}>
                    <p.icon size={22} className={p.iconColor} />
                  </div>
                  <h3 className="text-[#0a0a0a] font-black text-xl mb-3 leading-snug">{p.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">{p.desc}</p>
                  <div className="space-y-2">
                    {p.features.map((f) => (
                      <div key={f} className="flex items-center gap-2 text-xs text-gray-600">
                        <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${p.iconColor.replace('text-', 'bg-')}`} />
                        {f}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Coming Soon Banner */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-8 relative rounded-3xl bg-white border border-black/6 p-10 overflow-hidden text-center">
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-64 h-32 bg-[#ed2024]/5 rounded-full blur-[50px]" />
            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                <Clock size={18} className="text-gray-400" />
              </div>
              <div className="text-center sm:text-left">
                <div className="text-[#0a0a0a] font-black text-lg">More Products Coming Soon</div>
                <div className="text-gray-400 text-sm">We're building more innovative products. Stay tuned.</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-[#0a0a0a] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="relative rounded-3xl border border-white/8 p-12 md:p-20 text-center overflow-hidden">
            <div className="absolute inset-0 dot-grid opacity-[0.04]" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-[#ed2024]/12 rounded-full blur-[70px]" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Interested in Our Products?</h2>
              <p className="text-gray-400 text-lg max-w-lg mx-auto mb-8">Get in touch to learn more or discuss how our products can work for your business.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#ed2024] text-white font-bold hover:bg-[#c0181c] transition-all shadow-xl shadow-[#ed2024]/25 hover:scale-105">
                  Get in Touch <ArrowRight size={18} />
                </Link>
                <Link to="/services" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/6 border border-white/10 text-white font-semibold hover:bg-white/10 transition-all">
                  View Our Services <ArrowRight size={18} />
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
