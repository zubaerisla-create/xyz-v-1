"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, User, X, Mail, PhoneCall } from 'lucide-react';
const logo = '/logo.jpg';

// Gemini API Key from environment variable
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY || "";

const SYSTEM_PROMPT = `
You are the official AI Assistant for Abdullah Al Zubaer's personal portfolio website.

=== STRICT BOUNDARY RULE ===
You MUST ONLY answer questions that are directly related to Abdullah Al Zubaer, his technical skills, work experience, projects, services/subscription tiers, education, background, and contact details.
If the user asks ANY question outside of Abdullah Al Zubaer's information (for example: general programming help, math, trivia, news, jokes, or non-portfolio topics), you MUST POLITELY DECLINE and state:
"I am Abdullah Al Zubaer's personal AI assistant. I can only answer questions related to Abdullah's portfolio, technical skills, projects, service subscriptions, and contact details. Feel free to ask about any of those!"

=== FORMATTING INSTRUCTION ===
Format your responses using clean Markdown structure:
- Use **Bold** for emphasis and technology names.
- Use bullet lists (- Item) or numbered lists (1. Item) for listing skills, projects, and services.
- Keep paragraphs brief and easy to read.

=== ABDULLAH AL ZUBAER'S VERIFIED KNOWLEDGE BASE ===
- Name: Abdullah Al Zubaer
- Professional Title: Full Stack Developer & Mobile Application Engineer
- Email: zubaerislam703@gmail.com
- Phone / WhatsApp: +880 15600 47265
- Location: Dhaka, Bangladesh

- Core Expertise & Technical Skills:
  * Frontend: React.js, Next.js, TypeScript, JavaScript, Tailwind CSS, Framer Motion, GSAP, Responsive Web Design.
  * Mobile App Development & iOS: React Native, Flutter, Dart, iOS App Deployment, Xcode, TestFlight Beta Testing, Apple App Store & Google Play Store Publishing.
  * DevOps, AWS & Server Management: AWS (EC2, S3, CloudFront, Route53), Linux VPS Server Administration, Nginx Reverse Proxy, Docker Containers, SSL/Certbot, PM2.
  * Backend & Databases: Node.js, Express.js, Python (Django, FastAPI), PostgreSQL, MongoDB, Prisma ORM, REST APIs, WebSockets, Redis.
  * App & API Testing: API Testing (Postman), Unit & Integration Testing (Jest, Cypress), Automated QA for Mobile & Web.
  * SEO & Performance: Lighthouse 95+ Score, SSG/SSR Hybrid Rendering, Core Web Vitals, CDN Caching.

- Subscription Plans & Services:
  1. Web Development ($499 / project or month): Custom React/Next.js, VPS Server & Nginx Setup, SEO & Core Web Vitals Optimization, API Testing & 1 Month Free Support.
  2. Full Stack & Mobile App ($999 / project or month): Complete Web Platform + Android & iOS Mobile App, iOS Deployment (TestFlight & App Store), Node.js/Express/Django Backend, VPS & AWS Deployment with Docker & SSL, 3 Months Support & QA Testing.
  3. Enterprise & Optimization ($1,499 / custom tier): AWS Cloud Infrastructure (EC2, S3, CloudFront), Linux VPS Clustering & Nginx Load Balancing, End-to-End Automated Testing, Lighthouse 95+ Speed Overhaul, AI Automation & Custom AI Agents, 24/7 Priority Support.

- Featured Projects:
  1. Transwestern: Commercial Real Estate Platform (Next.js, FastAPI, Tailwind CSS, SEO).
  2. Shred Nations: Secure Document Destruction & Management Marketplace with millions of users (Next.js, Node.js, PostgreSQL, Redis).
  3. Doing-Stand: Content & Marketing Blog Platform handling 100K+ traffic (Next.js, SSR/SSG, Redis, Cloudflare).
  4. RENG: Premium Handcrafted Luxury Lighting E-commerce Platform (Next.js, Stripe, Prisma, PostgreSQL).
  5. Recreation Dallas: Creative Agency Portfolio with interactive Framer Motion & GSAP animations.
  6. ScoreLivePro: Real-time Live Football Scores Android App published on Google Play Store (Flutter, Dart, FCM).
  7. FastChat: Real-time Mobile Messaging Android App published on Google Play Store (React Native, Firebase).
`;

