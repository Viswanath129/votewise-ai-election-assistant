// VoteWise AI - Offline Smart Election Chat Engine
// No external API required - 100% local keyword matching

import { electionFAQs, faqsByCategory, getQuickResponse, FAQItem } from '@/data/faq';

// Sanitize user input
export function sanitizeInput(input: string): string {
  return input
    .replace(/[<>]/g, '') // Remove HTML tags
    .trim()
    .slice(0, 200); // Limit to 200 characters
}

// Tokenize input into words
function tokenize(input: string): string[] {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ') // Remove special chars
    .split(/\s+/)
    .filter(word => word.length > 1); // Skip single chars
}

// Calculate match score between input and FAQ
function calculateMatchScore(input: string, faq: FAQItem): number {
  const inputTokens = tokenize(input);
  const inputString = input.toLowerCase();
  let score = 0;

  // Direct substring match in question (highest priority)
  if (faq.question.toLowerCase().includes(inputString)) {
    score += 100;
  }

  // Keyword matches
  for (const keyword of faq.keywords) {
    // Exact keyword match
    if (inputString.includes(keyword.toLowerCase())) {
      score += 20;
    }
    
    // Partial keyword match
    const keywordTokens = tokenize(keyword);
    for (const token of keywordTokens) {
      if (inputTokens.includes(token)) {
        score += 10;
      }
    }
  }

  // Question word overlap
  const questionTokens = tokenize(faq.question);
  for (const token of inputTokens) {
    if (questionTokens.includes(token)) {
      score += 5;
    }
  }

  // Answer content match (lower weight)
  const answerTokens = tokenize(faq.answer);
  for (const token of inputTokens) {
    if (answerTokens.includes(token)) {
      score += 2;
    }
  }

  return score;
}

// Detect intent category from input
function detectCategory(input: string): string | null {
  const inputLower = input.toLowerCase();
  
  const categoryKeywords: Record<string, string[]> = {
    'voter registration': ['register', 'registration', 'enroll', 'form 6', 'new voter', 'sign up', 'join'],
    'required documents': ['document', 'proof', 'paper', 'aadhaar', 'id card', 'address proof', 'photo'],
    'EVM': ['evm', 'machine', 'electronic', 'voting machine', 'button', 'press'],
    'NOTA': ['nota', 'none of the above', 'reject', 'no candidate'],
    'vote counting': ['counting', 'result', 'tally', 'count vote', 'who won', 'winner'],
    'election timeline': ['timeline', 'schedule', 'when', 'date', 'time', 'phase', 'campaign'],
    'age eligibility': ['age', '18', 'years', 'old', 'young', 'minor', 'adult', 'senior'],
    'voter ID correction': ['correct', 'update', 'change', 'mistake', 'form 8', 'edit', 'modify'],
    'polling booth info': ['booth', 'polling station', 'where to vote', 'my booth', 'voting center'],
    'myths vs facts': ['myth', 'fact', 'rumor', 'true', 'false', 'misconception', 'believe'],
  };

  let bestCategory = null;
  let maxMatches = 0;

  for (const [category, keywords] of Object.entries(categoryKeywords)) {
    const matches = keywords.filter(kw => inputLower.includes(kw)).length;
    if (matches > maxMatches && matches > 0) {
      maxMatches = matches;
      bestCategory = category;
    }
  }

  return bestCategory;
}

