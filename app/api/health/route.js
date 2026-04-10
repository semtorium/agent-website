import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ 
    status: 'online',
    agent: 'Hermes',
    timestamp: new Date().toISOString()
  });
}
