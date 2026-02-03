'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const clients = [
  { name: 'Client 1', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop' },
  { name: 'Client 2', logo: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=200&h=100&fit=crop' },
  { name: 'Client 3', logo: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=200&h=100&fit=crop' },
  { name: 'Client 4', logo: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&h=100&fit=crop' },
  { name: 'Client 5', logo: 'https://images.unsplash.com/photo-1556761175-b413df4b2494?w=200&h=100&fit=crop' },
  { name: 'Client 6', logo: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=200&h=100&fit=crop' },
]

export default function ClientLogos() {
  return (
    <section className="py-16 bg-gray-50 border-y border-gray-200">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
            Trusted by Industry Leaders
          </p>
          <h3 className="text-2xl font-bold text-gray-900">
            Powering <span className="bg-gradient-to-r from-emerald-600 to-amber-600 bg-clip-text text-transparent">2000+</span> Companies
          </h3>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative h-16 w-full grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            >
              <Image
                src={client.logo}
                alt={client.name}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 200px"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

