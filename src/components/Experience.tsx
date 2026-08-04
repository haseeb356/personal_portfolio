import React from 'react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Briefcase, GraduationCap, Code2, Sparkles, CheckCircle2 } from 'lucide-react';

interface ExperienceProps {
  isDarkMode: boolean;
}

export const Experience: React.FC<ExperienceProps> = ({ isDarkMode }) => {
  const journeyItems = [
    {
      period: 'Present',
      title: 'Full Stack AI Developer & ML Specialist',
      institution: 'Personal Portfolio & Open Source Projects',
      description: PERSONAL_INFO.experienceOverview,
      bullets: [
        'Engineering end-to-end Machine Learning pipelines with Scikit-learn, FastAPI, and React.',
        'Building Generative AI applications with Google Gemini API & structured JSON prompt engineering.',
        'Developing explainable AI interfaces utilizing SHAP for model interpretability.',
      ],
      icon: Code2,
    },
    {
      period: '2023 - Present',
      title: 'BS Computer Science',
      institution: 'UET Lahore (University of Engineering & Technology)',
      description:
        'Pursuing a comprehensive Computer Science degree focusing on Data Structures, Algorithms, Artificial Intelligence, Database Management Systems, and Software Engineering.',
      bullets: [
        'Rigorous academic foundation in mathematics, statistical hypothesis testing, and software design.',
        'Hands-on practical coursework in AI, machine learning, and database optimization.',
      ],
      icon: GraduationCap,
    },
    {
      period: '2026',
      title: 'Advanced AI & Machine Learning Certifications',
      institution: 'DeepLearning.AI, Stanford University, IBM & Google',
      description:
        'Completed 5 industry-recognized professional certificates specializing in Supervised Machine Learning, Generative AI for Software Development, and IBM AI Development.',
      bullets: [
        'Supervised ML: Regression, Classification, Cost Optimization & Neural Networks.',
        'Generative AI Software Engineering: LLM Integration, System Design & Multi-Agent Frameworks.',
      ],
      icon: Sparkles,
    },
  ];

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/30 text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Academic & Technical Roadmap</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
            Experience & <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Education</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mt-3 max-w-xl text-base sm:text-lg">
            Continuous learning journey combining academic computer science fundamentals with cutting-edge AI software engineering.
          </p>
          <div className="w-16 h-1 bg-linear-to-r from-cyan-400 to-blue-500 rounded-full mt-4" />
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative pl-6 sm:pl-8 border-l-2 border-cyan-500/30 space-y-12">
          {journeyItems.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative group"
              >
                {/* Timeline Icon Node */}
                <div className="absolute -left-[37px] sm:-left-[45px] top-0 w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-slate-950 border-2 border-cyan-400 flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.4)] group-hover:scale-110 transition-transform">
                  <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
                </div>

                {/* Content Card */}
                <div
                  className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 ${
                    isDarkMode
                      ? 'bg-slate-900/60 border-slate-800 backdrop-blur-xl group-hover:border-cyan-500/40'
                      : 'bg-white border-slate-200 shadow-md group-hover:border-cyan-400'
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold">
                      {item.period}
                    </span>
                    <span className="text-xs font-semibold text-slate-400">
                      {item.institution}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className="space-y-2 pt-3 border-t border-slate-800/40">
                    {item.bullets.map((b, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
