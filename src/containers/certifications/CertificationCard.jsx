import React from "react";
import "./CertificationCard.css";
import { motion } from "framer-motion";

const CertificationCard = ({ certificate, theme }) => {
  // Framer Motion Variants
  const containerVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.5, ease: "easeInOut" },
    },
  };

  const overlayVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, delay: 0.8 },
    },
  };

  return (
    <motion.div
      className="cert-card"
      variants={containerVariant}
      initial="hidden"
      animate="visible"
    >
      <div className="content">
        <a
          href={certificate.certificate_link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.div
            className="content-overlay"
            variants={overlayVariant}
          ></motion.div>
          <div
            className="cert-header"
            style={{ backgroundColor: certificate.color_code }}
          >
            <img
              className="logo_img"
              src={require(`../../assets/images/${certificate.logo_path}`)}
              alt={certificate.alt_name}
            />
          </div>
          <div className="content-details">
            <h3 className="content-title" style={{ color: theme.body }}>
              Certificate
            </h3>
          </div>
        </a>
      </div>
      <div className="cert-body">
        <h2 className="cert-body-title" style={{ color: theme.text }}>
          {certificate.title}
        </h2>
        <h3
          className="cert-body-subtitle"
          style={{ color: theme.secondaryText }}
        >
          {certificate.subtitle}
        </h3>
      </div>
    </motion.div>
  );
};

export default CertificationCard;
