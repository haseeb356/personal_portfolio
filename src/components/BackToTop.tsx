import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      id="btn-back-to-top"
      onClick={scrollToTop}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-40 p-3.5 rounded-2xl bg-linear-to-r from-cyan-400 to-blue-500 text-slate-950 font-bold shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:scale-110 active:scale-95 transition-all duration-200"
    >
      <ArrowUp className="w-5 h-5 text-slate-950" />
    </button>
  );
};
