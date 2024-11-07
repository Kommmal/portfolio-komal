import React from "react";
import ProjectCard from "./ProjectCard";
import image1 from "../../assets/Screenshot (264).png";
import image2 from "../../assets/Screenshot (266).png";
import image3 from "../../assets/Screenshot (267).png";
import "../../App.css";

const Projects = () => {
  return (
    <div id="Projects" className="projects-container">
      <h1 className="projects-header">Projects</h1>
      <div className="project-cards-wrapper">
        {/* Project 1 */}
        <ProjectCard
          title="Resume Builder"
          main="This is a Resume Builder created with HTML, CSS, TypeScript"
          demoLink="https://demo-link-1.com"
          sourceCodeLink="https://github.com/username/project1"
          image={image1}
        />

        {/* Project 2 */}
        <ProjectCard
          title="Book List"
          main="This is a book list website created with HTML, CSS, JavaScript"
          demoLink="https://book-list-by-komal.netlify.app/"
          sourceCodeLink="https://github.com/Kommmal/Book-List"
          image={image2}
        />

        {/* Project 3 */}
        <ProjectCard
          title="Clock"
          main="This is a clock website created with HTML, CSS, JavaScript"
          demoLink="https://clock-by-komal.netlify.app/"
          sourceCodeLink="https://github.com/Kommmal/Clock"
          image={image3}
        />
      </div>
    </div>
  );
};

export default Projects;
