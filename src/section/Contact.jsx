// src/components/Contact.jsx
import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import { SiLeetcode } from 'react-icons/si';

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting
            projects, or just having a chat about technology.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-3xl mx-auto">
          <a
            href="mailto:sunilpatil7841@gmail.com"
            className="flex items-center justify-center gap-3 border-2 border-gray-300 dark:border-gray-700 rounded-lg px-6 py-3 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex-1 max-w-xs bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:border-blue-600 hover:text-blue-600 dark:hover:text-blue-400"
          >
            <Mail size={20} />
            Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/sunilpatil9860/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 border-2 border-gray-300 dark:border-gray-700 rounded-lg px-6 py-3 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex-1 max-w-xs bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:border-blue-600 hover:text-blue-600 dark:hover:text-blue-400"
          >
            <Linkedin size={20} />
            LinkedIn
          </a>

          <a
            href="https://github.com/sunil98600"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 border-2 border-gray-300 dark:border-gray-700 rounded-lg px-6 py-3 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex-1 max-w-xs bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:border-blue-600 hover:text-blue-600 dark:hover:text-blue-400"
          >
            <Github size={20} />
            GitHub
          </a>
          <a
            href="https://leetcode.com/u/WKql4Cop5k/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 border-2 border-gray-300 dark:border-gray-700 rounded-lg px-6 py-3 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex-1 max-w-xs bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:border-blue-600 hover:text-blue-600 dark:hover:text-blue-400"
          >
            <SiLeetcode size={20} />
            Leetcode
          </a>
        </div>
      </div>
    </section>
  );
}
