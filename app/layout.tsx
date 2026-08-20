import type { Metadata } from 'next'
import { Header } from '@/components/ui/Header'
import { Footer } from '@/components/ui/Footer'
import { AnimatedBackground } from '@/components/ui/AnimatedBackground'
import '@/app/globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://vetta.example.com'),
  title: {
    default: 'VETTA Intelligence | Professional Technology Services',
    template: '%s | VETTA Intelligence',
  },
  description: 'Professional AI automation, data analysis, and software development services for forward-thinking enterprises.',
  openGraph: {
    title: 'VETTA Intelligence',
    description: 'Professional AI automation, data analysis, and software development services.',
    url: '/',
    siteName: 'VETTA Intelligence',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VETTA Intelligence',
    description: 'Professional AI automation, data analysis, and software development services.',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased min-h-screen flex flex-col" style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}>
        <AnimatedBackground />
        <div className="relative z-20">
          <Header />
        </div>
        <main className="flex-1">
          {children}
        </main>
        <div className="relative z-20">
          <Footer />
        </div>
      </body>
    </html>
  )
}
