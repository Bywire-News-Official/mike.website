import React from "react";
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';

const About: React.FC = () => {
  const content = [
    {
      title: "Artificial Intelligence",
      description: "Your description here...",
      link: "https://github.com/yourGithubProfile",
      linkText: "View on Github"
    },
    {
      title: "Product Management",
      description: "Your description here...",
      link: "https://yourProductLink.com",
      linkText: "View Products"
    },
    {
      title: "Media",
      description: "Your description here...",
      link: "https://dribbble.com/yourDribbbleProfile",
      linkText: "View Dribbble"
    },
    {
      title: "Politics",
      description: "Your description here...",
      link: "#",
      linkText: "View More"
    },
    {
      title: "My Playlist",
      description: "Your playlist description here...",
      link: "https://open.spotify.com/playlist/yourPlaylist",
      linkText: "View Playlist"
    },
    {
      title: "My Writings",
      description: "Your writings description here...",
      link: "https://yourWritingsLink.com",
      linkText: "Visit Page"
    }
  ];

  return (
    <Layout>
      <Helmet>
        <title>About Me | Michael O'Sullivan</title>
        <meta name="description" content="I am a seasoned programmer with the unique ability to tackle intricate technical challenges while crafting websites that exude sleekness and visual allure. I am also a product manager and a designer." />
      </Helmet>
      <div className="page megaMargin p-3 whitebk">
        <h1>About Me</h1>

        {content.map((item, index) => (
          <div className="row" key={index}>
            <div className="col-1">
              {/* Replace with your icon */}
              <i className="icon-example"></i>
            </div>
            <div className="col-8">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
            <div className="col-3">
              <a href={item.link}>{item.linkText}</a>
            </div>
          </div>
        ))}

      </div>
    </Layout>
  );
};

export default About;
