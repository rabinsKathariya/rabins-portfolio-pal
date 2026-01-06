import { Database, FileSpreadsheet, Code, BarChart3, FileText, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: FileSpreadsheet,
    title: 'Data Entry',
    description: 'Accurate and efficient data entry services with attention to detail and quality assurance.',
    features: ['Fast turnaround', 'High accuracy', 'Multiple formats'],
  },
  {
    icon: Database,
    title: 'Data Cleaning',
    description: 'Transform messy datasets into clean, organized, and analysis-ready data.',
    features: ['Duplicate removal', 'Error correction', 'Standardization'],
  },
  {
    icon: BarChart3,
    title: 'Data Analysis',
    description: 'Extract meaningful insights from your data using Python and visualization libraries.',
    features: ['Statistical analysis', 'Trend identification', 'Reporting'],
  },
  {
    icon: Code,
    title: 'Python Scripting',
    description: 'Custom Python scripts for automation, data processing, and task simplification.',
    features: ['Automation', 'Web scraping', 'File processing'],
  },
  {
    icon: FileText,
    title: 'Data Visualization',
    description: 'Create compelling visual representations of your data using Matplotlib and Seaborn.',
    features: ['Charts & graphs', 'Interactive plots', 'Custom styling'],
  },
  {
    icon: Zap,
    title: 'Quick Tasks',
    description: 'Flexible support for various programming and data-related tasks and mini-projects.',
    features: ['Fast delivery', 'Multiple languages', 'Problem solving'],
  },
];

export const Services = () => {
  const handleContactClick = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-20 md:py-32 bg-muted/30">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            What I <span className="gradient-text">Offer</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional services for data-related tasks, Python programming, and more.
            Let me help you with your next project.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="glass-card p-6 group hover-lift relative overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="glass-card inline-block p-8 max-w-2xl">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Start a Project?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss how I can help with your data and programming needs.
              Get in touch and let's create something great together.
            </p>
            <Button variant="hero" size="lg" onClick={handleContactClick}>
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
