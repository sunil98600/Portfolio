// src/components/Projects.jsx
import React from 'react';
import { Code, Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Ticketing Microservice Web App',
    description:
      'Developed a production-grade microservices app with event-driven architecture (NATS). Deployed on Kubernetes for scalability and wrote comprehensive Jest tests.',
    techStack: ['TypeScript', 'Node.js', 'Docker', 'Kubernetes', 'MongoDB'],
    githubUrl: 'https://github.com/sunil98600/Ticketing-Microservice-Web-App', // replace with repo link if available
    demoUrl: 'https://github.com/sunil98600/Ticketing-Microservice-Web-App', // add demo link if you have one
    color: 'from-orange-500 to-yellow-500',
  },
  {
    title: 'Blogify – Full Stack Blog Platform',
    description:
      'Built a blog platform with secure authentication, CRUD features, and optimized MongoDB queries (30% faster retrieval). Designed responsive UI with EJS templates.',
    techStack: ['Node.js', 'Express.js', 'MongoDB', 'EJS', 'JWT'],
    githubUrl: 'https://github.com/sunil98600/blogify',
    demoUrl: 'https://github.com/sunil98600/blogify', // add hosted demo if you have one
    color: 'from-blue-500 to-purple-500',
  },
  {
    title: 'URL Shortener App',
    description:
      'Created a scalable REST API backend with unique URL generation and React.js frontend. Integrated strong error handling and tested endpoints with Postman.',
    techStack: ['Node.js', 'Express.js', 'MongoDB', 'React.js'],
    githubUrl: 'https://github.com/sunil98600/URL_SHORTNER_SDE',
    demoUrl: 'https://github.com/sunil98600/URL_SHORTNER_SDE', // add hosted demo if you have one
    color: 'from-green-400 to-emerald-600',
  },
  {
    title: 'Portfolio Website',
    description:
      'Designed a responsive portfolio site with custom hooks, achieving a 90+ Lighthouse score. Implemented lazy loading, cutting page load time by 40%.',
    techStack: ['React.js', 'TailwindCSS'],
    githubUrl: 'https://github.com/sunil98600/portfolio',
    demoUrl: '', // add hosted portfolio link
    color: 'from-pink-500 to-red-500',
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
          <p className="text-lg text-white dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Some of the projects I've built using modern backend technologies
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-2xl shadow-lg overflow-hidden bg-white dark:bg-gray-800 hover:shadow-xl transform hover:scale-105 transition-all duration-300 border"
            >
              {/* Top color bar */}
              <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>

              <div className="p-6">
                {/* Title */}
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={`w-10 h-10 bg-gradient-to-r ${project.color} rounded-lg flex items-center justify-center`}
                  >
                    <Code className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white  dark:text-white">
                    {project.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white dark:font-bold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 text-sm font-medium border rounded-lg flex items-center  text-white justify-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
