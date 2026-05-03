import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ChatAssistant from '@/components/sections/ChatAssistant';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { ThemeProvider } from '@/contexts/ThemeContext';

// Mock fetch
const mockFetch = vi.fn();
global.fetch = mockFetch;

const renderWithProviders = (component: React.ReactNode) => {
  return render(
    <ThemeProvider>
      <LanguageProvider>{component}</LanguageProvider>
    </ThemeProvider>
  );
};

describe('ChatAssistant', () => {
  it('renders welcome message', () => {
    renderWithProviders(<ChatAssistant />);
    expect(screen.getByText(/Hello! I am VoteWise AI/i)).toBeInTheDocument();
  });

  it('renders input placeholder', () => {
    renderWithProviders(<ChatAssistant />);
    expect(screen.getByPlaceholderText(/Ask about elections/i)).toBeInTheDocument();
  });

  it('renders quick questions', () => {
    renderWithProviders(<ChatAssistant />);
    expect(screen.getByText(/How do I register to vote/i)).toBeInTheDocument();
  });

  it('blocks empty messages', async () => {
    renderWithProviders(<ChatAssistant />);
    const input = screen.getByPlaceholderText(/Ask about elections/i);
    const sendButton = screen.getByLabelText(/Send/i);

    fireEvent.change(input, { target: { value: '   ' } });
    fireEvent.click(sendButton);

    // Should not call fetch for empty messages
    await waitFor(() => {
      expect(mockFetch).not.toHaveBeenCalled();
    });
  });
});
