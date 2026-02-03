import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import FeaturesPlatforms from '@/components/FeaturesPlatforms'
import CreativeAnalyzer from '@/components/CreativeAnalyzer'
import CombinedOptimization from '@/components/CombinedOptimization'
import AIChat from '@/components/AIChat'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      {/* Dashboard Style Option */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 text-center">
        <span className="text-sm">
          🎨 Try our new{' '}
          <Link href="/dashboard" className="underline font-semibold hover:text-orange-100">
            Dashboard View
          </Link>
        </span>
      </div>
      <Hero />
      <Stats />
      <FeaturesPlatforms />
      <CreativeAnalyzer />
      <CombinedOptimization />
      <AIChat />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}

