import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Brain, Zap, BarChart3, Bot, Link2, FileText, Mail, RefreshCw, TrendingUp, Clock, DollarSign, ArrowRight, CheckCircle2, Cpu } from 'lucide-react'
import SectionWrapper, { SectionHeader } from '../components/SectionWrapper'
import GlassCard from '../components/GlassCard'

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } }
const fadeUp = { hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] } } }

const offerings = [
  { icon: RefreshCw, title: 'Process Automation', desc: 'Automate data entry, email workflows, report generation, and any repetitive business process.', points: ['Data Entry Automation', 'Email & Notification Bots', 'Report Generation', 'Document Processing'], iconBg: 'bg-blue-50', iconColor: 'text-blue-500' },
  { icon: Bot, title: 'AI Chatbots', desc: '24/7 intelligent customer support agents that handle queries, qualify leads, and book appointments.', points: ['Natural Language Processing', 'Multi-Channel Deployment', 'Lead Qualification', 'CRM Integration'], iconBg: 'bg-violet-50', iconColor: 'text-violet-500' },
  { icon: BarChart3, title: 'Smart Analytics', desc: 'Predictive insights and real-time performance tracking that surfaces hidden patterns from your data.', points: ['Predictive Forecasting', 'Real-Time Dashboards', 'Anomaly Detection', 'Custom KPI Tracking'], iconBg: 'bg-emerald-50', iconColor: 'text-emerald-500' },
  { icon: Link2, title: 'System Integration', desc: 'Connect CRM, ERP, APIs, and third-party tools into a unified automated ecosystem.', points: ['API Integration', 'Webhook Automation', 'Data Synchronization', 'Legacy System Bridging'], iconBg: 'bg-orange-50', iconColor: 'text-orange-400' },
  { icon: FileText, title: 'Document AI', desc: 'Intelligent document processing — extract, classify, and process invoices, contracts, and forms.', points: ['OCR & Data Extraction', 'Contract Analysis', 'Invoice Processing', 'Compliance Checking'], iconBg: 'bg-pink-50', iconColor: 'text-pink-500' },
  { icon: Mail, title: 'Marketing Automation', desc: 'AI-powered marketing sequences that personalize messaging and maximize engagement.', points: ['Behavioral Triggers', 'Personalization Engine', 'A/B Testing', 'Performance Analytics'], iconBg: 'bg-cyan-50', iconColor: 'text-cyan-500' },
]

const results = [
  { icon: Clock, stat: '70%', label: 'Reduction in manual work', iconBg: 'bg-blue-50', iconColor: 'text-blue-500' },
  { icon: TrendingUp, stat: '3x', label: 'Productivity increase', iconBg: 'bg-violet-50', iconColor: 'text-violet-500' },
  { icon: DollarSign, stat: '45%', label: 'Cost reduction', iconBg: 'bg-emerald-50', iconColor: 'text-emerald-500' },
  { icon: Brain, stat: '99.8%', label: 'Process accuracy', iconBg: 'bg-orange-50', iconColor: 'text-orange-400' },
]

const industries = ['E-Commerce', 'Healthcare', 'Finance', 'Real Estate', 'Manufacturing', 'HR & Recruitment', 'Legal', 'Education']

