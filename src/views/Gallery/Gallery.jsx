import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { FaArrowLeft, FaExpandAlt, FaTimes, FaChevronLeft, FaChevronRight, FaSearch, FaImages } from 'react-icons/fa';

import rakib from '../../assets/abdurrakib.png';
import programminghero from '../../assets/programming1.png';
import robotic1 from '../../assets/robotic1.png';
import office from '../../assets/office.png';
import office1 from '../../assets/softvence2.png';
import robotic2 from '../../assets/roboticworking.png';
import uniprogram from '../../assets/uniprogram.png';
import robodemy from '../../assets/roboticteam.png';

export const galleryItems = [
  {
    id: 1,
    imageSrc: rakib,
    title: "Programming Hero Leadership",
    category: "Events & Ceremonies",
    date: "2024",
    description: "Meeting with Abdur Rakib vai, COO of Programming Hero, discussing tech growth and alumni network."
  },
  {
    id: 13,
    imageSrc: "https://res.cloudinary.com/dpjxjbhrb/image/upload/v1789487482/photo_2026-09-15_21-50-58_x4fpgd.jpg",
    title: "Key Career Milestones",
    category: "Events & Ceremonies",
    date: "2025",
    description: "Professional growth journey, team recognitions, and tech milestones."
  },
  {
    id: 14,
    imageSrc: "https://i.ibb.co.com/5h4zJFZL/image.png",
    title: "Innovation & Future Tech",
    category: "Workspace & Team",
    date: "2025",
    description: "Exploring new technologies, framework optimizations, and creative boundaries."
  },
  {
    id: 2,
    imageSrc: robotic1,
    title: "Robotics Certification",
    category: "Certificates & Achievements",
    date: "2024",
    description: "Received Certificate of Fundamental Robotics provided by Robodemy after hands-on project completion."
  },
  {
    id: 3,
    imageSrc: programminghero,
    title: "Programming Hero Alumni Ceremony",
    category: "Events & Ceremonies",
    date: "2024",
    description: "Honored guest at Programming Hero Alumni Association Ceremony 1.0 with fellow developers."
  },
  {
    id: 4,
    imageSrc: office,
    title: "Softvence Agency Workspace",
    category: "Workspace & Team",
    date: "2025",
    description: "Working as a Web Developer at Softvence Agency building scalable client applications."
  },
  {
    id: 5,
    imageSrc: "https://i.ibb.co.com/4gmGZs79/image.png",
    title: "Professional Workspace & Hardware",
    category: "Workspace & Team",
    date: "2025",
    description: "Development & collaboration moments at the engineering workspace."
  },
  {
    id: 8,
    imageSrc: robotic2,
    title: "Robotics Practice & Testing",
    category: "Tech & Robotics",
    date: "2024",
    description: "Deep dive into practicing robotics fundamentals, circuit wiring, and embedded programming."
  },
  {
    id: 6,
    imageSrc: "https://i.ibb.co.com/XfZB8rzv/image.png",
    title: "Engineering Insights & Strategy",
    category: "Workspace & Team",
    date: "2025",
    description: "Building scalable digital solutions and optimizing workflow architecture."
  },
  {
    id: 12,
    imageSrc: "https://i.ibb.co.com/8DGX6jR0/image.png",
    title: "Tech Experience & System Design",
    category: "Events & Ceremonies",
    date: "2025",
    description: "Full stack engineering, system architecture, and modern web application development."
  },
  {
    id: 10,
    imageSrc: uniprogram,
    title: "University Ceremony Volunteers",
    category: "Events & Ceremonies",
    date: "2024",
    description: "Working together as lead volunteers for university event coordination and management."
  },
  {
    id: 11,
    imageSrc: robodemy,
    title: "Robodemy Team Academy",
    category: "Tech & Robotics",
    date: "2024",
    description: "Teamwork and collaboration to master complex robotics hardware & software integration."
  },
  {
    id: 7,
    imageSrc: "https://i.ibb.co.com/0RHL7Xgk/image.png",
    title: "Team Collaboration & Planning",
    category: "Workspace & Team",
    date: "2025",
    description: "Transforming complex business requirements into high-quality functional web products."
  },
  {
    id: 9,
    imageSrc: office1,
    title: "Softvence Agency under BD Calling IT",
    category: "Workspace & Team",
    date: "2025",
    description: "Web developer moments and team culture under BD Calling IT family."
  }
];

