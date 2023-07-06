import React from "react";
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt, faVoteYea, faCogs, faCode } from '@fortawesome/free-solid-svg-icons'


const About: React.FC = () => {
  const content = [
    {
      title: "Product Innovation and Management",
      description: "As the CEO of Bywire news, I've brought blockchain and cryptocurrency technologies to revolutionise the news media landscape. In addition, I am a specialist in optimising existing processes and encourage innovation whenever I can, which proved critical when launching Disrupt and Refine.",
      link: "https://yourProductLink.com",
      linkText: "View Products",
      icon: <FontAwesomeIcon icon={faBolt} />,
    },
    {
      title: "Political Campaigns",
      description: "I’ve contributed to winning political strategies with my innovative digital campaigning tactics, including psychometric micro-targeting, Machine Learning optimisation and audience demographic segmentation. This includes successful campaigns for Vote Leave and Labour Leave.",
      link: "#",
      linkText: "View More",
      icon: <FontAwesomeIcon icon={faVoteYea} />,
    },
    {
      title: "Leadership and Management",
      description: "As a leader, my principles are built on collaboration, innovation, and commitment to creating a difference. I have led teams to phenomenal growth by constructing a strategic vision, encouraging innovation and fostering a results-driven culture.",
      link: "https://open.spotify.com/playlist/yourPlaylist",
      linkText: "View Playlist",
      icon: <FontAwesomeIcon icon={faCogs} />,
    },
    {
      title: "Engineering (AI, Python, Front-end)",
      description: "My foundation in programming, Python and front-end development has driven me to disrupt traditional approaches in software and systems engineering. I've built competencies in fields like Machine Learning, Artificial Intelligence, data analytics, Blockchain and Cryptography.",
      link: "https://yourWritingsLink.com",
      linkText: "Visit Page",
      icon: <FontAwesomeIcon icon={faCode} />,
    }
  ];

  return (
    <Layout>
      <Helmet>
        <title>About Me | Michael O'Sullivan</title>
        <meta name="description" content="I am a seasoned programmer with the unique ability to tackle intricate technical challenges while crafting websites that exude sleekness and visual allure. I am also a product manager and a designer." />
        </Helmet>
      <div className="page megaMargin p-3 whitebk">
        <h1 className="mb-5">About Me</h1>

        {content.map((item, index) => (
          <div className="row" key={index}>
            <div className="col-1">
              {item.icon} 
            </div>
            <div className="col-8">
              <h3>{item.title}</h3>
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