import React, { useEffect } from 'react';
import Projects from '../../components/Projects/Projects';
import LatestProjectOverView from '../../components/LatestProjectsOverView/LatestProjectOverView';
import { useSEO } from '../../hooks/useSEO';

const ProjectsPage = () => {
  useSEO({
    title: "Projects – Abdullah Al Zubaer | Full Stack & Blockchain Developer Portfolio | Hosen Soft",
    description:
      "Browse projects by Abdullah Al Zubaer – CEO of Hosen Soft & Hosen Academy. Full Stack, AI-driven, and Blockchain projects built with React, Node.js, Next.js, Web3, and MongoDB.",
    keywords:
      "Abdullah Al Zubaer projects, Full Stack projects, Blockchain projects, Web3 projects, Hosen Soft projects, React projects, Node.js projects, MERN Stack projects, AI driven development projects, portfolio Abdullah Zubaer",
    canonical: "https://abdullahzubaer.vercel.app/projects",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-4 pb-12">
      <Projects />
      <LatestProjectOverView />
    </div>
  );
};

export default ProjectsPage;
