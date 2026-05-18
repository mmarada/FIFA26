import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await fetch('https://gamma-api.polymarket.com/events?search=fifa%20world%20cup&active=true&limit=15', {
      headers: {
        'Accept': 'application/json',
      },
    });
    
    if (!res.ok) {
      throw new Error(`Failed to fetch from Polymarket: ${res.statusText}`);
    }
    
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching Polymarket data:', error);
    return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 });
  }
}
