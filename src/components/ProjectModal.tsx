import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../types';
import {
  X,
  Github,
  ExternalLink,
  CheckCircle,
  Cpu,
  Layers,
  Sparkles,
  Users,
} from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  isDarkMode: boolean;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, isDarkMode }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Modal Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className={`relative w-full max-w-3xl rounded-3xl border shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col ${
            isDarkMode
              ? 'bg-slate-900 border-slate-800 text-slate-100'
              : 'bg-white border-slate-200 text-slate-900'
          }`}
        >
          {/* Top Banner Image & Close Button */}
          <div className="relative h-64 sm:h-72 w-full shrink-0 overflow-hidden bg-slate-950">
            <img
              src={project.imageUrl}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/40 to-transparent" />

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 p-2.5 rounded-full bg-slate-950/80 text-slate-200 hover:bg-slate-800 hover:text-white transition-colors border border-slate-700/80 shadow-lg"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Title Overlay */}
            <div className="absolute bottom-4 left-6 right-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 text-xs font-mono font-bold">
                  {project.category}
                </span>
                {project.badge && (
                  <span className="px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/40 text-indigo-300 text-xs font-mono font-bold flex items-center gap-1">
                    <Users className="w-3.5 h-3.5" />
                    {project.badge}
                  </span>
                )}
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                {project.title}
              </h2>
            </div>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
            <div>
              <h3 className="text-sm font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">
                Overview
              </h3>
              <p className="text-base text-slate-300 leading-relaxed">
                {project.description}
              </p>
            </div>

            {project.detailedSpecs && (
              <div className="space-y-4 pt-4 border-t border-slate-800/60">
                <h3 className="text-sm font-mono font-bold text-cyan-400 uppercase tracking-wider">
                  Key Features & Highlights
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.detailedSpecs.keyFeatures.map((feat, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-xl bg-slate-800/40 border border-slate-700/50 flex items-start gap-2.5"
                    >
                      <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-300 font-medium">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Highlights list */}
            <div>
              <h3 className="text-sm font-mono font-bold text-slate-400 uppercase tracking-wider mb-3">
                Project Highlights & Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.highlights.map((h) => (
                  <span
                    key={h}
                    className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-800 border border-slate-700 text-cyan-300 font-mono"
                  >
                    #{h}
                  </span>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="text-sm font-mono font-bold text-slate-400 uppercase tracking-wider mb-3">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-cyan-950/40 border border-cyan-500/30 text-cyan-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links Footer */}
            <div className="pt-6 border-t border-slate-800/60 flex items-center justify-end">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-linear-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 font-bold text-sm shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all"
              >
                <Github className="w-4 h-4 text-slate-950" />
                <span>View Source Code on GitHub</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