// Detect if input is a greeting, thanks, or help request
function detectIntent(input: string): 'greeting' | 'thanks' | 'goodbye' | 'help' | 'question' | 'unknown' {
  const inputLower = input.toLowerCase().trim();
  
  // Greetings
  const greetings = ['hello', 'hi', 'hey', 'namaste', 'good morning', 'good afternoon', 'good evening', 'howdy', 'hola', 'greetings'];
  if (greetings.some(g => inputLower.includes(g))) {
    return 'greeting';
  }
  
  // Thanks
  const thanks = ['thank', 'thanks', 'thank you', 'ty', 'gracias', 'dhanyavad', 'shukriya', 'appreciate'];
  if (thanks.some(t => inputLower.includes(t))) {
    return 'thanks';
  }
  
  // Goodbye
  const goodbyes = ['bye', 'goodbye', 'see you', 'take care', 'cya', 'later', 'exit', 'quit', 'close'];
  if (goodbyes.some(g => inputLower.includes(g))) {
    return 'goodbye';
  }
  
  // Help
  const help = ['help', 'what can you do', 'what do you know', 'capabilities', 'features', 'commands', 'menu'];
  if (help.some(h => inputLower.includes(h))) {
    return 'help';
  }
  
  // Check if it's a question
  const questionWords = ['what', 'how', 'when', 'where', 'why', 'who', 'which', 'can', 'do', 'is', 'are', 'should', '?'];
  if (questionWords.some(q => inputLower.includes(q)) || inputLower.length > 5) {
    return 'question';
  }
  
  return 'unknown';
}

// Generate smart fallback with suggestions
function generateFallback(input: string, detectedCategory: string | null): string {
  const inputLower = input.toLowerCase();
  
  // Check for related topics
  let suggestions: string[] = [];
  
  if (inputLower.includes('vote') && !inputLower.includes('register')) {
    suggestions.push('How do I register to vote?');
  }
  if (inputLower.includes('document') || inputLower.includes('paper')) {
    suggestions.push('What documents are required for voter registration?');
  }
  if (inputLower.includes('machine') || inputLower.includes('evm')) {
    suggestions.push('What is an EVM?');
  }
  if (inputLower.includes('nota') || inputLower.includes('reject')) {
    suggestions.push('What is NOTA?');
  }
  if (inputLower.includes('count') || inputLower.includes('result')) {
    suggestions.push('How does vote counting work?');
  }
  if (inputLower.includes('booth') || inputLower.includes('station')) {
    suggestions.push('How do I find my polling booth?');
  }
  if (inputLower.includes('age') || inputLower.includes('old')) {
    suggestions.push('What is the minimum voting age?');
  }
  
  // Default suggestions if none matched
  if (suggestions.length === 0) {
    suggestions = [
      'How do I register to vote?',
      'What documents are required?',
      'What is an EVM?',
      'How do I find my polling booth?'
    ];
  }
  
  // Category-specific response
  let categoryHint = '';
  if (detectedCategory && detectedCategory !== 'unknown') {
    const categoryFAQs = faqsByCategory[detectedCategory as keyof typeof faqsByCategory];
    if (categoryFAQs && categoryFAQs.length > 0) {
      const randomFAQ = categoryFAQs[Math.floor(Math.random() * Math.min(3, categoryFAQs.length))];
      suggestions.unshift(randomFAQ.question);
    }
    categoryHint = `I see you're asking about ${detectedCategory.replace(/-/g, ' ')}. `;
  }
  
  const responses = [
    `I don't have specific information about "${input}". ${categoryHint}Try asking:\n• ${suggestions[0]}\n• ${suggestions[1]}\n• ${suggestions[2]}`,
    `I'm not sure about that. ${categoryHint}Here are some related questions:\n• ${suggestions[0]}\n• ${suggestions[1]}`,
    `That topic isn't in my knowledge base. ${categoryHint}I can help with:\n• ${suggestions[0]}\n• ${suggestions[1]}\n• ${suggestions[2]}\n\nAsk me about voter registration, documents, EVMs, polling booths, or election procedures!`
  ];
  
  return responses[Math.floor(Math.random() * responses.length)];
}

