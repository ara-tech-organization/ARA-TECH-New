import { motion } from 'framer-motion'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
}

const SectionWrapper = ({ children, className = '', id = '', tight = false }) => {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.08 }}
      variants={containerVariants}
      className={`${tight ? 'py-12' : 'py-20'} px-6 ${className}`}
    >
      <div className="max-w-7xl mx-auto">{children}</div>
    </motion.section>
  )
}

export const SectionHeader = ({ label, title, subtitle, center = true, dark = false }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] } },
  }

  return (
    <div className={`mb-14 ${center ? 'text-center' : ''}`}>
      {label && (
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ed2024]/8 border border-[#ed2024]/20 text-[#ed2024] text-xs font-semibold mb-4 uppercase tracking-widest"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#ed2024]" />
          {label}
        </motion.div>
      )}
      <motion.h2
        variants={itemVariants}
        className={`text-3xl md:text-4xl font-bold leading-tight mb-4 ${dark ? 'text-white' : 'text-[#0a0a0a]'}`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={itemVariants}
          className={`text-lg max-w-2xl leading-relaxed ${center ? 'mx-auto' : ''} ${dark ? 'text-gray-400' : 'text-gray-500'}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}

export default SectionWrapper
