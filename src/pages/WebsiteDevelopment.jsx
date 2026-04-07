import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Globe, Zap, BarChart3, Search, Shield, Smartphone, ShoppingCart, Layout, FileText, Bot, ArrowRight, CheckCircle2, Code2 } from 'lucide-react'
import SectionWrapper, { SectionHeader } from '../components/SectionWrapper'
import GlassCard from '../components/GlassCard'

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } }
const fadeUp = { hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] } } }

const websiteTypes = [
  { icon: Globe, title: 'Business Websites', desc: 'Professional, brand-forward websites that build credibility and convert visitors.', points: ['Custom Design', 'CMS Integration', 'Contact & Lead Forms', 'SEO Optimized'], iconBg: 'bg-blue-50', iconColor: 'text-blue-500' },
  { icon: ShoppingCart, title: 'E-Commerce Stores', desc: 'High-converting online stores with seamless checkout and inventory management.', points: ['Shopify / WooCommerce', 'Payment Gateways', 'Inventory Sync', 'AI Recommendations'], iconBg: 'bg-violet-50', iconColor: 'text-violet-500' },
  { icon: Layout, title: 'Landing Pages', desc: 'Conversion-optimized landing pages designed to capture leads and drive outcomes.', points: ['A/B Testing Ready', 'Fast Load Times', 'Mobile Optimized', 'Analytics Integrated'], iconBg: 'bg-emerald-50', iconColor: 'text-emerald-500' },
  { icon: Code2, title: 'Custom Web Applications', desc: 'Full-stack web applications with complex functionality and third-party integrations.', points: ['React / Next.js', 'REST & GraphQL APIs', 'Authentication & Roles', 'Real-Time Features'], iconBg: 'bg-orange-50', iconColor: 'text-orange-400' },
  { icon: FileText, title: 'Portfolios & Blogs', desc: 'Clean, fast, and SEO-optimized portfolio sites and content platforms.', points: ['Headless CMS', 'Fast Static Delivery', 'Content Management', 'SEO & Open Graph'], iconBg: 'bg-pink-50', iconColor: 'text-pink-500' },
  { icon: Bot, title: 'AI-Integrated Sites', desc: 'Websites enhanced with AI chatbots, smart search, and personalization.', points: ['AI Chat Support', 'Smart Search', 'Personalization Engine', 'Behavior Analytics'], iconBg: 'bg-cyan-50', iconColor: 'text-cyan-500' },
]

const features = [
  { icon: Zap, title: 'Lightning Fast', desc: 'Core Web Vitals optimized for Google rankings and user experience.', iconBg: 'bg-blue-50', iconColor: 'text-blue-500' },
  { icon: Smartphone, title: 'Mobile First', desc: 'Fully responsive — perfect on every device, screen size, and browser.', iconBg: 'bg-violet-50', iconColor: 'text-violet-500' },
  { icon: Search, title: 'SEO Ready', desc: 'Built with technical SEO, schema markup, and performance best practices.', iconBg: 'bg-emerald-50', iconColor: 'text-emerald-500' },
  { icon: Shield, title: 'Secure & Reliable', desc: 'SSL, HTTPS, DDoS protection, and 99.9% uptime SLA.', iconBg: 'bg-orange-50', iconColor: 'text-orange-400' },
  { icon: BarChart3, title: 'Analytics Built-In', desc: 'GA4, conversion tracking, heatmaps, and funnel analytics from day one.', iconBg: 'bg-pink-50', iconColor: 'text-pink-500' },
  { icon: Bot, title: 'AI-Enhanced', desc: 'AI content tools, smart recommendations, and chatbot integrations available.', iconBg: 'bg-cyan-50', iconColor: 'text-cyan-500' },
]

const techStack = ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Shopify', 'WordPress', 'Webflow', 'Vercel', 'Netlify', 'AWS', 'Strapi', 'Sanity']

