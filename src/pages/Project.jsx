import React from 'react'
import ProjectList from '../components/Project/ProjectList';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';



const Project = () => {
  
  return (
    <div>
      <Navbar/>
        <div className='my-12'>
        <ProjectList/>
        </div>
      <Footer/>
      </div>
  )
}

export default Project;
