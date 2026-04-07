import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Lightbulb, Search, Layers, Rocket, TrendingUp, Users, CheckCircle2, ArrowRight, Brain, BarChart3, Shield, Zap, PenTool } from 'lucide-react'
import SectionWrapper, { SectionHeader } from '../components/SectionWrapper'
import GlassCard from '../components/GlassCard'

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } }
const fadeUp = { hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] } } }

const stages = [
  { icon: Search, stage: '01', title: 'Idea Validation', desc: 'Market research, competitor analysis, and user discovery to validate your concept before writing code.', deliverables: ['Market Analysis Report', 'Competitive Landscape', 'User Persona Maps', 'Feasibility Assessment'], iconBg: 'bg-blue-50', iconColor: 'text-blue-500' },
  { icon: PenTool, stage: '02', title: 'Product Strategy', desc: 'Define product vision, roadmap, core features, and success metrics aligned with business goals.', deliverables: ['Product Vision Doc', 'Feature Prioritization', 'Technical Roadmap', 'KPI Framework'], iconBg: 'bg-violet-50', iconColor: 'text-violet-500' },
  { icon: Layers, stage: '03', title: 'MVP Development', desc: 'Build a lean, focused MVP with core value proposition — fast enough to test, solid enough to impress.', deliverables: ['MVP Web/Mobile App', 'Admin Dashboard', 'Core API Layer', 'Analytics Integration'], iconBg: 'bg-emerald-50', iconColor: 'text-emerald-500' },
  { icon: Users, stage: '04', title: 'User Testing', desc: 'Launch to early users, gather feedback, and rapidly iterate to improve product-market fit.', deliverables: ['Beta Testing Program', 'User Feedback Analysis', 'Iteration Sprints', 'Conversion Optimization'], iconBg: 'bg-orange-50', iconColor: 'text-orange-400' },
  { icon: Rocket, stage: '05', title: 'Full Launch', desc: 'Production-grade launch with full feature set, performance optimization, and go-to-market support.', deliverables: ['Production Deployment', 'App Store Publishing', 'Performance Tuning', 'Launch Strategy'], iconBg: 'bg-pink-50', iconColor: 'text-pink-500' },
  { icon: TrendingUp, stage: '06', title: 'Scale & Grow', desc: 'Continuous product growth through data-driven decisions, AI automation, and architecture scaling.', deliverables: ['Scaling Infrastructure', 'AI Feature Expansion', 'Growth Analytics', 'Ongoing Optimization'], iconBg: 'bg-cyan-50', iconColor: 'text-cyan-500' },
]

const productTypes = [
  { icon: Brain, title: 'AI-Based Applications', desc: 'Products with AI at their core — recommendation engines, prediction tools, intelligent assistants.', iconBg: 'bg-blue-50', iconColor: 'text-blue-500' },
  { icon: Layers, title: 'SaaS Platforms', desc: 'Multi-tenant SaaS with subscription billing, analytics, and enterprise features.', iconBg: 'bg-violet-50', iconColor: 'text-violet-500' },
  { icon: Zap, title: 'Automation Products', desc: 'No-code / low-code automation tools that empower businesses without technical expertise.', iconBg: 'bg-emerald-50', iconColor: 'text-emerald-500' },
  { icon: BarChart3, title: 'Data & Analytics Platforms', desc: 'Business intelligence products that turn raw data into actionable strategic insights.', iconBg: 'bg-orange-50', iconColor: 'text-orange-400' },
  { icon: Shield, title: 'Compliance & Security Tools', desc: 'Products that help businesses stay compliant, secure, and audit-ready.', iconBg: 'bg-pink-50', iconColor: 'text-pink-500' },
  { icon: Users, title: 'Marketplace Platforms', desc: 'Two-sided marketplaces, community platforms, and network-effect businesses.', iconBg: 'bg-cyan-50', iconColor: 'text-cyan-500' },
]

