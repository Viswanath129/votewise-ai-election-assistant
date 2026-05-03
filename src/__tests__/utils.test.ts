import { describe, it, expect } from 'vitest';
import { cn, sanitizeInput, validatePrompt } from '@/lib/utils';

describe('cn utility', () => {
  it('merges class names correctly', () => {
    expect(cn('class1', 'class2')).toBe('class1 class2');
    expect(cn('class1', { class2: true, class3: false })).toBe('class1 class2');
  });
});

describe('sanitizeInput', () => {
  it('removes HTML tags', () => {
    expect(sanitizeInput('<script>alert("xss")</script>')).toBe('scriptalert("xss")/script');
    expect(sanitizeInput('<div>content</div>')).toBe('divcontent/div');
  });

  it('trims whitespace', () => {
    expect(sanitizeInput('  hello world  ')).toBe('hello world');
  });

  it('limits to 500 characters', () => {
    const longInput = 'a'.repeat(1000);
    expect(sanitizeInput(longInput).length).toBe(500);
  });
});

describe('validatePrompt', () => {
  it('validates non-empty prompts', () => {
    expect(validatePrompt('hello')).toEqual({ valid: true });
    expect(validatePrompt('  hello  ')).toEqual({ valid: true });
  });

  it('rejects empty prompts', () => {
    expect(validatePrompt('')).toEqual({ 
      valid: false, 
      error: 'Please enter a question' 
    });
    expect(validatePrompt('   ')).toEqual({ 
      valid: false, 
      error: 'Please enter a question' 
    });
  });

  it('rejects too long prompts', () => {
    const longPrompt = 'a'.repeat(501);
    expect(validatePrompt(longPrompt)).toEqual({ 
      valid: false, 
      error: 'Question is too long (max 500 characters)' 
    });
  });
});
