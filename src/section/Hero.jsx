import React from 'react';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen bg-[rgb(8,12,20)] text-white flex flex-col md:flex-row items-center relative"
    >
      {/* Left Side - Text Content */}
      <div className="w-full md:w-7/12 px-6 sm:px-12 md:px-16 py-10 flex flex-col justify-center text-center md:text-left z-10">
        <h1 className="text-5xl sm:text-5xl md:text-6xl font-bold mb-5 leading-snug">
          Hi, I'm <span className="text-blue-400">Sunil Patil</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-xl mb-6">
          Backend Developer | Software Tester | Node.js | Microservices | REST
          APIs
        </p>

        {/* Badges */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6">
          <span className="px-4 py-2 rounded-full border border-gray-500 bg-white text-black font-medium text-sm sm:text-base">
            Backend Developer
          </span>
          <span className="px-4 py-2 rounded-full border border-gray-500 bg-[rgb(8,12,20)] font-medium text-sm sm:text-base">
            SDET at Cognizant
          </span>
          <span className="px-4 py-2 rounded-full border border-gray-500 bg-gray-800 font-medium text-sm sm:text-base">
            Full Stack Ready
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-300 font-medium mb-8 max-w-xl mx-auto md:mx-0 text-base sm:text-lg">
          Passionate backend developer with expertise in building scalable
          server-side applications. Currently working as an SDET at Cognizant,
          combining development and testing skills to deliver robust,
          high-quality solutions.
        </p>

        {/* Buttons */}

        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          {/* View Projects Button */}
          <Link
            to="projects" // target section id
            smooth={true}
            duration={500}
            offset={-70}
            spy={true}
            className="px-6 py-3 bg-white text-black font-semibold rounded-xl shadow hover:bg-gray-200 transition text-sm sm:text-base cursor-pointer"
          >
            View Projects
          </Link>

          {/* Contact Me Button */}
          <Link
            to="contact" // target section id
            smooth={true}
            duration={500}
            offset={-70}
            spy={true}
            className="px-6 py-3 border border-white font-semibold rounded-xl hover:bg-gray-800 transition text-sm sm:text-base cursor-pointer"
          >
            Contact Me
          </Link>
        </div>
      </div>

      {/* Right Side - Photo with Fade */}
      <div className="relative w-full md:w-5/12 h-[300px] sm:h-[400px] md:h-screen pt-8">
        <img
          src="src/assets/Snapchat-389782440.jpg" // 👉 replace with your actual photo
          alt="Sunil Patil"
          className="w-full h-full object-cover object-center md:object-right rounded-lg md:rounded-none"
        />
        {/* Fade Effect Overlay */}
        <div className="absolute top-0 left-0 h-full w-2/3 md:w-1/2 bg-gradient-to-r from-[rgb(8,12,20)] to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
