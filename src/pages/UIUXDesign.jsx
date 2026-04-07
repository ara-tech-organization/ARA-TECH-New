import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { PenTool, Monitor, Smartphone, BarChart3, Grid, RefreshCw, CheckCircle2, ArrowRight, Eye, Users, Layers, Sparkles } from 'lucide-react'
import SectionWrapper, { SectionHeader } from '../components/SectionWrapper'
import GlassCard from '../components/GlassCard'

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } }
const fadeUp = { hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] } } }

const services = [
  { icon: Monitor, title: 'UI Design', desc: 'Modern, pixel-perfect interfaces for web, mobile, and dashboard products.', points: ['Component-Based Design', 'Responsive Layouts', 'Dark & Light Themes', 'Brand Identity Integration'], iconBg: 'bg-blue-50', iconColor: 'text-blue-500' },
  { icon: Eye, title: 'UX Design', desc: 'Seamless user journeys built on research, empathy, and data.', points: ['User Research', 'Journey Mapping', 'Usability Testing', 'Information Architecture'], iconBg: 'bg-violet-50', iconColor: 'text-violet-500' },
  { icon: Grid, title: 'Design Systems', desc: 'Scalable style guides and component libraries for consistency at scale.', points: ['Token-Based Systems', 'Component Libraries', 'Documentation', 'Figma/Storybook Integration'], iconBg: 'bg-emerald-50', iconColor: 'text-emerald-500' },
  { icon: RefreshCw, title: 'Redesign & Optimization', desc: 'Improving existing products for better usability and conversion.', points: ['UX Audit', 'Conversion Analysis', 'A/B Testing', 'Iterative Improvement'], iconBg: 'bg-orange-50', iconColor: 'text-orange-400' },
  { icon: Smartphone, title: 'Mobile App Design', desc: 'Intuitive mobile interfaces following iOS and Android design guidelines.', points: ['iOS & Android Patterns', 'Gesture Navigation', 'Micro-Interactions', 'Accessibility Standards'], iconBg: 'bg-pink-50', iconColor: 'text-pink-500' },
  { icon: BarChart3, title: 'Dashboard & Data Viz', desc: 'Complex data made beautiful through thoughtful dashboard design.', points: ['Analytics Dashboards', 'Chart Design', 'Real-Time Data UI', 'Admin Interfaces'], iconBg: 'bg-cyan-50', iconColor: 'text-cyan-500' },
]

const process = [
  { icon: Users, title: 'Discovery & Research', desc: 'User interviews, competitive analysis, and stakeholder alignment.', iconBg: 'bg-blue-50', iconColor: 'text-blue-500' },
  { icon: Layers, title: 'Wireframing', desc: 'Low-fidelity wireframes mapping structure, flow, and content hierarchy.', iconBg: 'bg-violet-50', iconColor: 'text-violet-500' },
  { icon: PenTool, title: 'Visual Design', desc: 'High-fidelity mockups with full visual language — color, type, spacing.', iconBg: 'bg-emerald-50', iconColor: 'text-emerald-500' },
  { icon: Eye, title: 'Prototyping', desc: 'Interactive Figma prototypes for user testing and stakeholder presentations.', iconBg: 'bg-orange-50', iconColor: 'text-orange-400' },
  { icon: CheckCircle2, title: 'Handoff & Support', desc: 'Developer-ready files with specs, tokens, and ongoing design support.', iconBg: 'bg-pink-50', iconColor: 'text-pink-500' },
]

const tools = ['Figma', 'Adobe XD', 'Framer', 'Protopie', 'Principle', 'Storybook', 'Lottie', 'Zeroheight']

