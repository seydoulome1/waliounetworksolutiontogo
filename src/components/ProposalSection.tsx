
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ProposalSectionProps {
  title: string;
  content: React.ReactNode;
  number: number;
  className?: string;
}

const ProposalSection: React.FC<ProposalSectionProps> = ({ title, content, number, className }) => {
  return (
    <motion.section
      className={cn("py-12 border-b border-border last:border-b-0", className)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="container max-w-4xl mx-auto px-6">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <motion.div 
              className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              viewport={{ once: true }}
            >
              {number}
            </motion.div>
          </div>
          <div className="flex-1">
            <motion.h2 
              className="text-2xl font-bold mb-4"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
            >
              {title}
            </motion.h2>
            <motion.div
              className="prose prose-slate max-w-none"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
            >
              {content}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ProposalSection;
