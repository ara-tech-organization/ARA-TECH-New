import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import { motion, AnimatePresence as AP } from 'framer-motion'
import PageLayout from './layouts/PageLayout'

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

const ScrollToTop = () => {
  const location = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [location.pathname])
  return null
}

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
      </Routes>
    </AnimatePresence>
    </>
  )
}

const App = () => {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  )
}

export default App
