import React from 'react';
import project1 from '../../assets/projects/portfolio.png';
import project2 from '../../assets/projects/Blogify.png';
import project3 from '../../assets/projects/url-shortner.png';
import project4 from '../../assets/projects/todo.png';
import project5 from '../../assets/projects/textutils.png';
import project6 from '../../assets/projects/solar.png';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: 'Personal Portfolio ',
    image: project1, // replace with actual image path
    desc : "A React and Tailwind CSS portfolio showcasing projects, skills, and experience with responsive design and smooth animations.",
    link: '/'
  },
  {
    title: 'Blogify',
    image: project2, // replace with actual image path
    desc : "A dynamic blogging website with user authentication, blog management, commenting, file uploads, and responsive views using EJS.",
    link: 'https://github.com/sunil98600/Blogify'
  },
  {
    title: 'url-shortner',
    image: project3, // replace with actual image path
    desc : "A URL shortener web app that generates compact links, tracks usage statistics, and provides an intuitive interface for managing URLs.",
    link: 'https://github.com/sunil98600/URL-SHORTNER'
  },
  {
    title: 'ToDO List',
    image: project4, // replace with actual image path
    desc : "A simple to-do list app that allows users to add, edit, delete, and mark tasks as complete with an intuitive, responsive design.",
    link: 'https://sunil98600.github.io/To-Do-list/'
  },
  {
    title: 'Text-Utils : Format your Text',
    image: project5, // replace with actual image path
    desc : "A text manipulation web app that allows users to convert text to uppercase, lowercase, remove extra spaces, count characters and words, and more with an easy-to-use interface.",
    link: 'https://github.com/sunil98600/textutills'
  },
  {
    title: 'Solar System',
    image: project6, // replace with actual image path
    desc : " solar system view created using pure HTML and CSS, featuring rotating planets around the sun with animated orbital movements and responsive design.",
    link: 'https://sunil98600.github.io/Solarsystem-/'
  },
  
];

const ProjectList = () => {
  return (
    <section className="p-10">
      <div className="container mx-auto text-white">
        {/* Featured Projects Heading */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-semibold">Featured Projects</h2>
        </div>
        
        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="relative bg-gray-900 rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-medium">{project.title}</h3>
                <p className="white mt-2 text-sm">{project.desc}</p>
                <Link to={project.link} className="text-yellow-400 mt-2 inline-block font-medium hover:underline">Visit →</Link>  
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectList;
