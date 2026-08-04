import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sun,
  Moon,
  Menu,
  X,
  Terminal,
  MessageCircle,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  isDarkMode: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ isDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Experience', href: '#experience' },
    { label: 'GitHub', href: '#github' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress(totalHeight > 0 ? (currentScroll / totalHeight) * 100 : 0);
      setScrolled(currentScroll > 40);

      // Section spy
      const sections = ['hero', 'about', 'skills', 'projects', 'certifications', 'experience', 'github', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 160) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-slate-900/50 z-50">
        <div
          className="h-full bg-linear-to-r from-cyan-400 via-blue-500 to-indigo-500 transition-all duration-150 ease-out shadow-[0_0_10px_#22d3ee]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header
        className={`fixed top-4 left-0 right-0 z-40 px-3 sm:px-6 transition-all duration-300 ${
          scrolled ? 'py-1' : 'py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <nav
            className={`flex items-center justify-between gap-2 px-4 sm:px-6 py-3 rounded-2xl transition-all duration-300 min-w-0 ${
              isDarkMode
                ? 'bg-slate-900/75 border border-slate-800/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)]'
                : 'bg-white/80 border border-slate-200/90 backdrop-blur-xl shadow-[0_8px_32px_rgba(15,23,42,0.08)]'
            }`}
          >
            {/* Logo */}
            <a
              href="#hero"
              id="nav-logo"
              className="flex items-center gap-2 group focus:outline-none min-w-0 shrink-0"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-slate-950 font-bold shadow-[0_0_15px_rgba(6,182,212,0.4)] group-hover:scale-105 transition-transform duration-200">
                <Terminal className="w-5 h-5 text-slate-950" />
              </div>
              <div className="flex flex-col min-w-0">
                <span
                  className={`font-mono font-bold text-lg tracking-tight leading-none ${
                    isDarkMode ? 'text-slate-100' : 'text-slate-900'
                  }`}
                >
                  Haseeb
                </span>
                <span className="hidden sm:block text-[10px] text-slate-400 -mt-1 font-sans font-medium">
                  UET Lahore
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2 shrink-0">
              {navItems.map((item) => {
                const sectionId = item.href.replace('#', '');
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    id={`nav-link-${sectionId}`}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'text-cyan-400 bg-cyan-950/40 dark:bg-cyan-950/40 font-semibold'
                        : isDarkMode
                        ? 'text-slate-300 hover:text-cyan-300 hover:bg-slate-800/50'
                        : 'text-slate-700 hover:text-cyan-600 hover:bg-slate-100'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>

            {/* Right CTAs & Tools */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0 ml-auto">
              {/* WhatsApp Quick CTA Button */}
              <a
                href={PERSONAL_INFO.whatsapp}
                target="_blank"
                rel="noreferrer"
                id="btn-nav-whatsapp"
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 shadow-[0_0_16px_rgba(52,211,153,0.4)] transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] shrink-0"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950 text-slate-950" />
                <span className="hidden sm:inline">WhatsApp</span>
              </a>

              {/* Theme is fixed to dark by default; toggle removed */}

              {/* Mobile Menu Button */}
              <button
                type="button"
                id="btn-mobile-menu"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
                className={`md:hidden p-2 rounded-xl border transition-all shrink-0 ${
                  isDarkMode
                    ? 'border-slate-800 bg-slate-800/60 text-slate-200'
                    : 'border-slate-200 bg-slate-100 text-slate-800'
                }`}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </nav>

          {/* Mobile Drawer Dropdown */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={`md:hidden mt-2 p-4 rounded-2xl border shadow-2xl max-w-full overflow-hidden ${
                  isDarkMode
                    ? 'bg-slate-900/95 border-slate-800 text-slate-200 backdrop-blur-2xl'
                    : 'bg-white/95 border-slate-200 text-slate-800 backdrop-blur-2xl'
                }`}
              >
                <div className="flex flex-col gap-2">
                  {navItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                        isDarkMode
                          ? 'hover:bg-slate-800 hover:text-cyan-400'
                          : 'hover:bg-slate-100 hover:text-cyan-600'
                      }`}
                    >
                      {item.label}
                    </a>
                  ))}
                  <div className="pt-2 border-t border-slate-800/50 flex flex-col gap-2">
                    <a
                      href={PERSONAL_INFO.whatsapp}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => setMobileMenuOpen(false)}
                      className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300"
                    >
                      <MessageCircle className="w-4 h-4 fill-slate-950 text-slate-950" />
                      Chat on WhatsApp (+923091688369)
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>
    </>
  );
};
