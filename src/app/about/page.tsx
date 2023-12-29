// pages/about.tsx
"use client";
// pages/about.tsx
// pages/about.tsx

import React, { useState, useEffect } from "react";
import styles from "../../styles/pages/about.module.scss"; // Import the SCSS module

const AboutPage: React.FC = () => {
  const [selectedButton, setSelectedButton] = useState("button1");
  const [displayText, setDisplayText] = useState("Text for Button 1");

  // Define the text for each button
  const buttonTexts: Record<string, string> = {
    button1: "Text for Button 1",
    button2: "Text for Button 2",
    button3: "Text for Button 3",
  };

  // Function to handle button click
  const handleButtonClick = (buttonId: string) => {
    setSelectedButton(buttonId);
    setDisplayText(buttonTexts[buttonId]);
  };

  // Automatic text change after 5 seconds
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // Change the selected button and display text
      const buttonIds = Object.keys(buttonTexts);
      const nextButtonIndex =
        (buttonIds.indexOf(selectedButton) + 1) % buttonIds.length;
      const nextButtonId = buttonIds[nextButtonIndex];
      setSelectedButton(nextButtonId);
      setDisplayText(buttonTexts[nextButtonId]);
    }, 5000);

    // Clear the timeout on component unmount or button click
    return () => clearTimeout(timeoutId);
  }, [selectedButton]);

  return (
    <div className={styles.container}>
      <h1>About Us</h1>
      <div>
        <button
          className={
            selectedButton === "button1"
              ? `${styles.button} ${styles.selected}`
              : styles.button
          }
          onClick={() => handleButtonClick("button1")}
        >
          Button 1
        </button>
        <button
          className={
            selectedButton === "button2"
              ? `${styles.button} ${styles.selected}`
              : styles.button
          }
          onClick={() => handleButtonClick("button2")}
        >
          Button 2
        </button>
        <button
          className={
            selectedButton === "button3"
              ? `${styles.button} ${styles.selected}`
              : styles.button
          }
          onClick={() => handleButtonClick("button3")}
        >
          Button 3
        </button>
      </div>
      <p>{displayText}</p>
      <button className={styles.button}>Contact Us</button>
    </div>
  );
};

export default AboutPage;
