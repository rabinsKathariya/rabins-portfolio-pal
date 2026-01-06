import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

// Import project images
import snakeGameImg from '@/assets/projects/snake-game.png';
import salesAnalysisImg from '@/assets/projects/sales-analysis.png';
import weatherVizImg from '@/assets/projects/weather-viz.png';
import portfolioImg from '@/assets/projects/portfolio.png';
import tictactoeImg from '@/assets/projects/tictactoe.png';
import csvCleanerImg from '@/assets/projects/csv-cleaner.png';

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  tools: string[];
  image: string;
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Snake Game',
    description: 'Classic snake game built using Pygame with smooth animations, score tracking, and increasing difficulty levels.',
    category: 'python',
    tools: ['Python', 'Pygame'],
    image: snakeGameImg,
    github: 'https://github.com/rabinsKathariya',
  },
  {
    id: 2,
    title: 'Sales Data Analysis',
    description: 'Comprehensive analysis of sales data using Pandas and visualization with Matplotlib and Seaborn to uncover trends.',
    category: 'data',
    tools: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
    image: salesAnalysisImg,
    github: 'https://github.com/rabinsKathariya',
  },
  {
    id: 3,
    title: 'Weather Data Visualization',
    description: 'Interactive weather data visualization project showing temperature trends and patterns over time.',
    category: 'data',
    tools: ['Python', 'NumPy', 'Matplotlib'],
    image: weatherVizImg,
    github: 'https://github.com/rabinsKathariya',
  },
  {
    id: 4,
    title: 'Personal Portfolio',
    description: 'Responsive portfolio website showcasing projects and skills using modern web technologies.',
    category: 'web',
    tools: ['HTML', 'CSS', 'JavaScript'],
    image: portfolioImg,
    demo: '#',
  },
  {
    id: 5,
    title: 'Tic-Tac-Toe AI',
    description: 'Tic-tac-toe game with an AI opponent using minimax algorithm for unbeatable gameplay.',
    category: 'python',
    tools: ['Python', 'Pygame'],
    image: tictactoeImg,
    github: 'https://github.com/rabinsKathariya',
  },
  {
    id: 6,
    title: 'CSV Data Cleaner',
    description: 'Automated tool for cleaning and preprocessing CSV files with duplicate removal and data validation.',
    category: 'data',
    tools: ['Python', 'Pandas'],
    image: csvCleanerImg,
    github: 'https://github.com/rabinsKathariya',
  },
];

const categories = [
  { id: 'all', name: 'All Projects' },
  { id: 'python', name: 'Python' },
  { id: 'data', name: 'Data Analysis' },
  { id: 'web', name: 'Web' },
];

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'python': return 'bg-amber-500/10 text-amber-600 dark:text-amber-400';
      case 'data': return 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400';
      case 'web': return 'bg-blue-500/10 text-blue-600 dark:text-blue-400';
      default: return 'bg-primary/10 text-primary';
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="projects" className="py-20 md:py-32 bg-muted/30 overflow-hidden">
      <div className="section-container" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of my work ranging from Python applications and data analysis
            to web development projects.
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
                  : 'bg-card text-muted-foreground hover:bg-primary/10 hover:text-primary border border-border'
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="glass-card overflow-hidden group"
              >
                {/* Project image */}
                <motion.div
                  className="aspect-video relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>

                <div className="p-6">
                  {/* Category badge */}
                  <span className={cn('inline-block px-3 py-1 rounded-full text-xs font-medium mb-3', getCategoryColor(project.category))}>
                    {project.category === 'python' ? 'Python' : project.category === 'data' ? 'Data Analysis' : 'Web'}
                  </span>

                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tools */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2 py-1 bg-muted rounded text-xs font-mono text-muted-foreground"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-2">
                    {project.github && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-1" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.demo && (
                      <Button variant="default" size="sm" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-1" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
