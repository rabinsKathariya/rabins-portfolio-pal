import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const educationData = [
  {
    degree: 'Bachelor of Engineering (BE)',
    field: 'Computer Engineering',
    institution: 'University',
    location: 'Nepal',
    period: 'Currently Pursuing',
    status: 'Undergraduate',
    description: 'Focusing on programming fundamentals, data structures, algorithms, and software development. Actively learning Python and data science through coursework and self-study.',
    highlights: [
      'Strong foundation in programming concepts',
      'Active participation in coding projects',
      'Focus on Python and data science',
      'Learning software development practices',
    ],
  },
];

export const Education = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="education" className="py-20 md:py-32 overflow-hidden">
      <div className="section-container" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Education
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Academic <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My educational background and ongoing learning path in computer engineering
            and technology.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {educationData.map((edu, index) => (
            <motion.div key={index} className="relative" variants={itemVariants}>
              {/* Timeline line */}
              <motion.div
                className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent hidden md:block"
                initial={{ scaleY: 0 }}
                animate={isVisible ? { scaleY: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                style={{ originY: 0 }}
              />

              <div className="flex gap-6 md:gap-8">
                {/* Timeline dot */}
                <motion.div
                  className="hidden md:flex flex-col items-center"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isVisible ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.2, type: 'spring' }}
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground shadow-lg shadow-primary/30">
                    <GraduationCap className="w-7 h-7" />
                  </div>
                </motion.div>

                {/* Content card */}
                <motion.div
                  className="flex-1 glass-card p-6 md:p-8 mb-8"
                  whileHover={{ scale: 1.01, y: -5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <motion.span
                        className="inline-block px-3 py-1 rounded-full bg-data-green/10 text-data-green text-sm font-medium mb-2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.4 }}
                      >
                        {edu.status}
                      </motion.span>
                      <h3 className="text-2xl font-bold text-foreground">{edu.degree}</h3>
                      <p className="text-lg text-primary font-medium">{edu.field}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2 text-muted-foreground mb-1">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{edu.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6">{edu.description}</p>

                  {/* Highlights */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                      <BookOpen className="w-4 h-4 text-primary" />
                      Key Focus Areas
                    </div>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {edu.highlights.map((highlight, i) => (
                        <motion.div
                          key={i}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                          initial={{ opacity: 0, x: -10 }}
                          animate={isVisible ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.5 + i * 0.1 }}
                        >
                          <motion.span
                            className="w-1.5 h-1.5 rounded-full bg-primary"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                          />
                          {highlight}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications/Learning section */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-xl font-bold text-foreground text-center mb-8">
            Continuous Learning
          </h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { emoji: '🐍', title: 'Python Mastery', desc: 'Deepening expertise through practice and projects', color: 'primary' },
              { emoji: '📊', title: 'Data Science', desc: 'Exploring advanced analysis techniques', color: 'data-green' },
              { emoji: '💻', title: 'Web Development', desc: 'Building modern responsive applications', color: 'accent' },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="glass-card p-6 text-center"
                whileHover={{ y: -8, scale: 1.03 }}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <motion.div
                  className={`w-12 h-12 rounded-full bg-${item.color}/10 flex items-center justify-center mx-auto mb-4`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="text-2xl">{item.emoji}</span>
                </motion.div>
                <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
