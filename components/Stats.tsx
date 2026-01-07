'use client'

import { motion } from 'framer-motion'
import { Users, Building2, Globe, DollarSign } from 'lucide-react'

const stats = [
  { icon: Users, value: '2000+', label: 'Clients', color: 'text-primary-600' },
  { icon: Building2, value: '700+', label: 'Agencies', color: 'text-accent-600' },
  { icon: Globe, value: '23+', label: 'Countries', color: 'text-green-600' },
  { icon: DollarSign, value: '$500M+', label: 'Ad Spend Managed', color: 'text-blue-600' },
]

export default function Stats() {
  return (
    <section className="py-16 bg-white border-y border-gray-200">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`inline-flex p-4 rounded-xl bg-gray-50 mb-4 ${stat.color}`}>
                  <Icon className="w-8 h-8" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

