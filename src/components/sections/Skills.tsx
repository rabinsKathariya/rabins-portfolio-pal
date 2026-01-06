import { useState } from 'react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface Skill {
  name: string;
  level: number;
  category: string;
}

const skills: Skill[] = [
  // Python & Libraries
  { name: 'Python', level: 75, category: 'python' },
  { name: 'NumPy', level: 65, category: 'python' },
  { name: 'Pandas', level: 70, category: 'python' },
  { name: 'Matplotlib', level: 60, category: 'python' },
  { name: 'Seaborn', level: 55, category: 'python' },
  { name: 'Pygame', level: 50, category: 'python' },
  
  // Data Skills
  { name: 'Data Entry', level: 85, category: 'data' },
  { name: 'Data Cleaning', level: 75, category: 'data' },
  { name: 'Data Manipulation', level: 70, category: 'data' },
  { name: 'Data Visualization', level: 65, category: 'data' },
  
  // Programming Languages
  { name: 'C', level: 45, category: 'languages' },
  { name: 'C++', level: 40, category: 'languages' },
  { name: 'Java', level: 35, category: 'languages' },
  { name: 'C#', level: 30, category: 'languages' },
  { name: 'JavaScript', level: 45, category: 'languages' },
  
  // Web Technologies
  { name: 'HTML', level: 70, category: 'web' },
  { name: 'CSS', level: 65, category: 'web' },
  { name: 'JavaScript (Web)', level: 55, category: 'web' },
];

const categories = [
  { id: 'all', name: 'All Skills', color: 'primary' },
  { id: 'python', name: 'Python & Libraries', color: 'python-yellow' },
  { id: 'data', name: 'Data Skills', color: 'data-green' },
  { id: 'languages', name: 'Programming', color: 'code-purple' },
  { id: 'web', name: 'Web Technologies', color: 'accent' },
];

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  const getSkillColor = (category: string) => {
    switch (category) {
      case 'python': return 'from-amber-400 to-amber-600';
      case 'data': return 'from-emerald-400 to-emerald-600';
      case 'languages': return 'from-violet-400 to-violet-600';
      case 'web': return 'from-blue-400 to-blue-600';
      default: return 'from-primary to-accent';
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4 } },
  };

  return (
    <section id="skills" className="py-20 md:py-32 overflow-hidden">
      <div className="section-container" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            My Skills
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills, from Python programming and data science
            to web development and various programming languages.
          </p>
        </motion.div>

        {/* Category filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                'px-4 py-2 rounded-full text-sm font-medium transition-all duration-300',
                activeCategory === category.id
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          <AnimatePresence mode="wait">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                className="glass-card p-6 group cursor-pointer"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">{skill.name}</h4>
                  <motion.span
                    className="text-sm text-muted-foreground font-mono"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 + index * 0.05 }}
                  >
                    {skill.level}%
                  </motion.span>
                </div>
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <motion.div
                    className={cn('h-full rounded-full bg-gradient-to-r', getSkillColor(skill.category))}
                    initial={{ width: 0 }}
                    animate={isVisible ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: 0.3 + index * 0.05, ease: 'easeOut' }}
                  />
                </div>
                <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                  <span>Beginner</span>
                  <span>Expert</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Additional info cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {[
            { emoji: '🐍', title: 'Python Focus', desc: 'Primary programming language with focus on data science and automation', color: 'primary' },
            { emoji: '📊', title: 'Data Enthusiast', desc: 'Passionate about data cleaning, analysis, and visualization', color: 'data-green' },
            { emoji: '🌐', title: 'Web Basics', desc: 'Foundation in HTML, CSS, and JavaScript for web development', color: 'accent' },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              className="glass-card p-6 text-center"
              whileHover={{ y: -5, scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              <motion.div
                className={`w-12 h-12 rounded-full bg-${item.color}/10 flex items-center justify-center mx-auto mb-4`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-2xl">{item.emoji}</span>
              </motion.div>
              <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
