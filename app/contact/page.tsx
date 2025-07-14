import { Metadata } from 'next'
import Image from 'next/image'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon, 
  ClockIcon,
  CalendarDaysIcon,
  UserGroupIcon,
  ChatBubbleLeftRightIcon,
  StarIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Contact Us | Taratsa Rooftop Café - Get in Touch',
  description: 'Contact Taratsa Rooftop Café for reservations, private events, or inquiries. Located in Thane West with stunning city views and Mediterranean cuisine.',
  keywords: 'contact Taratsa, restaurant reservations, Thane rooftop dining, private events, Mediterranean restaurant contact',
}

const contactInfo = {
  address: {
    line1: 'Taratsa Rooftop Café',
    line2: 'Sky Lounge Complex, Level 12',
    line3: 'Kasarwadavli, Thane West',
    city: 'Thane, Maharashtra 400615',
    landmark: 'Above City Center Mall'
  },
  phone: {
    main: '+91 98765 43210',
    reservations: '+91 98765 43211',
    events: '+91 98765 43212'
  },
  email: {
    main: 'hello@taratsa.com',
    reservations: 'reservations@taratsa.com',
    events: 'events@taratsa.com',
    careers: 'careers@taratsa.com'
  },
  hours: {
    lunch: 'Tuesday - Sunday: 12:00 PM - 3:30 PM',
    dinner: 'Tuesday - Sunday: 6:30 PM - 11:30 PM',
    brunch: 'Saturday - Sunday: 10:00 AM - 3:00 PM',
    closed: 'Closed Mondays for maintenance'
  },
  social: {
    instagram: '@taratsa_thane',
    facebook: 'TaratsaRooftopCafe',
    tripadvisor: 'taratsa-rooftop-cafe'
  }
}

const reasons = [
  {
    icon: CalendarDaysIcon,
    title: 'Table Reservations',
    description: 'Secure your spot at Thane\'s most coveted rooftop dining destination',
    action: 'Book a Table'
  },
  {
    icon: UserGroupIcon,
    title: 'Private Events',
    description: 'Host unforgettable celebrations with panoramic city views',
    action: 'Plan Your Event'
  },
  {
    icon: ChatBubbleLeftRightIcon,
    title: 'General Inquiries',
    description: 'Questions about our menu, dietary requirements, or special requests',
    action: 'Get Answers'
  },
  {
    icon: StarIcon,
    title: 'Feedback',
    description: 'Share your experience or suggestions to help us improve',
    action: 'Share Feedback'
  }
]

