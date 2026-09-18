"use client";

import React, { useContext, useCallback, memo, useState, useMemo } from "react";
import { animateScroll } from "react-scroll";
import { FaArrowUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";
import ClickSpark from "../Animation/ClickSpark";
import DarkModeProvider from "../contexts/DarkModeProviders";
import { ModeContext } from "../contexts/ModeContext";
import chatbot from "../assets/Frame 3.gif";
import Chat from "./Chat/Chat";
const LoadingSpinner = dynamic(() => import("./LoadingSpinner/LoadingSpinner"), { ssr: false });
import { Toaster } from "react-hot-toast";

const ScrollToTopButton = memo(({ mode, onClick }) => {
  const buttonClasses = useMemo(() => 
    `fixed right-6 bottom-6 h-14 w-14 flex items-center justify-center rounded-full cursor-pointer shadow-xl backdrop-blur-sm border transition-all duration-300 z-50 ${
      mode 
        ? "bg-slate-900/80 text-amber-200 border-slate-700/50 hover:bg-slate-800/90" 
        : "bg-white/80 text-purple-600 border-slate-200/50 hover:bg-white"
    }`,
    [mode]
  );

  return (
    <motion.button
      onClick={onClick}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={buttonClasses}
      aria-label="Scroll to top"
    >
      <motion.div
        animate={{ y: [-2, 2, -2] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <FaArrowUp size={16} />
      </motion.div>
    </motion.button>
  );
});

ScrollToTopButton.displayName = "ScrollToTopButton";

const ChatbotButton = memo(({ mode, onClick }) => {
  const buttonClasses = useMemo(() => 
    `fixed left-6 bottom-6 h-16 w-16 lg:h-20 lg:w-20 flex items-center justify-center rounded-full cursor-pointer shadow-xl backdrop-blur-sm border transition-all duration-300 z-50 ${
      mode 
        ? "bg-slate-900/80 border-slate-700/50 hover:bg-slate-800/90" 
        : "bg-white/80 border-slate-200/50 hover:bg-white"
    }`,
    [mode]
  );

  return (
    <motion.button
      onClick={onClick}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={buttonClasses}
      aria-label="Open chatbot"
    >
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="lg:scale-110"
      >
        <img 
          src={typeof chatbot === "string" ? chatbot : chatbot.src} 
          alt="Chatbot" 
          className="w-10 h-10 lg:w-12 lg:h-12 object-contain"
        />
      </motion.div>
    </motion.button>
  );
});

ChatbotButton.displayName = "ChatbotButton";

const ChatModal = memo(({ isChatOpen, onClose }) => (
  <AnimatePresence>
    {isChatOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", damping: 25 }}
          onClick={(e) => e.stopPropagation()}
        >
          <Chat onClose={onClose} />
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
));

ChatModal.displayName = "ChatModal";

const InnerLayout = ({ children }) => {
  const { mode } = useContext(ModeContext);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const scrollToTop = useCallback(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  const openChat = useCallback(() => {
    setIsChatOpen(true);
  }, []);

  const closeChat = useCallback(() => {
    setIsChatOpen(false);
  }, []);

  const sparkConfig = useMemo(() => ({
    sparkColor: mode ? "rgba(245, 158, 11, 0.8)" : "rgba(147, 51, 234, 0.8)",
    sparkSize: 25,
    sparkRadius: 50,
    sparkCount: 6,
    duration: 1200,
  }), [mode]);

  const backgroundClasses = useMemo(() => 
    `min-h-screen w-full transition-all duration-500 ${
      mode 
        ? 'bg-gradient-to-br from-gray-900 via-slate-900 to-black'
        : 'bg-[#f5f4f0]'
    }`,
    [mode]
  );

  const gradientOverlayClasses = useMemo(() => 
    `absolute inset-0 ${
      mode 
        ? 'bg-[linear-gradient(45deg,_rgba(30,41,59,0.3)_0%,_rgba(15,23,42,0.3)_50%,_rgba(30,27,75,0.3)_100%)]'
        : 'bg-transparent'
    }`,
    [mode]
  );

  const radialGradientClasses = useMemo(() => 
    `absolute inset-0 opacity-30 ${
      mode 
        ? 'bg-[radial-gradient(circle_at_40%_40%,_rgba(245,158,11,0.15)_0%,_transparent_50%)]'
        : 'bg-transparent'
    }`,
    [mode]
  );

  return (
    <ClickSpark {...sparkConfig}>
      <div className={backgroundClasses}>
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className={radialGradientClasses} />
          <div className={gradientOverlayClasses} />
        </div>

        <div className="relative z-10 flex flex-col min-h-screen w-full">
          <div className="fixed top-0 left-0 right-0 z-50 w-full">
            <NavBar />
          </div>

          <main className="flex-grow w-full mt-16">
            <div className="px-0 w-full h-full">
              {children}
            </div>
          </main>

          <ChatbotButton mode={mode} onClick={openChat} />
          <ScrollToTopButton mode={mode} onClick={scrollToTop} />
          <ChatModal isChatOpen={isChatOpen} onClose={closeChat} />

          <div className="w-full">
            <Footer />
          </div>
        </div>
      </div>
    </ClickSpark>
  );
};

export default function ClientProviders({ children }) {
  return (
    <DarkModeProvider>
      <LoadingSpinner />
      <Toaster position="top-right" />
      <InnerLayout>{children}</InnerLayout>
    </DarkModeProvider>
  );
}
