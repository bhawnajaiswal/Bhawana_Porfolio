// App.jsx
import React, { useState, useEffect, useRef } from "react";
import Home from "./Component/Home/Home";
import Splash from "./Component/Splash/Splash";
import EducationComponent from "./Component/EducationComponent/EducationComponent";
import Experience from "./Component/Experience/Experience";
import Projects from "./Component/Project/Projects";
import Contact from "./containers/contact/ContactComponent";
import Footer from "./Component/Footer/Footer";
import { settings } from "./portfolio";
import { chosenTheme } from "./theme";

function App() {
  const [showSplash, setShowSplash] = useState(settings.isSplash);
  const sectionsRef = useRef({});

  // Automatically hide Splash after a delay
  useEffect(() => {
    if (settings.isSplash) {
      const timer = setTimeout(() => setShowSplash(false), 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  // Scroll to a specific section
  const scrollToSection = (sectionName) => {
    const section = sectionsRef.current[sectionName];
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="app"
      style={{ backgroundColor: chosenTheme.body, color: chosenTheme.text }}
    >
      {showSplash ? (
        <Splash theme={chosenTheme} />
      ) : (
        <>
          {/* Pass the scrollToSection prop to the components */}
          <div ref={(el) => (sectionsRef.current["Home"] = el)}>
            <Home theme={chosenTheme} scrollToSection={scrollToSection} />
          </div>
          <div ref={(el) => (sectionsRef.current["EducationComponent"] = el)}>
            <EducationComponent theme={chosenTheme} scrollToSection={scrollToSection} />
          </div>
          <div ref={(el) => (sectionsRef.current["Experience"] = el)}>
            <Experience theme={chosenTheme} scrollToSection={scrollToSection} />
          </div>
          <div ref={(el) => (sectionsRef.current["Projects"] = el)}>
            <Projects theme={chosenTheme} scrollToSection={scrollToSection} />
          </div>
          <div ref={(el) => (sectionsRef.current["Contact"] = el)}>
            <Contact theme={chosenTheme} scrollToSection={scrollToSection} />
          </div>
          <div ref={(el) => (sectionsRef.current["Footer"] = el)}>
            <Footer theme={chosenTheme} />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
