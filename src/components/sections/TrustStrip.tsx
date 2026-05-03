'use client';

import { motion } from 'framer-motion';
import { Check, Shield, Zap, Globe, Heart, Lock } from 'lucide-react';

const trustFeatures = [
  {
    icon: Check,
    text: 'Fast Responses',
    color: 'text-green-600',
    bgColor: 'bg-green-100 dark:bg-green-900/20'
  },
  {
    icon: Globe,
    text: 'Multi-language',
    color: 'text-blue-600',
    bgColor: 'bg-blue-100 dark:bg-blue-900/20'
  },
  {
    icon: Heart,
    text: 'Beginner Friendly',
    color: 'text-pink-600',
    bgColor: 'bg-pink-100 dark:bg-pink-900/20'
  },
  {
    icon: Shield,
    text: 'Secure Platform',
    color: 'text-purple-600',
    bgColor: 'bg-purple-100 dark:bg-purple-900/20'
  },
  {
    icon: Lock,
    text: 'Privacy First',
    color: 'text-orange-600',
    bgColor: 'bg-orange-100 dark:bg-orange-900/20'
  },
  {
    icon: Zap,
    text: 'Instant Access',
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-100 dark:bg-yellow-900/20'
  }
];

export default function TrustStrip() {
  return (
    <section 
      className="py-16 bg-gradient-to-r from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900/20 border-y border-slate-200 dark:border-slate-800"
      aria-label="Trust indicators"
    >
      <div className="container-premium">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Trusted by Indian Citizens
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Your reliable companion for understanding elections and making informed voting decisions
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {trustFeatures.map((feature, index) => (
            <motion.div
              key={feature.text}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.1,
                ease: [0.4, 0, 0.2, 1] as const
              }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="group"
            >
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600">
                <div className={`w-12 h-12 rounded-xl ${feature.bgColor} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">
                  {feature.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
