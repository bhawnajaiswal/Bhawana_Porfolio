import React from "react";
import "./Footer.css";
import { motion } from "framer-motion";  // Import motion from Framer Motion
import { greeting } from "../../portfolio";

const Footer = ({ theme }) => {
  return (
    <div className="footer-div">
      <motion.div
        initial={{ opacity: 0 }}    // Starting state
        animate={{ opacity: 1 }}    // End state: fully visible
        transition={{ duration: 1 }}  // Duration of the fade animation
      >
        <p className="footer-text" style={{ color: theme.secondaryText }}>
          Made with <span role="img" aria-label="love">❤️</span> by {greeting.title}
        </p>
        {/* Uncomment the line below to include a toggle switch */}
        {/* <ToggleSwitch theme={theme} onToggle={onToggle} /> */}
      </motion.div>
    </div>
  );
};

export default Footer;
