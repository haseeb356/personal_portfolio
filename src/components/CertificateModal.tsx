import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Certification } from '../types';
import { X, ExternalLink, Award, CheckCircle2, ShieldCheck } from 'lucide-react';

interface CertificateModalProps {
  cert: Certification | null;
  onClose: () => void;
  isDarkMode: boolean;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ cert, onClose, isDarkMode }) => {
  if (!cert) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className={`relative w-full max-w-2xl rounded-3xl border shadow-2xl overflow-hidden z-10 p-6 sm:p-8 ${
            isDarkMode
              ? 'bg-slate-900 border-slate-800 text-slate-100'
              : 'bg-white border-slate-200 text-slate-900'
          }`}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-slate-800/60 text-slate-300 hover:text-white transition-colors border border-slate-700"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-white p-2 flex items-center justify-center border border-slate-700 shadow-md shrink-0">
              <img
                src={cert.logo}
                alt={cert.provider}
                referrerPolicy="no-referrer"
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-md bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold">
                  {cert.provider}
                </span>
                <span className="text-xs text-slate-400 font-mono">{cert.date}</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold mt-1 text-slate-900 dark:text-slate-100">
                {cert.name}
              </h2>
            </div>
          </div>

          {/* Verification Badge */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-950/30 via-slate-900 to-cyan-950/30 border border-emerald-500/30 flex items-center gap-3 mb-6">
            <ShieldCheck className="w-6 h-6 text-emerald-400 shrink-0" />
            <div>
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider block">
                Verified Coursera Credential
              </span>
              <p className="text-xs text-slate-300 font-mono mt-0.5">
                Identity and course completion verified online.
              </p>
            </div>
          </div>

          {/* Certificate Summary */}
          {cert.certificateSummary && (
            <div className="mb-6">
              <h3 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">
                Summary & Course Scope
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {cert.certificateSummary}
              </p>
            </div>
          )}

          {/* Completed Sub-courses if any */}
          {cert.completedDetails && (
            <div className="mb-6">
              <h3 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">
                Completed Course Modules
              </h3>
              <div className="space-y-2">
                {cert.completedDetails.map((detail, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 text-xs text-slate-300 p-2 rounded-lg bg-slate-800/40"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Skills Learned */}
          <div className="mb-8">
            <h3 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-3">
              Skills Acquired
            </h3>
            <div className="flex flex-wrap gap-2">
              {cert.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-cyan-950/40 border border-cyan-500/30 text-cyan-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* View Credential CTA */}
          <div className="pt-4 border-t border-slate-800 flex justify-end">
            <a
              href={cert.verifyUrl}
              target="_blank"
              rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-linear-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 font-bold text-sm shadow-[0_0_20px_rgba(6,182,212,0.35)] transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Verify Credential on Coursera</span>
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
