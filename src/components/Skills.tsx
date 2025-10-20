'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { skillCategories } from '@/data/portfolio-data';

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="skills" className="section-padding">
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
              My Skills
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="heading-2 mt-4"
            >
              Technical Expertise
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[var(--text-secondary)] mt-4 max-w-2xl mx-auto"
            >
              A comprehensive overview of my technical skills and expertise in mobile development
            </motion.p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="group"
              >
                <div className="h-full p-6 rounded-xl bg-[var(--background-accent)] border border-[var(--border)] hover:border-[var(--accent)] transition-all duration-300 card-hover">
                  {/* Category Header */}
                  <div className="flex items-center space-x-3 mb-6">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: category.color }}
                    />
                    <h3 className="text-xl font-semibold text-[var(--text-primary)]">
                      {category.name}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{
                          duration: 0.4,
                          delay: categoryIndex * 0.1 + skillIndex * 0.05,
                        }}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-[var(--text-primary)]">
                            {skill.name}
                          </span>
                          {skill.proficiency && (
                            <span className="text-xs text-[var(--text-secondary)]">
                              {skill.proficiency}%
                            </span>
                          )}
                        </div>
                        {skill.proficiency && (
                          <div className="h-2 bg-[var(--background-secondary)] rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={
                                isInView
                                  ? { width: `${skill.proficiency}%` }
                                  : { width: 0 }
                              }
                              transition={{
                                duration: 1,
                                delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.2,
                                ease: 'easeOut',
                              }}
                              className="h-full rounded-full"
                              style={{ backgroundColor: category.color }}
                            />
                          </div>
                        )}
                      </motion.div>
                    ))}
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
