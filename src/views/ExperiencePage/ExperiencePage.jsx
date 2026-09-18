import React, { useEffect } from 'react';
import Experience from '../../components/Experience/Experience';

const ExperiencePage = () => {
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
