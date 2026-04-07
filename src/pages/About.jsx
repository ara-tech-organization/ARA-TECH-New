import { motion } from 'framer-motion'
import { Target, Eye, Search, PenTool, Code2, Rocket, TrendingUp, CheckCircle2 } from 'lucide-react'
import SectionWrapper, { SectionHeader } from '../components/SectionWrapper'
import GlassCard from '../components/GlassCard'

const fadeUp = (d = 0) => ({
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, delay: d, ease: [0.25, 0.1, 0.25, 1] } },
})
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } }

const approach = [
  { icon: Search, title: 'Discover', desc: 'We understand your business deeply.', iconBg: 'bg-blue-50', iconColor: 'text-blue-500' },
  { icon: PenTool, title: 'Design', desc: 'We craft smart and scalable solutions.', iconBg: 'bg-violet-50', iconColor: 'text-violet-500' },
  { icon: Code2, title: 'Develop', desc: 'We build using modern technologies and AI tools.', iconBg: 'bg-emerald-50', iconColor: 'text-emerald-500' },
  { icon: Rocket, title: 'Deploy', desc: 'We launch fast and efficiently.', iconBg: 'bg-orange-50', iconColor: 'text-orange-400' },
  { icon: TrendingUp, title: 'Scale', desc: 'We continuously improve and automate.', iconBg: 'bg-pink-50', iconColor: 'text-pink-500' },
]

const About = () => {
  return (
    <div>
      {/* ─── HERO ─── */}
      <section className="relative pt-40 pb-20 overflow-hidden bg-white">
        <div className="absolute inset-0 dot-grid opacity-50" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#ed2024]/5 rounded-full blur-[110px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl mx-auto">
            <motion.div variants={fadeUp()} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ed2024]/8 border border-[#ed2024]/20 text-[#ed2024] text-xs font-semibold mb-6 uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ed2024] animate-pulse" /> About ARA Discover Technologies
            </motion.div>
            <motion.h1 variants={fadeUp(0.1)} className="text-5xl md:text-6xl font-black text-[#0a0a0a] mb-6 leading-tight">
              We Are Problem Solvers,<br /><span className="text-[#ed2024]">Not Just Developers</span>
            </motion.h1>
            <motion.p variants={fadeUp(0.2)} className="text-gray-500 text-xl leading-relaxed">
              ARA Discover Technologies is a technology company focused on delivering intelligent digital solutions through the power of Artificial Intelligence and Automation.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ─── WHO WE ARE + VISION + MISSION ─── */}
      <SectionWrapper className="bg-gray-50">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={fadeUp()} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ed2024]/8 border border-[#ed2024]/20 text-[#ed2024] text-xs font-semibold mb-5 uppercase tracking-widest">
              Our Identity
            </motion.div>
            <motion.h2 variants={fadeUp(0.08)} className="text-3xl md:text-4xl font-black text-[#0a0a0a] mb-5 leading-tight">Who We Are</motion.h2>
            <motion.p variants={fadeUp(0.16)} className="text-gray-500 text-lg leading-relaxed mb-4">
              ARA Discover Technologies is a technology company focused on delivering intelligent digital solutions through the power of Artificial Intelligence and Automation.
            </motion.p>
            <motion.p variants={fadeUp(0.24)} className="text-gray-500 text-lg leading-relaxed">
              We are not just developers — we are problem solvers, innovators, and technology partners.
            </motion.p>
          </motion.div>

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-4">
            <GlassCard red>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                  <Eye size={20} className="text-blue-500" />
                </div>
                <div>
                  <h3 className="text-[#0a0a0a] font-black text-lg mb-1">Our Vision</h3>
                  <p className="text-gray-500 leading-relaxed text-sm">To become a global leader in AI-driven digital transformation.</p>
                </div>
              </div>
            </GlassCard>
            <GlassCard>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-violet-50 flex items-center justify-center shrink-0">
                  <Target size={20} className="text-violet-500" />
                </div>
                <div>
                  <h3 className="text-[#0a0a0a] font-black text-lg mb-2">Our Mission</h3>
                  <p className="text-gray-500 text-sm mb-3">To empower businesses with:</p>
                  <ul className="space-y-1.5">
                    {['Intelligent software', 'Automated systems', 'Scalable digital platforms'].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle2 size={12} className="text-[#ed2024] shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* ─── APPROACH ─── */}
      <SectionWrapper className="bg-white">
        <SectionHeader label="How We Work" title="Our Approach" subtitle="A proven methodology designed to deliver results — from deep discovery to continuous scaling." />
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {approach.map((step, i) => (
            <GlassCard key={step.title} delay={i * 0.09} className="text-center">
              <div className={`w-11 h-11 rounded-xl ${step.iconBg} flex items-center justify-center mx-auto mb-4`}>
                <step.icon size={20} className={step.iconColor} />
              </div>
              <h3 className="text-[#0a0a0a] font-bold text-base mb-2">{step.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
            </GlassCard>
          ))}
        </motion.div>
      </SectionWrapper>
    </div>
  )
}

export default About
