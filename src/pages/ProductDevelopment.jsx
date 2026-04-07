import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Lightbulb, Search, Layers, Rocket, TrendingUp, CheckCircle2, ArrowRight, Brain, Zap, Code2, Settings, PenTool, BarChart3, Sparkles, Building2, Users } from 'lucide-react'

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } }
const fadeUp = { hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] } } }

const whatWeBuild = [
  {
    icon: Layers,
    title: 'SaaS Products',
    desc: 'Cloud-based platforms designed for global users with subscription models and multi-tenant architecture.',
    points: ['CRM Tools', 'Business Automation Platforms', 'Subscription-Based Software', 'Multi-Tenant Architecture'],
  },
  {
    icon: Rocket,
    title: 'Startup MVP Development',
    desc: 'Launch your idea quickly with a Minimum Viable Product — built to validate fast and scale further.',
    points: ['Core Feature Development', 'Rapid Deployment', 'Scalable Foundation', 'Go-to-Market Ready'],
  },
  {
    icon: Brain,
    title: 'AI-Based Products',
    desc: 'Next-generation products powered by Artificial Intelligence — smart, adaptive, and future-ready.',
    points: ['Smart Recommendations', 'Predictive Analytics', 'AI Assistants', 'Intelligent Automation'],
  },
  {
    icon: Code2,
    title: 'Web & Mobile Products',
    desc: 'Full-fledged digital products built across web and mobile platforms for maximum reach.',
    points: ['Web Applications', 'Mobile Apps', 'Cross-Platform Systems', 'API-First Architecture'],
  },
  {
    icon: Settings,
    title: 'Internal Business Products',
    desc: 'Custom-built tools that streamline your internal operations and drive efficiency.',
    points: ['Workflow Systems', 'Automation Dashboards', 'Reporting Tools', 'Admin Portals'],
  },
]

const techStack = [
  { category: 'Frontend', items: ['React', 'Next.js'] },
  { category: 'Backend', items: ['Node.js', 'Python'] },
  { category: 'Mobile', items: ['Flutter', 'React Native'] },
  { category: 'Cloud', items: ['AWS', 'Firebase'] },
  { category: 'AI & Automation', items: ['OpenAI', 'LangChain', 'TensorFlow'] },
  { category: 'DevOps', items: ['Docker', 'GitHub Actions', 'CI/CD'] },
]

const process = [
  {
    icon: Lightbulb, title: 'Idea Discovery',
    desc: 'Understanding your concept, target market, and goals.',
    detail: 'We start by diving deep into your product vision — what problem you solve, who your users are, and what success looks like. This phase aligns our entire team around your goals before a single line of code is written.',
    tags: ['Product Vision', 'Target Market', 'Goal Setting'],
  },
  {
    icon: Search, title: 'Market Research & Validation',
    desc: 'Analyzing demand, competitors, and feasibility.',
    detail: 'Before building, we validate. We research your market, map competitors, and assess whether your idea has real demand. This reduces risk and ensures your investment goes toward something the market wants.',
    tags: ['Market Analysis', 'Competitor Mapping', 'Feasibility Study'],
  },
  {
    icon: BarChart3, title: 'Product Strategy',
    desc: 'Defining features, roadmap, and architecture.',
    detail: 'With validated insights, we define a clear product strategy — feature prioritization, technical architecture, sprint roadmap, and success KPIs. This becomes the blueprint for everything we build.',
    tags: ['Feature Roadmap', 'Technical Architecture', 'KPI Framework'],
  },
  {
    icon: PenTool, title: 'UI/UX Design',
    desc: 'Designing intuitive and engaging product interfaces.',
    detail: 'Our designers create wireframes, prototypes, and high-fidelity designs that put users first. Every screen is crafted for clarity, engagement, and conversion — ensuring users love the product from day one.',
    tags: ['Wireframing', 'Prototyping', 'User-Centered Design'],
  },
  {
    icon: Code2, title: 'Development',
    desc: 'Building scalable, high-performance systems.',
    detail: 'Our engineers build your product using modern, scalable tech — React, Next.js, Node.js, or Flutter — with AI-assisted development for speed and quality. Agile sprints keep you in control at every milestone.',
    tags: ['Agile Sprints', 'AI-Assisted Coding', 'Daily Updates'],
  },
  {
    icon: Zap, title: 'Testing & Launch',
    desc: 'Ensuring quality and launching your product to market.',
    detail: 'We run comprehensive QA — performance, security, edge cases, and cross-device testing — before a smooth, monitored launch. App store submissions, CI/CD pipelines, and go-to-market support included.',
    tags: ['QA Testing', 'App Store Launch', 'Go-to-Market Support'],
  },
  {
    icon: TrendingUp, title: 'Growth & Scaling',
    desc: 'Optimizing, automating, and scaling your product.',
    detail: 'Post-launch, we become your long-term growth partner — analyzing user data, rolling out new features, scaling infrastructure, and continuously improving the product to match market needs.',
    tags: ['Analytics & Insights', 'Feature Expansion', 'Infrastructure Scaling'],
  },
]

