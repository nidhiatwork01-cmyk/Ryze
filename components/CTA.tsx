'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function CTA() {
  const benefits = [
    '24/7 autonomous optimization',
    'AI creative generation',
    'Real-time performance audits',
    'Multi-platform support',
  ]

  return (
    <section id="get-started" className="section-padding bg-gradient-to-br from-primary-600 to-accent-600">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Let AI Manage Your Ads?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Join 2000+ clients and 700+ agencies using Ryze to scale their advertising
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
              >
                <CheckCircle className="w-5 h-5 text-white" />
                <span className="text-white font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#contact"
              className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 inline-flex items-center justify-center"
            >
              Get Started Free
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/how-it-works"
              className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 font-semibold py-4 px-8 rounded-lg border-2 border-white transition-all duration-200 inline-flex items-center justify-center"
            >
              Schedule a Demo
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

