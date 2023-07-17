import React from "react";
import "./projects.css";

const Projects = () => {
  return (
    <div id="projects">
      <h2 className="skillsprojects">Skills && Projects</h2>
      <div className="project-container">
        <div className="project-text">
          <h5 className="proj-title">E-commerce Web App</h5>
          <p className="proj-par">
            Built and styled modern E-Commerce Web-Application using React.js.
            The application mimics real world E-Commerce websites in its look
            and feel and provides a fresh user friendly experience.
          </p>
        </div>
        <div className="project-img">
          <div className="img-one"></div>
        </div>
      </div>
      <div className="project-container">
        <div className="project-img">
          <div className="img-two"></div>
        </div>
        <div className="project-text">
          <h5 className="project-title">Business Dashboard Web App</h5>
          <p className="Proj-par">
            Using advanced technologies, such as React.js, Material UI, and
            public API's, I single handedly created a fully functional front
            end, mock, reusable dashboard that could theoretically be integrated
            wtih companies and businesses around the world.
          </p>
        </div>
      </div>
      <div className="project-container">
        <div className="project-text">
          <h5 className="project-tittle">Real World Login//SignUp Page</h5>
          <p className="proj-par">
            In order to be considered a well-rounded front end developer in
            todays market, one must be able to create, and recreate widely used
            web pages that serve a functional purpose. Although the thought
            might not be as fancy as we would like to hope, projects such as
            this one are fundemental for many real world projects.
          </p>
        </div>
        <div className="project-img">
          <div className="img-three"></div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
