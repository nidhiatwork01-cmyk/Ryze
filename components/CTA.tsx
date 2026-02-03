'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowRight, CheckCircle, Sparkles, Zap, Star, TrendingUp, Shield } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

// Magnetic Button Component
const MagneticButton = ({ children, href }: { children: React.ReactNode, href: string }) => {
  const ref = useRef<HTMLAnchorElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const springConfig = { damping: 15, stiffness: 150 }
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)
  
  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set((e.clientX - centerX) * 0.2)
    y.set((e.clientY - centerY) * 0.2)
  }
  
  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }
  
  return (
    <motion.a
      ref={ref}
      href={href}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative inline-flex items-center justify-center"
    >
      {children}
    </motion.a>
  )
}

// Floating Orb Component
const FloatingOrb = ({ delay = 0, color = 'emerald' }: { delay?: number, color?: string }) => {
  const colorMap: Record<string, string> = {
    emerald: 'bg-emerald-400',
    teal: 'bg-teal-400',
    amber: 'bg-amber-400',
  }
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 0.6, 0],
        scale: [0, 1, 0],
        x: [0, Math.random() * 400 - 200],
        y: [0, Math.random() * -400],
      }}
      transition={{
        duration: 4 + Math.random() * 2,
        repeat: Infinity,
        delay: delay,
        ease: "easeOut"
      }}
      className={`absolute w-2 h-2 ${colorMap[color] || 'bg-emerald-400'} rounded-full blur-sm`}
      style={{
        left: `${Math.random() * 100}%`,
        bottom: '0%',
      }}
    />
  )
}

