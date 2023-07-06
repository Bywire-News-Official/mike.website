import React, { useState } from "react";
import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard'; 

function Projects() {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: "Bywire News",
      description: "Revolutionising the news media landscape through blockchain technology and democratisation.",
      technologies: ["React", "Blockchain", "Cryptocurrency"],
      imageURL: "/bywire.png",
      tags: ['Blockchain', 'Media']
    },
    {
      id: 2,
      title: "Asst.ai",
      description: "Pioneering AI chat and generative tools for advanced communication.",
      technologies: ["AI", "Machine Learning"],
      imageURL: "/asst.png",
      tags: ['AI', 'Chatbots']
    },
    {
      id: 3,
      title: "EOS Dashboard",
      description: "Dashboard for EOS blockchain monitoring and interaction.",
      technologies: ["Angular", "Blockchain"],
      imageURL: "/eos.png",
      tags: ['Angular', 'Blockchain']
    },
    {
      id: 4,
      title: "Market+ Book",
      description: "An E-Commerce website for book lovers.",
      technologies: ["Vue", "Firebase"],
      imageURL: "/marketplusbook.png",
      tags: ['E-commerce', 'Books']
    },
    {
      id: 5,
      title: "Bywire DAO",
      description: "Decentralised autonomous organisation for Bywire.",
      technologies: ["Blockchain", "Smart Contracts"],
      imageURL: "/bywiredao.png",
      tags: ['Blockchain', 'DAO']
    },
    {
      id: 6,
      title: "UK Fact Check Politics",
      description: "Fact-checking platform with AI fake news detectors for UK politics.",
      technologies: ["AI", "Instagram API"],
      imageURL: "/ukfactcheck.png",
      tags: ['Politics', 'AI']
    },
  ];

  const allTags = Array.from(new Set(projects.flatMap(project => project.tags)));
  const tags = ['All', ...allTags];
  const filteredProjects = filter === 'All' ? projects : projects.filter(project => project.tags.includes(filter));

  return (
    <Layout>
      <div className="page megaMargin p-3 text-center whitebk">
        <h1>Projects</h1>
        <div style={{maxWidth: '70ch', margin: '0 auto'}}>
        <p>
          Embark on a journey through the heart of innovation, where you'll find an array of software solutions meticulously crafted, each with distinct objectives and unique challenges. As a solo developer, each line of code signifies my devotion to detail and passion for pushing the boundaries. These projects are not just products of technology, they're reflections of creativity and perseverance, illustrating the diversity of potentials that technology can unlock. Browse through and explore where imagination meets code.
        </p>
      </div>
        <div className="buttons-bar my-3">
          {tags.map(tag => (
            <button className="btn btn-outline-primary m-2" onClick={() => setFilter(tag)}>{tag}</button>
          ))}
        </div>
        <div className="projects-grid" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gridColumnGap: '20px'}}>
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Projects;