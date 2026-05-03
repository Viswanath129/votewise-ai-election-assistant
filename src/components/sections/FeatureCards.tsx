'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  MessageSquare, 
  BookOpen, 
  FileText, 
  Clock, 
  Scale, 
  Users,
  ArrowRight,
  Sparkles
} from 'lucide-react';

const features = [
  {
    icon: MessageSquare,
    title: 'Ask VoteWise AI',
    description: 'Get instant answers about voter registration, EVMs, polling booths, and election procedures from our smart AI assistant.',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20',
    iconColor: 'text-blue-600',
    link: '#chat-section'
  },
  {
    icon: BookOpen,
    title: 'Registration Guide',
    description: 'Complete step-by-step guide for voter registration with Form 6, document requirements, and verification process.',
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50 dark:bg-green-900/20',
    iconColor: 'text-green-600',
    link: '#registration-section'
  },
  {
    icon: FileText,
    title: 'Required Documents',
    description: 'Detailed list of accepted ID and address proof documents including Aadhaar, passport, and utility bills.',
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50 dark:bg-purple-900/20',
    iconColor: 'text-purple-600',
    link: '#documents-section'
  },
  {
    icon: Clock,
    title: 'Election Timeline',
    description: 'Important dates, phases of elections, nomination deadlines, and result declaration schedules.',
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-50 dark:bg-orange-900/20',
    iconColor: 'text-orange-600',
    link: '#timeline-section'
  },
  {
    icon: Scale,
    title: 'Myth vs Fact',
    description: 'Debunk common myths and misconceptions about voting, EVMs, NOTA, and electoral processes with factual information.',
    color: 'from-pink-500 to-pink-600',
    bgColor: 'bg-pink-50 dark:bg-pink-900/20',
    iconColor: 'text-pink-600',
    link: '#mythfact-section'
  },
  {
    icon: Users,
    title: 'Citizen Rights',
    description: 'Understand your voting rights, NOTA option, privacy protections, and responsibilities as a democratic citizen.',
    color: 'from-indigo-500 to-indigo-600',
    bgColor: 'bg-indigo-50 dark:bg-indigo-900/20',
    iconColor: 'text-indigo-600',
    link: '#rights-section'
  }
];

export default function FeatureCards() {
  const handleFeatureClick = (link: string) => {
    const element = document.querySelector(link);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="py-20 bg-white dark:bg-slate-950"
      aria-label="Features"
    >
      <div className="container-premium">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            Everything You Need
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
            Complete Election Guidance
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            From voter registration to understanding your rights, get comprehensive information 
            about Indian elections in one place.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.4, 0, 0.2, 1] as const
              }}
            >
              <Card 
                className="group h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden bg-white dark:bg-slate-800 hover:-translate-y-2"
                onClick={() => handleFeatureClick(feature.link)}
              >
                <div className={`h-1 bg-gradient-to-r ${feature.color}`} />
                <CardContent className="p-8">
                  <div className={`w-14 h-14 rounded-xl ${feature.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className={`w-7 h-7 ${feature.iconColor}`} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    {feature.description}
                  </p>
                  
                  <Button 
                    variant="ghost" 
                    className="group/btn p-0 h-auto font-semibold text-blue-600 dark:text-blue-400 hover:bg-transparent"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-800">
            <span className="text-slate-700 dark:text-slate-300 font-medium">
              All features available instantly
            </span>
            <span className="text-blue-600 dark:text-blue-400 font-bold">
              • No registration required •
            </span>
            <span className="text-green-600 dark:text-green-400 font-bold">
              • 100% Free •
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
