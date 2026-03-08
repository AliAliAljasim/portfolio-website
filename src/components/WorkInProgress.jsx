import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaHammer } from 'react-icons/fa'
import { worksInProgress } from '../data/portfolioData'

const statusColors = {
  'Active': { bg: 'rgba(99, 102, 241, 0.1)', text: '#6366f1', dot: '#6366f1' },
  'In Progress': { bg: 'rgba(245, 158, 11, 0.1)', text: '#d97706', dot: '#f59e0b' },
  'Early Stage': { bg: 'rgba(16, 185, 129, 0.1)', text: '#059669', dot: '#10b981' }
}

const WorkInProgress = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <section id="wip" className="section bg-white">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <h2 className="section-title" style={{ marginBottom: 0 }}>Works in Progress</h2>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto"
          style={{ marginBottom: "1.5rem" }}> 
            Projects currently under active development — a glimpse into what's being built next.
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {worksInProgress.map((project) => {
            const colors = statusColors[project.status] || statusColors['In Progress']
            return (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="card h-full flex flex-col" style={{ borderTop: `3px solid ${colors.dot}` }}>
                  {/* Header */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                    <h3 className="text-xl font-bold text-gray-900" style={{ flex: 1, marginRight: '0.75rem' }}>
                      {project.title}
                    </h3>
                    <span style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      padding: '0.2rem 0.65rem',
                      borderRadius: '9999px',
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      backgroundColor: colors.bg,
                      color: colors.text,
                      flexShrink: 0,
                      whiteSpace: 'nowrap'
                    }}>
                      <span style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        backgroundColor: colors.dot,
                        display: 'inline-block'
                      }} />
                      {project.status}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-5 flex-1">
                    {project.description}
                  </p>

                  {/* Progress Bar */}
                  <div style={{ marginBottom: '1.25rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                      <span style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600 }}>Progress</span>
                      <span style={{ fontSize: '0.75rem', color: colors.dot, fontWeight: 700 }}>{project.progress}%</span>
                    </div>
                    <div style={{
                      width: '100%',
                      height: '6px',
                      backgroundColor: '#e2e8f0',
                      borderRadius: '9999px',
                      overflow: 'hidden'
                    }}>
                      <motion.div
                        style={{
                          height: '100%',
                          backgroundColor: colors.dot,
                          borderRadius: '9999px'
                        }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${project.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
                      />
                    </div>
                  </div>

                  {/* Tech Tags */}
                  <div className="tech-tags-container" style={{ marginBottom: '1rem' }}>
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>

                  {/* GitHub Link */}
                  {project.github && project.github !== '#' && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline"
                      style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <FaGithub />
                      View Repository
                    </motion.a>
                  )}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default WorkInProgress
