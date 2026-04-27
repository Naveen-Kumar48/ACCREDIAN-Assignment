import { NextRequest, NextResponse } from 'next/server';

type LeadPayload = {
  fullName?: string;
  email?: string;
  company?: string;
  teamSize?: string;
  goal?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: NextRequest) {
  let payload: LeadPayload | null = null;

  try {
    payload = (await request.json()) as LeadPayload;
  } catch {
    return NextResponse.json({ message: 'Invalid request body.' }, { status: 400 });
  }

  const fullName = payload?.fullName?.trim() ?? '';
  const email = payload?.email?.trim() ?? '';
  const company = payload?.company?.trim() ?? '';
  const teamSize = payload?.teamSize?.trim() ?? '';
  const goal = payload?.goal?.trim() ?? '';

  if (!fullName || !email || !company || !teamSize || !goal) {
    return NextResponse.json({ message: 'Please fill in all required fields.' }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ message: 'Please enter a valid work email address.' }, { status: 400 });
  }

  await new Promise((resolve) => setTimeout(resolve, 500));

  return NextResponse.json(
    {
      message: 'Thanks for reaching out. Our enterprise team will contact you shortly.',
      submission: {
        fullName,
        email,
        company,
        teamSize,
        goal,
      },
    },
    { status: 201 },
  );
}