'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Roger Dunn',
    role: 'Global Performance Lead - Rivert',
    company: 'G2',
    content: 'We were drowning with 7 people. Got back so many hours each week from reporting. Finally have bandwidth to focus on actual strategy',
    rating: 5,
    highlight: '+63% better ROAS',
  },
  {
    name: 'Daniel Amezquita',
    role: 'Global Ads Strategy - Glava',
    company: 'LinkedIn',
    content: 'Broke down performance by asset—thumbnails, headlines, everything. Suggested swaps based on real data. Our CTR basically doubled.',
    rating: 5,
    highlight: 'CTR doubled',
  },
  {
    name: 'Daniel Roser',
    role: 'GB • 7 reviews',
    company: 'Trustpilot',
    content: 'Found wasted spend in search terms we\'d never have caught manually. Cut those, reallocated budget. ROAS up 45%',
    rating: 5,
    highlight: 'ROAS up 45%',
  },
  {
    name: 'Elena M.',
    role: 'CMO @ TechFlow',
    company: 'Clutch',
    content: 'Caught that our conversion tracking was double-counting. We had no idea for like 3 months. Fixed it and everything made way more sense',
    rating: 5,
    highlight: 'Tracking fixed',
  },
  {
    name: 'Mathilde Biggs',
    role: 'CEO MotifDigital Agence',
    company: 'Featured',
    content: 'Ryze\'s AI-driven ads outperform human optimization by a huge margin.',
    rating: 5,
    highlight: '+63% better ROAS',
  },
  {
    name: 'Gabriela K.',
    role: 'Agency Owner',
    company: 'X (Twitter)',
    content: 'Our agency does audits for potential clients 5x faster now. Used to take days, now it\'s like an hour. Way easier to win new business',
    rating: 5,
    highlight: '5x faster',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-gradient-to-br from-gray-50 to-primary-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trusted by{' '}
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              2000+ Clients
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See what marketers and agencies are saying about Ryze
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary-200" />
              
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed relative z-10">
                "{testimonial.content}"
              </p>

              <div className="border-t border-gray-100 pt-4">
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-600">{testimonial.role}</div>
                {testimonial.highlight && (
                  <div className="mt-2 inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-xs font-semibold">
                    {testimonial.highlight}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

