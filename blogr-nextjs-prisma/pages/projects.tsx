import React, { useState } from "react";
import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard'; 

function Projects() {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: "Piggment",
      description: "The Gradients and colors for the next smart creator",
      technologies: ["React", "Sass & CSS", "Javascript", "Context"],
      imageURL: "https://i.ibb.co/tCZFDhL/Screen-Recording-2020-06-11-at-1.gif",
      tags: ['React', 'CSS']
    },
    {
      id: 2,
      title: "Scoutbar",
      description: "Navigation tool that significantly increases efficiency by reducing the number of clicks it takes you to navigate the web.",
      technologies: ["Typescript", "Rollup", "React", "Nextjs"],
      imageURL: "https://i.ibb.co/T0XwFsQ/Screen-Recording-2020-05-06-at-3.gif",
      tags: ['Typescript', 'React']
    },
    {
      id: 3,
      title: "Project 3",
      description: "Description for Project 3",
      technologies: ["Angular", "Node.js"],
      imageURL: "https://i.ibb.co/tCZFDhL/Screen-Recording-2020-06-11-at-1.gif",
      tags: ['Angular', 'Node']
    },
    {
      id: 4,
      title: "Project 4",
      description: "Description for Project 4",
      technologies: ["Vue", "Firebase"],
      imageURL: "https://i.ibb.co/tCZFDhL/Screen-Recording-2020-06-11-at-1.gif",
      tags: ['Vue', 'Firebase']
    },
  ];

  const tags = ["All", "React", "Typescript"];

  const filteredProjects = filter === 'All' ? projects : projects.filter(project => project.tags.includes(filter));

  return (
    <Layout>
      <div className="page megaMargin p-3 text-center">
        <h1>Our Projects</h1>
        <p>
          Browse through our latest software projects and see the diverse range of
          solutions we have delivered to our clients across various industries.
        </p>
        <div className="buttons-bar">
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