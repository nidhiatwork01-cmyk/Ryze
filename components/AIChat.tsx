'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Bot, User, Sparkles } from 'lucide-react'

const sampleQuestions = [
  'How can I improve ROAS?',
  'What are my best-performing assets?',
  'Which campaigns are wasting spend?',
]

const responses: { [key: string]: string } = {
  'How can I improve ROAS?': 'Based on your account, I recommend: 1) Pause 27 queries with 0 conversions (+$1.8k/mo), 2) Split Brand from Non-Brand campaigns (ROAS 8.2 vs 1.6), 3) Add 85 negative keywords to block waste terms. These changes could improve your ROAS by 45%+.',
  'What are my best-performing assets?': 'Your top-performing assets are: 1) Brand Search - US (ROAS 9.4x, 980 conversions), 2) PMax - Clearance (ROAS 5.1x), 3) Brand Search - EU (ROAS 8.9x). Consider increasing budgets on these high-performers.',
  'Which campaigns are wasting spend?': 'I found several campaigns wasting spend: 1) Display - Prospecting (ROAS 1.3x, $55 spend), 2) App - Installs (ROAS 0.9x, $480 spend), 3) Non-Brand Search - Kids (ROAS 2.3x). I recommend pausing or optimizing these immediately.',
}

export default function AIChat() {
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'ai'; content: string }>>([
    { role: 'ai', content: 'Hi! I\'m your AI Analyst. Ask me anything about your campaigns, performance, or optimization strategies.' },
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = (question?: string) => {
    const userMessage = question || input.trim()
    if (!userMessage) return

    setMessages((prev) => [...prev, { role: 'user', content: userMessage }])
    setInput('')
    setIsTyping(true)

    setTimeout(() => {
      const response = responses[userMessage] || 'I can help you analyze your campaigns, identify optimization opportunities, and provide strategic recommendations. Try asking about ROAS, best-performing assets, or campaign performance.'
      setMessages((prev) => [...prev, { role: 'ai', content: response }])
      setIsTyping(false)
    }, 1500)
  }

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-10">
            <div className="inline-flex p-3 bg-gradient-to-br from-emerald-600 to-amber-600 rounded-xl mb-4">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              ChatGPT for
              <span className="block bg-gradient-to-r from-emerald-600 to-amber-600 bg-clip-text text-transparent">
                Paid Ads
              </span>
            </h2>
            <p className="text-lg text-gray-600">
              Ask AI Analyst anything about your campaigns
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
            {/* Chat Messages */}
            <div className="h-96 overflow-y-auto p-6 space-y-4">
              <AnimatePresence>
                {messages.map((message, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-start space-x-3 ${
                      message.role === 'user' ? 'justify-end' : ''
                    }`}
                  >
                    {message.role === 'ai' && (
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-emerald-600 to-amber-600 rounded-full flex items-center justify-center">
                        <Bot className="w-5 h-5 text-white" />
                      </div>
                    )}
                    <div
                      className={`max-w-[80%] rounded-2xl p-4 ${
                        message.role === 'user'
                          ? 'bg-gradient-to-r from-emerald-600 to-amber-600 text-white'
                          : 'bg-gray-100 text-gray-900'
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{message.content}</p>
                    </div>
                    {message.role === 'user' && (
                      <div className="flex-shrink-0 w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-gray-600" />
                      </div>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-start space-x-3"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-emerald-600 to-amber-600 rounded-full flex items-center justify-center">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div className="bg-gray-100 rounded-2xl p-4">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Sample Questions */}
            <div className="px-6 pb-4">
              <div className="flex flex-wrap gap-2 mb-4">
                {sampleQuestions.map((question) => (
                  <button
                    key={question}
                    onClick={() => handleSend(question)}
                    className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-gray-700 transition-colors"
                  >
                    {question}
                  </button>
                ))}
              </div>

              {/* Input */}
              <div className="flex items-center space-x-3">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask AI Analyst..."
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <button
                  onClick={() => handleSend()}
                  className="p-3 bg-gradient-to-r from-emerald-600 to-amber-600 text-white rounded-lg hover:from-emerald-700 hover:to-amber-700 transition-all"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

