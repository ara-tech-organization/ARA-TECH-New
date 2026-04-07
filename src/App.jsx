import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
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

const AnimatedRoutes = () => {
  const location = useLocation()

  return (
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
  )
}

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AnimatedRoutes />
    </BrowserRouter>
  )
}

export default App
