"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "../contexts/LanguageContext";
import { motion, animate } from "framer-motion";

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "tr" : "en");
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;

    animate(startPosition, targetPosition, {
      duration: 1.5,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (value) => {
        window.scrollTo(0, value);
      },
    });

    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md py-4 fixed w-full z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-[#96476e] dark:text-[#FF1493]">
          Büşra Koçarslan
        </Link>

        {/* Masaüstü Navigasyon */}
        <nav className="hidden md:flex items-center space-x-6">
          <motion.a
            href="#about"
            onClick={(e) => handleNavClick(e, "about")}
            className="hover:text-[#96476e] dark:hover:text-[#FF1493] transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {t("nav.about")}
          </motion.a>
          <motion.a
            href="#experience"
            onClick={(e) => handleNavClick(e, "experience")}
            className="hover:text-[#96476e] dark:hover:text-[#FF1493] transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {t("nav.experience")}
          </motion.a>
          <motion.a
            href="#skills"
            onClick={(e) => handleNavClick(e, "skills")}
            className="hover:text-[#96476e] dark:hover:text-[#FF1493] transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {t("nav.skills")}
          </motion.a>
          {/* <motion.a
            href="#projects"
            onClick={(e) => handleNavClick(e, "projects")}
            className="hover:text-[#96476e] dark:hover:text-[#FF1493] transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {t("nav.projects")}
          </motion.a> */}
          <motion.a
            href="#contact"
            onClick={(e) => handleNavClick(e, "contact")}
            className="hover:text-[#96476e] dark:hover:text-[#FF1493] transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {t("nav.contact")}
          </motion.a>

          <motion.button
            onClick={toggleLanguage}
            className="px-4 py-1 border border-[#96476e] dark:border-[#FF1493] rounded-md 
                     hover:bg-[#96476e] dark:hover:bg-[#FF1493] hover:text-white 
                     transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {language === "en" ? "TR" : "EN"}
          </motion.button>
        </nav>

        {/* Mobil Menü Butonu */}
        <button 
          className="md:hidden text-2xl text-[#96476e] dark:text-[#FF1493]" 
          onClick={toggleMenu}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobil Menü */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-lg">
          <nav className="flex flex-col py-4">
            <Link
              href="#about"
              className="px-4 py-2 hover:bg-[#96476e]/10 dark:hover:bg-[#FF1493]/10 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.about")}
            </Link>
            <Link
              href="#experience"
              className="px-4 py-2 hover:bg-[#96476e]/10 dark:hover:bg-[#FF1493]/10 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.experience")}
            </Link>
            <Link
              href="#skills"
              className="px-4 py-2 hover:bg-[#96476e]/10 dark:hover:bg-[#FF1493]/10 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.skills")}
            </Link>
            {/* <Link
              href="#projects"
              className="px-4 py-2 hover:bg-[#96476e]/10 dark:hover:bg-[#FF1493]/10 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.projects")}
            </Link> */}
            <Link
              href="#contact"
              className="px-4 py-2 hover:bg-[#96476e]/10 dark:hover:bg-[#FF1493]/10 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.contact")}
            </Link>

            <button
              onClick={toggleLanguage}
              className="mx-4 mt-2 py-2 border border-[#96476e] dark:border-[#FF1493] rounded-md 
                       hover:bg-[#96476e] dark:hover:bg-[#FF1493] hover:text-white 
                       transition-colors"
            >
              {language === "en" ? "Türkçe'ye Geç" : "Switch to English"}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}