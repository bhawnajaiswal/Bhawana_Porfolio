import React from "react";
import "./Header.css";
import { motion } from "framer-motion"; // Import motion from framer-motion
import { greeting } from "../../portfolio";
import SeoHeader from "../SeoHeader/SeoHeader";

const Header = ({ theme }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <SeoHeader />
      <div>
        <header className="header">
          <div className="logo">
            <span style={{ color: theme.text }}>&lt;</span>
            <span className="logo-name" style={{ color: theme.text }}>
              {greeting.logo_name}
            </span>
            <span style={{ color: theme.text }}>/&gt;</span>
          </div>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon"></span>
          </label>
          <ul className="menu" style={{ backgroundColor: theme.body }}>
            <li>
              <a
                href="#home"
                className="menu-link"
                style={{ color: theme.text }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#education"
                className="menu-link"
                style={{ color: theme.text }}
              >
                Education
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="menu-link"
                style={{ color: theme.text }}
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="menu-link"
                style={{ color: theme.text }}
              >
                Projects
              </a>
            </li>
            {/* <li>
              <a
                href="#opensource"
                className="menu-link"
                style={{ color: theme.text }}
              >
                Open Source
              </a>
            </li> */}
            <li>
              <a
                href="#contact"
                className="menu-link"
                style={{ color: theme.text }}
              >
                Contact Me
              </a>
            </li>
          </ul>
        </header>
      </div>
    </motion.div>
  );
};

export default Header;
