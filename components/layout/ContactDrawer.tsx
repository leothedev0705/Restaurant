'use client'

import { useState, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon, PhoneIcon, CalendarIcon } from '@heroicons/react/24/outline'
import { cn } from '@/lib/utils'

interface ReservationForm {
  name: string
  phone: string
  email: string
  date: string
  time: string
  guests: number
  specialRequests: string
}

const timeSlots = [
  '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
  '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
  '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM',
  '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM',
  '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM',
  '9:00 PM', '9:30 PM', '10:00 PM', '10:30 PM'
]

export default function ContactDrawer() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [form, setForm] = useState<ReservationForm>({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    guests: 2,
    specialRequests: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/reservations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })

      if (response.ok) {
        // Reset form and show success
        setForm({
          name: '',
          phone: '',
          email: '',
          date: '',
          time: '',
          guests: 2,
          specialRequests: ''
        })
        setIsOpen(false)
        // You might want to show a toast notification here
      }
    } catch (error) {
      console.error('Reservation error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const getTodayDate = () => {
    const today = new Date()
    return today.toISOString().split('T')[0]
  }

  return (
    <>
      {/* Floating Contact Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-brand-primary to-brand-sage hover:from-brand-sage hover:to-brand-primary text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 focus-ring group backdrop-blur-sm"
          aria-label="Make a reservation"
        >
          <CalendarIcon className="h-6 w-6" />
          <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-brand-primary/90 backdrop-blur-sm text-white text-sm font-semibold px-3 py-2 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap shadow-lg">
            Reserve Table ✨
          </span>
        </button>
      </div>

      {/* Drawer */}
      <Transition show={isOpen} as={Fragment}>
        <Dialog onClose={setIsOpen} className="relative z-50">
          {/* Backdrop */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
          </Transition.Child>

          {/* Drawer */}
          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-300"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-300"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 shadow-xl">
                      {/* Header */}
                      <div className="bg-gradient-to-r from-brand-primary via-brand-sage to-brand-primary px-6 py-6">
                        <div className="flex items-center justify-between">
                          <Dialog.Title className="text-xl font-serif font-bold text-white">
                            Reserve Your Table
                          </Dialog.Title>
                          <button
                            onClick={() => setIsOpen(false)}
                            className="text-white hover:text-brand-background transition-all duration-200 p-2 rounded-full hover:bg-white/10 focus-ring"
                            aria-label="Close"
                          >
                            <XMarkIcon className="h-5 w-5" />
                          </button>
                        </div>
                        <p className="mt-3 text-sm text-white/90 font-medium">
                          Book your perfect Mediterranean rooftop experience
                        </p>
                      </div>

                      {/* Form */}
                      <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto px-6 py-8 space-y-8 bg-gradient-to-b from-transparent via-amber-50/50 to-orange-100/30">
                        {/* Name */}
                        <div>
                          <label htmlFor="name" className="block text-sm font-semibold text-brand-primary mb-3">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={form.name}
                            onChange={handleInputChange}
                            className="w-full px-4 py-4 border-2 border-amber-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-sage focus:border-brand-sage transition-all duration-200 bg-white/95 backdrop-blur-sm text-gray-800 placeholder-gray-500 font-medium shadow-sm hover:shadow-md"
                            placeholder="Enter your full name"
                          />
                        </div>

                        {/* Phone */}
                        <div>
                          <label htmlFor="phone" className="block text-sm font-semibold text-brand-primary mb-3">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            value={form.phone}
                            onChange={handleInputChange}
                            className="w-full px-4 py-4 border-2 border-amber-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-sage focus:border-brand-sage transition-all duration-200 bg-white/95 backdrop-blur-sm text-gray-800 placeholder-gray-500 font-medium shadow-sm hover:shadow-md"
                            placeholder="+91 98765 43210"
                          />
                        </div>

                        {/* Email */}
                        <div>
                          <label htmlFor="email" className="block text-sm font-semibold text-brand-primary mb-3">
                            Email Address
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={form.email}
                            onChange={handleInputChange}
                            className="w-full px-4 py-4 border-2 border-amber-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-sage focus:border-brand-sage transition-all duration-200 bg-white/95 backdrop-blur-sm text-gray-800 placeholder-gray-500 font-medium shadow-sm hover:shadow-md"
                            placeholder="your@email.com"
                          />
                        </div>

                        {/* Date and Time */}
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="date" className="block text-sm font-semibold text-brand-primary mb-3">
                              Date *
                            </label>
                            <input
                              type="date"
                              id="date"
                              name="date"
                              required
                              min={getTodayDate()}
                              value={form.date}
                              onChange={handleInputChange}
                              className="w-full px-4 py-4 border-2 border-amber-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-sage focus:border-brand-sage transition-all duration-200 bg-white/95 backdrop-blur-sm text-gray-800 font-medium shadow-sm hover:shadow-md"
                            />
                          </div>

                          <div>
                            <label htmlFor="time" className="block text-sm font-semibold text-brand-primary mb-3">
                              Time *
                            </label>
                            <select
                              id="time"
                              name="time"
                              required
                              value={form.time}
                              onChange={handleInputChange}
                              className="w-full px-4 py-4 border-2 border-amber-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-sage focus:border-brand-sage transition-all duration-200 bg-white/95 backdrop-blur-sm text-gray-800 font-medium shadow-sm hover:shadow-md"
                            >
                              <option value="">Select time</option>
                              {timeSlots.map((slot) => (
                                <option key={slot} value={slot}>
                                  {slot}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                        {/* Guests */}
                        <div>
                          <label htmlFor="guests" className="block text-sm font-semibold text-brand-primary mb-3">
                            Number of Guests *
                          </label>
                          <select
                            id="guests"
                            name="guests"
                            required
                            value={form.guests}
                            onChange={handleInputChange}
                            className="w-full px-4 py-4 border-2 border-amber-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-sage focus:border-brand-sage transition-all duration-200 bg-white/95 backdrop-blur-sm text-gray-800 font-medium shadow-sm hover:shadow-md"
                          >
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                              <option key={num} value={num}>
                                {num} {num === 1 ? 'Guest' : 'Guests'}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Special Requests */}
                        <div>
                          <label htmlFor="specialRequests" className="block text-sm font-semibold text-brand-primary mb-3">
                            Special Requests
                          </label>
                          <textarea
                            id="specialRequests"
                            name="specialRequests"
                            rows={4}
                            value={form.specialRequests}
                            onChange={handleInputChange}
                            className="w-full px-4 py-4 border-2 border-amber-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-sage focus:border-brand-sage transition-all duration-200 bg-white/95 backdrop-blur-sm text-gray-800 placeholder-gray-500 font-medium shadow-sm hover:shadow-md resize-none"
                            placeholder="Any dietary restrictions or special occasions?"
                          />
                        </div>

                        {/* Submit Button */}
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className={cn(
                            "w-full bg-gradient-to-r from-brand-primary to-brand-sage hover:from-brand-sage hover:to-brand-primary text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl disabled:hover:scale-100",
                            isSubmitting && "opacity-50 cursor-not-allowed"
                          )}
                        >
                          {isSubmitting ? 'Submitting...' : 'Reserve Table ✨'}
                        </button>

                        {/* Contact Info */}
                        <div className="border-t border-amber-300/30 pt-6 bg-gradient-to-r from-amber-100/50 to-orange-100/30 rounded-lg p-4 mt-2">
                          <h4 className="font-serif font-semibold text-brand-primary mb-4">Need immediate assistance?</h4>
                          <div className="space-y-3">
                            <a
                              href="tel:+919876543210"
                              className="flex items-center space-x-3 text-brand-primary hover:text-brand-sage transition-colors p-2 rounded-lg hover:bg-brand-background/30"
                            >
                              <PhoneIcon className="h-5 w-5" />
                              <span className="font-medium">+91 98765 43210</span>
                            </a>
                            <a
                              href="https://wa.me/919876543210"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center w-full bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-[1.02] shadow-md hover:shadow-lg"
                            >
                              WhatsApp Us 💬
                            </a>
                          </div>
                        </div>
                      </form>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
} 