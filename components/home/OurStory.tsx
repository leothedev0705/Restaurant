'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { CalendarIcon, MapPinIcon, UsersIcon } from '@heroicons/react/24/outline'

export default function OurStory() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  const stats = [
    {
      icon: CalendarIcon,
      label: 'Opening Date',
      value: 'March 30, 2025',
      description: 'Mark your calendars'
    },
    {
      icon: MapPinIcon,
      label: 'Location',
      value: 'Thane West',
      description: 'Prime rooftop location'
    },
    {
      icon: UsersIcon,
      label: 'Capacity',
      value: '120 Guests',
      description: 'Intimate dining experience'
    }
  ]

  return (
    <section ref={containerRef} className="py-gr-5 bg-brand-cream relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-brand-primary blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-brand-sage blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-gr-4 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <span className="text-brand-sage font-medium text-lg mb-4 block">
                Our Story
              </span>
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                A Mediterranean Dream Above the Clouds
              </h2>
            </div>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                Nestled high above the bustling streets of Thane, <strong>Taratsa</strong> represents more than just a dining destination—it's a celebration of Mediterranean culture, cuisine, and community.
              </p>
              
              <p>
                Inspired by the azure waters of the Aegean Sea and the warm hospitality of Mediterranean coastal towns, our rooftop sanctuary offers an escape from the ordinary. Every detail, from our carefully curated menu to our breathtaking city views, has been designed to transport you to the sun-drenched terraces of Greece and Italy.
              </p>

              <p>
                Our culinary team, led by acclaimed chefs with roots in traditional Mediterranean cooking, brings authentic flavors to life using the finest local and imported ingredients. Whether you're savoring our signature octopus with charred lemon or enjoying a sunset mezze with friends, every moment at Taratsa is crafted to create lasting memories.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-primary text-white rounded-lg mb-3">
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{stat.value}</h3>
                  <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                  <p className="text-xs text-gray-500">{stat.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Opening Announcement */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-brand-primary to-brand-sage p-6 rounded-xl text-white"
            >
              <h3 className="font-serif text-xl font-semibold mb-2">Join Our Opening Celebration</h3>
              <p className="text-white/90 mb-4">
                Be among the first to experience Taratsa when we open our doors on March 30, 2025. 
                Reserve your table now for an unforgettable inaugural dining experience.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-brand-primary px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Get Notified
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Images */}
          <motion.div
            style={{ y }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Main large image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="col-span-2 relative h-80 rounded-xl overflow-hidden"
              >
                <Image
                  src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=2070&auto=format&fit=crop"
                  alt="Rooftop terrace with city views"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-medium">Panoramic City Views</p>
                  <p className="text-sm text-white/80">360° rooftop experience</p>
                </div>
              </motion.div>

              {/* Two smaller images */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative h-48 rounded-xl overflow-hidden"
              >
                <Image
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop"
                  alt="Elegant dining setup"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-2 left-2 text-white">
                  <p className="text-sm font-medium">Elegant Ambiance</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="relative h-48 rounded-xl overflow-hidden"
              >
                <Image
                  src="https://images.unsplash.com/photo-1551782450-17144efb9c50?q=80&w=2070&auto=format&fit=crop"
                  alt="Mediterranean cuisine"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-2 left-2 text-white">
                  <p className="text-sm font-medium">Mediterranean Cuisine</p>
                </div>
              </motion.div>
            </div>

            {/* Floating decorative elements */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-4 -right-4 w-16 h-16 bg-brand-terracotta/20 rounded-full blur-sm"
            />
            <motion.div
              animate={{
                y: [0, 15, 0],
                rotate: [0, -3, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
                              className="absolute -bottom-8 -left-6 w-20 h-20 bg-brand-primary/20 rounded-full blur-sm"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
} 
