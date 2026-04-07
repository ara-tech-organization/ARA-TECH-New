import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react'
import footerLogo from '../assets/Footer-ARA-TEch.png'

const footerServices = [
  { label: 'Software Development', path: '/software-development' },
  { label: 'Mobile App Development', path: '/mobile-app-development' },
  { label: 'Website Development', path: '/website-development' },
  { label: 'AI & Automation', path: '/ai-automation' },
  { label: 'Product Development', path: '/product-development' },
  { label: 'UI/UX Design', path: '/ui-ux-design' },
]

const footerLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Products', path: '/products' },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact', path: '/contact' },
]

const Footer = () => {
  return (
    <footer className="relative bg-[#0a0a0a] text-white">
      {/* Red top accent line */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#ed2024] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:grid-cols-[minmax(320px,1fr)_1fr_1fr_1fr]">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center mb-5 w-fit">
              <img src={footerLogo} alt="ARA Discover Technologies" className="h-14 w-auto object-contain" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Next-generation tech company delivering intelligent digital solutions powered by AI and Automation.
            </p>
            <div className="space-y-3">
              <a href="mailto:hello@aradiscover.com" className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-white transition-colors">
                <Mail size={14} className="text-[#ed2024]" />
                hello@aradiscover.com
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-white transition-colors">
                <Phone size={14} className="text-[#ed2024]" />
                +1 (234) 567-8900
              </a>
              <div className="flex items-start gap-2.5 text-sm text-gray-400">
                <MapPin size={14} className="text-[#ed2024] mt-0.5 shrink-0" />
                Global — Remote-First Company
              </div>
            </div>
            <div className="mt-6 pt-5 border-t border-white/8 flex flex-col gap-2">
              <div className="flex items-center gap-2 flex-nowrap whitespace-nowrap">
                <Link to="/privacy-policy" className="text-xs text-gray-600 hover:text-[#ed2024] font-medium transition-colors">Privacy Policy</Link>
                <span className="text-gray-700 text-xs">|</span>
                <Link to="/terms-and-conditions" className="text-xs text-gray-600 hover:text-[#ed2024] font-medium transition-colors">Terms & Conditions</Link>
                <span className="text-gray-700 text-xs">|</span>
                <Link to="/cookies-policy" className="text-xs text-gray-600 hover:text-[#ed2024] font-medium transition-colors">Cookie Policy</Link>
              </div>
              <div className="flex items-center gap-2 flex-nowrap whitespace-nowrap">
                <Link to="/payment-policy" className="text-xs text-gray-600 hover:text-[#ed2024] font-medium transition-colors">Payment Policy</Link>
                <span className="text-gray-700 text-xs">|</span>
                <Link to="/refund-policy" className="text-xs text-gray-600 hover:text-[#ed2024] font-medium transition-colors">Refund & Cancellation</Link>
                <span className="text-gray-700 text-xs">|</span>
                <Link to="/service-delivery-policy" className="text-xs text-gray-600 hover:text-[#ed2024] font-medium transition-colors">Service Delivery Policy</Link>
                <span className="text-gray-700 text-xs">|</span>
                <Link to="/disclaimer" className="text-xs text-gray-600 hover:text-[#ed2024] font-medium transition-colors">Disclaimer</Link>
              </div>
              <div className="flex items-center gap-2 flex-nowrap whitespace-nowrap">
                <Link to="/data-security-policy" className="text-xs text-gray-600 hover:text-[#ed2024] font-medium transition-colors">Data Security</Link>
                <span className="text-gray-700 text-xs">|</span>
                <Link to="/nda-policy" className="text-xs text-gray-600 hover:text-[#ed2024] font-medium transition-colors">NDA Policy</Link>
                <span className="text-gray-700 text-xs">|</span>
                <Link to="/ai-usage-policy" className="text-xs text-gray-600 hover:text-[#ed2024] font-medium transition-colors">AI Usage</Link>
                <span className="text-gray-700 text-xs">|</span>
                <Link to="/sla-policy" className="text-xs text-gray-600 hover:text-[#ed2024] font-medium transition-colors">SLA</Link>
                <span className="text-gray-700 text-xs">|</span>
                <Link to="/compliance-policy" className="text-xs text-gray-600 hover:text-[#ed2024] font-medium transition-colors">Compliance / GDPR</Link>
              </div>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-widest mb-5">Company</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1 group">
                    {link.label}
                    <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-widest mb-5">Services</h4>
            <ul className="space-y-3">
              {footerServices.map((s) => (
                <li key={s.path}>
                  <Link to={s.path} className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1 group">
                    {s.label}
                    <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-widest mb-5">Start a Project</h4>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Ready to transform your business with AI-driven technology?
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#ed2024] text-white text-sm font-semibold hover:bg-[#c0181c] transition-all shadow-lg shadow-[#ed2024]/20 hover:shadow-[#ed2024]/30">
              Book Free Consultation
              <ArrowUpRight size={14} />
            </Link>
            <div className="mt-8 pt-6 border-t border-white/8">
              <p className="text-xs text-gray-600 mb-3 uppercase tracking-widest font-medium">Our Philosophy</p>
              <div className="space-y-2">
                {['Automate Everything', 'Enhance Intelligence', 'Deliver Faster'].map((t) => (
                  <div key={t} className="flex items-center gap-2 text-xs text-gray-500">
                    <span className="w-1 h-1 rounded-full bg-[#ed2024]" />
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-6 pt-6 border-t border-white/8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} ARA Discover Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-xs text-gray-600">
            Powered by <span className="text-[#ed2024] font-semibold ml-1">AI & Automation</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
