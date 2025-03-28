"use client";

import { useLanguage } from '../contexts/LanguageContext';

export default function Skills() {
  const { t } = useLanguage();

  // Yetenekleri kategorilere ayıralım
  const skillCategories = [
    {
      title: t('skills.programmingLanguages'),
      skills: ["JavaScript", "ES6", "TypeScript", "Python", "Node.js", "Go"]
    },
    {
      title: t('skills.frontend'),
      skills: ["HTML", "CSS", "JavaScript", "React.js","Vue.js", "Redux.js", "ContextAPI", "Axios", "APIs", "DOM"]
    },
    {
      title: t('skills.backend'),
      skills: ["Express.js", "RESTful APIs", "Docker", "MongoDB", "PostgreSQL", "Mongoose", "Echo", "Redis"]
    },
    {
      title: t('skills.libraries'),
      skills: ["Node.js", "Express.js", "SASS", "Bootstrap", "MaterialUI", "Tailwind", "Styled Components", "Yup", "Formik", "Firebase", "Next.js", "jQuery"]
    },
    {
      title: t('skills.tools'),
      skills: ["Postman", "VSCode", "Git", "GitHub", "Thunder Client", "Docker"]
    },
    {
      title: t('skills.testing'),
      skills: ["Cypress.js"]
    }
  ];

  return (
    <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">{t('skills.title')}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6"
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}