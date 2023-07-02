import React, { useState } from "react";
import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard'; 

function Projects() {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: "Bywire News",
      description: "The Gradients and colors for the next smart creator",
      technologies: ["React", "Sass & CSS", "Javascript", "Context"],
      imageURL: "https://i.ibb.co/tCZFDhL/Screen-Recording-2020-06-11-at-1.gif",
      tags: ['React', 'CSS']
    },
    {
      id: 2,
      title: "Asst AI",
      description: "Navigation tool that significantly increases efficiency.",
      technologies: ["Typescript", "Rollup", "React", "Nextjs"],
      imageURL: "https://i.ibb.co/T0XwFsQ/Screen-Recording-2020-05-06-at-3.gif",
      tags: ['Typescript', 'React']
    },
    {
      id: 3,
      title: "EOS Dashboard",
      description: "Description for Project 3",
      technologies: ["Angular", "Node.js"],
      imageURL: "https://i.ibb.co/tCZFDhL/Screen-Recording-2020-06-11-at-1.gif",
      tags: ['Angular', 'Node']
    },
    {
      id: 4,
      title: "Market+ Book",
      description: "Description for Project 4",
      technologies: ["Vue", "Firebase"],
      imageURL: "https://i.ibb.co/tCZFDhL/Screen-Recording-2020-06-11-at-1.gif",
      tags: ['book', 'writing']
    },{
      id: 5,
      title: "Bywire DAO",
      description: "Description for Project 4",
      technologies: ["Vue", "Firebase"],
      imageURL: "https://i.ibb.co/tCZFDhL/Screen-Recording-2020-06-11-at-1.gif",
      tags: ['book', 'writing']
    },
    ,{
        id: 5,
        title: "Jeff vs MetaVerse",
        description: "Description for Project 4",
        technologies: ["Vue", "Firebase"],
        imageURL: "https://i.ibb.co/tCZFDhL/Screen-Recording-2020-06-11-at-1.gif",
        tags: ['video', 'creative']
      },
      {
        id:6,
        title: "Labour Future",
        description: "Description for Project 4",
        technologies: ["Vue", "Firebase"],
        imageURL: "https://i.ibb.co/tCZFDhL/Screen-Recording-2020-06-11-at-1.gif",
        tags: ['video', 'creative']
      },
      {
        id:6,
        title: "UK Fact Check Politics",
        description: "Description for Project 4",
        technologies: ["Vue", "Firebase"],
        imageURL: "https://i.ibb.co/tCZFDhL/Screen-Recording-2020-06-11-at-1.gif",
        tags: ['video', 'creative']
      },
  ];

  // Create a Set (which automatically removes duplicates) from all tags in all projects
  const allTags = Array.from(new Set(projects.flatMap(project => project.tags)));

  // Add 'All' to the start of the array
  const tags = ['All', ...allTags];

  const filteredProjects = filter === 'All' ? projects : projects.filter(project => project.tags.includes(filter));

  return (
    <Layout>
      <div className="page megaMargin p-3 text-center whitebk">
        <h1>Projects</h1>
        <p>
          Browse through our latest software projects and see the diverse range of
          solutions we have delivered to our clients across various industries.
        </p>
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