const ProductDevelopment = () => (
  <div>
    {/* ─── HERO ─── */}
    <section className="relative pt-40 pb-24 overflow-hidden bg-white">
      <div className="absolute inset-0 dot-grid opacity-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#ed2024]/5 rounded-full blur-[120px]" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ed2024]/8 border border-[#ed2024]/20 text-[#ed2024] text-xs font-semibold mb-6 uppercase tracking-widest">
              <Lightbulb size={13} /> Product Development
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-black text-[#0a0a0a] mb-6 leading-tight">
              From Idea to<br /><span className="text-[#ed2024]">Market-Ready</span><br />Product
            </motion.h1>
            <motion.p variants={fadeUp} className="text-gray-500 text-xl leading-relaxed mb-8">
              We partner with founders, startups, and enterprises to validate ideas, build MVPs, and scale AI-powered products to market.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#ed2024] text-white font-bold hover:bg-[#c0181c] transition-all shadow-xl shadow-[#ed2024]/20 hover:scale-105">
                Discuss Your Idea <ArrowRight size={18} />
              </Link>
              <Link to="/products" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white text-[#0a0a0a] font-semibold border border-black/10 hover:border-black/20 transition-all hover:scale-105 shadow-sm">
                View Our Products
              </Link>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
            <div className="rounded-3xl bg-white/80 backdrop-blur-xl border border-black/8 p-8 shadow-xl overflow-hidden relative">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#ed2024]/30 to-transparent" />
              <h3 className="text-[#0a0a0a] font-black text-lg mb-5">Products We've Launched</h3>
              <div className="space-y-3">
                {[
                  { name: 'B2B SaaS Platforms', count: '12+', growth: '+180% ARR' },
                  { name: 'Consumer Mobile Apps', count: '8+', growth: '500K+ users' },
                  { name: 'AI-Powered Tools', count: '15+', growth: '95% retention' },
                  { name: 'Marketplace Products', count: '5+', growth: '$5M+ GMV' },
                ].map((p) => (
                  <div key={p.name} className="flex items-center justify-between py-2.5 border-b border-black/5 last:border-0">
                    <div>
                      <div className="text-[#0a0a0a] text-sm font-bold">{p.name}</div>
                      <div className="text-gray-400 text-xs">{p.count} launched</div>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-green-50 text-green-600 text-xs font-bold border border-green-200">{p.growth}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    <SectionWrapper className="bg-gray-50">
      <SectionHeader label="Our Process" title="From Idea to Growth" subtitle="A proven 6-stage product development framework used by successful founders and enterprises." />
      <div className="space-y-4">
        {stages.map((stage, i) => (
          <motion.div key={stage.title} initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.07 }}
            className="relative rounded-2xl bg-white border border-black/6 hover:border-[#ed2024]/20 transition-all p-6 shadow-sm group">
            <div className="grid sm:grid-cols-[auto_1fr_auto] gap-5 items-start">
              <div className="text-5xl font-black text-[#ed2024]/15 leading-none w-16 shrink-0">{stage.stage}</div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-9 h-9 rounded-xl ${stage.iconBg} flex items-center justify-center`}>
                    <stage.icon size={17} className={stage.iconColor} />
                  </div>
                  <h3 className="text-[#0a0a0a] font-black text-base group-hover:text-[#ed2024] transition-colors">{stage.title}</h3>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{stage.desc}</p>
              </div>
              <div className="sm:w-52 shrink-0">
                <div className="text-xs text-gray-400 uppercase tracking-wider mb-2 font-semibold">Deliverables</div>
                <div className="space-y-1.5">
                  {stage.deliverables.map((d) => (
                    <div key={d} className="flex items-center gap-2 text-xs text-gray-500">
                      <CheckCircle2 size={10} className="text-[#ed2024] shrink-0" /> {d}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>

    <SectionWrapper className="bg-white">
      <SectionHeader label="Specializations" title="Types of Products We Build" subtitle="We specialize in AI-first, data-driven digital products across multiple categories." />
      <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {productTypes.map((p, i) => (
          <GlassCard key={p.title} delay={i * 0.08}>
            <div className={`w-10 h-10 rounded-xl ${p.iconBg} flex items-center justify-center mb-3`}><p.icon size={18} className={p.iconColor} /></div>
            <h3 className="text-[#0a0a0a] font-bold mb-1.5">{p.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
          </GlassCard>
        ))}
      </motion.div>
    </SectionWrapper>

    <section className="bg-[#0a0a0a] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="relative rounded-3xl border border-white/8 p-12 md:p-20 text-center overflow-hidden">
          <div className="absolute inset-0 dot-grid opacity-[0.04]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-[#ed2024]/12 rounded-full blur-[70px]" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Got a Product Idea?</h2>
            <p className="text-gray-400 text-lg max-w-lg mx-auto mb-8">Let's validate it, build it, and scale it together. Book a free product strategy session today.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#ed2024] text-white font-bold hover:bg-[#c0181c] transition-all shadow-xl shadow-[#ed2024]/25 hover:scale-105">
              Book Strategy Session <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  </div>
)

export default ProductDevelopment
