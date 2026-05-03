'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { mythFactData } from '@/data/faqData';
import { XCircle, CheckCircle, RefreshCw } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function MythFact() {
  const { t } = useLanguage();
  const [revealed, setRevealed] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const revealFact = (id: string) => {
    if (!revealed.includes(id)) {
      setRevealed([...revealed, id]);
    }
  };

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % mythFactData.length);
  };

  const reset = () => {
    setRevealed([]);
    setCurrentIndex(0);
  };

  const currentMyth = mythFactData[currentIndex];
  const isRevealed = revealed.includes(currentMyth.id);

  return (
    <section
      id="myth-fact-section"
      className="py-20 bg-white dark:bg-slate-950"
      aria-label="Myth versus Fact"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {t.sections.mythFact.title}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {t.sections.mythFact.subtitle}
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Progress */}
          <div className="flex justify-center gap-2 mb-8">
            {mythFactData.map((_, index) => (
              <div
                key={index}
                className={cn(
                  'w-2 h-2 rounded-full transition-all',
                  index === currentIndex
                    ? 'bg-blue-600 w-8'
                    : revealed.includes(mythFactData[index].id)
                    ? 'bg-green-500'
                    : 'bg-slate-300 dark:bg-slate-700'
                )}
              />
            ))}
          </div>

          {/* Card */}
          <Card className="shadow-xl border-slate-200 dark:border-slate-800 overflow-hidden">
            <CardContent className="p-8">
              <div className="space-y-6">
                {/* Myth Section */}
                <div className="p-6 bg-red-50 dark:bg-red-900/20 rounded-xl border border-red-200 dark:border-red-800">
                  <div className="flex items-center gap-3 mb-3">
                    <XCircle className="w-6 h-6 text-red-600 dark:text-red-400" />
                    <span className="text-sm font-semibold text-red-700 dark:text-red-400 uppercase tracking-wide">
                      {t.common.myth}
                    </span>
                  </div>
                  <p className="text-lg text-slate-900 dark:text-white font-medium">
                    {currentMyth.myth}
                  </p>
                </div>

                {/* Fact Section */}
                <div
                  className={cn(
                    'p-6 rounded-xl border transition-all duration-500',
                    isRevealed
                      ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 opacity-100'
                      : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 opacity-50'
                  )}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle
                      className={cn(
                        'w-6 h-6',
                        isRevealed
                          ? 'text-green-600 dark:text-green-400'
                          : 'text-slate-400'
                      )}
                    />
                    <span
                      className={cn(
                        'text-sm font-semibold uppercase tracking-wide',
                        isRevealed
                          ? 'text-green-700 dark:text-green-400'
                          : 'text-slate-500'
                      )}
                    >
                      {t.common.fact}
                    </span>
                  </div>
                  <p
                    className={cn(
                      'text-lg font-medium',
                      isRevealed
                        ? 'text-slate-900 dark:text-white'
                        : 'text-slate-400'
                    )}
                  >
                    {isRevealed
                      ? currentMyth.fact
                      : 'Click "Reveal Fact" to learn the truth'}
                  </p>
                </div>

                {/* Category */}
                <div className="text-center">
                  <span className="px-4 py-1.5 text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-full">
                    {currentMyth.category}
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex justify-between items-center mt-8 pt-6 border-t border-slate-200 dark:border-slate-800">
                <Button
                  variant="outline"
                  onClick={reset}
                  className="flex items-center gap-2"
                >
                  <RefreshCw className="w-4 h-4" />
                  Reset
                </Button>

                {!isRevealed ? (
                  <Button
                    onClick={() => revealFact(currentMyth.id)}
                    className="bg-green-600 hover:bg-green-700 px-8"
                  >
                    Reveal Fact
                  </Button>
                ) : (
                  <Button
                    onClick={nextCard}
                    className="bg-blue-600 hover:bg-blue-700 px-8"
                  >
                    Next Myth
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>

          {/* All Facts Grid */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6 text-center">
              All Myths & Facts
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {mythFactData.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    const index = mythFactData.findIndex((m) => m.id === item.id);
                    setCurrentIndex(index);
                  }}
                  className={cn(
                    'p-4 rounded-xl text-left transition-all',
                    revealed.includes(item.id)
                      ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800'
                      : 'bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
                  )}
                >
                  <p className="text-sm font-medium text-slate-900 dark:text-white line-clamp-2">
                    {item.myth}
                  </p>
                  {revealed.includes(item.id) && (
                    <p className="text-xs text-green-700 dark:text-green-400 mt-2">
                      ✓ Fact revealed
                    </p>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
