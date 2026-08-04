import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';
import {
  FolderGit2,
  Github,
  ExternalLink,
  Sparkles,
  Users,
  Eye,
  ArrowUpRight,
} from 'lucide-react';

interface ProjectsProps {
  isDarkMode: boolean;
}

export const Projects: React.FC<ProjectsProps> = ({ isDarkMode }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    'All',
    'Machine Learning',
    'Generative AI',
    'Natural Language Processing',
    'Collaborative Project',
  ];

  const filteredProjects =
    activeCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/30 text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Portfolio Work</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
            Featured <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mt-3 max-w-2xl text-base sm:text-lg">
            Production-grade Machine Learning pipelines, Generative AI applications, NLP engines, and multi-agent platforms.
          </p>
          <div className="w-16 h-1 bg-linear-to-r from-cyan-400 to-blue-500 rounded-full mt-4" />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              id={`project-tab-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`group relative rounded-3xl border overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(6,182,212,0.2)] ${
                isDarkMode
                  ? 'bg-slate-900/70 border-slate-800 hover:border-cyan-500/50 backdrop-blur-xl'
                  : 'bg-white border-slate-200 hover:border-cyan-400 shadow-lg'
              }`}
            >
              {/* Image Banner Container */}
              <div className="relative h-60 sm:h-64 overflow-hidden bg-slate-950">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

                {/* Category & Badge Overlay */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3.5 py-1 rounded-full bg-slate-950/80 border border-cyan-400/40 text-cyan-300 text-xs font-mono font-bold backdrop-blur-md shadow-md">
                    {project.category}
                  </span>
                  {project.badge && (
                    <span className="px-3 py-1 rounded-full bg-indigo-950/90 border border-indigo-400/40 text-indigo-300 text-xs font-mono font-bold backdrop-blur-md flex items-center gap-1">
                      <Users className="w-3.5 h-3.5" />
                      {project.badge}
                    </span>
                  )}
                </div>

                {/* Hover Quick View Button */}
                <button
                  type="button"
                  id={`btn-quick-view-${project.id}`}
                  onClick={() => setSelectedProject(project)}
                  className="absolute bottom-4 right-4 p-3 rounded-full bg-cyan-400 text-slate-950 font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_20px_#22d3ee]"
                >
                  <Eye className="w-5 h-5" />
                </button>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-5">
                <div>
                  <h3
                    onClick={() => setSelectedProject(project)}
                    className="text-2xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-cyan-400 transition-colors cursor-pointer flex items-center gap-2"
                  >
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-5 h-5 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mt-2.5 line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Highlights tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.highlights.slice(0, 5).map((hl) => (
                    <span
                      key={hl}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-slate-800/60 dark:bg-slate-800/80 border border-slate-700/60 text-slate-300"
                    >
                      {hl}
                    </span>
                  ))}
                  {project.highlights.length > 5 && (
                    <span className="px-2 py-1 rounded-md text-[11px] font-mono font-semibold text-cyan-400">
                      +{project.highlights.length - 5} more
                    </span>
                  )}
                </div>

                {/* Tech stack badges */}
                <div className="pt-2 border-t border-slate-800/40 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-cyan-950/40 border border-cyan-500/30 text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Card Action Links */}
                <div className="pt-4 flex items-center justify-between gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    id={`btn-github-${project.id}`}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-bold text-xs sm:text-sm text-slate-950 bg-linear-to-r from-cyan-400 via-cyan-300 to-blue-400 hover:from-cyan-300 hover:to-blue-300 shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-200 hover:scale-[1.01]"
                  >
                    <Github className="w-4 h-4" />
                    <span>View GitHub Repository</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal preview */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          isDarkMode={isDarkMode}
        />
      </div>
    </section>
  );
};
