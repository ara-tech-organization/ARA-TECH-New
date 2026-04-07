import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
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
      </Routes>
    </AnimatePresence>
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
