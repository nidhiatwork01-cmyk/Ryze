'use client'

import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { ArrowRight, Sparkles, Zap, Play, Star, TrendingUp } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

// Subtle floating orb component
const FloatingOrb = ({ delay = 0, size = 400, x = '50%', y = '50%' }: { delay?: number, size?: number, x?: string, y?: string }) => {
  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        width: size,
        height: size,
        left: x,
        top: y,
        background: 'radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, transparent 70%)',
        filter: 'blur(60px)',
      }}
      animate={{
        x: [0, 30, -20, 0],
        y: [0, -40, 20, 0],
        scale: [1, 1.1, 0.9, 1],
      }}
      transition={{
        duration: 20 + delay * 5,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: delay,
      }}
    />
  )
}

// Subtle grid pattern
const SubtleGrid = () => {
  return (
    <div 
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: `
          linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
      }}
    />
  )
}

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
      }
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20"
    >
      {/* Subtle animated gradient background */}
      <motion.div 
        className="absolute inset-0 z-0"
        animate={{
          background: [
            'radial-gradient(circle at 20% 30%, rgba(16, 185, 129, 0.06) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(14, 165, 233, 0.05) 0%, transparent 50%)',
            'radial-gradient(circle at 60% 40%, rgba(16, 185, 129, 0.06) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(14, 165, 233, 0.05) 0%, transparent 50%)',
            'radial-gradient(circle at 30% 60%, rgba(16, 185, 129, 0.06) 0%, transparent 50%), radial-gradient(circle at 70% 20%, rgba(14, 165, 233, 0.05) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 30%, rgba(16, 185, 129, 0.06) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(14, 165, 233, 0.05) 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Subtle floating orbs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <FloatingOrb delay={0} size={500} x="10%" y="20%" />
        <FloatingOrb delay={2} size={600} x="90%" y="80%" />
        <FloatingOrb delay={4} size={450} x="50%" y="50%" />
      </div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <SubtleGrid />
      </div>

      {/* Gentle mouse-following spotlight */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-0"
        animate={{
          background: `radial-gradient(circle 600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(16, 185, 129, 0.08), transparent 70%)`,
        }}
        transition={{ type: "tween", ease: "linear", duration: 0.3 }}
      />

      {/* Content */}
      <motion.div style={{ opacity }} className="container-custom relative z-20 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center space-x-3 holo-card px-8 py-4 rounded-full font-bold shadow-2xl mb-8"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-6 h-6 text-emerald-400" />
              </motion.div>
              <span 
                className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent text-lg"
                style={{ 
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Next-Gen AI Revolution
              </span>
              <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse glow-intense" />
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              className="text-7xl md:text-8xl lg:text-9xl font-black mb-8 leading-none"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <motion.span 
                className="block text-white mb-4"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                AI That
              </motion.span>
              <motion.span 
                className="block relative"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span 
                  className="relative z-20 neon-text bg-gradient-to-r from-emerald-400 via-teal-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-gradient"
                  style={{ 
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Prints Money
                </span>
              </motion.span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p 
              className="text-3xl md:text-4xl text-gray-400 mb-12 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span 
                className="text-white font-black text-5xl block mb-3 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent"
                style={{ 
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                63% ROAS boost
              </span>
              <span 
                className="text-2xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
                style={{ 
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Autonomous. Intelligent. Unstoppable.
              </span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  href="/signup" 
                  className="group relative bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white font-black py-6 px-12 rounded-2xl shadow-2xl glow-intense overflow-hidden inline-flex items-center justify-center text-xl"
                >
                  <span className="relative z-10 flex items-center">
                    <Zap className="w-7 h-7 mr-3" />
                    Launch Free Trial
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="ml-3 w-7 h-7" />
                    </motion.span>
                  </span>
                  <div className="absolute inset-0 shimmer" />
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Link>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <button className="group holo-card text-white font-bold py-6 px-12 rounded-2xl border-2 border-emerald-500/30 hover:border-emerald-400 transition-all duration-500 inline-flex items-center justify-center text-xl">
                  <span className="flex items-center">
                    <Play className="w-7 h-7 mr-2 group-hover:scale-125 transition-transform" />
                    Watch Demo
                  </span>
                </button>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              {[
                { icon: TrendingUp, value: '2000+', label: 'Active Clients', color: 'from-emerald-400 to-teal-400' },
                { icon: Star, value: '63%', label: 'Avg ROAS Lift', color: 'from-amber-400 to-orange-400' },
                { icon: Zap, value: '$500M+', label: 'Ad Spend', color: 'from-purple-400 to-pink-400' },
              ].map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + index * 0.1, type: "spring" }}
                    whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                    className="text-center lg:text-left group cursor-pointer"
                  >
                    <div className="flex items-center justify-center lg:justify-start mb-2">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon 
                          className={`w-7 h-7 mr-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                          style={{ 
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                          }}
                        />
                      </motion.div>
                      <div 
                        className={`text-5xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                        style={{ 
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                        }}
                      >
                        {stat.value}
                      </div>
                    </div>
                    <div className="text-sm text-gray-500 font-bold">{stat.label}</div>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>

          {/* Right - Advanced Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: -15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            style={{ y }}
            className="relative perspective-1000"
          >
            {/* 3D Card Effect */}
            <motion.div
              className="relative transform-gpu"
              animate={{ 
                rotateY: [0, 5, 0, -5, 0],
                rotateX: [0, 2, 0, -2, 0]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="relative holo-card rounded-3xl shadow-2xl overflow-hidden border-2 border-emerald-500/30">
                <div className="relative p-10">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center space-x-4">
                      <motion.div 
                        className="w-16 h-16 bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-2xl glow-intense"
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      >
                        <Zap className="w-10 h-10 text-white" />
                      </motion.div>
                      <div>
                        <div className="text-white font-black text-2xl">AI Neural Core</div>
                        <div className="text-emerald-400 text-sm font-bold">Quantum Processing</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-emerald-400 rounded-full animate-pulse glow-intense" />
                      <span className="text-emerald-400 text-sm font-black">ACTIVE</span>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="holo-card p-8 rounded-2xl border-2 border-emerald-500/30 overflow-hidden group cursor-pointer">
                      <div className="shimmer absolute inset-0" />
                      <div className="text-emerald-400 text-sm mb-3 font-bold relative z-10">ROAS</div>
                      <div className="text-6xl font-black text-white mb-3 relative z-10 group-hover:scale-125 transition-transform neon-text">4.2x</div>
                      <div className="text-emerald-400 text-xs flex items-center font-bold relative z-10">
                        <TrendingUp className="w-5 h-5 mr-1" />
                        +23% this week
                      </div>
                    </div>

                    <div className="holo-card p-8 rounded-2xl border-2 border-amber-500/30 overflow-hidden group cursor-pointer">
                      <div className="shimmer absolute inset-0" />
                      <div className="text-amber-400 text-sm mb-3 font-bold relative z-10">CPA</div>
                      <div className="text-6xl font-black text-white mb-3 relative z-10 group-hover:scale-125 transition-transform neon-text">$18.4</div>
                      <div className="text-amber-400 text-xs flex items-center font-bold relative z-10">
                        <TrendingUp className="w-5 h-5 mr-1" />
                        -15% optimized
                      </div>
                    </div>
                  </div>

                  {/* Animated Chart */}
                  <div className="relative h-48 rounded-xl holo-card p-6 border border-emerald-500/20 overflow-hidden">
                    <div className="flex items-end justify-between h-full space-x-2">
                      {[65, 78, 85, 72, 90, 88, 95, 100].map((height, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${height}%` }}
                          transition={{ 
                            delay: 1.2 + i * 0.1, 
                            duration: 0.8,
                            repeat: Infinity,
                            repeatDelay: 5,
                            repeatType: "reverse"
                          }}
                          whileHover={{ scale: 1.1 }}
                          className="flex-1 bg-gradient-to-t from-emerald-500 via-teal-500 to-cyan-500 rounded-t-xl opacity-80 hover:opacity-100 transition-all glow-intense cursor-pointer"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* AI Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0, rotate: -10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ delay: 1.5, type: "spring" }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="absolute -bottom-8 -right-8 bg-gradient-to-r from-amber-500 via-orange-500 to-pink-500 text-white px-10 py-6 rounded-2xl shadow-2xl border-4 border-black z-20 cursor-pointer glow-intense"
                >
                  <div className="flex items-center space-x-3">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    >
                      <Sparkles className="w-8 h-8" />
                    </motion.div>
                    <div>
                      <div className="text-xs font-bold">AI Processing</div>
                      <div className="text-lg font-black">+$3.2k/mo</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Floating Platform Badges */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.8 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="absolute -left-16 top-1/4 holo-card px-8 py-5 rounded-2xl border-2 border-blue-500/30 shadow-2xl cursor-pointer"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center font-black text-blue-600 text-2xl glow-intense">G</div>
                <span className="text-white font-bold text-lg">Google Ads</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2 }}
              whileHover={{ scale: 1.1, rotate: -5 }}
              className="absolute -right-16 top-2/3 holo-card px-8 py-5 rounded-2xl border-2 border-indigo-500/30 shadow-2xl cursor-pointer"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center font-black text-white text-2xl glow-intense">f</div>
                <span className="text-white font-bold text-lg">Meta Ads</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-gpu {
          transform: translateZ(0);
          will-change: transform;
        }
      `}</style>
    </section>
  )
}
