"use client";

import React from "react";
import { Element } from "react-scroll";

// Components
import Title from "../Title/Title";

// Assets
const image = "/perfect2.png";

const About = () => {
  const developerInfo = {
    name: "Abdullah Al Zubaer",
    stack: "MERN & Full Stack",
    location: "Dhaka, BD",
    experience: "3+ years",
    traits: ["Lifelong Learner", "Creative Thinker", "Adaptable", "Problem Solver"],
    availability: "Available for projects"
  };

  const codeSnippet = `
const developer = {
  name: "${developerInfo.name}",
  stack: "${developerInfo.stack}",
  location: "${developerInfo.location}",
  experience: "${developerInfo.experience}",
  traits: ${JSON.stringify(developerInfo.traits, null, 2)},
  availability: "${developerInfo.availability}"
}`;

  const ProfileCard = () => (
    <div
      data-aos="fade-right"
      data-aos-duration="1000"
      className="lg:col-span-1 rounded-2xl p-6 bg-white dark:bg-slate-800 shadow-lg border border-gray-100 dark:border-slate-700 space-y-4 hover:shadow-xl transition-all duration-300"
    >
      <div className="flex items-center gap-4 bg-gray-50/80 dark:bg-slate-700/80 p-4 rounded-2xl backdrop-blur-sm border border-gray-200 dark:border-slate-600">
        <div className="relative">
          <img
            className="h-16 w-16 rounded-full object-cover border-2 border-sky-500 shadow-lg"
            src={image}
            alt="Abdullah Al Zubaer"
          />
          <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-green-500 rounded-full border-2 border-white"></div>
        </div>
        <div>
          <h4 className="font-bold text-lg text-gray-900 dark:text-white">Abdullah Al Zubaer</h4>
          <p className="text-sm font-semibold text-sky-600 dark:text-sky-400">Fullstack Developer</p>
          <p className="text-xs text-gray-600 dark:text-gray-400">{developerInfo.experience} Experience</p>
        </div>
      </div>
      
      <div className="space-y-4">
        <h2 className="text-2xl lg:text-3xl font-bold leading-tight text-gray-800 dark:text-white">
          <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
            Passionate
          </span>{" "}
          Developer &<br />
          <span className="bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent">
            Tech Enthusiast
          </span>
        </h2>
        <p className="text-base text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
          Full-stack developer specializing in modern web technologies. 
          I build scalable, efficient applications with clean code and 
          exceptional user experiences.
        </p>
        
        <div className="flex flex-wrap gap-2 pt-2">
          {developerInfo.traits.map((trait, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 text-xs font-medium rounded-full border border-sky-200 dark:border-sky-800"
            >
              {trait}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  const CodeDisplay = () => (
    <div
      data-aos="zoom-in"
      data-aos-duration="1200"
      className="bg-gray-900 dark:bg-slate-800 rounded-2xl p-1 col-span-1 shadow-2xl border border-gray-800 dark:border-slate-700"
    >
      <div className="flex items-center px-4 py-3 border-b border-gray-800 dark:border-slate-700">
        <div className="flex gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
        </div>
        <span className="text-xs text-gray-400 ml-4 font-mono">developer.js</span>
      </div>
      <div className="overflow-x-auto p-4">
        <pre className="text-sm font-mono text-gray-300 whitespace-pre-wrap break-words">
          <code className="language-javascript">
            {codeSnippet}
          </code>
        </pre>
      </div>
    </div>
  );

  const MotivationSection = () => (
    <div
      data-aos="zoom-in"
      data-aos-duration="1300"
      className="col-span-1 lg:col-span-2 bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 space-y-4 border border-gray-200 dark:border-slate-700"
    >
      <div className="flex items-center gap-3 mb-2">
        <div className="h-1 w-8 bg-purple-500 rounded-full"></div>
        <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          My Journey & Passion
        </h2>
      </div>
      
      <div className="space-y-4 text-gray-700 dark:text-gray-300">
        <p className="text-lg leading-relaxed font-medium">
          Hello! I'm <span className="text-sky-600 dark:text-sky-400 font-semibold">Abdullah Al Zubaer</span>, 
          a passionate full-stack developer from Dhaka, Bangladesh. My journey in tech started 
          with curiosity about how digital worlds are built, and it has evolved into a love for 
          creating impactful solutions.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 bg-green-500 rounded-full"></div>
              <span className="font-semibold text-gray-900 dark:text-white">Full-Stack & Mobile Development</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 pl-5">
              React, Next.js, Node.js, Python/FastAPI, React Native & Flutter mobile engineering.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 bg-sky-500 rounded-full"></div>
              <span className="font-semibold text-gray-900 dark:text-white">AWS & VPS Server Management</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 pl-5">
              AWS (EC2, S3, CloudFront), Linux VPS, Nginx reverse proxy, Docker containers, SSL & PM2.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 bg-purple-500 rounded-full"></div>
              <span className="font-semibold text-gray-900 dark:text-white">iOS & Android App Deployment</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 pl-5">
              Xcode setup, TestFlight beta testing, Apple App Store & Google Play Store publishing.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 bg-rose-500 rounded-full"></div>
              <span className="font-semibold text-gray-900 dark:text-white">App & API Testing</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 pl-5">
              End-to-end API testing (Postman), unit testing (Jest), and manual/automated QA for mobile & web.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 pt-3 border-t border-gray-100 dark:border-slate-700/60">
          <span className="px-3 py-1 bg-sky-50 dark:bg-sky-900/30 text-sky-600 dark:text-sky-300 text-xs font-bold rounded-lg border border-sky-200 dark:border-sky-800">
            AWS Cloud
          </span>
          <span className="px-3 py-1 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-300 text-xs font-bold rounded-lg border border-emerald-200 dark:border-emerald-800">
            Linux VPS & Nginx
          </span>
          <span className="px-3 py-1 bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 text-xs font-bold rounded-lg border border-purple-200 dark:border-purple-800">
            iOS TestFlight & App Store
          </span>
          <span className="px-3 py-1 bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-300 text-xs font-bold rounded-lg border border-amber-200 dark:border-amber-800">
            Automated & API Testing
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <Element name="about" className="element mt-16">
      <Title title="About Me" />

      {/* Main container */}
      <div className="my-10 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          <ProfileCard />
          
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="lg:col-span-2 grid grid-cols-1 lg:grid-cols-3 gap-6 rounded-2xl"
          >
            <CodeDisplay />
            <MotivationSection />
          </div>
        </div>
      </div>
    </Element>
  );
};

export default About;