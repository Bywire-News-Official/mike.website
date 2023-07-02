import React from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageURL: string;
  tags: string[];
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="project-card">
      <img src={project.imageURL} alt={project.title} style={{width: '100%', height: 'auto'}} />
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <ul>
        {project.technologies.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
      <ul>
        {project.tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectCard;
