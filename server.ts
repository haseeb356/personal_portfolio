import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;

app.use(express.json());

// Initialize Gemini AI Client lazily/safely
let aiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI | null {
  if (!aiClient && process.env.GEMINI_API_KEY) {
    try {
      aiClient = new GoogleGenAI({
        apiKey: process.env.GEMINI_API_KEY,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          },
        },
      });
    } catch (e) {
      console.error('Error initializing Gemini client:', e);
    }
  }
  return aiClient;
}

// Health check endpoint
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Interactive AI Portfolio Assistant Endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { message, history } = req.body;
    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Message string is required.' });
    }

    const ai = getGeminiClient();

    // Context prompt for Haseeb's AI Assistant
    const systemInstruction = `You are Haseeb's Personal Portfolio AI Assistant.
You speak politely, professionally, and enthusiastically on behalf of Haseeb.
Here is Haseeb's background information:
- Name: Haseeb
- Title: Computer Science Student @ UET Lahore (University of Engineering and Technology Lahore, Pakistan).
- Focus: Artificial Intelligence, Machine Learning, Full Stack Development, Explainable AI (XAI), LLMs, Generative AI, Data Science.
- Location: Lahore, Pakistan
- Email: safderhaseeb46@gmail.com
- GitHub: https://github.com/haseeb356/personal_portfolio
- LinkedIn: https://www.linkedin.com/in/haseeb-b36aa632a

Projects:
1. AI Student Success Predictor (Machine Learning): Predicts Drop Out / Enrolled / Graduate using ANOVA, Chi-Square, Logistic Regression, Random Forest, Gradient Boosting, SHAP explainability, FastAPI backend, React dashboard. (GitHub: https://github.com/haseeb356/ai-student-success-predictor)
2. Agenda Craft AI (Generative AI): Document-analyzing meeting agenda generator built with Google Gemini, Express, React, Node.js, Mammoth, Multer, structured JSON output. (GitHub: https://github.com/haseeb356/Agenda-Craft-AI)
3. Emotion Detector (NLP): IBM Watson NLP powered web app predicting text emotions via Flask REST API. (GitHub: https://github.com/haseeb356/oaqjp-final-project-emb-ai)
4. Multi-Agent Research Intelligence System (Collaborative Team Project): Multi-agent AI platform searching and summarizing academic arXiv papers using Google Gemini & Streamlit. Haseeb served as Project Manager. (GitHub: https://github.com/Abdul-Rehman131/multi-agent-research-ai)

Certifications:
- IBM AI Developer Professional Certificate (10 Courses: Python, Flask, GenAI, Prompt Engineering, REST APIs)
- Machine Learning Specialization (DeepLearning.AI & Stanford: Supervised ML, Regression, Classification)
- Google AI Professional Certificate (7 Courses: Prompt Engineering, GenAI, AI Productivity, Responsible AI)
- Google AI Essentials (5 Courses: AI Tools, Prompting, Responsible AI)
- Generative AI for Software Development (DeepLearning.AI: 3 Courses: LLMs, AI Software Engineering, System Design)

Skills:
- Programming: Python, JavaScript, TypeScript, SQL
- AI/ML: Scikit-learn, TensorFlow, SHAP, XAI, Prompt Engineering, LLM Apps, Gemini, IBM Watson NLP
- Backend: FastAPI, Flask, Node.js, Express.js, REST APIs
- Frontend: React, Vite, HTML, CSS, Tailwind CSS
- Databases: SQLite, PostgreSQL
- Tools: Git, GitHub, VS Code, Jupyter Notebook, Postman

Instructions:
Answer questions clearly, highlighting Haseeb's technical strength, project highlights, passion for AI engineering, and willingness to collaborate or discuss opportunities! Keep responses helpful, direct, formatted nicely with markdown or bullet points if appropriate.`;

    if (!ai) {
      // Smart offline fallback response when API key is not yet provided
      const responseText = `Hi there! I am Haseeb's Portfolio AI Assistant. Haseeb is a CS Student @ UET Lahore specializing in AI/ML & Full Stack Development. 

You can reach out directly to Haseeb at **safderhaseeb46@gmail.com** or explore his projects and certifications below!`;
      return res.json({ reply: responseText });
    }

    // Format chat history or generate content
    const contents = [];
    if (Array.isArray(history)) {
      for (const item of history) {
        if (item.role && item.text) {
          contents.push({
            role: item.role === 'user' ? 'user' : 'model',
            parts: [{ text: item.text }],
          });
        }
      }
    }
    contents.push({ role: 'user', parts: [{ text: message }] });

    const response = await ai.models.generateContent({
      model: 'gemini-3.6-flash',
      contents: contents,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    return res.json({ reply: response.text || "Thank you for asking! Haseeb is passionate about building intelligent AI software." });
  } catch (error: any) {
    console.error('Gemini API endpoint error:', error);
    return res.status(500).json({
      reply: "Haseeb's AI Assistant encountered a momentary glitch. Please feel free to send Haseeb an email at safderhaseeb46@gmail.com!",
    });
  }
});

// Setup Vite Dev Middleware vs Production Static Serving
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Portfolio server running on http://localhost:${PORT}`);
  });
}

startServer();
