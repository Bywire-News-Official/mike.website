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
      <div className="project-image">
        <img src={project.imageURL} alt={project.title} style={{width: '100%', height: 'auto'}} />
        <div className="overlay">
          <div className="overlay-content">
            <h3>{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <h4>Technologies</h4>
            <p>{project.technologies.join(', ')}</p>
            <h4>Tags</h4>
            <p>{project.tags.join(', ')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
