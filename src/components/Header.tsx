'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { Vote, Menu, X, Sun, Moon, Globe, ChevronDown } from 'lucide-react';

export default function Header() {
  const { language, setLanguage, availableLanguages } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track scroll for glassmorphism intensity
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'Ask AI', href: '#chat-section' },
    { label: 'Registration', href: '#registration-section' },
    { label: 'Documents', href: '#documents-section' },
    { label: 'Common Questions', href: '#faq-section' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 dark:bg-[#0F172A]/90 backdrop-blur-xl shadow-lg border-b border-slate-200/50 dark:border-slate-800/50' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-premium">
        <div className="flex h-16 lg:h-20 items-center justify-between">
          {/* Logo */}
          <motion.button 
            onClick={() => scrollToSection('#hero')}
            className="flex items-center gap-2.5 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] text-white flex items-center justify-center shadow-lg shadow-blue-500/25 group-hover:shadow-blue-500/40 transition-shadow">
              <Vote className="w-5 h-5 lg:w-6 lg:h-6" />
            </div>
            <span className="font-bold text-xl lg:text-2xl text-[#0F172A] dark:text-white tracking-tight">
              VoteWise <span className="text-[#2563EB]">AI</span>
            </span>
          </motion.button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item, index) => (
              <motion.button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-[#2563EB] dark:hover:text-[#3B82F6] transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/50"
                whileHover={{ y: -1 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.label}
              </motion.button>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Language Selector */}
            <div className="relative">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="hidden sm:flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-[#2563EB]"
              >
                <Globe className="w-4 h-4" />
                <span className="uppercase font-medium">{language}</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
              </Button>
              
              <AnimatePresence>
                {isLangOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 top-full mt-2 w-44 bg-white dark:bg-[#1E293B] rounded-xl shadow-2xl border border-slate-200 dark:border-slate-700 py-2 z-50 overflow-hidden"
                  >
                    {availableLanguages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setIsLangOpen(false);
                        }}
                        className={`w-full px-4 py-2.5 text-left text-sm hover:bg-slate-50 dark:hover:bg-slate-700/50 flex items-center gap-3 transition-colors ${
                          language === lang.code ? 'bg-blue-50 dark:bg-blue-900/20 text-[#2563EB] font-medium' : 'text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        <span className="text-lg">{lang.flag}</span>
                        <span>{lang.name}</span>
                        {language === lang.code && (
                          <motion.div layoutId="activeLang" className="ml-auto w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                        )}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="hidden sm:flex text-slate-600 dark:text-slate-400 hover:text-[#2563EB] hover:bg-slate-100 dark:hover:bg-slate-800/50"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </Button>

            {/* CTA Button */}
            <Button
              onClick={() => scrollToSection('#chat-section')}
              className="hidden md:flex bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] hover:from-[#1D4ED8] hover:to-[#2563EB] text-white px-5 py-2.5 rounded-xl font-medium shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all hover:-translate-y-0.5"
            >
              Get Started
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-slate-700 dark:text-slate-300"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 dark:bg-[#0F172A]/95 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800 overflow-hidden"
          >
            <nav className="flex flex-col p-4 space-y-1">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left py-3 px-4 text-base font-medium text-slate-700 dark:text-slate-300 hover:text-[#2563EB] hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-xl transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.label}
                </motion.button>
              ))}
              <div className="border-t border-slate-200 dark:border-slate-800 pt-3 mt-3 space-y-1">
                <p className="px-4 py-2 text-sm font-medium text-slate-500 dark:text-slate-500">Select Language</p>
                {availableLanguages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                    }}
                    className={`w-full text-left py-3 px-4 text-base flex items-center gap-3 rounded-xl ${
                      language === lang.code ? 'text-[#2563EB] bg-blue-50 dark:bg-blue-900/20 font-medium' : 'text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    <span className="text-xl">{lang.flag}</span>
                    <span>{lang.name}</span>
                  </button>
                ))}
                <button
                  onClick={() => {
                    toggleTheme();
                  }}
                  className="w-full text-left py-3 px-4 text-base text-slate-700 dark:text-slate-300 flex items-center gap-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50"
                >
                  {theme === 'light' ? (
                    <>
                      <Moon className="w-5 h-5" />
                      <span>Dark Mode</span>
                    </>
                  ) : (
                    <>
                      <Sun className="w-5 h-5" />
                      <span>Light Mode</span>
                    </>
                  )}
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
