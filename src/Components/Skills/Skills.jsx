import React from "react";
import { skills } from "../../data/constants";
import "../../App.css";

const Skills = () => {
  return (
    <div id="skills" className="container">
      <div className="skills-wrapper">
        <div className="skills-title">Skills</div>
        <div className="skills-cards">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="skill-card"
            >
              <div className="skill-card-content">
                <h2>{skill.title}</h2>
                <div className="skill-items">
                  {skill.skills.map((item) => (
                    <div key={item.name} className="skill-item">
                      <img src={item.image} alt={item.name} />
                      {item.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
