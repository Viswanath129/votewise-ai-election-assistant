'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { registrationSteps } from '@/data/faqData';
import { 
  CheckCircle, 
  FileText, 
  FormInput, 
  Upload, 
  Users, 
  CreditCard,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';

const iconMap: { [key: string]: React.ReactNode } = {
  CheckCircle: <CheckCircle className="w-6 h-6" />,
  FileText: <FileText className="w-6 h-6" />,
  FormInput: <FormInput className="w-6 h-6" />,
  Upload: <Upload className="w-6 h-6" />,
  Users: <Users className="w-6 h-6" />,
  CreditCard: <CreditCard className="w-6 h-6" />,
};

export default function RegistrationGuide() {
  const { t } = useLanguage();
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < registrationSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <section
      id="registration-section"
      className="py-20 bg-slate-50 dark:bg-slate-900"
      aria-label="Voter Registration Guide"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {t.sections.registration.title}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {t.sections.registration.subtitle}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="max-w-3xl mx-auto mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-slate-600 dark:text-slate-400">
              {t.common.step} {currentStep + 1} of {registrationSteps.length}
            </span>
            <span className="text-sm text-blue-600 dark:text-blue-400">
              {Math.round(((currentStep + 1) / registrationSteps.length) * 100)}%
            </span>
          </div>
          <div className="h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-600 transition-all duration-300"
              style={{ width: `${((currentStep + 1) / registrationSteps.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Step Cards */}
        <div className="max-w-3xl mx-auto">
          <Card className="shadow-lg border-slate-200 dark:border-slate-800">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center flex-shrink-0">
                  {iconMap[registrationSteps[currentStep].icon]}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                      {t.common.step} {registrationSteps[currentStep].id}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                    {registrationSteps[currentStep].title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                    {registrationSteps[currentStep].description}
                  </p>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-between items-center mt-8 pt-6 border-t border-slate-200 dark:border-slate-800">
                <Button
                  variant="outline"
                  onClick={prevStep}
                  disabled={currentStep === 0}
                  className="flex items-center gap-2"
                >
                  <ChevronLeft className="w-4 h-4" />
                  {t.common.previous}
                </Button>
                
                <div className="flex gap-1">
                  {registrationSteps.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentStep(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentStep
                          ? 'bg-blue-600 w-6'
                          : 'bg-slate-300 dark:bg-slate-700'
                      }`}
                      aria-label={`Go to step ${index + 1}`}
                    />
                  ))}
                </div>

                <Button
                  onClick={nextStep}
                  disabled={currentStep === registrationSteps.length - 1}
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700"
                >
                  {t.common.next}
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Step Indicators */}
        <div className="max-w-4xl mx-auto mt-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {registrationSteps.map((step, index) => (
              <button
                key={step.id}
                onClick={() => setCurrentStep(index)}
                className={`p-4 rounded-xl text-center transition-all ${
                  index === currentStep
                    ? 'bg-blue-600 text-white shadow-lg'
                    : index < currentStep
                    ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                }`}
              >
                <div className="text-2xl mb-2">{step.id}</div>
                <div className="text-xs font-medium">{step.title}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
