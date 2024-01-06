"use client";
import Button from "../common/readmore";
// // pages/about.tsx
// // pages/about.tsx
// pages/about.js
import styles from "./aboutcontent.module.scss"; // Import the SCSS module
import AboutSection from "./aboutsection";
// pages/about.js
import React, { useState, useEffect } from "react";

const topics = [
  {
    title: "The Company",
    imageSrc: "/test.jpeg",
    description:
      "Infinity marine COnsultants (IMC) is in the heart position of the maritime industry in EGYPT, with a highly specialized teamwork, including Naval Architects, Masters and Chief Engineers.",
  },
  {
    title: "Our Vision",
    imageSrc: "/test.jpeg",
    description:
      "We strive to provide an expert solution every day in maritime consultancy services.",
  },
  {
    title: "Our Mission",
    imageSrc: "/test.jpeg",
    description:
      "To achieve complete customer satisfaction by providing on-time reliable, professional services. IMC consists of a group of highly specialized teamwork of Naval Architects, Masters, and Chief Engineers. IMC team provides technical expertise and engineering solutions locally and globally through our representatives in different countries.",
  },
];

const AboutContent = () => {
  const [currentTopicIndex, setCurrentTopicIndex] = useState(0);

  const handleButtonClick = (index: React.SetStateAction<number>) => {
    setCurrentTopicIndex(index);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTopicIndex((prevIndex) => (prevIndex + 1) % topics.length);
    }, 5000); // Change topic every 5 seconds

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  const currentTopic = topics[currentTopicIndex];
  const [yearsText, setYearsText] = useState("");
  const [servicesText, setServicesText] = useState("");

  useEffect(() => {
    const yearsInBusiness = "Years in Business: 15"; // Replace with the actual years
    const numberOfServices = "Number of Services: 12"; // Replace with the actual number

    let yearsIndex = 0;
    let servicesIndex = 0;

    const yearsTimer = setInterval(() => {
      setYearsText((prevText) =>
        prevText.length < yearsInBusiness.length
          ? yearsInBusiness.slice(0, prevText.length + 1)
          : prevText
      );
      yearsIndex += 1;

      if (yearsIndex > yearsInBusiness.length) {
        clearInterval(yearsTimer);
      }
    }, 100);

    const servicesTimer = setInterval(() => {
      setServicesText((prevText) =>
        prevText.length < numberOfServices.length
          ? numberOfServices.slice(0, prevText.length + 1)
          : prevText
      );
      servicesIndex += 1;

      if (servicesIndex > numberOfServices.length) {
        clearInterval(servicesTimer);
      }
    }, 100);

    return () => {
      clearInterval(yearsTimer);
      clearInterval(servicesTimer);
    };
  }, [currentTopicIndex]);

  function handleButton(): void {}
  return (
    <>
      <div className={styles["about-page"]}>
        <h1>About Us</h1>
        <div className={styles["button-container"]}>
          {topics.map((topic, index) => (
            <button
              key={index}
              className={currentTopicIndex === index ? styles["active"] : ""}
              onClick={() => handleButtonClick(index)}
            >
              {topic.title}
            </button>
          ))}
        </div>
        <div className={styles["aboutSectionStyle"]}>
          <AboutSection
            title={currentTopic.title}
            imageSrc={currentTopic.imageSrc}
            description={currentTopic.description}
          />
        </div>
        <div>
          <Button
            link="/services"
            text="Dive more"
            size="1em"
            onClick={handleButton}
            cursorPointer={true}
          />
        </div>
        <div className={styles["additional-info"]}>
          <p>{yearsText}</p>
          <p>{servicesText}</p>
        </div>
      </div>
    </>
  );
};

export default AboutContent;
