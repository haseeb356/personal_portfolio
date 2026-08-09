import { PERSONAL_INFO } from '../data/portfolioData';

const resumeLines = [
  'HASEEB',
  'Computer Science Student | AI/ML & Full-Stack Development',
  'Lahore, Pakistan | 0309-1688369 | safderhaseeb46@gmail.com',
  `linkedin.com/in/haseeb-b36aa632a | ${PERSONAL_INFO.github.replace(/^https?:\/\//, '')}`,
  '',
  'SUMMARY',
  'CS student at UET Lahore building ML, GenAI, and full-stack apps.',
  'Focus: explainable AI, LLM tools, FastAPI, React, and Flask.',
  '',
  'EDUCATION',
  'BS Computer Science - University of Engineering and Technology, Lahore',
  '',
  'SKILLS',
  'Python, JavaScript, TypeScript, SQL, Scikit-learn, TensorFlow, SHAP',
  'React, Vite, FastAPI, Flask, Node.js, Express.js',
  'SQLite, PostgreSQL, Git, GitHub, Jupyter, Postman',
  '',
  'PROJECTS',
  'AI Student Success Predictor - FastAPI, React, SHAP',
  'Agenda Craft AI - Gemini, Express, React, TypeScript',
  'Multi-Agent Research Intelligence - Gemini, Streamlit, arXiv',
  '',
  'CERTIFICATIONS',
  'IBM AI Developer Professional Certificate',
  'Supervised ML - Regression and Classification',
  'Google AI Professional Certificate',
  'Generative AI for Software Development',
];

function escapePdfText(text: string): string {
  return text.replace(/([\\()])/g, '\\$1');
}

export function buildResumePdfDataUrl(): string {
  const contentLines = [
    'BT',
    '/F1 18 Tf',
    '72 760 Td',
    `(${escapePdfText(resumeLines[0])}) Tj`,
    '/F1 11 Tf',
    ...resumeLines.slice(1).flatMap((line) => ['0 -18 Td', `(${escapePdfText(line)}) Tj`]),
    'ET',
  ];

  const stream = `${contentLines.join('\n')}\n`;
  const objects = [
    '%PDF-1.4\n',
    '1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n',
    '2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n',
    '3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>\nendobj\n',
    '4 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n',
    `5 0 obj\n<< /Length ${stream.length} >>\nstream\n${stream}endstream\nendobj\n`,
  ];

  let pdf = '';
  const offsets = [0];

  for (const object of objects) {
    offsets.push(pdf.length);
    pdf += object;
  }

  const xrefStart = pdf.length;
  let xref = 'xref\n0 6\n0000000000 65535 f \n';

  for (let index = 1; index < offsets.length; index += 1) {
    xref += `${String(offsets[index]).padStart(10, '0')} 00000 n \n`;
  }

  xref += `trailer\n<< /Size 6 /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF\n`;
  pdf += xref;

  return `data:application/pdf;base64,${btoa(pdf)}`;
}