const WebsiteDevelopment = () => (
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
              High-Performing<br />Websites Built to<br /><span className="text-[#ed2024]">Convert</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-gray-500 text-xl leading-relaxed mb-8">
              Modern, fast, and conversion-focused websites that help your business grow — powered by AI and automation.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#ed2024] text-white font-bold hover:bg-[#c0181c] transition-all shadow-xl shadow-[#ed2024]/20 hover:scale-105">
                Get a Quote <ArrowRight size={18} />
              </Link>
              <Link to="/projects" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white text-[#0a0a0a] font-semibold border border-black/10 hover:border-black/20 transition-all hover:scale-105 shadow-sm">
                See Our Work
              </Link>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
            <div className="rounded-3xl bg-white/80 backdrop-blur-xl border border-black/8 p-8 shadow-xl overflow-hidden relative">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#ed2024]/30 to-transparent" />
              <h3 className="text-[#0a0a0a] font-black text-lg mb-5">What Sets Our Sites Apart</h3>
              <div className="space-y-4">
                {[['Page Speed Score', '98 / 100', 98], ['SEO Score', '100 / 100', 100], ['Accessibility', '95 / 100', 95], ['Best Practices', '100 / 100', 100]].map(([label, val, bar]) => (
                  <div key={label}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-gray-500">{label}</span>
                      <span className="text-[#ed2024] font-bold">{val}</span>
                    </div>
                    <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div initial={{ width: 0 }} whileInView={{ width: `${bar}%` }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.3 }}
                        className="h-full bg-[#ed2024] rounded-full" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    <SectionWrapper className="bg-gray-50">
      <SectionHeader label="What We Build" title="Types of Websites" subtitle="Every website we build is custom-designed, performance-optimized, and built to convert." />
      <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {websiteTypes.map((type, i) => (
          <GlassCard key={type.title} delay={i * 0.08}>
            <div className={`w-10 h-10 rounded-xl ${type.iconBg} flex items-center justify-center mb-4`}><type.icon size={19} className={type.iconColor} /></div>
            <h3 className="text-[#0a0a0a] font-bold mb-2">{type.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">{type.desc}</p>
            <ul className="space-y-1.5">
              {type.points.map((p) => (
                <li key={p} className="flex items-center gap-2 text-xs text-gray-600"><CheckCircle2 size={11} className="text-emerald-500 shrink-0" />{p}</li>
              ))}
            </ul>
          </GlassCard>
        ))}
      </motion.div>
    </SectionWrapper>

    <SectionWrapper className="bg-white">
      <SectionHeader label="Standards" title="Built to the Highest Standard" subtitle="Every website we deliver meets the highest bar for performance, security, and user experience." />
      <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map((f, i) => (
          <GlassCard key={f.title} delay={i * 0.08}>
            <div className={`w-10 h-10 rounded-xl ${f.iconBg} flex items-center justify-center mb-3`}><f.icon size={18} className={f.iconColor} /></div>
            <h3 className="text-[#0a0a0a] font-bold mb-1.5">{f.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
          </GlassCard>
        ))}
      </motion.div>
    </SectionWrapper>

    <SectionWrapper className="bg-gray-50">
      <SectionHeader label="Technologies" title="Our Web Tech Stack" subtitle="Modern tools chosen for speed, scalability, and developer experience." />
      <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-wrap gap-3 justify-center">
        {techStack.map((tech, i) => (
          <motion.div key={tech} variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { delay: i * 0.04 } } }}
            whileHover={{ scale: 1.06 }}
            className="px-5 py-2.5 rounded-xl bg-white border border-black/8 hover:border-[#ed2024]/25 hover:shadow-[0_4px_16px_rgba(237,32,36,0.07)] text-gray-700 text-sm font-semibold transition-all cursor-default shadow-sm">
            {tech}
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
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Ready for a New Website?</h2>
            <p className="text-gray-400 text-lg max-w-lg mx-auto mb-8">Get a free consultation and see how we can transform your online presence.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#ed2024] text-white font-bold hover:bg-[#c0181c] transition-all shadow-xl shadow-[#ed2024]/25 hover:scale-105">
              Start My Website <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  </div>
)

export default WebsiteDevelopment
