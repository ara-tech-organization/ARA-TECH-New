import { motion } from 'framer-motion'

const Button = ({ children, variant = 'primary', onClick, href, className = '', size = 'md', icon: Icon }) => {
  const base = 'inline-flex items-center gap-2 font-semibold rounded-xl transition-all duration-300 cursor-pointer select-none'

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const variants = {
    primary: 'bg-[#ed2024] text-white hover:bg-[#c0181c] shadow-lg shadow-[#ed2024]/20 hover:shadow-[#ed2024]/40 hover:shadow-xl',
    secondary: 'bg-white/10 text-white border border-white/20 hover:bg-white/15 hover:border-white/30 backdrop-blur-xl',
    outline: 'bg-transparent text-[#ed2024] border border-[#ed2024]/50 hover:bg-[#ed2024]/10 hover:border-[#ed2024]',
    ghost: 'bg-transparent text-white hover:bg-white/10',
  }

  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`

  const motionProps = {
    whileHover: { scale: 1.03 },
    whileTap: { scale: 0.97 },
    transition: { type: 'spring', stiffness: 400, damping: 17 },
  }

  if (href) {
    return (
      <motion.a href={href} className={classes} {...motionProps}>
        {Icon && <Icon size={size === 'lg' ? 20 : 18} />}
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button onClick={onClick} className={classes} {...motionProps}>
      {Icon && <Icon size={size === 'lg' ? 20 : 18} />}
      {children}
    </motion.button>
  )
}

export default Button
