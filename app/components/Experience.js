"use client";

import { useLanguage } from '../contexts/LanguageContext';

export default function Experience() {
  const { t } = useLanguage();
  
  // CV'den alınan iş deneyimi verileri
  const experiences = [
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
  ];
  
  return (
    <section id="experience" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">Work Experience</h2>
        
        <div className="space-y-12 max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-4 border-blue-500 pl-4 pb-4">
              <div className="flex flex-wrap justify-between items-start mb-2">
                <h3 className="text-xl font-bold">{exp.title}</h3>
                <span className="text-gray-500 text-sm">{exp.period}</span>
              </div>
              <p className="text-blue-600 dark:text-blue-400 mb-3">{exp.company}</p>
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