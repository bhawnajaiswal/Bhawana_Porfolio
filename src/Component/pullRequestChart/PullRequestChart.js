import React from "react";
import { Doughnut } from "react-chartjs-2";
import { motion } from "framer-motion";
import "./PullRequestChart.css";
import PullRequestData from "../../shared/opensource/pull_requests.json";

const PullRequestChart = () => {
  const data = {
    labels: ["Open", "Merged", "Closed"],
    datasets: [
      {
        data: [
          PullRequestData["open"],
          PullRequestData["merged"],
          PullRequestData["closed"],
        ],
        backgroundColor: ["#28a745", "#6f42c1", "#d73a49"],
        hoverBackgroundColor: ["#28a745dd", "#6f42c1dd", "#d73a49dd"],
      },
    ],
  };

  return (
    <div className="pr-chart">
      <motion.h2
        className="pr-chart-header"
        initial={{ y: 20, opacity: 0 }} // Start animation from the bottom
        animate={{ y: 0, opacity: 1 }} // Animate to visible
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        Pull Request Distribution
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

export default PullRequestChart;
