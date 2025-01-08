import React from "react";
import "./Issues.css";
import { motion } from "framer-motion"; // Replace react-reveal with framer-motion
import IssueCard from "./IssueCard";
import issuesData from "../../shared/opensource/issues.json";

const Issues = ({ theme }) => {
  return (
    <div>
      <div className="issues-header-div">
        <motion.h1
          className="issues-header"
          style={{ color: theme.text }}
          initial={{ x: -100, opacity: 0 }} // Animate from left
          animate={{ x: 0, opacity: 1 }} // Animate to center
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          Issues
        </motion.h1>
      </div>
      <div className="issues-body-div">
        {issuesData["data"].map((issue, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0.9, opacity: 0 }} // Slightly smaller and invisible
            whileInView={{ scale: 1, opacity: 1 }} // Animate to normal size
            viewport={{ once: true }} // Trigger animation once
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <IssueCard issue={issue} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Issues;
