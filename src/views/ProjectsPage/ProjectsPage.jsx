import React, { useEffect } from 'react';
import Projects from '../../components/Projects/Projects';
import LatestProjectOverView from '../../components/LatestProjectsOverView/LatestProjectOverView';

const ProjectsPage = () => {
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
