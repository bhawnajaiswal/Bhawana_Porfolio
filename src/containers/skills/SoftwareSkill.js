import React, { useState } from "react";
import "./SoftwareSkill.css";

const SoftwareSkill = ({ logos }) => {
  const [loadedImages, setLoadedImages] = useState({});

  const handleImageLoad = (skillName) => {
    setLoadedImages((prevLoadedImages) => ({
      ...prevLoadedImages,
      [skillName]: true,
    }));
  };

  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {logos.map((logo) => {
            return (
              <li
                key={logo.skillName}
                className="software-skill-inline"
                data-skill-name={logo.skillName} // Tooltip text
              >
                {logo.fontAwesomeClassname && (
                  <span
                    className="iconify"
                    data-icon={logo.fontAwesomeClassname}
                    style={logo.style}
                    data-inline="false"
                  ></span>
                )}
                {!logo.fontAwesomeClassname && logo.imageSrc && (
                  <img
                    className="skill-image"
                    src={`${process.env.PUBLIC_URL}/skills/${logo.imageSrc}`}
                    alt={logo.skillName}
                    onLoad={() => handleImageLoad(logo.skillName)}
                    style={{
                      visibility: loadedImages[logo.skillName] ? "visible" : "hidden",
                    }}
                  />
                )}
                {/* Fallback for missing icons/images */}
                {!logo.fontAwesomeClassname && !logo.imageSrc && (
                  <span className="default-icon">?</span>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SoftwareSkill;
