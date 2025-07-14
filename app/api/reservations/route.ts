import { NextRequest, NextResponse } from 'next/server'
import { Reservation } from '@/types'

// Simple in-memory rate limiting (in production, use Redis or similar)
const rateLimit = new Map<string, { count: number; timestamp: number }>()

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const windowMs = 15 * 60 * 1000 // 15 minutes
  const maxRequests = 5

  const record = rateLimit.get(ip)
  
  if (!record) {
    rateLimit.set(ip, { count: 1, timestamp: now })
    return false
  }

  if (now - record.timestamp > windowMs) {
    rateLimit.set(ip, { count: 1, timestamp: now })
    return false
  }

  if (record.count >= maxRequests) {
    return true
  }

  record.count++
  return false
}

function validateReservation(data: any): { valid: boolean; errors: string[] } {
  const errors: string[] = []

  if (!data.name || typeof data.name !== 'string' || data.name.trim().length < 2) {
    errors.push('Name must be at least 2 characters long')
  }

  if (!data.phone || typeof data.phone !== 'string' || !/^\+?[\d\s-()]{10,}$/.test(data.phone)) {
    errors.push('Valid phone number is required')
  }

  if (data.email && (typeof data.email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))) {
    errors.push('Valid email format required')
  }

  if (!data.date || typeof data.date !== 'string') {
    errors.push('Date is required')
  } else {
    const reservationDate = new Date(data.date)
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    
    if (reservationDate < today) {
      errors.push('Reservation date cannot be in the past')
    }
  }

  if (!data.time || typeof data.time !== 'string') {
    errors.push('Time is required')
  }

  if (!data.guests || typeof data.guests !== 'number' || data.guests < 1 || data.guests > 8) {
    errors.push('Number of guests must be between 1 and 8')
  }

  return { valid: errors.length === 0, errors }
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    const body = await request.json()
    const { valid, errors } = validateReservation(body)

    if (!valid) {
      return NextResponse.json(
        { error: 'Validation failed', details: errors },
        { status: 400 }
      )
    }

    const reservation: Reservation = {
      name: body.name.trim(),
      phone: body.phone.trim(),
      email: body.email?.trim() || undefined,
      date: body.date,
      time: body.time,
      guests: body.guests,
      specialRequests: body.specialRequests?.trim() || undefined,
    }

    // In a real application, you would:
    // 1. Save to database
    // 2. Send confirmation email
    // 3. Integrate with restaurant management system
    // 4. Send SMS confirmation
    
    console.log('New reservation:', reservation)

    // Mock successful response
    return NextResponse.json(
      {
        success: true,
        message: 'Reservation request received successfully',
        reservationId: `TR-${Date.now()}`,
        data: reservation,
      },
      { status: 201 }
    )

  } catch (error) {
    console.error('Reservation error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json(
    { message: 'Reservation API endpoint' },
    { status: 200 }
  )
} 