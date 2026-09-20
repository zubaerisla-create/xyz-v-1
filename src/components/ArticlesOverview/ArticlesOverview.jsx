import React from "react";
import { useNavigate } from "react-router";
import { FaCalendarAlt, FaClock, FaArrowRight, FaBookOpen, FaUser } from "react-icons/fa";
import { articlesData } from "../../data/articlesData";

const ArticlesOverview = () => {
  const navigate = useNavigate();
  // Display top 3 featured articles on the landing page
  const featuredArticles = articlesData.slice(0, 3);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-12 bg-white/50 dark:bg-slate-900/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20 text-xs font-bold uppercase tracking-wider mb-3">
              <FaBookOpen />
              <span>Engineering Insights</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
              Featured <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">Articles & Posts</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mt-2 max-w-2xl">
              Deep dives into microservices, high-scale distributed systems, production RAG pipelines, and software engineering principles.
            </p>
          </div>

          <button
            onClick={() => navigate("/articles")}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold text-sm shadow-md hover:shadow-xl hover:scale-105 transition-all cursor-pointer shrink-0 self-start md:self-auto"
          >
            <span>See More Articles</span>
            <FaArrowRight className="text-xs" />
          </button>
        </div>

        {/* 3 Featured Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {featuredArticles.map((article) => (
            <article
              key={article.id}
              onClick={() => navigate(`/article/${article.id}`)}
              className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl border border-gray-200 dark:border-slate-700/80 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                {/* Image Banner */}
                <div className="relative w-full h-48 overflow-hidden bg-slate-900/10">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 bg-black/75 backdrop-blur-md rounded-full text-white text-[11px] font-semibold border border-white/20">
                    {article.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  {/* Meta */}
                  <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400 mb-2.5">
                    <span className="flex items-center gap-1">
                      <FaCalendarAlt className="text-sky-500 text-[11px]" />
                      {article.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <FaClock className="text-sky-500 text-[11px]" />
                      {article.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2.5 line-clamp-2 group-hover:text-sky-500 transition-colors leading-snug">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3 mb-4">
                    {article.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {article.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md bg-sky-500/10 dark:bg-sky-500/20 text-sky-600 dark:text-sky-400 text-[11px] font-medium"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer CTA */}
              <div className="px-5 py-4 sm:px-6 border-t border-gray-100 dark:border-slate-700/60 flex items-center justify-between text-xs font-semibold text-sky-600 dark:text-sky-400 group-hover:text-sky-500">
                <span className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400 font-normal">
                  <FaUser className="text-sky-500" />
                  {article.author}
                </span>
                <span className="flex items-center gap-1">
                  Read Full Article →
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom See More Button for Mobile */}
        <div className="mt-8 text-center md:hidden">
          <button
            onClick={() => navigate("/articles")}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all"
          >
            See More Articles ({articlesData.length})
          </button>
        </div>
      </div>
    </section>
  );
};

export default ArticlesOverview;