const categories = [
  "All",
  "Certificates & Achievements",
  "Workspace & Team",
  "Events & Ceremonies",
  "Tech & Robotics"
];

const Gallery = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter items based on category and search query
  const filteredItems = galleryItems.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleOpenModal = (item) => {
    const idx = filteredItems.findIndex((i) => i.id === item.id);
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
      setSelectedIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));
    }
  };

  const handleNext = (e) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1));
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
  }, [selectedIndex, filteredItems]);

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-12 bg-[#f5f4f0] dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Navigation Bar / Back button */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-slate-800 text-gray-800 dark:text-gray-100 shadow-md hover:shadow-lg hover:bg-sky-50 dark:hover:bg-slate-700 transition-all font-semibold text-sm border border-gray-200 dark:border-slate-700"
          >
            <FaArrowLeft className="text-sky-500" />
            <span>Back to Home</span>
          </button>
          <div className="flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20">
            <FaImages />
            <span>{galleryItems.length} Total Insights</span>
          </div>
        </div>

        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
            Insights & <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">Gallery Showcase</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
            Explore key moments, certifications, event highlights, robotics practice, and workspace experiences from my engineering journey.
          </p>
        </div>

        {/* Filters and Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-md shadow-sky-500/30"
                    : "bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 border border-gray-200 dark:border-slate-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
            <input
              type="text"
              placeholder="Search gallery..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-white dark:bg-slate-800 text-gray-900 dark:text-white placeholder-gray-400 text-sm border border-gray-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
            />
          </div>
        </div>

        {/* Gallery Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-white dark:bg-slate-800 rounded-3xl border border-gray-200 dark:border-slate-700 p-8">
            <p className="text-gray-500 dark:text-gray-400 text-lg font-medium">No insights found matching your filter.</p>
            <button
              onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
              className="mt-4 px-5 py-2.5 rounded-xl bg-sky-500 text-white text-sm font-semibold hover:bg-sky-600 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => handleOpenModal(item)}
                className="group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl border border-gray-200 dark:border-slate-700 transition-all duration-300 transform hover:-translate-y-1.5 cursor-pointer flex flex-col"
              >
                {/* Image Container with object-top */}
                <div className="relative w-full h-64 sm:h-72 overflow-hidden bg-slate-900/5 dark:bg-slate-900/40">
                  <img
                    src={item.imageSrc}
                    alt={item.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Category Badge */}
                  <span className="absolute top-3 left-3 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-white text-[11px] font-medium border border-white/20">
                    {item.category}
                  </span>
                  {/* Expand Icon */}
                  <div className="absolute top-3 right-3 p-2 bg-black/60 backdrop-blur-md rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <FaExpandAlt className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Card Info */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-1.5">
                      <span>{item.date}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-1 group-hover:text-sky-500 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-gray-100 dark:border-slate-700/60 flex items-center justify-between text-xs font-semibold text-sky-600 dark:text-sky-400">
                    <span>Click to view full photo</span>
                    <span>→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Fullscreen Lightbox Modal */}
      {selectedIndex !== null && filteredItems[selectedIndex] && (
        <div
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-6"
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
                  Photo {selectedIndex + 1} of {filteredItems.length}
                </span>
                <h3 className="text-lg font-bold text-white leading-tight">
                  {filteredItems[selectedIndex].title}
                </h3>
              </div>
              <button
                onClick={handleCloseModal}
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <FaTimes className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body - Full Uncropped Image */}
            <div className="relative flex-1 flex items-center justify-center p-2 sm:p-4 bg-black/60 min-h-[300px] max-h-[68vh] overflow-hidden">
              <img
                src={filteredItems[selectedIndex].imageSrc}
                alt={filteredItems[selectedIndex].title}
                className="max-h-[65vh] w-auto max-w-full object-contain rounded-lg shadow-lg"
              />

              {/* Prev Button */}
              <button
                onClick={handlePrev}
                className="absolute left-2 sm:left-4 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-sm border border-white/20 transition-all hover:scale-110 cursor-pointer"
                aria-label="Previous image"
              >
                <FaChevronLeft className="w-5 h-5" />
              </button>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="absolute right-2 sm:right-4 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-sm border border-white/20 transition-all hover:scale-110 cursor-pointer"
                aria-label="Next image"
              >
                <FaChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Footer / Description */}
            <div className="p-4 bg-gray-950/80 border-t border-gray-800 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-2">
              <p className="text-sm text-gray-300">
                {filteredItems[selectedIndex].description}
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
    </div>
  );
};

export default Gallery;
