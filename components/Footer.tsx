'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Zap, Linkedin, Twitter, Mail, ArrowRight } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    product: [
      { name: 'Features', href: '/features' },
      { name: 'How It Works', href: '/how-it-works' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Case Studies', href: '#case-studies' },
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Story', href: '#story' },
      { name: 'Community', href: '#community' },
      { name: 'Contact', href: '#contact' },
    ],
    legal: [
      { name: 'Privacy', href: '/privacy' },
      { name: 'Terms', href: '/terms' },
      { name: 'Security', href: '/security' },
    ],
  }

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-gray-300 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      <div className="container-custom relative z-10 py-16">
        {/* Newsletter Section */}
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
            Stay Updated with
            <span className="block bg-gradient-to-r from-emerald-400 to-amber-400 bg-clip-text text-transparent">
              Latest Features
            </span>
          </h3>
          <p className="text-gray-400 mb-8">
            Get weekly insights on AI advertising optimization and platform updates
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-emerald-600 to-amber-600 hover:from-emerald-700 hover:to-amber-700 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-xl hover:shadow-2xl hover:scale-105 inline-flex items-center justify-center"
            >
              Subscribe
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </form>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6 group">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-emerald-600 to-amber-600 p-2 rounded-lg group-hover:scale-110 transition-transform"
              >
                <Zap className="w-6 h-6 text-white" />
              </motion.div>
              <span className="text-2xl font-black text-white">Ryze</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Autonomous AI marketer that manages your ads 24/7. 
              Boost ROAS, generate creatives, and scale your advertising—all on autopilot.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-emerald-600 transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-emerald-600 transition-all hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="mailto:hello@get-ryze.ai"
                className="p-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-emerald-600 transition-all hover:scale-110"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-emerald-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-emerald-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-emerald-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-8 pb-8 border-t border-white/10 pt-8">
          <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10">
            <div className="w-2 h-2 bg-emerald-400 rounded-full" />
            <span className="text-sm font-semibold text-white">SOC 2 Certified</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10">
            <div className="w-2 h-2 bg-emerald-400 rounded-full" />
            <span className="text-sm font-semibold text-white">GDPR Compliant</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10">
            <div className="w-2 h-2 bg-emerald-400 rounded-full" />
            <span className="text-sm font-semibold text-white">SSL Secured</span>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Ryze. All rights reserved. Crafted in San Francisco.
          </p>
          <p className="text-gray-400 text-sm mt-4 md:mt-0">
            Contact: <a href="mailto:hello@get-ryze.ai" className="text-emerald-400 hover:text-emerald-300">hello@get-ryze.ai</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
