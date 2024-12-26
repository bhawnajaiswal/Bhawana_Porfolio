import React from "react";
import "./Header.css";
import { motion } from "framer-motion"; // Import motion from framer-motion
import { greeting } from "../../portfolio";
import SeoHeader from "../SeoHeader/SeoHeader";

const Header = ({ theme, scrollToSection }) => {
  const onMouseEnter = (event, color) => {
    const el = event.target;
    el.style.backgroundColor = color;
  };

  const onMouseOut = (event) => {
    const el = event.target;
    el.style.backgroundColor = "transparent";
  };

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
            <span style={{ color: theme.text }}> &lt;</span>
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
              <button
                className="menu-link"
                style={{ color: theme.text }}
                onClick={() => scrollToSection("Home")}
                onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                onMouseOut={(event) => onMouseOut(event)}
              >
                Home
              </button>
            </li>
            <li>
              <button
                className="menu-link"
                style={{ color: theme.text }}
                onClick={() => scrollToSection("Education")}
                onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                onMouseOut={(event) => onMouseOut(event)}
              >
                Education
              </button>
            </li>
            <li>
              <button
                className="menu-link"
                style={{ color: theme.text }}
                onClick={() => scrollToSection("Experience")}
                onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                onMouseOut={(event) => onMouseOut(event)}
              >
                Experience
              </button>
            </li>
            <li>
              <button
                className="menu-link"
                style={{ color: theme.text }}
                onClick={() => scrollToSection("Projects")}
                onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                onMouseOut={(event) => onMouseOut(event)}
              >
                Projects
              </button>
            </li>
            <li>
              <button
                className="menu-link"
                style={{ color: theme.text }}
                onClick={() => scrollToSection("OpenSource")}
                onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                onMouseOut={(event) => onMouseOut(event)}
              >
                Open Source
              </button>
            </li>
            <li>
              <button
                className="menu-link"
                style={{ color: theme.text }}
                onClick={() => scrollToSection("Contact")}
                onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                onMouseOut={(event) => onMouseOut(event)}
              >
                Contact Me
              </button>
            </li>
          </ul>
        </header>
      </div>
    </motion.div>
  );
};

export default Header;
