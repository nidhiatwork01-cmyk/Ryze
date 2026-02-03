import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { 
  Link2, 
  Brain, 
  Zap, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Play
} from 'lucide-react'
import Link from 'next/link'

const steps = [
  {
    number: '01',
    title: 'Connect Your Accounts',
    description: 'Link your Google Ads, Meta Ads, Amazon, and other advertising platforms. Our secure integration takes just minutes.',
    icon: Link2,
    color: 'from-emerald-500 to-emerald-600',
  },
  {
    number: '02',
    title: 'AI Analyzes Your Performance',
    description: 'Our AI agents analyze your campaigns, creatives, and performance data to identify optimization opportunities.',
    icon: Brain,
    color: 'from-amber-500 to-amber-600',
  },
  {
    number: '03',
    title: 'Autonomous Optimization',
    description: 'Ryze automatically implements improvements—adjusting bids, budgets, and creatives to maximize your ROAS.',
    icon: Zap,
    color: 'from-green-500 to-green-600',
  },
  {
    number: '04',
    title: 'Track Results & Scale',
    description: 'Monitor your improved performance in real-time. Our AI continues to optimize 24/7 as your campaigns scale.',
    icon: TrendingUp,
    color: 'from-blue-500 to-blue-600',
  },
]

const platforms = [
  { name: 'Google Ads', status: 'Available' },
  { name: 'Meta Ads', status: 'Available' },
  { name: 'Amazon Ads', status: 'Available' },
  { name: 'LinkedIn Ads', status: 'Available' },
  { name: 'Shopify', status: 'Available' },
  { name: 'GA4', status: 'Available' },
]

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-emerald-50 via-white to-amber-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              How Ryze
              <span className="block bg-gradient-to-r from-emerald-600 to-amber-600 bg-clip-text text-transparent">
                Works
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Get started in minutes. Let AI handle the rest—24/7 optimization, creative generation, and performance monitoring.
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isEven = index % 2 === 0
              
              return (
                <div
                  key={step.number}
                  className={`grid md:grid-cols-2 gap-12 items-center ${
                    !isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className={isEven ? '' : 'md:order-2'}>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`text-6xl font-bold bg-gradient-to-br ${step.color} bg-clip-text text-transparent`}>
                        {step.number}
                      </div>
                      <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${step.color}`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                      {step.title}
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  <div className={`bg-gradient-to-br ${step.color} rounded-2xl p-12 h-64 flex items-center justify-center ${isEven ? '' : 'md:order-1'}`}>
                    <Icon className="w-32 h-32 text-white opacity-20" />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Platform Integration */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              Connect Your
              <span className="block bg-gradient-to-r from-emerald-600 to-amber-600 bg-clip-text text-transparent">
                Advertising Platforms
              </span>
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              Ryze integrates with all major advertising platforms for unified management
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {platforms.map((platform) => (
                <div
                  key={platform.name}
                  className="bg-white p-6 rounded-xl border border-gray-200 hover:border-emerald-300 hover:shadow-lg transition-all"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-900">{platform.name}</span>
                    <span className="text-sm text-green-600 font-medium flex items-center">
                      <CheckCircle className="w-4 h-4 mr-1" />
                      {platform.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
              Why Choose
              <span className="block bg-gradient-to-r from-emerald-600 to-amber-600 bg-clip-text text-transparent">
                Ryze?
              </span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">24/7 Optimization</h3>
                <p className="text-gray-700">
                  Our AI agents work around the clock to optimize your campaigns, even when you're not online.
                </p>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Time Savings</h3>
                <p className="text-gray-700">
                  Get back hours each week from manual reporting and optimization tasks. Focus on strategy instead.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Better ROAS</h3>
                <p className="text-gray-700">
                  Clients see an average of 63% improvement in ROAS after switching to Ryze's AI optimization.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Easy Setup</h3>
                <p className="text-gray-700">
                  Get your whole team up and running in a day. Super easy to pick up and start using immediately.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-emerald-600 to-amber-600">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-emerald-100 mb-8">
              Join 2000+ clients using Ryze to scale their advertising
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#get-started"
                href="/signup"
                className="bg-white text-emerald-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 inline-flex items-center justify-center"
              >
                Get Started Free
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/features"
                className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 font-semibold py-4 px-8 rounded-lg border-2 border-white transition-all duration-200 inline-flex items-center justify-center"
              >
                View Features
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

