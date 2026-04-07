import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Brain, Smartphone, Globe, Zap, Star, Quote, ArrowRight, CheckCircle2 } from 'lucide-react'
import SectionWrapper, { SectionHeader } from '../components/SectionWrapper'
import GlassCard from '../components/GlassCard'

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } }
const fadeUp = { hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] } } }

const projects = [
  { icon: Brain, category: 'Software Development', title: 'Enterprise ERP System', client: 'Manufacturing Co.', desc: 'Custom ERP with AI-powered demand forecasting, inventory management, and automated procurement.', tags: ['React', 'Node.js', 'AI/ML', 'PostgreSQL'], results: ['60% reduction in manual work', '40% faster procurement', 'Real-time inventory tracking'], iconBg: 'bg-blue-50', iconColor: 'text-blue-500' },
  { icon: Smartphone, category: 'Mobile App', title: 'HealthTrack Mobile App', client: 'Healthcare Startup', desc: 'AI-powered health monitoring app with real-time vitals tracking, smart recommendations, and telemedicine.', tags: ['Flutter', 'Firebase', 'AI/ML', 'HL7 FHIR'], results: ['50K+ downloads in 3 months', '4.8 App Store rating', '85% daily active users'], iconBg: 'bg-violet-50', iconColor: 'text-violet-500' },
  { icon: Globe, category: 'Website Development', title: 'E-Commerce Platform', client: 'Fashion Brand', desc: 'High-performance e-commerce with AI product recommendations, personalized shopping, and automated inventory.', tags: ['Next.js', 'Shopify', 'AI', 'Stripe'], results: ['3x conversion rate increase', '200% traffic growth', '$2M+ annual revenue'], iconBg: 'bg-emerald-50', iconColor: 'text-emerald-500' },
  { icon: Zap, category: 'AI & Automation', title: 'Sales Automation System', client: 'B2B SaaS Company', desc: 'End-to-end sales automation with AI lead scoring, automated follow-ups, and predictive deal forecasting.', tags: ['Python', 'OpenAI', 'HubSpot', 'Zapier'], results: ['300% increase in qualified leads', '70% reduction in manual outreach', '45% shorter sales cycle'], iconBg: 'bg-orange-50', iconColor: 'text-orange-400' },
  { icon: Brain, category: 'SaaS Product', title: 'HR Management Platform', client: 'HR Tech Startup', desc: 'Comprehensive HR SaaS with AI-powered recruitment, payroll automation, and performance analytics.', tags: ['React', 'Django', 'AWS', 'ML'], results: ['500+ companies onboarded', '$1.2M ARR achieved', 'Series A funded'], iconBg: 'bg-pink-50', iconColor: 'text-pink-500' },
  { icon: Globe, category: 'AI Chatbot', title: 'Customer Support AI', client: 'Telecom Company', desc: '24/7 AI customer support handling 90% of queries automatically with seamless human handoff.', tags: ['GPT-4', 'Python', 'Twilio', 'WebSocket'], results: ['90% query resolution rate', '65% cost reduction', '24/7 availability'], iconBg: 'bg-cyan-50', iconColor: 'text-cyan-500' },
]

const testimonials = [
  { name: 'Sarah Mitchell', role: 'CEO, TechVenture Corp', rating: 5, text: 'ARA Discover Technologies transformed our business with automation. What used to take 3 days now happens in 3 hours. Their AI-first approach is genuinely different from any agency we\'ve worked with.' },
  { name: 'Raj Patel', role: 'CTO, HealthStart Inc.', rating: 5, text: 'Highly professional team with strong AI expertise. They delivered our mobile app on time and on budget, and the quality exceeded our expectations.' },
  { name: 'Emma Johnson', role: 'Founder, FashionFlow', rating: 5, text: 'The e-commerce platform they built tripled our conversion rate. Their understanding of both technology and business outcomes is rare — they don\'t just code, they solve problems.' },
  { name: 'Michael Chen', role: 'VP Engineering, DataSync', rating: 5, text: '70% reduction in manual work in the first month. Their team is sharp, responsive, and truly talented. The automation project exceeded every KPI we set.' },
]

