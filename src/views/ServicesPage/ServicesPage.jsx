import React, { useEffect } from 'react';
import Services from '../../components/Services/Services';

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-2 pb-4 bg-[#f5f4f0] dark:bg-slate-900">
      <Services />
    </div>
  );
};

export default ServicesPage;
