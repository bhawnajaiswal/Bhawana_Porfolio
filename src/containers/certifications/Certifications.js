import React from "react";
import "./Certifications.css";
import { motion } from "framer-motion";
import { certifications } from "../../portfolio";
import CertificationCard from "./CertificationCard";

const Certifications = ({ theme }) => {
  // Framer Motion Variants
  const containerVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2, // Stagger animation for child components
        delayChildren: 0.3,
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className="main"
      id="certs"
      variants={containerVariant}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="certs-header-div">
        <motion.h1
          className="certs-header"
          style={{ color: theme.text }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          Certifications
        </motion.h1>
      </motion.div>
      <motion.div className="certs-body-div">
        {certifications.certifications.map((cert, index) => (
          <CertificationCard key={index} certificate={cert} theme={theme} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Certifications;
