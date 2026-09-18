"use client";

import React, { useState, useEffect, useContext } from 'react'
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

  useEffect(() => {
    setIsDarkMode(mode)
  }, [mode])

  const experiences = [
    {
      id: 1,
      title: "Full Stack Engineer",
      company: "Hosen Soft",
      type: "Full-time",
      location: "Remote",
      duration: "Sep 2026 - Present",
      description: `As a Full Stack Engineer at Hosen Soft, I work on building scalable web applications, business software, and AI-powered automation solutions. I contribute across the full development lifecycle, from designing and developing modern user interfaces to building backend systems, APIs, database architecture, and third-party integrations.

I focus on transforming real-world business requirements into reliable, scalable, and user-friendly digital products while contributing to technical planning, system optimization, and product execution.`,
      skills: [
        "React.js", "Next.js", "Node.js", "Express.js", "TypeScript", 
        "JavaScript", "Django", "FastAPI", "PostgreSQL", "MongoDB", 
        "Prisma", "Supabase", "Docker", "Nginx", "REST APIs", 
        "Tailwind CSS", "AI Automation", "AI Agents", "Fast Development", 
        "Full Stack Development", "System Design", "API Integration", "Git"
      ],
      icon: faNodeJs,
      color: "from-emerald-500 to-teal-500"
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "Join Venture AI",
      type: "Full-time",
      location: "On-site",
      duration: "Oct 2025 - Aug 2026 · 11 mos",
      description: `As a Full Stack Developer at Join Venture AI, I worked on developing and maintaining scalable web applications and business-focused digital solutions. My responsibilities included building responsive front-end interfaces, developing robust backend systems, integrating APIs, managing databases, and implementing secure and efficient application workflows.

I collaborated across development and project requirements to transform business ideas into functional products, while focusing on performance, scalability, maintainability, and a smooth user experience. I also contributed to debugging, optimization, feature development, and delivering production-ready solutions within project timelines.`,
      skills: [
        "React.js", "Next.js", "JavaScript", "TypeScript", "Node.js", 
        "Express.js", "Django", "FastAPI", "MongoDB", "REST APIs", 
        "Tailwind CSS", "Docker", "Nginx", "AI Agents", "Fast Development", 
        "Git", "Full Stack Development", "API Integration", "Database Management", 
        "Performance Optimization"
      ],
      icon: faCode,
      color: "from-purple-500 to-indigo-500"
    },
    {
      id: 3,
      title: "Web Developer",
      company: "Softvence Agency",
      type: "Full-time",
      location: "On-site",
      duration: "Jul 2025 - Sep 2025 · 3 mos",
      description: "As a Web Developer at Softvence Agency, I worked on building responsive and dynamic websites tailored to client needs. My responsibilities included developing front-end applications using Framer, Webflow, React.js, Firebase, and Tailwind CSS, along with integrating APIs for seamless functionality. I focused on creating SEO-friendly and performance-optimized websites to enhance business growth. Additionally, I implemented custom features, ensured smooth user experiences, and delivered projects on time while maintaining professional quality standards.",
      skills: ["Framer", "Webflow", "React.js", "Firebase", "Tailwind CSS", "API Integration", "SEO", "Performance Optimization"],
      icon: faCode,
      color: "from-blue-500 to-cyan-500"
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
      color: "from-pink-500 to-rose-500"
    }
  ];

  const stats = [
    { number: "1M+", label: "User Requests Handled" },
    { number: "4", label: "Companies Worked" },
    { number: "3+", label: "Years Experience" }
  ];

  const themeClasses = {
    dark: {
      background: "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900",
      card: "bg-slate-800/80 backdrop-blur-sm border border-slate-700/50",
      text: {
        primary: "text-white",
        secondary: "text-slate-300",
        tertiary: "text-slate-400",
        muted: "text-slate-500"
      },
      button: {
        primary: "bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white",
        secondary: "bg-slate-700 hover:bg-slate-600 text-slate-300 border border-slate-600"
      },
      badge: "bg-slate-700/80 text-slate-300 border border-slate-600/50"
    },
    light: {
      background: "bg-[#f5f4f0]",
      card: "bg-white/80 backdrop-blur-sm border border-gray-200/50",
      text: {
        primary: "text-gray-900",
        secondary: "text-gray-700",
        tertiary: "text-gray-600",
        muted: "text-gray-500"
      },
      button: {
        primary: "bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white",
        secondary: "bg-white hover:bg-gray-50 text-gray-700 border border-gray-300"
      },
      badge: "bg-gray-100/80 text-gray-700 border border-gray-200/50"
    }
  }

  const currentTheme = isDarkMode ? themeClasses.dark : themeClasses.light

  return (
    <div name="experience" className={`min-h-screen transition-colors duration-300 ${currentTheme.background}`}>
      
      {/* Animated Background Elements */}
      <div className={`absolute top-0 left-0 w-full h-96 ${
        isDarkMode 
          ? 'bg-gradient-to-r from-sky-400/5 to-blue-600/5' 
          : 'bg-gradient-to-r from-sky-200/20 to-blue-200/20'
      } rounded-b-full blur-3xl`}></div>
      
      <div className={`absolute bottom-0 right-0 w-96 h-96 ${
        isDarkMode 
          ? 'bg-gradient-to-l from-cyan-400/5 to-emerald-600/5' 
          : 'bg-gradient-to-l from-cyan-200/20 to-emerald-200/20'
      } rounded-full blur-3xl`}></div>

      <div className="container mx-auto px-4 py-8 md:py-16 relative z-10">
        
        {/* Header Section */}
        <header className="text-center mb-8 md:mb-12">
          <h1 className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${
            isDarkMode 
              ? 'from-slate-100 via-sky-200 to-blue-200' 
              : 'from-slate-800 via-sky-600 to-blue-600'
          } bg-clip-text text-transparent transition-all duration-300`}>
            Work Experience
          </h1>
        </header>

        {/* Stats Section */}
        <section className="mb-10 md:mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className={`text-center p-8 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 ${
                  isDarkMode
                    ? 'bg-slate-800/60 border-slate-700/50 hover:border-slate-600/70'
                    : 'bg-white/60 border-gray-200/50 hover:border-gray-300/70'
                }`}
              >
                <div className={`text-4xl font-bold mb-2 bg-gradient-to-r ${
                  isDarkMode 
                    ? 'from-sky-300 to-blue-300' 
                    : 'from-sky-600 to-blue-600'
                } bg-clip-text text-transparent`}>
                  {stat.number}
                </div>
                <div className={`text-lg font-medium transition-colors duration-300 ${
                  isDarkMode ? 'text-slate-300' : 'text-gray-700'
                }`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-8 md:mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {experiences.map((exp) => (
              <div 
                key={exp.id}
                className={`group relative rounded-3xl shadow-lg overflow-hidden border backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 ${
                  isDarkMode
                    ? 'bg-slate-800/60 border-slate-700/50 hover:border-slate-600/70 hover:shadow-2xl'
                    : 'bg-white/60 border-gray-200/50 hover:border-gray-300/70 hover:shadow-xl'
                }`}
              >
                {/* Gradient Border Effect */}
                <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${exp.color}`}></div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-3 backdrop-blur-sm border transition-colors duration-300 ${
                        isDarkMode 
                          ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' 
                          : 'bg-blue-100 text-blue-700 border border-blue-200'
                      }`}>
                        <FontAwesomeIcon icon={exp.icon} className="mr-2" />
                        {exp.type}
                      </div>
                      <h3 className={`text-xl font-bold mb-2 group-hover:text-gray-900 transition-colors duration-300 ${
                        isDarkMode ? 'text-white group-hover:text-slate-100' : 'text-gray-900 group-hover:text-gray-800'
                      }`}>
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 mb-2">
                        <FontAwesomeIcon icon={faBuilding} className={`text-sm ${
                          isDarkMode ? 'text-slate-400' : 'text-gray-600'
                        }`} />
                        <p className={`text-sm font-medium transition-colors duration-300 ${
                          isDarkMode ? 'text-slate-400' : 'text-gray-600'
                        }`}>
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 mb-3">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className={`text-sm ${
                          isDarkMode ? 'text-slate-400' : 'text-gray-600'
                        }`} />
                        <p className={`text-sm transition-colors duration-300 ${
                          isDarkMode ? 'text-slate-500' : 'text-gray-500'
                        }`}>
                          {exp.location}
                        </p>
                        <span className={`mx-2 ${
                          isDarkMode ? 'text-slate-600' : 'text-gray-300'
                        }`}>•</span>
                        <p className={`text-sm transition-colors duration-300 ${
                          isDarkMode ? 'text-slate-500' : 'text-gray-500'
                        }`}>
                          {exp.duration}
                        </p>
                      </div>
                    </div>
                    <div className={`w-14 h-14 bg-gradient-to-br ${exp.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <FontAwesomeIcon icon={exp.icon} className="text-2xl text-white filter drop-shadow-md" />
                    </div>
                  </div>

                  {/* Description */}
                  <p className={`mb-6 leading-relaxed whitespace-pre-line transition-colors duration-300 ${
                    isDarkMode ? 'text-slate-400' : 'text-gray-600'
                  }`}>
                    {exp.description}
                  </p>

                  {/* Skills */}
                  <div className="mb-6">
                    <h4 className={`text-sm font-semibold mb-3 transition-colors duration-300 ${
                      isDarkMode ? 'text-slate-300' : 'text-gray-700'
                    }`}>
                      Technologies & Skills:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, index) => (
                        <span 
                          key={index}
                          className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm border transition-colors duration-300 ${
                            isDarkMode
                              ? 'bg-slate-700/50 text-slate-300 border-slate-600/50'
                              : 'bg-gray-100 text-gray-700 border-gray-200'
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className={`flex items-center justify-between pt-4 border-t transition-colors duration-300 ${
                    isDarkMode ? 'border-slate-700/50' : 'border-gray-200'
                  }`}>
                    <div className="text-right">
                      <p className={`text-sm transition-colors duration-300 ${
                        isDarkMode ? 'text-slate-500' : 'text-gray-500'
                      }`}>
                        Employment Type
                      </p>
                      <p className={`font-semibold transition-colors duration-300 ${
                        isDarkMode ? 'text-slate-300' : 'text-gray-700'
                      }`}>
                        {exp.type}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

   
      </div>
    </div>
  )
}

export default Experience