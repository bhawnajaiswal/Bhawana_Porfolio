import React from "react";
import { motion } from "framer-motion"; // Import framer-motion
import "./Skills.css";
import SoftwareSkill from "./SoftwareSkill";
import { skills } from "../../portfolio";

export default function SkillSection(props) {
  const theme = props.theme;

  return (
    <div>
      {skills.data.map((skill, i) => {
        return (
          <div key={i} className="skills-main-div">
            <div className="skills-text-div">
              <motion.h1
                className="skills-heading"
                style={{ color: theme.text }}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 1.5 }}
              >
                {skill.title}
              </motion.h1>

              <motion.div
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 2 }}
              >
                <SoftwareSkill logos={skill.softwareSkills} />
              </motion.div>

              <motion.div
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 2, delay: 0.5 }}
              >
                {skill.skills.map((skillSentence, i) => {
                  return (
                    <p
                      key={i}
                      className="subTitle skills-text"
                      style={{ color: theme.secondaryText }}
                    >
                      {skillSentence}
                    </p>
                  );
                })}
              </motion.div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
