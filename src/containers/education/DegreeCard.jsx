import React from "react";
import "./DegreeCard.css";
import { motion } from "framer-motion";

const DegreeCard = ({ degree, theme }) => {
  // Framer Motion Variants
  const containerVariant = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.5, ease: "easeInOut" },
    },
  };

  const imageVariant = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 1.5, ease: "easeInOut" },
    },
  };

  const contentVariant = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.5, ease: "easeInOut" },
    },
  };

  // Dynamically requiring the image based on the logo_path from the degree object
  const imageSrc = require(`../../assets/images/${degree.logo_path}`);

  return (
    <motion.div
      className="degree-card"
      variants={containerVariant}
      initial="hidden"
      animate="visible"
    >
      {degree.logo_path && (
        <motion.div className="card-img" variants={imageVariant}>
          <img
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              transform: "scale(0.9)",
            }}
            src={imageSrc}  // Use the dynamically required image
            alt={degree.alt_name}
          />
        </motion.div>
      )}
      <motion.div
        className="card-body"
        style={{ width: degree.logo_path ? "90%" : "100%" }}
        variants={contentVariant}
      >
        <div
          className="body-header"
          style={{ backgroundColor: theme.headerColor }}
        >
          <div className="body-header-title">
            <h2 className="card-title" style={{ color: theme.text }}>
              {degree.title}
            </h2>
            <h3 className="card-subtitle" style={{ color: theme.text }}>
              {degree.subtitle}
            </h3>
          </div>
          <div className="body-header-duration">
            <h3 className="duration" style={{ color: theme.text }}>
              {degree.duration}
            </h3>
          </div>
        </div>
        <div className="body-content">
          {degree.descriptions.map((sentence, index) => (
            <p
              key={index}
              className="content-list"
              style={{ color: theme.text }}
            >
              {sentence}
            </p>
          ))}
          {degree.website_link && (
            <a
              href={degree.website_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className="visit-btn"
                style={{ backgroundColor: theme.headerColor }}
              >
                <p className="btn" style={{ color: theme.text }}>
                  Visit Website
                </p>
              </div>
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default DegreeCard;
