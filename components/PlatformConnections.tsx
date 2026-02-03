'use client'

import { motion } from 'framer-motion'
import { 
  Search, 
  Facebook, 
  ShoppingBag, 
  Linkedin, 
  BarChart3,
  CheckCircle2,
  Plus
} from 'lucide-react'

const platforms = [
  { name: 'Google Ads', icon: Search, connected: false, color: 'from-blue-500 to-blue-600' },
  { name: 'Meta Ads', icon: Facebook, connected: false, color: 'from-blue-400 to-blue-500' },
  { name: 'Shopify', icon: ShoppingBag, connected: false, color: 'from-green-500 to-green-600' },
  { name: 'GA4', icon: BarChart3, connected: false, color: 'from-orange-500 to-orange-600' },
  { name: 'Amazon', icon: ShoppingBag, connected: false, color: 'from-amber-500 to-amber-600' },
  { name: 'LinkedIn', icon: Linkedin, connected: false, color: 'from-blue-600 to-blue-700' },
]

export default function PlatformConnections() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Manages All Your
            <span className="block bg-gradient-to-r from-emerald-600 to-amber-600 bg-clip-text text-transparent">
              Accounts
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Connect your advertising platforms in one place
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platforms.map((platform, index) => {
              const Icon = platform.icon
              return (
                <motion.div
                  key={platform.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group relative bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-emerald-500 transition-all cursor-pointer overflow-hidden"
                >
                  <div className="relative w-full h-32 mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                    <div className={`absolute inset-0 bg-gradient-to-br ${platform.color} opacity-10 group-hover:opacity-20 transition-opacity`} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon className="w-12 h-12 text-gray-400 group-hover:text-emerald-600 transition-colors" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{platform.name}</h3>
                  {platform.connected ? (
                    <div className="flex items-center space-x-2 text-emerald-600">
                      <CheckCircle2 className="w-5 h-5" />
                      <span className="font-semibold">Connected</span>
                    </div>
                  ) : (
                    <button className="flex items-center space-x-2 text-gray-600 hover:text-emerald-600 transition-colors">
                      <Plus className="w-5 h-5" />
                      <span className="font-semibold">Connect</span>
                    </button>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

