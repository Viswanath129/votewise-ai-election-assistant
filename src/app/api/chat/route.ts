import { NextRequest, NextResponse } from 'next/server';
import { getChatResponse, sanitizeInput } from '@/lib/chatEngine';

// Static export configuration
export const dynamic = 'force-static';
export const revalidate = false;

// Simple in-memory rate limiting
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_REQUESTS = 30;
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute

function checkRateLimit(ip: string): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return { allowed: true, remaining: RATE_LIMIT_REQUESTS - 1 };
  }

  if (record.count >= RATE_LIMIT_REQUESTS) {
    return { allowed: false, remaining: 0 };
  }

  record.count++;
  return { allowed: true, remaining: RATE_LIMIT_REQUESTS - record.count };
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    
    // Check rate limit
    const rateLimit = checkRateLimit(ip);
    if (!rateLimit.allowed) {
      return NextResponse.json(
        { error: 'Rate limit exceeded. Please try again later.' },
        { status: 429 }
      );
    }

    // Parse request body
    const body = await request.json();
    const { prompt } = body;

    // Validate prompt
    if (!prompt || typeof prompt !== 'string' || prompt.trim().length === 0) {
      return NextResponse.json(
        { error: 'Please enter a question' },
        { status: 400 }
      );
    }

    if (prompt.length > 200) {
      return NextResponse.json(
        { error: 'Question is too long (max 200 characters)' },
        { status: 400 }
      );
    }

    // Sanitize input
    const sanitizedPrompt = sanitizeInput(prompt);

    // Generate offline response (instant, no API call needed)
    const { response, confidence, responseTime } = getChatResponse(sanitizedPrompt);

    return NextResponse.json(
      { 
        response, 
        confidence,
        responseTimeMs: Math.round(responseTime)
      },
      { 
        status: 200,
        headers: {
          'X-RateLimit-Remaining': rateLimit.remaining.toString(),
          'X-Response-Time': `${Math.round(responseTime)}ms`,
        }
      }
    );

  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}
