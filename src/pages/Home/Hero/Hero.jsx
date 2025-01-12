import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import heroImage from '../../../assets/hero-1.jpg';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [text] = useTypewriter({
    words: ["Full Stack Web Developer", "Cybersecurity Enthusiast", "Machine Learning Enthusiast"],
    loop: true, // Enable looping
    typeSpeed: 50,
    deleteSpeed: 40,
  });

  return (
    <section
  className="bg-gray-900 text-white h-screen flex items-center justify-center p bg-cover bg-center"
  style={{
    backgroundImage: `url(${heroImage})`,
  }}
>
  {/* Content Wrapper */}
  <div className="w-full font-serif text-center space-y-9">
    <h3 className="text-xl font-light">HI I'M</h3>
    <h1 className="text-5xl font-bold">Sunil Satish Patil</h1>
    <h2 className="text-2xl text-gray-300 font-bold">
      and 
      I am </h2>
    <h2 className="text-6xl text-gray-300 font-bold">
      <span>{text}</span>{" "}
      <span style={{ color: "yellow" }}>
        <Cursor />
      </span>
    </h2>
    <div className="space-x-4">
      <button className="bg-gray-800 shadow-md hover:bg-yellow-500 transition-all text-white py-3 px-6 rounded-lg text-sm font-semibold">
        PROJECTS
      </button>
      <button className="bg-gray-800 shadow-md hover:bg-yellow-500 transition-all uppercase text-white py-3 px-6 rounded-lg text-sm font-semibold">
       <Link to="/about"> Resume</Link>
      </button>
    </div>
  </div>
</section>

  );
}

export default Hero;
