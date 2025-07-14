import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Providers } from '@/components/providers'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Taratsa - Rooftop Café | Sip, Savour, Socialize',
    template: '%s | Taratsa Rooftop Café'
  },
  description: 'Experience the finest rooftop dining in Thane at Taratsa. Savor Mediterranean-inspired cuisine with panoramic city views. Opening March 30, 2025.',
  keywords: ['rooftop cafe', 'Thane restaurant', 'Mediterranean cuisine', 'fine dining', 'city views', 'Taratsa'],
  authors: [{ name: 'Taratsa Team' }],
  creator: 'Taratsa',
  publisher: 'Taratsa',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://taratsa.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://taratsa.com',
    siteName: 'Taratsa Rooftop Café',
    title: 'Taratsa - Rooftop Café | Sip, Savour, Socialize',
    description: 'Experience the finest rooftop dining in Thane at Taratsa. Savor Mediterranean-inspired cuisine with panoramic city views. Opening March 30, 2025.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Taratsa Rooftop Café - Stunning city views and Mediterranean cuisine',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Taratsa - Rooftop Café | Sip, Savour, Socialize',
    description: 'Experience the finest rooftop dining in Thane at Taratsa. Savor Mediterranean-inspired cuisine with panoramic city views.',
    images: ['https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop'],
    creator: '@taratsa_thane',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  icons: {
    icon: [
      {
        url: '/taratsa-logo.png',
        sizes: 'any',
      },
      {
        url: '/favicon.png',
        sizes: '16x16',
        type: 'image/png',
      },
    ],
    apple: [
      {
        url: '/taratsa-logo.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
    shortcut: '/taratsa-logo.png',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: 'Taratsa Rooftop Café',
  image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop',
  '@id': 'https://taratsa.com',
  url: 'https://taratsa.com',
  telephone: '+91-XXXXXXXXXX',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Your Street Address',
    addressLocality: 'Thane',
    addressRegion: 'Maharashtra',
    postalCode: '400601',
    addressCountry: 'IN',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '11:00',
      closes: '23:00',
    },
  ],
  servesCuisine: ['Mediterranean', 'Continental', 'Indian'],
  priceRange: '₹₹₹',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '120',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-brand-cream">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
} 