const SUGGESTIONS = [
  "What are Abdullah's top skills?",
  "Show me your web & mobile projects",
  "What are your service pricing plans?",
  "How can I contact Abdullah?"
];

// Fallback response generator with rich structure
const getFallbackResponse = (userQuery) => {
  const query = userQuery.toLowerCase();

  if (query.includes("skill") || query.includes("stack") || query.includes("technology")) {
    return "**Abdullah's Technical Stack:**\n\n- **Frontend:** React.js, Next.js, TypeScript, Tailwind CSS, Framer Motion, GSAP\n- **Mobile:** React Native, Flutter, Dart, Firebase FCM\n- **Backend:** Node.js, Express, Python (Django, FastAPI)\n- **Database & Cloud:** PostgreSQL, MongoDB, Prisma, Redis, REST APIs";
  }
  if (query.includes("project") || query.includes("work") || query.includes("portfolio")) {
    return "**Abdullah's Featured Projects:**\n\n1. **Transwestern:** Commercial Real Estate Platform (Next.js, FastAPI)\n2. **Shred Nations:** High-traffic Document Destruction Marketplace (Next.js, PostgreSQL, Redis)\n3. **ScoreLivePro:** Live Football Android App on Play Store (Flutter, FCM)\n4. **FastChat:** Real-time Mobile Messaging App on Play Store (React Native)\n5. **RENG:** Luxury E-commerce Platform (Next.js, Stripe)";
  }
  if (query.includes("service") || query.includes("price") || query.includes("subscription") || query.includes("cost")) {
    return "**Services & Subscription Tiers:**\n\n- **Web Development ($499):** Custom React/Next.js, 100% Responsive, SEO & Core Web Vitals.\n- **Full Stack & Mobile App ($999):** Web Platform + Android/iOS App, Node.js/Django, 3 Months Support.\n- **Enterprise & Optimization ($1,499):** Microservices, 95+ Lighthouse Score, AI Agent Integration.";
  }
  if (query.includes("contact") || query.includes("email") || query.includes("hire") || query.includes("phone") || query.includes("reach")) {
    return "**Contact Information:**\n\n- **Email:** zubaerislam703@gmail.com\n- **Phone / WhatsApp:** +880 15600 47265\n- **Location:** Dhaka, Bangladesh\n\nYou can also click the **Get In Touch** button on the portfolio to send a message directly!";
  }

  return "I am Abdullah Al Zubaer's personal AI Assistant. I am specifically trained to answer questions about Abdullah's skills, projects, experience, subscription services, and contact details. Feel free to ask me anything about his work!";
};

// Custom Markdown & Rich Text Component for smooth UX
const FormattedMessage = ({ text }) => {
  if (!text) return null;

  const lines = text.split('\n');
  const elements = [];

  lines.forEach((line, idx) => {
    let trimmed = line.trim();
    if (!trimmed) {
      elements.push(<div key={idx} className="h-1.5" />);
      return;
    }

    // Header check (### Header or **Header:**)
    if (trimmed.startsWith('###') || (trimmed.startsWith('**') && trimmed.endsWith('**') && !trimmed.includes(': '))) {
      const headerText = trimmed.replace(/^###\s*/, '').replace(/\*\*/g, '');
      elements.push(
        <div key={idx} className="font-bold text-xs sm:text-sm text-sky-300 mt-2 mb-1 flex items-center gap-1.5 border-b border-slate-700/50 pb-1">
          <Sparkles className="w-3.5 h-3.5 text-sky-400 shrink-0" />
          <span>{headerText}</span>
        </div>
      );
      return;
    }

    // Bullet point check (- item or * item)
    if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
      const content = trimmed.substring(2);
      elements.push(
        <div key={idx} className="flex items-start gap-2 my-1 text-slate-200">
          <span className="text-sky-400 mt-1 text-[10px]">●</span>
          <div className="flex-1 leading-normal">{renderInlineFormatting(content)}</div>
        </div>
      );
      return;
    }

    // Numbered list (1. item)
    const numberedMatch = trimmed.match(/^(\d+)\.\s+(.*)/);
    if (numberedMatch) {
      const num = numberedMatch[1];
      const content = numberedMatch[2];
      elements.push(
        <div key={idx} className="flex items-start gap-2 my-1.5 p-2 rounded-xl bg-slate-900/60 border border-slate-700/40">
          <span className="px-2 py-0.5 rounded-md bg-sky-500/20 text-sky-400 font-bold text-xs shrink-0">{num}</span>
          <div className="flex-1 text-slate-200 leading-normal">{renderInlineFormatting(content)}</div>
        </div>
      );
      return;
    }

    // Paragraph
    elements.push(
      <p key={idx} className="my-1 leading-relaxed text-slate-200">
        {renderInlineFormatting(trimmed)}
      </p>
    );
  });

  return <div className="space-y-0.5">{elements}</div>;
};

