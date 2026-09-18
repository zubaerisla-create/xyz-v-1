
import React, { useEffect, useMemo, lazy, Suspense } from "react";
import { Typewriter } from "react-simple-typewriter";
const Tilt = lazy(() => import("react-parallax-tilt"));
import { 
  FaDownload, 
  FaStar, 
  FaGithub, 
  FaLinkedin, 
  FaFacebook, 
  FaCode,
  FaCalendarAlt,
  FaTrophy,
  FaUsers,
  FaProjectDiagram
} from "react-icons/fa";
import { Element } from "react-scroll";
import CountUp from "react-countup";
import { motion } from "framer-motion";
const image = "/myimage.png";

// Memoized professional Profile Avatar component
const ProfileAvatar = React.memo(() => {
  return (
    <div className="relative inline-block group">
      {/* Outer subtle glow ring */}
      <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-sky-400 via-blue-600 to-indigo-600 opacity-70 blur-md transition-all duration-500 group-hover:opacity-100" />
      
      {/* Inner Avatar Frame */}
      <div className="relative rounded-full p-1.5 bg-gradient-to-tr from-sky-400 via-blue-500 to-indigo-600 shadow-2xl overflow-hidden w-[290px] h-[340px] sm:w-[320px] sm:h-[370px] lg:w-[350px] lg:h-[400px]">
        <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-slate-900 border-2 border-white/30">
          <img
            src={image}
            alt="Abdullah Al Zubaer Profile"
            className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
            loading="eager"
          />
        </div>
      </div>
    </div>
  );
});

const SocialIcon = React.memo(({ href, icon: Icon, bgGradient, delay, platform, username }) => {
  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
    >
      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
        <div className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-3 py-2 rounded-lg text-sm font-semibold whitespace-nowrap">
          {platform}
          <div className="text-xs text-gray-300 dark:text-gray-600 font-normal">{username}</div>
        </div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 w-2 h-2 bg-gray-900 dark:bg-white rotate-45" />
      </div>

      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`
          relative w-16 h-16 rounded-2xl flex items-center justify-center 
          text-white shadow-2xl transform transition-all duration-300
          group-hover:scale-110 group-hover:shadow-xl group-hover:-translate-y-2
          ${bgGradient} backdrop-blur-sm border border-white/20
        `}
        whileHover={{ 
          scale: 1.15,
          rotate: [0, -5, 5, 0],
          transition: { duration: 0.3 }
        }}
        whileTap={{ scale: 0.9 }}
      >
        <Icon className="text-2xl" />
        
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-2xl"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.6 }}
        />
        
        <motion.div
          className="absolute inset-0 rounded-2xl border-2 border-white/30"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.5, 0, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.a>
    </motion.div>
  );
});

