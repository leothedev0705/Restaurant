'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { XMarkIcon, PlayIcon, HeartIcon, ChatBubbleOvalLeftIcon } from '@heroicons/react/24/outline'
import { HeartIcon as HeartSolid } from '@heroicons/react/24/solid'
import Image from 'next/image'

const galleryItems = [
  {
    id: 1,
    type: 'image' as const,
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop',
    alt: 'Rooftop dining with city views',
    caption: 'Golden hour dining with panoramic city views ✨ #TaratsaViews #RooftopDining',
    likes: 342,
    comments: 28,
    timestamp: '2 hours ago'
  },
  {
    id: 2,
    type: 'image' as const,
    src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?q=80&w=2070&auto=format&fit=crop',
    alt: 'Mediterranean mezze platter',
    caption: 'Our signature mezze platter - a taste of the Mediterranean 🫒 #MediterraneanCuisine #Mezze',
    likes: 187,
    comments: 15,
    timestamp: '4 hours ago'
  },
  {
    id: 3,
    type: 'video' as const,
    src: 'https://images.unsplash.com/photo-1559847844-d5cd5c7cf6c8?q=80&w=2070&auto=format&fit=crop',
    alt: 'Grilled octopus preparation',
    caption: 'Watch our chef prepare the perfect Mediterranean octopus 👨‍🍳 #ChefSpecial #Octopus',
    likes: 256,
    comments: 41,
    timestamp: '6 hours ago',
    duration: '0:45'
  },
  {
    id: 4,
    type: 'image' as const,
    src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop',
    alt: 'Elegant table setting',
    caption: 'Every detail matters. Elegant dining awaits you 🍽️ #TableSetting #ElegantDining',
    likes: 134,
    comments: 12,
    timestamp: '8 hours ago'
  },
  {
    id: 5,
    type: 'image' as const,
    src: 'https://images.unsplash.com/photo-1572453800999-e8d2d1589b7c?q=80&w=2070&auto=format&fit=crop',
    alt: 'Lamb souvlaki skewers',
    caption: 'Traditional lamb souvlaki, grilled to perfection 🔥 #Souvlaki #GreekFood',
    likes: 298,
    comments: 33,
    timestamp: '12 hours ago'
  },
  {
    id: 6,
    type: 'image' as const,
    src: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=2070&auto=format&fit=crop',
    alt: 'Sunset terrace ambiance',
    caption: 'The magic hour at Taratsa. Opening March 30, 2025 🌅 #ComingSoon #Sunset',
    likes: 445,
    comments: 67,
    timestamp: '1 day ago'
  },
  {
    id: 7,
    type: 'image' as const,
    src: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?q=80&w=2070&auto=format&fit=crop',
    alt: 'Seafood risotto',
    caption: 'Creamy seafood risotto with the finest ingredients 🦐 #Risotto #Seafood',
    likes: 201,
    comments: 19,
    timestamp: '1 day ago'
  },
  {
    id: 8,
    type: 'video' as const,
    src: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=2070&auto=format&fit=crop',
    alt: 'Grilled fish preparation',
    caption: 'Fresh fish grilled with Mediterranean herbs and lemon 🐟 #FreshFish #Mediterranean',
    likes: 178,
    comments: 24,
    timestamp: '2 days ago',
    duration: '1:12'
  }
]

export default function Gallery() {
  const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null)
  const [likedItems, setLikedItems] = useState<Set<number>>(new Set())

  const toggleLike = (id: number) => {
    setLikedItems(prev => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  return (
    <section className="py-gr-5 bg-gray-50">
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
            @TaratsaRooftop
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Instagram Gallery
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Follow our culinary journey and get a taste of what awaits you at Taratsa. 
            Every dish tells a story, every view creates a memory.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer relative aspect-square overflow-hidden rounded-lg bg-gray-200"
              onClick={() => setSelectedItem(item)}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Video indicator */}
              {item.type === 'video' && (
                <div className="absolute top-2 right-2 bg-black/60 text-white px-2 py-1 rounded text-xs font-medium">
                  {item.duration}
                </div>
              )}
              
              {/* Play button for videos */}
              {item.type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <PlayIcon className="w-12 h-12 text-white" />
                </div>
              )}
              
              {/* Engagement stats overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center justify-between text-white text-sm">
                  <div className="flex items-center space-x-3">
                    <span className="flex items-center">
                      <HeartIcon className="w-4 h-4 mr-1" />
                      {item.likes}
                    </span>
                    <span className="flex items-center">
                      <ChatBubbleOvalLeftIcon className="w-4 h-4 mr-1" />
                      {item.comments}
                    </span>
                  </div>
                  <span className="text-xs opacity-75">{item.timestamp}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-gr-3"
        >
          <motion.a
            href="https://instagram.com/taratsarooftop"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary text-lg px-8 py-3 inline-flex items-center"
          >
            Follow @TaratsaRooftop
            <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </motion.a>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] w-full bg-white rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>

              <div className="md:flex">
                {/* Image/Video */}
                <div className="md:w-2/3 relative aspect-square md:aspect-auto">
                  <Image
                    src={selectedItem.src}
                    alt={selectedItem.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 66vw"
                  />
                  {selectedItem.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <PlayIcon className="w-16 h-16 text-white" />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="md:w-1/3 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-sage to-brand-primary flex items-center justify-center">
                        <span className="text-white text-sm font-bold">T</span>
                      </div>
                      <span className="font-semibold text-gray-900">taratsarooftop</span>
                    </div>
                    <span className="text-sm text-gray-500">{selectedItem.timestamp}</span>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {selectedItem.caption}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={() => toggleLike(selectedItem.id)}
                        className="flex items-center space-x-1 text-gray-600 hover:text-red-500 transition-colors"
                      >
                        {likedItems.has(selectedItem.id) ? (
                          <HeartSolid className="w-6 h-6 text-red-500" />
                        ) : (
                          <HeartIcon className="w-6 h-6" />
                        )}
                        <span>{selectedItem.likes + (likedItems.has(selectedItem.id) ? 1 : 0)}</span>
                      </button>
                      <div className="flex items-center space-x-1 text-gray-600">
                        <ChatBubbleOvalLeftIcon className="w-6 h-6" />
                        <span>{selectedItem.comments}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
} 
