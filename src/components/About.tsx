import React from 'react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  Brain,
  Sparkles,
  BookOpen,
  CheckCircle2,
  Award,
  Layers,
  Cpu,
  GraduationCap,
} from 'lucide-react';

interface AboutProps {
  isDarkMode: boolean;
}

export const About: React.FC<AboutProps> = ({ isDarkMode }) => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/30 text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <Brain className="w-3.5 h-3.5" />
            <span>Background & Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
            About <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-16 h-1 bg-linear-to-r from-cyan-400 to-blue-500 rounded-full mt-4" />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Bio Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`lg:col-span-7 p-6 sm:p-8 rounded-3xl border flex flex-col justify-between ${
              isDarkMode
                ? 'bg-slate-900/60 border-slate-800 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.3)]'
                : 'bg-white border-slate-200/90 shadow-lg'
            }`}
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                    Computer Science Student
                  </h3>
                  <p className="text-sm font-medium text-cyan-500">
                    UET Lahore (University of Engineering & Technology)
                  </p>
                </div>
              </div>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                {PERSONAL_INFO.bio}
              </p>

              {/* Interests Header & Chips */}
              <div className="mb-6">
                <h4 className="text-sm font-mono font-bold text-slate-400 uppercase tracking-wider mb-3">
                  Core Technical Focus & Interests:
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {PERSONAL_INFO.interests.map((interest) => (
                    <span
                      key={interest}
                      className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium border transition-all duration-200 hover:scale-105 ${
                        isDarkMode
                          ? 'border-slate-800 bg-slate-800/60 text-cyan-300 hover:border-cyan-500/50 hover:bg-cyan-950/40'
                          : 'border-slate-200 bg-slate-100 text-slate-800 hover:bg-cyan-50 hover:text-cyan-700 hover:border-cyan-300'
                      }`}
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Currently Learning Banner */}
            <div className="p-4 sm:p-5 rounded-2xl bg-linear-to-r from-cyan-950/40 via-blue-950/30 to-slate-900/40 border border-cyan-500/30 mt-4">
              <div className="flex items-start gap-3">
                <BookOpen className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block mb-1">
                    Current Pursuit
                  </span>
                  <p className="text-sm text-slate-300 font-medium leading-relaxed">
                    {PERSONAL_INFO.currentLearning}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Metrics & Highlights Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            
            {/* Metric 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`p-6 rounded-3xl border flex items-center gap-5 ${
                isDarkMode
                  ? 'bg-slate-900/60 border-slate-800 backdrop-blur-xl'
                  : 'bg-white border-slate-200/90 shadow-md'
              }`}
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-slate-950 font-bold shadow-[0_0_20px_rgba(6,182,212,0.3)] shrink-0">
                <Award className="w-7 h-7" />
              </div>
              <div>
                <span className="text-3xl font-extrabold text-slate-900 dark:text-slate-100 font-mono">
                  5+
                </span>
                <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">
                  Verified Industry Certifications
                </p>
                <p className="text-xs text-slate-400">IBM, Google, Stanford & DeepLearning.AI</p>
              </div>
            </motion.div>

            {/* Metric 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`p-6 rounded-3xl border flex items-center gap-5 ${
                isDarkMode
                  ? 'bg-slate-900/60 border-slate-800 backdrop-blur-xl'
                  : 'bg-white border-slate-200/90 shadow-md'
              }`}
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold shadow-[0_0_20px_rgba(59,130,246,0.3)] shrink-0">
                <Layers className="w-7 h-7" />
              </div>
              <div>
                <span className="text-3xl font-extrabold text-slate-900 dark:text-slate-100 font-mono">
                  4+
                </span>
                <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">
                  Full Stack AI & ML Systems
                </p>
                <p className="text-xs text-slate-400">XAI, GenAI, NLP & Multi-Agent Frameworks</p>
              </div>
            </motion.div>

            {/* Metric 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className={`p-6 rounded-3xl border flex items-center gap-5 ${
                isDarkMode
                  ? 'bg-slate-900/60 border-slate-800 backdrop-blur-xl'
                  : 'bg-white border-slate-200/90 shadow-md'
              }`}
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold shadow-[0_0_20px_rgba(99,102,241,0.3)] shrink-0">
                <Cpu className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xl font-extrabold text-slate-900 dark:text-slate-100 font-mono">
                  End-to-End
                </span>
                <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">
                  ML Pipeline Engineering
                </p>
                <p className="text-xs text-slate-400">EDA, Hypotheses, Models, SHAP & FastAPI</p>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};
