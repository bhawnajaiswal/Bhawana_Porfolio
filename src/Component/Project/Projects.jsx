import React from "react";
import GithubRepoCard from "../githubRepoCard/GithubRepoCard.js";
import Button from "../Button/Button.jsx";
import TopButton from "../topButton/TopButton.js";
import { greeting, projectsHeader } from "../../portfolio.js";
import ProjectsData from "../../shared/opensource/projects.json";
import { motion } from "framer-motion"; // Import framer-motion
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 2 },
};

const Projects = ({ theme, onToggle }) => {
  return (
    <section className="projects-main">
      <motion.div variants={fadeInUp} initial="initial" animate="animate">
        <div className="basic-projects">
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
        </div>
      </motion.div>

      <div className="repo-cards-div-main">
        {ProjectsData.data.length === 0 ? (
          <p>No projects available at the moment.</p>
        ) : (
          ProjectsData.data.map((repo) => (
            <GithubRepoCard key={repo.id} repo={repo} theme={theme} />
          ))
        )}
      </div>

      <Button
        text={"More Projects"}
        className="project-button"
        href={greeting.githubProfile}
        newTab={true}
        theme={theme}
      />
      <TopButton theme={theme} />
    </section>
  );
};

export default Projects;
