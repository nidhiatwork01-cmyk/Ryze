import DashboardHero from '@/components/DashboardHero'
import OrangeThemeToggle from '@/components/OrangeThemeToggle'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowLeft, Zap } from 'lucide-react'

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700">
      {/* Simple Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="bg-gradient-to-br from-orange-400 to-orange-600 p-2 rounded-lg group-hover:scale-110 transition-transform">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Ryze</span>
            </Link>
            <Link
              href="/"
              className="flex items-center space-x-2 text-white/90 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </header>
      <DashboardHero />
      <OrangeThemeToggle />
      <Footer />
    </main>
  )
}

