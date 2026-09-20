"use client";

import React, { useState, useEffect, useContext, useRef } from 'react'
import { ModeContext } from '../../contexts/ModeContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCode,
  faBriefcase,
  faBuilding,
  faMapMarkerAlt,
  faCalendarDays
} from '@fortawesome/free-solid-svg-icons'
import { faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons'

const Experience = () => {
  const { mode } = useContext(ModeContext)
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [lineProgress, setLineProgress] = useState(0)
  const sectionRef = useRef(null)
  const lineRef = useRef(null)

  useEffect(() => {
    setIsDarkMode(mode)
  }, [mode])

  // Mouse scroll → animate center timeline line
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const windowH = window.innerHeight
      // Start filling when section enters viewport, fill fully when it's scrolled past
      const start = rect.top - windowH
      const end = rect.bottom - windowH * 0.2
      const total = end - start
      const scrolled = -start
      const progress = Math.min(Math.max(scrolled / total, 0), 1)
      setLineProgress(progress)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const experiences = [
    {
      id: 1,
      title: "Full Stack Engineer",
      company: "Hosen Soft",
      type: "Full-time",
      location: "Remote",
      duration: "Sep 2026 - Present",
      description: `As a Full Stack Engineer at Hosen Soft, I work on building scalable web applications, business software, and AI-powered automation solutions. I contribute across the full development lifecycle, from designing and developing modern user interfaces to building backend systems, APIs, database architecture, and third-party integrations.`,
      skills: [
        "React.js", "Next.js", "Node.js", "Express.js", "TypeScript",
        "Django", "FastAPI", "PostgreSQL", "MongoDB", "Prisma",
        "Docker", "Nginx", "AI Automation", "AI Agents", "System Design"
      ],
      icon: faNodeJs,
      color: "from-emerald-500 to-teal-500",
      dot: "bg-gradient-to-br from-emerald-500 to-teal-500",
      side: "left" // left card, right empty
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "Join Venture AI",
      type: "Full-time",
      location: "On-site",
      duration: "Oct 2025 - Aug 2026 · 11 mos",
      description: `As a Full Stack Developer at Join Venture AI, I worked on developing and maintaining scalable web applications and business-focused digital solutions. My responsibilities included building responsive front-end interfaces, developing robust backend systems, integrating APIs, managing databases, and implementing secure and efficient workflows.`,
      skills: [
        "React.js", "Next.js", "JavaScript", "TypeScript", "Node.js",
        "Express.js", "MongoDB", "REST APIs", "Tailwind CSS",
        "Docker", "AI Agents", "Git", "Performance Optimization"
      ],
      icon: faCode,
      color: "from-purple-500 to-indigo-500",
      dot: "bg-gradient-to-br from-purple-500 to-indigo-500",
      side: "right" // right card, left empty
    },
    {
      id: 3,
      title: "Web Developer",
      company: "Softvence Agency",
      type: "Full-time",
      location: "On-site",
      duration: "Jul 2025 - Sep 2025 · 3 mos",
      description: "As a Web Developer at Softvence Agency, I worked on building responsive and dynamic websites tailored to client needs. My responsibilities included developing front-end applications using Framer, Webflow, React.js, Firebase, and Tailwind CSS, along with integrating APIs for seamless functionality. I focused on creating SEO-friendly and performance-optimized websites.",
      skills: ["Framer", "Webflow", "React.js", "Firebase", "Tailwind CSS", "API Integration", "SEO", "Performance Optimization"],
      icon: faCode,
      color: "from-blue-500 to-cyan-500",
      dot: "bg-gradient-to-br from-blue-500 to-cyan-500",
      side: "left"
    },
    {
      id: 4,
      title: "Frontend Developer",
      company: "InnoBugz Solutions",
      type: "Part-time",
      location: "Remote",
      duration: "Nov 2024 - Mar 2025 · 5 mos",
      description: "As a Frontend Developer at InnoBugz Solutions, I contributed to the development of user-facing features using modern web technologies. I collaborated with the development team to implement responsive designs and enhance user experience across multiple platforms.",
      skills: ["React.js", "Node.js", "JavaScript", "HTML/CSS", "Responsive Design", "UI/UX"],
      icon: faReact,
      color: "from-pink-500 to-rose-500",
      dot: "bg-gradient-to-br from-pink-500 to-rose-500",
      side: "right"
    }
  ]

  const stats = [
    { number: "1M+", label: "User Requests Handled" },
    { number: "4", label: "Companies Worked" },
    { number: "3+", label: "Years Experience" }
  ]

  const cardBase = isDarkMode
    ? "bg-slate-800/70 backdrop-blur-sm border border-slate-700/60 hover:border-slate-500/80 hover:shadow-2xl"
    : "bg-white/80 backdrop-blur-sm border border-gray-200/60 hover:border-sky-200/80 hover:shadow-xl"

  const bg = isDarkMode
    ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    : "bg-[#f5f4f0]"

  return (
    <div ref={sectionRef} name="experience" className={`transition-colors duration-300 ${bg} py-12 md:py-20 overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Background blobs */}
        <div className={`pointer-events-none absolute top-0 left-0 w-full h-96 ${
          isDarkMode ? 'bg-gradient-to-r from-sky-400/5 to-blue-600/5' : 'bg-gradient-to-r from-sky-200/20 to-blue-200/20'
        } rounded-b-full blur-3xl`} />
        <div className={`pointer-events-none absolute bottom-0 right-0 w-96 h-96 ${
          isDarkMode ? 'bg-gradient-to-l from-cyan-400/5 to-emerald-600/5' : 'bg-gradient-to-l from-cyan-200/20 to-emerald-200/20'
        } rounded-full blur-3xl`} />

        {/* Header */}
        <header className="text-center mb-10 md:mb-14 relative z-10">
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-bold uppercase tracking-wider mb-4 ${
            isDarkMode
              ? 'bg-sky-500/10 text-sky-400 border-sky-500/20'
              : 'bg-sky-500/10 text-sky-600 border-sky-500/20'
          }`}>
            <FontAwesomeIcon icon={faBriefcase} />
            <span>Career Journey</span>
          </div>
          <h2 className={`text-4xl md:text-5xl font-extrabold bg-gradient-to-r ${
            isDarkMode
              ? 'from-slate-100 via-sky-200 to-blue-200'
              : 'from-slate-800 via-sky-600 to-blue-600'
          } bg-clip-text text-transparent tracking-tight`}>
            Work Experience
          </h2>
          <p className={`mt-3 text-base max-w-xl mx-auto ${isDarkMode ? 'text-slate-400' : 'text-gray-500'}`}>
            A timeline of professional roles, projects, and growth across top companies.
          </p>
        </header>

        {/* Stats */}
        <section className="mb-12 md:mb-16 relative z-10">
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
            {stats.map((stat, i) => (
              <div key={i} className={`text-center p-5 rounded-2xl border transition-all duration-300 hover:scale-105 ${
                isDarkMode
                  ? 'bg-slate-800/60 border-slate-700/50 hover:border-slate-600/70'
                  : 'bg-white/70 border-gray-200/50 hover:border-sky-200/70'
              }`}>
                <div className={`text-3xl font-bold mb-1 bg-gradient-to-r ${
                  isDarkMode ? 'from-sky-300 to-blue-300' : 'from-sky-600 to-blue-600'
                } bg-clip-text text-transparent`}>{stat.number}</div>
                <div className={`text-xs font-medium ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="relative z-10">
          {/* Desktop: 3-column grid with center line */}
          <div className="hidden md:block">
            {/* The center track container */}
            <div className="relative">
              {/* === CENTER TRACK LINE === */}
              <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[3px] h-full pointer-events-none">
                {/* Background rail */}
                <div className={`absolute inset-0 rounded-full ${
                  isDarkMode ? 'bg-slate-700/60' : 'bg-gray-200/80'
                }`} />
                {/* Animated progress fill (scroll-driven) */}
                <div
                  className="absolute top-0 left-0 w-full rounded-full"
                  style={{
                    height: `${lineProgress * 100}%`,
                    background: 'linear-gradient(to bottom, #38bdf8, #6366f1, #a855f7, #ec4899)',
                    boxShadow: lineProgress > 0.05 ? '0 0 16px 3px rgba(99,102,241,0.35)' : 'none',
                    transition: 'height 0.08s linear'
                  }}
                />
                {/* Glowing tip */}
                {lineProgress > 0.01 && lineProgress < 0.99 && (
                  <div
                    className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full"
                    style={{
                      top: `calc(${lineProgress * 100}% - 8px)`,
                      background: 'radial-gradient(circle, #818cf8, #6366f1)',
                      boxShadow: '0 0 20px 6px rgba(99,102,241,0.6)',
                      transition: 'top 0.08s linear'
                    }}
                  />
                )}
              </div>

              {/* Experience rows */}
              {experiences.map((exp, idx) => {
                const isLeft = exp.side === 'left'
                return (
                  <div key={exp.id} className="grid grid-cols-[1fr_80px_1fr] items-start mb-14 last:mb-0">

                    {/* LEFT COLUMN */}
                    {isLeft ? (
                      /* Card on left */
                      <div className={`group relative rounded-3xl shadow-lg border transition-all duration-500 hover:-translate-y-2 ${cardBase} p-6 mr-6`}>
                        <ExperienceCard exp={exp} isDarkMode={isDarkMode} />
                        {/* Arrow pointing right */}
                        <div className={`absolute top-8 -right-3 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[12px] ${
                          isDarkMode ? 'border-l-slate-700/60' : 'border-l-gray-200/80'
                        }`} />
                      </div>
                    ) : (
                      /* Empty left */
                      <div />
                    )}

                    {/* CENTER DOT */}
                    <div className="flex flex-col items-center pt-7 relative z-10">
                      <div className={`w-5 h-5 rounded-full ${exp.dot} shadow-lg ring-4 ${
                        isDarkMode ? 'ring-slate-900' : 'ring-[#f5f4f0]'
                      } relative`}>
                        <div className={`absolute inset-0 rounded-full ${exp.dot} animate-ping opacity-40`} />
                      </div>
                      {/* Connector horizontal line to card */}
                      <div className={`absolute top-[2.2rem] ${isLeft ? 'left-[calc(50%+10px)] right-0' : 'right-[calc(50%+10px)] left-0'} h-[2px] ${
                        isDarkMode ? 'bg-slate-700/60' : 'bg-gray-200/80'
                      }`} style={{ maxWidth: '28px' }} />
                    </div>

                    {/* RIGHT COLUMN */}
                    {!isLeft ? (
                      /* Card on right */
                      <div className={`group relative rounded-3xl shadow-lg border transition-all duration-500 hover:-translate-y-2 ${cardBase} p-6 ml-6`}>
                        <ExperienceCard exp={exp} isDarkMode={isDarkMode} />
                        {/* Arrow pointing left */}
                        <div className={`absolute top-8 -left-3 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-r-[12px] ${
                          isDarkMode ? 'border-r-slate-700/60' : 'border-r-gray-200/80'
                        }`} />
                      </div>
                    ) : (
                      /* Empty right */
                      <div />
                    )}

                  </div>
                )
              })}
            </div>
          </div>

          {/* Mobile: single column with left side line */}
          <div className="md:hidden relative pl-8">
            {/* Left vertical track */}
            <div className="absolute left-3 top-0 w-[3px] h-full pointer-events-none">
              <div className={`absolute inset-0 rounded-full ${isDarkMode ? 'bg-slate-700/60' : 'bg-gray-200/80'}`} />
              <div
                className="absolute top-0 left-0 w-full rounded-full transition-all"
                style={{
                  height: `${lineProgress * 100}%`,
                  background: 'linear-gradient(to bottom, #38bdf8, #6366f1, #a855f7, #ec4899)',
                  boxShadow: lineProgress > 0.05 ? '0 0 10px 2px rgba(99,102,241,0.35)' : 'none',
                }}
              />
            </div>

            {experiences.map((exp) => (
              <div key={exp.id} className="relative mb-10 last:mb-0">
                {/* Dot */}
                <div className={`absolute -left-5 top-6 w-4 h-4 rounded-full ${exp.dot} shadow-md ring-2 ${
                  isDarkMode ? 'ring-slate-900' : 'ring-[#f5f4f0]'
                } z-10`}>
                  <div className={`absolute inset-0 rounded-full ${exp.dot} animate-ping opacity-30`} />
                </div>
                {/* Card */}
                <div className={`rounded-2xl border shadow-md ${cardBase} p-5`}>
                  <ExperienceCard exp={exp} isDarkMode={isDarkMode} />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

/* ── Reusable card body ── */
const ExperienceCard = ({ exp, isDarkMode }) => (
  <div>
    {/* Top row: badge + icon */}
    <div className="flex items-start justify-between mb-3">
      <div>
        <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border mb-2 ${
          isDarkMode
            ? 'bg-sky-500/15 text-sky-300 border-sky-500/25'
            : 'bg-sky-100 text-sky-700 border-sky-200'
        }`}>
          <FontAwesomeIcon icon={faBriefcase} className="text-[10px]" />
          {exp.type}
        </div>
        <h3 className={`text-lg font-bold leading-tight ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          {exp.title}
        </h3>
      </div>
      <div className={`w-12 h-12 bg-gradient-to-br ${exp.color} rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300 shrink-0 ml-3`}>
        <FontAwesomeIcon icon={exp.icon} className="text-xl text-white" />
      </div>
    </div>

    {/* Company / location / duration */}
    <div className={`flex flex-wrap items-center gap-x-3 gap-y-1 text-xs mb-3 ${isDarkMode ? 'text-slate-400' : 'text-gray-500'}`}>
      <span className="flex items-center gap-1">
        <FontAwesomeIcon icon={faBuilding} className="text-[11px]" />
        <span className="font-semibold">{exp.company}</span>
      </span>
      <span className="flex items-center gap-1">
        <FontAwesomeIcon icon={faMapMarkerAlt} className="text-[11px]" />
        {exp.location}
      </span>
      <span className="flex items-center gap-1">
        <FontAwesomeIcon icon={faCalendarDays} className="text-[11px]" />
        {exp.duration}
      </span>
    </div>

    {/* Description */}
    <p className={`text-sm leading-relaxed mb-4 ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
      {exp.description}
    </p>

    {/* Skills */}
    <div className="flex flex-wrap gap-1.5">
      {exp.skills.map((skill, i) => (
        <span key={i} className={`px-2.5 py-0.5 rounded-full text-[11px] font-medium border ${
          isDarkMode
            ? 'bg-slate-700/50 text-slate-300 border-slate-600/40'
            : 'bg-gray-100 text-gray-600 border-gray-200'
        }`}>
          {skill}
        </span>
      ))}
    </div>
  </div>
)

export default Experience