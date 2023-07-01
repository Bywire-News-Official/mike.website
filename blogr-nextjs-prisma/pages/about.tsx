import React from "react";
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';

const About: React.FC = () => {
  return (
    <Layout>
      <Helmet>
        <title>About Us | Michael O'Sullivan</title>
        <meta name="description" content="We are a team of passionate developers dedicated to creating high-quality software solutions. Our mission is to provide our clients with the best possible products and services, while continuously improving our skills and staying up-to-date with the latest technologies." />
      </Helmet>
      <div>
        <h1>About Us</h1>
        <p>
          We are a team of passionate developers dedicated to creating
          high-quality software solutions. Our mission is to provide our clients
          with the best possible products and services, while continuously
          improving our skills and staying up-to-date with the latest
          technologies.
        </p>
      </div>
    </Layout>
  );
};

export default About;
