'use client';

import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { electionTimeline } from '@/data/faqData';
import { 
  Megaphone, 
  FileText, 
  Search,
  Users,
  Vote,
  BarChart3
} from 'lucide-react';

const iconMap: { [key: string]: React.ReactNode } = {
  'Announcement': <Megaphone className="w-5 h-5" />,
  'Nomination': <FileText className="w-5 h-5" />,
  'Scrutiny': <Search className="w-5 h-5" />,
  'Campaigning': <Users className="w-5 h-5" />,
  'Polling': <Vote className="w-5 h-5" />,
  'Counting': <BarChart3 className="w-5 h-5" />,
};

export default function Timeline() {
  const { t } = useLanguage();

  return (
    <section
      id="timeline-section"
      className="py-20 bg-slate-50 dark:bg-slate-900"
      aria-label="Election Timeline"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {t.sections.timeline.title}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {t.sections.timeline.subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-800 md:-translate-x-1/2" />

            {/* Timeline Items */}
            <div className="space-y-8">
              {electionTimeline.map((event, index) => (
                <div
                  key={event.id}
                  className={`relative flex items-start md:items-center gap-4 md:gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-slate-900 md:-translate-x-1/2 z-10" />

                  {/* Content Card */}
                  <div className={`ml-12 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                  }`}>
                    <Card className="shadow-md hover:shadow-lg transition-shadow border-slate-200 dark:border-slate-800">
                      <CardContent className="p-5">
                        <div className={`flex items-start gap-3 ${
                          index % 2 === 0 ? 'md:flex-row-reverse' : ''
                        }`}>
                          <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center flex-shrink-0">
                            {iconMap[event.date] || <FileText className="w-5 h-5" />}
                          </div>
                          <div className={`flex-1 ${
                            index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                          }`}>
                            <span className="inline-block px-3 py-1 text-xs font-semibold bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full mb-2">
                              {event.date}
                            </span>
                            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">
                              {event.title}
                            </h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                              {event.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block md:w-5/12" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
