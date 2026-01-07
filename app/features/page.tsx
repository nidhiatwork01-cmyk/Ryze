import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { 
  Brain, 
  Zap, 
  BarChart3, 
  Sparkles, 
  Shield, 
  Clock,
  TrendingUp,
  FileText,
  Target,
  CheckCircle,
  ArrowRight
} from 'lucide-react'
import Link from 'next/link'

const features = [
  {
    icon: Brain,
    title: 'AI Creative Generation',
    description: 'Automatically generate high-performing ad creatives that resonate with your audience and improve CTR. Our AI analyzes your best-performing assets and creates variations that maintain brand consistency while optimizing for performance.',
    benefits: [
      'Multiple creative variations in seconds',
      'Brand-consistent designs',
      'A/B testing recommendations',
      'Performance-based optimization',
    ],
    color: 'from-primary-500 to-primary-600',
  },
  {
    icon: BarChart3,
    title: '24/7 Performance Audits',
    description: 'Continuous monitoring and optimization of your campaigns, catching issues before they impact performance. Get real-time alerts and automated fixes for tracking errors, budget waste, and underperforming campaigns.',
    benefits: [
      'Real-time issue detection',
      'Automated fix suggestions',
      'Budget waste identification',
      'Tracking error alerts',
    ],
    color: 'from-accent-500 to-accent-600',
  },
  {
    icon: Zap,
    title: 'Autonomous Optimization',
    description: 'AI agents that automatically adjust bids, budgets, and targeting to maximize your ROAS around the clock. Set your goals and let Ryze handle the rest—no manual intervention required.',
    benefits: [
      'Automatic bid adjustments',
      'Budget reallocation',
      'Targeting optimization',
      'Goal-based automation',
    ],
    color: 'from-green-500 to-green-600',
  },
  {
    icon: TrendingUp,
    title: 'ROAS Improvements',
    description: 'Real-time suggestions and automatic implementations that boost your return on ad spend. Our AI identifies opportunities to scale winners and pause losers, maximizing your advertising efficiency.',
    benefits: [
      'Opportunity identification',
      'Automatic optimizations',
      'Scale winning campaigns',
      'Pause underperformers',
    ],
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: FileText,
    title: 'Auto-Generated Reports',
    description: 'Beautiful, comprehensive reports that build themselves—no more manual data compilation. Get insights delivered automatically with actionable recommendations.',
    benefits: [
      'Automated report generation',
      'Customizable templates',
      'Scheduled delivery',
      'Actionable insights',
    ],
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Target,
    title: 'Multi-Platform Support',
    description: 'Manage Google Ads, Meta Ads, Amazon, LinkedIn, and more—all from one unified dashboard. Connect all your advertising accounts and get a holistic view of performance.',
    benefits: [
      'Unified dashboard',
      'Cross-platform insights',
      'Easy account connection',
      'Centralized management',
    ],
    color: 'from-orange-500 to-orange-600',
  },
]

export default function FeaturesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Powerful Features for
              <span className="block bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                Modern Marketers
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Everything you need to scale your advertising, powered by autonomous AI agents
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-24">
            {features.map((feature, index) => {
              const Icon = feature.icon
              const isEven = index % 2 === 0
              
              return (
                <div
                  key={feature.title}
                  className={`grid md:grid-cols-2 gap-12 items-center ${
                    !isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className={isEven ? '' : 'md:order-2'}>
                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${feature.color} mb-6`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                      {feature.title}
                    </h2>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    <ul className="space-y-3">
                      {feature.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start space-x-3">
                          <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`bg-gradient-to-br ${feature.color} rounded-2xl p-8 h-64 flex items-center justify-center ${isEven ? '' : 'md:order-1'}`}>
                    <Icon className="w-32 h-32 text-white opacity-20" />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-accent-600">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Join thousands of marketers using Ryze to scale their advertising
            </p>
            <Link
              href="#get-started"
              className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 inline-flex items-center"
            >
              Get Started Free
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

