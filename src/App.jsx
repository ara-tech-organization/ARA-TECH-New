import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import { motion, AnimatePresence as AP } from 'framer-motion'
import PageLayout from './layouts/PageLayout'

const ScrollToTop = () => {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Products from './pages/Products'
import Projects from './pages/Projects'
import SoftwareDevelopment from './pages/SoftwareDevelopment'
import MobileAppDevelopment from './pages/MobileAppDevelopment'
import WebsiteDevelopment from './pages/WebsiteDevelopment'
import AIAutomation from './pages/AIAutomation'
import ProductDevelopment from './pages/ProductDevelopment'
import UIUXDesign from './pages/UIUXDesign'
import Contact from './pages/Contact'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsAndConditions from './pages/TermsAndConditions'
import CookiesPolicy from './pages/CookiesPolicy'
import PaymentPolicy from './pages/PaymentPolicy'
import Disclaimer from './pages/Disclaimer'
import RefundPolicy from './pages/RefundPolicy'
import ServiceDeliveryPolicy from './pages/ServiceDeliveryPolicy'
import DataSecurityPolicy from './pages/DataSecurityPolicy'
import NDAPolicy from './pages/NDAPolicy'
import AIUsagePolicy from './pages/AIUsagePolicy'
import SLAPolicy from './pages/SLAPolicy'
import CompliancePolicy from './pages/CompliancePolicy'

const ScrollTopButton = () => {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <AP>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full bg-[#ed2024] text-white flex items-center justify-center shadow-lg shadow-[#ed2024]/30 hover:bg-[#c0181c] hover:scale-110 transition-all duration-200"
          aria-label="Scroll to top"
        >
          <ArrowUp size={18} />
        </motion.button>
      )}
    </AP>
  )
}

const AnimatedRoutes = () => {
  const location = useLocation()

  return (
    <>
      <ScrollToTop />
      <ScrollTopButton />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageLayout><Home /></PageLayout>} />
          <Route path="/about" element={<PageLayout><About /></PageLayout>} />
          <Route path="/services" element={<PageLayout><Services /></PageLayout>} />
          <Route path="/products" element={<PageLayout><Products /></PageLayout>} />
          <Route path="/projects" element={<PageLayout><Projects /></PageLayout>} />
          <Route path="/software-development" element={<PageLayout><SoftwareDevelopment /></PageLayout>} />
          <Route path="/mobile-app-development" element={<PageLayout><MobileAppDevelopment /></PageLayout>} />
          <Route path="/website-development" element={<PageLayout><WebsiteDevelopment /></PageLayout>} />
          <Route path="/ai-automation" element={<PageLayout><AIAutomation /></PageLayout>} />
          <Route path="/product-development" element={<PageLayout><ProductDevelopment /></PageLayout>} />
          <Route path="/ui-ux-design" element={<PageLayout><UIUXDesign /></PageLayout>} />
          <Route path="/contact" element={<PageLayout><Contact /></PageLayout>} />
          <Route path="/privacy-policy" element={<PageLayout><PrivacyPolicy /></PageLayout>} />
          <Route path="/terms-and-conditions" element={<PageLayout><TermsAndConditions /></PageLayout>} />
          <Route path="/cookies-policy" element={<PageLayout><CookiesPolicy /></PageLayout>} />
          <Route path="/disclaimer" element={<PageLayout><Disclaimer /></PageLayout>} />
          <Route path="/payment-policy" element={<PageLayout><PaymentPolicy /></PageLayout>} />
          <Route path="/refund-policy" element={<PageLayout><RefundPolicy /></PageLayout>} />
          <Route path="/service-delivery-policy" element={<PageLayout><ServiceDeliveryPolicy /></PageLayout>} />
          <Route path="/data-security-policy" element={<PageLayout><DataSecurityPolicy /></PageLayout>} />
          <Route path="/nda-policy" element={<PageLayout><NDAPolicy /></PageLayout>} />
          <Route path="/ai-usage-policy" element={<PageLayout><AIUsagePolicy /></PageLayout>} />
          <Route path="/sla-policy" element={<PageLayout><SLAPolicy /></PageLayout>} />
          <Route path="/compliance-policy" element={<PageLayout><CompliancePolicy /></PageLayout>} />
        </Routes>
      </AnimatePresence>
    </>
  )
}

const App = () => {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
        <AnimatedRoutes />
      </BrowserRouter>
      )
}

      export default App
