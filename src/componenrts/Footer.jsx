// src/components/Footer.jsx
import React from 'react';
import { Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-[rgb(8,12,20)]">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-gray-600 dark:text-gray-400 flex items-center justify-center gap-2 flex-wrap text-sm sm:text-base">
          © {new Date().getFullYear()} Sunil Patil. All rights reserved.
          <span className="hidden sm:inline">Built with</span>
          <span className="text-blue-600 dark:text-blue-400 font-medium">
            React
          </span>
          <span className="hidden sm:inline">&</span>
          <span className="text-blue-600 dark:text-blue-400 font-medium">
            Tailwind CSS
          </span>
          <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
        </p>
      </div>
    </footer>
  );
}
