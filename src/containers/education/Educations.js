import React from "react";
import "./Educations.css";
import DegreeCard from "./DegreeCard";
import { degrees } from "../../portfolio";
import { motion } from "framer-motion";

function Educations(props) {
  const theme = props.theme;

  return (
    <motion.div
      className="main"
      id="educations"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="educations-header-div"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <h1 className="educations-header" style={{ color: theme.text }}>
          Degrees Received
        </h1>
      </motion.div>
      <motion.div
        className="educations-body-div"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        {degrees.degrees.map((degree, index) => (
          <DegreeCard key={index} degree={degree} theme={theme} />
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Educations;
