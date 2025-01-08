import React from "react";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import Button from "../../components/button/Button";
import TopButton from "../../components/topButton/TopButton";
import { greeting, projectsHeader } from "../../portfolio.js";
import ProjectsData from "../../shared/opensource/projects.json";
import { motion } from "framer-motion"; // Import framer-motion
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";

const Projects = ({ theme, onToggle }) => {
  return (
    <div className="projects-main">
      <div className="basic-projects">
        <motion.div
          initial={{ opacity: 0, y: 20 }} // Initial state: invisible and slightly moved down
          animate={{ opacity: 1, y: 0 }}   // Final state: fully visible and moved to position
          transition={{ duration: 2 }}     // Duration of the transition
        >
          <div className="projects-heading-div">
            <div className="projects-heading-img-div">
              <ProjectsImg theme={theme} />
            </div>
            <div className="projects-heading-text-div">
              <h1 className="projects-heading-text" style={{ color: theme.text }}>
                {projectsHeader.title}
              </h1>
              <p className="projects-header-detail-text subTitle" style={{ color: theme.secondaryText }}>
                {projectsHeader["description"]}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="repo-cards-div-main">
        {ProjectsData.data.map((repo) => (
          <GithubRepoCard key={repo.id} repo={repo} theme={theme} />
        ))}
      </div>
      <Button
        text={"More Projects"}
        className="project-button"
        href={greeting.githubProfile}
        newTab={true}
        theme={theme}
      />
      <TopButton theme={theme} />
    </div>
  );
};

export default Projects;