const UIUXDesign = () => (
  <div>
    {/* ─── HERO ─── */}
    <section className="relative pt-40 pb-24 overflow-hidden bg-white">
      <div className="absolute inset-0 dot-grid opacity-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#ed2024]/5 rounded-full blur-[120px]" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ed2024]/8 border border-[#ed2024]/20 text-[#ed2024] text-xs font-semibold mb-6 uppercase tracking-widest">
              <PenTool size={13} /> UI/UX Design
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-black text-[#0a0a0a] mb-6 leading-tight">
              Design with<br /><span className="text-[#ed2024]">Intelligence</span><br />& Purpose
            </motion.h1>
            <motion.p variants={fadeUp} className="text-gray-500 text-xl leading-relaxed mb-8">
              Modern, intuitive interfaces and seamless user journeys for web, mobile, and dashboard products — combining design intelligence with strategic thinking.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#ed2024] text-white font-bold hover:bg-[#c0181c] transition-all shadow-xl shadow-[#ed2024]/20 hover:scale-105">
                Start a Design Project <ArrowRight size={18} />
              </Link>
              <Link to="/projects" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white text-[#0a0a0a] font-semibold border border-black/10 hover:border-black/20 transition-all hover:scale-105 shadow-sm">
                View Portfolio
              </Link>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
            <div className="rounded-3xl bg-white/80 backdrop-blur-xl border border-black/8 p-8 shadow-xl overflow-hidden relative">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#ed2024]/30 to-transparent" />
              <div className="flex items-center gap-2 mb-5">
                <Sparkles size={17} className="text-violet-500" />
                <span className="text-[#0a0a0a] font-black">Design Metrics</span>
              </div>
              <div className="space-y-3">
                {[['User Satisfaction', '94%', 'Avg CSAT score'], ['Conversion Lift', '+38%', 'Average after redesign'], ['Task Success Rate', '97%', 'From usability testing'], ['NPS Score', '72', 'Client recommendation score']].map(([label, val, note]) => (
                  <div key={label} className="flex items-center justify-between py-2.5 border-b border-black/5 last:border-0">
                    <div>
                      <div className="text-[#0a0a0a] text-sm font-bold">{label}</div>
                      <div className="text-gray-400 text-xs">{note}</div>
                    </div>
                    <div className="text-[#ed2024] font-black text-xl">{val}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    <SectionWrapper className="bg-gray-50">
      <SectionHeader label="Design Services" title="What We Design" subtitle="Full-spectrum design services from initial research to final developer-ready handoff." />
      <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((s, i) => (
          <GlassCard key={s.title} delay={i * 0.08}>
            <div className={`w-10 h-10 rounded-xl ${s.iconBg} flex items-center justify-center mb-4`}><s.icon size={19} className={s.iconColor} /></div>
            <h3 className="text-[#0a0a0a] font-bold mb-2">{s.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.desc}</p>
            <ul className="space-y-1.5">
              {s.points.map((p) => (
                <li key={p} className="flex items-center gap-2 text-xs text-gray-600"><CheckCircle2 size={11} className="text-emerald-500 shrink-0" />{p}</li>
              ))}
            </ul>
          </GlassCard>
        ))}
      </motion.div>
    </SectionWrapper>

    <SectionWrapper className="bg-white">
      <SectionHeader label="Design Process" title="How We Design" subtitle="A structured process balancing creativity with strategic thinking and user validation." />
      <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {process.map((step, i) => (
            <GlassCard key={step.title} delay={i * 0.09} className="text-center">
              <div className={`w-10 h-10 rounded-xl ${step.iconBg} flex items-center justify-center mx-auto mb-3`}>
                <step.icon size={18} className={step.iconColor} />
              </div>
              <h3 className="text-[#0a0a0a] font-bold text-sm mb-1.5">{step.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
            </GlassCard>
          ))}
        </motion.div>
    </SectionWrapper>

    <SectionWrapper className="bg-gray-50">
      <SectionHeader label="Design Tools" title="Tools We Use" subtitle="Industry-standard design tools for maximum compatibility and handoff quality." />
      <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-wrap gap-3 justify-center">
        {tools.map((tool, i) => (
          <motion.div key={tool} variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { delay: i * 0.05 } } }}
            whileHover={{ scale: 1.07 }}
            className="px-5 py-2.5 rounded-xl bg-white border border-black/8 hover:border-[#ed2024]/25 hover:shadow-[0_4px_16px_rgba(237,32,36,0.07)] text-gray-700 text-sm font-semibold transition-all cursor-default shadow-sm">
            {tool}
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
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Ready for a Design Upgrade?</h2>
            <p className="text-gray-400 text-lg max-w-lg mx-auto mb-8">Get a free design audit and see how better UX can directly increase your revenue.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#ed2024] text-white font-bold hover:bg-[#c0181c] transition-all shadow-xl shadow-[#ed2024]/25 hover:scale-105">
              Get a Free Design Audit <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  </div>
)

export default UIUXDesign
