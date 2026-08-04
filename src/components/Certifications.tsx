import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CERTIFICATIONS } from '../data/portfolioData';
import { Certification } from '../types';
import { CertificateModal } from './CertificateModal';
import { Award, ExternalLink, ShieldCheck, CheckCircle2, Eye } from 'lucide-react';

interface CertificationsProps {
  isDarkMode: boolean;
}

export const Certifications: React.FC<CertificationsProps> = ({ isDarkMode }) => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <section id="certifications" className="py-24 px-4 sm:px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/30 text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Industry Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
            Professional <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Certifications</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mt-3 max-w-2xl text-base sm:text-lg">
            Verified credentials from global leaders in Artificial Intelligence: IBM, Stanford University, Google, and DeepLearning.AI.
          </p>
          <div className="w-16 h-1 bg-linear-to-r from-cyan-400 to-blue-500 rounded-full mt-4" />
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CERTIFICATIONS.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`group relative p-6 sm:p-8 rounded-3xl border flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_35px_rgba(6,182,212,0.18)] ${
                isDarkMode
                  ? 'bg-slate-900/60 border-slate-800 hover:border-cyan-500/50 backdrop-blur-xl'
                  : 'bg-white border-slate-200 hover:border-cyan-400 shadow-md'
              }`}
            >
              <div>
                {/* Header: Logo & Provider */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-white p-2.5 flex items-center justify-center border border-slate-700 shadow-md shrink-0 group-hover:scale-105 transition-transform">
                    <img
                      src={cert.logo}
                      alt={cert.provider}
                      referrerPolicy="no-referrer"
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>

                  <span className="px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                    Verified
                  </span>
                </div>

                {/* Certificate Name */}
                <h3
                  onClick={() => setSelectedCert(cert)}
                  className="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-cyan-400 transition-colors cursor-pointer mb-1 leading-snug"
                >
                  {cert.name}
                </h3>

                {/* Provider & Completion Date */}
                <div className="flex items-center gap-2 text-xs text-slate-400 font-mono mb-4">
                  <span className="text-cyan-400 font-semibold">{cert.provider}</span>
                  <span>•</span>
                  <span>{cert.date}</span>
                  {cert.coursesCount && (
                    <>
                      <span>•</span>
                      <span className="text-slate-300 font-semibold">{cert.coursesCount} Courses</span>
                    </>
                  )}
                </div>

                {/* Skills Learned Pills */}
                <div className="mb-6 space-y-2">
                  <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider block">
                    Skills Acquired:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-800/60 border border-slate-700/60 text-slate-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-800/40 flex items-center gap-3">
                <button
                  type="button"
                  id={`btn-inspect-cert-${cert.id}`}
                  onClick={() => setSelectedCert(cert)}
                  className={`flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl font-semibold text-xs sm:text-sm border transition-all ${
                    isDarkMode
                      ? 'border-slate-800 bg-slate-800/60 text-slate-200 hover:bg-slate-700'
                      : 'border-slate-200 bg-slate-100 text-slate-800 hover:bg-slate-200'
                  }`}
                >
                  <Eye className="w-4 h-4 text-cyan-400" />
                  <span>Inspect</span>
                </button>

                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  id={`btn-verify-cert-${cert.id}`}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-slate-950 bg-linear-to-r from-cyan-400 to-blue-400 hover:from-cyan-300 hover:to-blue-300 shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all hover:scale-[1.02]"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>View Credential</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal viewer */}
        <CertificateModal
          cert={selectedCert}
          onClose={() => setSelectedCert(null)}
          isDarkMode={isDarkMode}
        />
      </div>
    </section>
  );
};
