export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface RegistrationStep {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface DocumentItem {
  id: string;
  name: string;
  description: string;
  required: boolean;
}

export interface MythFact {
  id: string;
  myth: string;
  fact: string;
  category: string;
}

export interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  description: string;
}

export interface Language {
  code: string;
  name: string;
  flag: string;
}

export type SupportedLanguage = 'en' | 'hi' | 'te';
