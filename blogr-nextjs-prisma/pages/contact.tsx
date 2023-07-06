import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    const script = document.createElement('script');

    script.src = 'https://conversations-widget.brevo.com/brevo-conversations.js';
    script.async = true;

    document.body.appendChild(script);

    window["BrevoConversationsID"] = "64a72ff73bfa944e0430f046";
window['BrevoConversations'] = window['BrevoConversations'] || function() { (window['BrevoConversations'].q = window['BrevoConversations'].q || []).push(arguments); };

    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>Contact Me | Michael O'Sullivan</title>
        <meta name="description" content="Get in touch with us to discuss your software needs and find out how we can provide solutions that meet your objectives. We are just a click away!" />
      </Helmet>
      <div className="page megaMargin p-3 whitebk">
        <h1>Contact Me</h1>
        <div className="row">
          <div className="col-md-6">
            <p>
              Get in touch or shoot me an email directly on <strong>michael@bywire.news</strong>
            </p>
           
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