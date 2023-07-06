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
      link: "https://bywire.news",
      linkText: "Bywire News",
      icon: <FontAwesomeIcon icon={faBolt} />,
    },
    {
      title: "Political Campaigns",
      description: "I’ve contributed to winning political strategies with my innovative digital campaigning tactics, including psychometric micro-targeting, Machine Learning optimisation and audience demographic segmentation. This includes successful campaigns for the Labour Party and Vote Leave.",
      link: "https://www.thetimes.co.uk/article/unofficial-facebook-ads-blitz-voters-in-general-election-vw3gltctg",
      linkText: "Sunday Times",
      icon: <FontAwesomeIcon icon={faVoteYea} />,
    },
    {
      title: "Leadership and Management",
      description: "As a leader, my principles are built on collaboration, innovation, and commitment to creating a difference. I have led teams to growth and invented difficult products, by constructing a strategic vision, encouraging innovation and fostering a results-driven culture.",
      link: "https://bywire.news/articles/introduction-to-the-bywire-news-and-publishing-dao",
      linkText: "Bywire DAO",
      icon: <FontAwesomeIcon icon={faCogs} />,
    },
    {
      title: "Engineering (AI, Python, Front-end)",
      description: "My foundation in programming, Python and front-end development has driven me to disrupt traditional approaches in software and systems engineering. I've built competencies in fields like Machine Learning, Artificial Intelligence, data analytics, Blockchain and Cryptography.",
      link: "https://github.com/orgs/Bywire-News-Official/repositories",
      linkText: "GitHub",
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
            <a href={item.link} target="_blank" rel="noreferrer">{item.linkText}</a>
            </div>
          </div>
        ))}

      </div>
    </Layout>
  );
};

export default About;