'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Upload, X, AlertCircle, CheckCircle2, TrendingUp } from 'lucide-react'

export default function CreativeAnalyzer() {
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [results, setResults] = useState<{
    cta: number
    visual: number
    copy: number
    ctaIssues: string[]
    visualIssues: string[]
    copyIssues: string[]
  } | null>(null)

  const handleAnalyze = () => {
    setIsAnalyzing(true)
    setTimeout(() => {
      setResults({
        cta: 0,
        visual: 0,
        copy: 0,
        ctaIssues: [
          'Too generic—offers no benefit or reason to click',
          'Weak contrast against the dark overlay',
        ],
        visualIssues: [
          'Eye-catching and on-brand',
          'Text contrast could be better',
        ],
        copyIssues: [
          'Lacks benefit-first phrasing',
          'Generic ("Shop Men\'s Running Shoes")',
        ],
      })
      setIsAnalyzing(false)
    }, 2000)
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Analyze Your
              <span className="block bg-gradient-to-r from-emerald-600 to-amber-600 bg-clip-text text-transparent">
                Ad Creative
              </span>
            </h2>
            <p className="text-lg text-gray-600">
              Get instant AI-powered analysis of your ad creatives
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
            {/* Upload Area */}
            {!results && (
              <div className="text-center">
                <div className="relative w-full h-64 mb-6 rounded-xl overflow-hidden border-2 border-dashed border-gray-300 hover:border-emerald-500 transition-colors">
                  <Image
                    src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=600&fit=crop"
                    alt="Running Shoes Ad Creative"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 800px"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Upload className="w-12 h-12 mx-auto mb-2" />
                      <p className="font-semibold">Running Shoes Ad</p>
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">Example Ad Creative</h3>
                <p className="text-gray-600 mb-8">Click to analyze this creative</p>
                <button
                  onClick={handleAnalyze}
                  disabled={isAnalyzing}
                  className="btn-primary bg-gradient-to-r from-emerald-600 to-amber-600 hover:from-emerald-700 hover:to-amber-700 disabled:opacity-50"
                >
                  {isAnalyzing ? 'Analyzing...' : 'Analyze Ad'}
                </button>
              </div>
            )}

            {/* Results */}
            <AnimatePresence>
              {results && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="space-y-6"
                >
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold">Creative Analysis</h3>
                    <button
                      onClick={() => setResults(null)}
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Score Cards */}
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-gray-700">CTA</span>
                        <span className="text-3xl font-bold text-red-600">{results.cta}%</span>
                      </div>
                      <div className="space-y-2 mt-4">
                        {results.ctaIssues.map((issue, i) => (
                          <div key={i} className="flex items-start space-x-2 text-sm text-gray-700">
                            <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                            <span>{issue}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-gray-700">Visual</span>
                        <span className="text-3xl font-bold text-yellow-600">{results.visual}%</span>
                      </div>
                      <div className="space-y-2 mt-4">
                        {results.visualIssues.map((issue, i) => (
                          <div key={i} className="flex items-start space-x-2 text-sm text-gray-700">
                            {issue.includes('Eye-catching') ? (
                              <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                            ) : (
                              <AlertCircle className="w-4 h-4 text-yellow-600 flex-shrink-0 mt-0.5" />
                            )}
                            <span>{issue}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-gray-700">Copy</span>
                        <span className="text-3xl font-bold text-red-600">{results.copy}%</span>
                      </div>
                      <div className="space-y-2 mt-4">
                        {results.copyIssues.map((issue, i) => (
                          <div key={i} className="flex items-start space-x-2 text-sm text-gray-700">
                            <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                            <span>{issue}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => setResults(null)}
                    className="w-full btn-secondary border-emerald-600 text-emerald-600 hover:bg-emerald-50"
                  >
                    Analyze Another Creative
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

