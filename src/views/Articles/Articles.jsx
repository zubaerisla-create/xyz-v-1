import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { FaArrowLeft, FaSearch, FaClock, FaCalendarAlt, FaUser, FaBookOpen } from 'react-icons/fa';
import { articlesData } from '../../data/articlesData';

const categories = ["All", "Web Dev", "Mobile Dev", "System Architecture", "Robotics"];

const Articles = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredArticles = articlesData.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-12 bg-[#f5f4f0] dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Navigation Bar / Back button */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-slate-800 text-gray-800 dark:text-gray-100 shadow-md hover:shadow-lg hover:bg-sky-50 dark:hover:bg-slate-700 transition-all font-semibold text-sm border border-gray-200 dark:border-slate-700 cursor-pointer"
          >
            <FaArrowLeft className="text-sky-500" />
            <span>Back to Home</span>
          </button>
          <div className="flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20">
            <FaBookOpen />
            <span>{articlesData.length} Technical Articles</span>
          </div>
        </div>

        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
            Articles & <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">Engineering Blog</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
            In-depth engineering write-ups, architecture breakdowns, performance optimization strategies, and real-world learnings from shipping production code.
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
              placeholder="Search articles & tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-white dark:bg-slate-800 text-gray-900 dark:text-white placeholder-gray-400 text-sm border border-gray-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
            />
          </div>
        </div>

        {/* Articles Grid */}
        {filteredArticles.length === 0 ? (
          <div className="text-center py-16 bg-white dark:bg-slate-800 rounded-3xl border border-gray-200 dark:border-slate-700 p-8">
            <p className="text-gray-500 dark:text-gray-400 text-lg font-medium">No articles found matching your search.</p>
            <button
              onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
              className="mt-4 px-5 py-2.5 rounded-xl bg-sky-500 text-white text-sm font-semibold hover:bg-sky-600 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl border border-gray-200 dark:border-slate-700 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Article Banner Image */}
                  <div className="relative w-full h-56 overflow-hidden bg-slate-900/10">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <span className="absolute top-3 left-3 px-3 py-1 bg-black/70 backdrop-blur-md rounded-full text-white text-xs font-semibold border border-white/20">
                      {article.category}
                    </span>
                  </div>

                  {/* Article Metadata & Excerpt */}
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 mb-3">
                      <span className="flex items-center gap-1.5">
                        <FaCalendarAlt className="text-sky-500" />
                        {article.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <FaClock className="text-sky-500" />
                        {article.readTime}
                      </span>
                    </div>

                    <h2
                      onClick={() => navigate(`/article/${article.id}`)}
                      className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 hover:text-sky-500 transition-colors cursor-pointer"
                    >
                      {article.title}
                    </h2>

                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-lg bg-sky-500/10 dark:bg-sky-500/20 text-sky-600 dark:text-sky-400 text-xs font-medium border border-sky-500/20"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer Button */}
                <div className="px-6 pb-6 pt-2 border-t border-gray-100 dark:border-slate-700/60 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-medium text-gray-500 dark:text-gray-400">
                    <FaUser className="text-sky-500" />
                    <span>{article.author}</span>
                  </div>
                  <button
                    onClick={() => navigate(`/article/${article.id}`)}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold text-xs shadow-md hover:shadow-lg hover:scale-105 transition-all cursor-pointer"
                  >
                    <span>Read Article</span>
                    <span>→</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Articles;
