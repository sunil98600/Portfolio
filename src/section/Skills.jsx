// src/components/Skills.jsx
import React from 'react';
import { Code, Server, Globe, Database, Cloud, TestTube } from 'lucide-react';

const skills = [
  {
    name: 'Core Java',
    icon: Code,
    color:
      'bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-950 dark:text-orange-300 dark:border-orange-800',
  },
  {
    name: 'Node.js',
    icon: Server,
    color:
      'bg-green-50 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-300 dark:border-green-800',
  },
  {
    name: 'Express',
    icon: Globe,
    color:
      'bg-gray-50 text-gray-700 border-gray-200 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700',
  },
  {
    name: 'MongoDB',
    icon: Database,
    color:
      'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950 dark:text-emerald-300 dark:border-emerald-800',
  },
  {
    name: 'SQL',
    icon: Database,
    color:
      'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800',
  },
  {
    name: 'Git',
    icon: Code,
    color:
      'bg-red-50 text-red-700 border-red-200 dark:bg-red-950 dark:text-red-300 dark:border-red-800',
  },
  {
    name: 'Docker',
    icon: Cloud,
    color:
      'bg-sky-50 text-sky-700 border-sky-200 dark:bg-sky-950 dark:text-sky-300 dark:border-sky-800',
  },
  {
    name: 'Kubernetes',
    icon: Cloud,
    color:
      'bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-950 dark:text-indigo-300 dark:border-indigo-800',
  },
  {
    name: 'Selenium',
    icon: TestTube,
    color:
      'bg-yellow-50 text-yellow-700 border-yellow-200 dark:bg-yellow-950 dark:text-yellow-300 dark:border-yellow-800',
  },
  {
    name: 'Postman',
    icon: Globe,
    color:
      'bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-950 dark:text-orange-300 dark:border-orange-800',
  },
  {
    name: 'REST Assured',
    icon: TestTube,
    color:
      'bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950 dark:text-purple-300 dark:border-purple-800',
  },
  {
    name: 'Microservices',
    icon: Server,
    color:
      'bg-violet-50 text-violet-700 border-violet-200 dark:bg-violet-950 dark:text-violet-300 dark:border-violet-800',
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-[rgb(8,12,20)] text-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
            Technologies and tools I use to build robust backend solutions
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="rounded-2xl border border-white/10 bg-[#161b22] p-6 text-center 
                         hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <div
                className={`w-12 h-12 mx-auto mb-4 rounded-xl flex items-center justify-center border ${skill.color}`}
              >
                <skill.icon size={24} />
              </div>
              <h3 className="font-semibold text-sm">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
