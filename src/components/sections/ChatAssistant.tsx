'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { ChatMessage } from '@/types';
import { Send, Bot, User, Sparkles, Zap, MessageSquare, Loader2 } from 'lucide-react';
import { getChatResponse, sanitizeInput } from '@/lib/chatEngine';

export default function ChatAssistant() {
  const { t } = useLanguage();
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content: t.chat.welcomeMessage,
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate input
    if (!input || input.trim().length === 0) {
      return;
    }

    if (input.length > 200) {
      return;
    }

    const sanitizedInput = sanitizeInput(input);
    if (!sanitizedInput) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: sanitizedInput,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Use local chat engine - instant offline response
      const { response } = getChatResponse(sanitizedInput);

      const assistantMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again with a different question.',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
      inputRef.current?.focus();
    }
  };

  const quickQuestions = [
    'How do I register to vote?',
    'What documents are required?',
    'What is an EVM?',
    'How does vote counting work?',
  ];

  // Simulate typing effect
  const [typingMessage, setTypingMessage] = useState<string | null>(null);

  return (
    <section
      id="chat-section"
      className="py-20 bg-white dark:bg-slate-950"
      aria-label="AI Chat Assistant"
    >
      <div className="container-premium">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2563EB]/10 text-[#2563EB] text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            Ask VoteWise AI
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] dark:text-white mb-4 tracking-tight">
            Get Instant Answers
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Ask anything about voter registration, documents, EVMs, or your voting rights.
            <span className="block mt-1 text-[#2563EB] font-medium">No waiting. No API calls. Just answers.</span>
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Card className="shadow-2xl border-slate-200/50 dark:border-slate-800/50 overflow-hidden bg-white/80 dark:bg-[#1E293B]/80 backdrop-blur-xl">
            <CardContent className="p-0">
              {/* Messages Container */}
              <div 
                className="h-[420px] overflow-y-auto p-5 space-y-4 bg-gradient-to-b from-slate-50/80 to-white dark:from-slate-900/80 dark:to-[#0F172A]"
                role="log"
                aria-live="polite"
                aria-label="Chat messages"
              >
                <AnimatePresence mode="popLayout">
                  {messages.map((message, index) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] as const }}
                      className={`flex items-start gap-3 ${
                        message.role === 'user' ? 'flex-row-reverse' : ''
                      }`}
                    >
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md ${
                          message.role === 'user'
                            ? 'bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] text-white'
                            : 'bg-gradient-to-br from-[#10B981] to-[#059669] text-white'
                        }`}
                      >
                        {message.role === 'user' ? (
                          <User className="w-4 h-4" />
                        ) : (
                          <Sparkles className="w-4 h-4" />
                        )}
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.01 }}
                        className={`max-w-[85%] rounded-2xl px-4 py-3 shadow-sm ${
                          message.role === 'user'
                            ? 'bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] text-white rounded-br-sm'
                            : 'bg-white dark:bg-[#1E293B] text-slate-900 dark:text-white rounded-bl-sm border border-slate-200/60 dark:border-slate-700/60'
                        }`}
                      >
                        <p className="text-sm leading-relaxed whitespace-pre-line">{message.content}</p>
                        <span className="text-[10px] opacity-60 mt-1 block">
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </motion.div>
                    </motion.div>
                  ))}
                </AnimatePresence>
                
                {isLoading && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#10B981] to-[#059669] text-white flex items-center justify-center flex-shrink-0 shadow-md">
                      <Sparkles className="w-4 h-4 animate-pulse" />
                    </div>
                    <div className="bg-white dark:bg-[#1E293B] rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm border border-slate-200/60 dark:border-slate-700/60">
                      <div className="flex gap-1.5 items-center">
                        <span className="w-2 h-2 bg-[#2563EB] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                        <span className="w-2 h-2 bg-[#2563EB] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                        <span className="w-2 h-2 bg-[#2563EB] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                      </div>
                    </div>
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Quick Questions */}
              <div className="px-4 py-3 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">Quick questions:</p>
                <div className="flex flex-wrap gap-2">
                  {quickQuestions.map((q) => (
                    <button
                      key={q}
                      onClick={() => {
                        setInput(q);
                        inputRef.current?.focus();
                      }}
                      className="text-xs px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>

              {/* Input Form */}
              <form
                onSubmit={handleSubmit}
                className="p-4 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950"
              >
                <div className="flex gap-2">
                  <Input
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={t.chat.placeholder}
                    className="flex-1"
                    maxLength={500}
                    aria-label="Ask a question"
                  />
                  <Button
                    type="submit"
                    disabled={isLoading || !input.trim()}
                    className="bg-blue-600 hover:bg-blue-700"
                    aria-label={t.chat.sendButton}
                  >
                    {isLoading ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <Send className="w-4 h-4" />
                    )}
                  </Button>
                </div>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <span className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                    <Zap className="w-3 h-3 text-[#F59E0B]" />
                    Instant responses
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                    <MessageSquare className="w-3 h-3 text-[#10B981]" />
                    50+ FAQs
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                    <Sparkles className="w-3 h-3 text-[#2563EB]" />
                    No API needed
                  </span>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
