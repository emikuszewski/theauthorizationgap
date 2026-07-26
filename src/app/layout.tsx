import type { Metadata } from 'next'
import '@/styles/globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://theauthorizationgap.com'),
  title: 'The Authorization Gap | Beyond SSO',
  description: 'You\'ve invested in identity. SSO is in place. But who decides what users can actually do—and where does that logic live? Discover the gap between authentication and true access control.',
  keywords: ['authorization', 'access control', 'PBAC', 'IAM', 'identity', 'security', 'zero trust', 'policy management'],
  authors: [{ name: 'PlainID' }],
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    title: 'The Authorization Gap',
    description: 'You\'ve invested in identity. But who decides what users can actually do?',
    url: 'https://theauthorizationgap.com',
    siteName: 'The Authorization Gap',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'The Authorization Gap',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Authorization Gap',
    description: 'You\'ve invested in identity. But who decides what users can actually do?',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
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
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