const Banner = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("aos").then((AOS) => {
        AOS.default?.init({
          duration: 1000,
          once: true,
        });
      });
    }
  }, []);

  // Memoize static data to prevent recreation on every render
  const stats = useMemo(() => [
    { 
      num: 3, 
      suffix: "+",
      text: "Years of Experience", 
      icon: FaCalendarAlt, 
      color: "from-blue-500 to-cyan-500",
      iconColor: "text-blue-500"
    },
    { 
      num: 1, 
      suffix: "M+",
      text: "User Requests Handled", 
      icon: FaUsers, 
      color: "from-green-500 to-emerald-500",
      iconColor: "text-green-500"
    },
    { 
      num: 99.9, 
      suffix: "%",
      text: "Code & Performance Optimization", 
      icon: FaCode, 
      color: "from-purple-500 to-pink-500",
      iconColor: "text-purple-500"
    },
    { 
      num: 60, 
      suffix: "+",
      text: "Scalable Projects Delivered", 
      icon: FaProjectDiagram, 
      color: "from-yellow-500 to-orange-500",
      iconColor: "text-yellow-500"
    },
  ], []);

  const socialLinks = useMemo(() => [
    { 
      href: "https://github.com/AbdullahAlZubaerOfficial", 
      icon: FaGithub, 
      bgGradient: "bg-gradient-to-br from-gray-900 to-gray-700",
      platform: "GitHub",
      username: "AbdullahAlZubaerOfficial",
      delay: 0.6
    },
    { 
      href: "https://www.linkedin.com/in/abdullah-al-zubaer-309065292/", 
      icon: FaLinkedin, 
      bgGradient: "bg-gradient-to-br from-blue-600 to-blue-800",
      platform: "LinkedIn",
      username: "Abdullah Al Zubaer",
      delay: 0.7
    },
    { 
      href: "https://www.facebook.com/abdullahal.zubaer.507/", 
      icon: FaFacebook, 
      bgGradient: "bg-gradient-to-br from-blue-500 to-blue-700",
      platform: "Facebook",
      username: "Abdullah Al Zubaer",
      delay: 0.8
    },
  ], []);

  const floatingIcons = useMemo(() => [
    { icon: "🚀", delay: 0 },
    { icon: "💻", delay: 1 },
    { icon: "⚡", delay: 2 },
    { icon: "🎯", delay: 3 },
  ], []);

  // Optimized background elements with reduced animations
  const BackgroundElements = useMemo(() => (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -top-20 -left-20 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -bottom-20 -right-20 w-96 h-96 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-20 blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#000000 1px, transparent 1px),
                          linear-gradient(90deg, #000000 1px, transparent 1px)`,
          backgroundSize: '45px 45px',
        }} />
      </div>
    </div>
  ), []);

  return (
    <Element name="home" className="element">
      <div className="relative min-h-screen overflow-hidden bg-[#f5f4f0] dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900">
        {BackgroundElements}

        {/* Floating icons with reduced count for better performance */}
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            className="absolute text-2xl opacity-20"
            initial={{ y: 0 }}
            animate={{ 
              y: [0, -100, 0],
            }}
            transition={{
              duration: 15 + index * 2,
              repeat: Infinity,
              delay: item.delay,
              ease: "easeInOut",
            }}
            style={{
              left: `${20 + index * 20}%`,
              top: `${20 + (index % 2) * 60}%`,
            }}
          >
            {item.icon}
          </motion.div>
        ))}

        <div className="relative z-10 container mx-auto px-4 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Profile Image Section */}
            <Suspense fallback={<div className="w-[350px] h-[400px] bg-gray-200 rounded-full animate-pulse" />}>
              <Tilt 
                scale={1.05} 
                transitionSpeed={2000}
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                glareEnable={true}
                glareMaxOpacity={0.2}
                className="flex justify-center lg:justify-start"
              >
                <motion.div
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <ProfileAvatar />
                </motion.div>
              </Tilt>
            </Suspense>

            {/* Content Section */}
            <motion.div
              data-aos="fade-left"
              data-aos-duration="1200"
              className="space-y-8 text-center lg:text-left"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Badge */}
              <motion.div
                className="inline-flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Available for new projects
                </span>
              </motion.div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 dark:from-white dark:via-cyan-300 dark:to-purple-400 bg-clip-text text-transparent">
                  Abdullah Al Zubaer
                </h1>
                
                <div className="text-xl lg:text-2xl font-semibold text-gray-600 dark:text-gray-400 min-h-[60px]">
                  <span className="text-blue-600 dark:text-cyan-400">
                    <Typewriter
                      words={[
                        "Full Stack Engineer",
                        "Competitive Programmer",
                      ]}
                      loop={true}
                      cursor
                      cursorStyle="|"
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={1500}
                    />
                  </span>
                </div>
              </div>

              {/* Description */}
              <motion.p
                className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-relaxed bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Experienced in Full Stack Engineer and technology professional with 3+ years of experience building scalable web and app applications, AI-powered automation, and digital solutions. I combine software engineering, automation, and product strategy to turn real-world challenges into impactful products.
              </motion.p>

              {/* Codeforces Rating */}
              <motion.div
                className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-2xl shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <FaCode className="text-xl" />
                <span className="font-bold">
                  <a href="https://codeforces.com/profile/zubaerislam703">Codeforces Rating:</a>
                </span>
                <span className="font-mono font-bold text-red-100">1320</span>
             

              </motion.div>

              {/* Enhanced Social Links Section */}
              <motion.div
                className="pt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-6 text-center lg:text-left">
                  Connect with me
                </h3>
                
                <div className="flex flex-col sm:flex-row items-center gap-8">
                  {/* Social Icons */}
                  <div className="flex items-center gap-6">
                    {socialLinks.map((social, index) => (
                      <SocialIcon
                        key={index}
                        {...social}
                      />
                    ))}
                  </div>

                  {/* Download CV Button */}
                  <motion.div
                    className="flex-1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 }}
                  >
                    <motion.button
                    
                      className="group relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg overflow-hidden"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span  className="relative z-10 flex items-center gap-3">
                        <a
                          href="https://docs.google.com/document/d/1Q9sI6Ght5pkPa7ChaWPIti0LZhpdAUQuy6PmGXkB4p4/edit?tab=t.0"
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2"
                        >
                          Download CV <FaDownload className="group-hover:animate-bounce" />
                        </a>
                      </span>
                      
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.6 }}
                      />
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="mt-16 lg:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {stats.map((item, index) => (
              <motion.div
                key={index}
                className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  transition: { type: "spring", stiffness: 300 }
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
                
                <div className="relative z-10 text-center">
                  <div className="flex justify-center mb-4">
                    <motion.div 
                      className="p-3 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <item.icon className={`w-8 h-8 ${item.iconColor}`} />
                    </motion.div>
                  </div>
                  
                  <span className="text-3xl lg:text-4xl font-bold bg-gradient-to-br from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent block mb-2">
                    <CountUp
                      end={item.num}
                      duration={3}
                      decimals={item.num % 1 !== 0 ? 1 : 0}
                      suffix={item.suffix || "+"}
                    />
                  </span>
                  
                  <p className="text-gray-600 dark:text-gray-400 font-medium text-sm lg:text-base">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </Element>
  );
};

export default React.memo(Banner);