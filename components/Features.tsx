'use client'

import { motion } from 'framer-motion'
import { 
  Brain, 
  Zap, 
  BarChart3, 
  Sparkles, 
  Shield, 
  Clock,
  TrendingUp,
  FileText,
  Target
} from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'AI Creative Generation',
    description: 'Automatically generate high-performing ad creatives that resonate with your audience and improve CTR.',
    color: 'from-primary-500 to-primary-600',
  },
  {
    icon: BarChart3,
    title: '24/7 Performance Audits',
    description: 'Continuous monitoring and optimization of your campaigns, catching issues before they impact performance.',
    color: 'from-accent-500 to-accent-600',
  },
  {
    icon: Zap,
    title: 'Autonomous Optimization',
    description: 'AI agents that automatically adjust bids, budgets, and targeting to maximize your ROAS around the clock.',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: TrendingUp,
    title: 'ROAS Improvements',
    description: 'Real-time suggestions and automatic implementations that boost your return on ad spend.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: FileText,
    title: 'Auto-Generated Reports',
    description: 'Beautiful, comprehensive reports that build themselves—no more manual data compilation.',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Target,
    title: 'Multi-Platform Support',
    description: 'Manage Google Ads, Meta Ads, Amazon, LinkedIn, and more—all from one unified dashboard.',
    color: 'from-orange-500 to-orange-600',
  },
]

export default function Features() {
  return (
    <section id="features" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            An AI Marketer That{' '}
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              Does It All
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to scale your advertising, powered by autonomous AI agents
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white p-8 rounded-2xl border border-gray-200 hover:border-primary-300 hover:shadow-xl transition-all duration-300"
              >
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${feature.color} mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

