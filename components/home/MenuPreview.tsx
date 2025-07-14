'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

const signatures = [
  {
    id: 1,
    name: 'Mediterranean Octopus',
    description: 'Grilled octopus with charred lemon, chorizo vinaigrette, and roasted vegetables',
    price: 1450,
    image: 'https://images.unsplash.com/photo-1559847844-d5cd5c7cf6c8?q=80&w=2070&auto=format&fit=crop',
    tags: ['Signature', 'Seafood'],
    chef: 'Chef\'s Special'
  },
  {
    id: 2,
    name: 'Lamb Souvlaki',
    description: 'Tender lamb skewers with tzatziki, warm pita, and traditional Greek salad',
    price: 1650,
    image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?q=80&w=2070&auto=format&fit=crop',
    tags: ['Signature', 'Grilled'],
    chef: 'Traditional Recipe'
  },
  {
    id: 3,
    name: 'Seafood Risotto',
    description: 'Creamy arborio rice with fresh prawns, mussels, and saffron-infused broth',
    price: 1350,
    image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?q=80&w=2070&auto=format&fit=crop',
    tags: ['Signature', 'Seafood'],
    chef: 'House Specialty'
  },
  {
    id: 4,
    name: 'Mediterranean Mezze',
    description: 'Artisanal selection of hummus, falafel, olives, feta, and fresh pita bread',
    price: 950,
    image: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?q=80&w=2070&auto=format&fit=crop',
    tags: ['Vegetarian', 'Shareable'],
    chef: 'Traditional'
  },
  {
    id: 5,
    name: 'Grilled Branzino',
    description: 'Whole Mediterranean sea bass with lemon, herbs, and seasonal vegetables',
    price: 1750,
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=2070&auto=format&fit=crop',
    tags: ['Signature', 'Fresh Fish'],
    chef: 'Daily Catch'
  },
  {
    id: 6,
    name: 'Moussaka',
    description: 'Layered eggplant casserole with lamb, béchamel sauce, and aromatic spices',
    price: 1250,
    image: 'https://images.unsplash.com/photo-1563379091339-03246963d29a?q=80&w=2070&auto=format&fit=crop',
    tags: ['Traditional', 'Baked'],
    chef: 'Family Recipe'
  }
]

export default function MenuPreview() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)
  
  const itemsToShow = 3
  const maxIndex = signatures.length - itemsToShow

  const next = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }

  const visibleItems = signatures.slice(currentIndex, currentIndex + itemsToShow)
  if (visibleItems.length < itemsToShow) {
    visibleItems.push(...signatures.slice(0, itemsToShow - visibleItems.length))
  }

  return (
    <section className="py-gr-5 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-gr-4"
        >
          <span className="text-brand-sage font-medium text-lg mb-4 block">
            Signature Creations
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Chef's Signature Dishes
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Indulge in our carefully curated selection of Mediterranean masterpieces, 
            each dish crafted with the finest ingredients and traditional techniques.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-medium hover:shadow-hard transition-all duration-300 -translate-x-1/2"
            aria-label="Previous dishes"
          >
            <ChevronLeftIcon className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-medium hover:shadow-hard transition-all duration-300 translate-x-1/2"
            aria-label="Next dishes"
          >
            <ChevronRightIcon className="w-6 h-6 text-gray-600" />
          </button>

          {/* Cards Container */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-8"
          >
            {visibleItems.map((item, index) => (
              <motion.div
                key={`${item.id}-${currentIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 overflow-hidden">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Tags */}
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-white/90 backdrop-blur-sm text-gray-800 px-2 py-1 rounded-full text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Chef Badge */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ 
                        opacity: hoveredItem === item.id ? 1 : 0,
                        y: hoveredItem === item.id ? 0 : 20
                      }}
                      transition={{ duration: 0.3 }}
                                              className="absolute bottom-4 left-4 bg-brand-primary text-white px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {item.chef}
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="mb-3">
                      <h3 className="font-serif text-xl font-semibold text-gray-900 group-hover:text-brand-primary transition-colors">
                        {item.name}
                      </h3>
                    </div>
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gray-50 hover:bg-brand-primary hover:text-white text-gray-700 py-2 px-4 rounded-lg transition-all duration-300 font-medium"
                    >
                      View Menu
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: signatures.length - itemsToShow + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                                          ? 'bg-brand-primary scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-gr-3"
        >
          <motion.a
            href="/menu"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary text-lg px-8 py-3 inline-flex items-center"
          >
            View Full Menu
            <ChevronRightIcon className="w-5 h-5 ml-2" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
} 