// Inline formatting helper (**bold**, `code`, etc.)
const renderInlineFormatting = (text) => {
  const parts = text.split(/(\*\*.*?\*\*|`.*?`)/g);

  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      const inner = part.slice(2, -2);
      return (
        <strong key={index} className="font-semibold text-white bg-slate-800/80 px-1 py-0.5 rounded border border-slate-700/50">
          {inner}
        </strong>
      );
    }
    if (part.startsWith('`') && part.endsWith('`')) {
      return (
        <code key={index} className="text-xs px-1.5 py-0.5 bg-sky-950 text-sky-300 font-mono rounded border border-sky-800/50">
          {part.slice(1, -1)}
        </code>
      );
    }
    return part;
  });
};

const Chat = ({ onClose }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "ai",
      text: "Hello! I am Abdullah Al Zubaer's personal AI Assistant. Ask me anything about Abdullah's skills, projects, service subscriptions, or background!",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const callGeminiAPI = async (userText) => {
    const contents = [
      {
        role: "user",
        parts: [{ text: `${SYSTEM_PROMPT}\n\nUser Question: ${userText}` }]
      }
    ];

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents,
            generationConfig: {
              temperature: 0.3,
              maxOutputTokens: 700
            }
          })
        }
      );

      const data = await response.json();

      if (data.candidates && data.candidates[0]?.content?.parts[0]?.text) {
        return data.candidates[0].content.parts[0].text;
      }
      
      const fallbackRes = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents,
            generationConfig: { temperature: 0.3 }
          })
        }
      );
      const fallbackData = await fallbackRes.json();
      if (fallbackData.candidates && fallbackData.candidates[0]?.content?.parts[0]?.text) {
        return fallbackData.candidates[0].content.parts[0].text;
      }

      throw new Error("Gemini response empty");
    } catch (error) {
      console.warn("Gemini API fallback engaged:", error);
      return getFallbackResponse(userText);
    }
  };

  const handleSend = async (textToSend) => {
    const queryText = (textToSend || input).trim();
    if (!queryText || isLoading) return;

    const userMsg = {
      id: Date.now(),
      sender: "user",
      text: queryText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    const aiReplyText = await callGeminiAPI(queryText);

    const aiMsg = {
      id: Date.now() + 1,
      sender: "ai",
      text: aiReplyText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, aiMsg]);
    setIsLoading(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-[85vh] max-h-[620px] sm:h-[620px] w-full max-w-md mx-auto bg-slate-900 border border-slate-700/80 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden font-sans text-slate-100">
      {/* Header */}
      <div className="flex items-center justify-between px-3.5 sm:px-5 py-3 sm:py-4 bg-slate-800/95 border-b border-slate-700/60 backdrop-blur-md shrink-0">
        <div className="flex items-center space-x-2.5 sm:space-x-3 min-w-0">
          <div className="relative shrink-0">
            <img
              src={logo}
              alt="Abdullah Al Zubaer Logo"
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover border-2 border-sky-500 p-0.5 shadow-md"
            />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-emerald-500 border-2 border-slate-900 rounded-full"></span>
          </div>
          <div className="min-w-0">
            <h3 className="text-xs sm:text-sm font-bold text-white tracking-wide truncate">Abdullah's AI Agent</h3>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-[11px] sm:text-xs text-emerald-400 font-medium">Online</span>
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          className="p-1.5 sm:p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-700/60 transition-colors cursor-pointer shrink-0 ml-2"
          aria-label="Close chat"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>

      {/* Messages Feed */}
      <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 bg-slate-950/70">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex gap-2 sm:gap-3 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            {msg.sender === "ai" && (
              <img
                src={logo}
                alt="AI Avatar"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover border border-sky-500/50 shrink-0 mt-1 shadow-sm"
              />
            )}

            <div
              className={`max-w-[85%] sm:max-w-[85%] p-3 sm:p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed shadow-md break-words ${
                msg.sender === "user"
                  ? "bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-tr-none font-medium"
                  : "bg-slate-800/90 text-slate-200 border border-slate-700/70 rounded-tl-none"
              }`}
            >
              {msg.sender === "user" ? (
                <div className="whitespace-pre-line break-words">{msg.text}</div>
              ) : (
                <FormattedMessage text={msg.text} />
              )}
              <span
                className={`block text-[10px] mt-1.5 text-right ${
                  msg.sender === "user" ? "text-sky-100/70" : "text-slate-500"
                }`}
              >
                {msg.time}
              </span>
            </div>

            {msg.sender === "user" && (
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-700 flex items-center justify-center shrink-0 text-slate-300 mt-1">
                <User className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
              </div>
            )}
          </div>
        ))}

        {/* Loading Indicator */}
        {isLoading && (
          <div className="flex gap-2 sm:gap-3 justify-start items-center">
            <img
              src={logo}
              alt="AI Avatar"
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover border border-sky-500/50 shrink-0 shadow-sm"
            />
            <div className="bg-slate-800/90 border border-slate-700/70 p-2.5 sm:p-3 rounded-2xl rounded-tl-none flex items-center space-x-1.5 sm:space-x-2">
              <div className="w-2 h-2 rounded-full bg-sky-400 animate-bounce" style={{ animationDelay: '0ms' }} />
              <div className="w-2 h-2 rounded-full bg-sky-400 animate-bounce" style={{ animationDelay: '150ms' }} />
              <div className="w-2 h-2 rounded-full bg-sky-400 animate-bounce" style={{ animationDelay: '300ms' }} />
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Suggestion Chips */}
      {messages.length < 6 && (
        <div className="px-3 sm:px-4 py-2 bg-slate-900 border-t border-slate-800 flex gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar shrink-0">
          {SUGGESTIONS.map((sug, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(sug)}
              className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-slate-800 hover:bg-slate-700 border border-slate-700 text-[10px] sm:text-[11px] text-sky-300 whitespace-nowrap transition-colors cursor-pointer shrink-0"
            >
              {sug}
            </button>
          ))}
        </div>
      )}

      {/* Footer Contact Quick Links */}
      <div className="px-3 sm:px-4 py-1.5 sm:py-2 bg-slate-900/90 border-t border-slate-800/80 flex items-center justify-between text-[10px] sm:text-[11px] text-slate-400 shrink-0 min-w-0 gap-2 overflow-hidden">
        <a
          href="mailto:zubaerislam703@gmail.com"
          className="flex items-center gap-1 hover:text-sky-400 transition-colors min-w-0 truncate"
        >
          <Mail className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-sky-400 shrink-0" />
          <span className="truncate">zubaerislam703@gmail.com</span>
        </a>
        <a
          href="https://wa.me/8801560047265"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1 hover:text-emerald-400 transition-colors shrink-0"
        >
          <PhoneCall className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400 shrink-0" />
          <span>+880 15600 47265</span>
        </a>
      </div>

      {/* Input Box */}
      <div className="p-2.5 sm:p-3 bg-slate-900 border-t border-slate-800 shrink-0">
        <div className="relative flex items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Ask about skills, projects, or pricing..."
            disabled={isLoading}
            className="w-full pl-3.5 sm:pl-4 pr-11 sm:pr-12 py-2.5 sm:py-3 rounded-2xl bg-slate-800 text-slate-100 placeholder-slate-500 text-xs sm:text-sm border border-slate-700/80 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
          />
          <button
            onClick={() => handleSend()}
            disabled={!input.trim() || isLoading}
            className="absolute right-1.5 sm:right-2 p-1.5 sm:p-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white disabled:opacity-40 disabled:cursor-not-allowed hover:scale-105 transition-transform cursor-pointer"
            aria-label="Send message"
          >
            <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;