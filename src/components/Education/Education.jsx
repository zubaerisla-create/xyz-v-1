"use client";

import React, { useState, useEffect, useContext } from 'react'
import { ModeContext } from '../../contexts/ModeContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faGraduationCap,
  faSchool,
  faCalendarDays,
  faMapMarkerAlt,
  faAward
} from '@fortawesome/free-solid-svg-icons'

const Education = () => {
  const { mode } = useContext(ModeContext)
  const [isDarkMode, setIsDarkMode] = useState(true)

  useEffect(() => {
    setIsDarkMode(mode)
  }, [mode])

  const education = [
    {
      id: 1,
      degree: "Bsc. in Computer Science & Engineering",
      institution: "Dhaka City College",
      location: "Dhaka",
      duration: "2023 - 2027",
      grade: "3.5/4.0 GPA",
      description: "Specialized in Web Development and Software Engineering. Completed courses in Advanced JavaScript, React.js, Node.js, Database Management, and Cloud Computing.",
      achievements: ["Codeforces Pupil ranked(1320)"],
      icon: faGraduationCap,
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 2,
      degree: "High School Certificate",
      institution: "Panchkandi Degree College, Narsingdi",
      location: "Narsingdi",
      duration: "2020 - 2022",
      grade: "5.00/5.00 GPA",
      description: "Focus on Mathematics and Computer Science. Participated in coding clubs and developed foundational programming skills.",
      achievements: ["Valedictorian", "Science Fair Winner", ],
      icon: faSchool,
      color: "from-orange-500 to-red-500"
    }
  ];

  const stats = [
    { number: "5.0", label: "High School GPA" },
    { number: "3.5", label: "University GPA" },
    { number: "5+", label: "Academic Awards" }
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
    <div className={`min-h-screen transition-colors duration-300 ${currentTheme.background}`}>
      
      {/* Animated Background Elements */}
      <div className={`absolute top-0 left-0 w-full h-96 ${
        isDarkMode 
          ? 'bg-gradient-to-r from-emerald-400/5 to-green-600/5' 
          : 'bg-gradient-to-r from-emerald-200/20 to-green-200/20'
      } rounded-b-full blur-3xl`}></div>
      
      <div className={`absolute bottom-0 right-0 w-96 h-96 ${
        isDarkMode 
          ? 'bg-gradient-to-l from-amber-400/5 to-orange-600/5' 
          : 'bg-gradient-to-l from-amber-200/20 to-orange-200/20'
      } rounded-full blur-3xl`}></div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${
            isDarkMode 
              ? 'from-slate-100 via-emerald-200 to-green-200' 
              : 'from-slate-800 via-emerald-600 to-green-600'
          } bg-clip-text text-transparent transition-all duration-300`}>
            Education
          </h1>
        </header>

        {/* Stats Section */}
        <section className="mb-20">
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
                    ? 'from-emerald-300 to-green-300' 
                    : 'from-emerald-600 to-green-600'
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

        {/* Education Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {education.map((edu) => (
              <div 
                key={edu.id}
                className={`group relative rounded-3xl shadow-lg overflow-hidden border backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 ${
                  isDarkMode
                    ? 'bg-slate-800/60 border-slate-700/50 hover:border-slate-600/70 hover:shadow-2xl'
                    : 'bg-white/60 border-gray-200/50 hover:border-gray-300/70 hover:shadow-xl'
                }`}
              >
                {/* Gradient Border Effect */}
                <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${edu.color}`}></div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-3 backdrop-blur-sm border transition-colors duration-300 ${
                        isDarkMode 
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' 
                          : 'bg-emerald-100 text-emerald-700 border border-emerald-200'
                      }`}>
                        <FontAwesomeIcon icon={edu.icon} className="mr-2" />
                        {edu.degree.split(' ')[0]}
                      </div>
                      <h3 className={`text-xl font-bold mb-2 group-hover:text-gray-900 transition-colors duration-300 ${
                        isDarkMode ? 'text-white group-hover:text-slate-100' : 'text-gray-900 group-hover:text-gray-800'
                      }`}>
                        {edu.degree}
                      </h3>
                      <div className="flex items-center gap-2 mb-2">
                        <FontAwesomeIcon icon={faSchool} className={`text-sm ${
                          isDarkMode ? 'text-slate-400' : 'text-gray-600'
                        }`} />
                        <p className={`text-sm font-medium transition-colors duration-300 ${
                          isDarkMode ? 'text-slate-400' : 'text-gray-600'
                        }`}>
                          {edu.institution}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 mb-3">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className={`text-sm ${
                          isDarkMode ? 'text-slate-400' : 'text-gray-600'
                        }`} />
                        <p className={`text-sm transition-colors duration-300 ${
                          isDarkMode ? 'text-slate-500' : 'text-gray-500'
                        }`}>
                          {edu.location}
                        </p>
                        <span className={`mx-2 ${
                          isDarkMode ? 'text-slate-600' : 'text-gray-300'
                        }`}>•</span>
                        <p className={`text-sm transition-colors duration-300 ${
                          isDarkMode ? 'text-slate-500' : 'text-gray-500'
                        }`}>
                          {edu.duration}
                        </p>
                      </div>
                    </div>
                    <div className={`w-14 h-14 bg-gradient-to-br ${edu.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <FontAwesomeIcon icon={edu.icon} className="text-2xl text-white filter drop-shadow-md" />
                    </div>
                  </div>

                  {/* Grade */}
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-4 backdrop-blur-sm border transition-colors duration-300 ${
                    isDarkMode 
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' 
                      : 'bg-amber-100 text-amber-700 border border-amber-200'
                  }`}>
                    <FontAwesomeIcon icon={faAward} className="mr-2" />
                    {edu.grade}
                  </div>

                  {/* Description */}
                  <p className={`mb-6 leading-relaxed transition-colors duration-300 ${
                    isDarkMode ? 'text-slate-400' : 'text-gray-600'
                  }`}>
                    {edu.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className={`text-sm font-semibold mb-3 transition-colors duration-300 ${
                      isDarkMode ? 'text-slate-300' : 'text-gray-700'
                    }`}>
                      Key Achievements:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.achievements.map((achievement, index) => (
                        <span 
                          key={index}
                          className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm border transition-colors duration-300 ${
                            isDarkMode
                              ? 'bg-slate-700/50 text-slate-300 border-slate-600/50'
                              : 'bg-gray-100 text-gray-700 border-gray-200'
                          }`}
                        >
                          {achievement}
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
                        Duration
                      </p>
                      <p className={`font-semibold transition-colors duration-300 ${
                        isDarkMode ? 'text-slate-300' : 'text-gray-700'
                      }`}>
                        {edu.duration}
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

export default Education