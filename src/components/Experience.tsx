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

          {/* Timeline */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-[var(--border)] transform md:-translate-x-1/2" />

              {/* Experience items */}
              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className={`relative flex items-start ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    } flex-col`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1">
                      <div className="w-4 h-4 rounded-full bg-[var(--accent)] border-4 border-[var(--background-secondary)] shadow-lg shadow-[var(--accent)]/50" />
                    </div>

                    {/* Content */}
                    <div
                      className={`w-full md:w-[calc(50%-2rem)] ml-16 md:ml-0 ${
                        index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                      }`}
                    >
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="p-6 rounded-xl bg-[var(--background-accent)] border border-[var(--border)] hover:border-[var(--accent)] transition-all duration-300 shadow-lg"
                      >
                        {/* Header */}
                        <div className="mb-4">
                          <div className="flex items-center space-x-2 mb-2">
                            <Briefcase className="w-5 h-5 text-[var(--accent)]" />
                            <h3 className="text-xl font-bold text-[var(--text-primary)]">
                              {exp.position}
                            </h3>
                          </div>
                          <h4 className="text-lg font-semibold text-[var(--accent)] mb-2">
                            {exp.company}
                          </h4>
                          <div className="flex flex-wrap gap-3 text-sm text-[var(--text-secondary)]">
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4" />
                              <span>{exp.period}</span>
                            </div>
                            {exp.location && (
                              <div className="flex items-center space-x-1">
                                <MapPin className="w-4 h-4" />
                                <span>{exp.location}</span>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-[var(--text-secondary)] mb-4">
                          {exp.description}
                        </p>

                        {/* Key Responsibilities */}
                        {exp.responsibilities && exp.responsibilities.length > 0 && (
                          <div className="mb-4">
                            <h5 className="font-semibold text-[var(--text-primary)] mb-2 text-sm">
                              Key Responsibilities:
                            </h5>
                            <ul className="space-y-1 text-sm text-[var(--text-secondary)]">
                              {exp.responsibilities.slice(0, 3).map((resp, idx) => (
                                <li key={idx} className="flex items-start space-x-2">
                                  <span className="text-[var(--accent)] mt-1">•</span>
                                  <span>{resp}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Technologies */}
                        {exp.technologies && exp.technologies.length > 0 && (
                          <div className="flex flex-wrap gap-2 mt-4">
                            {exp.technologies.slice(0, 6).map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 text-xs font-medium rounded-full bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Achievements */}
                        {exp.achievements && exp.achievements.length > 0 && (
                          <div className="mt-4 pt-4 border-t border-[var(--border)]">
                            <h5 className="font-semibold text-[var(--text-primary)] mb-2 text-sm">
                              Key Achievements:
                            </h5>
                            <ul className="space-y-1 text-sm text-[var(--text-secondary)]">
                              {exp.achievements.map((achievement, idx) => (
                                <li key={idx} className="flex items-start space-x-2">
                                  <span className="text-[var(--success)] mt-1">✓</span>
                                  <span>{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
