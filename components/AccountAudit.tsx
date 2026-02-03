'use client'

import { motion } from 'framer-motion'
import { TrendingUp, TrendingDown, AlertTriangle, CheckCircle2, ArrowRight } from 'lucide-react'

const auditSuggestions = [
  {
    campaign: 'Brand Search - US',
    conv: 980,
    roas: 9.4,
    suggestion: 'Raise budget cap (+12%)',
    impact: '+$3.2k/mo',
    status: 'positive',
  },
  {
    campaign: 'Non-Brand Search - Running',
    conv: 260,
    roas: 3.2,
    suggestion: 'Split ad groups (5 themes)',
    impact: '+$5.8k/mo',
    status: 'positive',
  },
  {
    campaign: 'PMax - Best Sellers',
    conv: 340,
    roas: 4.6,
    suggestion: 'Increase budget (+15%)',
    impact: '+$2.1k/mo',
    status: 'positive',
  },
  {
    campaign: 'Display - Prospecting',
    conv: 55,
    roas: 1.3,
    suggestion: 'Narrow targeting (3 layers)',
    impact: '+$1.5k/mo',
    status: 'warning',
  },
]

export default function AccountAudit() {
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
            Account Audit
            <span className="block bg-gradient-to-r from-emerald-600 to-amber-600 bg-clip-text text-transparent">
              Suggestions
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            AI-powered recommendations to optimize your campaigns
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-emerald-50 to-amber-50 rounded-2xl p-8 border border-emerald-200 mb-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Campaign Performance</h3>
                <p className="text-gray-600">Top optimization opportunities</p>
              </div>
              <button className="btn-primary bg-gradient-to-r from-emerald-600 to-amber-600 hover:from-emerald-700 hover:to-amber-700">
                Audit Account
              </button>
            </div>

            <div className="space-y-4">
              {auditSuggestions.map((item, index) => (
                <motion.div
                  key={item.campaign}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h4 className="font-bold text-gray-900">{item.campaign}</h4>
                        {item.status === 'positive' ? (
                          <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                        ) : (
                          <AlertTriangle className="w-5 h-5 text-amber-600" />
                        )}
                      </div>
                      <div className="flex items-center space-x-6 text-sm text-gray-600">
                        <span>Conv: {item.conv.toLocaleString()}</span>
                        <span className="flex items-center space-x-1">
                          ROAS: {item.roas}x
                          <TrendingUp className="w-4 h-4 text-emerald-600" />
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900 mb-1">{item.suggestion}</p>
                      <p className="text-emerald-600 font-bold">{item.impact}</p>
                    </div>
                    <button className="ml-4 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-semibold">
                      Apply
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-4">See all optimization opportunities</p>
            <button className="inline-flex items-center space-x-2 text-emerald-600 font-semibold hover:text-emerald-700">
              <span>View Full Audit</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}







