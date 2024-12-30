import React, { Component } from "react";
import Educations from "../../containers/education/Educations";
import Certifications from "../../containers/certifications/Certifications"
import EducationImg from "./EducationImg";
import { certifications } from "../../portfolio";
import { motion } from "framer-motion";
import "./Education.css";

function Education(){
    const theme = this.props.theme;

    return (
      <motion.div
        className="education-main"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <div className="basic-education">
          <motion.div
            className="heading-div"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <div className="heading-img-div">
              <EducationImg theme={theme} />
            </div>
            <div className="heading-text-div">
              <motion.h1
                className="heading-text"
                style={{ color: theme.text }}
                whileHover={{ scale: 1.1 }}
              >
                Education
              </motion.h1>
              <h3 className="heading-sub-text" style={{ color: theme.text }}>
                Basic Qualification and Certifications
              </h3>
            </div>
          </motion.div>
          <Educations theme={this.props.theme} />
          {certifications.certifications.length > 0 ? (
            <Certifications theme={this.props.theme} />
          ) : null}
        </div>
      </motion.div>
    );
}

export default Education;
