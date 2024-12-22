import React, { useEffect } from "react";
import "./Splash.css";
import LoaderLogo from "../Loader/LoaderLogo";

function Splash({ theme, onSplashEnd }) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onSplashEnd(); // Notify parent (App.jsx) that the splash should end
    }, 5500);

    return () => {
      clearTimeout(timeout); // Cleanup timeout on unmount
    };
  }, [onSplashEnd]);

  return (
    <div className="logo_wrapper">
      <div className="screen" style={{ backgroundColor: theme.text }}>
        <LoaderLogo id="logo" theme={theme} />
      </div>
    </div>
  );
}

export default Splash;
