'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Mail, TrendingUp, DollarSign } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

export default function DashboardHero() {
  const [email, setEmail] = useState('')

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-custom relative z-10 py-24">
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Left Column - Platform Connectors & Cards */}
          <div className="lg:col-span-2 space-y-6">
            {/* Platform Connectors */}
            <div className="grid grid-cols-3 gap-4">
              {['Google Ads', 'Amazon', 'Meta'].map((platform, index) => (
                <motion.div
                  key={platform}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/90 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white transition-all cursor-pointer"
                >
                  <div className="flex flex-col items-center justify-center h-24">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center mb-2">
                      {platform === 'Google Ads' && (
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded"></div>
                      )}
                      {platform === 'Amazon' && (
                        <span className="text-orange-600 font-bold text-xl">a</span>
                      )}
                      {platform === 'Meta' && (
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full"></div>
                      )}
                    </div>
                    <span className="text-xs font-semibold text-gray-700">Connect</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Creatives Optimization Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-orange-500/30 backdrop-blur-md rounded-2xl p-6 border border-orange-400/30 hover:bg-orange-500/40 transition-all"
            >
              <h3 className="text-white font-bold text-lg mb-4 uppercase tracking-wide">Creatives optimization</h3>
              <div className="relative w-full h-64 rounded-xl overflow-hidden mb-4 group">
                <Image
                  src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&h=600&fit=crop"
                  alt="Ad Creative"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Overlay Metrics */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg"
                >
                  <div className="text-xs text-gray-600">ROAS</div>
                  <div className="text-lg font-bold text-green-600">3.2x</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 }}
                  className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg"
                >
                  <div className="text-xs text-gray-600">CPA</div>
                  <div className="text-lg font-bold text-gray-900">$12</div>
                </motion.div>
              </div>
              <div className="flex gap-3">
                <button className="flex-1 bg-white text-gray-900 font-semibold py-3 px-4 rounded-lg hover:bg-gray-100 transition-all hover:scale-105 active:scale-95">
                  STOP
                </button>
                <button className="flex-1 bg-gray-900 text-white font-semibold py-3 px-4 rounded-lg hover:bg-gray-800 transition-all hover:scale-105 active:scale-95">
                  INCREASE BUDGET
                </button>
              </div>
            </motion.div>

            {/* 24/7 ROAS Improvements Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-orange-500/30 backdrop-blur-md rounded-2xl p-6 border border-orange-400/30 hover:bg-orange-500/40 transition-all"
            >
              <h3 className="text-white font-bold text-lg mb-4 uppercase tracking-wide">24/7 ROAS improvements</h3>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-white/90 backdrop-blur-sm rounded-xl p-4 mb-4 hover:bg-white transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <div className="font-semibold text-gray-900">Raise Brand US Cap</div>
                    <div className="text-sm text-gray-600">Lost IS Budget 62%</div>
                  </div>
                  <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.7, type: 'spring' }}
                    className="bg-green-500 text-white px-3 py-1 rounded-lg font-bold"
                  >
                    +$3.2k
                  </motion.div>
                </div>
              </motion.div>
              <div className="flex items-center justify-between text-white pt-2 border-t border-white/20">
                <span className="text-sm font-semibold uppercase tracking-wider">MONTHLY IMPACT</span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="text-xl font-bold"
                >
                  $813,500 /mo
                </motion.span>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Metrics & CTA */}
          <div className="space-y-6">
            {/* ROAS Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-orange-500/30 backdrop-blur-md rounded-2xl p-6 border border-orange-400/30"
            >
              <div className="text-white mb-4">
                <div className="text-sm opacity-80 mb-1">ROAS</div>
                <div className="text-3xl font-bold">3.1x</div>
              </div>
              {/* Mini Bar Chart */}
              <div className="flex items-end gap-1 h-12">
                {[0.8, 0.6, 0.9, 0.7, 0.85, 0.75, 0.95].map((height, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${height * 100}%` }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="flex-1 bg-white/40 rounded-t"
                  />
                ))}
              </div>
            </motion.div>

            {/* CPA Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-orange-500/30 backdrop-blur-md rounded-2xl p-6 border border-orange-400/30"
            >
              <div className="text-white mb-4">
                <div className="text-sm opacity-80 mb-1">CPA</div>
                <div className="text-3xl font-bold">$23.4</div>
              </div>
              {/* Mini Bar Chart */}
              <div className="flex items-end gap-1 h-12">
                {[0.7, 0.85, 0.6, 0.9, 0.75, 0.8, 0.65].map((height, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${height * 100}%` }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    className="flex-1 bg-white/40 rounded-t"
                  />
                ))}
              </div>
            </motion.div>

            {/* Main CTA */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
            >
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-white/80 text-xs font-semibold uppercase tracking-wider">
                  Next Gen of Marketing
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Let AI Run
                <span className="block">Your Ads</span>
              </h2>
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  window.location.href = '/signup'
                }}
                className="flex gap-2"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="work@email.com"
                  className="flex-1 bg-white rounded-lg px-4 py-4 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <button
                  type="submit"
                  className="w-14 h-14 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-lg"
                >
                  <ArrowRight className="w-6 h-6 text-orange-600" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

