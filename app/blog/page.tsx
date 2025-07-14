import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { formatDate } from '@/lib/utils'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ContactDrawer from '@/components/layout/ContactDrawer'

export const metadata: Metadata = {
  title: 'Blog - Stories from Taratsa',
  description: 'Read the latest stories, culinary insights, and updates from Taratsa Rooftop Café. Discover Mediterranean flavors and rooftop dining experiences.',
}

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
    category: 'Culinary',
    featured: true,
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
    category: 'News',
    featured: true,
  },
  {
    slug: 'rooftop-design-inspiration',
    title: 'Creating a Greek-Inspired Rooftop Oasis',
    excerpt: 'Take a behind-the-scenes look at how we designed our space to capture the essence of Mediterranean coastal living high above Thane.',
    coverImage: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=2070&auto=format&fit=crop',
    publishedAt: '2024-03-05',
    author: {
      name: 'Design Team',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b5bc?q=80&w=400&auto=format&fit=crop'
    },
    readTime: 7,
    category: 'Design',
    featured: false,
  },
  {
    slug: 'sustainable-dining-practices',
    title: 'Our Commitment to Sustainable Dining',
    excerpt: 'Learn about our eco-friendly practices, from locally sourced ingredients to waste reduction initiatives that make dining at Taratsa environmentally conscious.',
    coverImage: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2070&auto=format&fit=crop',
    publishedAt: '2024-02-28',
    author: {
      name: 'Sustainability Team',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop'
    },
    readTime: 6,
    category: 'Sustainability',
    featured: false,
  },
  {
    slug: 'mocktail-mixology-masterclass',
    title: 'Mocktail Mixology: Crafting Alcohol-Free Perfection',
    excerpt: 'Dive into the art of mocktail creation with our head bartender. Discover the secrets behind our signature alcohol-free beverages.',
    coverImage: 'https://images.unsplash.com/photo-1551782450-17144efb9c50?q=80&w=2070&auto=format&fit=crop',
    publishedAt: '2024-02-20',
    author: {
      name: 'Head Bartender',
      image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671d66?q=80&w=400&auto=format&fit=crop'
    },
    readTime: 4,
    category: 'Beverages',
    featured: false,
  },
  {
    slug: 'rooftop-events-planning',
    title: 'Planning the Perfect Rooftop Event',
    excerpt: 'From intimate celebrations to corporate gatherings, discover how Taratsa can transform your event into an unforgettable rooftop experience.',
    coverImage: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop',
    publishedAt: '2024-02-15',
    author: {
      name: 'Events Team',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=400&auto=format&fit=crop'
    },
    readTime: 5,
    category: 'Events',
    featured: false,
  },
]

const categories = [
  'All',
  'Culinary',
  'News',
  'Design',
  'Sustainability',
  'Beverages',
  'Events'
]

export default function BlogPage() {
  const featuredPosts = blogPosts.filter(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-brand-primary text-white">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop"
              alt="Taratsa blog stories"
              fill
              className="object-cover opacity-20"
              priority
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6">
              Stories from Taratsa
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Discover culinary insights, design inspiration, and the latest updates 
              from our rooftop café overlooking the beautiful city of Thane.
            </p>
          </div>
        </section>

        {/* Blog Content */}
        <section className="py-20 bg-brand-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Category Filter */}
            <div className="mb-16">
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    className="px-4 py-2 bg-white hover:bg-brand-primary hover:text-white transition-colors duration-200 rounded-full text-sm font-medium shadow-soft"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Featured Posts */}
            {featuredPosts.length > 0 && (
              <section className="mb-20">
                <h2 className="text-3xl font-serif font-bold text-brand-primary mb-12 text-center">
                  Featured Stories
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {featuredPosts.map((post) => (
                    <article key={post.slug} className="card-hover overflow-hidden group">
                      {/* Image */}
                      <div className="relative h-64 overflow-hidden">
                        <Image
                          src={post.coverImage}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-brand-terracotta text-white px-3 py-1 rounded-full text-sm font-medium">
                            Featured
                          </span>
                        </div>
                        <div className="absolute top-4 right-4">
                          <span className="bg-black/50 text-white px-2 py-1 rounded text-xs">
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
                        
                        <h3 className="text-xl lg:text-2xl font-serif font-semibold text-brand-primary mb-3 group-hover:text-brand-sage transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                              <span className="text-sm font-medium text-gray-600">
                                {post.author.name.charAt(0)}
                              </span>
                            </div>
                            <span className="text-sm text-gray-600">{post.author.name}</span>
                          </div>
                          
                          <Link
                            href={`/blog/${post.slug}`}
                            className="text-brand-golden hover:text-brand-terracotta transition-colors font-medium"
                          >
                            Read More →
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            )}

            {/* Regular Posts */}
            <section>
              <h2 className="text-3xl font-serif font-bold text-brand-golden mb-12 text-center">
                Latest Posts
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularPosts.map((post) => (
                  <article key={post.slug} className="card-hover overflow-hidden group">
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
                        <span className="bg-brand-golden text-white px-2 py-1 rounded text-xs font-medium">
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
                      
                      <h3 className="text-lg font-serif font-semibold text-brand-golden mb-3 group-hover:text-brand-terracotta transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 line-clamp-3 text-sm">
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
                          className="text-brand-golden hover:text-brand-terracotta transition-colors text-sm font-medium"
                        >
                          Read →
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {/* Newsletter Signup */}
            <section className="mt-20 bg-white rounded-2xl p-8 lg:p-12 text-center shadow-soft">
              <h3 className="text-2xl lg:text-3xl font-serif font-semibold text-brand-golden mb-4">
                Stay Updated
              </h3>
              <p className="text-gray-600 mb-8 max-w-xl mx-auto">
                Subscribe to our newsletter to get the latest stories, menu updates, 
                and exclusive events delivered to your inbox.
              </p>
              <form className="max-w-md mx-auto flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-golden"
                />
                <button type="submit" className="btn-primary">
                  Subscribe
                </button>
              </form>
            </section>
          </div>
        </section>
      </main>
      <Footer />
      <ContactDrawer />
    </>
  )
} 
