import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Smartphone, Brain, Zap, ShoppingCart, Clock, Globe2, CheckCircle2, ArrowRight, Search, PenTool, Code2, TestTube2, Rocket, TrendingUp, Sparkles, Shield, Layers } from 'lucide-react'
import SectionWrapper, { SectionHeader } from '../components/SectionWrapper'

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } }
const fadeUp = { hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] } } }

const whatWeBuild = [
  {
    icon: Brain,
    title: 'Business & Enterprise Apps',
    desc: 'Custom mobile applications for internal teams, field operations, and enterprise workflows.',
    points: ['Employee Management', 'Field Service Apps', 'CRM Mobile Apps', 'Reporting Dashboards'],
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce Apps',
    desc: 'Feature-rich shopping apps with seamless checkout, real-time inventory, and AI-powered recommendations.',
    points: ['Product Catalogs', 'Cart & Checkout', 'Payment Gateways', 'Order Tracking'],
  },
  {
    icon: Clock,
    title: 'On-Demand Service Apps',
    desc: 'Real-time service delivery platforms like ride-booking, food delivery, and home services.',
    points: ['Live Tracking', 'Booking Systems', 'Driver/Vendor Panels', 'Notification Engine'],
  },
  {
    icon: Zap,
    title: 'AI-Based Mobile Apps',
    desc: 'Intelligent apps powered by machine learning, NLP, and computer vision.',
    points: ['Chatbots & Assistants', 'Image Recognition', 'Personalization', 'Predictive Analytics'],
  },
  {
    icon: Globe2,
    title: 'Cross-Platform Apps',
    desc: 'One codebase, two platforms — beautiful apps that feel native on both iOS and Android.',
    points: ['Flutter Development', 'React Native', 'Shared Business Logic', 'Platform-Specific UI'],
  },
]

const techStack = [
  { category: 'Cross-Platform', items: ['Flutter', 'React Native'] },
  { category: 'Native', items: ['Kotlin', 'Swift'] },
  { category: 'Backend & Cloud', items: ['Firebase', 'AWS Amplify', 'Node.js'] },
  { category: 'APIs & Integration', items: ['REST APIs', 'GraphQL', 'Stripe', 'Google Maps'] },
  { category: 'AI & ML', items: ['OpenAI', 'TensorFlow Lite', 'ML Kit'] },
  { category: 'Testing & DevOps', items: ['Jest', 'Detox', 'GitHub Actions'] },
]

const process = [
  {
    icon: Search, title: 'Requirement Analysis',
    desc: 'Deep dive into your business goals, users, and app requirements.',
    detail: 'We start by understanding your vision, target audience, and business objectives. Through user interviews and competitive research, we define the scope and functionality that will make your app succeed.',
    tags: ['User Research', 'Scope Definition', 'Competitive Analysis'],
  },
  {
    icon: PenTool, title: 'UI/UX Design',
    desc: 'Wireframes, prototypes, and pixel-perfect visual designs.',
    detail: 'Our designers craft intuitive user flows, interactive prototypes, and visually stunning interfaces — ensuring every screen is optimized for engagement and ease of use.',
    tags: ['Wireframing', 'Interactive Prototypes', 'Design Systems'],
  },
  {
    icon: Code2, title: 'Development',
    desc: 'Agile development using modern frameworks with AI-assisted coding.',
    detail: 'Our developers build your app sprint by sprint — using Flutter, React Native, or native SDKs. AI tools accelerate coding, reduce bugs, and ensure high code quality at every milestone.',
    tags: ['Agile Sprints', 'AI-Assisted Coding', 'Daily Updates'],
  },
  {
    icon: TestTube2, title: 'Testing & QA',
    desc: 'Rigorous testing across devices, OS versions, and edge cases.',
    detail: 'Before launch, we run automated and manual tests — device compatibility, performance under load, security audits, and accessibility checks — so your app ships with confidence.',
    tags: ['Device Testing', 'Performance QA', 'Security Audit'],
  },
  {
    icon: Rocket, title: 'Deployment',
    desc: 'Smooth App Store & Play Store submission with zero downtime.',
    detail: 'We handle everything from App Store metadata and screenshots to review submissions. CI/CD pipelines ensure fast, reliable releases with rollback safety and live crash monitoring.',
    tags: ['App Store Submission', 'CI/CD Pipeline', 'Live Monitoring'],
  },
  {
    icon: TrendingUp, title: 'Maintenance & Growth',
    desc: 'Continuous updates, new features, and performance optimization.',
    detail: 'Post-launch, we stay with you — fixing bugs, rolling out features, responding to user feedback, and scaling infrastructure as your user base grows.',
    tags: ['Bug Fixes', 'Feature Rollouts', 'Analytics & Scaling'],
  },
]

