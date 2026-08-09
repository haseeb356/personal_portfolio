import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ExternalLink, FileDown, X } from 'lucide-react';
import resumePdfUrl from '../assets/files/Haseeb_Resume.pdf';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6">
          <motion.button
            type="button"
            aria-label="Close resume viewer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/85 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 18 }}
            transition={{ duration: 0.25 }}
            className="relative z-10 w-full max-w-5xl overflow-hidden rounded-3xl border border-cyan-500/20 bg-slate-900 shadow-[0_30px_120px_rgba(0,0,0,0.6)]"
          >
            <div className="flex items-center justify-between gap-4 border-b border-slate-800/80 px-4 py-3 sm:px-6">
              <div>
                <p className="text-xs font-mono font-semibold uppercase tracking-[0.24em] text-cyan-400">
                  Resume Preview
                </p>
                <h2 className="text-lg font-bold text-slate-100 sm:text-xl">
                  Haseeb Resume PDF
                </h2>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={resumePdfUrl}
                  download="Haseeb_Resume.pdf"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800 px-3 py-2 text-xs font-semibold text-slate-200 transition-colors hover:border-cyan-500/40 hover:text-cyan-300"
                >
                  <FileDown className="h-4 w-4" />
                  <span className="hidden sm:inline">Download</span>
                </a>
                <a
                  href={resumePdfUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-cyan-400 to-blue-500 px-3 py-2 text-xs font-bold text-slate-950 transition-transform hover:scale-[1.02]"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span className="hidden sm:inline">Open in new tab</span>
                </a>
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-xl border border-slate-700 bg-slate-800 p-2 text-slate-200 transition-colors hover:bg-slate-700 hover:text-white"
                  aria-label="Close"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="h-[78vh] bg-slate-950">
              <iframe
                title="Haseeb Resume PDF"
                src={resumePdfUrl}
                className="h-full w-full"
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};