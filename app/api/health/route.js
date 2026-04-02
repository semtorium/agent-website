import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ 
    status: 'online',
    agent: 'SemtoriumAgent',
    timestamp: new Date().toISOString()
  });
}
