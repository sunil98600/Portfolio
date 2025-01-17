import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-transparent text-gray-400 py-4 px-6">
      <div className="max-w-screen-lg mx-auto text-center space-y-4">
        {/* Social Media Links */}
        <div className="flex justify-center space-x-6">
          <a
            href="https://x.com/SunilPatil98"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition duration-300 text-lg"
          >
            <i className="fab fa-twitter"></i> Twitter
          </a>
          <a
            href="https://www.linkedin.com/in/sunilpatil9860/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition duration-300 text-lg"
          >
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
          <a
            href="https://www.instagram.com/sunil_patil_0107"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition duration-300 text-lg"
          >
            <i className="fab fa-instagram"></i> Instagram
          </a>
        </div>

        {/* Greeting Message */}
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Sunil Satish Patil. Made with ❤️ for the web.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
