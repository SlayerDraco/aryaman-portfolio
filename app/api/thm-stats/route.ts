import { NextResponse } from 'next/server';

export async function GET() {
//   console.log('🚀 TryHackMe Stats API Called');
  
  try {
    // console.log('📡 Fetching TryHackMe stats...');
    const response = await fetch('https://tryhackme.com/api/v2/public-profile?username=aryaman007', {
      next: { revalidate: 3600 } // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error(`TryHackMe API returned ${response.status}`);
    }

    const data = await response.json();
    // console.log('✅ TryHackMe data fetched successfully');

    return NextResponse.json({
      success: true,
      thm: data.data
    });

  } catch (error) {
    console.error('💥 Error fetching TryHackMe stats:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch TryHackMe stats' },
      { status: 500 }
    );
  }
}
