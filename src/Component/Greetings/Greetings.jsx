import React from "react";
import "./Greetings.css";
import SocialMedia from "../SocialMedia/SocialMedia";
import Button from "../Button/Button";
import { greeting } from "../../portfolio";
import { motion } from "framer-motion";
import FeelingProud from "./FeelingProud";

export default function Greeting(props) {
  const theme = props.theme;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
    >
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <motion.div
            className="greeting-text-div"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="greeting-text" style={{ color: theme.text }}>
              {greeting.title}
            </h1>
            {greeting.nickname && (
              <motion.h2
                className="greeting-nickname"
                style={{ color: theme.text }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                ( {greeting.nickname} )
              </motion.h2>
            )}
            <p className="greeting-text-p subTitle" style={{ color: theme.secondaryText }}>
              {greeting.subTitle}
            </p>
            <SocialMedia theme={theme} />
            <div className="portfolio-repo-btn-div">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button
                  text="Connect with me"
                  newTab={true}
                  href={greeting.linkdinLink}
                  theme={theme}
                  className="portfolio-repo-btn"
                />
              </motion.div>
            </div>
          </motion.div>
          <div className="greeting-image-div">
            <FeelingProud theme={theme} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
