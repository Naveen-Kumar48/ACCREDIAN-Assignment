import { NextResponse } from 'next/server';
import { partnerTestimonials } from '@/lib/site-data';

export async function GET() {
  return NextResponse.json({
    headline: 'Testimonials from Our Partners',
    description: 'What our clients are saying',
    items: partnerTestimonials,
  });
}