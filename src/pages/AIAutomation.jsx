import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Brain, Zap, BarChart3, Bot, Link2, RefreshCw, TrendingUp, ArrowRight, CheckCircle2, Cpu, Search, Settings, TestTube2, Rocket, Sparkles, ShoppingCart, HeartPulse, GraduationCap, Building2 } from 'lucide-react'

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } }
const fadeUp = { hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] } } }

const whatWeOffer = [
  {
    icon: RefreshCw,
    title: 'Business Process Automation',
    desc: 'Automate repetitive and time-consuming tasks to save time, reduce errors, and increase efficiency.',
    points: ['Workflow Automation', 'Data Entry Automation', 'Email & Notification Systems', 'Report Generation'],
  },
  {
    icon: Bot,
    title: 'AI Chatbots & Virtual Assistants',
    desc: 'Smart bots that interact with your customers 24/7 — handling support, leads, and bookings automatically.',
    points: ['Customer Support Automation', 'Lead Qualification', 'Appointment Booking', 'FAQ Handling'],
  },
  {
    icon: BarChart3,
    title: 'AI-Powered Analytics & Insights',
    desc: 'Turn your raw data into actionable intelligence — predict trends, track performance, and make smarter decisions.',
    points: ['Predictive Analytics', 'Business Insights Dashboards', 'Performance Tracking', 'Anomaly Detection'],
  },
  {
    icon: Brain,
    title: 'Custom AI Solutions',
    desc: 'We build tailored AI systems designed around your unique business needs and workflows.',
    points: ['Recommendation Systems', 'Image & Text Processing', 'Intelligent Automation Tools', 'NLP & ML Models'],
  },
  {
    icon: Link2,
    title: 'Workflow & System Integration',
    desc: 'Connect all your tools and systems into a seamless, unified, automated ecosystem.',
    points: ['CRM & ERP Integration', 'Website & App Connections', 'Third-Party APIs', 'Data Synchronization'],
  },
]

const techStack = [
  { category: 'AI & ML', items: ['OpenAI', 'LangChain', 'TensorFlow', 'PyTorch'] },
  { category: 'Automation', items: ['n8n', 'Zapier', 'Make', 'Python Scripts'] },
  { category: 'Chatbots & NLP', items: ['Dialogflow', 'Rasa', 'OpenAI API'] },
  { category: 'Analytics', items: ['Power BI', 'Metabase', 'GA4'] },
  { category: 'Integration', items: ['REST APIs', 'Webhooks', 'GraphQL'] },
  { category: 'Cloud & Infra', items: ['AWS', 'Firebase', 'Docker'] },
]

const process = [
  {
    icon: Search, title: 'Business Analysis',
    desc: 'Identifying where AI & automation can create the most impact.',
    detail: 'We start by auditing your current workflows — understanding where time is lost, where errors happen, and where intelligent automation can deliver the fastest, highest-value results for your business.',
    tags: ['Workflow Audit', 'Opportunity Mapping', 'ROI Assessment'],
  },
  {
    icon: Settings, title: 'Strategy & Planning',
    desc: 'Designing intelligent workflows and system architecture.',
    detail: 'With a clear picture of your needs, we design the automation blueprint — selecting the right AI models, integration points, and system architecture that fits your existing tech stack.',
    tags: ['Automation Blueprint', 'AI Model Selection', 'System Architecture'],
  },
  {
    icon: Cpu, title: 'Development & Integration',
    desc: 'Building and integrating AI models and automation tools.',
    detail: 'Our engineers build your AI and automation systems — custom models, API integrations, chatbot flows, and data pipelines — all connected to your existing tools and processes.',
    tags: ['AI Model Development', 'API Integration', 'Workflow Automation'],
  },
  {
    icon: TestTube2, title: 'Testing & Optimization',
    desc: 'Ensuring accuracy, efficiency, and reliability before go-live.',
    detail: 'We run extensive testing on every automation and AI system — accuracy benchmarks, edge case handling, load testing, and real-world simulations — until performance meets your standards.',
    tags: ['Accuracy Testing', 'Load Testing', 'Edge Case Handling'],
  },
  {
    icon: Rocket, title: 'Deployment',
    desc: 'Launching and monitoring live AI and automation systems.',
    detail: 'We deploy your systems with full monitoring in place — real-time dashboards, alerting, and rollback protocols — ensuring everything runs smoothly from the moment it goes live.',
    tags: ['Live Deployment', 'Real-Time Monitoring', 'Rollback Safety'],
  },
  {
    icon: TrendingUp, title: 'Continuous Improvement',
    desc: 'Refining and upgrading systems using data insights.',
    detail: 'AI systems improve with data. Post-launch, we continuously monitor performance, retrain models with new data, and expand automation coverage — making your systems smarter over time.',
    tags: ['Model Retraining', 'Performance Analytics', 'Scope Expansion'],
  },
]

