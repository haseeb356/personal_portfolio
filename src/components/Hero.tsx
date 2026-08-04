import React from 'react';
import { motion } from 'motion/react';
import { Typewriter } from './Typewriter';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  MessageCircle,
  Brain,
  MapPin,
  GraduationCap,
} from 'lucide-react';

interface HeroProps {
  isDarkMode: boolean;
}

export const Hero: React.FC<HeroProps> = ({ isDarkMode }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        
        {/* Left Column: Bio & Call to Action */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7 flex flex-col items-start"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 dark:bg-cyan-950/40 text-cyan-300 text-xs sm:text-sm font-medium mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.15)]">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <GraduationCap className="w-4 h-4 text-cyan-400" />
            <span>Computer Science Student @ UET Lahore</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 text-slate-900 dark:text-slate-100 leading-[1.1]">
            Hi, I'm{' '}
            <span className="bg-linear-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(6,182,212,0.3)]">
              {PERSONAL_INFO.name}
            </span>
          </h1>

          {/* Fixed Role Line (static) */}
          <div className="text-xl sm:text-2xl lg:text-3xl font-medium text-slate-700 dark:text-slate-300 mb-6 h-12 flex items-center">
            <span className="whitespace-nowrap bg-linear-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(6,182,212,0.3)]">
              Full Stack AI Developer & AI/ML Engineer
            </span>
          </div>

          {/* Subtext */}
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed mb-8">
            {PERSONAL_INFO.heroText}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
            {/* Primary: View Projects */}
            <a
              href="#projects"
              id="btn-hero-projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-slate-950 bg-linear-to-r from-cyan-400 via-cyan-300 to-blue-400 hover:from-cyan-300 hover:to-blue-300 shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>View Projects</span>
              <ArrowRight className="w-5 h-5 text-slate-950" />
            </a>

            {/* Secondary: Chat on WhatsApp */}
            <a
              href={PERSONAL_INFO.whatsapp}
              target="_blank"
              rel="noreferrer"
              id="btn-hero-whatsapp"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 shadow-[0_0_20px_rgba(52,211,153,0.35)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageCircle className="w-5 h-5 fill-slate-950 text-slate-950" />
              <span>WhatsApp Chat</span>
            </a>

            {/* Fiverr CTA: open gig in new tab */}
            <a
              href={PERSONAL_INFO.fiverr}
              target="_blank"
              rel="noopener noreferrer"
              id="btn-hero-fiverr"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-[#1dbf73] hover:bg-[#18a965] shadow-[0_0_20px_rgba(29,191,115,0.25)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Hire me on Fiverr</span>
            </a>
          </div>

          {/* Social Icons & Location */}
          <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-slate-800/40 w-full">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono">
              Connect:
            </span>
            <div className="flex items-center gap-3">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                id="hero-social-github"
                aria-label="GitHub Profile"
                className={`p-2.5 rounded-xl border transition-all duration-200 ${
                  isDarkMode
                    ? 'border-slate-800 bg-slate-900/60 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-slate-800'
                    : 'border-slate-200 bg-slate-100 text-slate-700 hover:text-cyan-600 hover:bg-slate-200'
                }`}
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                id="hero-social-linkedin"
                aria-label="LinkedIn Profile"
                className={`p-2.5 rounded-xl border transition-all duration-200 ${
                  isDarkMode
                    ? 'border-slate-800 bg-slate-900/60 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-slate-800'
                    : 'border-slate-200 bg-slate-100 text-slate-700 hover:text-cyan-600 hover:bg-slate-200'
                }`}
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                id="hero-social-email"
                aria-label="Send Email"
                className={`p-2.5 rounded-xl border transition-all duration-200 ${
                  isDarkMode
                    ? 'border-slate-800 bg-slate-900/60 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-slate-800'
                    : 'border-slate-200 bg-slate-100 text-slate-700 hover:text-cyan-600 hover:bg-slate-200'
                }`}
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            <div className="ml-auto flex items-center gap-1.5 text-xs text-slate-400 font-medium">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              <span>{PERSONAL_INFO.location}</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Circular Glowing Profile Picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center lg:justify-end"
        >
          <div className="relative group">
            {/* Pulsing Backlight Ring */}
            <div className="absolute -inset-1 rounded-full bg-linear-to-r from-cyan-500 via-blue-600 to-indigo-600 blur-xl opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt" />

            {/* Rotating Cyber Ring */}
            <div className="absolute -inset-3 rounded-full border-2 border-dashed border-cyan-400/40 animate-[spin_25s_linear_infinite] pointer-events-none" />

            {/* Profile Frame Container */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full p-2 bg-transparent border-2 border-cyan-400/60 shadow-[0_0_50px_rgba(6,182,212,0.35)] overflow-hidden">
              <img
                src={PERSONAL_INFO.profileImage}
                alt="Haseeb - Computer Science Student & AI Engineer"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-full transform group-hover:scale-105 transition-transform duration-500"
              />
              {/* Gradient overlay removed to ensure profile image visibility */}
            </div>

            {/* Floating Interactive Badge: Direct WhatsApp */}
            <a
              href={PERSONAL_INFO.whatsapp}
              target="_blank"
              rel="noreferrer"
              id="hero-badge-whatsapp"
              className="absolute -bottom-2 -left-2 sm:bottom-4 sm:left-0 flex items-center gap-2 px-4 py-2 rounded-2xl bg-emerald-950/90 border border-emerald-500/40 text-emerald-300 text-xs font-bold backdrop-blur-xl shadow-xl hover:scale-105 transition-transform"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400 fill-emerald-400" />
              <span>WhatsApp: +92 309 1688369</span>
            </a>

            {/* Floating Metric Badge removed per user request */}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
