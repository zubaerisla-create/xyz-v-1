import React, { useEffect } from 'react';
import About from '../../components/About/About';
import Education from '../../components/Education/Education';
import Services from '../../components/Services/Services';

const AboutPage = () => {
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
