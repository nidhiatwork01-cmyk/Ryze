'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Zap, CheckCircle2, DollarSign, ArrowRight, Sparkles } from 'lucide-react'
import { useState } from 'react'

const improvements = [
  {
    action: 'Pause 27 Burning Queries',
    detail: '0 conversions in last 30 days - wasting budget',
    impact: '+$1.8k/mo',
    applied: true,
    type: 'budget',
    category: 'Budget Optimization',
  },
  {
    campaign: 'Brand Search - US',
    conv: 980,
    roas: 9.4,
    suggestion: 'Raise budget cap by 12%',
    detail: 'Lost impression share: 62% due to budget',
    impact: '+$3.2k/mo',
    type: 'audit',
    category: 'High Performer',
  },
  {
    action: 'Split Brand from Non-Brand',
    detail: 'ROAS 8.2x vs 1.6x - separate budgets for better control',
    impact: '+$3.7k/mo',
    applied: true,
    type: 'budget',
    category: 'Campaign Structure',
  },
  {
    campaign: 'Non-Brand Search - Running',
    conv: 260,
    roas: 3.2,
    suggestion: 'Split into 5 themed ad groups',
    detail: 'Improve relevance and quality scores',
    impact: '+$5.8k/mo',
    type: 'audit',
    category: 'Optimization',
  },
  {
    action: 'Add 85 Negative Keywords',
    detail: 'Block waste terms: "jobs", "free", "tutorial"',
    impact: '+$4.6k/mo',
    applied: true,
    type: 'budget',
    category: 'Targeting',
  },
  {
    action: 'Fix Conversion Tracking',
    detail: 'Dedupe events - use one conversion set per campaign',
    impact: '+$5.9k/mo',
    applied: true,
    type: 'budget',
    category: 'Data Quality',
  },
]

export default function CombinedOptimization() {
  const [activeTab, setActiveTab] = useState<'improvements' | 'audit'>('improvements')

  const budgetImprovements = improvements.filter(item => item.type === 'budget')
  const auditSuggestions = improvements.filter(item => item.type === 'audit')
  
  const totalImpact = improvements.reduce((sum, item) => {
    const value = parseFloat(item.impact.replace(/[^0-9.]/g, ''))
    return sum + value
  }, 0)

  return (
    <section className="relative py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      {/* Glowing Orbs */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl"
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
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
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 text-emerald-400 px-6 py-3 rounded-full text-sm font-bold mb-8"
          >
            <Sparkles className="w-5 h-5 animate-pulse" />
            <span>AI Working 24/7</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
            <span className="text-white">Real-Time</span>
            <br />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-amber-400 bg-clip-text text-transparent">
              AI Optimizations
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Watch as our AI agents continuously optimize your campaigns, implementing improvements and catching issues before they cost you money
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white/5 backdrop-blur-lg p-2 rounded-2xl border border-white/10 shadow-2xl">
            <button
              onClick={() => setActiveTab('improvements')}
              className={`relative px-8 py-4 rounded-xl font-bold transition-all duration-300 ${
                activeTab === 'improvements'
                  ? 'text-white'
                  : 'text-gray-400 hover:text-gray-300'
              }`}
            >
              {activeTab === 'improvements' && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl shadow-lg"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10 flex items-center">
                <Zap className="w-5 h-5 mr-2" />
                Live Improvements
              </span>
            </button>
            <button
              onClick={() => setActiveTab('audit')}
              className={`relative px-8 py-4 rounded-xl font-bold transition-all duration-300 ${
                activeTab === 'audit'
                  ? 'text-white'
                  : 'text-gray-400 hover:text-gray-300'
              }`}
            >
              {activeTab === 'audit' && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl shadow-lg"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10 flex items-center">
                <TrendingUp className="w-5 h-5 mr-2" />
                Account Audit
              </span>
            </button>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Improvements Tab */}
            {activeTab === 'improvements' && (
              <div className="space-y-4">
                {budgetImprovements.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="group relative"
                  >
                    <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-emerald-500/50 hover:bg-white/10 transition-all duration-300 overflow-hidden">
                      {/* Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      <div className="relative flex items-center justify-between">
                        <div className="flex items-start space-x-4 flex-1">
                          {/* Icon */}
                          <div className="flex-shrink-0 p-3 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl group-hover:scale-110 transition-transform shadow-lg shadow-emerald-500/50">
                            <Zap className="w-6 h-6 text-white" />
                          </div>
                          
                          {/* Content */}
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <h4 className="text-white font-bold text-lg">{item.action}</h4>
                              {item.applied && (
                                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs rounded-full flex items-center space-x-1 border border-emerald-500/30">
                                  <CheckCircle2 className="w-3 h-3" />
                                  <span>Applied</span>
                                </span>
                              )}
                              <span className="px-3 py-1 bg-amber-500/20 text-amber-400 text-xs rounded-full border border-amber-500/30">
                                {item.category}
                              </span>
                            </div>
                            <p className="text-gray-400 text-sm">{item.detail}</p>
                          </div>
                        </div>
                        
                        {/* Impact */}
                        <div className="text-right ml-6">
                          <div className="text-3xl font-black bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                            {item.impact}
                          </div>
                          <div className="text-gray-500 text-xs font-semibold mt-1">Monthly Impact</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Audit Tab */}
            {activeTab === 'audit' && (
              <div className="space-y-4">
                {auditSuggestions.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="group relative"
                  >
                    <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-amber-500/50 hover:bg-white/10 transition-all duration-300 overflow-hidden">
                      {/* Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-500/5 to-amber-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      <div className="relative flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-3">
                            <div className="p-2 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg">
                              <TrendingUp className="w-5 h-5 text-white" />
                            </div>
                            <h4 className="text-white font-bold text-lg">{item.campaign}</h4>
                            <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full border border-blue-500/30">
                              {item.category}
                            </span>
                          </div>
                          
                          <div className="flex items-center space-x-8 mb-3 text-sm">
                            <span className="text-gray-400">
                              Conversions: <span className="text-white font-bold">{item.conv?.toLocaleString()}</span>
                            </span>
                            <span className="text-gray-400">
                              ROAS: <span className="text-emerald-400 font-bold">{item.roas}x</span>
                            </span>
                          </div>
                          
                          <p className="text-white font-semibold mb-1">{item.suggestion}</p>
                          <p className="text-gray-400 text-sm">{item.detail}</p>
                        </div>
                        
                        <div className="text-right ml-6 flex flex-col items-end space-y-3">
                          <div className="text-3xl font-black bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                            {item.impact}
                          </div>
                          <button className="px-6 py-2.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white rounded-xl transition-all text-sm font-bold shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 hover:scale-105 flex items-center space-x-2">
                            <span>Apply Now</span>
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Summary Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 relative bg-gradient-to-br from-emerald-600 via-teal-600 to-amber-600 rounded-3xl p-12 overflow-hidden"
          >
            {/* Animated Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]" />
            
            <div className="relative z-10 grid md:grid-cols-3 gap-8 text-center text-white">
              {[
                { value: `$${totalImpact.toFixed(1)}k`, label: 'Total Monthly Impact', icon: DollarSign },
                { value: '6', label: 'Optimizations Applied', icon: Zap },
                { value: '3.1x', label: 'Average ROAS', icon: TrendingUp },
              ].map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group"
                  >
                    <Icon className="w-12 h-12 mx-auto mb-4 opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                    <div className="text-5xl font-black mb-2">{stat.value}</div>
                    <div className="text-emerald-100 font-semibold text-lg">{stat.label}</div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
