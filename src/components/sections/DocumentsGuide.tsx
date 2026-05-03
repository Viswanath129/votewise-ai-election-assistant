'use client';

import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { documentsList } from '@/data/faqData';
import { 
  FileCheck, 
  FileText, 
  CreditCard, 
  Car,
  Receipt,
  Banknote,
  Utensils,
  Camera
} from 'lucide-react';

const iconMap: { [key: string]: React.ReactNode } = {
  'Aadhaar Card': <FileCheck className="w-6 h-6" />,
  'Passport': <FileText className="w-6 h-6" />,
  'PAN Card': <CreditCard className="w-6 h-6" />,
  'Driving License': <Car className="w-6 h-6" />,
  'Utility Bill': <Receipt className="w-6 h-6" />,
  'Bank Statement': <Banknote className="w-6 h-6" />,
  'Ration Card': <Utensils className="w-6 h-6" />,
  'Passport Photo': <Camera className="w-6 h-6" />,
};

export default function DocumentsGuide() {
  const { t } = useLanguage();

  return (
    <section
      id="documents-section"
      className="py-20 bg-white dark:bg-slate-950"
      aria-label="Required Documents Guide"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {t.sections.documents.title}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {t.sections.documents.subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {documentsList.map((doc) => (
              <Card
                key={doc.id}
                className={`shadow-md hover:shadow-lg transition-shadow border-slate-200 dark:border-slate-800 ${
                  doc.required ? 'ring-2 ring-blue-500 ring-offset-2' : ''
                }`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      doc.required 
                        ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' 
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                    }`}>
                      {iconMap[doc.name] || <FileText className="w-6 h-6" />}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                          {doc.name}
                        </h3>
                        {doc.required && (
                          <span className="px-2 py-0.5 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full">
                            {t.common.required}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        {doc.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Note */}
          <div className="mt-8 p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl">
            <p className="text-sm text-amber-800 dark:text-amber-200 text-center">
              <strong>Note:</strong> You need at least one ID proof and one address proof from the list above. 
              Aadhaar Card serves as both ID and address proof.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
