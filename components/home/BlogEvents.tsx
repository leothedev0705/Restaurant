'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRightIcon, CalendarIcon, ClockIcon } from '@heroicons/react/24/outline'
import { formatDate } from '@/lib/utils'

const blogPosts = [
  {
    slug: 'mediterranean-flavors-rooftop-dining',
    title: 'The Art of Mediterranean Flavors in Rooftop Dining',
    excerpt: 'Discover how we bring authentic Mediterranean cuisine to new heights with our carefully curated menu and stunning rooftop ambiance.',
    coverImage: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop',
    publishedAt: '2024-03-15',
    author: {
      name: 'Chef Andreas',
      image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=400&auto=format&fit=crop'
    },
    readTime: 5,
    category: 'Culinary'
  },
  {
    slug: 'opening-march-2025',
    title: 'Grand Opening: March 30, 2025',
    excerpt: 'Mark your calendars! Taratsa officially opens its doors on March 30, 2025. Be among the first to experience our rooftop paradise.',
    coverImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop',
    publishedAt: '2024-03-10',
    author: {
      name: 'Taratsa Team',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop'
    },
    readTime: 3,
    category: 'News'
  },
  {
    slug: 'rooftop-design-inspiration',
    title: 'Creating a Greek-Inspired Rooftop Oasis',
    excerpt: 'Take a behind-the-scenes look at how we designed our space to capture the essence of Mediterranean coastal living high above Thane.',
    coverImage: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=2070&auto=format&fit=crop',
    publishedAt: '2024-03-05',
    author: {
      name: 'Design Team',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b5bc?q=80&w=400&auto=format&fit=crop'
    },
    readTime: 7,
    category: 'Design'
  }
]

const upcomingEvents = [
  {
    id: '1',
    title: 'Grand Opening Celebration',
    description: 'Join us for our grand opening celebration with live music, special tastings, and exclusive offers.',
    date: '2025-03-30',
    time: '18:00',
    duration: '4 hours',
    type: 'Special Event',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop',
    bookingRequired: true
  },
  {
    id: '2',
    title: 'Mediterranean Wine Tasting',
    description: 'Explore the finest Mediterranean wines paired with our signature appetizers.',
    date: '2025-04-15',
    time: '19:00',
    duration: '2 hours',
    type: 'Wine Tasting',
    image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=2070&auto=format&fit=crop',
    bookingRequired: true
  },
  {
    id: '3',
    title: 'Sunday Brunch Experience',
    description: 'Every Sunday, join us for an elevated brunch experience with panoramic city views.',
    date: 'weekly',
    time: '11:00',
    duration: '3 hours',
    type: 'Weekly Event',
    image: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=2070&auto=format&fit=crop',
    bookingRequired: false
  }
]

export default function BlogEvents() {
  const [activeTab, setActiveTab] = useState<'blog' | 'events'>('blog')
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="blog-events" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-brand-primary text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            Latest Updates
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-brand-primary mb-6 text-balance">
            Stories & Events
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-balance">
            Stay connected with the latest from Taratsa - from culinary insights 
            to upcoming events and special celebrations.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 rounded-lg p-1 inline-flex">
            <button
              onClick={() => setActiveTab('blog')}
              className={`px-6 py-2 rounded-md font-medium transition-all duration-200 ${
                activeTab === 'blog'
                  ? 'bg-white text-brand-primary shadow-sm'
                  : 'text-gray-600 hover:text-brand-primary'
              }`}
            >
              Blog Posts
            </button>
            <button
              onClick={() => setActiveTab('events')}
              className={`px-6 py-2 rounded-md font-medium transition-all duration-200 ${
                activeTab === 'events'
                  ? 'bg-white text-brand-primary shadow-sm'
                  : 'text-gray-600 hover:text-brand-primary'
              }`}
            >
              Events
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="relative">
          {/* Blog Posts */}
          {activeTab === 'blog' && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card-hover overflow-hidden group"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-brand-primary text-white px-2 py-1 rounded text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="mb-3 flex items-center text-sm text-gray-500 space-x-4">
                      <span>{formatDate(post.publishedAt)}</span>
                      <span>•</span>
                      <span>{post.readTime} min read</span>
                    </div>
                    
                    <h3 className="text-xl font-serif font-semibold text-brand-primary mb-3 group-hover:text-brand-sage transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                          <span className="text-xs font-medium text-gray-600">
                            {post.author.name.charAt(0)}
                          </span>
                        </div>
                        <span className="text-sm text-gray-600">{post.author.name}</span>
                      </div>
                      
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-brand-primary hover:text-brand-sage transition-colors group/link"
                      >
                        <ArrowRightIcon className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          )}

          {/* Events */}
          {activeTab === 'events' && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card-hover overflow-hidden"
                >
                  <div className="flex flex-col lg:flex-row">
                    {/* Image */}
                    <div className="lg:w-1/3">
                      <div className="relative h-48 lg:h-full">
                        <Image
                          src={event.image}
                          alt={event.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 33vw"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-brand-terracotta text-white px-2 py-1 rounded text-xs font-medium">
                            {event.type}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="lg:w-2/3 p-6 lg:p-8">
                                              <h3 className="text-2xl font-serif font-semibold text-brand-primary mb-3">
                        {event.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-6">
                        {event.description}
                      </p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center space-x-2 text-gray-600">
                          <CalendarIcon className="w-4 h-4" />
                          <span className="text-sm">
                            {event.date === 'weekly' ? 'Every Sunday' : formatDate(event.date)}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-600">
                          <ClockIcon className="w-4 h-4" />
                          <span className="text-sm">{event.time} • {event.duration}</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-4">
                        {event.bookingRequired ? (
                          <button className="btn-primary">
                            Reserve Your Spot
                          </button>
                        ) : (
                          <span className="inline-flex items-center text-green-600 text-sm font-medium">
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            No Reservation Required
                          </span>
                        )}
                        <button className="btn-secondary">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <Link
            href={activeTab === 'blog' ? '/blog' : '/events'}
                                    className="inline-flex items-center space-x-2 text-brand-primary hover:text-brand-sage transition-colors group"
          >
            <span className="font-medium">
              {activeTab === 'blog' ? 'View All Blog Posts' : 'View All Events'}
            </span>
            <ArrowRightIcon className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
} 
