'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Vote, Heart } from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center">
                <Vote className="w-5 h-5" />
              </div>
              <span className="font-bold text-xl text-slate-900 dark:text-white">
                VoteWise AI
              </span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Empowering Indian voters with AI-powered education about elections, 
              registration, and the democratic process.
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-500">
              {t.footer.disclaimer}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://voters.eci.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Voter Registration Portal
                </a>
              </li>
              <li>
                <a
                  href="https://electoralsearch.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Electoral Search
                </a>
              </li>
              <li>
                <a
                  href="https://eci.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Election Commission of India
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-4">
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://nvsp.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  NVSP Portal
                </a>
              </li>
              <li>
                <a
                  href="https://voterhelpline.eci.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Voter Helpline
                </a>
              </li>
              <li>
                <a
                  href="https://play.google.com/store/apps/details?id=com.eci.citizen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Voter Helpline App
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-600 dark:text-slate-400 flex items-center gap-1">
              {t.footer.copyright}
              <span className="inline-flex items-center">
                Made with <Heart className="w-4 h-4 text-red-500 mx-1 fill-red-500" /> in India
              </span>
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-500">
              Powered by Gemini AI • Built with Next.js & Firebase
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
