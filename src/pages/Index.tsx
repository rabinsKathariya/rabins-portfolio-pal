import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { Education } from '@/components/sections/Education';
import { Services } from '@/components/sections/Services';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';
import { Chatbot } from '@/components/Chatbot';

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Services />
      <Contact />
      <Footer />
      <Chatbot />
    </main>
  );
};

export default Index;
