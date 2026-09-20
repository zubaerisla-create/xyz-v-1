import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from "react-router";
import { FaArrowLeft, FaCalendarAlt, FaClock, FaUser, FaTag, FaShareAlt, FaCheck, FaBookOpen } from 'react-icons/fa';
import { articlesData } from '../../data/articlesData';

const ArticleDetail = ({ id: propId }) => {
  const navigate = useNavigate();
  const params = useParams();
  const id = propId || params?.id;
  const [copied, setCopied] = useState(false);

  const article = articlesData.find((a) => a.id === id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  if (!article) {
    return (
      <div className="min-h-screen py-20 px-4 bg-[#f5f4f0] dark:bg-slate-900 transition-colors flex items-center justify-center">
        <div className="max-w-md text-center bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl border border-gray-200 dark:border-slate-700">
          <FaBookOpen className="w-12 h-12 text-sky-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Article Not Found</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">The article you are looking for does not exist or has been moved.</p>
          <button
            onClick={() => navigate('/articles')}
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all"
          >
            Explore All Articles
          </button>
        </div>
      </div>
    );
  }

  const relatedArticles = articlesData.filter((a) => a.id !== article.id).slice(0, 2);

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-12 bg-[#f5f4f0] dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-6xl sm:max-w-7xl mx-auto">
        {/* Navigation Bar / Back button */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => navigate('/articles')}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-slate-800 text-gray-800 dark:text-gray-100 shadow-md hover:shadow-lg hover:bg-sky-50 dark:hover:bg-slate-700 transition-all font-semibold text-sm border border-gray-200 dark:border-slate-700 cursor-pointer"
          >
            <FaArrowLeft className="text-sky-500" />
            <span>Back to Articles</span>
          </button>

          <button
            onClick={handleCopyLink}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20 text-xs font-semibold hover:bg-sky-500/20 transition-colors cursor-pointer"
          >
            {copied ? <FaCheck className="text-emerald-500" /> : <FaShareAlt />}
            <span>{copied ? "Link Copied!" : "Share Article"}</span>
          </button>
        </div>

        {/* Article Container Card */}
        <article className="bg-white dark:bg-slate-800/90 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-200 dark:border-slate-700/80 overflow-hidden p-6 sm:p-12 mb-12">
          {/* Header Metadata */}
          <div className="mb-6">
            <span className="px-3.5 py-1.5 bg-sky-500/10 text-sky-600 dark:text-sky-400 rounded-full text-xs font-bold border border-sky-500/20 inline-block mb-4 uppercase tracking-wider">
              {article.category}
            </span>

            <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight tracking-tight mb-4">
              {article.title}
            </h1>

            <p className="text-base sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed font-medium mb-6">
              {article.subtitle}
            </p>

            {/* Author and Date Meta */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-gray-100 dark:border-slate-700/60 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-2 font-semibold text-gray-800 dark:text-gray-200">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 flex items-center justify-center text-white text-xs font-bold shadow">
                  AZ
                </div>
                <div>
                  <p className="leading-tight">{article.author}</p>
                  <p className="text-[10px] text-sky-600 dark:text-sky-400 font-normal">{article.authorRole}</p>
                </div>
              </div>
              <span className="text-gray-300 dark:text-slate-600">•</span>
              <span className="flex items-center gap-1.5">
                <FaCalendarAlt className="text-sky-500" />
                {article.date}
              </span>
              <span className="text-gray-300 dark:text-slate-600">•</span>
              <span className="flex items-center gap-1.5">
                <FaClock className="text-sky-500" />
                {article.readTime}
              </span>
            </div>
          </div>

          {/* Hero Cover Image */}
          <div className="relative w-full h-72 sm:h-[480px] md:h-[540px] rounded-2xl overflow-hidden mb-10 shadow-md">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Body Content Blocks */}
          <div className="space-y-6 text-gray-800 dark:text-gray-200 leading-relaxed text-base sm:text-lg">
            {article.content.map((block, index) => {
              if (block.type === 'paragraph') {
                return (
                  <p key={index} className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {block.text}
                  </p>
                );
              }
              if (block.type === 'heading') {
                return (
                  <h2 key={index} className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white pt-4 pb-1 border-b border-gray-100 dark:border-slate-700/60">
                    {block.text}
                  </h2>
                );
              }
              if (block.type === 'quote') {
                return (
                  <blockquote key={index} className="my-6 p-4 sm:p-6 rounded-2xl bg-sky-500/10 dark:bg-sky-500/15 border-l-4 border-sky-500 text-sky-900 dark:text-sky-200 italic font-medium text-base sm:text-lg shadow-sm">
                    "{block.text}"
                  </blockquote>
                );
              }
              if (block.type === 'list') {
                return (
                  <ul key={index} className="space-y-3 my-4 pl-2">
                    {block.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                        <span className="w-2 h-2 rounded-full bg-sky-500 mt-2 shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                );
              }
              if (block.type === 'code') {
                return (
                  <div key={index} className="my-6 rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-xl">
                    <div className="px-4 py-2 bg-slate-900 text-xs text-slate-400 border-b border-slate-800 font-mono flex justify-between items-center">
                      <span>{block.language || 'code'}</span>
                      <span className="text-[10px] text-slate-500">Code Snippet</span>
                    </div>
                    <pre className="p-4 sm:p-6 overflow-x-auto text-xs sm:text-sm font-mono text-cyan-300 leading-relaxed">
                      <code>{block.code}</code>
                    </pre>
                  </div>
                );
              }
              if (block.type === 'takeaway') {
                return (
                  <div key={index} className="my-8 p-5 sm:p-6 rounded-2xl bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/30 text-emerald-900 dark:text-emerald-200">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-1 flex items-center gap-2">
                      <FaCheck /> Key Takeaway
                    </h4>
                    <p className="text-sm sm:text-base font-medium">{block.text}</p>
                  </div>
                );
              }
              return null;
            })}
          </div>

          {/* Tags */}
          <div className="mt-10 pt-6 border-t border-gray-200 dark:border-slate-700/80 flex items-center gap-2 flex-wrap">
            <FaTag className="text-sky-500 text-sm" />
            <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 mr-2">Tags:</span>
            {article.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-xl bg-gray-100 dark:bg-slate-700/70 text-gray-700 dark:text-gray-300 text-xs font-medium border border-gray-200 dark:border-slate-600">
                #{tag}
              </span>
            ))}
          </div>
        </article>

        {/* Related Articles Section */}
        {relatedArticles.length > 0 && (
          <div className="mt-12">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6">
              More Articles You Might Like
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedArticles.map((rel) => (
                <div
                  key={rel.id}
                  onClick={() => navigate(`/article/${rel.id}`)}
                  className="bg-white dark:bg-slate-800 rounded-2xl p-5 border border-gray-200 dark:border-slate-700 shadow-md hover:shadow-xl transition-all cursor-pointer group flex flex-col justify-between"
                >
                  <div>
                    <span className="px-2.5 py-1 bg-sky-500/10 text-sky-600 dark:text-sky-400 rounded-md text-[11px] font-semibold border border-sky-500/20 inline-block mb-2">
                      {rel.category}
                    </span>
                    <h4 className="text-base font-bold text-gray-900 dark:text-white group-hover:text-sky-500 transition-colors line-clamp-2 mb-2">
                      {rel.title}
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-gray-300 line-clamp-2 mb-4">
                      {rel.excerpt}
                    </p>
                  </div>
                  <div className="flex items-center justify-between text-xs font-semibold text-sky-600 dark:text-sky-400 pt-3 border-t border-gray-100 dark:border-slate-700/60">
                    <span>Read Article</span>
                    <span>→</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArticleDetail;
