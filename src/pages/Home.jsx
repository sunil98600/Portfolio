import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import BinaryRain from "../components/BinaryRain";

const Home = ({ info }) => {
  const [text] = useTypewriter({
    words: ["Web Development", "Cybersecurity", "Machine Learning"],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 40,
  });

  return (
    <div className="relative min-h-screen">
      {/* Binary Rain Effect as a Background */}

      {/* Main Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        {/* Hero Section */}
        <section className="flex-grow flex items-center justify-center text-white">
          <div className="text-center space-y-9">
            <h3 className="text-xl font-light">HI I'M</h3>
            <h1 className="text-5xl font-bold">Sunil Satish Patil</h1>
            <h2 className="text-2xl text-gray-300 font-bold">
              and I am passionate about
            </h2>
            <h2 className="text-5xl text-gray-300 font-bold">
              <span>{text}</span>{" "}
              <span style={{ color: "yellow" }}>
                <Cursor />
              </span>
            </h2>
            <div className="space-x-4">
              <button className="bg-gray-800 shadow-md uppercase hover:bg-yellow-500 transition-all text-white py-3 px-6 rounded-lg text-sm font-semibold">
                <Link to="/contact">Contact</Link>
              </button>
              <button className="bg-gray-800 shadow-md hover:bg-yellow-500 transition-all uppercase text-white py-3 px-6 rounded-lg text-sm font-semibold">
                <Link to="/about"> Resume</Link>
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Home;
