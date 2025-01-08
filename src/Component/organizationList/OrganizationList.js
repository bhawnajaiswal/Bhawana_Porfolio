import React from "react";
import "./OrganizationList.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { motion } from "framer-motion";

const OrganizationList = ({ logos }) => {
  return (
    <div className="organizations-main-div">
      <ul className="dev-icons-orgs">
        {logos.map((logo) => (
          <OverlayTrigger
            key={logo["login"]}
            placement={"top"}
            overlay={
              <Tooltip id={`tooltip-top`}>
                <strong>{logo["login"]}</strong>
              </Tooltip>
            }
          >
            <motion.li
              className="organizations-inline"
              name={logo["login"]}
              initial={{ y: 40, opacity: 0 }} // Animation starts below and invisible
              animate={{ y: 0, opacity: 1 }} // Animates to its final position
              transition={{ duration: 2, ease: "easeInOut" }}
            >
              <img
                className="organizations-img"
                src={logo["avatarUrl"]}
                alt={logo["login"]}
              />
            </motion.li>
          </OverlayTrigger>
        ))}
      </ul>
    </div>
  );
};

export default OrganizationList;
