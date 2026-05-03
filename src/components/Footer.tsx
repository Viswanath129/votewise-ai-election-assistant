'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Vote, Heart, ExternalLink, Sparkles } from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-slate-200/60 dark:border-slate-800/60 bg-gradient-to-b from-white to-slate-50 dark:from-[#0F172A] dark:to-[#0F172A]">
      <div className="container-premium py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] text-white flex items-center justify-center shadow-lg shadow-blue-500/20">
                <Vote className="w-5 h-5" />
              </div>
              <span className="font-bold text-xl text-[#0F172A] dark:text-white tracking-tight">
                VoteWise <span className="text-[#2563EB]">AI</span>
              </span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Empowering Indian citizens with clear, instant guidance on elections, 
              voter registration, and democratic participation.
            </p>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-[#10B981]/10 text-[#10B981] rounded-full text-xs font-medium w-fit">
              <Sparkles className="w-3 h-3" />
              <span>100% Offline • No API Needed</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="font-semibold text-[#0F172A] dark:text-white mb-4 text-sm uppercase tracking-wider">
              Official Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://voters.eci.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-600 dark:text-slate-400 hover:text-[#2563EB] dark:hover:text-[#3B82F6] flex items-center gap-1.5 group transition-colors"
                >
                  Voter Registration Portal
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href="https://electoralsearch.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-600 dark:text-slate-400 hover:text-[#2563EB] dark:hover:text-[#3B82F6] flex items-center gap-1.5 group transition-colors"
                >
                  Electoral Search
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href="https://eci.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-600 dark:text-slate-400 hover:text-[#2563EB] dark:hover:text-[#3B82F6] flex items-center gap-1.5 group transition-colors"
                >
                  Election Commission of India
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-semibold text-[#0F172A] dark:text-white mb-4 text-sm uppercase tracking-wider">
              Helpful Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://nvsp.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-600 dark:text-slate-400 hover:text-[#2563EB] dark:hover:text-[#3B82F6] flex items-center gap-1.5 group transition-colors"
                >
                  NVSP Portal
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href="https://voterhelpline.eci.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-600 dark:text-slate-400 hover:text-[#2563EB] dark:hover:text-[#3B82F6] flex items-center gap-1.5 group transition-colors"
                >
                  Voter Helpline
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href="https://play.google.com/store/apps/details?id=com.eci.citizen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-600 dark:text-slate-400 hover:text-[#2563EB] dark:hover:text-[#3B82F6] flex items-center gap-1.5 group transition-colors"
                >
                  Voter Helpline App
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 pt-8 border-t border-slate-200/60 dark:border-slate-800/60"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-600 dark:text-slate-400 flex items-center gap-1">
              © 2024 VoteWise AI
              <span className="inline-flex items-center mx-2">
                Crafted with <Heart className="w-3.5 h-3.5 text-[#DC2626] mx-1 fill-[#DC2626]" /> for Indian Democracy
              </span>
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-500">
              Offline Smart Assistant • Built with Next.js & Tailwind
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
