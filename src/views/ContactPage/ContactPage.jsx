import React, { useEffect } from 'react';
import Contact from '../../components/Contact/Contact';
import { useSEO } from '../../hooks/useSEO';

const ContactPage = () => {
  useSEO({
    title: "Contact Abdullah Al Zubaer – CEO Hosen Soft | Full Stack Developer & Blockchain Engineer",
    description:
      "Get in touch with Abdullah Al Zubaer – CEO of Hosen Soft & Hosen Academy, Full Stack Developer and Blockchain Engineer from Bangladesh. Available for freelance projects, collaborations, and opportunities.",
    keywords:
      "Contact Abdullah Al Zubaer, hire Abdullah Al Zubaer, Abdullah Al Zubaer freelance, Hosen Soft contact, Full Stack Developer hire, Blockchain Developer hire, Abdullah Zubaer contact",
    canonical: "https://abdullahzubaer.vercel.app/contact",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-4 pb-12">
      <Contact />
    </div>
  );
};

export default ContactPage;

