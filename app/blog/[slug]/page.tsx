import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { formatDate } from '@/lib/utils'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ContactDrawer from '@/components/layout/ContactDrawer'

// Mock blog posts data - in real app, this would come from a CMS or filesystem
const blogPosts = [
  {
    slug: 'mediterranean-flavors-rooftop-dining',
    title: 'The Art of Mediterranean Flavors in Rooftop Dining',
    excerpt: 'Discover how we bring authentic Mediterranean cuisine to new heights with our carefully curated menu and stunning rooftop ambiance.',
    content: `
# The Art of Mediterranean Flavors in Rooftop Dining

At Taratsa, we believe that dining is more than just eating—it's an experience that engages all your senses. Our rooftop location provides the perfect canvas for showcasing the vibrant flavors of the Mediterranean, elevated both literally and figuratively above the bustling city of Thane.

## The Philosophy Behind Our Menu

Our culinary journey begins with the fundamental principles of Mediterranean cuisine: fresh, seasonal ingredients, simple yet sophisticated preparations, and the belief that food should bring people together. Every dish on our menu tells a story of the sun-soaked coasts, olive groves, and herb gardens that define this beloved culinary tradition.

### Fresh Ingredients, Elevated Experience

We source our ingredients from local farmers and trusted suppliers who share our commitment to quality. Our olive oil comes from centuries-old groves, our herbs are picked fresh daily, and our seafood is caught sustainably from pristine waters.

## Signature Dishes That Define Us

### Mediterranean Platter
Our signature Mediterranean platter is more than an appetizer—it's an introduction to our philosophy. Fresh hummus made from scratch daily, creamy baba ganoush, marinated olives, and grilled halloumi cheese, all served with warm pita bread that's baked in-house.

### Grilled Sea Bass
The crown jewel of our menu, our grilled sea bass exemplifies our approach to seafood. Simply prepared with lemon herb butter, it allows the natural flavors to shine while the rooftop setting provides the perfect ambiance for this coastal classic.

## The Rooftop Advantage

Dining on a rooftop isn't just about the views—though ours are spectacular. The open sky creates a sense of freedom that enhances every meal. As the sun sets over Thane, our guests find themselves transported to a Mediterranean terrace, where time slows down and every bite becomes a moment to savor.

### Creating Memories

We've designed every aspect of Taratsa to create lasting memories. From the soft glow of our ambient lighting to the carefully curated playlist that changes with the time of day, every detail works together to create an atmosphere where flavors are enhanced and connections are deepened.

## Looking Forward

As we prepare for our grand opening on March 30, 2025, we're excited to share this unique dining experience with Thane. We invite you to join us on this culinary journey, where Mediterranean tradition meets rooftop innovation.

*Join us at Taratsa, where every meal is a celebration of flavor, friendship, and the art of good living.*
    `,
    coverImage: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop',
    publishedAt: '2024-03-15',
    author: {
      name: 'Chef Andreas',
      image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=400&auto=format&fit=crop',
      bio: 'Executive Chef with 15 years of experience in Mediterranean cuisine'
    },
    readTime: 5,
    category: 'Culinary',
    tags: ['Mediterranean', 'Rooftop Dining', 'Fresh Ingredients', 'Culinary Philosophy'],
  },
  {
    slug: 'opening-march-2025',
    title: 'Grand Opening: March 30, 2025',
    excerpt: 'Mark your calendars! Taratsa officially opens its doors on March 30, 2025. Be among the first to experience our rooftop paradise.',
    content: `
# Grand Opening: March 30, 2025

After months of careful planning, design, and preparation, we're thrilled to announce that Taratsa will officially open its doors on **March 30, 2025**. This date marks not just the beginning of our journey, but the realization of a dream to bring authentic Mediterranean dining to the rooftops of Thane.

## What to Expect

### Opening Week Celebrations
Our opening week will be filled with special events, tastings, and exclusive offers for our first guests. We want to make sure everyone who joins us during this special time feels the excitement and passion that has gone into creating Taratsa.

### Full Menu Available
From day one, our complete menu will be available, featuring all our signature dishes, handcrafted mocktails, and the full range of Mediterranean delights we've been perfecting.

### Rooftop Experience
Our rooftop space will be fully operational, complete with ambient lighting, comfortable seating areas, and the panoramic views that make Taratsa truly special.

## Special Opening Events

### Grand Opening Celebration - March 30th
Join us for our official grand opening celebration starting at 6 PM. The evening will feature:
- Live acoustic music
- Complimentary appetizer tastings
- Special pricing on signature mocktails
- Exclusive opening day merchandise

### Chef's Table Experience - April 5th
Our executive chef will host an intimate chef's table experience, showcasing the inspiration and techniques behind our signature dishes.

## Reservations Now Open

We're now accepting reservations for our opening month. Given the anticipated demand, we recommend booking early to secure your preferred date and time.

## A Dream Realized

Taratsa represents our vision of what dining should be—a place where great food, stunning views, and warm hospitality come together to create unforgettable moments. We can't wait to welcome you to our rooftop paradise.

*Reserve your table today and be part of Taratsa's story from the very beginning.*
    `,
    coverImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop',
    publishedAt: '2024-03-10',
    author: {
      name: 'Taratsa Team',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
      bio: 'The passionate team behind Taratsa Rooftop Café'
    },
    readTime: 3,
    category: 'News',
    tags: ['Grand Opening', 'March 2025', 'Reservations', 'Events'],
  },
]

