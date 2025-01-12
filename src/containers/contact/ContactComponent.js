import React from "react";
import Button from "../../Component/Button/Button.jsx";
import { motion } from "framer-motion"; // Import framer-motion
import "./ContactComponent.css";
import SocialMedia from "../../Component/SocialMedia/SocialMedia.jsx";
import { greeting, contactPageData } from "../../portfolio.js";
import TopButton from "../../Component/topButton/TopButton.js";

const ContactData = contactPageData.contactSection;
// const addressSection = contactPageData.addressSection;
// const phoneSection = contactPageData.phoneSection;

const Contact = ({ theme }) => {
  return (
    <div className="contact-main">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        <div className="basic-contact">
          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="contact-heading-div"
          >
            {/* <div className="contact-heading-img-div">
              <img
                src={require(`../../assets/images/${ContactData["profile_image_path"]}`)}
                alt=""
              />
            </div> */}
            <div className="contact-heading-text-div">
              <h1
                className="contact-heading-text"
                style={{ color: theme.text }}
              >
                {ContactData["title"]}
              </h1>
              <p
                className="contact-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {ContactData["description"]}
              </p>
              <SocialMedia theme={theme} />
              <div className="resume-btn-div">
                <Button
                  text="See My Resume"
                  newTab={true}
                  href={greeting.resumeLink}
                  theme={theme}
                />
              </div>
            </div>
          </motion.div>

          {/* Address Section */}
          {/* <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="address-heading-div"
          >
            <div className="contact-heading-img-div">
              <AddressImg theme={theme} />
            </div>
            <div className="address-heading-text-div">
              <h1
                className="address-heading-text"
                style={{ color: theme.text }}
              >
                {addressSection["title"]}
              </h1>
              <p
                className="contact-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {addressSection["subtitle"]}
              </p>
              <h1
                className="address-heading-text"
                style={{ color: theme.text }}
              >
                {phoneSection["title"]}
              </h1>
              <p
                className="contact-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {phoneSection["subtitle"]}
              </p>
              <div className="address-btn-div">
                <Button
                  text="Visit on Google Maps"
                  newTab={true}
                  href={addressSection.location_map_link}
                  theme={theme}
                />
              </div>
            </div>
          </motion.div> */}
        </div>
      </motion.div>

    </div>
  );
};

export default Contact;
