'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  ChevronLeft,
  ArrowRight
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
      className="py-20 bg-gradient-to-b from-white to-slate-50 dark:from-[#0F172A] dark:to-[#1E293B]"
      aria-label="Voter Registration Guide"
    >
      <div className="container-premium">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2563EB]/10 text-[#2563EB] text-sm font-semibold mb-4">
            <FileText className="w-4 h-4" />
            Voter Registration Guide
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] dark:text-white mb-4 tracking-tight">
            {t.sections.registration.title}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {t.sections.registration.subtitle}
          </p>
        </motion.div>

        {/* Progress Bar */}
        <div className="max-w-3xl mx-auto mb-10">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
              {t.common.step} {currentStep + 1} of {registrationSteps.length}
            </span>
            <span className="text-sm font-semibold text-[#2563EB] dark:text-[#3B82F6]">
              {Math.round(((currentStep + 1) / registrationSteps.length) * 100)}%
            </span>
          </div>
          <div className="h-3 bg-slate-200/50 dark:bg-slate-800/50 rounded-full overflow-hidden shadow-inner">
            <motion.div
              className="h-full bg-gradient-to-r from-[#2563EB] to-[#3B82F6] transition-all duration-500 ease-out"
              style={{ width: `${((currentStep + 1) / registrationSteps.length) * 100}%` }}
              layoutId="progressBar"
            />
          </div>
        </div>

        {/* Step Cards */}
        <div className="max-w-3xl mx-auto">
          <Card className="shadow-2xl border-slate-200/50 dark:border-slate-800/50 overflow-hidden bg-white/80 dark:bg-[#1E293B]/80 backdrop-blur-xl">
            <CardContent className="p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] as const }}
                  className="flex flex-col md:flex-row gap-8 items-start"
                >
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#2563EB]/10 to-[#3B82F6]/10 text-[#2563EB] flex items-center justify-center flex-shrink-0 shadow-lg"
                  >
                    <div className="scale-110">
                      {iconMap[registrationSteps[currentStep].icon]}
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2563EB]/10 text-[#2563EB] text-sm font-semibold">
                        {t.common.step} {registrationSteps[currentStep].id}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-[#0F172A] dark:text-white mb-4 tracking-tight">
                      {registrationSteps[currentStep].title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                      {registrationSteps[currentStep].description}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex justify-between items-center mt-8 pt-6 border-t border-slate-200/50 dark:border-slate-800/50">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    variant="outline"
                    onClick={prevStep}
                    disabled={currentStep === 0}
                    className="px-6 py-3 rounded-xl border-2 border-slate-300 dark:border-slate-600 hover:border-[#2563EB] hover:text-[#2563EB] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronLeft className="w-4 h-4 mr-2" />
                    {t.common.previous}
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    onClick={nextStep}
                    disabled={currentStep === registrationSteps.length - 1}
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] hover:from-[#1D4ED8] hover:to-[#2563EB] text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {t.common.next}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Step Indicators */}
        <div className="max-w-4xl mx-auto mt-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {registrationSteps.map((step, index) => (
              <motion.button
                key={step.id}
                onClick={() => setCurrentStep(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`p-4 rounded-xl text-center transition-all ${
                  index === currentStep
                    ? 'bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] text-white shadow-lg shadow-blue-500/25'
                    : index < currentStep
                    ? 'bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/20'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200/50 dark:border-slate-700/50 hover:border-[#2563EB]/30'
                }`}
              >
                <div className="text-2xl mb-2 font-bold">{step.id}</div>
                <div className="text-xs font-medium">{step.title}</div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
