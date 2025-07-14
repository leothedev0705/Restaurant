export interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: 'appetizers' | 'mains' | 'desserts' | 'beverages' | 'mocktails'
  isVegetarian?: boolean
  isSignature?: boolean
}

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  coverImage: string
  publishedAt: string
  author: {
    name: string
    image: string
  }
  tags: string[]
  readTime: number
}

export interface InstagramMedia {
  id: string
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM'
  media_url: string
  thumbnail_url?: string
  permalink: string
  caption?: string
  timestamp: string
}

export interface Reservation {
  name: string
  phone: string
  email?: string
  date: string
  time: string
  guests: number
  specialRequests?: string
}

export interface ContactForm {
  name: string
  email: string
  phone: string
  message: string
}

export interface GalleryImage {
  id: string
  src: string
  alt: string
  width: number
  height: number
} 