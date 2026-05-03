// VoteWise AI - Security Module
// Enhanced security for input sanitization and safe rendering

// XSS Protection - Enhanced input sanitization
export function sanitizeInput(input: string): string {
  if (!input || typeof input !== 'string') {
    return '';
  }

  return input
    // Remove HTML tags and attributes
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<[^>]*>/g, '')
    // Remove potentially dangerous characters
    .replace(/[<>'"&]/g, '')
    // Remove JavaScript event handlers
    .replace(/on\w+\s*=/gi, '')
    // Remove javascript: protocol
    .replace(/javascript:/gi, '')
    // Remove data: URLs
    .replace(/data:(?!image\/)/gi, '')
    // Remove vbscript: protocol
    .replace(/vbscript:/gi, '')
    // Remove file: protocol
    .replace(/file:/gi, '')
    // Limit length
    .slice(0, 500)
    .trim();
}

// Safe HTML rendering for chat responses
export function safeHtmlRender(text: string): string {
  if (!text || typeof text !== 'string') {
    return '';
  }

  return text
    // Allow basic formatting but remove dangerous elements
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;')
    // Convert line breaks to <br> for display
    .replace(/\n/g, '<br>')
    // Convert URLs to safe links
    .replace(
      /(https?:\/\/[^\s<]+)/g,
      '<a href="$1" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">$1</a>'
    );
}

// Rate limiting for chat requests
class RateLimiter {
  private requests: Map<string, number[]> = new Map();
  private readonly maxRequests: number;
  private readonly windowMs: number;

  constructor(maxRequests = 10, windowMs = 60000) {
    this.maxRequests = maxRequests;
    this.windowMs = windowMs;
  }

  isAllowed(identifier: string): boolean {
    const now = Date.now();
    const windowStart = now - this.windowMs;

    // Get existing requests for this identifier
    let requests = this.requests.get(identifier) || [];
    
    // Remove old requests outside the window
    requests = requests.filter(timestamp => timestamp > windowStart);
    
    // Check if limit exceeded
    if (requests.length >= this.maxRequests) {
      return false;
    }
    
    // Add current request
    requests.push(now);
    this.requests.set(identifier, requests);
    
    return true;
  }

  reset(identifier: string): void {
    this.requests.delete(identifier);
  }
}

// Global rate limiter instance
export const chatRateLimiter = new RateLimiter(20, 60000); // 20 requests per minute

// Content Security Policy headers for Next.js
export const cspHeaders = {
  'Content-Security-Policy': [
    "default-src 'self'",
    "script-src 'self' 'unsafe-eval' 'unsafe-inline'",
    "style-src 'self' 'unsafe-inline' fonts.googleapis.com",
    "font-src 'self' fonts.gstatic.com",
    "img-src 'self' data: https:",
    "connect-src 'self'",
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "form-action 'self'"
  ].join('; '),
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()'
};

// Input validation for different types
export const validators = {
  // Validate name input
  name: (input: string): boolean => {
    if (!input || typeof input !== 'string') return false;
    const sanitized = sanitizeInput(input);
    return sanitized.length >= 2 && sanitized.length <= 50 && /^[a-zA-Z\s]+$/.test(sanitized);
  },

  // Validate email input
  email: (input: string): boolean => {
    if (!input || typeof input !== 'string') return false;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input.trim());
  },

  // Validate phone number (Indian format)
  phone: (input: string): boolean => {
    if (!input || typeof input !== 'string') return false;
    const phoneRegex = /^[6-9]\d{9}$/;
    return phoneRegex.test(input.replace(/\D/g, ''));
  },

  // Validate voter ID format
  voterId: (input: string): boolean => {
    if (!input || typeof input !== 'string') return false;
    const sanitized = sanitizeInput(input.toUpperCase());
    return /^[A-Z]{3}[0-9]{7}$/.test(sanitized);
  },

  // Validate general text input
  text: (input: string, minLength = 1, maxLength = 500): boolean => {
    if (!input || typeof input !== 'string') return false;
    const sanitized = sanitizeInput(input);
    return sanitized.length >= minLength && sanitized.length <= maxLength;
  }
};

// Error handling for security events
export class SecurityLogger {
  private static logs: Array<{
    timestamp: number;
    type: string;
    message: string;
    severity: 'low' | 'medium' | 'high';
  }> = [];

  static log(type: string, message: string, severity: 'low' | 'medium' | 'high' = 'medium'): void {
    const logEntry = {
      timestamp: Date.now(),
      type,
      message,
      severity
    };
    
    this.logs.push(logEntry);
    
    // In production, send to logging service
    if (process.env.NODE_ENV === 'production') {
      console.warn('Security Event:', logEntry);
    }
  }

  static getLogs(): typeof this.logs {
    return [...this.logs];
  }

  static clearLogs(): void {
    this.logs = [];
  }
}

// Safe JSON parsing
export function safeJsonParse<T>(jsonString: string, fallback: T): T {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    SecurityLogger.log('JSON_PARSE_ERROR', `Failed to parse JSON: ${jsonString}`, 'medium');
    return fallback;
  }
}

// Generate secure random string
export function generateSecureRandom(length = 32): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  const array = new Uint32Array(length);
  crypto.getRandomValues(array);
  
  for (let i = 0; i < length; i++) {
    result += chars[array[i] % chars.length];
  }
  
  return result;
}

// Check for suspicious patterns in input
export function detectSuspiciousContent(input: string): boolean {
  const suspiciousPatterns = [
    /<script/i,
    /javascript:/i,
    /on\w+\s*=/i,
    /eval\s*\(/i,
    /document\.cookie/i,
    /window\.location/i,
    /document\.write/i,
    /innerHTML/i,
    /outerHTML/i
  ];

  return suspiciousPatterns.some(pattern => pattern.test(input));
}

// Environment variable validation
export function validateEnvironment(): boolean {
  const requiredEnvVars: string[] = [
    // Add any required environment variables here
  ];

  const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);
  
  if (missingVars.length > 0) {
    SecurityLogger.log('ENV_VALIDATION_ERROR', `Missing env vars: ${missingVars.join(', ')}`, 'high');
    return false;
  }

  return true;
}

// Export security utilities
export const security = {
  sanitizeInput,
  safeHtmlRender,
  validators,
  detectSuspiciousContent,
  generateSecureRandom,
  validateEnvironment,
  SecurityLogger
};
