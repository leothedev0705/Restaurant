import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ContactDrawer from '@/components/layout/ContactDrawer'
import Hero from '@/components/home/Hero'
import OurStory from '@/components/home/OurStory'
import MenuPreview from '@/components/home/MenuPreview'
import Gallery from '@/components/home/Gallery'
import BlogEvents from '@/components/home/BlogEvents'

export const metadata: Metadata = {
  title: 'Taratsa - Rooftop Café | Sip, Savour, Socialize',
  description: 'Experience the finest rooftop dining in Thane at Taratsa. Savor Mediterranean-inspired cuisine with panoramic city views. Opening March 30, 2025.',
}

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <OurStory />
        <MenuPreview />
        <Gallery />
        <BlogEvents />
      </main>
      <Footer />
      <ContactDrawer />
    </>
  )
} 