import React from 'react';
import Layout from '../../components/Layout/Layout';
import Skill from '../Home/Skills/Skill';

const About = () => {
  return (
    <Layout>
      <section className=" text-white py-16 px-8 md:px-16">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-serif font-bold text-gray-400 mb-4">About Me</h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            A brief insight into my journey as a developer and the experiences that have shaped my career.
          </p>
        </div>

        {/* Content Wrapper */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          {/* Left Section - About Content */}
          <div className="md:w-2/3 text-gray-300 space-y-6">
            <p className="text-lg leading-relaxed">
              Hello! I'm <span className="text-gray-400 font-bold">Sunil Satish Patil</span>, a
              passionate Full Stack Developer from Pune, Maharashtra. I am currently pursuing my
              B.Eng. in Information Technology at Trinity Academy of Engineering, Pune University, with
              a CGPA of 8.07. I specialize in both frontend and backend technologies and strive to
              deliver dynamic, user-centric solutions.
            </p>

            <p className="text-lg leading-relaxed">
              I have worked on several projects that merge creativity with technical precision. My expertise
              spans a wide range of tools and technologies, including{' '}
              <span className="font-bold text-gray-400">Java, Python, JavaScript, ReactJS, NodeJS,</span> and
              <span className="font-bold text-gray-400"> Django</span>, among others. I am passionate about
              solving real-world challenges through technology, and my most recent project involves AI-powered
              traffic signal optimization to improve urban mobility.
            </p>

            <p className="text-lg leading-relaxed">
              I am committed to continuous learning and actively seek opportunities to refine my skills. I
              pride myself on my problem-solving abilities, critical thinking, and effective communication.
              These skills, combined with my technical expertise, enable me to thrive in team-oriented
              environments.
            </p>

            <div className="mt-6">
              <h3 className="text-xl font-serif font-semibold text-gray-400">Key Skills & Technologies:</h3>
              <ul className="text-lg list-disc pl-6 text-gray-300 space-y-2">
                <li>Full Stack Development</li>
                <li>Java, Python, JavaScript, SQL, MySQL</li>
                <li>ReactJS, NodeJS, Express, Django</li>
                <li>AI & Machine Learning (Deep Learning)</li>
                <li>Web Development (HTML5, CSS3, Tailwind CSS)</li>
                <li>Version Control (Git & GitHub)</li>
              </ul>
            </div>
          </div>

          {/* Right Section - Highlights */}
          <div className="md:w-1/3 bg-gray-800 p-6 rounded-lg shadow-lg space-y-6">
            <h3 className="text-2xl font-serif font-semibold text-gray-400">Quick Highlights</h3>
            <ul className="text-lg text-gray-300 space-y-4">
              <li><strong>Education:</strong> B.Eng. in Information Technology (CGPA: 8.07)</li>
              <li><strong>Projects:</strong> Personal Portfolio, Blogify, AI Traffic Optimization</li>
              <li><strong>Certifications:</strong> Cyber Security (Google), ChatGPT Prompting (Udemy)</li>
              <li><strong>Languages:</strong> Java, Python, JavaScript, SQL</li>
              <li><strong>Soft Skills:</strong> Communication, Teamwork, Problem-Solving, Critical Thinking</li>
            </ul>

            <div className="space-y-4">
              <a
                href="https://github.com/sunil98600"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 hover:underline"
              >
                Visit My GitHub &rarr;
              </a>
              <p>
                <strong>Email:</strong>{' '}
                <a
                  href="mailto:sunilspatil9860@gmail.com"
                  className="text-white hover:underline"
                >
                  sunilspatil9860@gmail.com
                </a>
              </p>
              <p>
                <strong>Phone:</strong> +91-9172544420
              </p>
            </div>
          </div>
        </div>
      </section>
      <Skill/>
    </Layout>
  );
};

export default About;
