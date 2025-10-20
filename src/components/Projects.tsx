'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, Download, Info } from 'lucide-react';
import Image from 'next/image';
import { projects } from '@/data/portfolio-data';

const categories = ['All', 'Enterprise', 'Media & Entertainment', 'Services', 'Marketplace'];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="text-[var(--accent)] font-semibold text-sm uppercase tracking-wider"
            >
              Portfolio
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="heading-2 mt-4"
            >
              Featured Projects
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[var(--text-secondary)] mt-4 max-w-2xl mx-auto"
            >
              A showcase of my recent work and projects I've built
            </motion.p>
          </div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-[var(--accent)] text-white shadow-lg shadow-[var(--accent)]/30'
                    : 'bg-[var(--background-accent)] text-[var(--text-secondary)] hover:bg-[var(--accent)]/10 hover:text-[var(--accent)] border border-[var(--border)]'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                layout
                className="group"
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  className="h-full rounded-2xl bg-[var(--background-accent)] border-2 border-[var(--border)] hover:border-[var(--accent)] overflow-hidden transition-all duration-300 shadow-xl hover:shadow-2xl backdrop-blur-sm"
                >
                  {/* Project Image */}
                  <div className="relative h-56 bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 overflow-hidden flex items-center justify-center p-4">
                    {project.image ? (
                      <>
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={512}
                          height={512}
                          className="object-contain max-h-full w-auto group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                      </>
                    ) : (
                      <div className="text-6xl font-bold text-[var(--accent)]/20">
                        {project.title.charAt(0)}
                      </div>
                    )}
                    {/* Platform badge */}
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[var(--accent)] text-white text-xs font-medium">
                      {project.platform}
                    </div>
                    {/* Downloads badge */}
                    {project.downloads && (
                      <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-xs font-medium flex items-center space-x-1">
                        <Download className="w-3 h-3" />
                        <span>{project.downloads}</span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Title */}
                    <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2 line-clamp-1">
                      {project.title}
                    </h3>

                    {/* Category */}
                    <div className="text-sm text-[var(--accent)] mb-3">
                      {project.category}
                    </div>

                    {/* Description */}
                    <p className="text-sm text-[var(--text-secondary)] mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs rounded-md bg-[var(--background-secondary)] text-[var(--text-secondary)]"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 text-xs rounded-md bg-[var(--background-secondary)] text-[var(--text-secondary)]">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center space-x-3 pt-4 border-t border-[var(--border)]">
                      <button
                        onClick={() => setSelectedProject(project.id)}
                        className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 rounded-lg bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] transition-colors text-sm font-medium"
                      >
                        <Info className="w-4 h-4" />
                        <span>Details</span>
                      </button>
                      {project.links?.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-[var(--background-secondary)] hover:bg-[var(--accent)]/10 hover:text-[var(--accent)] transition-colors"
                          aria-label="View on GitHub"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {project.links?.live && (
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-[var(--background-secondary)] hover:bg-[var(--accent)]/10 hover:text-[var(--accent)] transition-colors"
                          aria-label="View live demo"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Project Detail Modal */}
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-[var(--background-accent)] rounded-2xl p-8 border border-[var(--border)]"
              >
                {projects
                  .filter((p) => p.id === selectedProject)
                  .map((project) => (
                    <div key={project.id}>
                      <div className="flex items-start justify-between mb-6">
                        <div>
                          <h3 className="text-3xl font-bold text-[var(--text-primary)] mb-2">
                            {project.title}
                          </h3>
                          <div className="flex items-center space-x-3 text-sm">
                            <span className="px-3 py-1 rounded-full bg-[var(--accent)]/10 text-[var(--accent)]">
                              {project.platform}
                            </span>
                            <span className="text-[var(--text-secondary)]">
                              {project.category}
                            </span>
                            {project.downloads && (
                              <span className="flex items-center space-x-1 text-[var(--text-secondary)]">
                                <Download className="w-4 h-4" />
                                <span>{project.downloads}</span>
                              </span>
                            )}
                          </div>
                        </div>
                        <button
                          onClick={() => setSelectedProject(null)}
                          className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-2xl"
                        >
                          ×
                        </button>
                      </div>

                      <p className="text-[var(--text-secondary)] mb-6">
                        {project.description}
                      </p>

                      {project.role && (
                        <div className="mb-6">
                          <h4 className="font-semibold text-[var(--text-primary)] mb-2">
                            My Role
                          </h4>
                          <p className="text-sm text-[var(--text-secondary)]">
                            {project.role}
                          </p>
                        </div>
                      )}

                      {project.features && project.features.length > 0 && (
                        <div className="mb-6">
                          <h4 className="font-semibold text-[var(--text-primary)] mb-3">
                            Key Features
                          </h4>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {project.features.map((feature, idx) => (
                              <li
                                key={idx}
                                className="flex items-start space-x-2 text-sm text-[var(--text-secondary)]"
                              >
                                <span className="text-[var(--accent)] mt-1">•</span>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div className="mb-6">
                        <h4 className="font-semibold text-[var(--text-primary)] mb-3">
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 text-sm rounded-full bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {project.impact && project.impact.length > 0 && (
                        <div className="mb-6">
                          <h4 className="font-semibold text-[var(--text-primary)] mb-3">
                            Impact
                          </h4>
                          <ul className="space-y-2">
                            {project.impact.map((item, idx) => (
                              <li
                                key={idx}
                                className="flex items-start space-x-2 text-sm text-[var(--text-secondary)]"
                              >
                                <span className="text-[var(--success)] mt-1">✓</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
