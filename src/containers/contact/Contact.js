import React from "react";
import Button from "../../Component/Button/Button.jsx";
import { motion } from "framer-motion"; // Import framer-motion
import "./ContactComponent.css"; // Ensure your CSS file is imported correctly

const Contact = ({ theme }) => {
  return (
    <section className="contact section" id="contact">
      <motion.h2
        className="section__title scroll-animation"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Contact me
      </motion.h2>
      <span className="section__subtitle scroll-animation">Let's get in touch!</span>

      <div className="contact__container container grid">
        <div>
          <div className="contact__information">
            <i className="uil uil-phone-alt contact__icon"></i>
            <div className="scroll-animation">
              <h3 className="contact__title">Call me</h3>
              <span className="contact__subtitle" style={{ color: theme.text }}>
                +1 (413) 437-6759
              </span>
              <br />
              <span className="contact__subtitle" style={{ color: theme.text }}>
                +84 368971072
              </span>
            </div>
          </div>

          <div className="contact__information scroll-animation">
            <i className="uil uil-envelope contact__icon"></i>
            <div className="scroll-animation">
              <h3 className="contact__title">E-mail</h3>
              <span className="contact__subtitle">
                <a
                  style={{ color: theme.text, textDecoration: "none" }}
                  href="mailto:hoangson091104@gmail.com"
                >
                  hoangson091104@gmail.com
                </a>
              </span>
              <br />
              <span className="contact__subtitle">
                <a
                  style={{ color: theme.text, textDecoration: "none" }}
                  href="mailto:snghoang@unc.edu"
                >
                  snghoang@unc.edu
                </a>
              </span>
            </div>
          </div>

          <div className="contact__information scroll-animation">
            <i className="uil uil-map-marker contact__icon"></i>
            <div className="scroll-animation">
              <h3 className="contact__title">Location</h3>
              <span className="contact__subtitle">
                <a
                  style={{ color: theme.text, textDecoration: "none" }}
                  href="https://maps.app.goo.gl/Q32srm8aw4hgfTHD9"
                >
                  Chapel Hill, North Carolina, USA 27514
                </a>
              </span>
            </div>
          </div>
        </div>

        <form
          action="https://formspree.io/f/mvojlgdq"
          method="POST"
          className="contact__form grid"
        >
          <div className="contact__inputs grid">
            <div className="contact__content scroll-animation">
              <label htmlFor="name" className="contact__label">
                Name
              </label>
              <input type="text" name="name" className="contact__input" required />
            </div>

            <div className="contact__content scroll-animation">
              <label htmlFor="email" className="contact__label">
                E-mail
              </label>
              <input
                type="email"
                name="email"
                className="contact__input"
                required
              />
            </div>
          </div>

          <div className="contact__content scroll-animation">
            <label htmlFor="subject" className="contact__label">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              className="contact__input"
              required
            />
          </div>

          <div className="contact__content scroll-animation">
            <label
              htmlFor="description"
              className="contact__label"
            >
              Description
            </label>
            <textarea
              name="description"
              id="description"
              cols="30"
              rows="7"
              className="contact__input"
              required
            ></textarea>
          </div>

          <div>
            <button type="submit" className="button button--flex scroll-animation">
              Send Me A Message!
              <i className="uil uil-message button__icon"></i>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
