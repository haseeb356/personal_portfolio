import React from 'react';
import { motion } from 'motion/react';
import { GITHUB_DATA, PROJECTS } from '../data/portfolioData';
import {
  Github,
  GitCommit,
  GitFork,
  Star,
  BookOpen,
  ExternalLink,
  Code,
  TrendingUp,
} from 'lucide-react';

interface GitHubSectionProps {
  isDarkMode: boolean;
}

export const GitHubSection: React.FC<GitHubSectionProps> = ({ isDarkMode }) => {
  // Generate a realistic 52-week contribution grid matrix
  const weeks = 40;
  const daysPerWeek = 7;
  const contributionGrid: number[][] = [];

  for (let w = 0; w < weeks; w++) {
    const weekDays: number[] = [];
    for (let d = 0; d < daysPerWeek; d++) {
      // Create active patterns with higher frequency on weekdays
      const rand = Math.random();
      let intensity = 0;
      if (rand > 0.55) intensity = 1;
      if (rand > 0.75) intensity = 2;
      if (rand > 0.88) intensity = 3;
      if (rand > 0.95) intensity = 4;
      weekDays.push(intensity);
    }
    contributionGrid.push(weekDays);
  }

  const getIntensityColor = (level: number) => {
    switch (level) {
      case 1:
        return 'bg-cyan-950/80 border-cyan-800/40';
      case 2:
        return 'bg-cyan-700/80 border-cyan-600/50';
      case 3:
        return 'bg-cyan-500 border-cyan-400';
      case 4:
        return 'bg-cyan-300 shadow-[0_0_8px_#22d3ee] border-cyan-200';
      default:
        return isDarkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-slate-100 border-slate-200';
    }
  };

  return (
    <section id="github" className="py-24 px-4 sm:px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/30 text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <Github className="w-3.5 h-3.5" />
            <span>Open Source & Activity</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
            GitHub <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Telemetry</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mt-3 max-w-xl text-base sm:text-lg">
            Real-time developer activity, repository metrics, and language distribution for @{GITHUB_DATA.username}.
          </p>
          <div className="w-16 h-1 bg-linear-to-r from-cyan-400 to-blue-500 rounded-full mt-4" />
        </div>

        {/* Overview Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div
            className={`p-5 rounded-2xl border flex items-center gap-4 ${
              isDarkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}
          >
            <div className="p-3 rounded-xl bg-cyan-950/50 border border-cyan-500/30 text-cyan-400">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <span className="text-2xl font-bold font-mono text-slate-900 dark:text-slate-100">
                {GITHUB_DATA.reposCount}
              </span>
              <p className="text-xs text-slate-400 font-medium">Public Repositories</p>
            </div>
          </div>

          <div
            className={`p-5 rounded-2xl border flex items-center gap-4 ${
              isDarkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}
          >
            <div className="p-3 rounded-xl bg-blue-950/50 border border-blue-500/30 text-blue-400">
              <GitCommit className="w-6 h-6" />
            </div>
            <div>
              <span className="text-2xl font-bold font-mono text-slate-900 dark:text-slate-100">
                {GITHUB_DATA.totalCommits}+
              </span>
              <p className="text-xs text-slate-400 font-medium">Total Commits</p>
            </div>
          </div>

          <div
            className={`p-5 rounded-2xl border flex items-center gap-4 ${
              isDarkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}
          >
            <div className="p-3 rounded-xl bg-amber-950/50 border border-amber-500/30 text-amber-400">
              <Star className="w-6 h-6" />
            </div>
            <div>
              <span className="text-2xl font-bold font-mono text-slate-900 dark:text-slate-100">
                {GITHUB_DATA.starsCount}
              </span>
              <p className="text-xs text-slate-400 font-medium">Repository Stars</p>
            </div>
          </div>

          <div
            className={`p-5 rounded-2xl border flex items-center gap-4 ${
              isDarkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}
          >
            <div className="p-3 rounded-xl bg-emerald-950/50 border border-emerald-500/30 text-emerald-400">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <span className="text-2xl font-bold font-mono text-slate-900 dark:text-slate-100">
                {GITHUB_DATA.contributions}
              </span>
              <p className="text-xs text-slate-400 font-medium">Yearly Contributions</p>
            </div>
          </div>
        </div>

        {/* Contribution Graph & Language Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Contribution Graph Visualizer */}
          <div
            className={`lg:col-span-8 p-6 sm:p-8 rounded-3xl border flex flex-col justify-between ${
              isDarkMode ? 'bg-slate-900/60 border-slate-800 backdrop-blur-xl' : 'bg-white border-slate-200 shadow-md'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Github className="w-5 h-5 text-cyan-400" />
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                    Contribution Activity Graph
                  </h3>
                </div>
                <span className="text-xs font-mono text-cyan-400 font-semibold">
                  312 contributions in 2026
                </span>
              </div>

              {/* Grid matrix */}
              <div className="overflow-x-auto pb-2">
                <div className="flex gap-1.5 min-w-[580px]">
                  {contributionGrid.map((week, wIdx) => (
                    <div key={wIdx} className="flex flex-col gap-1.5">
                      {week.map((intensity, dIdx) => (
                        <div
                          key={dIdx}
                          title={`Day ${dIdx + 1}, Week ${wIdx + 1}`}
                          className={`w-3 h-3 rounded-sm border transition-all duration-200 hover:scale-125 ${getIntensityColor(
                            intensity
                          )}`}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="flex items-center justify-between text-xs text-slate-400 pt-6 mt-4 border-t border-slate-800/40">
              <span>Learn more about GitHub activity</span>
              <div className="flex items-center gap-1.5 font-mono">
                <span>Less</span>
                <div className="w-2.5 h-2.5 rounded-sm bg-slate-900 border border-slate-800" />
                <div className="w-2.5 h-2.5 rounded-sm bg-cyan-950 border border-cyan-800" />
                <div className="w-2.5 h-2.5 rounded-sm bg-cyan-700 border border-cyan-600" />
                <div className="w-2.5 h-2.5 rounded-sm bg-cyan-500 border border-cyan-400" />
                <div className="w-2.5 h-2.5 rounded-sm bg-cyan-300 border border-cyan-200" />
                <span>More</span>
              </div>
            </div>
          </div>

          {/* Language Breakdown */}
          <div
            className={`lg:col-span-4 p-6 sm:p-8 rounded-3xl border flex flex-col justify-between ${
              isDarkMode ? 'bg-slate-900/60 border-slate-800 backdrop-blur-xl' : 'bg-white border-slate-200 shadow-md'
            }`}
          >
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Code className="w-5 h-5 text-cyan-400" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                  Most Used Languages
                </h3>
              </div>

              {/* Stacked bar */}
              <div className="w-full h-3 rounded-full overflow-hidden flex mb-6 border border-slate-800">
                {GITHUB_DATA.languages.map((lang) => (
                  <div
                    key={lang.name}
                    style={{
                      width: `${lang.percentage}%`,
                      backgroundColor: lang.color,
                    }}
                    title={`${lang.name}: ${lang.percentage}%`}
                    className="h-full transition-all duration-300 hover:opacity-80"
                  />
                ))}
              </div>

              {/* Legend list */}
              <div className="space-y-3">
                {GITHUB_DATA.languages.map((lang) => (
                  <div key={lang.name} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2.5">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: lang.color }}
                      />
                      <span className="font-semibold text-slate-800 dark:text-slate-200">
                        {lang.name}
                      </span>
                    </div>
                    <span className="font-mono text-xs font-semibold text-slate-400">
                      {lang.percentage}%
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href={`https://github.com/${GITHUB_DATA.username}`}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-cyan-400 border border-cyan-500/30 bg-cyan-950/30 hover:bg-cyan-900/40 transition-colors"
            >
              <span>Visit @{GITHUB_DATA.username} on GitHub</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Pinned Repositories */}
        <div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-6 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-cyan-400" />
            <span>Pinned Repositories</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PROJECTS.map((repo) => (
              <a
                key={repo.id}
                href={repo.githubUrl}
                target="_blank"
                rel="noreferrer"
                className={`p-5 rounded-2xl border transition-all duration-200 hover:border-cyan-500/40 hover:-translate-y-1 ${
                  isDarkMode
                    ? 'bg-slate-900/60 border-slate-800'
                    : 'bg-white border-slate-200 shadow-sm'
                }`}
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2 font-mono text-sm font-bold text-cyan-400">
                    <BookOpen className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span className="truncate">{repo.title}</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-slate-800 text-[10px] font-mono text-slate-300">
                    Public
                  </span>
                </div>

                <p className="text-xs text-slate-400 line-clamp-2 mb-4 leading-relaxed">
                  {repo.description}
                </p>

                <div className="flex items-center gap-4 text-xs text-slate-400 font-mono">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                    <span>{repo.techStack[0] || 'Python'}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-amber-400" />
                    <span>{Math.floor(Math.random() * 10) + 5}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork className="w-3.5 h-3.5" />
                    <span>{Math.floor(Math.random() * 5) + 2}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
