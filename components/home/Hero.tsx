'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeftIcon, ChevronRightIcon, PlayIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop',
    title: 'Taratsa Rooftop Café',
    subtitle: 'Sip, Savour, Socialize',
    description: 'Experience Mediterranean dining with breathtaking city views from Thane\'s most elegant rooftop destination.',
    cta: 'Reserve Your Table'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop',
    title: 'Mediterranean Flavors',
    subtitle: 'Fresh • Authentic • Exquisite',
    description: 'Savor the finest Mediterranean cuisine crafted with locally sourced ingredients and traditional recipes.',
    cta: 'Explore Menu'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=2070&auto=format&fit=crop',
    title: 'Opening March 30, 2025',
    subtitle: 'A New Era of Dining',
    description: 'Join us as we introduce Thane to an unforgettable rooftop dining experience with panoramic sunset views.',
    cta: 'Get Notified'
  }
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  return (
    <section className="relative h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <Image
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 flex items-center h-full">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <motion.div
              key={`content-${currentSlide}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white"
            >
              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="mb-6"
              >
                <Image
                  src="/taratsa-logo.png"
                  alt="Taratsa Rooftop Café"
                  width={200}
                  height={80}
                  className="h-16 w-auto sm:h-20"
                />
              </motion.div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-balance">
                {slides[currentSlide].title}
              </h1>
              
              <p className="text-xl sm:text-2xl lg:text-3xl text-brand-sage font-medium mb-6">
                {slides[currentSlide].subtitle}
              </p>
              
              <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-lg leading-relaxed">
                {slides[currentSlide].description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary text-lg px-8 py-4"
                >
                  {slides[currentSlide].cta}
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary text-lg px-8 py-4 text-white border-white hover:bg-white hover:text-gray-900"
                >
                  <PlayIcon className="w-5 h-5 mr-2" />
                  Watch Video
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-brand-primary scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Arrow Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeftIcon className="w-6 h-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRightIcon className="w-6 h-6" />
      </button>


    </section>
  )
} 