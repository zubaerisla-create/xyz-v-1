import React, { useEffect } from 'react';
import Services from '../../components/Services/Services';
import { useSEO } from '../../hooks/useSEO';

const ServicesPage = () => {
  useSEO({
    title: "Services – Abdullah Al Zubaer | AI-Driven Full Stack Development & Blockchain | Hosen Soft",
    description:
      "Explore professional services by Abdullah Al Zubaer – AI-driven full stack development, blockchain engineering, Web3, and modern web application development. CEO of Hosen Soft & Hosen Academy.",
    keywords:
      "Abdullah Al Zubaer services, AI driven full stack development, Hosen Soft services, full stack development services, blockchain development, Web3 development, React development, Node.js development, MERN Stack services",
    canonical: "https://abdullahzubaer.vercel.app/services",
  });

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

