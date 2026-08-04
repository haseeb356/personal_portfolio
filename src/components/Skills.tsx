import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import {
  Code,
  Brain,
  Server,
  Layout,
  Database,
  Wrench,
  Sparkles,
  Terminal,
} from 'lucide-react';

interface SkillsProps {
  isDarkMode: boolean;
}

export const Skills: React.FC<SkillsProps> = ({ isDarkMode }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code':
        return <Code className="w-5 h-5" />;
      case 'Brain':
        return <Brain className="w-5 h-5" />;
      case 'Server':
        return <Server className="w-5 h-5" />;
      case 'Layout':
        return <Layout className="w-5 h-5" />;
      case 'Database':
        return <Database className="w-5 h-5" />;
      default:
        return <Wrench className="w-5 h-5" />;
    }
  };

  const categories = ['All', ...SKILL_CATEGORIES.map((c) => c.title)];

  const displayedCategories =
    activeCategory === 'All'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.title === activeCategory);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/30 text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <Terminal className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
            Skills & <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Technologies</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mt-3 max-w-xl text-base sm:text-lg">
            Hands-on technical stack spanning Artificial Intelligence, Machine Learning pipelines, backend services, and web applications.
          </p>
          <div className="w-16 h-1 bg-linear-to-r from-cyan-400 to-blue-500 rounded-full mt-4" />
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              id={`skill-tab-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-linear-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold shadow-[0_0_20px_rgba(6,182,212,0.35)] scale-105'
                  : isDarkMode
                  ? 'bg-slate-900/60 border border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-800'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 shadow-sm'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`p-6 rounded-3xl border transition-all duration-300 hover:border-cyan-500/40 hover:shadow-[0_8px_30px_rgba(6,182,212,0.15)] ${
                isDarkMode
                  ? 'bg-slate-900/60 border-slate-800 backdrop-blur-xl'
                  : 'bg-white border-slate-200 shadow-md'
              }`}
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800/40">
                <div className="p-2.5 rounded-xl bg-cyan-950/50 border border-cyan-500/30 text-cyan-400">
                  {getIcon(category.iconName)}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-1.5">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                        {skill.name}
                        {skill.tag && (
                          <span className="px-2 py-0.5 rounded-md bg-cyan-950/60 border border-cyan-500/30 text-[10px] font-mono text-cyan-300 font-bold">
                            {skill.tag}
                          </span>
                        )}
                      </span>
                      <span className="font-mono text-xs font-semibold text-cyan-400">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Animated Skill Level Bar */}
                    <div className="w-full h-2 rounded-full bg-slate-800/50 overflow-hidden p-0.5 border border-slate-800/80">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full rounded-full bg-linear-to-r from-cyan-400 via-blue-500 to-indigo-500 shadow-[0_0_10px_#22d3ee]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
