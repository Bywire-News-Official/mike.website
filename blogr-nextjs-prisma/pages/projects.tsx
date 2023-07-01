import React from "react";
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';

const Projects: React.FC = () => {
  return (
    <Layout>
      <Helmet>
        <title>Projects | Michael O'Sullivan</title>
        <meta name="description" content="Browse through our latest software projects and see the diverse range of solutions we have delivered to our clients across various industries." />
      </Helmet>
      <div className="page megaMargin p-3">
        <h1>Our Projects</h1>
        <p>
          Browse through our latest software projects and see the diverse range of
          solutions we have delivered to our clients across various industries.
        </p>
      </div>
    </Layout>
  );
};

export default Projects;