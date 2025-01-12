import React from 'react';
import profile_image from '../../../assets/sunil.png';
import { Link } from 'react-router-dom';

const AboutMe = () => {
  return (
    <section className="flex flex-col font-serif md:flex-row items-center justify-between py-16 px-8 bg-gray-900">
      {/* Left Side - About Content */}
      <div className="md:w-1/2 text-left text-gray-300 space-y-6">
        <h2 className="text-4xl font-bold text-gray-400 mb-4">About Me</h2>
          <h3 className='text-4xl font-bold'>Hii, I am Sunil Satish Patil</h3>
          <p className='font-bold'>I am a passionate and dedicated Full Stack Developer with expertise in Java, frontend development, design systems, and scalable backend applications. My journey as a developer reflects a blend of creativity and problem-solving, with a knack for delivering projects that meet client needs efficiently.
          </p>
        
        {/* Buttons */}
        <div className="space-x-4">
          <button className="bg-gray-700 text-white font-semibold py-3 px-6 rounded-full shadow-md hover:bg-yellow-500 transition-all">
          <Link to="/contact">Contact Me</Link> 
          </button>
          <button className="bg-transparent border-2 border-gray-400 text-white font-semibold py-3 px-6 rounded-full hover:bg-yellow-500 transition-all">
          <Link to="/about">Read more</Link>  
          </button>
        </div>
      </div>

      {/* Right Side - Profile Image */}
      <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
        <img
          src={profile_image}
          alt="Profile"
          className="w-64 md:w-80 rounded-lg shadow-md"
        />
      </div>
    </section>
  );
};

export default AboutMe;
