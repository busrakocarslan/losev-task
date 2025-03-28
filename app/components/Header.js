"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '../contexts/LanguageContext';

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Mobil menüyü açıp kapatan fonksiyon
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  // Dil değiştirme fonksiyonu
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'tr' : 'en');
  };
  
  return (
    <header className="bg-white dark:bg-gray-900 shadow-md py-4 fixed w-full z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Beray Büşra Koçarslan
        </Link>
        
        {/* Masaüstü Navigasyon */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="#about" className="hover:text-blue-500">
            {t('nav.about')}
          </Link>
          <Link href="#experience" className="hover:text-blue-500">
            {t('nav.experience')}
          </Link>
          <Link href="#skills" className="hover:text-blue-500">
            {t('nav.skills')}
          </Link>
          <Link href="#projects" className="hover:text-blue-500">
            {t('nav.projects')}
          </Link>
          <Link href="#contact" className="hover:text-blue-500">
            {t('nav.contact')}
          </Link>
          
          {/* Dil değiştirme butonu */}
          <button 
            onClick={toggleLanguage}
            className="px-3 py-1 border border-blue-500 rounded-md hover:bg-blue-500 hover:text-white"
          >
            {language === 'en' ? 'TR' : 'EN'}
          </button>
        </nav>
        
        {/* Mobil Menü Butonu */}
        <button 
          className="md:hidden text-2xl"
          onClick={toggleMenu}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>
      
      {/* Mobil Menü */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-lg">
          <nav className="flex flex-col py-4">
            <Link 
              href="#about" 
              className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.about')}
            </Link>
            <Link 
              href="#experience" 
              className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.experience')}
            </Link>
            <Link 
              href="#skills" 
              className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.skills')}
            </Link>
            <Link 
              href="#projects" 
              className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.projects')}
            </Link>
            <Link 
              href="#contact" 
              className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.contact')}
            </Link>
            
            {/* Mobil dil değiştirme butonu */}
            <button 
              onClick={toggleLanguage}
              className="mx-4 mt-2 py-2 border border-blue-500 rounded-md hover:bg-blue-500 hover:text-white"
            >
              {language === 'en' ? 'Türkçe\'ye Geç' : 'Switch to English'}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}