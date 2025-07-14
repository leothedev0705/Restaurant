'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { XMarkIcon, PlayIcon, HeartIcon, ChatBubbleOvalLeftIcon, PhotoIcon, VideoCameraIcon } from '@heroicons/react/24/outline'
import { HeartIcon as HeartSolid } from '@heroicons/react/24/solid'
import Image from 'next/image'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const galleryCategories = [
  { id: 'all', name: 'All', icon: '🌟' },
  { id: 'food', name: 'Food', icon: '🍽️' },
  { id: 'ambiance', name: 'Ambiance', icon: '🌅' },
  { id: 'events', name: 'Events', icon: '🎉' },
  { id: 'cocktails', name: 'Cocktails', icon: '🍸' },
]

const galleryItems = [
  {
    id: 1,
    type: 'image' as const,
    category: 'ambiance',
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop',
    alt: 'Taratsa rooftop dining with panoramic city views',
    title: 'Golden Hour Magic',
    description: 'Experience breathtaking sunsets while dining at Taratsa rooftop café',
    likes: 342,
    comments: 28,
    timestamp: '2 hours ago'
  },
  {
    id: 2,
    type: 'image' as const,
    category: 'food',
    src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?q=80&w=2070&auto=format&fit=crop',
    alt: 'Mediterranean mezze platter with olives, hummus, and pita',
    title: 'Mezze Perfection',
    description: 'Our signature mezze platter featuring authentic Mediterranean flavors',
    likes: 187,
    comments: 15,
    timestamp: '4 hours ago'
  },
  {
    id: 3,
    type: 'video' as const,
    category: 'food',
    src: 'https://images.unsplash.com/photo-1559847844-d5cd5c7cf6c8?q=80&w=2070&auto=format&fit=crop',
    alt: 'Chef preparing Mediterranean grilled octopus',
    title: 'Chef\'s Special: Grilled Octopus',
    description: 'Watch our master chef prepare the perfect Mediterranean octopus',
    likes: 256,
    comments: 41,
    timestamp: '6 hours ago',
    duration: '1:32'
  },
  {
    id: 4,
    type: 'image' as const,
    category: 'ambiance',
    src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop',
    alt: 'Elegant Mediterranean table setting with candles',
    title: 'Intimate Dining',
    description: 'Every detail crafted for an unforgettable Mediterranean experience',
    likes: 134,
    comments: 12,
    timestamp: '8 hours ago'
  },
  {
    id: 5,
    type: 'image' as const,
    category: 'cocktails',
    src: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop',
    alt: 'Golden Sunset cocktail with rosemary garnish',
    title: 'Golden Sunset Cocktail',
    description: 'Our signature cocktail with gin, elderflower, and fresh rosemary',
    likes: 298,
    comments: 23,
    timestamp: '1 day ago'
  },
  {
    id: 6,
    type: 'image' as const,
    category: 'food',
    src: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=2070&auto=format&fit=crop',
    alt: 'Mediterranean seafood paella with saffron',
    title: 'Seafood Paella',
    description: 'Traditional Spanish paella with fresh seafood and aromatic saffron',
    likes: 421,
    comments: 67,
    timestamp: '1 day ago'
  },
  {
    id: 7,
    type: 'image' as const,
    category: 'events',
    src: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=2070&auto=format&fit=crop',
    alt: 'Private rooftop event setup with Mediterranean decor',
    title: 'Private Events',
    description: 'Host your special celebrations with Mediterranean elegance',
    likes: 156,
    comments: 19,
    timestamp: '2 days ago'
  },
  {
    id: 8,
    type: 'image' as const,
    category: 'ambiance',
    src: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=2070&auto=format&fit=crop',
    alt: 'Mediterranean rooftop terrace with string lights',
    title: 'Evening Ambiance',
    description: 'Magical Mediterranean nights under the stars at Taratsa',
    likes: 389,
    comments: 45,
    timestamp: '3 days ago'
  },
  {
    id: 9,
    type: 'image' as const,
    category: 'food',
    src: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2070&auto=format&fit=crop',
    alt: 'Fresh Mediterranean salad with olive oil drizzle',
    title: 'Garden Fresh Salad',
    description: 'Crisp vegetables with premium olive oil and Mediterranean herbs',
    likes: 203,
    comments: 31,
    timestamp: '4 days ago'
  },
  {
    id: 10,
    type: 'video' as const,
    category: 'cocktails',
    src: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?q=80&w=2070&auto=format&fit=crop',
    alt: 'Bartender crafting Mediterranean cocktails',
    title: 'Mixology in Action',
    description: 'Watch our master mixologist create Mediterranean-inspired cocktails',
    likes: 178,
    comments: 22,
    timestamp: '5 days ago',
    duration: '0:45'
  },
  {
    id: 11,
    type: 'image' as const,
    category: 'food',
    src: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=2070&auto=format&fit=crop',
    alt: 'Traditional Greek moussaka with béchamel sauce',
    title: 'Authentic Moussaka',
    description: 'Traditional Greek comfort food made with our grandmother\'s recipe',
    likes: 267,
    comments: 38,
    timestamp: '6 days ago'
  },
  {
    id: 12,
    type: 'image' as const,
    category: 'ambiance',
    src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2070&auto=format&fit=crop',
    alt: 'Mediterranean rooftop café interior design',
    title: 'Mediterranean Elegance',
    description: 'Sophisticated interior design inspired by Mediterranean coastal living',
    likes: 234,
    comments: 29,
    timestamp: '1 week ago'
  }
]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null)
  const [likedItems, setLikedItems] = useState<Set<number>>(new Set())

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory)

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
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-32 bg-brand-primary text-white overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop"
              alt="Taratsa Gallery - Mediterranean rooftop dining"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-brand-primary/85"></div>
          </div>
          
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="mx-auto max-w-3xl">
              <PhotoIcon className="mx-auto h-16 w-16 mb-6 text-white/90" />
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6">
                Gallery
              </h1>
              <p className="text-xl sm:text-2xl text-white/90 mb-8 leading-relaxed">
                Step into the world of Taratsa through our curated collection of Mediterranean moments, culinary artistry, and rooftop magic.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  📸 Professional Photography
                </span>
                <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  🎥 Behind-the-Scenes Videos
                </span>
                <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  🌅 Rooftop Views
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-white border-b border-gray-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex overflow-x-auto scrollbar-hide py-4 space-x-4">
              {galleryCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex-shrink-0 flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-200 shadow-soft border ${
                    selectedCategory === category.id
                      ? 'bg-brand-primary text-white border-brand-primary'
                      : 'bg-white text-gray-700 border-gray-200 hover:bg-brand-primary hover:text-white'
                  }`}
                >
                  <span className="text-lg">{category.icon}</span>
                  <span className="whitespace-nowrap">{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 bg-brand-cream">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedItem(item)}
                >
                  <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-200 shadow-soft">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Type indicator */}
                    <div className="absolute top-3 right-3">
                      {item.type === 'video' ? (
                        <div className="bg-brand-accent text-white px-2 py-1 rounded-lg text-xs font-medium flex items-center gap-1">
                          <VideoCameraIcon className="w-3 h-3" />
                          {item.duration}
                        </div>
                      ) : (
                        <div className="bg-brand-sage text-white px-2 py-1 rounded-lg text-xs font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          <PhotoIcon className="w-3 h-3" />
                          Photo
                        </div>
                      )}
                    </div>
                    
                    {/* Play button for videos */}
                    {item.type === 'video' && (
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                          <PlayIcon className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    )}
                    
                    {/* Content overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="font-semibold text-lg mb-1 line-clamp-1">{item.title}</h3>
                      <p className="text-sm text-white/90 line-clamp-2 mb-3">{item.description}</p>
                      <div className="flex items-center justify-between text-sm">
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
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Instagram CTA */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-brand-primary mb-4">
              Follow Our Journey
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Stay connected with Taratsa for daily inspiration, behind-the-scenes moments, and the latest updates from our Mediterranean rooftop.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://instagram.com/taratsarooftop"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-primary hover:bg-terracotta-700 text-white px-8 py-4 rounded-full font-semibold transition-colors text-lg shadow-soft inline-flex items-center justify-center"
              >
                Follow @TaratsaRooftop
                <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <button className="border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white px-8 py-4 rounded-full font-semibold transition-colors text-lg">
                Share Your Visit
              </button>
            </div>
          </div>
        </section>
      </main>

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
              className="relative max-w-6xl max-h-[90vh] w-full bg-white rounded-xl overflow-hidden"
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
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-6">
                        <PlayIcon className="w-16 h-16 text-white" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="md:w-1/3 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-primary to-brand-sage flex items-center justify-center">
                        <span className="text-white text-sm font-bold">T</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">taratsarooftop</p>
                        <p className="text-xs text-gray-500">{selectedItem.timestamp}</p>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-xl font-serif font-semibold text-brand-primary mb-2">
                    {selectedItem.title}
                  </h2>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {selectedItem.description}
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
                        <span className="font-medium">{selectedItem.likes + (likedItems.has(selectedItem.id) ? 1 : 0)}</span>
                      </button>
                      <div className="flex items-center space-x-1 text-gray-600">
                        <ChatBubbleOvalLeftIcon className="w-6 h-6" />
                        <span className="font-medium">{selectedItem.comments}</span>
                      </div>
                    </div>
                    <span className="text-xs text-gray-400 uppercase tracking-wide">
                      {selectedItem.category}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  )
} 