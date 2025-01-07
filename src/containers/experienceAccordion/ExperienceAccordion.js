import React from "react";
import ExperienceCard from "./ExperienceCard";
import { Accordion, Panel } from "baseui/accordion";
import { motion } from "framer-motion"; // Import motion

function ExperienceAccordion({ sections, theme }) {
  return (
    <div className="experience-accord">
      <Accordion>
        {sections.map((section) => (
          <Panel
            className="accord-panel"
            title={section.title}
            key={section.title}
            overrides={{
              Header: {
                style: () => ({
                  backgroundColor: theme.body,
                  border: `1px solid`,
                  borderRadius: `5px`,
                  borderColor: theme.headerColor,
                  marginBottom: `3px`,
                  fontFamily: "Google Sans Regular",
                  color: theme.text,
                  ":hover": {
                    color: theme.secondaryText,
                  },
                }),
              },
              Content: {
                style: () => ({
                  backgroundColor: theme.body,
                }),
              },
            }}
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}  // Animate horizontally (from left)
              initial={{ opacity: 0, x: -100 }}  // Start from left offscreen
              transition={{ duration: 0.8 }}
            >
              {section.experiences.map((experience, index) => (
                <ExperienceCard
                  key={index}
                  index={index}
                  totalCards={section.experiences.length}
                  experience={experience}
                  theme={theme}
                />
              ))}
            </motion.div>
          </Panel>
        ))}
      </Accordion>
    </div>
  );
}

export default ExperienceAccordion;
