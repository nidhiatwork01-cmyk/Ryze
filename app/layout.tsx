import type { Metadata } from 'next'
import './globals.css'
import CustomCursor from '@/components/CustomCursor'

export const metadata: Metadata = {
  title: 'Ryze - Let AI Manage Your Ads',
  description: 'Autonomous AI marketer that manages your Google Ads, Meta Ads, and more. 24/7 performance audits, AI creative generation, and ROAS improvements.',
  keywords: 'AI marketing, Google Ads, Meta Ads, automated advertising, ROAS optimization',
  authors: [{ name: 'Ryze' }],
  openGraph: {
    title: 'Ryze - Let AI Manage Your Ads',
    description: 'Autonomous AI marketer that manages your Google Ads, Meta Ads, and more.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ryze - Let AI Manage Your Ads',
    description: 'Autonomous AI marketer that manages your Google Ads, Meta Ads, and more.',
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#10b981',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <CustomCursor />
        {children}
      </body>
    </html>
  )
}

