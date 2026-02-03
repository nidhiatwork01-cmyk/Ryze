'use client'

import { motion } from 'framer-motion'
import { DollarSign, TrendingUp, Zap, CheckCircle2 } from 'lucide-react'

const improvements = [
  {
    action: 'Pause 27 Burning Queries',
    detail: '0 conversions (30d)',
    impact: '+$1.8k/mo',
    applied: true,
  },
  {
    action: 'Split Brand from Non-Brand',
    detail: 'ROAS 8.2 vs 1.6; separate budgets',
    impact: '+$3.7k/mo',
    applied: true,
  },
  {
    action: 'Isolate "Project Mgmt"',
    detail: 'Own ad group, bid down',
    impact: '+$5.8k/mo',
    applied: true,
  },
  {
    action: 'Raise Brand US Cap',
    detail: 'Lost IS Budget 62%',
    impact: '+$3.2k/mo',
    applied: true,
  },
  {
    action: 'Add 85 Negatives',
    detail: 'Block waste terms ("jobs", "free", "tutorial")',
    impact: '+$4.6k/mo',
    applied: true,
  },
  {
    action: 'Fix Tracking',
    detail: 'Use one conversion set per campaign; dedupe events',
    impact: '+$5.9k/mo',
    applied: true,
  },
]

export default function BudgetReallocation() {
  const totalImpact = improvements.reduce((sum, item) => {
    const value = parseFloat(item.impact.replace(/[^0-9.]/g, ''))
    return sum + value
  }, 0)

  return (
    <section className="section-padding bg-gradient-to-br from-gray-900 via-emerald-900 to-amber-900 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            24/7 ROAS
            <span className="block bg-gradient-to-r from-emerald-400 to-amber-400 bg-clip-text text-transparent">
              Improvements
            </span>
          </h2>
          <p className="text-xl text-gray-300">
            Autonomous optimizations running around the clock
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Summary Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8 border border-white/20"
          >
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold text-emerald-400 mb-2">${totalImpact.toFixed(1)}k</div>
                <div className="text-gray-300">Monthly Impact</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-amber-400 mb-2">3.1x</div>
                <div className="text-gray-300">ROAS</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-emerald-400 mb-2">$23.4</div>
                <div className="text-gray-300">CPA</div>
              </div>
            </div>
          </motion.div>

          {/* Improvements List */}
          <div className="space-y-4">
            {improvements.map((item, index) => (
              <motion.div
                key={item.action}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <Zap className="w-5 h-5 text-amber-400" />
                      <h4 className="font-bold text-white">{item.action}</h4>
                      {item.applied && (
                        <span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 text-xs rounded-full flex items-center space-x-1">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>Applied</span>
                        </span>
                      )}
                    </div>
                    <p className="text-gray-300 text-sm">{item.detail}</p>
                  </div>
                  <div className="text-right ml-4">
                    <p className="text-2xl font-bold text-emerald-400">{item.impact}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  )
}







