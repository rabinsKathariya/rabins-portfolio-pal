import { useState } from 'react';
import { cn } from '@/lib/utils';

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

  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12">
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
                  : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
              )}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="glass-card p-6 hover-lift"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex justify-between items-center mb-3">
                <h4 className="font-semibold text-foreground">{skill.name}</h4>
                <span className="text-sm text-muted-foreground font-mono">{skill.level}%</span>
              </div>
              <div className="h-2 rounded-full bg-muted overflow-hidden">
                <div
                  className={cn('h-full rounded-full bg-gradient-to-r transition-all duration-1000', getSkillColor(skill.category))}
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                <span>Beginner</span>
                <span>Expert</span>
              </div>
            </div>
          ))}
        </div>

        {/* Additional info cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="glass-card p-6 text-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🐍</span>
            </div>
            <h4 className="font-semibold text-foreground mb-2">Python Focus</h4>
            <p className="text-sm text-muted-foreground">
              Primary programming language with focus on data science and automation
            </p>
          </div>
          <div className="glass-card p-6 text-center">
            <div className="w-12 h-12 rounded-full bg-data-green/10 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📊</span>
            </div>
            <h4 className="font-semibold text-foreground mb-2">Data Enthusiast</h4>
            <p className="text-sm text-muted-foreground">
              Passionate about data cleaning, analysis, and visualization
            </p>
          </div>
          <div className="glass-card p-6 text-center">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🌐</span>
            </div>
            <h4 className="font-semibold text-foreground mb-2">Web Basics</h4>
            <p className="text-sm text-muted-foreground">
              Foundation in HTML, CSS, and JavaScript for web development
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
