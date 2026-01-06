import { Code, Database, LineChart, GraduationCap, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Programming',
      description: 'Python specialist with experience in C, C++, Java, C#, and JavaScript',
    },
    {
      icon: Database,
      title: 'Data Work',
      description: 'Skilled in data entry, cleaning, manipulation, and analysis',
    },
    {
      icon: LineChart,
      title: 'Data Science',
      description: 'Proficient in NumPy, Pandas, Matplotlib, and Seaborn for insights',
    },
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'Pursuing BE in Computer Engineering with a strong foundation',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Image/Visual */}
          <div className="relative">
            <div className="relative z-10 aspect-square max-w-md mx-auto">
              {/* Profile card */}
              <div className="glass-card p-8 h-full flex flex-col justify-center items-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-5xl font-bold text-primary-foreground mb-6">
                  RK
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Rabins Kathariya</h3>
                <p className="text-muted-foreground mb-4">Computer Engineering Student</p>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href="https://www.linkedin.com/in/rabins-kathariya-6b3616366/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn
                    </a>
                  </Button>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-border w-full">
                  <div className="text-center">
                    <div className="text-2xl font-bold gradient-text">5+</div>
                    <div className="text-xs text-muted-foreground">Languages</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold gradient-text">10+</div>
                    <div className="text-xs text-muted-foreground">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold gradient-text">4+</div>
                    <div className="text-xs text-muted-foreground">Libraries</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-lg -z-10" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/10 rounded-lg -z-10" />
          </div>

          {/* Right side - Content */}
          <div>
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Turning <span className="gradient-text">Data</span> Into <span className="gradient-text">Insights</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              I'm a passionate Computer Engineering undergraduate with a deep interest in Python programming
              and data science. My journey in tech started with curiosity about how things work, and it has
              evolved into a dedicated pursuit of creating meaningful software solutions.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Currently focusing on expanding my expertise in data analysis and visualization using Python's
              powerful ecosystem. I love tackling complex problems and transforming raw data into actionable
              insights that drive decisions.
            </p>

            {/* Highlight cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="glass-card-hover p-4 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