const audiences = ['Startups', 'Enterprises', 'SaaS Founders', 'Entrepreneurs']

const ProductDevelopment = () => {
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
                <Lightbulb size={13} /> Product Development
              </motion.div>
              <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-black text-[#0a0a0a] mb-6 leading-tight">
                Building Scalable<br />Digital Products with<br /><span className="text-[#ed2024]">AI & Innovation</span>
              </motion.h1>
              <motion.p variants={fadeUp} className="text-gray-500 text-xl leading-relaxed mb-8">
                We design, develop, and launch powerful digital products — from idea to market — using cutting-edge technology, AI, and automation.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#ed2024] text-white font-bold hover:bg-[#c0181c] transition-all shadow-xl shadow-[#ed2024]/20 hover:scale-105">
                  Build Your Product <ArrowRight size={18} />
                </Link>
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white text-[#0a0a0a] font-semibold border border-black/10 hover:border-black/20 transition-all hover:scale-105 shadow-sm">
                  Validate Your Idea
                </Link>
              </motion.div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="space-y-4">
              <div className="rounded-3xl bg-white border border-black/8 p-7 shadow-xl overflow-hidden relative">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#ed2024]/30 to-transparent" />
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles size={15} className="text-violet-400" />
                  <span className="text-[#0a0a0a] font-black text-sm">What We Help You Do</span>
                </div>
                <div className="space-y-3">
                  {[
                    { label: 'Turn ideas into scalable products', color: 'text-blue-400' },
                    { label: 'Launch faster with modern technology', color: 'text-violet-400' },
                    { label: 'Build AI-powered, future-ready solutions', color: 'text-emerald-400' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-3 py-2.5 border-b border-black/5 last:border-0">
                      <CheckCircle2 size={15} className={`${item.color} shrink-0`} />
                      <span className="text-gray-700 text-sm font-medium">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[['MVP', 'In weeks, not months'], ['AI-First', 'Every product'], ['Global', 'Scale-ready']].map(([val, label]) => (
                  <div key={label} className="rounded-2xl bg-white border border-black/6 p-4 text-center shadow-sm">
                    <div className="text-lg font-black text-[#ed2024] mb-1">{val}</div>
                    <div className="text-gray-400 text-xs">{label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── AI USP ─── */}
      <section className="py-24 px-6 overflow-hidden relative" style={{ background: 'linear-gradient(135deg, #eff6ff 0%, #f5f3ff 35%, #fdf2f8 65%, #fff7ed 100%)' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-200/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-pink-200/20 rounded-full blur-[100px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-violet-200/15 rounded-full blur-[80px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ed2024]/8 border border-[#ed2024]/20 text-[#ed2024] text-xs font-semibold mb-5 uppercase tracking-widest">
              Our USP
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#0a0a0a] mb-4 leading-tight">
              From Idea to Product<br /><span className="text-[#ed2024]">to Growth.</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
              We focus on the full journey — from validating your idea to building and scaling a product that's market-ready from day one.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {[
              { icon: Lightbulb, stat: '80%', statLabel: 'Validated', title: 'Idea Validation First', desc: 'We validate your concept with real users and data before writing a single line of code.', color: 'text-blue-500', bg: 'bg-blue-100', border: 'border-blue-100' },
              { icon: Brain, stat: '2x', statLabel: 'Faster', title: 'AI-Powered Features', desc: 'AI capabilities are designed into your product from the start — not bolted on later.', color: 'text-violet-500', bg: 'bg-violet-100', border: 'border-violet-100' },
              { icon: Settings, stat: '60%', statLabel: 'Cost Saved', title: 'Automation-Driven', desc: 'Automated architecture means your product scales without proportional cost increases.', color: 'text-emerald-500', bg: 'bg-emerald-100', border: 'border-emerald-100' },
              { icon: TrendingUp, stat: '∞', statLabel: 'Scalable', title: 'Scalable from Day One', desc: 'Built to handle growth — infrastructure, databases, and APIs that scale with your users.', color: 'text-orange-500', bg: 'bg-orange-100', border: 'border-orange-100' },
            ].map((item, i) => (
              <motion.div key={item.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`rounded-2xl bg-white/80 backdrop-blur-sm border ${item.border} p-6 hover:shadow-md transition-all`}
              >
                <div className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center mb-5`}>
                  <item.icon size={18} className={item.color} />
                </div>
                <div className={`text-3xl font-black ${item.color} leading-none`}>{item.stat}</div>
                <div className="text-gray-400 text-xs mb-4 mt-0.5">{item.statLabel}</div>
                <h3 className="text-[#0a0a0a] font-bold text-sm mb-2">{item.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="flex flex-wrap justify-center gap-3">
            {['Idea validation before development', 'AI-powered product features built in', 'Scalability and automation from day one'].map((item) => (
              <div key={item} className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 border border-black/10">
                <CheckCircle2 size={13} className="text-[#ed2024]" />
                <span className="text-gray-700 text-sm font-medium">{item}</span>
              </div>
            ))}
          </motion.div>
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
              <p className="text-gray-500 text-lg max-w-md">From SaaS platforms to AI-powered products — built to scale globally.</p>
            </div>
          </motion.div>

          <div className="divide-y divide-black/6">
            {whatWeBuild.map((item, i) => (
              <motion.div key={item.title}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                className="group grid grid-cols-[64px_1fr] lg:grid-cols-[80px_1fr_320px] gap-6 lg:gap-12 py-8 hover:bg-gray-50 px-4 -mx-4 rounded-2xl transition-all duration-300 cursor-default"
              >
                <div className="relative pt-1">
                  <span className="text-6xl lg:text-7xl font-black text-black/5 group-hover:text-[#ed2024]/12 transition-colors duration-300 leading-none select-none">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-gray-100 group-hover:bg-[#ed2024]/10 flex items-center justify-center transition-colors duration-300 shrink-0">
                      <item.icon size={16} className="text-gray-400 group-hover:text-[#ed2024] transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-black text-[#0a0a0a]">{item.title}</h3>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed pl-11">{item.desc}</p>
                </div>
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
            <h2 className="text-3xl md:text-4xl font-black text-[#0a0a0a] mb-3">Technologies & Tools</h2>
            <p className="text-gray-500 text-base max-w-md mx-auto">Modern, scalable technologies for building world-class digital products.</p>
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
            <h2 className="text-4xl md:text-5xl font-black text-[#0a0a0a] leading-tight mb-3">Our Product Development Process</h2>
            <p className="text-gray-500 text-lg">From concept to launch — structured, transparent, and results-driven.</p>
          </motion.div>

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

          <div className="relative rounded-3xl overflow-hidden bg-white border border-black/6 min-h-[320px]">
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-pink-200/30 rounded-full blur-[70px]" />
            <div className="absolute top-0 left-1/3 w-48 h-48 bg-violet-200/25 rounded-full blur-[60px]" />
            <div className="absolute top-0 right-0 w-56 h-56 bg-blue-200/30 rounded-full blur-[70px]" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-200/25 rounded-full blur-[60px]" />
            <div className="absolute -bottom-10 right-1/3 w-56 h-56 bg-orange-200/20 rounded-full blur-[70px]" />
            <div className="absolute bottom-0 -right-10 w-48 h-48 bg-yellow-200/20 rounded-full blur-[60px]" />

            <div className="relative z-10 grid lg:grid-cols-2 gap-0 min-h-[320px]">
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
              <h2 className="text-4xl md:text-5xl font-black text-[#0a0a0a] leading-tight">Why Choose ARA<br />Discover Technologies</h2>
              <p className="text-gray-500 text-lg max-w-sm">Your Idea + Our Expertise = Scalable Product.</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">

            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="lg:col-span-2 relative rounded-3xl bg-blue-50 border border-blue-100 p-10 overflow-hidden flex flex-col justify-between min-h-[220px]">
              <div className="absolute -top-10 -right-10 w-56 h-56 bg-blue-200/40 rounded-full blur-[60px]" />
              <div className="relative z-10">
                <div className="text-blue-500 text-xs font-bold uppercase tracking-widest mb-3">Our Core Promise</div>
                <h3 className="text-[#0a0a0a] font-black text-3xl md:text-4xl leading-tight mb-3">Product-First.<br />AI-Integrated.</h3>
                <p className="text-gray-500 text-sm max-w-md">We don't just build software — we build products. Every decision is driven by market fit, user value, and long-term scalability.</p>
              </div>
              <div className="relative z-10 flex flex-wrap gap-2 mt-6">
                {['Faster Launch', 'Market-Ready', 'Scalable Growth'].map(tag => (
                  <span key={tag} className="px-3 py-1.5 rounded-full bg-white border border-blue-100 text-blue-500 text-xs font-semibold">{tag}</span>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.5 }}
              className="relative rounded-3xl bg-violet-50 border border-violet-100 p-8 overflow-hidden flex flex-col justify-between min-h-[220px]">
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-violet-200/40 rounded-full blur-2xl" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-violet-100 flex items-center justify-center mb-4">
                  <Zap size={22} className="text-violet-500" />
                </div>
                <h3 className="text-[#0a0a0a] font-black text-2xl leading-tight">Faster Time<br />to Market</h3>
              </div>
              <p className="relative z-10 text-gray-500 text-sm mt-4">MVP in weeks — validate your idea before the market moves.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15, duration: 0.5 }}
              className="rounded-3xl bg-emerald-50 border border-emerald-100 p-8 hover:shadow-md transition-all duration-300">
              <div className="text-5xl font-black text-emerald-200 leading-none select-none mb-4">AI</div>
              <h3 className="text-[#0a0a0a] font-black text-xl mb-1">AI-Integrated</h3>
              <p className="text-gray-500 text-sm">Every product we build has intelligent features baked in.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.5 }}
              className="rounded-3xl bg-orange-50 border border-orange-100 p-8 hover:shadow-md transition-all duration-300">
              <div className="text-5xl font-black text-orange-200 leading-none select-none mb-4">∞</div>
              <h3 className="text-[#0a0a0a] font-black text-xl mb-1">Scalable & Secure</h3>
              <p className="text-gray-500 text-sm">Built for millions of users from the very first sprint.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.25, duration: 0.5 }}
              className="rounded-3xl bg-pink-50 border border-pink-100 p-8 hover:shadow-md transition-all duration-300">
              <h3 className="text-[#0a0a0a] font-black text-xl mb-4">Who This Is For</h3>
              <p className="text-gray-500 text-sm mb-5">We partner with builders at every stage.</p>
              <div className="flex flex-wrap gap-2">
                {audiences.map(a => (
                  <span key={a} className="px-3 py-1.5 rounded-xl bg-white border border-pink-100 text-gray-600 text-xs font-semibold hover:border-pink-200 hover:text-pink-500 transition-all cursor-default">
                    {a}
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
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Ready to Build Your Product?</h2>
              <p className="text-gray-400 text-lg max-w-lg mx-auto mb-2">Let's turn your idea into a successful digital product.</p>
              <p className="text-gray-500 text-sm max-w-md mx-auto mb-8">Turning Ideas into Scalable Digital Products.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#ed2024] text-white font-bold hover:bg-[#c0181c] transition-all shadow-xl shadow-[#ed2024]/25 hover:scale-105">
                  Start Your Product Journey <ArrowRight size={18} />
                </Link>
                <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/6 border border-white/10 text-white font-semibold hover:bg-white/10 transition-all">
                  Book a Free Consultation <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ProductDevelopment
