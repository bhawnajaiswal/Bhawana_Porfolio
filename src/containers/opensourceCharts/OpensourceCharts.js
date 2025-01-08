import React from "react";
import PullRequestChart from "../../Component/pullRequestChart/PullRequestChart.js";
import IssueChart from "../../Component/issueChart/IssueChart.js";
import { motion } from "framer-motion";
import "./OpensourceCharts.css";

const OpensourceCharts = ({ theme }) => {
  return (
    <div className="main-div">
      <div className="os-charts-header-div">
        <motion.h1
          className="os-charts-header"
          style={{ color: theme.text }}
          initial={{ y: 20, opacity: 0 }} // Animation from bottom
          animate={{ y: 0, opacity: 1 }} // Animate to visible
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          Contributions
        </motion.h1>
      </div>
      <div className="os-charts-body-div">
        <PullRequestChart />
        <IssueChart />
      </div>
    </div>
  );
};

export default OpensourceCharts;