export default function CTA() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const sectionRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        })
      }
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const benefits = [
    { icon: Zap, text: '24/7 autonomous optimization', color: 'emerald' },
    { icon: Sparkles, text: 'AI creative generation', color: 'teal' },
    { icon: TrendingUp, text: 'Real-time performance audits', color: 'amber' },
    { icon: Shield, text: 'Enterprise-grade security', color: 'blue' },
  ]

  return (
    <section 
      ref={sectionRef}
      id="get-started" 
      className="relative py-40 overflow-hidden bg-black"
    >
      {/* Morphing Background */}
      <div className="absolute inset-0">
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="ctaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981">
                <animate attributeName="stop-color" values="#10b981; #14b8a6; #06b6d4; #10b981" dur="10s" repeatCount="indefinite" />
              </stop>
              <stop offset="50%" stopColor="#14b8a6">
                <animate attributeName="stop-color" values="#14b8a6; #06b6d4; #8b5cf6; #14b8a6" dur="10s" repeatCount="indefinite" />
              </stop>
              <stop offset="100%" stopColor="#f59e0b">
                <animate attributeName="stop-color" values="#f59e0b; #f97316; #ef4444; #f59e0b" dur="10s" repeatCount="indefinite" />
              </stop>
            </linearGradient>
            
            <filter id="ctaGoo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="15" result="blur" />
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10" result="goo" />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
          
          <g filter="url(#ctaGoo)" opacity="0.4">
            <circle cx="30%" cy="40%" r="20%" fill="url(#ctaGrad)">
              <animate attributeName="cx" values="30%; 70%; 30%" dur="25s" repeatCount="indefinite" />
              <animate attributeName="cy" values="40%; 60%; 40%" dur="20s" repeatCount="indefinite" />
              <animate attributeName="r" values="20%; 25%; 20%" dur="15s" repeatCount="indefinite" />
            </circle>
            <circle cx="70%" cy="60%" r="25%" fill="url(#ctaGrad)">
              <animate attributeName="cx" values="70%; 30%; 70%" dur="30s" repeatCount="indefinite" />
              <animate attributeName="cy" values="60%; 40%; 60%" dur="22s" repeatCount="indefinite" />
              <animate attributeName="r" values="25%; 30%; 25%" dur="18s" repeatCount="indefinite" />
            </circle>
            <circle cx="50%" cy="50%" r="22%" fill="url(#ctaGrad)">
              <animate attributeName="r" values="22%; 28%; 22%" dur="16s" repeatCount="indefinite" />
            </circle>
          </g>
        </svg>
      </div>

      {/* Particle System */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(100)].map((_, i) => (
          <FloatingOrb key={i} delay={i * 0.05} color={['emerald', 'teal', 'amber'][i % 3]} />
        ))}
      </div>

      {/* Dynamic Grid with Mouse Follow */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(16, 185, 129, 0.15) 0%, transparent 50%)`,
        }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98115_1px,transparent_1px),linear-gradient(to_bottom,#10b98115_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </motion.div>

      <div className="container-custom relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
              transition={{ rotate: { duration: 0.5 } }}
              className="inline-flex items-center space-x-3 holo-card px-8 py-4 rounded-full text-sm font-black mb-12 shadow-2xl"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-6 h-6 text-emerald-400" />
              </motion.div>
              <span className="text-lg text-white">Join 2000+ Marketers & 700+ Agencies</span>
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.1, type: "spring" }}
                    className="w-8 h-8 rounded-full border-2 border-black overflow-hidden"
                  >
                    <img src={`https://i.pravatar.cc/150?img=${i}`} alt="" className="w-full h-full object-cover" />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h2 
              className="text-6xl md:text-8xl font-black mb-8 leading-[1.1]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <motion.span 
                className="block text-white mb-4"
                whileHover={{ scale: 1.02 }}
              >
                Ready to 10x
              </motion.span>
              <motion.span 
                className="block relative"
                whileHover={{ scale: 1.02 }}
              >
                <span className="relative z-10 bg-gradient-to-r from-emerald-400 via-teal-400 to-amber-400 bg-clip-text text-transparent">
                  Your ROAS?
                </span>
                {/* Animated Underline */}
                <motion.div
                  className="absolute -bottom-4 left-0 right-0 h-2 bg-gradient-to-r from-emerald-400 via-teal-400 to-amber-400 rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                />
              </motion.span>
            </motion.h2>
            
            <motion.p 
              className="text-3xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Start your <span className="text-white font-black bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">14-day trial</span>—no credit card.
              <br />
              <span className="text-2xl text-gray-400">See results in 48 hours or we work for free.</span>
            </motion.p>
          </motion.div>

          {/* Benefits Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="grid md:grid-cols-2 gap-6 mb-16 max-w-4xl mx-auto"
          >
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="group relative"
                >
                  <div className="flex items-center space-x-4 holo-card px-8 py-6 rounded-2xl border-2 border-white/10 hover:border-emerald-500/50 transition-all overflow-hidden">
                    {/* Shimmer Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                      animate={{ x: [-200, 200] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
                    />
                    
                    <motion.div 
                      className={`flex-shrink-0 w-14 h-14 bg-gradient-to-br from-${benefit.color}-500 to-${benefit.color}-600 rounded-xl flex items-center justify-center relative z-10`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </motion.div>
                    <span className="text-white font-bold text-xl relative z-10">{benefit.text}</span>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
          >
            <MagneticButton href="/signup">
              <div className="group relative bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-500 text-white font-black py-6 px-12 rounded-2xl transition-all shadow-2xl overflow-hidden">
                {/* Animated Background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-teal-500 via-emerald-500 to-teal-500"
                  animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  style={{ backgroundSize: "200% 200%" }}
                />
                
                {/* Pulse Effect */}
                <motion.div
                  className="absolute inset-0 bg-white"
                  animate={{ scale: [1, 2, 2], opacity: [0.5, 0, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                
                <span className="relative z-10 flex items-center text-xl">
                  <Zap className="w-7 h-7 mr-3" />
                  Start Free Trial Now
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="ml-3 w-7 h-7" />
                  </motion.div>
                </span>
              </div>
            </MagneticButton>
            
            <MagneticButton href="/demo">
              <div className="group holo-card text-white font-bold py-6 px-12 rounded-2xl border-2 border-white/20 hover:border-emerald-400/50 transition-all text-xl">
                <span className="flex items-center">
                  Book a Demo
                  <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </MagneticButton>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9 }}
            className="space-y-12"
          >
            {/* Stats Row */}
            <div className="flex flex-wrap justify-center gap-16 text-center">
              {[
                { value: '14 Days', label: 'Free Trial', icon: Star },
                { value: 'No Card', label: 'Required', icon: CheckCircle },
                { value: 'Cancel', label: 'Anytime', icon: Shield },
              ].map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1 + index * 0.1, type: "spring" }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="group cursor-pointer"
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="w-10 h-10 mx-auto mb-3 text-emerald-400" />
                    </motion.div>
                    <div className="text-5xl font-black text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-teal-400 group-hover:bg-clip-text transition-all">
                      {stat.value}
                    </div>
                    <div className="text-gray-400 font-bold text-lg">{stat.label}</div>
                  </motion.div>
                )
              })}
            </div>

            {/* Social Proof */}
            <motion.div 
              className="flex flex-col items-center space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2 }}
            >
              <div className="flex items-center space-x-3">
                <div className="flex -space-x-3">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, x: -20 }}
                      whileInView={{ scale: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.3 + i * 0.05, type: "spring" }}
                      whileHover={{ scale: 1.2, zIndex: 10 }}
                      className="w-12 h-12 rounded-full border-4 border-black overflow-hidden cursor-pointer"
                    >
                      <img
                        src={`https://i.pravatar.cc/150?img=${i + 10}`}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  ))}
                </div>
                <motion.div 
                  className="text-left"
                  whileHover={{ x: 5 }}
                >
                  <div className="text-white font-black text-xl">2000+ marketers</div>
                  <div className="text-emerald-400 text-sm font-semibold">already scaling with Ryze</div>
                </motion.div>
              </div>

              {/* Star Rating */}
              <div className="flex items-center space-x-2">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.5 + i * 0.05, type: "spring" }}
                    whileHover={{ scale: 1.3, rotate: 360 }}
                  >
                    <Star className="w-6 h-6 fill-amber-400 text-amber-400" />
                  </motion.div>
                ))}
                <span className="text-gray-400 ml-2 font-semibold">4.9/5 from 500+ reviews</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
    </section>
  )
}