const useCases = [
  { icon: ShoppingCart, title: 'E-Commerce', items: ['Product Recommendations', 'Customer Behavior Tracking'], bg: 'bg-blue-50', iconColor: 'text-blue-500', border: 'border-blue-100' },
  { icon: HeartPulse, title: 'Healthcare', items: ['Appointment Automation', 'Data Management Systems'], bg: 'bg-violet-50', iconColor: 'text-violet-500', border: 'border-violet-100' },
  { icon: GraduationCap, title: 'Education', items: ['Learning Automation', 'Student Tracking Systems'], bg: 'bg-emerald-50', iconColor: 'text-emerald-500', border: 'border-emerald-100' },
  { icon: Building2, title: 'Business Operations', items: ['Workflow Automation', 'CRM & ERP Enhancements'], bg: 'bg-orange-50', iconColor: 'text-orange-400', border: 'border-orange-100' },
]

const AIAutomation = () => {
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
                <Cpu size={13} /> AI & Automation Solutions
              </motion.div>
              <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-black text-[#0a0a0a] mb-6 leading-tight">
                Transform Your Business<br />with AI &<br /><span className="text-[#ed2024]">Intelligent Automation</span>
              </motion.h1>
              <motion.p variants={fadeUp} className="text-gray-500 text-xl leading-relaxed mb-8">
                We help businesses automate operations, reduce manual work, and unlock powerful insights using Artificial Intelligence and smart automation systems.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#ed2024] text-white font-bold hover:bg-[#c0181c] transition-all shadow-xl shadow-[#ed2024]/20 hover:scale-105">
                  Get AI Consultation <ArrowRight size={18} />
                </Link>
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white text-[#0a0a0a] font-semibold border border-black/10 hover:border-black/20 transition-all hover:scale-105 shadow-sm">
                  Automate Your Business
                </Link>
              </motion.div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="space-y-4">
              <div className="rounded-3xl bg-white border border-black/8 p-7 shadow-xl overflow-hidden relative">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#ed2024]/30 to-transparent" />
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles size={15} className="text-violet-400" />
                  <span className="text-[#0a0a0a] font-black text-sm">What You Get</span>
                </div>
                <div className="space-y-3">
                  {[
                    { label: 'Less manual work. More productivity.', color: 'text-blue-400' },
                    { label: 'Intelligent, automated systems', color: 'text-violet-400' },
                    { label: 'Scalable AI built for your business', color: 'text-emerald-400' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-3 py-2.5 border-b border-black/5 last:border-0">
                      <CheckCircle2 size={15} className={`${item.color} shrink-0`} />
                      <span className="text-gray-700 text-sm font-medium">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[['70%', 'Less manual effort'], ['3x', 'Productivity gain'], ['45%', 'Cost reduction']].map(([val, label]) => (
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

      {/* ─── CORE PHILOSOPHY USP ─── */}
      <section className="py-24 px-6 overflow-hidden relative" style={{ background: 'linear-gradient(135deg, #eff6ff 0%, #f5f3ff 35%, #fdf2f8 65%, #fff7ed 100%)' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-200/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-pink-200/20 rounded-full blur-[100px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-violet-200/15 rounded-full blur-[80px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ed2024]/8 border border-[#ed2024]/20 text-[#ed2024] text-xs font-semibold mb-5 uppercase tracking-widest">
              Our Philosophy
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#0a0a0a] mb-4 leading-tight">
              AI First.<br /><span className="text-[#ed2024]">Automation Always.</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
              While others are still adapting to AI, we already use it internally — and build AI-powered systems that give clients a real competitive edge.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {[
              { icon: Brain, stat: '10x', statLabel: 'Smarter', title: 'AI Internally First', desc: 'We use AI tools in our own development process — so every client benefits from our AI expertise.', color: 'text-blue-500', bg: 'bg-blue-100', border: 'border-blue-100' },
              { icon: Zap, stat: '70%', statLabel: 'Cost Cut', title: 'AI for Every Client', desc: 'We build custom AI-powered systems that automate your business and cut operational costs.', color: 'text-violet-500', bg: 'bg-violet-100', border: 'border-violet-100' },
              { icon: RefreshCw, stat: '24/7', statLabel: 'Always On', title: 'Automated Workflows', desc: 'Automated workflows across sales, support, and operations that run without human intervention.', color: 'text-emerald-500', bg: 'bg-emerald-100', border: 'border-emerald-100' },
              { icon: TrendingUp, stat: '∞', statLabel: 'Adaptive', title: 'Competitive Edge', desc: 'Our clients consistently outperform competitors in speed, efficiency, and customer experience.', color: 'text-orange-500', bg: 'bg-orange-100', border: 'border-orange-100' },
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
            {['AI used internally to speed up delivery', 'AI-powered systems built for clients', 'Automation across all business operations'].map((item) => (
              <div key={item} className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 border border-black/10">
                <CheckCircle2 size={13} className="text-[#ed2024]" />
                <span className="text-gray-700 text-sm font-medium">{item}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── WHAT WE OFFER ─── */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ed2024]/8 border border-[#ed2024]/20 text-[#ed2024] text-xs font-semibold mb-5 uppercase tracking-widest">
              Our Capabilities
            </div>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
              <h2 className="text-4xl md:text-5xl font-black text-[#0a0a0a] leading-tight">What We Offer</h2>
              <p className="text-gray-500 text-lg max-w-md">From simple workflow automation to advanced AI — full-spectrum intelligent solutions.</p>
            </div>
          </motion.div>

          <div className="divide-y divide-black/6">
            {whatWeOffer.map((item, i) => (
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
            <h2 className="text-3xl md:text-4xl font-black text-[#0a0a0a] mb-3">Tools & Technologies We Use</h2>
            <p className="text-gray-500 text-base max-w-md mx-auto">Industry-leading AI and automation technologies for reliable, scalable solutions.</p>
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
            <h2 className="text-4xl md:text-5xl font-black text-[#0a0a0a] leading-tight mb-3">Our AI Implementation Process</h2>
            <p className="text-gray-500 text-lg">Structured. Data-driven. Optimized for real-world results.</p>
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
              <h2 className="text-4xl md:text-5xl font-black text-[#0a0a0a] leading-tight">Why Choose ARA<br />for AI & Automation</h2>
              <p className="text-gray-500 text-lg max-w-sm">We don't just add AI — we make your business smarter.</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">

            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="lg:col-span-2 relative rounded-3xl bg-blue-50 border border-blue-100 p-10 overflow-hidden flex flex-col justify-between min-h-[220px]">
              <div className="absolute -top-10 -right-10 w-56 h-56 bg-blue-200/40 rounded-full blur-[60px]" />
              <div className="relative z-10">
                <div className="text-blue-500 text-xs font-bold uppercase tracking-widest mb-3">Our Core Promise</div>
                <h3 className="text-[#0a0a0a] font-black text-3xl md:text-4xl leading-tight mb-3">Customized. Practical.<br />Result-Oriented.</h3>
                <p className="text-gray-500 text-sm max-w-md">Every AI and automation solution we build is designed around your specific business — not generic templates, but systems that actually move the needle.</p>
              </div>
              <div className="relative z-10 flex flex-wrap gap-2 mt-6">
                {['Faster Processes', 'Lower Costs', 'Better Decisions'].map(tag => (
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
                <h3 className="text-[#0a0a0a] font-black text-2xl leading-tight">Faster<br />Implementation</h3>
              </div>
              <p className="relative z-10 text-gray-500 text-sm mt-4">AI systems deployed in weeks, not months — without disrupting your operations.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15, duration: 0.5 }}
              className="rounded-3xl bg-emerald-50 border border-emerald-100 p-8 hover:shadow-md transition-all duration-300">
              <div className="text-5xl font-black text-emerald-200 leading-none select-none mb-4">70%</div>
              <h3 className="text-[#0a0a0a] font-black text-xl mb-1">Less Manual Work</h3>
              <p className="text-gray-500 text-sm">Save 40–70% of manual effort across automated workflows.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.5 }}
              className="rounded-3xl bg-orange-50 border border-orange-100 p-8 hover:shadow-md transition-all duration-300">
              <div className="text-5xl font-black text-orange-200 leading-none select-none mb-4">∞</div>
              <h3 className="text-[#0a0a0a] font-black text-xl mb-1">Scalable Systems</h3>
              <p className="text-gray-500 text-sm">Built to grow with your business — from one process to the entire operation.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.25, duration: 0.5 }}
              className="rounded-3xl bg-pink-50 border border-pink-100 p-8 hover:shadow-md transition-all duration-300">
              <h3 className="text-[#0a0a0a] font-black text-xl mb-4">Use Cases Across Industries</h3>
              <div className="space-y-3">
                {useCases.map((uc) => (
                  <div key={uc.title} className={`flex items-start gap-3 p-3 rounded-xl ${uc.bg} border ${uc.border}`}>
                    <div className="w-7 h-7 rounded-lg bg-white flex items-center justify-center shrink-0">
                      <uc.icon size={14} className={uc.iconColor} />
                    </div>
                    <div>
                      <div className="text-[#0a0a0a] font-bold text-xs">{uc.title}</div>
                      <div className="text-gray-500 text-xs">{uc.items.join(' · ')}</div>
                    </div>
                  </div>
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
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Ready to Automate Your Business?</h2>
              <p className="text-gray-400 text-lg max-w-lg mx-auto mb-2">Let's bring intelligence into your operations.</p>
              <p className="text-gray-500 text-sm max-w-md mx-auto mb-8">Powering Businesses with AI & Automation.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#ed2024] text-white font-bold hover:bg-[#c0181c] transition-all shadow-xl shadow-[#ed2024]/25 hover:scale-105">
                  Book a Free AI Consultation <ArrowRight size={18} />
                </Link>
                <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/6 border border-white/10 text-white font-semibold hover:bg-white/10 transition-all">
                  Start Your Automation Journey <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AIAutomation
