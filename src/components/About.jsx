import React from 'react'
import { motion } from 'framer-motion'
import { FaCode, FaRocket, FaUsers, FaAward } from 'react-icons/fa'
import { personalInfo, experience, education } from '../data/portfolioData'

const About = () => {
  const stats = [
    { icon: FaCode, number: '3', label: 'Projects Built' },
    { icon: FaRocket, number: '3', label: 'Internships' },
    { icon: FaAward, number: '3.10', label: 'GPA' },
    { icon: FaUsers, number: '3', label: 'Languages Spoken' }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <section id="about" className="section bg-secondary">
      <div className="container">
        <motion.div
          style={{ textAlign: 'center', marginBottom: '4rem' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me</h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '48rem', margin: '0 auto' }}>
            Computer Engineering student at Toronto Metropolitan University with hands-on experience in AI development,
            frontend engineering, and systems engineering. Here's a bit more about my journey.
          </p>
        </motion.div>

        <div className="about-grid">
          {/* Left Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Who I Am */}
            <motion.div variants={itemVariants} style={{ marginBottom: '2rem' }}>
              <h3 className="about-section-heading">Who I Am</h3>
              <p className="about-text">{personalInfo.description}</p>
              <p className="about-text" style={{ marginBottom: 0 }}>
                I specialize in building AI-powered tools, frontend applications, and data analysis programs.
                My goal is to create solutions that are efficient, user-friendly, and make a measurable impact.
              </p>
            </motion.div>

            {/* What I Do */}
            <motion.div variants={itemVariants} style={{ marginBottom: '2rem' }}>
              <h3 className="about-section-heading">What I Do</h3>
              <div className="what-i-do-list">
                {[
                  'AI-powered tool and agent development',
                  'Frontend development with Svelte, Flutter, and Python',
                  'Systems engineering and server infrastructure (AWS)',
                  'Data analysis and visualization programs'
                ].map((item) => (
                  <div key={item} className="what-i-do-item">
                    <div className="what-i-do-dot" />
                    <p style={{ color: 'var(--text-secondary)', margin: 0 }}>{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="about-stats-grid">
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  className="about-stat-card"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <stat.icon className="about-stat-icon" />
                  <div className="about-stat-number">{stat.number}</div>
                  <div className="about-stat-label">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Education */}
            <motion.div variants={itemVariants} style={{ marginTop: '2rem' }}>
              <h3 className="about-section-heading" style={{ marginBottom: '1.5rem' }}>Education</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    className="education-card"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="education-degree">{edu.degree}</p>
                    <p className="education-school">{edu.school}</p>
                    <p className="education-year">{edu.year}</p>
                    <p className="education-description">{edu.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Experience */}
            <motion.div variants={itemVariants}>
              <h3 className="about-section-heading" style={{ marginBottom: '1.5rem' }}>Experience</h3>
              <div className="experience-timeline">
                {experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    className="experience-item"
                    whileHover={{ x: 8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="experience-dot" />
                    <div className="experience-card">
                      <p className="experience-position">{exp.position}</p>
                      <p className="experience-company">{exp.company}</p>
                      <p className="experience-duration">{exp.duration}</p>
                      {exp.location && <p className="experience-location">{exp.location}</p>}
                      <p className="experience-description">{exp.description}</p>
                      <ul className="experience-achievements">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="experience-achievement">
                            <span className="experience-achievement-dot">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
