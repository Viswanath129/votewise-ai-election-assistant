'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Sparkles, BookOpen, ChevronDown, MessageCircle, FileText, Shield } from 'lucide-react';

export default function Hero() {
  const { t } = useLanguage();

  const scrollToChat = () => {
    document.getElementById('chat-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToGuide = () => {
    document.getElementById('registration-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  return (
    <section 
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 lg:pt-24 overflow-hidden"
      aria-label="Hero section"
    >
      {/* Premium Gradient Background */}
      <div className="hero-gradient-bg absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-[#0F172A] dark:via-[#0F172A] dark:to-[#1E293B]" />
      
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#2563EB]/10 to-[#3B82F6]/5 blur-3xl" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/2 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#F59E0B]/10 to-[#FBBF24]/5 blur-3xl" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.15, 1],
            y: [0, -20, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute -bottom-40 right-1/4 w-[550px] h-[550px] rounded-full bg-gradient-to-br from-[#10B981]/10 to-[#34D399]/5 blur-3xl" 
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container-premium text-center relative z-10"
      >
        {/* Premium Badge */}
        <motion.div variants={itemVariants} className="mb-8">
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#F59E0B]/10 to-[#FBBF24]/10 border border-[#F59E0B]/20 text-[#D97706] dark:text-[#FBBF24] text-sm font-semibold tracking-wide">
            <span className="text-lg">🇮🇳</span>
            Trusted Civic Assistant
          </span>
        </motion.div>

        {/* Main Title - Split for Impact */}
        <motion.h1 
          variants={itemVariants}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
        >
          <span className="block text-[#0F172A] dark:text-white mb-2">Understand Elections.</span>
          <span className="block bg-gradient-to-r from-[#2563EB] to-[#3B82F6] bg-clip-text text-transparent">
            Vote Smarter.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p 
          variants={itemVariants}
          className="text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          Simple guidance for voter registration, election process, required documents, 
          timelines, and your rights as a citizen.
        </motion.p>

        {/* CTA Buttons - Premium Style */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <Button
            size="lg"
            onClick={scrollToChat}
            className="group relative bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] hover:from-[#1D4ED8] hover:to-[#2563EB] text-white px-8 py-7 text-lg rounded-2xl shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:-translate-y-1 font-semibold"
          >
            <Sparkles className="w-5 h-5 mr-2 group-hover:animate-pulse" />
            Start Asking
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={scrollToGuide}
            className="group px-8 py-7 text-lg rounded-2xl border-2 border-slate-300 dark:border-slate-600 hover:border-[#2563EB] hover:text-[#2563EB] transition-all duration-300 hover:-translate-y-1 font-semibold bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm"
          >
            <BookOpen className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            Explore Guide
          </Button>
        </motion.div>

        {/* Stats Row - Modern Cards */}
        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-3 gap-4 md:gap-6 max-w-2xl mx-auto mb-16"
        >
          <div className="group bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl p-5 border border-slate-200/50 dark:border-slate-700/50 hover:border-[#2563EB]/30 transition-all duration-300 hover:shadow-lg">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#2563EB]/10 text-[#2563EB] mx-auto mb-3">
              <FileText className="w-5 h-5" />
            </div>
            <p className="text-2xl md:text-3xl font-bold text-[#0F172A] dark:text-white">10+</p>
            <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 font-medium">Topics Covered</p>
          </div>
          <div className="group bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl p-5 border border-slate-200/50 dark:border-slate-700/50 hover:border-[#10B981]/30 transition-all duration-300 hover:shadow-lg">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#10B981]/10 text-[#10B981] mx-auto mb-3">
              <Shield className="w-5 h-5" />
            </div>
            <p className="text-2xl md:text-3xl font-bold text-[#0F172A] dark:text-white">3</p>
            <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 font-medium">Languages</p>
          </div>
          <div className="group bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl p-5 border border-slate-200/50 dark:border-slate-700/50 hover:border-[#F59E0B]/30 transition-all duration-300 hover:shadow-lg">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#F59E0B]/10 text-[#F59E0B] mx-auto mb-3">
              <MessageCircle className="w-5 h-5" />
            </div>
            <p className="text-2xl md:text-3xl font-bold text-[#0F172A] dark:text-white">50+</p>
            <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 font-medium">Instant Answers</p>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm text-slate-500 dark:text-slate-500"
        >
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-[#10B981]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Easy to understand
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-[#10B981]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Fast answers
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-[#10B981]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Citizen focused
          </span>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-slate-400 dark:text-slate-600 cursor-pointer hover:text-[#2563EB] transition-colors"
            onClick={() => scrollToGuide()}
          >
            <span className="text-xs font-medium tracking-wider uppercase">Discover More</span>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