// Main chat response function
export function getChatResponse(input: string): {
  response: string;
  matchedFAQ: FAQItem | null;
  confidence: number;
  responseTime: number;
} {
  const startTime = performance.now();
  
  // Sanitize input
  const cleanInput = sanitizeInput(input);
  
  if (!cleanInput) {
    return {
      response: "Please ask a question about elections, voter registration, or voting procedures.",
      matchedFAQ: null,
      confidence: 0,
      responseTime: performance.now() - startTime
    };
  }
  
  // Check for special intents
  const intent = detectIntent(cleanInput);
  
  if (intent === 'greeting') {
    return {
      response: getQuickResponse('greeting'),
      matchedFAQ: null,
      confidence: 1,
      responseTime: performance.now() - startTime
    };
  }
  
  if (intent === 'thanks') {
    return {
      response: getQuickResponse('thanks'),
      matchedFAQ: null,
      confidence: 1,
      responseTime: performance.now() - startTime
    };
  }
  
  if (intent === 'goodbye') {
    return {
      response: getQuickResponse('goodbye'),
      matchedFAQ: null,
      confidence: 1,
      responseTime: performance.now() - startTime
    };
  }
  
  if (intent === 'help') {
    return {
      response: getQuickResponse('help'),
      matchedFAQ: null,
      confidence: 1,
      responseTime: performance.now() - startTime
    };
  }
  
  // Find best matching FAQ
  let bestMatch: FAQItem | null = null;
  let highestScore = 0;
  
  for (const faq of electionFAQs) {
    const score = calculateMatchScore(cleanInput, faq);
    if (score > highestScore) {
      highestScore = score;
      bestMatch = faq;
    }
  }
  
  // Determine confidence and response
  const confidence = highestScore / 100; // Normalize score
  const responseTime = performance.now() - startTime;
  
  if (bestMatch && highestScore >= 15) {
    // Good match found
    let response = bestMatch.answer;
    
    // Add related questions if confidence is medium
    if (highestScore < 50 && bestMatch.relatedQuestions && bestMatch.relatedQuestions.length > 0) {
      response += '\n\nRelated questions:\n';
      bestMatch.relatedQuestions.slice(0, 2).forEach((q, i) => {
        response += `• ${q}\n`;
      });
    }
    
    return {
      response,
      matchedFAQ: bestMatch,
      confidence,
      responseTime
    };
  } else {
    // No good match - generate fallback
    const category = detectCategory(cleanInput);
    const fallbackResponse = generateFallback(cleanInput, category);
    
    return {
      response: fallbackResponse,
      matchedFAQ: null,
      confidence: 0,
      responseTime
    };
  }
}

// Get suggestions for a partial input
export function getSuggestions(input: string, maxSuggestions: number = 5): string[] {
  const cleanInput = sanitizeInput(input).toLowerCase();
  
  if (cleanInput.length < 2) {
    return [];
  }
  
  const scored: Array<{ question: string; score: number }> = [];
  
  for (const faq of electionFAQs) {
    const score = calculateMatchScore(cleanInput, faq);
    if (score > 10) {
      scored.push({ question: faq.question, score });
    }
  }
  
  // Sort by score and return top suggestions
  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, maxSuggestions)
    .map(s => s.question);
}

// Get category-specific FAQs
export function getFAQsByCategory(category: string): FAQItem[] {
  return faqsByCategory[category as keyof typeof faqsByCategory] || [];
}

// Get all unique categories
export function getCategories(): string[] {
  return Object.keys(faqsByCategory);
}

// Quick match for exact or near-exact queries
export function quickMatch(input: string): FAQItem | null {
  const cleanInput = sanitizeInput(input).toLowerCase();
  
  for (const faq of electionFAQs) {
    const questionLower = faq.question.toLowerCase();
    
    // Exact match
    if (questionLower === cleanInput) {
      return faq;
    }
    
    // Contains full query
    if (questionLower.includes(cleanInput) && cleanInput.length > 10) {
      return faq;
    }
    
    // Check keywords for exact match
    if (faq.keywords.some(kw => kw.toLowerCase() === cleanInput)) {
      return faq;
    }
  }
  
  return null;
}
