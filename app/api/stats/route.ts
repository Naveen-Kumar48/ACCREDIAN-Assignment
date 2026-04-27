import { NextResponse } from 'next/server';
import { trackRecordStats } from '@/lib/site-data';

export async function GET() {
  return NextResponse.json({
    headline: 'Our Track Record',
    description: 'The numbers behind our success',
    items: trackRecordStats,
  });
}