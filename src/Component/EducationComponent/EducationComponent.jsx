import React from "react";
import Educations from "../../containers/education/Educations";
import Certifications from "../../containers/certifications/Certifications";
import EducationImg from "./EducationImg";
import { certifications } from "../../portfolio";
import { motion } from "framer-motion";
import "./EducationComponent.css";

function EducationComponent({ theme }) {
  return (
    <motion.div
      className="education-main"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className="basic-education">
        <motion.div
          className="heading-div"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1 }}
        >
          <div className="heading-img-div">
            <EducationImg theme={theme} />
          </div>
          <div className="heading-text-div">
            <h1 className="heading-text" style={{ color: theme.text }}>
              Education
            </h1>
            <h3 className="heading-sub-text" style={{ color: theme.text }}>
              Basic Qualification and Certifications
            </h3>
          </div>
        </motion.div>

        {/* Education Section */}
        <Educations theme={theme} />

        {/* Certifications Section */}
        {certifications.certifications.length > 0 && (
          <Certifications theme={theme} />
        )}
      </div>
    </motion.div>
  );
}

export default EducationComponent;
