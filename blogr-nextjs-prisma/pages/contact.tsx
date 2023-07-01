import React from "react";
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';

const Contact: React.FC = () => {
  return (
    <Layout>
      <Helmet>
        <title>Contact Us | Michael O'Sullivan</title>
        <meta name="description" content="Get in touch with us to discuss your software needs and find out how we can provide solutions that meet your objectives. We are just a click away!" />
      </Helmet>
      <div className="page megaMargin p-3">
        <h1>Contact Us</h1>
        <p>
          Get in touch with us to discuss your software needs and find out how we can
          provide solutions that meet your objectives. We are just a click away!
        </p>
      </div>
    </Layout>
  );
};

export default Contact;