import React, { useState } from "react";
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
    // Here you would typically send the form data to your server
  };

  return (
    <Layout>
      <Helmet>
        <title>Contact Us | Michael O'Sullivan</title>
        <meta name="description" content="Get in touch with us to discuss your software needs and find out how we can provide solutions that meet your objectives. We are just a click away!" />
      </Helmet>
      <div className="page megaMargin p-3 whitebk">
      <h1>Contact Us</h1>
      <div className="row">
          <div className="col-md-6">
       
        <p>
        Get in touch or shoot me an email directly on <strong>michael@bywire.news</strong>
        </p>
       
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" className="form-control" id="name" value={form.name} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" className="form-control" id="email" value={form.email} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea className="form-control" id="message" value={form.message} onChange={handleChange} />
              </div>
              <button type="submit" className="btn btn-primary btn-lg">Send Message</button>
            </form>
          </div>
        </div>
        <div className="social-icons mt-3">
          <a className="m-2" href="https://twitter.com/username" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} size="1x" />
          </a>
          <a className="m-2" href="https://facebook.com/username" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="1x" />
          </a>
          <a className="m-2" href="https://instagram.com/username" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="1x" />
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
