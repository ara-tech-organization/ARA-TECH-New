import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight, Brain, Smartphone, Globe, Zap, ShieldCheck,
  Rocket, DollarSign, Layers, TrendingUp, CheckCircle2,
  ShoppingCart, GraduationCap, HeartPulse, Building2, BarChart3, Lightbulb,
  ChevronRight,
} from 'lucide-react'
import SectionWrapper, { SectionHeader } from '../components/SectionWrapper'
import GlassCard from '../components/GlassCard'

const fadeUp = (d = 0) => ({
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, delay: d, ease: [0.25, 0.1, 0.25, 1] } },
})

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } }

const coreServices = [
  { icon: Brain, title: 'Software Development', desc: 'Scalable, secure, and intelligent software tailored to your business needs.', path: '/software-development', iconBg: 'bg-blue-50', iconColor: 'text-blue-500' },
  { icon: Smartphone, title: 'Mobile App Development', desc: 'High-performance Android & iOS apps with seamless user experience.', path: '/mobile-app-development', iconBg: 'bg-violet-50', iconColor: 'text-violet-500' },
  { icon: Globe, title: 'Website Development', desc: 'Modern, responsive, and conversion-focused websites that perform.', path: '/website-development', iconBg: 'bg-emerald-50', iconColor: 'text-emerald-500' },
  { icon: Zap, title: 'AI & Automation', desc: 'Integrate AI into workflows to reduce manual effort and increase efficiency.', path: '/ai-automation', iconBg: 'bg-orange-50', iconColor: 'text-orange-400' },
]

const whyChooseUs = [
  { icon: Brain, title: 'AI-Driven Development', desc: 'AI at every stage — faster outcomes, smarter results.', iconBg: 'bg-blue-50', iconColor: 'text-blue-500' },
  { icon: Zap, title: 'Automation-Based Workflows', desc: 'Streamlined processes that eliminate repetitive manual work.', iconBg: 'bg-violet-50', iconColor: 'text-violet-500' },
  { icon: Rocket, title: 'Faster Time to Market', desc: 'Ship faster without compromising on quality or stability.', iconBg: 'bg-emerald-50', iconColor: 'text-emerald-500' },
  { icon: DollarSign, title: 'Cost-Effective Solutions', desc: 'Automation reduces overhead, delivering more value at lower cost.', iconBg: 'bg-orange-50', iconColor: 'text-orange-400' },
  { icon: Layers, title: 'Scalable Architecture', desc: 'Built to grow — from startup MVP to enterprise-grade systems.', iconBg: 'bg-pink-50', iconColor: 'text-pink-500' },
  { icon: TrendingUp, title: 'Future-Ready Technology', desc: 'Built with emerging tech so your business stays ahead.', iconBg: 'bg-cyan-50', iconColor: 'text-cyan-500' },
]

const industries = [
  { icon: ShoppingCart, label: 'E-Commerce', iconBg: 'bg-blue-50', iconColor: 'text-blue-500' },
  { icon: GraduationCap, label: 'Education', iconBg: 'bg-violet-50', iconColor: 'text-violet-500' },
  { icon: HeartPulse, label: 'Healthcare', iconBg: 'bg-emerald-50', iconColor: 'text-emerald-500' },
  { icon: Building2, label: 'Real Estate', iconBg: 'bg-orange-50', iconColor: 'text-orange-400' },
  { icon: BarChart3, label: 'Finance', iconBg: 'bg-pink-50', iconColor: 'text-pink-500' },
  { icon: Lightbulb, label: 'Startups & Enterprises', iconBg: 'bg-cyan-50', iconColor: 'text-cyan-500' },
]

const stats = [
  { value: '150+', label: 'Projects Delivered' },
  { value: '50+', label: 'Happy Clients' },
  { value: '5+', label: 'Years Experience' },
  { value: '99%', label: 'Client Satisfaction' },
]

