import { motion } from 'framer-motion'

const GlassCard = ({
  children,
  className = '',
  hover = true,
  delay = 0,
  animate = true,
  red = false,
  overflowVisible = false,
}) => {
  const base =
    `relative rounded-2xl bg-white/75 backdrop-blur-xl border border-black/6 shadow-[0_4px_24px_rgba(0,0,0,0.06)] p-6 transition-all duration-300 ${overflowVisible ? 'overflow-visible' : 'overflow-hidden'}`

  const hoverClass = hover
    ? 'hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:border-black/12'
    : ''

  const redClass = red
    ? 'border-[#ed2024]/20 shadow-[0_4px_24px_rgba(237,32,36,0.08)]'
    : ''

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] },
    },
  }

  return (
    <motion.div
      variants={animate ? cardVariants : undefined}
      className={`${base} ${hoverClass} ${redClass} ${className}`}
      whileHover={hover ? { scale: 1.02, transition: { duration: 0.2 } } : undefined}
    >
      {/* Subtle top shine */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
      {children}
    </motion.div>
  )
}

export default GlassCard
