"use client";

import { createContext, useState, useContext } from 'react';

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    
    // Hero section
    'hero.title': 'Full Stack Developer',
    'hero.intro': 'With over 3+ years of experience in IT and more than 2+ years specializing in React, Node.js, and Next.js.',
    'hero.emailMe': 'Email Me',
    
    // Experience section
    'experience.title': 'Work Experience',
    'experience.present': 'Present',
    
    // Skills section
    'skills.title': 'Technical Skills',
    'skills.programmingLanguages': 'Programming Languages',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.libraries': 'Libraries & Frameworks',
    'skills.tools': 'Tools',
    'skills.testing': 'Testing',

     // Contact section
     'contact.title': 'Contact Me',
     'contact.email': 'Email',
     'contact.phone': 'Phone',
     'contact.location': 'Location',
     'contact.linkedin': 'LinkedIn',
     'contact.github': 'GitHub'
   
  },
  tr: {
    // Navigation
    'nav.home': 'Ana Sayfa',
    'nav.about': 'Hakkımda',
    'nav.experience': 'Deneyim',
    'nav.skills': 'Yetenekler',
    'nav.projects': 'Projeler',
    'nav.contact': 'İletişim',
    
    // Hero section
    'hero.title': 'Full Stack Geliştirici',
    'hero.intro': 'IT alanında 3+ yıl ve React, Node.js ve Next.js konularında 2+ yıl uzmanlık deneyimi.',
    'hero.emailMe': 'Email Gönder',
    
    // Experience section
    'experience.title': 'İş Deneyimi',
    'experience.present': 'Günümüz',
    
    // Skills section
    'skills.title': 'Teknik Beceriler',
    'skills.programmingLanguages': 'Programlama Dilleri',
    'skills.frontend': 'Ön Yüz',
    'skills.backend': 'Arka Yüz',
    'skills.libraries': 'Kütüphaneler & Framework\'ler',
    'skills.tools': 'Araçlar',
    'skills.testing': 'Test',

    // Contact section
    'contact.title': 'İletişim',
    'contact.email': 'E-posta',
    'contact.phone': 'Telefon',
    'contact.location': 'Konum',
    'contact.linkedin': 'LinkedIn',
    'contact.github': 'GitHub'
  }
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');
  
  const t = (key) => {
    return translations[language][key] || key;
  };
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}