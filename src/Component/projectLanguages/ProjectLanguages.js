import React from "react";
import "./ProjectLanguages.css";

const ProjectLanguages = ({ logos }) => {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons-languages">
          {logos.map((logo) => {
            return (
              <li
                key={logo.name}
                className="software-skill-inline-languages"
                data-name={logo.name} // Tooltip text
              >
                <span
                  className="iconify"
                  data-icon={logo.iconifyClass}
                  data-inline="false"
                ></span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ProjectLanguages;
