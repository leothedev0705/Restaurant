import { NextRequest, NextResponse } from 'next/server'
import { ContactForm } from '@/types'

function validateContactForm(data: Partial<ContactForm>): { valid: boolean; errors: string[] } {
  const errors: string[] = []

  if (!data.name || typeof data.name !== 'string' || data.name.trim().length < 2) {
    errors.push('Name must be at least 2 characters long')
  }

  if (!data.email || typeof data.email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push('Valid email is required')
  }

  if (!data.phone || typeof data.phone !== 'string' || !/^\+?[\d\s-()]{10,}$/.test(data.phone)) {
    errors.push('Valid phone number is required')
  }

  if (!data.message || typeof data.message !== 'string' || data.message.trim().length < 10) {
    errors.push('Message must be at least 10 characters long')
  }

  return { valid: errors.length === 0, errors }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { valid, errors } = validateContactForm(body)

    if (!valid) {
      return NextResponse.json(
        { error: 'Validation failed', details: errors },
        { status: 400 }
      )
    }

    const contactForm: ContactForm = {
      name: body.name.trim(),
      email: body.email.trim(),
      phone: body.phone.trim(),
      message: body.message.trim(),
    }

    // In a real application, you would:
    // 1. Save to database
    // 2. Send email to restaurant
    // 3. Send auto-reply to customer
    
    console.log('New contact form submission:', contactForm)

    return NextResponse.json(
      {
        success: true,
        message: 'Message sent successfully. We will get back to you soon!',
      },
      { status: 201 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 