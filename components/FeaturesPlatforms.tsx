'use client'

import { motion } from 'framer-motion'
import { 
  Brain, 
  Zap, 
  BarChart3,
  TrendingUp,
  Search,
  Facebook,
  ShoppingBag,
  Linkedin,
  CheckCircle2,
  ArrowRight,
  Sparkles
} from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'AI Creative Generation',
    description: 'Automatically generate high-performing ad creatives with AI that learns from your best assets',
    color: 'from-emerald-500 to-teal-500',
    stat: '3x faster',
  },
  {
    icon: BarChart3,
    title: '24/7 Performance Audits',
    description: 'Continuous monitoring catches issues before they cost you money',
    color: 'from-amber-500 to-orange-500',
    stat: '24/7 active',
  },
  {
    icon: Zap,
    title: 'Autonomous Optimization',
    description: 'AI agents automatically adjust bids, budgets, and targeting in real-time',
    color: 'from-purple-500 to-pink-500',
    stat: 'Instant',
  },
  {
    icon: TrendingUp,
    title: 'ROAS Improvements',
    description: 'Average 63% improvement in return on ad spend within 30 days',
    color: 'from-blue-500 to-cyan-500',
    stat: '+63% ROAS',
  },
]

const platforms = [
  { name: 'Google Ads', icon: Search, color: 'from-blue-500 to-blue-600', users: '1.5k+' },
  { name: 'Meta Ads', icon: Facebook, color: 'from-blue-400 to-indigo-500', users: '1.8k+' },
  { name: 'Amazon Ads', icon: ShoppingBag, color: 'from-amber-500 to-orange-600', users: '800+' },
  { name: 'LinkedIn Ads', icon: Linkedin, color: 'from-blue-600 to-blue-700', users: '600+' },
]

export default function FeaturesPlatforms() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(16,185,129,0.05)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,_rgba(245,158,11,0.05)_0%,_transparent_50%)]" />

      <div className="container-custom relative z-10">
        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-bold mb-6"
            >
              <Sparkles className="w-4 h-4" />
              <span>Powered by Advanced AI</span>
            </motion.div>
            
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Everything You Need
              <span className="block bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-600 bg-clip-text text-transparent">
                In One Platform
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful autonomous AI agents working 24/7 to maximize your advertising performance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group relative"
                >
                  {/* Card */}
                  <div className="relative h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden">
                    {/* Gradient Background on Hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                    
                    {/* Stat Badge */}
                    <div className="absolute top-4 right-4 bg-gray-100 group-hover:bg-gradient-to-r group-hover:from-emerald-500 group-hover:to-teal-500 text-gray-700 group-hover:text-white px-3 py-1 rounded-full text-xs font-bold transition-all duration-300">
                      {feature.stat}
                    </div>

                    {/* Icon */}
                    <div className={`relative inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.color} mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                      
                      {/* Glow Effect */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 rounded-2xl`} />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-emerald-600 group-hover:to-teal-600 group-hover:bg-clip-text transition-all duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {feature.description}
                    </p>

                    {/* Learn More */}
                    <div className="flex items-center text-emerald-600 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span>Learn more</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Platforms Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Decorative Elements */}
          <div className="absolute -top-40 left-1/2 transform -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-r from-emerald-200/20 to-amber-200/20 rounded-full blur-3xl" />

          <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-12 md:p-16 overflow-hidden">
            {/* Animated Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
            
            {/* Content */}
            <div className="relative z-10 text-center mb-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 text-emerald-400 px-4 py-2 rounded-full text-sm font-bold mb-6"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Seamless Integrations</span>
              </motion.div>

              <h3 className="text-4xl md:text-5xl font-black mb-6">
                <span className="text-white">Connect All Your</span>
                <br />
                <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-amber-400 bg-clip-text text-transparent">
                  Advertising Platforms
                </span>
              </h3>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Unified management and optimization across all your channels
              </p>
            </div>

            <div className="relative z-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {platforms.map((platform, index) => {
                const Icon = platform.icon
                return (
                  <motion.div
                    key={platform.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.05 }}
                    className="group relative"
                  >
                    <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 hover:bg-white/10">
                      {/* Icon Container */}
                      <div className="relative mb-4">
                        <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${platform.color} group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        
                        {/* Connected Badge */}
                        <div className="absolute -top-2 -right-2 bg-emerald-500 text-white p-1.5 rounded-full shadow-lg">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                      </div>

                      {/* Platform Info */}
                      <h4 className="text-white font-bold text-lg mb-2">{platform.name}</h4>
                      <div className="flex items-center justify-between">
                        <span className="text-emerald-400 text-sm font-semibold">Connected</span>
                        <span className="text-gray-400 text-xs">{platform.users} users</span>
                      </div>

                      {/* Hover Effect */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${platform.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="relative z-10 text-center mt-12"
            >
              <p className="text-gray-400 mb-4">Integrate with 15+ advertising platforms</p>
              <button className="group bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 inline-flex items-center">
                View All Integrations
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
