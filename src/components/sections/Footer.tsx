import { Github, Linkedin, Mail, Facebook } from 'lucide-react';
import { motion } from 'framer-motion';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/rabins-kathariya-6b3616366/', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/rabinsKathariya', label: 'GitHub' },
    { icon: Facebook, href: 'https://www.facebook.com/rabins.kathariya.1', label: 'Facebook' },
    { icon: Mail, href: 'mailto:insrab464@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="section-container py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <motion.a
              href="#home"
              className="text-2xl font-bold gradient-text mb-4 inline-block"
              whileHover={{ scale: 1.05 }}
            >
              RK
            </motion.a>
            <p className="text-muted-foreground mb-4">
              Computer Engineering student passionate about Python, data science,
              and building meaningful software solutions.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('mailto') ? undefined : '_blank'}
                  rel={social.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  className="p-2 rounded-lg bg-muted hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Skills', 'Projects', 'Education', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <motion.button
                    onClick={() => scrollToSection(`#${item.toLowerCase()}`)}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {item}
                  </motion.button>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {['Python', 'NumPy', 'Pandas', 'Matplotlib', 'HTML', 'CSS', 'JavaScript'].map((tech) => (
                <motion.span
                  key={tech}
                  className="px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground"
                  whileHover={{ scale: 1.05, backgroundColor: 'hsl(var(--primary) / 0.1)' }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex justify-center items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Rabins Kathariya. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
