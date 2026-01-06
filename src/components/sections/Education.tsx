import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';

const educationData = [
  {
    degree: 'Bachelor of Engineering (BE)',
    field: 'Computer Engineering',
    institution: 'University',
    location: 'Nepal',
    period: 'Currently Pursuing',
    status: 'Undergraduate',
    description: 'Focusing on programming fundamentals, data structures, algorithms, and software development. Actively learning Python and data science through coursework and self-study.',
    highlights: [
      'Strong foundation in programming concepts',
      'Active participation in coding projects',
      'Focus on Python and data science',
      'Learning software development practices',
    ],
  },
];

export const Education = () => {
  return (
    <section id="education" className="py-20 md:py-32">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Education
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Academic <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My educational background and ongoing learning path in computer engineering
            and technology.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {educationData.map((edu, index) => (
            <div key={index} className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent hidden md:block" />

              <div className="flex gap-6 md:gap-8">
                {/* Timeline dot */}
                <div className="hidden md:flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground shadow-lg shadow-primary/30">
                    <GraduationCap className="w-7 h-7" />
                  </div>
                </div>

                {/* Content card */}
                <div className="flex-1 glass-card p-6 md:p-8 mb-8">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <span className="inline-block px-3 py-1 rounded-full bg-data-green/10 text-data-green text-sm font-medium mb-2">
                        {edu.status}
                      </span>
                      <h3 className="text-2xl font-bold text-foreground">{edu.degree}</h3>
                      <p className="text-lg text-primary font-medium">{edu.field}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2 text-muted-foreground mb-1">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{edu.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6">{edu.description}</p>

                  {/* Highlights */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                      <BookOpen className="w-4 h-4 text-primary" />
                      Key Focus Areas
                    </div>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {edu.highlights.map((highlight, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications/Learning section */}
        <div className="mt-16">
          <h3 className="text-xl font-bold text-foreground text-center mb-8">
            Continuous Learning
          </h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="glass-card p-6 text-center hover-lift">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🐍</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Python Mastery</h4>
              <p className="text-sm text-muted-foreground">Deepening expertise through practice and projects</p>
            </div>
            <div className="glass-card p-6 text-center hover-lift">
              <div className="w-12 h-12 rounded-full bg-data-green/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Data Science</h4>
              <p className="text-sm text-muted-foreground">Exploring advanced analysis techniques</p>
            </div>
            <div className="glass-card p-6 text-center hover-lift">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💻</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Web Development</h4>
              <p className="text-sm text-muted-foreground">Building modern responsive applications</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
