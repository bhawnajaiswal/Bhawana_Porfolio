import React from "react";
import { motion } from "framer-motion"; // Import framer-motion
import SoftwareSkill from "./SoftwareSkill";
import { skills } from "../../portfolio";

// function GetSkillSvg(props) {
//   if (props.fileName === "DataScienceImg")
//     return <DataScienceImg theme={props.theme} />;
//   else if (props.fileName === "FullStackImg")
//     return <FullStackImg theme={props.theme} />;
//   else if (props.fileName === "CloudInfraImg")
//     return <CloudInfraImg theme={props.theme} />;
//   return <DesignImg theme={props.theme} />;
// }

export default function SkillSection(props) {
  const theme = props.theme;

  return (
    <div>
      {skills.data.map((skill, i) => {
        return (
          <div key={i} className="skills-main-div">
            {/* <motion.div
              className="skills-image-div"
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -50 }}  // Set initial position before view
              transition={{ duration: 1.5 }}
            >
              <GetSkillSvg fileName={skill.fileName} theme={theme} />
            </motion.div> */}

            <div className="skills-text-div">
            What I Do?
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
