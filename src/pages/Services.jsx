import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Brain, Smartphone, Globe, Zap, Layers, PenTool, ArrowRight, CheckCircle2 } from 'lucide-react'
import SectionWrapper, { SectionHeader } from '../components/SectionWrapper'
import GlassCard from '../components/GlassCard'

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } }
const fadeUp = { hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] } } }

// color: { iconBg, iconText, tagBg, tagText, dot, accent (top line gradient) }
const services = [
  {
    icon: Brain,
    title: 'Software Development',
    path: '/software-development',
    tag: 'Enterprise',
    desc: 'We build intelligent, scalable, and secure software solutions tailored to your business goals.',
    points: ['Custom Business Software', 'ERP Systems', 'CRM Solutions', 'SaaS Platforms'],
    benefit: 'Smart systems built with automation to improve efficiency.',
    color: { iconBg: 'bg-blue-50', iconText: 'text-blue-500', tagBg: 'bg-blue-50', tagText: 'text-blue-400', dot: 'bg-blue-200', accent: 'via-blue-300/60' },
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    path: '/mobile-app-development',
    tag: 'iOS & Android',
    desc: 'We develop high-performance mobile applications with seamless functionality and engaging user experience.',
    points: ['Android', 'iOS', 'Cross-platform (Flutter / React Native)'],
    benefit: 'Fast, scalable, and user-friendly mobile solutions.',
    color: { iconBg: 'bg-violet-50', iconText: 'text-violet-500', tagBg: 'bg-violet-50', tagText: 'text-violet-400', dot: 'bg-violet-200', accent: 'via-violet-300/60' },
  },
  {
    icon: Globe,
    title: 'Website Development',
    path: '/website-development',
    tag: 'Web',
    desc: 'We create modern, responsive, and conversion-focused websites that elevate your brand.',
    points: ['Business Websites', 'E-Commerce Platforms', 'Landing Pages', 'Portfolio Websites'],
    benefit: 'Designed to attract, engage, and convert users.',
    color: { iconBg: 'bg-emerald-50', iconText: 'text-emerald-500', tagBg: 'bg-emerald-50', tagText: 'text-emerald-400', dot: 'bg-emerald-200', accent: 'via-emerald-300/60' },
  },
  {
    icon: Zap,
    title: 'AI & Automation Solutions',
    path: '/ai-automation',
    tag: 'Core USP',
    highlight: true,
    desc: 'We integrate Artificial Intelligence into your business workflows to reduce manual work and increase productivity.',
    points: ['AI Chatbots', 'Workflow Automation', 'Intelligent Data Processing', 'Predictive Analytics'],
    benefit: 'Reduce costs and improve efficiency with automation.',
    color: {},
  },
  {
    icon: PenTool,
    title: 'UI/UX Design',
    path: '/ui-ux-design',
    tag: 'Premium',
    desc: 'We design intuitive, modern, and user-focused interfaces that enhance user experience and drive engagement.',
    points: ['UI Design', 'UX Strategy', 'Wireframing & Prototyping', 'Design Systems & Branding'],
    benefit: 'Better design = Better user engagement + Higher conversions.',
    color: { iconBg: 'bg-pink-50', iconText: 'text-pink-500', tagBg: 'bg-pink-50', tagText: 'text-pink-400', dot: 'bg-pink-200', accent: 'via-pink-300/60' },
  },
  {
    icon: Layers,
    title: 'Product Development',
    path: '/product-development',
    tag: 'Startup',
    desc: 'We build innovative digital products and scalable SaaS solutions from scratch.',
    points: ['MVP Development', 'Product Strategy', 'SaaS Platforms', 'Continuous Improvements'],
    benefit: 'Turn your ideas into successful digital products.',
    color: { iconBg: 'bg-orange-50', iconText: 'text-orange-400', tagBg: 'bg-orange-50', tagText: 'text-orange-400', dot: 'bg-orange-200', accent: 'via-orange-300/60' },
  },
]

const whyUs = [
  { a: 'AI', b: 'Automation' },
  { a: 'Development', b: 'Design' },
  { a: 'Speed', b: 'Scalability' },
]

