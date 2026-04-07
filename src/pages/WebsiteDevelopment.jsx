import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Globe, Zap, BarChart3, Search, Shield, Smartphone, ShoppingCart, Layout, FileText, Bot, ArrowRight, CheckCircle2, Code2, Brain, TrendingUp, TestTube2, Rocket, Sparkles, Settings } from 'lucide-react'

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } }
const fadeUp = { hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] } } }

const whatWeBuild = [
  {
    icon: Globe,
    title: 'Business Websites',
    desc: 'Professional websites that establish your brand online and convert visitors into customers.',
    points: ['Company Profile', 'Service Pages', 'Contact & Inquiry Forms', 'SEO Optimized'],
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce Websites',
    desc: 'Sell your products online with powerful, secure, and easy-to-manage platforms.',
    points: ['Product Management', 'Payment Gateway Integration', 'Order Tracking', 'AI Recommendations'],
  },
  {
    icon: Layout,
    title: 'Landing Pages',
    desc: 'High-converting pages designed for marketing campaigns and lead generation.',
    points: ['Ad Campaigns', 'Lead Generation', 'Product Launches', 'A/B Testing Ready'],
  },
  {
    icon: Code2,
    title: 'Custom Web Applications',
    desc: 'Advanced web platforms built around your specific business needs and workflows.',
    points: ['Dashboards', 'Booking Systems', 'Client Portals', 'Admin Panels'],
  },
  {
    icon: Bot,
    title: 'AI-Integrated Websites',
    desc: 'Next-gen websites with intelligent features that personalize and convert.',
    points: ['AI Chatbots', 'Personalized Content', 'Smart Recommendations', 'Behavior Analytics'],
  },
]

