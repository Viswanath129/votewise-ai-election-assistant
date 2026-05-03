'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { faqData } from '@/data/faqData';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function FAQSection() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<string | null>(faqData[0].id);

  const toggleFAQ = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <section
      id="faq-section"
      className="py-20 bg-slate-50 dark:bg-slate-900"
      aria-label="Frequently Asked Questions"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {t.sections.faq.title}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {t.sections.faq.subtitle}
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqData.map((faq) => (
            <Card
              key={faq.id}
              className="shadow-sm hover:shadow-md transition-shadow border-slate-200 dark:border-slate-800 overflow-hidden"
            >
              <CardContent className="p-0">
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                  aria-expanded={openIndex === faq.id}
                  aria-controls={`faq-content-${faq.id}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center flex-shrink-0">
                      <HelpCircle className="w-5 h-5" />
                    </div>
                    <span className="text-lg font-medium text-slate-900 dark:text-white">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={cn(
                      'w-5 h-5 text-slate-400 transition-transform duration-200',
                      openIndex === faq.id && 'rotate-180'
                    )}
                  />
                </button>
                <div
                  id={`faq-content-${faq.id}`}
                  className={cn(
                    'overflow-hidden transition-all duration-300',
                    openIndex === faq.id ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                  )}
                >
                  <div className="px-6 pb-6 pl-20">
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {faq.answer}
                    </p>
                    <span className="inline-block mt-3 px-3 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-full">
                      {faq.category}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
