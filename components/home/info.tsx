// NewInfoComponent.jsx
import React, { useState, useEffect } from "react";
import Button from "../common/readmore";
import styles from "./info.module.scss"; // Import the SCSS module

const topics = [
  {
    title: "The Company",
    text: "INFINITY MARINE CONSULTANTS (IMC) is a leading independent marine consultancy company located in EGYPT, with international network of Maritime Organizations, Classification Societies, Flag administrations, Suppliers.",
    image: "/dock-2641666_1920.jpg", // Replace with your image path
  },
  {
    title: "Our Vision",
    text: "We strive to provide an expert solution everyday in maritime consultancies services.",
    image: "/water-3359672.jpg",
  },
  {
    title: "Our Mission",
    text: "To achieve complete customer satisfaction by providing on time reliable, professional services. IMC consists of a group of highly specialized teamwork of Naval Architects, Masters and Chief Engineers. IMC team provide a technical expertise an engineering solution locally and globally through our representatives in different countries.",
    image: "/wave-3931286_1920.jpg",
  },
];

const Info = () => {
  const [currentTopic, setCurrentTopic] = useState(0);

  const handleTopicChange = (index: React.SetStateAction<number>) => {
    setCurrentTopic(index);
  };

  const handleButtonClick = () => {
    // Do something on button click
  };

  useEffect(() => {
    // Automatically change the topic every 5 seconds
    const interval = setInterval(() => {
      const nextTopic = (currentTopic + 1) % topics.length;
      setCurrentTopic(nextTopic);
    }, 5000); // Change topic every 5 seconds

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, [currentTopic]);

  return (
    <>
      <div className={styles.infoContainer}>
        <div className={styles.infoContent}>
          <div className={styles.infoText}>
            <h2>{topics[currentTopic].title}</h2>
            <p>{topics[currentTopic].text}</p>

            <div className={styles.toggleButtons}>
              {topics.map((topic, index) => (
                <button
                  key={index}
                  onClick={() => handleTopicChange(index)}
                  className={index === currentTopic ? styles.active : ""}
                />
              ))}
            </div>
          </div>
          <div
            className={`${styles.imageContainer} ${styles.imageBackground}`}
            style={{
              backgroundImage: `url(${topics[currentTopic].image})`,
            }}
          />
        </div>
      </div>
      <Button
        link="/about"
        text="Dive more"
        size="1.2rem"
        onClick={handleButtonClick}
        cursorPointer={true}
      />
    </>
  );
};

export default Info;