const industries = ['HealthTech', 'FinTech', 'EdTech', 'Retail', 'Logistics', 'Real Estate', 'Social']

const MobileAppDevelopment = () => {
  const [activeStep, setActiveStep] = useState(0)
  const [paused, setPaused] = useState(false)
  const intervalRef = useRef(null)

  useEffect(() => {
    if (paused) return
    intervalRef.current = setInterval(() => {
      setActiveStep(prev => (prev + 1) % process.length)
    }, 3500)
    return () => clearInterval(intervalRef.current)
  }, [paused])

  const goTo = (i) => {
    setActiveStep(i)
    setPaused(true)
    clearInterval(intervalRef.current)
    intervalRef.current = setTimeout(() => setPaused(false), 8000)
  }

  return (
    <div>
      {/* ─── HERO ─── */}
      <section className="relative pt-40 pb-24 overflow-hidden bg-white">
        <div className="absolute inset-0 dot-grid opacity-50" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#ed2024]/5 rounded-full blur-[120px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ed2024]/8 border border-[#ed2024]/20 text-[#ed2024] text-xs font-semibold mb-6 uppercase tracking-widest">
                <Smartphone size={13} /> Mobile App Development
              </motion.div>
              <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-black text-[#0a0a0a] mb-6 leading-tight">
                Apps That Work.<br /><span className="text-[#ed2024]">Users Love.</span><br />Business Grows.
              </motion.h1>
              <motion.p variants={fadeUp} className="text-gray-500 text-xl leading-relaxed mb-8">
                We build high-performance iOS and Android apps — powered by AI, designed for users, and built to scale with your business.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#ed2024] text-white font-bold hover:bg-[#c0181c] transition-all shadow-xl shadow-[#ed2024]/20 hover:scale-105">
                  Start Your App Project <ArrowRight size={18} />
                </Link>
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white text-[#0a0a0a] font-semibold border border-black/10 hover:border-black/20 transition-all hover:scale-105 shadow-sm">
                  Get Free Consultation
                </Link>
              </motion.div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="space-y-4">
              <div className="rounded-3xl bg-white border border-black/8 p-7 shadow-xl overflow-hidden relative">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#ed2024]/30 to-transparent" />
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles size={15} className="text-violet-400" />
                  <span className="text-[#0a0a0a] font-black text-sm">What We Deliver</span>
                </div>
                <div className="space-y-3">
                  {[
                    { label: 'Native-quality cross-platform apps', color: 'text-blue-400' },
                    { label: 'AI-powered features built in', color: 'text-violet-400' },
                    { label: 'App Store ready from day one', color: 'text-emerald-400' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-3 py-2.5 border-b border-black/5 last:border-0">
                      <CheckCircle2 size={15} className={`${item.color} shrink-0`} />
                      <span className="text-gray-700 text-sm font-medium">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[['4.9★', 'App Store Rating'], ['< 1.2s', 'Avg Load Time'], ['99.9%', 'Uptime SLA']].map(([val, label]) => (
                  <div key={label} className="rounded-2xl bg-white border border-black/6 p-4 text-center shadow-sm">
                    <div className="text-2xl font-black text-[#ed2024] mb-1">{val}</div>
                    <div className="text-gray-400 text-xs">{label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── AI USP ─── */}
      <section className="bg-gray-50 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ed2024]/8 border border-[#ed2024]/20 text-[#ed2024] text-xs font-semibold mb-5 uppercase tracking-widest">
                Our USP
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-[#0a0a0a] mb-4 leading-tight">
                Smarter Apps.<br /><span className="text-[#ed2024]">Faster Launches.</span>
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                We don't just write code — we embed AI and automation into every phase of mobile development to ship faster, reduce bugs, and deliver a better user experience.
              </p>
              <div className="space-y-3">
                {[
                  { label: 'AI-accelerated development', bg: 'bg-blue-50', icon: 'text-blue-500' },
                  { label: 'Cross-platform with native feel', bg: 'bg-emerald-50', icon: 'text-emerald-500' },
                  { label: 'Continuous post-launch improvement', bg: 'bg-violet-50', icon: 'text-violet-500' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-full ${item.bg} flex items-center justify-center shrink-0`}>
                      <CheckCircle2 size={13} className={item.icon} />
                    </div>
                    <span className="text-[#0a0a0a] font-semibold">{item.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>
              <div className="rounded-3xl bg-violet-50 border border-violet-100 p-8 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-48 h-48 bg-violet-200/30 rounded-full blur-[60px]" />
                <div className="relative z-10 space-y-4">
                  {[
                    { icon: Brain, label: 'AI-powered features & recommendations', color: 'bg-blue-100 text-blue-500' },
                    { icon: Layers, label: 'Cross-platform Flutter & React Native', color: 'bg-violet-100 text-violet-500' },
                    { icon: Shield, label: 'Biometric auth & end-to-end encryption', color: 'bg-emerald-100 text-emerald-500' },
                    { icon: TrendingUp, label: 'Analytics, A/B testing & iteration', color: 'bg-orange-100 text-orange-400' },
                  ].map((item, i) => (
                    <motion.div key={item.label}
                      initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.4 }}
                      className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-black/5 hover:shadow-sm transition-all">
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${item.color.split(' ')[0]}`}>
                        <item.icon size={16} className={item.color.split(' ')[1]} />
                      </div>
                      <span className="text-gray-700 text-sm font-medium">{item.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── WHAT WE BUILD ─── */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ed2024]/8 border border-[#ed2024]/20 text-[#ed2024] text-xs font-semibold mb-5 uppercase tracking-widest">
              Our Capabilities
            </div>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
              <h2 className="text-4xl md:text-5xl font-black text-[#0a0a0a] leading-tight">What We Build</h2>
              <p className="text-gray-500 text-lg max-w-md">From consumer apps to enterprise-grade mobile platforms — built for performance.</p>
            </div>
          </motion.div>

          <div className="divide-y divide-black/6">
            {whatWeBuild.map((item, i) => (
              <motion.div key={item.title}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                className="group grid grid-cols-[64px_1fr] lg:grid-cols-[80px_1fr_320px] gap-6 lg:gap-12 py-8 hover:bg-gray-50 px-4 -mx-4 rounded-2xl transition-all duration-300 cursor-default"
              >
                {/* Number */}
                <div className="relative pt-1">
                  <span className="text-6xl lg:text-7xl font-black text-black/5 group-hover:text-[#ed2024]/12 transition-colors duration-300 leading-none select-none">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-gray-100 group-hover:bg-[#ed2024]/10 flex items-center justify-center transition-colors duration-300 shrink-0">
                      <item.icon size={16} className="text-gray-400 group-hover:text-[#ed2024] transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-black text-[#0a0a0a]">{item.title}</h3>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed pl-11">{item.desc}</p>
                </div>

                {/* Pills */}
                <div className="hidden lg:flex flex-wrap gap-2 content-center">
                  {item.points.map((p) => (
                    <span key={p} className="px-3 py-1.5 rounded-xl bg-gray-100 group-hover:bg-white border border-transparent group-hover:border-black/8 text-gray-600 text-xs font-semibold transition-all duration-300 shadow-none group-hover:shadow-sm">
                      {p}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TECH STACK ─── */}
      <section className="bg-gray-50 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ed2024]/8 border border-[#ed2024]/20 text-[#ed2024] text-xs font-semibold mb-4 uppercase tracking-widest">
              Technologies
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[#0a0a0a] mb-3">Technologies We Use</h2>
            <p className="text-gray-500 text-base max-w-md mx-auto">Modern, battle-tested mobile technologies chosen for performance and longevity.</p>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {techStack.map((group, i) => (
              <motion.div key={group.category}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } } }}
                className="rounded-2xl bg-white border border-black/6 p-6 hover:shadow-md hover:border-black/10 transition-all duration-300">
                <h4 className="text-[#ed2024] font-bold text-xs uppercase tracking-widest mb-4">{group.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="px-3 py-1.5 rounded-lg bg-gray-100 border border-black/5 text-gray-700 text-xs font-semibold">{item}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── PROCESS ─── */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ed2024]/8 border border-[#ed2024]/20 text-[#ed2024] text-xs font-semibold mb-5 uppercase tracking-widest">
              How We Work
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#0a0a0a] leading-tight mb-3">Our Development Process</h2>
            <p className="text-gray-500 text-lg">End-to-end. Transparent. Shipped on time, every time.</p>
          </motion.div>

          {/* Step tabs */}
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2 mb-10">
            {process.map((step, i) => (
              <button key={step.title} onClick={() => goTo(i)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeStep === i
                    ? 'bg-[#ed2024] text-white shadow-lg shadow-[#ed2024]/25 scale-105'
                    : 'bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-700'
                }`}>
                <step.icon size={14} />
                {step.title}
              </button>
            ))}
          </motion.div>

          {/* Display panel */}
          <div className="relative rounded-3xl overflow-hidden bg-white border border-black/6 min-h-[320px]">
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-pink-200/30 rounded-full blur-[70px]" />
            <div className="absolute top-0 left-1/3 w-48 h-48 bg-violet-200/25 rounded-full blur-[60px]" />
            <div className="absolute top-0 right-0 w-56 h-56 bg-blue-200/30 rounded-full blur-[70px]" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-200/25 rounded-full blur-[60px]" />
            <div className="absolute -bottom-10 right-1/3 w-56 h-56 bg-orange-200/20 rounded-full blur-[70px]" />
            <div className="absolute bottom-0 -right-10 w-48 h-48 bg-yellow-200/20 rounded-full blur-[60px]" />

            <div className="relative z-10 grid lg:grid-cols-2 gap-0 min-h-[320px]">
              {/* Left — animated content */}
              <div className="p-10 lg:p-14 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-black/6">
                <AnimatePresence mode="wait">
                  <motion.div key={activeStep}
                    initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}>
                    <div className="w-14 h-14 rounded-2xl bg-violet-100 border border-violet-200 flex items-center justify-center mb-6">
                      {(() => { const Icon = process[activeStep].icon; return <Icon size={26} className="text-violet-500" /> })()}
                    </div>
                    <h3 className="text-[#0a0a0a] font-black text-3xl md:text-4xl mb-4 leading-tight">
                      {process[activeStep].title}
                    </h3>
                    <p className="text-gray-500 text-lg leading-relaxed">{process[activeStep].desc}</p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right — always mounted */}
              <div className="p-10 lg:p-14 flex flex-col justify-between gap-8">
                <AnimatePresence mode="wait">
                  <motion.div key={activeStep}
                    initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}>
                    <p className="text-gray-400 text-xs uppercase tracking-widest font-semibold mb-3">What happens here</p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-5">{process[activeStep].detail}</p>
                    <div className="flex flex-wrap gap-2">
                      {process[activeStep].tags.map(tag => (
                        <span key={tag} className="px-3 py-1.5 rounded-full bg-white border border-black/8 text-gray-600 text-xs font-semibold">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Progress — stable */}
                <div>
                  <div className="pt-5 border-t border-black/6">
                    <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
                      <span>Progress</span>
                      <span>{activeStep + 1} / {process.length}</span>
                    </div>
                    <div className="h-1.5 bg-black/6 rounded-full overflow-hidden">
                      <motion.div className="h-full bg-[#ed2024] rounded-full"
                        animate={{ width: `${((activeStep + 1) / process.length) * 100}%` }}
                        transition={{ duration: 0.4, ease: 'easeOut' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Nav arrows */}
          <div className="flex justify-center gap-3 mt-6">
            <button onClick={() => goTo(Math.max(0, activeStep - 1))}
              disabled={activeStep === 0}
              className="px-5 py-2.5 rounded-xl bg-gray-100 text-gray-500 text-sm font-semibold hover:bg-gray-200 disabled:opacity-30 disabled:cursor-not-allowed transition-all">
              Previous
            </button>
            <button onClick={() => goTo(Math.min(process.length - 1, activeStep + 1))}
              disabled={activeStep === process.length - 1}
              className="px-5 py-2.5 rounded-xl bg-[#ed2024] text-white text-sm font-semibold hover:bg-[#c0181c] disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-md shadow-[#ed2024]/20">
              Next Step
            </button>
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE — BENTO ─── */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ed2024]/8 border border-[#ed2024]/20 text-[#ed2024] text-xs font-semibold mb-5 uppercase tracking-widest">
              Why Choose Us
            </div>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
              <h2 className="text-4xl md:text-5xl font-black text-[#0a0a0a] leading-tight">Why Choose ARA<br />for Mobile Apps</h2>
              <p className="text-gray-500 text-lg max-w-sm">Not just developers. A mobile-first team that ships apps users keep.</p>
            </div>
          </motion.div>

          {/* Bento grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">

            {/* Cell 1 — blue hero card (spans 2 cols) */}
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="lg:col-span-2 relative rounded-3xl bg-blue-50 border border-blue-100 p-10 overflow-hidden flex flex-col justify-between min-h-[220px]">
              <div className="absolute -top-10 -right-10 w-56 h-56 bg-blue-200/40 rounded-full blur-[60px]" />
              <div className="relative z-10">
                <div className="text-blue-500 text-xs font-bold uppercase tracking-widest mb-3">Our Core Promise</div>
                <h3 className="text-[#0a0a0a] font-black text-3xl md:text-4xl leading-tight mb-3">AI-Powered.<br />User-Obsessed.</h3>
                <p className="text-gray-500 text-sm max-w-md">We build mobile apps that don't just work — they delight. AI features, smooth UX, and performance that stands out in any app store.</p>
              </div>
              <div className="relative z-10 flex flex-wrap gap-2 mt-6">
                {['Higher Retention', 'Better Reviews', 'Faster Launch'].map(tag => (
                  <span key={tag} className="px-3 py-1.5 rounded-full bg-white border border-blue-100 text-blue-500 text-xs font-semibold">{tag}</span>
                ))}
              </div>
            </motion.div>

            {/* Cell 2 — violet card */}
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.5 }}
              className="relative rounded-3xl bg-violet-50 border border-violet-100 p-8 overflow-hidden flex flex-col justify-between min-h-[220px]">
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-violet-200/40 rounded-full blur-2xl" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-violet-100 flex items-center justify-center mb-4">
                  <Zap size={22} className="text-violet-500" />
                </div>
                <h3 className="text-[#0a0a0a] font-black text-2xl leading-tight">Faster Time<br />to Market</h3>
              </div>
              <p className="relative z-10 text-gray-500 text-sm mt-4">AI-assisted development ships your app weeks ahead of schedule.</p>
            </motion.div>

            {/* Cell 3 — emerald stat card */}
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15, duration: 0.5 }}
              className="rounded-3xl bg-emerald-50 border border-emerald-100 p-8 hover:shadow-md transition-all duration-300">
              <div className="text-5xl font-black text-emerald-200 leading-none select-none mb-4">2×</div>
              <h3 className="text-[#0a0a0a] font-black text-xl mb-1">One Codebase</h3>
              <p className="text-gray-500 text-sm">Flutter & React Native — full iOS + Android with half the cost.</p>
            </motion.div>

            {/* Cell 4 — orange stat card */}
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.5 }}
              className="rounded-3xl bg-orange-50 border border-orange-100 p-8 hover:shadow-md transition-all duration-300">
              <div className="text-5xl font-black text-orange-200 leading-none select-none mb-4">∞</div>
              <h3 className="text-[#0a0a0a] font-black text-xl mb-1">Scalable & Secure</h3>
              <p className="text-gray-500 text-sm">Built to handle millions of users — from MVP to global scale.</p>
            </motion.div>

            {/* Cell 5 — pink support card */}
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.25, duration: 0.5 }}
              className="rounded-3xl bg-pink-50 border border-pink-100 p-8 hover:shadow-md transition-all duration-300">
              <h3 className="text-[#0a0a0a] font-black text-xl mb-4">Dedicated Support</h3>
              <p className="text-gray-500 text-sm mb-5">We maintain, iterate, and grow your app post-launch.</p>
              <div className="flex flex-wrap gap-2">
                {industries.map(ind => (
                  <span key={ind} className="px-3 py-1.5 rounded-xl bg-white border border-pink-100 text-gray-600 text-xs font-semibold hover:border-pink-200 hover:text-pink-500 transition-all cursor-default">
                    {ind}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-[#0a0a0a] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="relative rounded-3xl border border-white/8 p-12 md:p-20 text-center overflow-hidden">
            <div className="absolute inset-0 dot-grid opacity-[0.04]" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-[#ed2024]/12 rounded-full blur-[70px]" />
            <div className="relative z-10">
              <p className="text-gray-500 text-xs uppercase tracking-widest mb-3">ARA Discover Technologies</p>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Have an App Idea?</h2>
              <p className="text-gray-400 text-lg max-w-lg mx-auto mb-8">Let's turn your vision into a high-performance mobile app. Start with a free consultation.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#ed2024] text-white font-bold hover:bg-[#c0181c] transition-all shadow-xl shadow-[#ed2024]/25 hover:scale-105">
                  Start Your App Project <ArrowRight size={18} />
                </Link>
                <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/6 border border-white/10 text-white font-semibold hover:bg-white/10 transition-all">
                  Get Free Consultation <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default MobileAppDevelopment
