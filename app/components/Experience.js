"use client";

import { useLanguage } from '../contexts/LanguageContext';

export default function Experience() {
  const { t, language } = useLanguage();
  
  const experiences = {
    tr: [
      {
        title: "Frontend Geliştirici",
        company: "Liberyus",
        period: "2024 - Günümüz",
        description: [
          "Kullanıcı odaklı ve modern web arayüzleri tasarlamak için sürekli yeni beceriler geliştirme.",
          "Müşteri gereksinimlerini anlama ve özelleştirilmiş çözümler sunma yeteneğini geliştirmeye odaklanma.",
          "Freelance projelere etkili katılım için problem çözme ve zaman yönetimi becerilerini güçlendirme."
        ]
      },
      {
        title: "Serbest/Frontend Geliştirici",
        company: "Upwork",
        period: "2023 - 2024",
        description: [
          "Kullanıcı odaklı ve modern web arayüzleri tasarlamak için yeni beceriler geliştirme.",
          "Müşteri gereksinimlerini anlama ve özelleştirilmiş çözümler sunma yeteneğini geliştirmeye odaklanma.",
          "Freelance projelere etkili katılım için problem çözme ve zaman yönetimi becerilerini güçlendirme."
        ]
      },
      {
        title: "Hukuk Danışmanı",
        company: "Çeşitli Hukuk Büroları",
        period: "2013 - 2020",
        description: [
          "Çeşitli hukuk alanlarında müşterilerin yasal süreçlerini yöneterek hukuki danışmanlık hizmetleri sunma.",
          "Yasal sorunları çözmek için analizler ve stratejiler geliştirme."
        ]
      }
    ],
    en: [
      {
        title: "Frontend Developer",
        company: "Liberyus",
        period: "2024 - Present",
        description: [
          "Continuously developing new skills to design user-centric and modern web interfaces.",
          "Focusing on improving the ability to understand client requirements and deliver tailored solutions.",
          "Strengthening problem-solving and time management skills to effectively participate in freelance projects."
        ]
      },
      {
        title: "Freelancer/Frontend Developer",
        company: "Upwork",
        period: "2023 - 2024",
        description: [
          "Developing new skills to design user-centric and modern web interfaces.",
          "Focusing on improving the ability to understand client requirements and deliver tailored solutions.",
          "Strengthening problem-solving and time management skills to effectively participate in freelance projects."
        ]
      },
      {
        title: "Law Consult",
        company: "Miscellaneous Law",
        period: "2013 - 2020",
        description: [
          "Provided legal consultancy services in various fields of law, managing clients' legal processes.",
          "Developed analyses and strategies to resolve legal issues."
        ]
      }
    ]
  };
  
  return (
    <section id="experience" className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 ">
        <h2 className="text-3xl font-bold mb-10 text-center text-[#96476e] dark:text-[#FF1493]">
          {t('experience.title')}
        </h2>
        
        <div className="space-y-12 max-w-3xl mx-auto">
          {experiences[language].map((exp, index) => (
            <div key={index} className="border-l-4 border-[#96476e] dark:border-[#FF1493] pl-4 pb-4">
              <div className="flex flex-wrap justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-[#96476e] dark:text-[#FF1493]">{exp.title}</h3>
                <span className="text-gray-500 text-sm">{exp.period}</span>
              </div>
              <p className="text-[#96476e] dark:text-[#FF1493] mb-3">{exp.company}</p>
              <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                {exp.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}