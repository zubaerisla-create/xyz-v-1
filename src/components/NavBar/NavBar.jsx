import React, { useContext, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useLocation, useNavigate, Link } from "react-router";
import { IoIosMoon, IoIosSunny } from "react-icons/io";
import { RiMenuFold2Fill } from "react-icons/ri";
import {
  FaHome,
  FaUser,
  FaConciergeBell,
  FaBriefcase,
  FaCode,
  FaEnvelope,
  FaImages,
  FaBookOpen
} from "react-icons/fa";
import {
  FaXmark,
  FaGithub,
  FaLinkedin
} from "react-icons/fa6";
import { ModeContext } from "../../contexts/ModeContext";
const logo = "/logo.jpg";

const NavBar = () => {
  const { mode, setMode } = useContext(ModeContext);
  const location = useLocation();
  const navigate = useNavigate();
  const pathname = location.pathname;
  const [isActive, setIsActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isActive]);

  const onClose = () => {
    setIsActive(false);
  };

  const navItems = [
    { id: "home", label: "Home", icon: FaHome, path: "/" },
    { id: "about", label: "About", icon: FaUser, path: "/about" },
    { id: "services", label: "Services", icon: FaConciergeBell, path: "/services" },
    { id: "experience", label: "Experience", icon: FaBriefcase, path: "/experience" },
    { id: "projects", label: "Projects", icon: FaCode, path: "/projects" },
    { id: "gallery", label: "Gallery", icon: FaImages, path: "/gallery" },
    { id: "articles", label: "Articles", icon: FaBookOpen, path: "/articles" },
    { id: "contact", label: "Contact", icon: FaEnvelope, path: "/contact" },
  ];

  const handleNavClick = (path) => {
    onClose();
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Render Mobile Drawer via Portal attached to document.body
  const renderMobileDrawer = () => {
    if (!isActive || !isMounted || typeof window === "undefined") return null;

    return createPortal(
      <div className="fixed inset-0 z-[999999] lg:hidden flex justify-end">
        {/* Fullscreen Backdrop Blur */}
        <div
          className="fixed inset-0 bg-black/75 backdrop-blur-md transition-opacity"
          onClick={onClose}
        />

        {/* 100% Opaque Solid Drawer Panel */}
        <div
          className="relative z-[1000000] w-[85vw] max-w-xs h-full flex flex-col justify-between shadow-2xl border-l border-gray-200 dark:border-slate-800 transition-transform duration-300"
          style={{
            backgroundColor: mode ? "#0f172a" : "#ffffff",
            color: mode ? "#ffffff" : "#0f172a",
          }}
        >
          {/* Header */}
          <div className="p-5 border-b border-gray-200 dark:border-slate-800 flex items-center justify-between bg-gray-50 dark:bg-slate-800">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src={logo}
                  alt="Profile Logo"
                  className="w-11 h-11 rounded-full object-cover border-2 border-sky-500 p-0.5"
                />
                <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-white dark:border-slate-900 rounded-full"></span>
              </div>
              <div>
                <h4 className="font-bold text-base text-gray-900 dark:text-white leading-tight">
                  Abdullah Al Zubaer
                </h4>
                <p className="text-xs text-sky-600 dark:text-sky-400 font-semibold">
                  Full Stack Developer
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2.5 rounded-xl bg-gray-200 dark:bg-slate-700 text-gray-800 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-slate-600 transition-colors cursor-pointer"
              aria-label="Close menu"
            >
              <FaXmark size={20} />
            </button>
          </div>

          {/* Navigation Items List */}
          <div className="px-4 py-6 flex-1 overflow-y-auto bg-white dark:bg-slate-900">
            <p className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest px-3 mb-4">
              Navigation
            </p>
            <ul className="space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isSelected =
                  pathname === item.path ||
                  (item.id === "gallery" && pathname === "/insights");

                return (
                  <li key={item.id}>
                    <Link
                      to={item.path}
                      onClick={() => handleNavClick(item.path)}
                      className={`flex items-center gap-4 px-4 py-3.5 rounded-xl cursor-pointer font-bold text-base transition-all duration-200 ${
                        isSelected
                          ? "bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-lg shadow-sky-500/30"
                          : "text-gray-800 dark:text-gray-100 hover:bg-sky-50 dark:hover:bg-slate-800 hover:text-sky-600 dark:hover:text-sky-400"
                      }`}
                    >
                      <Icon
                        className={`text-lg ${
                          isSelected ? "text-white" : "text-sky-600 dark:text-sky-400"
                        }`}
                      />
                      <span>{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Footer */}
          <div className="p-5 border-t border-gray-200 dark:border-slate-800 space-y-4 bg-gray-50 dark:bg-slate-800">
            <div className="flex items-center justify-center gap-4">
              <a
                href="https://github.com/AbdullahAlZubaerOfficial"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-gray-200 dark:bg-slate-700 text-gray-800 dark:text-gray-100 hover:text-sky-500 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-gray-200 dark:bg-slate-700 text-gray-800 dark:text-gray-100 hover:text-sky-500 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
            </div>

            <button
              onClick={() => handleNavClick("/contact")}
              className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-sky-500 to-blue-600 shadow-md cursor-pointer text-center"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>,
      document.body
    );
  };

  return (
    <div
      className={`w-full transition-all duration-500 ${
        isScrolled
          ? "lg:h-16 shadow-sm bg-[#f5f4f0]/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-gray-200/60 dark:border-slate-800"
          : "lg:h-20 bg-[#f5f4f0]/80 dark:bg-slate-900/80 backdrop-blur-md"
      } flex items-center justify-center sticky top-0 z-40`}
    >
      <div className="max-w-7xl w-full mx-4 lg:mx-8">
        <div
          className={`flex items-center justify-between p-3 lg:p-4 rounded-2xl transition-all duration-500 ${
            isScrolled ? "lg:mt-1" : "lg:mt-3"
          } ${mode ? "dark:text-slate-100" : "text-gray-800"}`}
        >
          {/* Logo */}
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="relative">
              <img
                src={logo}
                alt="Abdullah Al Zubaer Logo"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover border-2 border-sky-500 p-0.5 shadow-md group-hover:scale-105 transition-transform"
              />
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white dark:border-slate-900 rounded-full"></span>
            </div>
            <div className="flex flex-col">
              <h3 className="text-base sm:text-lg font-bold bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent leading-snug">
                Abdullah Al Zubaer
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 font-medium hidden sm:block">
                Full Stack Developer
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            <ul className="flex items-center gap-1 bg-white/90 dark:bg-slate-800/80 rounded-2xl p-1.5 backdrop-blur-sm border border-gray-200/60 dark:border-slate-700/50 shadow-sm">
              {navItems.map((item) => {
                const isSelected =
                  pathname === item.path ||
                  (item.id === "gallery" && pathname === "/insights");

                return (
                  <li key={item.id}>
                    <Link
                      to={item.path}
                      onClick={() => handleNavClick(item.path)}
                      className={`relative px-5 py-2 rounded-xl cursor-pointer font-semibold text-sm transition-all duration-300 ${
                        isSelected
                          ? "text-white bg-gradient-to-r from-sky-500 to-blue-600 shadow-md shadow-sky-500/25"
                          : "text-gray-600 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-gray-100/60 dark:hover:bg-slate-700/50"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Theme Toggle */}
            <div className="flex items-center gap-2 ml-4">
              <div className="w-px h-6 bg-gray-300 dark:bg-slate-600"></div>
              <button
                onClick={() => setMode(!mode)}
                className={`p-2.5 rounded-xl transition-all duration-300 ${
                  mode
                    ? "bg-slate-800 text-yellow-400 hover:bg-slate-700"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                } shadow-sm hover:shadow-md cursor-pointer`}
                aria-label={mode ? "Switch to light mode" : "Switch to dark mode"}
              >
                {mode ? <IoIosSunny size={20} /> : <IoIosMoon size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={() => setMode(!mode)}
              className={`p-2.5 rounded-xl transition-all duration-300 ${
                mode ? "bg-slate-800 text-yellow-400" : "bg-gray-100 text-gray-700"
              } shadow-sm`}
            >
              {mode ? <IoIosSunny size={20} /> : <IoIosMoon size={20} />}
            </button>
            <button
              onClick={() => setIsActive(true)}
              className={`p-2.5 rounded-xl transition-all duration-300 ${
                mode ? "bg-slate-800 text-slate-100" : "bg-gray-100 text-gray-700"
              } shadow-sm hover:bg-sky-50 dark:hover:bg-slate-700`}
              aria-label="Open menu"
            >
              <RiMenuFold2Fill size={22} />
            </button>
          </div>
        </div>
      </div>

      {/* Render Mobile Drawer attached to document.body */}
      {renderMobileDrawer()}
    </div>
  );
};

export default NavBar;