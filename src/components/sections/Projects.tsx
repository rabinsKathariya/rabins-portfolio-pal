import { useState } from 'react';
import { ExternalLink, Github, Folder } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  tools: string[];
  image?: string;
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
    github: '#',
  },
  {
    id: 2,
    title: 'Sales Data Analysis',
    description: 'Comprehensive analysis of sales data using Pandas and visualization with Matplotlib and Seaborn to uncover trends.',
    category: 'data',
    tools: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
    github: '#',
  },
  {
    id: 3,
    title: 'Weather Data Visualization',
    description: 'Interactive weather data visualization project showing temperature trends and patterns over time.',
    category: 'data',
    tools: ['Python', 'NumPy', 'Matplotlib'],
    github: '#',
  },
  {
    id: 4,
    title: 'Personal Portfolio',
    description: 'Responsive portfolio website showcasing projects and skills using modern web technologies.',
    category: 'web',
    tools: ['HTML', 'CSS', 'JavaScript'],
    demo: '#',
  },
  {
    id: 5,
    title: 'Tic-Tac-Toe AI',
    description: 'Tic-tac-toe game with an AI opponent using minimax algorithm for unbeatable gameplay.',
    category: 'python',
    tools: ['Python', 'Pygame'],
    github: '#',
  },
  {
    id: 6,
    title: 'CSV Data Cleaner',
    description: 'Automated tool for cleaning and preprocessing CSV files with duplicate removal and data validation.',
    category: 'data',
    tools: ['Python', 'Pandas'],
    github: '#',
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

  return (
    <section id="projects" className="py-20 md:py-32 bg-muted/30">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12">
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
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                'px-4 py-2 rounded-full text-sm font-medium transition-all duration-300',
                activeCategory === category.id
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'bg-card text-muted-foreground hover:bg-primary/10 hover:text-primary border border-border'
              )}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="glass-card overflow-hidden group hover-lift"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project image placeholder */}
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center relative overflow-hidden">
                <Folder className="w-16 h-16 text-primary/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
