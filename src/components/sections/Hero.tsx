import { ArrowDown, Download, Mail, Github, Linkedin, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Hero = () => {
  const handleScrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'var(--gradient-hero)' }}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating code symbols */}
        <div className="absolute top-20 left-10 text-6xl text-primary/10 floating-element font-mono">
          {'</>'}
        </div>
        <div className="absolute top-40 right-20 text-4xl text-accent/10 floating-element font-mono" style={{ animationDelay: '2s' }}>
          {'{ }'}
        </div>
        <div className="absolute bottom-40 left-20 text-5xl text-primary/10 floating-element font-mono" style={{ animationDelay: '4s' }}>
          {'#'}
        </div>
        <div className="absolute bottom-20 right-40 text-3xl text-data-green/20 floating-element font-mono" style={{ animationDelay: '1s' }}>
          def()
        </div>
        
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/15 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 section-container text-center">
        <div className="max-w-4xl mx-auto">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-data-green rounded-full animate-pulse" />
            Available for opportunities
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
            Hi, I'm{' '}
            <span className="gradient-text">Rabins Kathariya</span>
          </h1>

          {/* Subtitle with typing effect */}
          <div className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 animate-slide-up delay-100">
            <span className="inline-flex items-center gap-2">
              <Code2 className="w-6 h-6 text-primary" />
              BE Computer Undergraduate
            </span>
            <span className="mx-3 text-primary">•</span>
            <span className="text-primary font-semibold">Python Learner</span>
            <span className="mx-3 text-primary">•</span>
            <span className="text-data-green font-semibold">Data Enthusiast</span>
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up delay-200">
            Passionate about turning data into insights and building meaningful software solutions.
            Currently exploring Python, data science, and web technologies.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up delay-300">
            <Button variant="hero" size="lg" onClick={handleScrollToProjects}>
              View Projects
              <ArrowDown className="w-4 h-4 ml-1" />
            </Button>
            <Button variant="heroOutline" size="lg" onClick={handleScrollToContact}>
              <Mail className="w-4 h-4" />
              Contact Me
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#" onClick={(e) => e.preventDefault()}>
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </Button>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-4 animate-slide-up delay-400">
            <a
              href="https://www.linkedin.com/in/rabins-kathariya-6b3616366/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-primary/10 border border-border hover:border-primary/50 transition-all duration-300 hover-lift"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-primary/10 border border-border hover:border-primary/50 transition-all duration-300 hover-lift"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-muted-foreground hover:text-primary" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex justify-center pt-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};
