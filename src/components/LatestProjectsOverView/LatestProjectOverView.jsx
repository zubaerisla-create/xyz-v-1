"use client";
import React, { useState, useEffect } from 'react';
import rakib from '../../assets/abdurrakib.png';
import programminghero from '../../assets/programming1.png';
import robotic1 from '../../assets/robotic1.png';
import office from '../../assets/office.png';
import office1 from '../../assets/softvence2.png';
import robotic2 from '../../assets/roboticworking.png';
import uniprogram from '../../assets/uniprogram.png';
import robodemy from '../../assets/roboticteam.png';
import { FaExpandAlt, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const row1Items = [
  {
    id: 1,
    imageSrc: rakib,
    title: "Programming Hero",
    description: "With Abdur Rakib vai, COO of Programming Hero."
  },
  {
    id: 13,
    imageSrc: "https://res.cloudinary.com/dpjxjbhrb/image/upload/v1789487482/photo_2026-09-15_21-50-58_x4fpgd.jpg",
    title: "Key Milestones",
    description: "Professional journey, achievements, and team moments."
  },
  {
    id: 14,
    imageSrc: "https://i.ibb.co.com/5h4zJFZL/image.png",
    title: "Innovation & Growth",
    description: "Exploring new technologies and pushing creative boundaries."
  },
  {
    id: 2,
    imageSrc: robotic1,
    title: "Robodemy",
    description: "Certificate of Fundamental Robotics provided by Robodemy."
  },
  {
    id: 3,
    imageSrc: programminghero,
    title: "Programming Hero",
    description: "Invited at Programming Hero Alumni Association Ceremony 1.0."
  },
  {
    id: 4,
    imageSrc: office,
    title: "Softvence Agency",
    description: "Working as a Web Developer."
  },
  {
    id: 5,
    imageSrc: "https://i.ibb.co.com/4gmGZs79/image.png",
    title: "Professional Workspace",
    description: "Development & collaboration moments."
  }
];

const row2Items = [
  {
    id: 8,
    imageSrc: robotic2,
    title: "Robodemy",
    description: "Practicing robotics fundamentals deeply."
  },
  {
    id: 6,
    imageSrc: "https://i.ibb.co.com/XfZB8rzv/image.png",
    title: "Engineering Insights",
    description: "Building scalable digital solutions."
  },
  {
    id: 12,
    imageSrc: "https://i.ibb.co.com/8DGX6jR0/image.png",
    title: "Tech Experience",
    description: "Full stack engineering, system architecture & problem solving."
  },
  {
    id: 10,
    imageSrc: uniprogram,
    title: "University Program",
    description: "Working together as volunteers for the university ceremony program."
  },
  {
    id: 11,
    imageSrc: robodemy,
    title: "Robodemy Academy",
    description: "Working together to understand complex robotics projects."
  },
  {
    id: 7,
    imageSrc: "https://i.ibb.co.com/0RHL7Xgk/image.png",
    title: "Team Collaboration",
    description: "Transforming business requirements into functional products."
  },
  {
    id: 9,
    imageSrc: office1,
    title: "Softvence Agency",
    description: "Web developer moments under BD Calling IT."
  }
];

const allItems = [...row1Items, ...row2Items];

// WorkCard Component
const WorkCard = ({ item, onClick }) => {
  return (
    <div
      onClick={() => onClick(item)}
      className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-md hover:shadow-2xl border border-gray-200 dark:border-gray-700/80 bg-white dark:bg-slate-800 transition-all duration-300 transform hover:-translate-y-1.5"
    >
      <div className="w-full h-56 sm:h-64 overflow-hidden bg-slate-900/5 dark:bg-slate-900/40">
        <img
          src={item.imageSrc}
          alt={item.title}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      
      {/* Dynamic Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent opacity-90 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
        <div className="flex justify-end">
          <span className="p-2 bg-black/60 backdrop-blur-md rounded-full text-white text-xs opacity-90 group-hover:scale-110 transition-transform shadow-lg border border-white/20">
            <FaExpandAlt className="w-3 h-3" />
          </span>
        </div>
        <div className="text-white">
          <h3 className="text-base font-bold mb-1 line-clamp-1">{item.title}</h3>
          <p className="text-xs text-gray-200 leading-snug line-clamp-2">{item.description}</p>
          <span className="inline-block mt-1.5 text-[11px] text-cyan-300 font-medium">Click to view full image 🔍</span>
        </div>
      </div>
    </div>
  );
};

const LatestProjectOverView = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleOpenModal = (item) => {
    const idx = allItems.findIndex((i) => i.id === item.id);
    if (idx !== -1) {
      setSelectedIndex(idx);
    }
  };

  const handleCloseModal = () => {
    setSelectedIndex(null);
  };

  const handlePrev = (e) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev === 0 ? allItems.length - 1 : prev - 1));
    }
  };

  const handleNext = (e) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev === allItems.length - 1 ? 0 : prev + 1));
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') handleCloseModal();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  return (
    <section className="py-16 bg-[#f5f4f0] dark:bg-gray-900 transition-colors duration-300 overflow-hidden">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3 text-center text-gray-900 dark:text-white">
          Some Insights
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto text-center text-sm sm:text-base leading-relaxed">
          "Here is a showcase of key insights and moments from my journey. I've been exploring new techniques, collaborating on innovative projects, and pushing creative boundaries."
        </p>

        {/* Animated grid container */}
        <div className="relative overflow-hidden py-2">
          {/* First row - scrolls left */}
          <div className="flex mb-5 animate-scroll-left">
            {row1Items.map((item) => (
              <div key={item.id} className="flex-shrink-0 w-72 sm:w-84 md:w-96 mx-2.5">
                <WorkCard item={item} onClick={handleOpenModal} />
              </div>
            ))}
            {/* Duplicate for seamless looping */}
            {row1Items.map((item) => (
              <div key={`dup-${item.id}`} className="flex-shrink-0 w-72 sm:w-84 md:w-96 mx-2.5">
                <WorkCard item={item} onClick={handleOpenModal} />
              </div>
            ))}
          </div>

          {/* Second row - scrolls right */}
          <div className="flex animate-scroll-right">
            {row2Items.map((item) => (
              <div key={item.id} className="flex-shrink-0 w-72 sm:w-84 md:w-96 mx-2.5">
                <WorkCard item={item} onClick={handleOpenModal} />
              </div>
            ))}
            {/* Duplicate for seamless looping */}
            {row2Items.map((item) => (
              <div key={`dup-${item.id}`} className="flex-shrink-0 w-72 sm:w-84 md:w-96 mx-2.5">
                <WorkCard item={item} onClick={handleOpenModal} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-6"
          onClick={handleCloseModal}
        >
          <div
            className="relative max-w-4xl w-full bg-gray-900 border border-gray-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header / Close button */}
            <div className="flex justify-between items-center p-4 border-b border-gray-800 bg-gray-950/60">
              <div>
                <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                  Photo {selectedIndex + 1} of {allItems.length}
                </span>
                <h3 className="text-lg font-bold text-white leading-tight">
                  {allItems[selectedIndex].title}
                </h3>
              </div>
              <button
                onClick={handleCloseModal}
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <FaTimes className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body - Image display */}
            <div className="relative flex-1 flex items-center justify-center p-2 sm:p-4 bg-black/60 min-h-[300px] max-h-[68vh] overflow-hidden">
              <img
                src={allItems[selectedIndex].imageSrc}
                alt={allItems[selectedIndex].title}
                className="max-h-[65vh] w-auto max-w-full object-contain rounded-lg shadow-lg"
              />

              {/* Prev Button */}
              <button
                onClick={handlePrev}
                className="absolute left-2 sm:left-4 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-sm border border-white/20 transition-all hover:scale-110"
                aria-label="Previous image"
              >
                <FaChevronLeft className="w-5 h-5" />
              </button>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="absolute right-2 sm:right-4 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-sm border border-white/20 transition-all hover:scale-110"
                aria-label="Next image"
              >
                <FaChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Footer / Description */}
            <div className="p-4 bg-gray-950/80 border-t border-gray-800 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-2">
              <p className="text-sm text-gray-300">
                {allItems[selectedIndex].description}
              </p>
              <div className="text-xs text-gray-400 flex items-center gap-1 shrink-0">
                <span>Use </span>
                <kbd className="px-1.5 py-0.5 bg-gray-800 rounded border border-gray-700 text-[10px] text-gray-300">←</kbd>
                <kbd className="px-1.5 py-0.5 bg-gray-800 rounded border border-gray-700 text-[10px] text-gray-300">→</kbd>
                <span> to navigate</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Custom CSS for continuous scrolling animations */}
      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        .animate-scroll-left {
          animation: scroll-left 18s linear infinite;
        }
        
        .animate-scroll-right {
          animation: scroll-right 18s linear infinite;
        }
        
        /* Pause animation on hover */
        .animate-scroll-left:hover,
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default LatestProjectOverView;