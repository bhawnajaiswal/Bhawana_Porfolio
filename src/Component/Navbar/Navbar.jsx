import React, { useState, useEffect } from "react";
import { navLinks } from "../../assets/navLinks" 
import "./Navbar.css";

export const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    const yOffset = -50; // Adjust for sticky header
    const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  }
};

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset for better accuracy

      navLinks.forEach((nav) => {
        const section = document.getElementById(nav.id);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveSection(nav.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#home">
          <img src="your-logo-path.png" alt="Logo" />
        </a>
      </div>

      <div className="navbar-links">
        <ul>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`navbar-item ${
                activeSection === nav.id ? "active" : ""
              }`}
              onClick={() => scrollToSection(nav.id)}
            >
              {nav.title}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
