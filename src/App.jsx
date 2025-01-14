import React, { useState, useEffect, useRef } from "react";
import Navbar from "./Component/Navbar/Navbar";  // Import Navbar
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

  return (
    <div
      className="app"
      style={{ backgroundColor: chosenTheme.body, color: chosenTheme.text }}
    >
      {showSplash ? (
        <Splash theme={chosenTheme} />
      ) : (
        <>
          {/* Navbar Component */}
          <Navbar />

          {/* Sections with matching refs */}
          <div ref={(el) => (sectionsRef.current["Home"] = el)} id="home">
            <Home theme={chosenTheme} />
          </div>
          <div ref={(el) => (sectionsRef.current["EducationComponent"] = el)} id="education">
            <EducationComponent theme={chosenTheme} />
          </div>
          <div ref={(el) => (sectionsRef.current["Experience"] = el)} id="experience">
            <Experience theme={chosenTheme} />
          </div>
          <div ref={(el) => (sectionsRef.current["Projects"] = el)} id="projects">
            <Projects theme={chosenTheme} />
          </div>
          <div ref={(el) => (sectionsRef.current["Contact"] = el)} id="contact">
            <Contact theme={chosenTheme} />
          </div>
          <div ref={(el) => (sectionsRef.current["Footer"] = el)} id="footer">
            <Footer theme={chosenTheme} />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
