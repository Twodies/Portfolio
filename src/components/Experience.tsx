'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';
import { experiences } from '@/data/portfolio-data';

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="experience" className="section-padding bg-[var(--background-secondary)]">
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
              Career Journey
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="heading-2 mt-4"
            >
              Work Experience
            </motion.h2>
          </div>

          {/* Responsive Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="h-full rounded-2xl bg-[var(--background-accent)] border border-[var(--border)] hover:border-[var(--accent)] shadow-xl transition-all duration-300"
              >
                <div className="p-6 flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Briefcase className="w-5 h-5 text-[var(--accent)]" />
                        <h3 className="text-lg font-bold text-[var(--text-primary)]">{exp.position}</h3>
                      </div>
                      <div className="text-[var(--accent)] font-semibold">{exp.company}</div>
                    </div>
                    <div className="flex flex-col items-end text-xs text-[var(--text-secondary)]">
                      <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-[var(--background-secondary)] border">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{exp.period}</span>
                      </div>
                      {exp.location && (
                        <div className="mt-2 inline-flex items-center gap-1 px-2 py-1 rounded-full bg-[var(--background-secondary)] border">
                          <MapPin className="w-3.5 h-3.5" />
                          <span>{exp.location}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{exp.description}</p>

                  {/* Responsibilities */}
                  {exp.responsibilities && exp.responsibilities.length > 0 && (
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-2">Highlights</h4>
                      <ul className="space-y-1 text-sm text-[var(--text-secondary)]">
                        {exp.responsibilities.slice(0, 3).map((resp, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-[var(--accent)]">•</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Footer chips */}
                  <div className="mt-auto pt-4 border-t border-[var(--border)] flex flex-wrap gap-2">
                    {exp.technologies?.slice(0, 6).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs rounded-full bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20"
                      >
                        {tech}
                      </span>
                    ))}
                    {exp.achievements && exp.achievements.length > 0 && (
                      <span className="ml-auto text-xs text-[var(--text-secondary)]">
                        {exp.achievements.length} achievement{exp.achievements.length > 1 ? 's' : ''}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