const Home = () => {
  return (
    <div>
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-white">
        {/* Dot grid background */}
        <div className="absolute inset-0 dot-grid opacity-60" />
        {/* Subtle red glow top-center */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#ed2024]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-[#ed2024]/3 rounded-full blur-[100px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ed2024]/8 border border-[#ed2024]/20 text-[#ed2024] text-xs font-semibold mb-8 uppercase tracking-widest"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#ed2024] animate-pulse" />
            AI-First Technology Company
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black text-[#0a0a0a] leading-[1.05] tracking-tight mb-6"
          >
            Transforming Businesses
            <br />
            <span className="text-[#ed2024]">with AI-Driven</span>
            <br />
            Technology
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.25 }}
            className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
          >
            At ARA Discover Technologies, we build intelligent software, powerful mobile apps, and
            high-performing websites — powered by Automation and Artificial Intelligence.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.38 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#ed2024] text-white font-bold text-base hover:bg-[#c0181c] transition-all duration-200 shadow-xl shadow-[#ed2024]/20 hover:shadow-[#ed2024]/35 hover:scale-105"
            >
              Get Started <ArrowRight size={18} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-[#0a0a0a] font-semibold text-base border border-black/10 hover:border-black/20 hover:bg-gray-50 transition-all duration-200 shadow-sm hover:scale-105"
            >
              Book a Free Consultation
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-px bg-black/8 rounded-2xl overflow-hidden border border-black/6 shadow-lg"
          >
            {stats.map((s) => (
              <div key={s.label} className="bg-white/85 backdrop-blur-xl py-6 px-4 text-center">
                <div className="text-3xl font-black text-[#ed2024] mb-1">{s.value}</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider font-medium">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
            className="w-5 h-8 rounded-full border border-black/15 flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-2 rounded-full bg-[#ed2024]" />
          </motion.div>
        </motion.div>
      </section>

      {/* ─── ABOUT INTRO ─── */}
      <SectionWrapper className="bg-gray-50">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={fadeUp()} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ed2024]/8 border border-[#ed2024]/20 text-[#ed2024] text-xs font-semibold mb-5 uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ed2024]" /> Who We Are
            </motion.div>
            <motion.h2 variants={fadeUp(0.08)} className="text-3xl md:text-4xl font-black text-[#0a0a0a] mb-5 leading-tight">
              Innovating the Future<br />
              <span className="text-[#ed2024]">with AI & Automation</span>
            </motion.h2>
            <motion.p variants={fadeUp(0.16)} className="text-gray-500 text-lg leading-relaxed mb-6">
              ARA Discover Technologies is a next-generation tech company delivering service-based solutions and scalable product innovations.
            </motion.p>
            <motion.div variants={stagger} className="space-y-2.5 mb-8">
              {['Smart Software Solutions', 'Mobile Applications', 'Modern Websites', 'AI & Automation Systems'].map((item) => (
                <motion.div key={item} variants={fadeUp()} className="flex items-center gap-3">
                  <CheckCircle2 size={17} className="text-[#ed2024] shrink-0" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </motion.div>
              ))}
            </motion.div>
            <motion.div variants={fadeUp(0.3)}>
              <Link to="/about" className="inline-flex items-center gap-2 text-[#ed2024] font-semibold hover:gap-3 transition-all duration-200 text-sm">
                Learn more about us <ArrowRight size={15} />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-4">
            {[
              { icon: Brain, title: 'AI-First Approach', desc: 'We use AI internally to accelerate development and build AI-powered solutions for every client.', iconBg: 'bg-blue-50', iconColor: 'text-blue-500' },
              { icon: Zap, title: 'Automation-First Delivery', desc: 'Automated workflows reduce cost & time — delivering smarter, faster results for your business.', iconBg: 'bg-violet-50', iconColor: 'text-violet-500' },
              { icon: ShieldCheck, title: 'Proven & Trusted', desc: '150+ delivered projects across industries with a 99% client satisfaction rate.', iconBg: 'bg-emerald-50', iconColor: 'text-emerald-500' },
            ].map((item, i) => (
              <GlassCard key={item.title} delay={i * 0.1}>
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-xl ${item.iconBg} flex items-center justify-center shrink-0`}>
                    <item.icon size={19} className={item.iconColor} />
                  </div>
                  <div>
                    <h3 className="text-[#0a0a0a] font-bold mb-1">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </motion.div>
        </div>
      </SectionWrapper>

      {/* ─── CORE SERVICES ─── */}
      <SectionWrapper className="bg-white">
        <SectionHeader label="What We Build" title="Our Core Services" subtitle="End-to-end technology solutions powered by AI and modern engineering practices." />
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {coreServices.map((s, i) => (
            <GlassCard key={s.title} delay={i * 0.09} className="group cursor-pointer">
              <Link to={s.path} className="block h-full">
                <div className={`w-11 h-11 rounded-xl ${s.iconBg} flex items-center justify-center mb-5`}>
                  <s.icon size={21} className={s.iconColor} />
                </div>
                <h3 className="text-[#0a0a0a] font-bold text-base mb-2 group-hover:text-[#ed2024] transition-colors">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.desc}</p>
                <div className="flex items-center gap-1 text-[#ed2024] text-xs font-semibold opacity-0 group-hover:opacity-100 transition-all translate-y-1 group-hover:translate-y-0">
                  Learn more <ChevronRight size={12} />
                </div>
              </Link>
            </GlassCard>
          ))}
        </motion.div>
      </SectionWrapper>

      {/* ─── AI FIRST USP ─── */}
      <SectionWrapper className="bg-[#0a0a0a]">
        <div className="relative rounded-3xl overflow-hidden border border-white/8 p-10 md:p-16">
          <div className="absolute inset-0 dot-grid opacity-[0.04]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#ed2024]/10 rounded-full blur-[100px]" />
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.div variants={fadeUp()} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ed2024]/12 border border-[#ed2024]/25 text-[#ed2024] text-xs font-semibold mb-6 uppercase tracking-widest">
                Our Unique Advantage
              </motion.div>
              <motion.h2 variants={fadeUp(0.08)} className="text-3xl md:text-4xl font-black text-white mb-5 leading-tight">
                AI-First Approach —<br /><span className="text-[#ed2024]">Unlike Anyone Else</span>
              </motion.h2>
              <motion.p variants={fadeUp(0.16)} className="text-gray-400 text-lg leading-relaxed mb-8">
                We use AI internally to accelerate development, build AI-powered client solutions, and automate workflows to reduce cost & time.
              </motion.p>
              <motion.div variants={stagger} className="grid grid-cols-3 gap-3">
                {['Faster Delivery', 'Smarter Systems', 'Lower Costs'].map((t) => (
                  <motion.div key={t} variants={fadeUp()} className="text-center py-3 px-2 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-[#ed2024] font-bold text-xs">{t}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-4">
              {[
                { title: 'Use AI Internally', desc: 'AI-assisted coding, testing, and QA at every stage.' },
                { title: 'Build AI Solutions', desc: 'Deliver AI-powered products that give clients a competitive edge.' },
                { title: 'Automate Workflows', desc: 'Reduce manual effort across the entire delivery pipeline.' },
              ].map((item) => (
                <motion.div key={item.title} variants={fadeUp()} className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10">
                  <div className="w-8 h-8 rounded-lg bg-[#ed2024] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 size={15} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* ─── WHY CHOOSE US ─── */}
      <SectionWrapper className="bg-gray-50">
        <SectionHeader label="Why Choose Us" title="Built Differently. Delivered Better." subtitle="Six reasons why leading businesses choose ARA Discover Technologies." />
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {whyChooseUs.map((item, i) => (
            <GlassCard key={item.title} delay={i * 0.08}>
              <div className={`w-10 h-10 rounded-xl ${item.iconBg} flex items-center justify-center mb-4`}>
                <item.icon size={19} className={item.iconColor} />
              </div>
              <h3 className="text-[#0a0a0a] font-bold mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </GlassCard>
          ))}
        </motion.div>
      </SectionWrapper>

      {/* ─── INDUSTRIES ─── */}
      <SectionWrapper className="bg-white">
        <SectionHeader label="Industries We Serve" title="Across Every Sector" subtitle="Partnering with businesses of all sizes, from startups to enterprises, across multiple industries." />
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.label}
              variants={{ hidden: { opacity: 0, scale: 0.92 }, visible: { opacity: 1, scale: 1, transition: { delay: i * 0.06 } } }}
              whileHover={{ scale: 1.04 }}
              className="flex flex-col items-center gap-3 p-5 rounded-2xl bg-white border border-black/6 hover:border-black/12 hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-300 cursor-default shadow-sm"
            >
              <div className={`w-10 h-10 rounded-xl ${ind.iconBg} flex items-center justify-center`}>
                <ind.icon size={19} className={ind.iconColor} />
              </div>
              <span className="text-gray-700 text-xs font-semibold text-center leading-tight">{ind.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>

      {/* ─── CTA ─── */}
      <section className="bg-[#0a0a0a] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden border border-white/8 p-12 md:p-20 text-center"
          >
            <div className="absolute inset-0 dot-grid opacity-[0.04]" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-48 bg-[#ed2024]/12 rounded-full blur-[80px]" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ed2024]/12 border border-[#ed2024]/25 text-[#ed2024] text-xs font-semibold mb-6 uppercase tracking-widest">
                <Rocket size={13} /> Ready to Launch?
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
                Ready to Build Something <span className="text-[#ed2024]">Smart?</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
                Let's transform your idea into a powerful digital product. Book a free consultation today.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#ed2024] text-white font-bold hover:bg-[#c0181c] transition-all shadow-xl shadow-[#ed2024]/25 hover:shadow-[#ed2024]/40 hover:scale-105">
                  Book a Free Consultation <ArrowRight size={18} />
                </Link>
                <Link to="/services" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/8 text-white font-semibold border border-white/15 hover:bg-white/12 transition-all hover:scale-105">
                  Explore Services
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
