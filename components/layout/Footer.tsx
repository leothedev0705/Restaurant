'use client'

import Link from 'next/link'
import Image from 'next/image'
import { MapPinIcon, PhoneIcon, ClockIcon } from '@heroicons/react/24/outline'

const footerLinks = {
  company: [
    { name: 'About Us', href: '#story' },
    { name: 'Our Story', href: '#story' },
    { name: 'Careers', href: '/careers' },
    { name: 'Press', href: '/press' },
  ],
  support: [
    { name: 'Contact', href: '#contact' },
    { name: 'FAQs', href: '/faq' },
    { name: 'Reservations', href: '#contact' },
    { name: 'Private Events', href: '/events' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
  ],
}

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/taratsa_thane/',
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.621 5.367 11.988 11.988 11.988s11.988-5.367 11.988-11.988C24.005 5.367 18.638.001 12.017.001zm0 21.68c-5.341 0-9.69-4.35-9.69-9.693S6.676 2.295 12.017 2.295s9.693 4.35 9.693 9.692-4.351 9.693-9.693 9.693z"/>
        <path d="M17.05 7.467c-.455 0-.825.37-.825.825s.37.825.825.825.825-.37.825-.825-.37-.825-.825-.825z"/>
        <path d="M12.017 5.995c-3.317 0-6.012 2.695-6.012 6.012s2.695 6.012 6.012 6.012 6.012-2.695 6.012-6.012-2.695-6.012-6.012-6.012zm0 9.933c-2.164 0-3.921-1.757-3.921-3.921s1.757-3.921 3.921-3.921 3.921 1.757 3.921 3.921-1.757 3.921-3.921 3.921z"/>
      </svg>
    ),
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/919876543210',
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.085"/>
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com/taratsa',
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="bg-brand-primary text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-12">
          {/* Brand & Contact Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Image
                src="/taratsa-logo.png"
                alt="Taratsa Logo"
                width={40}
                height={40}
                className="h-10 w-10"
              />
              <span className="font-serif text-2xl font-semibold">Taratsa</span>
            </div>
            <p className="text-gray-300 mb-6 text-balance">
              Experience the finest rooftop dining in Thane. Savor Mediterranean-inspired cuisine with panoramic city views.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPinIcon className="h-5 w-5 text-brand-sage mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm">123 Rooftop Street</p>
                  <p className="text-sm">Thane West, Maharashtra 400601</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <PhoneIcon className="h-5 w-5 text-brand-sage flex-shrink-0" />
                <a 
                  href="tel:+919876543210" 
                  className="text-sm hover:text-brand-terracotta transition-colors"
                >
                  +91 98765 43210
                </a>
              </div>
              
              <div className="flex items-start space-x-3">
                <ClockIcon className="h-5 w-5 text-brand-sage mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm">Mon - Sun: 11:00 AM - 11:00 PM</p>
                  <p className="text-xs text-gray-400">Last orders at 10:30 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-1">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Company</h3>
                <ul className="space-y-3">
                  {footerLinks.company.map((item) => (
                    <li key={item.name}>
                      <Link 
                        href={item.href} 
                        className="text-sm text-gray-300 hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Support</h3>
                <ul className="space-y-3">
                  {footerLinks.support.map((item) => (
                    <li key={item.name}>
                      <Link 
                        href={item.href} 
                        className="text-sm text-gray-300 hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Map & Social */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Find Us</h3>
            
            {/* Embedded Google Map */}
            <div className="mb-6 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.2799073714814!2d72.97136!3d19.2183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8f5b1f3f3f3%3A0x1f3f3f3f3f3f3f3f!2sThane%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1645123456789!5m2!1sen!2sin"
                width="100%"
                height="150"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale"
              />
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-sm font-medium mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-brand-terracotta transition-colors"
                    aria-label={item.name}
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2025 Taratsa Rooftop Café. All rights reserved.
            </div>
            
            <div className="flex space-x-6">
              {footerLinks.legal.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 