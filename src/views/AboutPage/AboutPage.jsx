import React, { useEffect } from 'react';
import About from '../../components/About/About';
import Education from '../../components/Education/Education';
import Services from '../../components/Services/Services';
import { useSEO } from '../../hooks/useSEO';

const AboutPage = () => {
  useSEO({
    title: "About Abdullah Al Zubaer – CEO, Hosen Soft & Hosen Academy | Full Stack Developer",
    description:
      "Learn about Abdullah Al Zubaer – CEO of Hosen Soft and Hosen Academy, an AI-driven Full Stack Developer, Blockchain Engineer, and Full Stack Engineer from Bangladesh with expertise in React, Node.js, and Web3.",
    keywords:
      "About Abdullah Al Zubaer, Abdullah Al Zubaer CEO, Hosen Soft, Hosen Academy, Full Stack Developer Bangladesh, Blockchain Engineer, AI developer, MERN Stack developer, Abdullah Zubaer about",
    canonical: "https://abdullahzubaer.vercel.app/about",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-4 pb-12">
      <About />
      <Education />
      <Services />
    </div>
  );
};

export default AboutPage;