const Services = () => {
  return (
    <div>
      {/* ─── HERO ─── */}
      <section className="relative pt-40 pb-20 overflow-hidden bg-white">
        <div className="absolute inset-0 dot-grid opacity-50" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#ed2024]/5 rounded-full blur-[110px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl mx-auto">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ed2024]/8 border border-[#ed2024]/20 text-[#ed2024] text-xs font-semibold mb-6 uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ed2024]" /> What We Offer
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-black text-[#0a0a0a] mb-6 leading-tight">
              Our Services
            </motion.h1>
            <motion.p variants={fadeUp} className="text-gray-500 text-xl leading-relaxed">
              At ARA Discover Technologies, we provide end-to-end digital solutions powered by AI, Automation, and User-Centric Design.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ─── SERVICES GRID ─── */}
      <SectionWrapper className="bg-gray-50">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { delay: i * 0.09, duration: 0.5 } } }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={`relative rounded-2xl overflow-hidden flex flex-col group transition-all duration-300 ${
                s.highlight
                  ? 'bg-[#ed2024] shadow-2xl shadow-[#ed2024]/30'
                  : 'bg-white border border-black/6 shadow-sm hover:shadow-xl hover:shadow-black/8 hover:border-black/12'
              }`}
            >
              {/* Top accent line */}
              {!s.highlight && (
                <div className={`absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent ${s.color.accent} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              )}
              {s.highlight && (
                <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-white/0 via-white/50 to-white/0" />
              )}

              {/* Decorative bg circle */}
              {s.highlight && (
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/8 rounded-full blur-2xl" />
              )}

              <div className="p-7 flex flex-col flex-1">
                {/* Header row */}
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${s.highlight ? 'bg-white/20' : s.color.iconBg}`}>
                    <s.icon size={22} className={s.highlight ? 'text-white' : s.color.iconText} />
                  </div>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    s.highlight ? 'bg-white/20 text-white' : `${s.color.tagBg} ${s.color.tagText}`
                  }`}>
                    {s.tag}
                  </span>
                </div>

                {/* Title & desc */}
                <h3 className={`text-xl font-black mb-2 leading-snug ${s.highlight ? 'text-white' : 'text-[#0a0a0a]'}`}>
                  {s.title}
                </h3>
                <p className={`text-sm leading-relaxed mb-5 ${s.highlight ? 'text-white/75' : 'text-gray-500'}`}>
                  {s.desc}
                </p>

                {/* Points */}
                <ul className="space-y-2 mb-5">
                  {s.points.map((p) => (
                    <li key={p} className={`flex items-center gap-2.5 text-sm ${s.highlight ? 'text-white/90' : 'text-gray-600'}`}>
                      <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${s.highlight ? 'bg-white/60' : s.color.dot}`} />
                      {p}
                    </li>
                  ))}
                </ul>

                {/* Benefit pill */}
                <div className={`rounded-xl px-4 py-2.5 mb-6 ${
                  s.highlight ? 'bg-white/15' : `${s.color.iconBg} border border-black/5`
                }`}>
                  <p className={`text-xs font-semibold leading-relaxed ${s.highlight ? 'text-white' : s.color.iconText}`}>
                    {s.benefit}
                  </p>
                </div>

                {/* CTA */}
                <div className={`mt-auto pt-2 border-t ${s.highlight ? 'border-white/15' : 'border-black/5'}`}>
                  <Link
                    to={s.path}
                    className={`inline-flex items-center justify-between w-full text-sm font-semibold transition-all duration-200 group/link py-2 ${
                      s.highlight ? 'text-white' : s.color.iconText
                    }`}
                  >
                    Explore Service
                    <span className={`w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-200 group-hover/link:translate-x-1 ${
                      s.highlight ? 'bg-white/20' : s.color.iconBg
                    }`}>
                      <ArrowRight size={14} />
                    </span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>

      {/* ─── WHY WE STAND OUT ─── */}
      <SectionWrapper className="bg-white">
        <SectionHeader label="Our Edge" title="Why Our Services Stand Out" subtitle="Unlike traditional companies, we combine the best of both worlds to deliver future-ready solutions." />
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
          {whyUs.map(({ a, b }, i) => (
            <GlassCard key={a} delay={i * 0.1} className="text-center">
              <div className="flex items-center justify-center gap-2">
                <span className="text-[#ed2024] font-black text-lg">{a}</span>
                <span className="text-gray-300 font-light">+</span>
                <span className="text-[#0a0a0a] font-black text-lg">{b}</span>
              </div>
            </GlassCard>
          ))}
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.35 }}
          className="text-center text-gray-500 mt-8 text-base max-w-xl mx-auto"
        >
          This makes us a <span className="text-[#0a0a0a] font-bold">future-ready technology partner</span>, not just a service provider.
        </motion.p>
      </SectionWrapper>

      {/* ─── CTA ─── */}
      <section className="bg-[#0a0a0a] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="relative rounded-3xl border border-white/8 p-12 md:p-20 text-center overflow-hidden">
            <div className="absolute inset-0 dot-grid opacity-[0.04]" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-[#ed2024]/12 rounded-full blur-[70px]" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Not Sure Which Service You Need?</h2>
              <p className="text-gray-400 text-lg max-w-lg mx-auto mb-8">Book a free consultation and we'll help identify exactly what your business needs.</p>
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#ed2024] text-white font-bold hover:bg-[#c0181c] transition-all shadow-xl shadow-[#ed2024]/25 hover:scale-105">
                Book Free Consultation <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Services