const techStack = [
  { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
  { category: 'Backend', items: ['Node.js', 'Python'] },
  { category: 'CMS & E-Commerce', items: ['WordPress', 'Headless CMS', 'Shopify'] },
  { category: 'Cloud & Hosting', items: ['AWS', 'Vercel', 'Netlify'] },
  { category: 'AI Tools', items: ['OpenAI', 'LangChain'] },
  { category: 'Analytics & SEO', items: ['GA4', 'Search Console', 'Schema Markup'] },
]

const process = [
  {
    icon: Search, title: 'Requirement Analysis',
    desc: 'Understanding your business, goals, and target audience.',
    detail: 'We start by learning everything about your business — your goals, competitors, target users, and what success looks like. This ensures every decision we make is aligned with outcomes that matter to you.',
    tags: ['Business Discovery', 'Goal Setting', 'Competitor Research'],
  },
  {
    icon: Layout, title: 'UI/UX Design',
    desc: 'Visually appealing, user-friendly designs that convert.',
    detail: 'Our designers create wireframes and high-fidelity mockups — focusing on intuitive navigation, visual hierarchy, and a design language that reflects your brand and engages your audience.',
    tags: ['Wireframing', 'Brand-Aligned Design', 'Mobile-First'],
  },
  {
    icon: Code2, title: 'Development',
    desc: 'Fast, secure, and scalable websites built with modern tech.',
    detail: 'We build your website using clean, performant code — React, Next.js, or your preferred stack. AI-assisted development means faster delivery, fewer bugs, and higher code quality.',
    tags: ['AI-Assisted Coding', 'Performance-First', 'Agile Sprints'],
  },
  {
    icon: TestTube2, title: 'Testing & QA',
    desc: 'Ensuring performance, responsiveness, and security across all devices.',
    detail: 'Before launch, we run cross-browser testing, mobile responsiveness checks, Core Web Vitals audits, security scans, and accessibility reviews — so your site launches flawlessly.',
    tags: ['Cross-Browser QA', 'Performance Audit', 'Security Check'],
  },
  {
    icon: Rocket, title: 'Deployment',
    desc: 'Smooth, zero-downtime launch with full monitoring.',
    detail: 'We deploy your site with CI/CD pipelines and real-time uptime monitoring. DNS configuration, SSL setup, CDN integration — everything handled for a seamless go-live.',
    tags: ['CI/CD Pipeline', 'SSL & CDN Setup', 'Live Monitoring'],
  },
  {
    icon: TrendingUp, title: 'Maintenance & Growth',
    desc: 'Continuous updates, optimization, and improvement.',
    detail: 'Post-launch, we keep your site healthy — fixing issues, rolling out new content, running performance optimizations, and using analytics insights to continuously improve conversions.',
    tags: ['Performance Tuning', 'Content Updates', 'Analytics & Insights'],
  },
]

const industries = ['E-Commerce', 'Education', 'Healthcare', 'Real Estate', 'Finance', 'Startups']

const WebsiteDevelopment = () => {
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
                <Globe size={13} /> Website Development
              </motion.div>
              <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-black text-[#0a0a0a] mb-6 leading-tight">
                Build High-Performing<br />Websites with<br /><span className="text-[#ed2024]">AI & Automation</span>
              </motion.h1>
              <motion.p variants={fadeUp} className="text-gray-500 text-xl leading-relaxed mb-8">
                We design and develop modern, fast, and conversion-focused websites that help your business grow — powered by intelligent technology.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#ed2024] text-white font-bold hover:bg-[#c0181c] transition-all shadow-xl shadow-[#ed2024]/20 hover:scale-105">
                  Get Your Website Started <ArrowRight size={18} />
                </Link>
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white text-[#0a0a0a] font-semibold border border-black/10 hover:border-black/20 transition-all hover:scale-105 shadow-sm">
                  Book Free Consultation
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
                    { label: 'Visually stunning designs', color: 'text-blue-400' },
                    { label: 'High-speed performance', color: 'text-violet-400' },
                    { label: 'AI-enhanced functionality', color: 'text-emerald-400' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-3 py-2.5 border-b border-black/5 last:border-0">
                      <CheckCircle2 size={15} className={`${item.color} shrink-0`} />
                      <span className="text-gray-700 text-sm font-medium">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[['98/100', 'Page Speed'], ['100/100', 'SEO Score'], ['99.9%', 'Uptime SLA']].map(([val, label]) => (
                  <div key={label} className="rounded-2xl bg-white border border-black/6 p-4 text-center shadow-sm">
                    <div className="text-xl font-black text-[#ed2024] mb-1">{val}</div>
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
                Smarter Websites.<br /><span className="text-[#ed2024]">Better Conversions.</span>
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                Unlike traditional agencies, we use AI and automation at every stage — turning your visitors into customers faster and more efficiently.
              </p>
              <div className="space-y-3">
                {[
                  { label: 'Faster development timelines', bg: 'bg-blue-50', icon: 'text-blue-500' },
                  { label: 'SEO-friendly structure from day one', bg: 'bg-emerald-50', icon: 'text-emerald-500' },
                  { label: 'Higher conversion rates', bg: 'bg-violet-50', icon: 'text-violet-500' },
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
                    { icon: Brain, label: 'AI-assisted design & development', color: 'bg-blue-100 text-blue-500' },
                    { icon: Settings, label: 'Automated performance optimization', color: 'bg-violet-100 text-violet-500' },
                    { icon: BarChart3, label: 'User behavior tracking & insights', color: 'bg-emerald-100 text-emerald-500' },
                    { icon: TrendingUp, label: 'Continuous improvements post-launch', color: 'bg-orange-100 text-orange-400' },
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
              <p className="text-gray-500 text-lg max-w-md">From simple business websites to complex AI-powered web platforms.</p>
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
            <h2 className="text-3xl md:text-4xl font-black text-[#0a0a0a] mb-3">Technologies We Use</h2>
            <p className="text-gray-500 text-base max-w-md mx-auto">Modern, scalable technologies chosen for performance, speed, and long-term reliability.</p>
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
            <p className="text-gray-500 text-lg">Structured. Transparent. Delivered on time, every time.</p>
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
              <h2 className="text-4xl md:text-5xl font-black text-[#0a0a0a] leading-tight">Why Choose ARA<br />for Your Website</h2>
              <p className="text-gray-500 text-lg max-w-sm">Your website is your digital identity — we make it powerful.</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">

            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="lg:col-span-2 relative rounded-3xl bg-blue-50 border border-blue-100 p-10 overflow-hidden flex flex-col justify-between min-h-[220px]">
              <div className="absolute -top-10 -right-10 w-56 h-56 bg-blue-200/40 rounded-full blur-[60px]" />
              <div className="relative z-10">
                <div className="text-blue-500 text-xs font-bold uppercase tracking-widest mb-3">Our Core Promise</div>
                <h3 className="text-[#0a0a0a] font-black text-3xl md:text-4xl leading-tight mb-3">Designed for Users.<br />Built for Growth.</h3>
                <p className="text-gray-500 text-sm max-w-md">Every website we build is optimized for users, search engines, and business results — not just aesthetics.</p>
              </div>
              <div className="relative z-10 flex flex-wrap gap-2 mt-6">
                {['Increased Visibility', 'Better Engagement', 'Higher Conversions'].map(tag => (
                  <span key={tag} className="px-3 py-1.5 rounded-full bg-white border border-blue-100 text-blue-500 text-xs font-semibold">{tag}</span>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.5 }}
              className="relative rounded-3xl bg-violet-50 border border-violet-100 p-8 overflow-hidden flex flex-col justify-between min-h-[220px]">
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-violet-200/40 rounded-full blur-2xl" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-violet-100 flex items-center justify-center mb-4">
                  <Search size={22} className="text-violet-500" />
                </div>
                <h3 className="text-[#0a0a0a] font-black text-2xl leading-tight">SEO-Optimized<br />Structure</h3>
              </div>
              <p className="relative z-10 text-gray-500 text-sm mt-4">Rank higher on Google from the moment you launch.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15, duration: 0.5 }}
              className="rounded-3xl bg-emerald-50 border border-emerald-100 p-8 hover:shadow-md transition-all duration-300">
              <div className="text-5xl font-black text-emerald-200 leading-none select-none mb-4">1s</div>
              <h3 className="text-[#0a0a0a] font-black text-xl mb-1">Lightning Fast</h3>
              <p className="text-gray-500 text-sm">Core Web Vitals optimized — 98/100 page speed scores.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.5 }}
              className="rounded-3xl bg-orange-50 border border-orange-100 p-8 hover:shadow-md transition-all duration-300">
              <div className="mb-4">
                <Smartphone size={40} className="text-orange-200" />
              </div>
              <h3 className="text-[#0a0a0a] font-black text-xl mb-1">Mobile-Responsive</h3>
              <p className="text-gray-500 text-sm">Perfect on every screen — phone, tablet, or desktop.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.25, duration: 0.5 }}
              className="rounded-3xl bg-pink-50 border border-pink-100 p-8 hover:shadow-md transition-all duration-300">
              <h3 className="text-[#0a0a0a] font-black text-xl mb-4">Industries We Serve</h3>
              <p className="text-gray-500 text-sm mb-5">Websites built for every sector, every scale.</p>
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
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Ready to Build Your Website?</h2>
              <p className="text-gray-400 text-lg max-w-lg mx-auto mb-2">Let's create a website that grows your business.</p>
              <p className="text-gray-500 text-sm max-w-md mx-auto mb-8">Building Websites that Perform, Convert, and Scale.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#ed2024] text-white font-bold hover:bg-[#c0181c] transition-all shadow-xl shadow-[#ed2024]/25 hover:scale-105">
                  Start Your Website Today <ArrowRight size={18} />
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

export default WebsiteDevelopment
