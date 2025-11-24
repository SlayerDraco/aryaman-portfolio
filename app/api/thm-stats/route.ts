import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch('https://tryhackme.com/api/v2/public-profile?username=aryaman007', {
      next: { revalidate: 3600 } // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error('Failed to fetch TryHackMe data');
    }

    const data = await response.json();
    
    return NextResponse.json({
      success: true,
      data: data.data
    });
  } catch (error) {
    console.error('Error fetching TryHackMe stats:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch stats' },
      { status: 500 }
    );
  }
}
