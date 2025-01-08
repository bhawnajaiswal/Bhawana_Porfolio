import React from "react";
import "./Organizations.css";
import { motion } from "framer-motion";
import OrganizationList from "../../Component/organizationList/OrganizationList";
import OrganizationsData from "../../shared/opensource/organizations.json";

const Organizations = ({ theme }) => {
  return (
    <div id="organizations">
      <div className="organizations-header-div">
        <motion.h1
          className="organizations-header"
          style={{ color: theme.text }}
          initial={{ y: 20, opacity: 0 }} // Animation starts slightly below and invisible
          animate={{ y: 0, opacity: 1 }} // Animates to its final position and visible
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          Contributed Organizations
        </motion.h1>
      </div>
      <OrganizationList logos={OrganizationsData["data"]} />
    </div>
  );
};

export default Organizations;
