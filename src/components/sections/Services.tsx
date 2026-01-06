import { Database, FileSpreadsheet, Code, BarChart3, FileText, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

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
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const handleContactClick = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <section id="services" className="py-20 md:py-32 bg-muted/30 overflow-hidden">
      <div className="section-container" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
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
        </motion.div>

        {/* Services grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="glass-card p-6 group relative overflow-hidden"
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Hover gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />

              <div className="relative z-10">
                <motion.div
                  className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground mb-4"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <service.icon className="w-6 h-6" />
                </motion.div>

                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <motion.li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                      initial={{ opacity: 0, x: -10 }}
                      animate={isVisible ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + index * 0.1 + i * 0.05 }}
                    >
                      <motion.span
                        className="w-1.5 h-1.5 rounded-full bg-primary"
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                      />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.div
            className="glass-card inline-block p-8 max-w-2xl"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Start a Project?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss how I can help with your data and programming needs.
              Get in touch and let's create something great together.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="hero" size="lg" onClick={handleContactClick}>
                Get in Touch
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