const team = [
  {
    name: 'Elena Papadopoulos',
    role: 'Head Chef',
    image: 'https://images.unsplash.com/photo-1559847844-d5cd5c7cf6c8?q=80&w=2070&auto=format&fit=crop',
    specialty: 'Mediterranean Cuisine & Culinary Innovation'
  },
  {
    name: 'Sofia Andino',
    role: 'Beverage Director',
    image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=2070&auto=format&fit=crop',
    specialty: 'Wine Pairings & Craft Cocktails'
  },
  {
    name: 'Marco Rossi',
    role: 'Experience Manager',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop',
    specialty: 'Guest Experience & Events'
  }
]

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-brand-cream">
        {/* Hero Section */}
        <section className="relative py-32 bg-brand-primary text-white overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop"
              alt="Taratsa Rooftop Contact"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-brand-primary/80"></div>
          </div>
          
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="mx-auto max-w-3xl">
              <EnvelopeIcon className="mx-auto h-16 w-16 mb-6 text-white/90" />
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6">
                Connect With Us
              </h1>
              <p className="text-xl sm:text-2xl text-white/90 mb-8 leading-relaxed">
                Whether you're planning a romantic dinner, corporate event, or simply want to experience Mediterranean magic, we're here to make it unforgettable.
              </p>
              <div className="text-lg text-white/80 space-y-3">
                <div className="flex items-center justify-center space-x-3">
                  <CalendarDaysIcon className="h-5 w-5" />
                  <p>Opening March 30, 2025</p>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <StarIcon className="h-5 w-5" />
                  <p>Now accepting reservations for our grand opening!</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Contact Info */}
      <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-primary/10 rounded-full mb-4 group-hover:bg-brand-primary/20 transition-colors">
                <PhoneIcon className="h-8 w-8 text-brand-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-brand-primary mb-2">Call Us</h3>
              <p className="text-gray-600 mb-3">Ready to assist you</p>
              <div className="space-y-1 text-sm">
                <p><strong>Main:</strong> {contactInfo.phone.main}</p>
                <p><strong>Reservations:</strong> {contactInfo.phone.reservations}</p>
                <p><strong>Events:</strong> {contactInfo.phone.events}</p>
              </div>
              </div>

            <div className="text-center group">
                              <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-primary/10 rounded-full mb-4 group-hover:bg-brand-primary/20 transition-colors">
                  <EnvelopeIcon className="h-8 w-8 text-brand-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-brand-primary mb-2">Email Us</h3>
              <p className="text-gray-600 mb-3">We'll respond within 24 hours</p>
              <div className="space-y-1 text-sm">
                <p><strong>General:</strong> {contactInfo.email.main}</p>
                <p><strong>Reservations:</strong> {contactInfo.email.reservations}</p>
                <p><strong>Events:</strong> {contactInfo.email.events}</p>
              </div>
              </div>

            <div className="text-center group">
                              <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-primary/10 rounded-full mb-4 group-hover:bg-brand-primary/20 transition-colors">
                  <MapPinIcon className="h-8 w-8 text-brand-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-brand-primary mb-2">Visit Us</h3>
              <p className="text-gray-600 mb-3">Easy to find, impossible to forget</p>
              <div className="space-y-1 text-sm">
                <p>{contactInfo.address.line2}</p>
                <p>{contactInfo.address.line3}</p>
                <p>{contactInfo.address.city}</p>
                <p className="text-brand-primary font-medium">{contactInfo.address.landmark}</p>
              </div>
              </div>
            </div>
          </div>
        </section>

      {/* Contact Reasons */}
        <section className="py-16 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-brand-primary mb-4">
                How Can We Help You?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our dedicated team is here to ensure your Taratsa experience exceeds expectations
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {reasons.map((reason, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 group">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-primary/10 rounded-lg mb-4 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                  <reason.icon className="h-6 w-6 text-brand-primary group-hover:text-white" />
                  </div>
                <h3 className="text-lg font-serif font-semibold text-brand-primary mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                <button className="text-brand-primary hover:text-brand-sage transition-colors text-sm font-medium">
                    {reason.action} →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
      <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl lg:text-4xl font-serif font-bold text-brand-primary mb-4">
                Send Us a Message
              </h2>
                <p className="text-lg text-gray-600">
                  Whether you have questions about our menu, want to plan a special event, or just want to say hello, we'd love to hear from you.
              </p>
            </div>

                <form className="space-y-8 bg-gradient-to-br from-brand-background/20 via-white to-brand-background/10 p-8 rounded-2xl shadow-lg">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-semibold text-brand-primary mb-3">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-sage focus:border-brand-sage transition-all duration-200 bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-500 font-medium shadow-sm hover:shadow-md"
                      placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-semibold text-brand-primary mb-3">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-sage focus:border-brand-sage transition-all duration-200 bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-500 font-medium shadow-sm hover:shadow-md"
                      placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-brand-primary mb-3">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-sage focus:border-brand-sage transition-all duration-200 bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-500 font-medium shadow-sm hover:shadow-md"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-brand-primary mb-3">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-sage focus:border-brand-sage transition-all duration-200 bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-500 font-medium shadow-sm hover:shadow-md"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-brand-primary mb-3">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-sage focus:border-brand-sage transition-all duration-200 bg-white/80 backdrop-blur-sm text-gray-800 font-medium shadow-sm hover:shadow-md"
                    >
                      <option value="">Select a subject</option>
                      <option value="reservation">Table Reservation</option>
                    <option value="private-event">Private Event Inquiry</option>
                    <option value="menu">Menu & Dietary Questions</option>
                      <option value="feedback">Feedback & Suggestions</option>
                    <option value="careers">Career Opportunities</option>
                    <option value="media">Media & Press Inquiries</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-brand-primary mb-3">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-sage focus:border-brand-sage transition-all duration-200 bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-500 font-medium shadow-sm hover:shadow-md resize-none"
                    placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>

                <div className="flex items-start space-x-3 p-4 bg-brand-background/20 rounded-xl">
                    <input
                    type="checkbox"
                      id="newsletter"
                      name="newsletter"
                    className="mt-1 h-5 w-5 text-brand-primary focus:ring-brand-sage border-gray-300 rounded-md"
                    />
                  <label htmlFor="newsletter" className="text-sm text-gray-700 font-medium">
                    I'd like to receive updates about Taratsa's opening, special events, and Mediterranean culinary insights.
                    </label>
                  </div>

                  <button
                    type="submit"
                  className="w-full bg-gradient-to-r from-amber-800 to-orange-700 hover:from-orange-700 hover:to-amber-800 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
                  >
                    Send Message ✨
                  </button>
                </form>
              </div>

            {/* Additional Info */}
              <div className="space-y-8">
              {/* Hours */}
              <div className="bg-gray-50 rounded-2xl p-6">
                  <div className="flex items-center mb-4">
                  <ClockIcon className="h-6 w-6 text-brand-primary mr-3" />
                  <h3 className="text-xl font-serif font-semibold text-brand-primary">Operating Hours</h3>
                  </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>Lunch:</strong> {contactInfo.hours.lunch}</p>
                  <p><strong>Dinner:</strong> {contactInfo.hours.dinner}</p>
                  <p><strong>Weekend Brunch:</strong> {contactInfo.hours.brunch}</p>
                  <p><strong>Note:</strong> {contactInfo.hours.closed}</p>
                </div>
              </div>

              {/* Team */}
              <div>
                <h3 className="text-2xl font-serif font-bold text-brand-golden mb-6">Meet Our Team</h3>
                <div className="space-y-4">
                  {team.map((member, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-soft">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-serif font-semibold text-brand-golden">{member.name}</h4>
                        <p className="text-sm text-gray-600">{member.role}</p>
                        <p className="text-xs text-gray-500">{member.specialty}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-brand-golden/5 rounded-2xl p-6">
                <h3 className="text-xl font-serif font-semibold text-brand-golden mb-4">Follow Our Journey</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Stay connected and be the first to know about our grand opening, special events, and behind-the-scenes moments.
                </p>
                <div className="space-y-2 text-sm">
                  <p><strong>Instagram:</strong> {contactInfo.social.instagram}</p>
                  <p><strong>Facebook:</strong> {contactInfo.social.facebook}</p>
                  <p><strong>TripAdvisor:</strong> {contactInfo.social.tripadvisor}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map & Location */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-brand-golden mb-4">
              Find Us in the Sky
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Located on the 12th floor with panoramic views of Thane, Taratsa is easily accessible and impossible to forget.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Map placeholder */}
            <div className="bg-white rounded-2xl shadow-soft overflow-hidden">
              <div className="h-96 bg-gradient-to-br from-brand-golden/20 to-brand-terracotta/20 flex items-center justify-center">
                <div className="text-center">
                  <MapPinIcon className="h-16 w-16 text-brand-golden mx-auto mb-4" />
                  <p className="text-lg font-medium text-brand-golden mb-2">Interactive Map</p>
                  <p className="text-gray-600">Coming soon with our grand opening</p>
                </div>
              </div>
            </div>

            {/* Directions */}
            <div>
              <h3 className="text-2xl font-serif font-bold text-brand-golden mb-6">Getting Here</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">📍 Address</h4>
                  <p className="text-gray-600">
                    {contactInfo.address.line1}<br />
                    {contactInfo.address.line2}<br />
                    {contactInfo.address.line3}<br />
                    {contactInfo.address.city}<br />
                    <span className="text-brand-golden font-medium">{contactInfo.address.landmark}</span>
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">🚗 By Car</h4>
                  <p className="text-gray-600">
                    Valet parking available. Direct elevator access to Level 12. 
                    GPS coordinates: 19.2183, 72.9781
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">🚇 Public Transport</h4>
                  <p className="text-gray-600">
                    Nearest station: Thane Railway Station (2.5 km)<br />
                    Auto-rickshaw and taxi readily available
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">✈️ From Airport</h4>
                  <p className="text-gray-600">
                    45 minutes from Mumbai International Airport<br />
                    Direct cab service available
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
              <section className="py-16 bg-brand-primary text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-4">
            Ready to Experience Taratsa?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join us for an unforgettable Mediterranean journey under the stars. 
            Opening March 30, 2025 - reservations now open!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-brand-primary hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-colors text-lg shadow-soft">
              Make a Reservation
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-brand-primary px-8 py-4 rounded-full font-semibold transition-colors text-lg">
              Download Menu
            </button>
          </div>
        </div>
      </section>
    </div>
    <Footer />
  </>
  )
} 