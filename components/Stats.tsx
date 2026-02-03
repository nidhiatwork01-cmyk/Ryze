'use client'

import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import { Users, Building2, Globe, DollarSign, TrendingUp, Zap } from 'lucide-react'
import { useEffect, useRef } from 'react'

function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration: 2000 })
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [motionValue, isInView, value])

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${Math.floor(latest)}${suffix}`
      }
    })
  }, [springValue, suffix])

  return <span ref={ref} />
}

const stats = [
  { 
    icon: Users, 
    value: 2000, 
    suffix: '+', 
    label: 'Active Clients', 
    color: 'from-emerald-500 to-teal-500',
    description: 'Marketers trust Ryze'
  },
  { 
    icon: Building2, 
    value: 700, 
    suffix: '+', 
    label: 'Partner Agencies', 
    color: 'from-amber-500 to-orange-500',
    description: 'Growing our network'
  },
  { 
    icon: Globe, 
    value: 23, 
    suffix: '+', 
    label: 'Countries', 
    color: 'from-purple-500 to-pink-500',
    description: 'Worldwide presence'
  },
  { 
    icon: DollarSign, 
    value: 500, 
    suffix: 'M+', 
    label: 'Ad Spend Managed', 
    color: 'from-blue-500 to-cyan-500',
    description: 'Total investment'
  },
]

export default function Stats() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-white via-gray-50 to-white overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl transform -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl transform -translate-y-1/2" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-bold mb-4"
          >
            <Zap className="w-4 h-4" />
            <span>Trusted Globally</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="text-gray-900">Numbers That</span>
            <span className="block bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Speak for Themselves
            </span>
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <div className="relative h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden">
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${stat.color} group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-2xl`} />
                  </div>

                  {/* Number */}
                  <div className="relative">
                    <div className={`text-5xl md:text-6xl font-black mb-3 group-hover:scale-110 transition-transform duration-500 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-gray-900 font-bold text-lg mb-2">{stat.label}</div>
                    <div className="text-gray-600 text-sm">{stat.description}</div>
                  </div>

                  {/* Trending Indicator */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="absolute top-4 right-4 flex items-center space-x-1 text-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-xs font-bold">Growing</span>
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-50 to-teal-50 border-2 border-emerald-200 text-emerald-700 px-8 py-4 rounded-2xl font-bold text-lg shadow-lg">
            <Zap className="w-6 h-6" />
            <span>Join thousands of successful marketers using Ryze</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
