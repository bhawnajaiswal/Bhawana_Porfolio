import React from "react";
import "./SoftwareSkill.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const SoftwareSkill = ({ logos }) => {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {logos.map((logo) => {
            return (
                      <OverlayTrigger
                        key={logo.skillName}
                        placement={"top"}
                        delay={{ show: 250, hide: 400 }} // Add delay
                        overlay={
                          <Tooltip id={`tooltip-top`}>
                            <strong>{logo.skillName}</strong>
                          </Tooltip>
                        }
                      >
                <li className="software-skill-inline" name={logo.skillName} tabIndex={0}>
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
                      style={logo.style}
                      src={`${process.env.PUBLIC_URL}/skills/${logo.imageSrc}`}
                      alt={logo.skillName}
                    />
                  )}
                  {/* Fallback for missing icons/images */}
                  {!logo.fontAwesomeClassname && !logo.imageSrc && (
                    <span className="default-icon">?</span>
                  )}
                </li>
              </OverlayTrigger>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SoftwareSkill;
