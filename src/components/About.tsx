'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Code, Award, Briefcase } from 'lucide-react';
import { personalInfo } from '@/data/portfolio-data';

const highlights = [
  {
    icon: <Code className="w-6 h-6" />,
    title: '3+ Years Experience',
    description: 'Building high-performance Android applications',
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: 'Clean Architecture',
    description: 'Specialized in MVVM, MVC, and modern patterns',
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: '1M+ Downloads',
    description: 'Apps reaching millions of users worldwide',
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: 'Continuous Learning',
    description: 'Always exploring new technologies',
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="section-padding bg-[var(--background-secondary)]">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="text-[var(--accent)] font-semibold text-sm uppercase tracking-wider"
            >
              About Me
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="heading-2 mt-4"
            >
              Who I Am
            </motion.h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Bio */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
                  {personalInfo.bio}
                </p>

                <div className="mt-8 p-6 rounded-xl bg-[var(--background-accent)] border border-[var(--border)]">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg bg-[var(--accent)]/10 text-[var(--accent)]">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[var(--text-primary)] mb-1">
                        {personalInfo.education.degree}
                      </h4>
                      <p className="text-sm text-[var(--text-secondary)]">
                        {personalInfo.education.institution}
                      </p>
                      <p className="text-xs text-[var(--text-secondary)] mt-1">
                        {personalInfo.education.period} • {personalInfo.education.field}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Highlights */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={highlight.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="p-6 rounded-xl bg-[var(--background-accent)] border border-[var(--border)] hover:border-[var(--accent)] transition-all duration-300 cursor-pointer group"
                  >
                    <div className="text-[var(--accent)] mb-4 transform group-hover:scale-110 transition-transform">
                      {highlight.icon}
                    </div>
                    <h3 className="font-semibold text-[var(--text-primary)] mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)]">
                      {highlight.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
