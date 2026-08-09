import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  Mail,
  Github,
  Linkedin,
  MapPin,
  Copy,
  Check,
  MessageCircle,
  Phone,
  Send,
  ExternalLink,
} from 'lucide-react';

interface ContactProps {
  isDarkMode: boolean;
}

export const Contact: React.FC<ContactProps> = ({ isDarkMode }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const predefinedMessages = [
    'Hi Haseeb, I would like to discuss an AI/ML project with you.',
    'Hello Haseeb, I saw your portfolio and would love to collaborate!',
    'Hi Haseeb, are you available for freelance or internship opportunities?',
  ];

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/30 text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <MessageCircle className="w-3.5 h-3.5 fill-emerald-400" />
            <span>Direct WhatsApp Contact</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
            Get in Touch via <span className="bg-linear-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">WhatsApp</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mt-3 max-w-xl text-base sm:text-lg">
            Connect directly with Haseeb on WhatsApp for instant messaging, project inquiries, and collaborations.
          </p>
          <div className="w-16 h-1 bg-linear-to-r from-emerald-400 to-cyan-400 rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Direct WhatsApp Hero Banner */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`lg:col-span-7 p-8 sm:p-10 rounded-3xl border flex flex-col justify-between relative overflow-hidden ${
              isDarkMode
                ? 'bg-slate-900/80 border-slate-800 backdrop-blur-xl'
                : 'bg-white border-slate-200 shadow-xl'
            }`}
          >
            {/* Background Ambient Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3.5 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.3)]">
                  <MessageCircle className="w-8 h-8 fill-emerald-400 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-slate-900 dark:text-slate-100">
                    WhatsApp Messenger
                  </h3>
                  <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider block">
                    Online & Active
                  </span>
                </div>
              </div>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                Click below to start an instant conversation on WhatsApp with Haseeb.
              </p>

              {/* Phone Number Display Box */}
              <div
                className={`p-5 rounded-2xl border flex items-center justify-between gap-4 mb-8 ${
                  isDarkMode ? 'bg-slate-950/70 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <Phone className="w-5 h-5 text-emerald-400 shrink-0" />
                  <div>
                    <span className="text-[11px] font-mono font-semibold text-slate-400 uppercase tracking-wider block">
                      Phone / WhatsApp Number
                    </span>
                    <a
                      href={PERSONAL_INFO.whatsapp}
                      target="_blank"
                      rel="noreferrer"
                      className="text-lg font-mono font-bold text-slate-900 dark:text-slate-100 hover:text-emerald-400 transition-colors"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  id="btn-copy-phone"
                  onClick={handleCopyPhone}
                  title="Copy Phone Number"
                  className="px-3 py-2 rounded-xl border border-slate-700 bg-slate-800 text-slate-200 hover:text-emerald-400 hover:bg-slate-700 transition-all text-xs font-mono font-semibold flex items-center gap-1.5 shrink-0"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Predefined Quick Chat Messages */}
              <div className="mb-8">
                <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block mb-3">
                  Quick Start Templates
                </span>
                <div className="space-y-2">
                  {predefinedMessages.map((msg, idx) => (
                    <a
                      key={idx}
                      href={`https://wa.me/923091688369?text=${encodeURIComponent(msg)}`}
                      target="_blank"
                      rel="noreferrer"
                      id={`btn-wa-msg-${idx}`}
                      className={`group p-3.5 rounded-xl border flex items-center justify-between text-xs sm:text-sm font-medium transition-all duration-200 ${
                        isDarkMode
                          ? 'bg-slate-800/40 border-slate-800/80 hover:border-emerald-500/40 text-slate-300 hover:text-emerald-300 hover:bg-slate-800'
                          : 'bg-slate-50 border-slate-200 hover:border-emerald-400 text-slate-700 hover:text-emerald-600 hover:bg-emerald-50/50'
                      }`}
                    >
                      <span>"{msg}"</span>
                      <Send className="w-4 h-4 text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-2" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Action Button */}
            <a
              href={PERSONAL_INFO.whatsapp}
              target="_blank"
              rel="noreferrer"
              id="btn-main-whatsapp-chat"
              className="w-full inline-flex items-center justify-center gap-3 py-4 px-8 rounded-2xl font-extrabold text-base sm:text-lg text-slate-950 bg-emerald-400 hover:bg-emerald-300 shadow-[0_0_30px_rgba(52,211,153,0.4)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageCircle className="w-6 h-6 fill-slate-950 text-slate-950" />
              <span>Open Chat on WhatsApp</span>
              <ExternalLink className="w-5 h-5 text-slate-950" />
            </a>
          </motion.div>

          {/* Right Column: Other Contact Channels */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-4 flex flex-col justify-between"
          >
            {/* Email Card */}
            <div
              className={`p-6 rounded-3xl border flex items-center justify-between gap-4 transition-all duration-300 hover:border-cyan-500/40 ${
                isDarkMode ? 'bg-slate-900/60 border-slate-800 backdrop-blur-xl' : 'bg-white border-slate-200 shadow-md'
              }`}
            >
              <div className="flex items-center gap-4 min-w-0">
                <div className="p-3.5 rounded-2xl bg-cyan-950/50 border border-cyan-500/30 text-cyan-400 shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block">
                    Direct Email
                  </span>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-sm font-semibold text-slate-900 dark:text-slate-100 hover:text-cyan-400 transition-colors truncate block"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <button
                type="button"
                id="btn-copy-email"
                onClick={handleCopyEmail}
                title="Copy email to clipboard"
                className="p-2.5 rounded-xl border border-slate-700 bg-slate-800/60 text-slate-300 hover:text-cyan-400 hover:bg-slate-700 transition-all shrink-0"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* GitHub Card */}
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              id="contact-card-github"
              className={`p-6 rounded-3xl border flex items-center gap-4 transition-all duration-300 hover:border-cyan-500/40 hover:-translate-y-1 ${
                isDarkMode ? 'bg-slate-900/60 border-slate-800 backdrop-blur-xl' : 'bg-white border-slate-200 shadow-md'
              }`}
            >
              <div className="p-3.5 rounded-2xl bg-slate-800 border border-slate-700 text-slate-200 shrink-0">
                <Github className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block">
                  GitHub Profile
                </span>
                <span className="text-sm font-semibold text-slate-900 dark:text-slate-100 hover:text-cyan-400 transition-colors">
                  {PERSONAL_INFO.github.replace(/^https?:\/\//, '')}
                </span>
              </div>
            </a>

            {/* LinkedIn Card */}
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              id="contact-card-linkedin"
              className={`p-6 rounded-3xl border flex items-center gap-4 transition-all duration-300 hover:border-cyan-500/40 hover:-translate-y-1 ${
                isDarkMode ? 'bg-slate-900/60 border-slate-800 backdrop-blur-xl' : 'bg-white border-slate-200 shadow-md'
              }`}
            >
              <div className="p-3.5 rounded-2xl bg-blue-950/50 border border-blue-500/30 text-blue-400 shrink-0">
                <Linkedin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block">
                  LinkedIn Professional
                </span>
                <span className="text-sm font-semibold text-slate-900 dark:text-slate-100 hover:text-cyan-400 transition-colors">
                  linkedin.com/in/haseeb-b36aa632a
                </span>
              </div>
            </a>

            {/* Location Card */}
            <div
              className={`p-6 rounded-3xl border flex items-center gap-4 ${
                isDarkMode ? 'bg-slate-900/60 border-slate-800 backdrop-blur-xl' : 'bg-white border-slate-200 shadow-md'
              }`}
            >
              <div className="p-3.5 rounded-2xl bg-emerald-950/50 border border-emerald-500/30 text-emerald-400 shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block">
                  Location
                </span>
                <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                  {PERSONAL_INFO.location}
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
