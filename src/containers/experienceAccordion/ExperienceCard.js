import React, { Component } from "react";
import "./ExperienceCard.css";
import { motion } from "framer-motion"; // Import framer-motion

class ExperienceCard extends Component {
  render() {
    const experience = this.props.experience;
    const index = this.props.index;
    const totalCards = this.props.totalCards;
    const theme = this.props.theme;

    return (
      <div
        className="experience-list-item"
        style={{ marginTop: index === 0 ? 30 : 50 }}
      >
        {/* Using motion.div for left animation */}
        <motion.div
          className="experience-card-logo-div"
          initial={{ x: -40, opacity: 0 }} // Initial state (left and invisible)
          animate={{ x: 0, opacity: 1 }} // Final state (visible and in place)
          transition={{ duration: 2 }} // Animation duration
        >
          <img
            className="experience-card-logo"
            src={require(`../../assets/images/${experience["logo_path"]}`)}
            alt=""
          />
        </motion.div>

        <div className="experience-card-stepper">
          <div
            style={{
              width: 20,
              height: 20,
              backgroundColor: `${theme.headerColor}`,
              borderRadius: 50,
              zIndex: 100,
            }}
          />
          {index !== totalCards - 1 && (
            <div
              style={{
                height: 190,
                width: 2,
                backgroundColor: `${theme.headerColor}`,
                position: "absolute",
                marginTop: 20,
              }}
            />
          )}
        </div>

        {/* Using motion.div for right animation */}
        <motion.div
          className="experience-card"
          style={{ background: `${theme.body}` }}
          initial={{ x: 40, opacity: 0 }} // Initial state (right and invisible)
          animate={{ x: 0, opacity: 1 }} // Final state (visible and in place)
          transition={{ duration: 2 }} // Animation duration
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div>
              <h3
                className="experience-card-title"
                style={{ color: theme.text }}
              >
                {experience["title"]}
              </h3>
              <p
                className="experience-card-company"
                style={{ color: theme.text }}
              >
                <a
                  href={experience["company_url"]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {experience["company"]}
                </a>
              </p>
            </div>
            <div>
              <div className="experience-card-heading-right">
                <p
                  className="experience-card-duration"
                  style={{ color: theme.secondaryText }}
                >
                  {experience["duration"]}
                </p>
                <p
                  className="experience-card-location"
                  style={{ color: theme.secondaryText }}
                >
                  {experience["location"]}
                </p>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              marginTop: 20,
            }}
          >
            <div className="repo-description" />
            {experience["description"]}
          </div>
        </motion.div>
      </div>
    );
  }
}

export default ExperienceCard;
