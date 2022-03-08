import React, { useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import Projects from "./data";
function App() {
  const [value, setValue] = useState(0);

  const { aboutProject, title, live, coderepo } = Projects[value];
  return (
    <section className="section" id="projects">
      <div className="title">
        <h2>PROJECTS</h2>
        <div className="underline"></div>
      </div>
      <div className="Projects-center">
        {/* btn container */}
        <div className="btn-container">
          {Projects.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => setValue(index)}
                className={`Project-btn ${index === value && "active-btn"}`}
              >
                {item.project}
              </button>
            );
          })}
        </div>
        {/* Project info */}
        <article className="Project-info">
          <h3>{title}</h3>
          {aboutProject.map((aboutp, index) => {
            return (
              <div key={index} className="Project-desc">
                <FaAngleDoubleRight className="Project-icon"></FaAngleDoubleRight>
                <p>{aboutp}</p>
              </div>
            );
          })}
        </article>
      </div>
      <button type="button" className="btn">
        <a href={live} target="_blank" rel="noopener noreferrer">
          Live Demo
        </a>
      </button>
      <button type="button" className="btn">
        <a href={coderepo} target="_blank" rel="noopener noreferrer">
          Code Repo
        </a>
      </button>
    </section>
  );
}

export default App;
