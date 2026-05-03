import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import Home from '@/app/page';
import * as framerMotion from 'framer-motion';

// Mock framer-motion to avoid animation issues in tests
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    span: ({ children, ...props }: any) => <span {...props}>{children}</span>,
    h1: ({ children, ...props }: any) => <h1 {...props}>{children}</h1>,
    h2: ({ children, ...props }: any) => <h2 {...props}>{children}</h2>,
    p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
  },
  AnimatePresence: ({ children }: any) => <>{children}</>,
}));

// Mock language context
vi.mock('@/contexts/LanguageContext', () => ({
  useLanguage: () => ({
    t: {
      chat: {
        welcomeMessage: 'Hello! I can help you with election-related questions.',
        placeholder: 'Ask about voting...',
        sendButton: 'Send'
      }
    },
    language: 'en',
    setLanguage: vi.fn()
  })
}));

// Mock chat engine
vi.mock('@/lib/chatEngine', () => ({
  getChatResponse: (input: string) => ({
    response: `Response to: ${input}`,
    matchedFAQ: null,
    confidence: 0.8,
    responseTime: 50
  }),
  sanitizeInput: (input: string) => input.replace(/[<>]/g, '').trim()
}));

describe('Homepage Tests', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders hero section with correct content', () => {
    render(<Home />);
    
    // Check for main heading
    expect(screen.getByText(/Understand Elections/i)).toBeInTheDocument();
    expect(screen.getByText(/Vote Smarter/i)).toBeInTheDocument();
    
    // Check for trust badge
    expect(screen.getByText(/🇮🇳/)).toBeInTheDocument();
    expect(screen.getByText(/Trusted Civic Assistant/i)).toBeInTheDocument();
    
    // Check for CTA buttons
    expect(screen.getByText(/Start Asking/i)).toBeInTheDocument();
    expect(screen.getByText(/Explore Guide/i)).toBeInTheDocument();
  });

  it('renders trust strip with all features', () => {
    render(<Home />);
    
    // Check trust features
    expect(screen.getByText(/Fast Responses/i)).toBeInTheDocument();
    expect(screen.getByText(/Multi-language/i)).toBeInTheDocument();
    expect(screen.getByText(/Beginner Friendly/i)).toBeInTheDocument();
    expect(screen.getByText(/Secure Platform/i)).toBeInTheDocument();
    expect(screen.getByText(/Privacy First/i)).toBeInTheDocument();
    expect(screen.getByText(/Instant Access/i)).toBeInTheDocument();
  });

  it('renders feature cards section', () => {
    render(<Home />);
    
    // Check feature cards
    expect(screen.getByText(/Ask VoteWise AI/i)).toBeInTheDocument();
    expect(screen.getByText(/Registration Guide/i)).toBeInTheDocument();
    expect(screen.getByText(/Required Documents/i)).toBeInTheDocument();
    expect(screen.getByText(/Election Timeline/i)).toBeInTheDocument();
    expect(screen.getByText(/Myth vs Fact/i)).toBeInTheDocument();
    expect(screen.getByText(/Citizen Rights/i)).toBeInTheDocument();
  });

  it('renders chat assistant section', () => {
    render(<Home />);
    
    // Check chat section
    expect(screen.getByText(/Get Instant Answers/i)).toBeInTheDocument();
    expect(screen.getByText(/Ask anything about voter registration/i)).toBeInTheDocument();
    expect(screen.getByText(/Ask VoteWise AI/i)).toBeInTheDocument();
    
    // Check for input field and send button
    const input = screen.getByPlaceholderText(/Ask about voting/i);
    const sendButton = screen.getByRole('button', { name: /Send/i });
    
    expect(input).toBeInTheDocument();
    expect(sendButton).toBeInTheDocument();
  });

  it('chat functionality works correctly', async () => {
    render(<Home />);
    
    const input = screen.getByPlaceholderText(/Ask about voting/i);
    const sendButton = screen.getByRole('button', { name: /Send/i });
    
    // Type a question
    fireEvent.change(input, { target: { value: 'How do I register to vote?' } });
    expect(input).toHaveValue('How do I register to vote?');
    
    // Send the message
    fireEvent.click(sendButton);
    
    // Wait for response
    await waitFor(() => {
      expect(screen.getByText(/Response to: How do I register to vote\?/i)).toBeInTheDocument();
    });
  });

  it('quick question buttons work', () => {
    render(<Home />);
    
    // Find quick question buttons
    const quickQuestions = [
      'How do I register to vote?',
      'What documents are required?',
      'What is an EVM?',
      'How does vote counting work?'
    ];
    
    quickQuestions.forEach(question => {
      const button = screen.getByText(question);
      expect(button).toBeInTheDocument();
      
      // Click the button
      fireEvent.click(button);
      
      // Check if input is populated
      const input = screen.getByPlaceholderText(/Ask about voting/i);
      expect(input).toHaveValue(question);
    });
  });

  it('scroll navigation works', () => {
    // Mock scrollIntoView
    const scrollMock = vi.fn();
    Element.prototype.scrollIntoView = scrollMock;
    
    render(<Home />);
    
    // Test CTA button scroll
    const startButton = screen.getByText(/Start Asking/i);
    fireEvent.click(startButton);
    
    expect(scrollMock).toHaveBeenCalledWith({ behavior: 'smooth' });
  });

  it('proper heading hierarchy for accessibility', () => {
    render(<Home />);
    
    // Check for proper heading structure
    const h1Elements = screen.getAllByRole('heading', { level: 1 });
    const h2Elements = screen.getAllByRole('heading', { level: 2 });
    
    expect(h1Elements.length).toBeGreaterThan(0);
    expect(h2Elements.length).toBeGreaterThan(0);
  });

  it('all interactive elements are keyboard accessible', () => {
    render(<Home />);
    
    // Check buttons are focusable
    const buttons = screen.getAllByRole('button');
    buttons.forEach(button => {
      expect(button).toHaveAttribute('tabIndex', '0');
    });
    
    // Check input is focusable
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('tabIndex', '0');
  });

  it('renders stats with correct numbers', () => {
    render(<Home />);
    
    // Check for stats
    expect(screen.getByText('10+')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('50+')).toBeInTheDocument();
    
    expect(screen.getByText(/Topics Covered/i)).toBeInTheDocument();
    expect(screen.getByText(/Languages/i)).toBeInTheDocument();
    expect(screen.getByText(/Instant Answers/i)).toBeInTheDocument();
  });

  it('has proper ARIA labels and roles', () => {
    render(<Home />);
    
    // Check for ARIA labels
    const chatSection = document.getElementById('chat-section');
    expect(chatSection).toHaveAttribute('aria-label', 'AI Chat Assistant');
    
    // Check for proper roles
    const main = screen.getByRole('main');
    expect(main).toBeInTheDocument();
  });

  it('input validation works', () => {
    render(<Home />);
    
    const input = screen.getByPlaceholderText(/Ask about voting/i);
    const sendButton = screen.getByRole('button', { name: /Send/i });
    
    // Test empty input
    fireEvent.click(sendButton);
    expect(screen.queryByText(/Response to:/i)).not.toBeInTheDocument();
    
    // Test valid input
    fireEvent.change(input, { target: { value: 'Valid question' } });
    fireEvent.click(sendButton);
    
    // Should show response
    expect(screen.getByText(/Response to: Valid question/i)).toBeInTheDocument();
  });
});
