"use client";
import React, { useEffect } from 'react';
import Contact from '@/components/Contact/Contact';

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-4 pb-12">
      <Contact />
    </div>
  );
}
