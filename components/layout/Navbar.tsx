'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Menu', href: '/menu' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }

    return () => document.body.classList.remove('no-scroll')
  }, [isOpen])

  const toggleMenu = () => setIsOpen(!isOpen)
  
  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-soft'
          : 'bg-black/20 backdrop-blur-sm'
      )}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 lg:h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/taratsa-logo.png"
                alt="Taratsa Logo"
                width={40}
                height={40}
                className="h-8 w-8 lg:h-10 lg:w-10"
              />
              <span className={cn(
                'font-serif text-xl lg:text-2xl font-semibold transition-all duration-300',
                isScrolled ? 'text-brand-primary' : 'text-white drop-shadow-md'
              )}>
                Taratsa
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-brand-sage focus-ring rounded-md relative',
                    isActive(item.href)
                      ? isScrolled 
                        ? 'text-brand-primary font-semibold'
                        : 'text-white font-semibold drop-shadow-md'
                      : isScrolled 
                        ? 'text-gray-700' 
                        : 'text-white drop-shadow-md'
                  )}
                >
                  {item.name}
                  {isActive(item.href) && (
                    <span className={cn(
                      'absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-0.5 rounded-full transition-colors duration-300',
                      isScrolled ? 'bg-brand-primary' : 'bg-brand-sage'
                    )} />
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className={cn(
                'p-2 rounded-md transition-all duration-300 focus-ring',
                isScrolled ? 'text-gray-700 hover:text-brand-primary' : 'text-white hover:text-brand-sage drop-shadow-md'
              )}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </button>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className={cn(
                  'p-2 rounded-md transition-all duration-300 focus-ring',
                  isScrolled ? 'text-gray-700' : 'text-white drop-shadow-md'
                )}
                aria-expanded="false"
                aria-label="Toggle navigation menu"
              >
                {isOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            'md:hidden transition-all duration-300 ease-in-out overflow-hidden',
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          )}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md rounded-lg mt-2 shadow-soft">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 focus-ring',
                  isActive(item.href)
                    ? 'text-brand-primary bg-brand-primary/10 font-semibold'
                    : 'text-gray-700 hover:text-brand-primary hover:bg-gray-50'
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
} 