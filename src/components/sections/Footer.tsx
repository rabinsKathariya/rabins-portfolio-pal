import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="section-container py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <a href="#home" className="text-2xl font-bold gradient-text mb-4 inline-block">
              RK
            </a>
            <p className="text-muted-foreground mb-4">
              Computer Engineering student passionate about Python, data science,
              and building meaningful software solutions.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/in/rabins-kathariya-6b3616366/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:insrab464@gmail.com"
                className="p-2 rounded-lg bg-muted hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Skills', 'Projects', 'Education', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(`#${item.toLowerCase()}`)}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {['Python', 'NumPy', 'Pandas', 'Matplotlib', 'HTML', 'CSS', 'JavaScript'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Rabins Kathariya. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-destructive fill-destructive" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};
