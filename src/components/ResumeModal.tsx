import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ExternalLink, FileDown, X } from 'lucide-react';

const resumeText = `HASEEB
Computer Science Student | AI/ML & Full-Stack Development
Lahore, Pakistan | 0309-1688369 | safderhaseeb46@gmail.com
linkedin.com/in/haseeb-b36aa632a | github.com/haseeb356 | haseeb-tech-dev-13.vercel.app

SUMMARY
Computer Science student at UET Lahore with hands-on experience building machine learning, generative AI, and full-stack applications using Python, React, FastAPI, Flask, and modern ML frameworks. Experienced in developing, evaluating, and deploying practical software solutions through independent and collaborative projects, with a focus on explainable AI and LLM-powered tools. Seeking AI/ML, AI Engineering, or Full-Stack Development internship opportunities.

EDUCATION
BS Computer Science - University of Engineering and Technology (UET), Lahore

TECHNICAL SKILLS
Languages: Python, JavaScript, TypeScript, SQL
Machine Learning: Machine Learning, Scikit-learn, TensorFlow, SHAP, Explainable AI (XAI)
Generative AI: Large Language Models (LLMs), Prompt Engineering, Google Gemini API, IBM Watson NLP
Web & Backend: React, Vite, HTML, CSS, FastAPI, Flask, Node.js, Express.js, REST APIs
Databases: SQLite, PostgreSQL
Tools: Git, GitHub, VS Code, Jupyter Notebook, Postman

PROJECTS
AI Student Success Predictor | Python, Scikit-learn, FastAPI, React, Pandas, NumPy, SHAP
- Built a full-stack machine learning application predicting student outcomes (Dropout, Enrolled, Graduate) through an end-to-end pipeline covering data cleaning, exploratory data analysis, and statistical hypothesis testing (ANOVA, Chi-Square).
- Engineered features and trained/compared Logistic Regression, Random Forest, and Gradient Boosting classifiers, applying SHAP for model explainability.
- Developed a FastAPI backend to serve predictions and a React dashboard for interactive visualization of results.

Agenda Craft AI | Node.js, Express, React, TypeScript, Google Gemini API
- Developed an AI-powered meeting agenda generator that analyzes uploaded documents (via Multer and Mammoth) and produces structured agendas with summaries, stakeholders, and action items.
- Integrated the Google Gemini API with prompt engineering to generate structured JSON output, including intelligent time allocation for meeting segments.
- Built the application across an Express.js backend and a React frontend.

Multi-Agent Research Intelligence System (Team Project) | Python, Streamlit, Google Gemini API, arXiv API
- Collaborated on an AI-powered multi-agent platform that searches, analyzes, and summarizes academic papers using the Gemini API and arXiv API, including literature review and research gap analysis.
- Served as Project Manager, coordinating planning, task execution, and delivery across the team.

CERTIFICATIONS
- IBM AI Developer Professional Certificate - IBM (Coursera)
- Machine Learning Specialization - DeepLearning.AI & Stanford University (Coursera)
- Google AI Professional Certificate - Google (Coursera)
- Generative AI for Software Development - DeepLearning.AI (Coursera)
- Google AI Essentials - Google (Coursera)

ACHIEVEMENTS
- Merit-Based Honhaar Scholarship - Undergraduate Studies
- Laptop Award - Chief Minister's Laptop Scheme`;

const resumeDataUrl = `data:text/plain;charset=utf-8,${encodeURIComponent(resumeText)}`;

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
        <div className="fixed inset-0 z-60 flex items-center justify-center p-4 sm:p-6">
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
            className="relative z-10 w-full max-w-5xl overflow-hidden rounded-3xl border border-slate-300 bg-white shadow-[0_30px_120px_rgba(15,23,42,0.28)]"
          >
            <div className="flex items-center justify-between gap-4 border-b border-slate-200 px-4 py-3 sm:px-6">
              <div>
                <p className="text-xs font-mono font-semibold uppercase tracking-[0.24em] text-slate-500">
                  ATS Resume Preview
                </p>
                <h2 className="text-lg font-bold text-slate-900 sm:text-xl">
                  Haseeb Resume
                </h2>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={resumeDataUrl}
                  download="Haseeb_Resume.txt"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-700 transition-colors hover:border-slate-400 hover:text-slate-950"
                >
                  <FileDown className="h-4 w-4" />
                  <span className="hidden sm:inline">Download</span>
                </a>
                <a
                  href={resumeDataUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-3 py-2 text-xs font-bold text-white transition-transform hover:scale-[1.02]"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span className="hidden sm:inline">Open in new tab</span>
                </a>
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-xl border border-slate-300 bg-white p-2 text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-950"
                  aria-label="Close"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="h-[78vh] overflow-y-auto bg-slate-50 p-4 sm:p-6">
              <article className="mx-auto max-w-4xl rounded-2xl border border-slate-200 bg-white px-5 py-6 text-slate-900 shadow-sm sm:px-8 sm:py-8">
                <pre className="whitespace-pre-wrap wrap-break-word font-sans text-[15px] leading-7 text-slate-900">{resumeText}</pre>
              </article>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};