const Projects = () => {
  return (
    <div>
      {/* ─── HERO ─── */}
      <section className="relative pt-40 pb-20 overflow-hidden bg-white">
        <div className="absolute inset-0 dot-grid opacity-50" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#ed2024]/5 rounded-full blur-[110px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl mx-auto">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ed2024]/8 border border-[#ed2024]/20 text-[#ed2024] text-xs font-semibold mb-6 uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ed2024]" /> Portfolio & Testimonials
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-black text-[#0a0a0a] mb-6 leading-tight">
              Our Work Speaks<br /><span className="text-[#ed2024]">For Itself</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-gray-500 text-xl leading-relaxed">
              AI-powered software, mobile apps, automation systems, and digital products that have transformed businesses worldwide.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ─── PROJECTS ─── */}
      <SectionWrapper className="bg-gray-50">
        <SectionHeader label="Case Studies" title="Selected Projects" subtitle="A selection of projects across industries — each delivering measurable business impact." />
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.05 }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { delay: i * 0.09, duration: 0.5 } } }}
              whileHover={{ scale: 1.02, y: -3, transition: { duration: 0.18 } }}
              className="relative rounded-2xl bg-white border border-black/6 hover:border-black/12 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] overflow-hidden transition-all duration-300 group p-6 shadow-sm"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-100 to-transparent" />
              <div className="flex items-start justify-between mb-4">
                <div className={`w-10 h-10 rounded-xl ${p.iconBg} flex items-center justify-center`}>
                  <p.icon size={19} className={p.iconColor} />
                </div>
                <span className="text-xs text-gray-400 font-medium">{p.client}</span>
              </div>
              <div className="text-xs text-[#ed2024] font-bold uppercase tracking-wider mb-2">{p.category}</div>
              <h3 className="text-[#0a0a0a] font-black text-base mb-2 group-hover:text-[#ed2024] transition-colors">{p.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{p.desc}</p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {p.tags.map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded bg-gray-100 text-gray-500 text-xs font-medium">{t}</span>
                ))}
              </div>
              <div className="border-t border-black/5 pt-4 space-y-1.5">
                {p.results.map((r) => (
                  <div key={r} className="flex items-center gap-2 text-xs text-gray-600">
                    <CheckCircle2 size={11} className="text-[#ed2024] shrink-0" /> {r}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>

      {/* ─── TESTIMONIALS ─── */}
      <SectionWrapper className="bg-white">
        <SectionHeader label="Testimonials" title="What Our Clients Say" subtitle="Real feedback from real clients who've experienced the ARA difference." />
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } } }}
              whileHover={{ scale: 1.02, transition: { duration: 0.18 } }}
              className="relative rounded-2xl bg-white border border-black/6 hover:border-black/12 hover:shadow-[0_8px_24px_rgba(0,0,0,0.07)] p-7 shadow-sm overflow-hidden"
            >
              <div className="absolute top-5 right-5 text-[#ed2024]/10">
                <Quote size={36} />
              </div>
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={14} className="text-[#ed2024] fill-[#ed2024]" />
                ))}
              </div>
              <p className="text-gray-600 text-base leading-relaxed mb-6 italic">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                  <span className="text-blue-500 font-black text-sm">{t.name[0]}</span>
                </div>
                <div>
                  <div className="text-[#0a0a0a] font-bold text-sm">{t.name}</div>
                  <div className="text-gray-400 text-xs">{t.role}</div>
                </div>
              </div>
            </motion.div>
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
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Your Project Could Be Next</h2>
              <p className="text-gray-400 text-lg max-w-lg mx-auto mb-8">Join 50+ businesses that trust ARA Discover Technologies to deliver exceptional results.</p>
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#ed2024] text-white font-bold hover:bg-[#c0181c] transition-all shadow-xl shadow-[#ed2024]/25 hover:scale-105">
                Start Your Project <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Projects
