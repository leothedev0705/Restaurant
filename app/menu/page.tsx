'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { UserIcon } from '@heroicons/react/24/outline'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { StarIcon } from '@heroicons/react/24/outline'
import { formatPrice } from '@/lib/utils'

const menuCategories = [
  {
    id: 'appetizers',
    name: 'Appetizers & Mezze',
    description: 'Traditional Mediterranean small plates to awaken your palate',
    icon: '🫒',
    items: [
      {
        name: 'Mediterranean Mezze Platter',
        description: 'Hummus, baba ganoush, tapenade, dolmades, feta, olives, warm pita',
        price: 1250,
        dietary: ['Vegetarian'],
        popular: true,
        image: 'https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?q=80&w=2070&auto=format&fit=crop'
      },
      {
        name: 'Grilled Halloumi',
        description: 'Cyprian cheese with honey, rosemary, toasted pine nuts, fig compote',
        price: 850,
        dietary: ['Vegetarian'],
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?q=80&w=2070&auto=format&fit=crop'
      },
      {
        name: 'Octopus Carpaccio',
        description: 'Thinly sliced tender octopus, lemon vinaigrette, capers, micro herbs',
        price: 1150,
        dietary: ['Gluten-Free'],
        chefSpecial: true,
        image: 'https://images.unsplash.com/photo-1559847844-d5cd5c7cf6c8?q=80&w=2070&auto=format&fit=crop'
      },
      {
        name: 'Spanakopita Triangles',
        description: 'Crispy phyllo pastry filled with spinach, feta, fresh herbs',
        price: 650,
        dietary: ['Vegetarian'],
        image: 'https://images.unsplash.com/photo-1572453800999-e8d2d1589b7c?q=80&w=2070&auto=format&fit=crop'
      }
    ]
  },
  {
    id: 'mains',
    name: 'Main Courses',
    description: 'Hearty Mediterranean dishes showcasing the finest seasonal ingredients',
    icon: '🍽️',
    items: [
      {
        name: 'Grilled Mediterranean Sea Bass',
        description: 'Whole branzino, lemon-herb marinade, grilled vegetables, salmoriglio sauce',
        price: 2450,
        dietary: ['Gluten-Free'],
        popular: true,
        image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=2070&auto=format&fit=crop'
      },
      {
        name: 'Lamb Kleftiko',
        description: 'Slow-roasted lamb shoulder, potatoes, Mediterranean herbs, red wine jus',
        price: 2850,
        dietary: ['Gluten-Free'],
        chefSpecial: true,
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2070&auto=format&fit=crop'
      },
      {
        name: 'Seafood Risotto',
        description: 'Arborio rice, prawns, mussels, scallops, saffron, white wine',
        price: 1950,
        dietary: ['Gluten-Free'],
        image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?q=80&w=2070&auto=format&fit=crop'
      },
      {
        name: 'Moussaka Deluxe',
        description: 'Layers of eggplant, spiced lamb, béchamel, aged parmesan',
        price: 1650,
        image: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?q=80&w=2070&auto=format&fit=crop'
      },
      {
        name: 'Vegetarian Stuffed Vine Leaves',
        description: 'Dolmades filled with herb rice, pine nuts, served with tzatziki',
        price: 1250,
        dietary: ['Vegetarian', 'Vegan Option'],
        image: 'https://images.unsplash.com/photo-1551782450-17144efb9c50?q=80&w=2070&auto=format&fit=crop'
      }
    ]
  },
  {
    id: 'cocktails',
    name: 'Signature Cocktails',
    description: 'Artisanal cocktails inspired by Mediterranean flavors and traditions',
    icon: '🍹',
    items: [
      {
        name: 'Golden Sunset',
        description: 'Premium gin, elderflower, fresh lemon, rosemary, sparkling wine',
        price: 750,
        popular: true,
        image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop'
      },
      {
        name: 'Mediterranean Mule',
        description: 'Vodka, cucumber, basil, lime, ginger beer, olive oil caviar',
        price: 650,
        image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?q=80&w=2070&auto=format&fit=crop'
      },
      {
        name: 'Santorini Spritz',
        description: 'Aperol, prosecco, blood orange, thyme, Mediterranean tonic',
        price: 700,
        chefSpecial: true,
        image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=2070&auto=format&fit=crop'
      },
      {
        name: 'Aegean Breeze',
        description: 'Ouzo, fresh watermelon, lime, mint, soda water',
        price: 650,
        image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?q=80&w=2070&auto=format&fit=crop'
      }
    ]
  },
  {
    id: 'desserts',
    name: 'Desserts',
    description: 'Traditional and modern Mediterranean sweets to complete your experience',
    icon: '🍰',
    items: [
      {
        name: 'Baklava Selection',
        description: 'Traditional phyllo pastry, pistachios, walnuts, honey syrup',
        price: 450,
        popular: true,
        image: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?q=80&w=2070&auto=format&fit=crop'
      },
      {
        name: 'Lemon Posset',
        description: 'Silky lemon cream, shortbread, candied lemon, mint',
        price: 400,
        dietary: ['Vegetarian'],
        image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=2070&auto=format&fit=crop'
      },
      {
        name: 'Greek Yogurt Parfait',
        description: 'Thick yogurt, honey, crushed pistachios, seasonal fruits',
        price: 350,
        dietary: ['Vegetarian', 'Gluten-Free'],
        image: 'https://images.unsplash.com/photo-1488900128323-21503983a07e?q=80&w=2070&auto=format&fit=crop'
      }
    ]
  }
]

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('appetizers')

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-brand-cream">
        {/* Hero Section */}
        <section className="relative py-32 bg-brand-primary text-white overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop"
              alt="Mediterranean dining elegance"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/95 via-brand-primary/85 to-terracotta-600/75"></div>
          </div>
          
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="mx-auto max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <UserIcon className="mx-auto h-16 w-16 mb-6 text-white/90" />
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6">
                  Curated Mediterranean Menu
                </h1>
                <p className="text-xl sm:text-2xl text-white/90 mb-8 leading-relaxed">
                  A carefully crafted selection of authentic Mediterranean dishes, prepared with the finest ingredients and traditional techniques passed down through generations.
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                  <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                    🌱 Farm-to-Table Fresh
                  </span>
                  <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                    👨‍🍳 Chef's Signature Creations
                  </span>
                  <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                    🍷 Perfect Wine Pairings
                  </span>
                  <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                    🏔️ Rooftop Dining Experience
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Menu Navigation */}
        <section className="sticky top-20 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex overflow-x-auto scrollbar-hide py-4 space-x-6">
              {menuCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex-shrink-0 flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-200 shadow-soft border ${
                    activeCategory === category.id
                      ? 'bg-brand-primary text-white border-brand-primary shadow-md'
                      : 'bg-white text-gray-700 border-gray-200 hover:bg-brand-sage hover:text-white hover:border-brand-sage'
                  }`}
                >
                  <span className="text-lg">{category.icon}</span>
                  <span className="whitespace-nowrap">{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Menu Sections */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          {menuCategories.map((category) => (
            <section key={category.id} id={category.id} className="mb-20">
              {/* Category Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-primary/10 rounded-full mb-4">
                  <span className="text-3xl">{category.icon}</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-serif font-bold text-brand-primary mb-4">
                  {category.name}
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  {category.description}
                </p>
              </div>

              {/* Menu Items Grid */}
              <div className="grid lg:grid-cols-2 gap-8">
                {category.items.map((item, index) => (
                  <div key={index} className="group">
                    <div className="bg-white rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 overflow-hidden">
                      <div className="relative h-48 sm:h-56">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/20"></div>
                        
                        {/* Badges */}
                        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                          {item.popular && (
                            <span className="bg-brand-sage text-white px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                              <StarIcon className="h-3 w-3" />
                              <span>Popular</span>
                            </span>
                          )}
                          {'chefSpecial' in item && (item as { chefSpecial: boolean }).chefSpecial && (
                            <span className="bg-brand-primary text-white px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                              <UserIcon className="h-3 w-3" />
                              <span>Chef's Special</span>
                            </span>
                          )}
                        </div>

                        {/* Price */}
                        <div className="absolute top-4 right-4">
                          <span className="bg-white/90 backdrop-blur-sm text-brand-primary font-bold px-4 py-2 rounded-full text-lg">
                            {formatPrice(item.price)}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="text-xl font-serif font-semibold text-brand-primary group-hover:text-brand-sage transition-colors">
                            {item.name}
                          </h3>
                        </div>
                        
                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {item.description}
                        </p>

                        {/* Dietary & Tags */}
                        {'dietary' in item && (item as { dietary: string[] }).dietary && (
                          <div className="flex flex-wrap gap-2">
                            {(item as { dietary: string[] }).dietary.map((diet: string, dietIndex: number) => (
                              <span
                                key={dietIndex}
                                className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium"
                              >
                                {diet}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}

          {/* Call to Action */}
          <section className="text-center py-16">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl lg:text-3xl font-serif font-semibold text-brand-primary mb-4">
                Ready to Experience Mediterranean Excellence?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Reserve your table today and let our chefs take you on a culinary journey through the Mediterranean.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-brand-primary hover:bg-terracotta-700 text-white px-8 py-4 rounded-full font-semibold transition-colors text-lg shadow-soft">
                  Reserve Table
                </button>
                <button className="border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white px-8 py-4 rounded-full font-semibold transition-colors text-lg">
                  Download Menu PDF
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  )
} 