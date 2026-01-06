import { useState } from 'react';
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
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Snake Game',
    description: 'A classic arcade-style snake game built with Python and Pygame. Features smooth animations, real-time score tracking, increasing difficulty as the snake grows, and responsive keyboard controls. The game showcases fundamental game development concepts including collision detection and game state management.',
    category: 'python',
    tools: ['Python', 'Pygame'],
    image: snakeGameImg,
  },
  {
    id: 2,
    title: 'Sales Data Analysis',
    description: 'An in-depth exploratory data analysis project on retail sales data. Utilized Pandas for data manipulation, identified seasonal trends and customer purchasing patterns, and created compelling visualizations with Matplotlib and Seaborn to present actionable business insights.',
    category: 'data',
    tools: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
    image: salesAnalysisImg,
  },
  {
    id: 3,
    title: 'Weather Data Visualization',
    description: 'An interactive data visualization project analyzing historical weather patterns. Features temperature trend analysis, precipitation comparisons, and seasonal pattern recognition using NumPy for calculations and Matplotlib for creating informative charts and graphs.',
    category: 'data',
    tools: ['Python', 'NumPy', 'Matplotlib'],
    image: weatherVizImg,
  },
  {
    id: 4,
    title: 'Personal Portfolio',
    description: 'A fully responsive personal portfolio website designed to showcase projects and skills. Built with modern web technologies featuring clean UI design, smooth animations, mobile-first approach, and optimized performance for an engaging user experience.',
    category: 'web',
    tools: ['HTML', 'CSS', 'JavaScript'],
    image: portfolioImg,
  },
  {
    id: 5,
    title: 'Tic-Tac-Toe AI',
    description: 'An intelligent Tic-Tac-Toe game featuring an unbeatable AI opponent powered by the minimax algorithm. Includes player vs AI mode, clean visual interface built with Pygame, move highlighting, and game state tracking with win detection.',
    category: 'python',
    tools: ['Python', 'Pygame'],
    image: tictactoeImg,
  },
  {
    id: 6,
    title: 'CSV Data Cleaner',
    description: 'A powerful automated tool for preprocessing and cleaning messy CSV datasets. Features include duplicate detection and removal, handling missing values, data type validation, column standardization, and exporting cleaned data ready for analysis.',
    category: 'data',
    tools: ['Python', 'Pandas'],
    image: csvCleanerImg,
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
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
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
            to web development projects. Click on any project to learn more.
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
                className="glass-card overflow-hidden group cursor-pointer"
                onClick={() => setSelectedProject(project)}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Project image */}
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="px-4 py-2 bg-primary/90 text-primary-foreground rounded-full text-sm font-medium">
                      Click to view details
                    </span>
                  </div>
                </div>

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
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2 py-1 bg-muted rounded text-xs font-mono text-muted-foreground"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-card rounded-2xl max-w-4xl w-full max-h-[95vh] overflow-auto shadow-2xl border border-border"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-auto max-h-[60vh] object-contain bg-black/50 rounded-t-2xl"
                  style={{ imageRendering: 'crisp-edges' }}
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-card/90 backdrop-blur-sm rounded-full flex items-center justify-center text-foreground hover:bg-card hover:scale-110 transition-all shadow-lg"
                >
                  ✕
                </button>
              </div>
              <div className="p-6 md:p-8">
                <span className={cn('inline-block px-3 py-1 rounded-full text-xs font-medium mb-4', getCategoryColor(selectedProject.category))}>
                  {selectedProject.category === 'python' ? 'Python' : selectedProject.category === 'data' ? 'Data Analysis' : 'Web'}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {selectedProject.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed text-base md:text-lg">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1.5 bg-muted rounded-full text-sm font-mono text-muted-foreground"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};