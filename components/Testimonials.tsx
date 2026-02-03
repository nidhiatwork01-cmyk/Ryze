'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Star, Quote, TrendingUp, Award } from 'lucide-react'

const testimonials = [
  {
    name: 'Roger Dunn',
    role: 'Global Performance Lead',
    company: 'Rivert',
    content: 'We were drowning with 7 people. Got back so many hours each week from reporting. Finally have bandwidth to focus on actual strategy.',
    rating: 5,
    highlight: '+63% ROAS',
    metric: 'ROAS Improvement',
    avatar: 1,
  },
  {
    name: 'Daniel Amezquita',
    role: 'Global Ads Strategy',
    company: 'Glava',
    content: 'Broke down performance by asset—thumbnails, headlines, everything. Suggested swaps based on real data. Our CTR basically doubled.',
    rating: 5,
    highlight: 'CTR 2x',
    metric: 'Click Rate',
    avatar: 2,
  },
  {
    name: 'Daniel Roser',
    role: 'Marketing Director',
    company: 'TechCorp',
    content: 'Found wasted spend in search terms we\'d never have caught manually. Cut those, reallocated budget. ROAS up 45%.',
    rating: 5,
    highlight: '+45% ROAS',
    metric: 'Budget Optimization',
    avatar: 3,
  },
  {
    name: 'Elena Martinez',
    role: 'CMO',
    company: 'TechFlow',
    content: 'Caught that our conversion tracking was double-counting. We had no idea for 3 months. Fixed it and everything made way more sense.',
    rating: 5,
    highlight: 'Tracking Fixed',
    metric: 'Data Accuracy',
    avatar: 4,
  },
  {
    name: 'Mathilde Biggs',
    role: 'CEO',
    company: 'MotifDigital Agency',
    content: 'Ryze\'s AI-driven ads outperform human optimization by a huge margin. Game changer for our agency.',
    rating: 5,
    highlight: '5x Faster',
    metric: 'Efficiency',
    avatar: 5,
  },
  {
    name: 'Gabriela Kim',
    role: 'Agency Owner',
    company: 'Growth Marketing Co',
    content: 'Our agency does audits for potential clients 5x faster now. Used to take days, now it\'s like an hour. Way easier to win new business.',
    rating: 5,
    highlight: '5x Faster Audits',
    metric: 'Time Saved',
    avatar: 6,
  },
]

export default function Testimonials() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-white via-emerald-50/30 to-white overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-bold mb-6"
          >
            <Award className="w-4 h-4" />
            <span>Loved by 2000+ Marketers</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Don't Just Take
            <span className="block bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-600 bg-clip-text text-transparent">
              Our Word For It
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what top marketers and agencies are saying about Ryze's AI-powered optimization
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="relative h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden">
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="w-16 h-16 text-emerald-600" />
                </div>

                {/* Rating Stars */}
                <div className="relative flex items-center space-x-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                    >
                      <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                    </motion.div>
                  ))}
                </div>

                {/* Content */}
                <p className="relative text-gray-700 mb-6 leading-relaxed text-lg font-medium">
                  "{testimonial.content}"
                </p>

                {/* Metric Badge */}
                <div className="relative inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-100 to-teal-100 px-4 py-2 rounded-full mb-6">
                  <TrendingUp className="w-4 h-4 text-emerald-600" />
                  <div>
                    <div className="text-emerald-700 font-bold text-sm">{testimonial.highlight}</div>
                  </div>
                </div>

                {/* Author */}
                <div className="relative border-t border-gray-100 pt-6 flex items-center space-x-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden ring-4 ring-emerald-100 group-hover:ring-emerald-200 transition-all">
                    <Image
                      src={`https://i.pravatar.cc/150?img=${testimonial.avatar}`}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                      sizes="56px"
                    />
                    {/* Online Indicator */}
                    <div className="absolute bottom-0 right-0 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-lg">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-xs text-emerald-600 font-semibold">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-600 rounded-3xl p-12 overflow-hidden"
        >
          {/* Animated Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]" />

          <div className="relative z-10 grid md:grid-cols-4 gap-8 text-center text-white">
            {[
              { value: '4.9/5', label: 'Average Rating', icon: Star },
              { value: '2000+', label: 'Happy Clients', icon: Award },
              { value: '63%', label: 'Avg ROAS Lift', icon: TrendingUp },
              { value: '$500M+', label: 'Ad Spend Managed', icon: TrendingUp },
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
                  <Icon className="w-10 h-10 mx-auto mb-4 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                  <div className="text-4xl md:text-5xl font-black mb-2">{stat.value}</div>
                  <div className="text-emerald-100 font-semibold">{stat.label}</div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
