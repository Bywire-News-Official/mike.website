import React from "react";
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard'; 

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "Piggment",
      description: "The Gradients and colors for the next smart creator",
      technologies: ["React", "Sass & CSS", "Javascript", "Context"],
      imageURL: "https://i.ibb.co/tCZFDhL/Screen-Recording-2020-06-11-at-1.gif"
    },
    {
      id: 2,
      title: "Scoutbar",
      description: "Navigation tool that significantly increases efficiency by reducing the number of clicks it takes you to navigate the web.",
      technologies: ["Typescript", "Rollup", "React", "Nextjs"],
      imageURL: "https://i.ibb.co/T0XwFsQ/Screen-Recording-2020-05-06-at-3.gif"
    }
  ];

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
        <div className="projects-grid">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
