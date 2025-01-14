import React from "react";
import GithubRepoCard from "../githubRepoCard/GithubRepoCard.js";
import Button from "../Button/Button.jsx";
import TopButton from "../topButton/TopButton.js";
import { greeting, projectsHeader } from "../../portfolio.js";
import ProjectsData from "../../shared/opensource/projects.json";
import { motion } from "framer-motion"; // Import framer-motion
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";

// Framer motion fade-in animation
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 2 },
};

const Projects = ({ theme, onToggle }) => {
  return (
    <motion.section
      className="projects-main"
      initial="initial"
      whileInView="animate" // Trigger the animation when section comes into view
      viewport={{ once: false }} // Ensures animation re-triggers each time the section comes into view
      variants={fadeInUp}
    >
      <div className="basic-projects">
        <motion.div
          className="projects-heading-div"
          variants={fadeInUp} // Apply fadeInUp animation to the heading div as well
        >
          <div className="projects-heading-img-div">
            <ProjectsImg theme={theme} />
          </div>
          <div className="projects-heading-text-div">
            <h1 className="projects-heading-text" style={{ color: theme.text }}>
              {projectsHeader.title}
            </h1>
            <p
              className="projects-header-detail-text subTitle"
              style={{ color: theme.secondaryText }}
            >
              {projectsHeader["description"]}
            </p>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="repo-cards-div-main"
        variants={fadeInUp} // Apply animation to repo cards section
        initial="initial"
        whileInView="animate" // Ensures animation triggers every time the section comes into view
        viewport={{ once: false }} // Re-triggers animation each time it comes into view
      >
        {ProjectsData.data.length === 0 ? (
          <p>No projects available at the moment.</p>
        ) : (
          ProjectsData.data.map((repo) => (
            <GithubRepoCard key={repo.id} repo={repo} theme={theme} />
          ))
        )}
      </motion.div>

      <Button
        text={"More Projects"}
        className="project-button"
        href={greeting.githubProfile}
        newTab={true}
        theme={theme}
      />
      <TopButton theme={theme} />
    </motion.section>
  );
};

export default Projects;
