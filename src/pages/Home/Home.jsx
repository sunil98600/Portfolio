import React from "react";
import Layout from "../../components/Layout/Layout";
import Hero from "./Hero/Hero";

const Home = ({ info }) => {
  
  return (
    <div >
      <Layout>
       <Hero />
      </Layout>
    </div>
  );
};

export default Home;
