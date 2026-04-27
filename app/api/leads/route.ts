import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // In a real app, you would save this to a database (e.g., Prisma + PostgreSql)
    // For this assignment, we'll simulate a successful storage and log the data
    console.log('Lead submission received:', data);

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    return NextResponse.json(
      { message: 'Lead captured successfully!', leadId: Math.random().toString(36).substr(2, 9) },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to submit the form. Please try again.' },
      { status: 400 }
    );
  }
}