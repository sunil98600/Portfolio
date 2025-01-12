import React from 'react';
import Layout from '../../components/Layout/Layout';
import Hero from "./Hero/Hero"; 
import AboutMe from './About/AboutMe';
import Contact from './Contact/Contact';

const Home =({info})=>{
return(
    <div>
        <Layout>
            <Hero info={info}  />
            <AboutMe />
            <Contact />
        </Layout>
    </div>
)
}


export default Home;