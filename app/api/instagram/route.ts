import { NextRequest, NextResponse } from 'next/server'
import { InstagramMedia } from '@/types'

// Mock Instagram data for development
// In production, replace with actual Instagram Basic Display API
const mockInstagramData: InstagramMedia[] = [
  {
    id: '1',
    media_type: 'IMAGE',
    media_url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1080&auto=format&fit=crop',
    permalink: 'https://www.instagram.com/p/example1/',
    caption: 'Stunning sunset views from our rooftop terrace 🌅 #TaratsaViews #RooftopDining',
    timestamp: '2024-03-01T18:30:00Z',
  },
  {
    id: '2',
    media_type: 'IMAGE',
    media_url: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?q=80&w=1080&auto=format&fit=crop',
    permalink: 'https://www.instagram.com/p/example2/',
    caption: 'Mediterranean platter perfection ✨ #TaratsaFood #Mediterranean',
    timestamp: '2024-03-02T19:15:00Z',
  },
  {
    id: '3',
    media_type: 'IMAGE',
    media_url: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=1080&auto=format&fit=crop',
    permalink: 'https://www.instagram.com/p/example3/',
    caption: 'Cozy corner with city lights 🏙️ #TaratsaAmbiance #CityViews',
    timestamp: '2024-03-03T20:00:00Z',
  },
  {
    id: '4',
    media_type: 'IMAGE',
    media_url: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=1080&auto=format&fit=crop',
    permalink: 'https://www.instagram.com/p/example4/',
    caption: 'Fresh mocktails with a view 🍹 #TaratsamMocktails #RefreshingDrinks',
    timestamp: '2024-03-04T17:45:00Z',
  },
  {
    id: '5',
    media_type: 'IMAGE',
    media_url: 'https://images.unsplash.com/photo-1559847844-d5cd5c7cf6c8?q=80&w=1080&auto=format&fit=crop',
    permalink: 'https://www.instagram.com/p/example5/',
    caption: 'Signature grilled sea bass 🐟 #TaratsaSignature #SeafoodSpecial',
    timestamp: '2024-03-05T19:30:00Z',
  },
  {
    id: '6',
    media_type: 'IMAGE',
    media_url: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?q=80&w=1080&auto=format&fit=crop',
    permalink: 'https://www.instagram.com/p/example6/',
    caption: 'Mezze platter for sharing 🫒 #TaratsamMezze #SharingIsCaring',
    timestamp: '2024-03-06T18:00:00Z',
  },
  {
    id: '7',
    media_type: 'IMAGE',
    media_url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1080&auto=format&fit=crop',
    permalink: 'https://www.instagram.com/p/example7/',
    caption: 'Golden hour magic ✨ #TaratsaGoldenHour #MagicalMoments',
    timestamp: '2024-03-07T18:45:00Z',
  },
  {
    id: '8',
    media_type: 'IMAGE',
    media_url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1080&auto=format&fit=crop',
    permalink: 'https://www.instagram.com/p/example8/',
    caption: 'Weekend vibes at Taratsa 🎉 #WeekendVibes #TaratsaLife',
    timestamp: '2024-03-08T20:30:00Z',
  },
]

async function fetchInstagramMedia(): Promise<InstagramMedia[]> {
  // In production, implement actual Instagram Basic Display API call
  const INSTAGRAM_ACCESS_TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN
  const INSTAGRAM_USER_ID = process.env.INSTAGRAM_USER_ID

  if (!INSTAGRAM_ACCESS_TOKEN || !INSTAGRAM_USER_ID) {
    console.log('Instagram API credentials not configured, using mock data')
    return mockInstagramData
  }

  try {
    const response = await fetch(
      `https://graph.instagram.com/${INSTAGRAM_USER_ID}/media?fields=id,media_type,media_url,thumbnail_url,permalink,caption,timestamp&access_token=${INSTAGRAM_ACCESS_TOKEN}&limit=8`,
      { 
        next: { revalidate: 3600 } // Cache for 1 hour
      }
    )

    if (!response.ok) {
      throw new Error('Instagram API request failed')
    }

    const data = await response.json()
    return data.data || mockInstagramData
  } catch (error) {
    console.error('Instagram API error:', error)
    return mockInstagramData
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const limit = parseInt(searchParams.get('limit') || '8')

    const media = await fetchInstagramMedia()
    const limitedMedia = media.slice(0, Math.min(limit, 12))

    return NextResponse.json(
      {
        success: true,
        data: limitedMedia,
        count: limitedMedia.length,
      },
      { 
        status: 200,
        headers: {
          'Cache-Control': 's-maxage=3600, stale-while-revalidate=86400',
        },
      }
    )
  } catch (error) {
    console.error('Instagram endpoint error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch Instagram media' },
      { status: 500 }
    )
  }
} 