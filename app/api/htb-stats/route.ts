import { NextResponse } from 'next/server';

const HTB_USER_ID = process.env.HTB_USER_ID || '2800606';

export async function GET() {
  // HTB doesn't provide public APIs, return profile URL for frontend to handle
  const profileUrl = `https://app.hackthebox.com/profile/${HTB_USER_ID}`;
  
  return NextResponse.json({
    success: true,
    data: {
      id: HTB_USER_ID,
      name: 'SlayerDraco7',
      profileUrl: profileUrl,
      message: 'Visit HackTheBox profile for live stats'
    }
  });
}
