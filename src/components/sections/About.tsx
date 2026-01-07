import { Code, Database, LineChart, GraduationCap, Linkedin, Github, Facebook, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import profileImage from '@/assets/profile.png';

export const About = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`;

  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30 overflow-hidden">
      <div className="section-container" ref={ref}>
        <motion.div
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {/* Left side - Profile Card */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative z-10 max-w-md mx-auto">
              {/* Profile card */}
              <motion.div
                className="glass-card p-8 flex flex-col justify-center items-center"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="relative mb-6">
                  <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-primary/30 shadow-xl">
                    <img
                      src={profileImage}
                      alt="Rabins Kathariya"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <motion.div
                    className="absolute -bottom-2 -right-2 w-10 h-10 bg-data-green rounded-full flex items-center justify-center border-4 border-card"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <span className="text-primary-foreground text-xs font-bold">✓</span>
                  </motion.div>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Rabins Kathariya</h3>
                <p className="text-muted-foreground mb-4">Computer Engineering Student</p>
                
                {/* Social Links */}
                <div className="flex gap-3 mb-6">
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
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href="https://github.com/rabinsKathariya"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                </div>
                <Button variant="outline" size="sm" asChild className="w-full">
                  <a
                    href="https://www.facebook.com/rabins.kathariya.1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook className="w-4 h-4 mr-2" />
                    Facebook
                  </a>
                </Button>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-border w-full">
                  {[
                    { value: '5+', label: 'Languages' },
                    { value: '10+', label: 'Projects' },
                    { value: '4+', label: 'Libraries' },
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      className="text-center"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Decorative elements */}
            <motion.div
              className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-lg -z-10"
              animate={{ rotate: [0, 5, 0], scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/10 rounded-lg -z-10"
              animate={{ rotate: [0, -5, 0], scale: [1, 1.05, 1] }}
              transition={{ duration: 5, repeat: Infinity }}
            />
          </motion.div>

          {/* Right side - Content */}
          <motion.div variants={itemVariants}>
            <motion.span
              className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
              whileHover={{ scale: 1.05 }}
            >
              About Me
            </motion.span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Turning <span className="gradient-text">Data</span> Into <span className="gradient-text">Insights</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              I'm a passionate Computer Engineering undergraduate with a deep interest in Python programming
              and data science. My journey in tech started with curiosity about how things work, and it has
              evolved into a dedicated pursuit of creating meaningful software solutions.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Currently focusing on expanding my expertise in data analysis and visualization using Python's
              powerful ecosystem. I love tackling complex problems and transforming raw data into actionable
              insights that drive decisions.
            </p>

            {/* Download Resume Button */}
            <div className="mb-8">
              <Button variant="hero" size="lg" asChild>
                <a href={resumeUrl} download="Rabins_Kathariya_CV.pdf">
                  <Download className="w-4 h-4 mr-2" />
                  Download My Resume
                </a>
              </Button>
            </div>

            {/* Highlight cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="glass-card-hover p-4 group cursor-pointer"
                  variants={itemVariants}
                  whileHover={{ scale: 1.03, y: -5 }}
                >
                  <div className="flex items-start gap-3">
                    <motion.div
                      className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <item.icon className="w-5 h-5" />
                    </motion.div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
