// src/components/Resume.jsx
import React from 'react';
import { Download } from 'lucide-react';

export default function Resume() {
  return (
    <section
      id="resume"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-[rgb(8,12,20)]"
    >
      <div className="max-w-7xl mx-auto text-center">
        <div className="max-w-2xl mx-auto p-8 shadow-xl border-2 border-blue-500/20 rounded-2xl bg-white dark:bg-[rgb(8,12,20)]">
          {/* Icon */}
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Download className="w-8 h-8 text-white" />
          </div>

          {/* Heading */}
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Download Resume
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
            Get a detailed overview of my experience, education, and technical
            skills.
          </p>

          {/* Button */}
          <a
            href="https://drive.google.com/file/d/1vd-iWkhecxJbiVEQNYYVZweMqq0_uFQU/view?usp=sharing" // replace with your actual resume file path
            download
            className="inline-flex items-center gap-2 text-lg px-8 py-3 rounded-lg bg-blue-600 text-white font-medium shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