const AIAutomation = () => (
  <div>
    {/* ─── HERO ─── */}
    <section className="relative pt-40 pb-24 overflow-hidden bg-white">
      <div className="absolute inset-0 dot-grid opacity-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#ed2024]/5 rounded-full blur-[120px]" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ed2024]/8 border border-[#ed2024]/20 text-[#ed2024] text-xs font-semibold mb-6 uppercase tracking-widest">
              <Cpu size={13} /> Core USP — AI & Automation
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-black text-[#0a0a0a] mb-6 leading-tight">
              AI First.<br /><span className="text-[#ed2024]">Automation Always.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-gray-500 text-xl leading-relaxed mb-6">
              We use AI internally to speed up development and build AI-powered systems that give clients a competitive advantage in speed, quality, and cost.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col gap-2.5 mb-8">
              {['Automate Everything', 'Enhance Intelligence', 'Deliver Faster'].map((t) => (
                <div key={t} className="flex items-center gap-3">
                  <CheckCircle2 size={17} className="text-[#ed2024] shrink-0" />
                  <span className="text-gray-700 font-semibold">{t}</span>
                </div>
              ))}
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#ed2024] text-white font-bold hover:bg-[#c0181c] transition-all shadow-xl shadow-[#ed2024]/20 hover:scale-105">
                Start Automating <ArrowRight size={18} />
              </Link>
              <Link to="/services" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white text-[#0a0a0a] font-semibold border border-black/10 hover:border-black/20 transition-all hover:scale-105 shadow-sm">
                All Services
              </Link>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
            <div className="rounded-3xl bg-white/80 backdrop-blur-xl border border-black/8 p-8 shadow-xl overflow-hidden relative">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#ed2024]/30 to-transparent" />
              <h3 className="text-[#0a0a0a] font-black text-lg mb-5">Automation Impact</h3>
              <div className="space-y-4">
                {[['Manual Tasks Automated', 15], ['Processing Speed', 95], ['Error Rate Reduction', 95], ['Cost Efficiency Gain', 90]].map(([label, val]) => (
                  <div key={label}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-gray-500">{label}</span>
                      <span className="text-[#ed2024] font-bold">{val}%</span>
                    </div>
                    <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div initial={{ width: 0 }} whileInView={{ width: `${val}%` }} viewport={{ once: true }} transition={{ duration: 1.2, delay: 0.5 }}
                        className="h-full bg-[#ed2024] rounded-full" />
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-5">Average results across 50+ client implementations</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Results */}
    <SectionWrapper className="bg-gray-50" tight>
      <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        {results.map((r, i) => (
          <GlassCard key={r.label} delay={i * 0.09} className="text-center">
            <div className={`w-10 h-10 rounded-xl ${r.iconBg} flex items-center justify-center mx-auto mb-3`}><r.icon size={17} className={r.iconColor} /></div>
            <div className="text-3xl font-black text-[#ed2024] mb-1">{r.stat}</div>
            <div className="text-gray-600 text-xs font-semibold">{r.label}</div>
          </GlassCard>
        ))}
      </motion.div>
    </SectionWrapper>

    <SectionWrapper className="bg-white">
      <SectionHeader label="Our Offerings" title="What We Automate" subtitle="From simple workflow automation to advanced AI systems — we cover the full spectrum." />
      <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {offerings.map((o, i) => (
          <GlassCard key={o.title} delay={i * 0.08}>
            <div className={`w-10 h-10 rounded-xl ${o.iconBg} flex items-center justify-center mb-4`}><o.icon size={19} className={o.iconColor} /></div>
            <h3 className="text-[#0a0a0a] font-bold mb-2">{o.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">{o.desc}</p>
            <ul className="space-y-1.5">
              {o.points.map((p) => (
                <li key={p} className="flex items-center gap-1.5 text-xs text-gray-600"><Zap size={10} className="text-blue-400 shrink-0" />{p}</li>
              ))}
            </ul>
          </GlassCard>
        ))}
      </motion.div>
    </SectionWrapper>

    <SectionWrapper className="bg-gray-50">
      <SectionHeader label="Industries" title="We Automate Across Sectors" subtitle="Our AI and automation solutions are tailored to the unique needs of every industry." />
      <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-wrap gap-3 justify-center">
        {industries.map((ind, i) => (
          <motion.div key={ind} variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { delay: i * 0.05 } } }}
            whileHover={{ scale: 1.06 }}
            className="px-5 py-2.5 rounded-xl bg-white border border-black/8 hover:border-[#ed2024]/25 hover:shadow-[0_4px_16px_rgba(237,32,36,0.07)] text-gray-700 text-sm font-semibold transition-all cursor-default shadow-sm">
            {ind}
          </motion.div>
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
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Ready to Automate Your Business?</h2>
            <p className="text-gray-400 text-lg max-w-lg mx-auto mb-8">Book a free automation audit and discover where AI can save you the most time and money.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#ed2024] text-white font-bold hover:bg-[#c0181c] transition-all shadow-xl shadow-[#ed2024]/25 hover:scale-105">
              Get a Free Audit <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  </div>
)

export default AIAutomation
