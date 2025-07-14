# Taratsa Rooftop Café

A modern, responsive website for Taratsa Rooftop Café - Thane's premier Mediterranean rooftop dining destination.

## ✨ Features

- **Next.js 14** with App Router and TypeScript
- **Tailwind CSS** with custom brand colors and golden ratio spacing
- **Mobile-first responsive design** (360px and up)
- **SEO optimized** with OpenGraph, Twitter Cards, and JSON-LD
- **Accessibility focused** (WCAG 2.2 AA compliant)
- **Smooth animations** with Framer Motion
- **Instagram integration** with masonry gallery and lightbox
- **Blog system** with MDX support
- **Reservation system** with rate limiting
- **Contact forms** with validation
- **Dark/Light theme** toggle

## 🎨 Design System

### Brand Colors
- **White**: `#FFFFFF` - Pure white for cleanliness
- **Stone**: `#F7F7F5` - Soft off-white for backgrounds  
- **Aegean**: `#0D3B66` - Deep blue for primary elements
- **Terracotta**: `#F4A261` - Warm orange for accents

### Typography
- **Headers**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

### Spacing
Golden ratio based spacing system:
- `gr` - 1rem
- `gr-2` - 1.618rem  
- `gr-3` - 2.618rem
- `gr-4` - 4.236rem
- `gr-5` - 6.854rem

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm 8+

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/taratsa-website.git
   cd taratsa-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` with your values:
   ```env
   # Instagram Basic Display API (optional)
   INSTAGRAM_ACCESS_TOKEN=your_access_token
   INSTAGRAM_USER_ID=your_user_id
   
   # Email service (optional)
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
taratsa-website/
├── app/                      # Next.js 14 App Router
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Homepage
│   ├── menu/                # Menu page
│   ├── blog/                # Blog pages
│   ├── api/                 # API routes
│   └── globals.css          # Global styles
├── components/              # React components
│   ├── layout/             # Layout components
│   ├── home/               # Homepage sections
│   └── ui/                 # Reusable UI components
├── lib/                    # Utility functions
├── types/                  # TypeScript definitions  
├── posts/                  # MDX blog posts
├── public/                 # Static assets
└── config files            # Next.js, Tailwind, etc.
```

## 🏗️ Key Components

### Homepage Sections
1. **Hero** - Full-viewport slideshow with CTA buttons
2. **Our Story** - About section with parallax plants
3. **Menu Preview** - Horizontal carousel of signature dishes
4. **Gallery** - Instagram masonry grid with lightbox
5. **Blog & Events** - Tabbed section with latest content

### Layout Components
- **Navbar** - Responsive navigation with scroll detection
- **Footer** - Comprehensive footer with contact info and map
- **ContactDrawer** - Floating reservation form

### Pages
- **Menu** - Categorized menu with filtering
- **Blog** - Post listing with categories
- **Blog Post** - Individual post pages with related content

## 🎯 SEO & Performance

- **Core Web Vitals** optimized
- **Image optimization** with Next.js Image component
- **Font optimization** with Google Fonts
- **Structured data** for restaurant information
- **Sitemap** generation
- **robots.txt** configuration

## 📱 Mobile Experience

- **360px minimum** viewport support
- **Touch-friendly** interactions
- **No scroll** when mobile menu is open
- **Optimized images** for different screen sizes
- **Fast loading** with proper lazy loading

## 🎨 Customization

### Brand Colors
Update colors in `tailwind.config.ts`:
```typescript
colors: {
  'brand': {
    'white': '#FFFFFF',
    'stone': '#F7F7F5', 
    'aegean': '#0D3B66',
    'terracotta': '#F4A261',
  }
}
```

### Content
- Update menu items in `app/menu/page.tsx`
- Add blog posts as MDX files in `posts/`
- Modify restaurant info in `app/layout.tsx`

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect to Vercel
3. Set environment variables
4. Deploy automatically

### Manual Deployment
```bash
npm run build
npm start
```

## 🔧 Development

### Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production  
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors

### Code Style
- **ESLint** for code quality
- **Prettier** for formatting (optional)
- **TypeScript** for type safety

## 📊 Analytics & Monitoring

Consider adding:
- Google Analytics 4
- Google Search Console
- Performance monitoring (Vercel Analytics)
- Error tracking (Sentry)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes  
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary software for Taratsa Rooftop Café.

## 📞 Support

For support, email your-email@taratsa.com or create an issue in this repository.

---

**Built with ❤️ for Taratsa Rooftop Café** 