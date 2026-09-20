import React, { useEffect } from 'react';
import Experience from '../../components/Experience/Experience';
import { useSEO } from '../../hooks/useSEO';

const ExperiencePage = () => {
  useSEO({
    title: "Experience – Abdullah Al Zubaer | Full Stack Engineer & Blockchain Developer | Hosen Soft",
    description:
      "Explore the professional experience of Abdullah Al Zubaer – Full Stack Engineer, Blockchain Developer, and CEO of Hosen Soft & Hosen Academy. Years of expertise in AI-driven full stack development.",
    keywords:
      "Abdullah Al Zubaer experience, Full Stack Engineer career, Abdullah Al Zubaer work history, Hosen Soft, Blockchain Engineer experience, AI developer career, software engineer experience Bangladesh",
    canonical: "https://abdullahzubaer.vercel.app/experience",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-4 pb-12">
      <Experience />
    </div>
  );
};

export default ExperiencePage;
