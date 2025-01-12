import React, { useEffect, useState } from "react";
import "./TopButton.css";

export default function TopButton({ theme }) {
  const [isVisible, setIsVisible] = useState(false);

  const GoUpEvent = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const scrollFunction = () => {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
      if (!isVisible) setIsVisible(true); // Show button
    } else {
      if (isVisible) setIsVisible(false); // Hide button
    }
  };

  useEffect(() => {
    window.onscroll = scrollFunction;

    // Cleanup on unmount
    return () => {
      window.onscroll = null;
    };
  }, [isVisible]);

  const onMouseEnter = (color, bgColor) => {
    const topButton = document.getElementById("topButton");
    const arrow = document.getElementById("arrow");
    if (topButton && arrow) {
      topButton.style.color = color;
      topButton.style.backgroundColor = bgColor;
      arrow.style.color = color;
      arrow.style.backgroundColor = bgColor;
    }
  };

  const onMouseLeave = (color, bgColor) => {
    const topButton = document.getElementById("topButton");
    const arrow = document.getElementById("arrow");
    if (topButton && arrow) {
      topButton.style.color = color;
      topButton.style.backgroundColor = bgColor;
      arrow.style.color = color;
      arrow.style.backgroundColor = bgColor;
    }
  };

  return (
    <div
      onClick={GoUpEvent}
      id="topButton"
      className={isVisible ? "show" : ""}
      style={{
        color: theme.body,
        backgroundColor: theme.text,
        border: `solid 1px ${theme.text}`,
      }}
      title="Go up"
      onMouseEnter={() => onMouseEnter(theme.text, theme.body)}
      onMouseLeave={() => onMouseLeave(theme.body, theme.text)}
    >
      <i className="fas fa-arrow-up" id="arrow" aria-hidden="true" />
    </div>
  );
}
