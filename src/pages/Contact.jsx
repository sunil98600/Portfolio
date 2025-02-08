
import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import emailjs from '@emailjs/browser';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';


const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_wi1vx3d', // Replace with your Email Service ID
        'template_xj5qbzq', // Replace with your Template ID
        formRef.current,
        'hSwNVhDOAGsIYyvKY' // Replace with your Public Key
      )
      .then(
        (result) => {
          console.log('Email sent:', result.text);
          alert('Message sent successfully!');
        },
        (error) => {
          console.error('Email error:', error.text);
          alert('Failed to send message. Please try again later.');
        }
      );

    e.target.reset(); // Reset the form fields after submission
  };

  return (
    <div className="w-full ">
      <Navbar/>
        <div className=" flex items-center justify-center pt-20 px-6 text-white">
          <div className="w-full max-w-6xl">
            <h1 className="text-4xl font-bold text-center mb-8">Get in Touch</h1>

            <div className="flex flex-col lg:flex-row gap-12">
              {/* Contact Form */}
              <div className="w-full lg:w-1/2 bg-slate-800 shadow-md rounded-lg p-6 md:p-8">
                <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
                <form ref={formRef} onSubmit={sendEmail}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block font-medium mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="user_name"
                      placeholder="Your Name"
                      className="w-full px-4 py-2 border border-gray-700 bg-slate-900 rounded-md text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block font-medium mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="user_email"
                      placeholder="Your Email"
                      className="w-full px-4 py-2 border border-gray-700 bg-slate-900 rounded-md text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="message" className="block font-medium mb-2">Message</label>
                    <textarea
                      id="message"
                      rows="4"
                      name="user_message"
                      placeholder="Your Message"
                      className="w-full px-4 py-2 border border-gray-700 bg-slate-900 rounded-md text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Social Media Links */}
              <div className="w-full lg:w-1/2 text-center lg:text-left">
                <h2 className="text-2xl font-semibold mb-4">Follow Me</h2>
                <p className="text-gray-400 mb-6">Feel free to reach out on my social media channels:</p>
                <div className="flex justify-center lg:justify-start gap-4">
                  <a href="www.linkedin.com/in/sunilpatil9860" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} className="text-blue-400 text-3xl hover:text-blue-500 transition duration-300" />
                  </a>
                  <a href="https://github.com/sunil98600" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} className="text-gray-400 text-3xl hover:text-gray-300 transition duration-300" />
                  </a>
                  <a href="mailto:sunilspatil9860@gmail.com">
                    <FontAwesomeIcon icon={faEnvelope} className="text-red-500 text-3xl hover:text-red-400 transition duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      <Footer/>
    </div>
  );
};

export default Contact;
