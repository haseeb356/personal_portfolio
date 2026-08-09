import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { ParticlesBackground } from './components/ParticlesBackground';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Experience } from './components/Experience';
import { GitHubSection } from './components/GitHubSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const isDarkMode = true;

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div
      className={`min-h-screen relative font-sans antialiased transition-colors duration-500 ${
        isDarkMode
          ? 'bg-slate-950 text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-300'
          : 'bg-slate-50 text-slate-900 selection:bg-cyan-500/20 selection:text-cyan-800'
      }`}
    >
      {/* Background Interactive Particle Mesh */}
      <ParticlesBackground isDarkMode={isDarkMode} />

      {/* Glassmorphic Navbar */}
      <Navbar isDarkMode={isDarkMode} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero isDarkMode={isDarkMode} onViewResume={() => setIsResumeOpen(true)} />
        <About isDarkMode={isDarkMode} />
        <Skills isDarkMode={isDarkMode} />
        <Projects isDarkMode={isDarkMode} />
        <Certifications isDarkMode={isDarkMode} />
        <Experience isDarkMode={isDarkMode} />
        <GitHubSection isDarkMode={isDarkMode} />
        <Contact isDarkMode={isDarkMode} />
      </main>

      {/* Footer */}
      <Footer isDarkMode={isDarkMode} />

      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />

      {/* Floating Back to Top Button */}
      <BackToTop />
    </div>
  );
}
