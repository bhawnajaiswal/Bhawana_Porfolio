import React from "react";
import { Doughnut } from "react-chartjs-2";
import { motion } from "framer-motion";
import "./IssueChart.css";
import IssueData from "../../shared/opensource/issues.json";

const IssueChart = () => {
  const data = {
    labels: ["Open", "Closed"],
    datasets: [
      {
        data: [IssueData["open"], IssueData["closed"]],
        backgroundColor: ["#28a745", "#d73a49"],
        hoverBackgroundColor: ["#28a745dd", "#d73a49dd"],
      },
    ],
  };

  return (
    <div className="issue-chart">
      <motion.h2
        className="issue-chart-header"
        initial={{ y: 20, opacity: 0 }} // Animate from bottom
        animate={{ y: 0, opacity: 1 }} // Animate to visible
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        Issue Distribution
      </motion.h2>
      <Doughnut
        data={data}
        options={{
          responsive: true,
          maintainAspectRatio: true,
          animation: {
            duration: 4000,
          },
        }}
      />
    </div>
  );
};

export default IssueChart;