interface PageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = blogPosts.find(p => p.slug === params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  }
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPostPage({ params }: PageProps) {
  const post = blogPosts.find(p => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  // Related posts (exclude current post)
  const relatedPosts = blogPosts
    .filter(p => p.slug !== params.slug)
    .slice(0, 3)

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-brand-primary text-white">
          <div className="absolute inset-0">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover opacity-30"
              priority
            />
          </div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="mb-8">
              <Link 
                href="/blog" 
                className="text-gray-300 hover:text-white transition-colors"
              >
                ← Back to Blog
              </Link>
            </nav>

            {/* Category */}
            <div className="mb-4">
              <span className="bg-brand-sage text-white px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6 text-balance">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 text-gray-300">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium">
                    {post.author.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-medium">{post.author.name}</div>
                  <div className="text-sm text-gray-400">{post.author.bio}</div>
                </div>
              </div>
              <div className="text-sm">
                {formatDate(post.publishedAt)} • {post.readTime} min read
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Content */}
            <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-brand-golden prose-a:text-brand-golden prose-a:no-underline hover:prose-a:text-brand-terracotta">
              {/* Simple markdown-like content rendering */}
              <div 
                dangerouslySetInnerHTML={{ 
                  __html: post.content
                    .split('\n')
                    .map(line => {
                      if (line.startsWith('# ')) {
                        return `<h1 class="text-3xl font-serif font-bold text-brand-golden mt-8 mb-4">${line.slice(2)}</h1>`
                      }
                      if (line.startsWith('## ')) {
                        return `<h2 class="text-2xl font-serif font-bold text-brand-golden mt-6 mb-3">${line.slice(3)}</h2>`
                      }
                      if (line.startsWith('### ')) {
                        return `<h3 class="text-xl font-serif font-semibold text-brand-golden mt-4 mb-2">${line.slice(4)}</h3>`
                      }
                      if (line.startsWith('*') && line.endsWith('*') && line.length > 2) {
                        return `<p class="italic text-gray-600 text-center mt-6 mb-6">${line.slice(1, -1)}</p>`
                      }
                      if (line.trim() === '') {
                        return '<br/>'
                      }
                      return `<p class="mb-4 leading-relaxed">${line}</p>`
                    })
                    .join('')
                }} 
              />
            </div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h4 className="text-sm font-semibold text-gray-600 mb-4">TAGS</h4>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-brand-golden hover:text-white transition-colors cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Share Buttons */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h4 className="text-sm font-semibold text-gray-600 mb-4">SHARE THIS ARTICLE</h4>
              <div className="flex space-x-4">
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                  Share on Facebook
                </button>
                <button className="bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-500 transition-colors">
                  Share on Twitter
                </button>
                <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors">
                  Share on WhatsApp
                </button>
              </div>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-20 bg-brand-cream">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-serif font-bold text-brand-golden mb-12 text-center">
                Related Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <article key={relatedPost.slug} className="card-hover overflow-hidden group">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={relatedPost.coverImage}
                        alt={relatedPost.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-brand-golden text-white px-2 py-1 rounded text-xs font-medium">
                          {relatedPost.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="mb-3 flex items-center text-sm text-gray-500 space-x-4">
                        <span>{formatDate(relatedPost.publishedAt)}</span>
                        <span>•</span>
                        <span>{relatedPost.readTime} min read</span>
                      </div>
                      <h3 className="text-lg font-serif font-semibold text-brand-golden mb-3 group-hover:text-brand-terracotta transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-2 text-sm">
                        {relatedPost.excerpt}
                      </p>
                      <Link
                        href={`/blog/${relatedPost.slug}`}
                        className="text-brand-golden hover:text-brand-terracotta transition-colors text-sm font-medium"
                      >
                        Read Article →
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
      <ContactDrawer />
    </>
  )
} 