import React from 'react';
import { FiTarget, FiAward, FiDatabase, FiCode } from 'react-icons/fi';

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-[#111827] text-white flex flex-col items-center justify-center px-6 py-16"
    >
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 relative inline-block">
          About Me
          <span className="absolute left-1/2 -bottom-2 w-16 h-[2px] bg-blue-500 -translate-x-1/2"></span>
        </h2>
      </div>

      {/* Content Grid */}
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Side - Description */}
        <div className="flex flex-col gap-6">
          <div className="bg-[#1f2937] p-6 rounded-lg shadow hover:shadow-lg transition">
            <p className="text-gray-300 leading-relaxed font-bold">
              I'm a dedicated backend developer with a strong passion for
              creating efficient, scalable server-side solutions. My journey in
              software development has been driven by curiosity and a constant
              desire to learn and implement cutting-edge technologies.
            </p>
          </div>
          <div className="bg-[#1f2937] p-6 rounded-lg shadow hover:shadow-lg transition">
            <p className="text-gray-300 leading-relaxed font-bold">
              Currently working as a Software Development Engineer in Test
              (SDET) at Cognizant, where I combine my development skills with
              testing expertise to ensure the delivery of high-quality software
              products.
            </p>
          </div>
        </div>

        {/* Right Side - Cards */}
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-[#1f2937] p-6 rounded-lg shadow flex flex-col items-center text-center hover:shadow-lg transition">
            <FiTarget className="text-3xl mb-3 text-blue-400" />
            <h3 className="font-semibold text-lg">Focus</h3>
            <p className="text-gray-400 text-sm">Backend Development</p>
          </div>
          <div className="bg-[#1f2937] p-6 rounded-lg shadow flex flex-col items-center text-center hover:shadow-lg transition">
            <FiAward className="text-3xl mb-3 text-blue-400" />
            <h3 className="font-semibold text-lg">Role</h3>
            <p className="text-gray-400 text-sm">SDET at Cognizant</p>
          </div>
          <div className="bg-[#1f2937] p-6 rounded-lg shadow flex flex-col items-center text-center hover:shadow-lg transition">
            <FiCode className="text-3xl mb-3 text-blue-400" />
            <h3 className="font-semibold text-lg">Expertise</h3>
            <p className="text-gray-400 text-sm">Node.js & APIs</p>
          </div>
          <div className="bg-[#1f2937] p-6 rounded-lg shadow flex flex-col items-center text-center hover:shadow-lg transition">
            <FiDatabase className="text-3xl mb-3 text-blue-400" />
            <h3 className="font-semibold text-lg">Database</h3>
            <p className="text-gray-400 text-sm">MongoDB & SQL</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
