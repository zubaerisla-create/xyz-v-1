
import React, { useContext } from "react";
import { Link } from "react-router";
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaCode, FaArrowUp } from "react-icons/fa";
import { animateScroll } from "react-scroll";
import { ModeContext } from "../../contexts/ModeContext";
const logo = "/logo.jpg";

const Footer = () => {
  const { mode } = useContext(ModeContext);

  const scrollToTop = () => {
    animateScroll.scrollToTop({
      duration: 800,
      smooth: "easeInOutQuint",
    });
  };

  return (
    <footer
      className={`relative border-t pt-16 pb-8 transition-colors duration-300 overflow-hidden font-sans ${
        mode
          ? "bg-slate-950 text-slate-200 border-slate-800/80"
          : "bg-[#e8e6de] text-gray-800 border-gray-300/80"
      }`}
    >
      {/* Subtle Glow Background Elements */}
      <div
        className={`absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none ${
          mode ? "bg-sky-500/10" : "bg-sky-500/5"
        }`}
      ></div>
      <div
        className={`absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none ${
          mode ? "bg-blue-600/10" : "bg-blue-600/5"
        }`}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b ${
            mode ? "border-slate-800/80" : "border-gray-300/80"
          }`}
        >
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Abdullah Al Zubaer Logo"
                className="w-12 h-12 rounded-full object-cover border-2 border-sky-500 p-0.5 shadow-md"
              />
              <div>
                <h4 className={`font-bold text-lg leading-tight ${mode ? "text-white" : "text-gray-900"}`}>
                  Abdullah Al Zubaer
                </h4>
                <p className="text-xs text-sky-600 dark:text-sky-400 font-semibold">
                  Full Stack & Mobile Engineer
                </p>
              </div>
            </div>
            <p className={`text-xs sm:text-sm leading-relaxed ${mode ? "text-slate-400" : "text-gray-600"}`}>
              Specialized in building high-performance Next.js web applications, cross-platform React Native & Flutter mobile apps, and scalable cloud microservices.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/AbdullahAlZubaerOfficial"
                target="_blank"
                rel="noreferrer"
                className={`p-3 rounded-xl border transition-all cursor-pointer ${
                  mode
                    ? "bg-slate-900 border-slate-800 text-slate-300 hover:text-sky-400 hover:border-sky-500/50 hover:bg-slate-800"
                    : "bg-white border-gray-300 text-gray-700 hover:text-sky-600 hover:border-sky-500 hover:bg-sky-50 shadow-sm"
                }`}
                aria-label="GitHub Profile"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className={`p-3 rounded-xl border transition-all cursor-pointer ${
                  mode
                    ? "bg-slate-900 border-slate-800 text-slate-300 hover:text-sky-400 hover:border-sky-500/50 hover:bg-slate-800"
                    : "bg-white border-gray-300 text-gray-700 hover:text-sky-600 hover:border-sky-500 hover:bg-sky-50 shadow-sm"
                }`}
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href="https://wa.me/8801560047265"
                target="_blank"
                rel="noreferrer"
                className={`p-3 rounded-xl border transition-all cursor-pointer ${
                  mode
                    ? "bg-slate-900 border-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-slate-800"
                    : "bg-white border-gray-300 text-gray-700 hover:text-emerald-600 hover:border-emerald-500 hover:bg-emerald-50 shadow-sm"
                }`}
                aria-label="WhatsApp Contact"
              >
                <FaWhatsapp size={18} />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h5 className={`text-sm font-bold uppercase tracking-wider mb-4 border-l-2 border-sky-500 pl-2.5 ${
              mode ? "text-white" : "text-gray-900"
            }`}>
              Quick Links
            </h5>
            <ul className={`space-y-2.5 text-xs sm:text-sm ${mode ? "text-slate-400" : "text-gray-600"}`}>
              <li>
                <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors flex items-center gap-2">
                  <span>›</span> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors flex items-center gap-2">
                  <span>›</span> About Me
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors flex items-center gap-2">
                  <span>›</span> Services & Subscriptions
                </Link>
              </li>
              <li>
                <Link to="/experience" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors flex items-center gap-2">
                  <span>›</span> Experience
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors flex items-center gap-2">
                  <span>›</span> Portfolio Projects
                </Link>
              </li>
              <li>
                <Link to="/articles" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors flex items-center gap-2">
                  <span>›</span> Tech Articles
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Offered */}
          <div>
            <h5 className={`text-sm font-bold uppercase tracking-wider mb-4 border-l-2 border-sky-500 pl-2.5 ${
              mode ? "text-white" : "text-gray-900"
            }`}>
              Services & Pricing
            </h5>
            <ul className={`space-y-2.5 text-xs sm:text-sm ${mode ? "text-slate-400" : "text-gray-600"}`}>
              <li className="flex items-center justify-between">
                <Link to="/services" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">
                  Web Development
                </Link>
                <span className={`text-[11px] font-semibold px-2 py-0.5 rounded border ${
                  mode ? "bg-sky-500/20 text-sky-400 border-sky-500/30" : "bg-sky-100 text-sky-700 border-sky-300"
                }`}>$499</span>
              </li>
              <li className="flex items-center justify-between">
                <Link to="/services" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">
                  Full Stack & Mobile App
                </Link>
                <span className={`text-[11px] font-semibold px-2 py-0.5 rounded border ${
                  mode ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30" : "bg-emerald-100 text-emerald-700 border-emerald-300"
                }`}>$999</span>
              </li>
              <li className="flex items-center justify-between">
                <Link to="/services" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">
                  Enterprise Optimization
                </Link>
                <span className={`text-[11px] font-semibold px-2 py-0.5 rounded border ${
                  mode ? "bg-purple-500/20 text-purple-400 border-purple-500/30" : "bg-purple-100 text-purple-700 border-purple-300"
                }`}>$1,499</span>
              </li>
              <li className={`pt-1 text-xs leading-relaxed ${mode ? "text-slate-500" : "text-gray-500"}`}>
                Need a custom enterprise architecture or contract developer? Feel free to inquire directly!
              </li>
            </ul>
          </div>

          {/* Direct Contact Info */}
          <div>
            <h5 className={`text-sm font-bold uppercase tracking-wider mb-4 border-l-2 border-sky-500 pl-2.5 ${
              mode ? "text-white" : "text-gray-900"
            }`}>
              Contact Details
            </h5>
            <div className={`space-y-3 text-xs sm:text-sm ${mode ? "text-slate-400" : "text-gray-600"}`}>
              <a
                href="mailto:zubaerislam703@gmail.com"
                className="flex items-start gap-3 hover:text-sky-600 dark:hover:text-sky-400 transition-colors group"
              >
                <FaEnvelope className="w-4 h-4 text-sky-500 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                <span className="break-all">zubaerislam703@gmail.com</span>
              </a>

              <a
                href="https://wa.me/8801560047265"
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors group"
              >
                <FaPhoneAlt className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                <span>+880 15600 47265 (WhatsApp)</span>
              </a>

              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="w-4 h-4 text-rose-500 mt-0.5 shrink-0" />
                <span>Dhaka, Bangladesh (Remote Available)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright & back to top */}
        <div className={`pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs ${
          mode ? "text-slate-500" : "text-gray-600"
        }`}>
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Abdullah Al Zubaer. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <span className={`flex items-center gap-1.5 ${mode ? "text-slate-400" : "text-gray-600"}`}>
              <FaCode className="text-sky-500" /> Engineered with Full Stack
            </span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 hover:text-sky-600 dark:hover:text-sky-400 transition-colors cursor-pointer font-semibold"
            >
              <span>Back to Top</span>
              <FaArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
