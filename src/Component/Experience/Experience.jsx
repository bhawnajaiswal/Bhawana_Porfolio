import React from "react";
import { motion } from "framer-motion";
import ExperienceAccordion from "../../containers/experienceAccordion/ExperienceAccordion.js";
import "./Experience.css";
import { experience } from "../../portfolio.js";
// import ExperienceImg from "./ExperienceImg";

function Experience({ theme }) {
  return (
    <div className="experience-main">
      <div className="basic-experience">
        <motion.div
          className="experience-heading-div"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1 }}
        >
          {/* <div className="experience-heading-img-div">
            <ExperienceImg theme={theme} />
          </div> */}
          <div className="experience-heading-text-div">
            <h1 className="experience-heading-text" style={{ color: theme.text }}>
              {experience.title}
            </h1>
            <h3 className="experience-heading-sub-text" style={{ color: theme.text }}>
              {experience.subtitle}
            </h3>
            <p className="experience-header-detail-text subTitle" style={{ color: theme.secondaryText }}>
              {experience.description}
            </p>
          </div>
        </motion.div>
      </div>
      <ExperienceAccordion sections={experience.sections} theme={theme} />
    </div>
  );
}

export default Experience;
