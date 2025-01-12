import React from "react";
import { motion } from "framer-motion";
import "./PullRequests.css";
import PullRequestCard from "../../Component/pullRequestCard/PullRequestCard";
import pullRequestsData from "../../shared/opensource/pull_requests.json";

function PullRequests({ theme }) {
  return (
    <div>
      <div className="pull-requests-header-div">
        <motion.h1
          className="pull-requests-header"
          style={{ color: theme.text }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Pull Requests
        </motion.h1>
      </div>
      <div className="pull-request-body-div">
        {pullRequestsData["data"].map((pullRequest) => (
          <PullRequestCard key={pullRequest.id} pullRequest={pullRequest} />
        ))}
      </div>
    </div>
  );
}

export default PullRequests;
