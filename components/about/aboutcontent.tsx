"use client";
import Button from "../common/readmore";
import styles from "./aboutcontent.module.scss"; // Import the SCSS module
import AboutSection from "./aboutsection";
import React, { useState, useEffect } from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faBellConcierge } from "@fortawesome/free-solid-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
const topics = [
  {
    title: "The Company",
    imageSrc: "the-company-1.jpg",
    description:
      "Infinity marine COnsultants (IMC) is in the heart position of the maritime industry in EGYPT, with a highly specialized teamwork, including Naval Architects, Masters and Chief Engineers. Infinity Marine Consultants (IMC) is a dynamic and forward-thinking maritime consultancy firm based in the heart of Egypt. Established with a vision to lead and innovate within the maritime industry, IMC has evolved into a beacon of excellence, known for its specialized expertise, client-centric approach, and commitment to advancing industry standards.",
  },
  {
    title: "Our Vision",
    imageSrc: "Vision.jpg",
    description:
      "At Infinity Marine Consultants (IMC), we envision a future where we stand proudly at the forefront of the maritime industry in Egypt, serving as the heartbeat of innovation, excellence, and reliability. Our commitment to excellence is embodied in our highly specialized and dynamic team, comprised of expert Naval Architects, seasoned Masters, and accomplished Chief Engineers. In this vision, IMC is synonymous with unparalleled quality, cutting-edge solutions, and unwavering dedication to the maritime sector. We strive to be the go-to destination for clients seeking top-tier consulting services, where our team's expertise seamlessly merges with a deep understanding of the intricacies of the maritime domain.",
  },
  {
    title: "Our Mission",
    imageSrc: "/Our-Mission-1.jpg",
    description:
      "At Infinity Marine Consultants (IMC), our mission is to be the driving force behind the evolution and advancement of the maritime industry in Egypt. We are dedicated to providing unparalleled consulting services that combine technical expertise, innovation, and a profound understanding of maritime intricacies. To achieve complete customer satisfaction by providing on-time reliable, professional services. IMC consists of a group of highly specialized teamwork of Naval Architects, Masters, and Chief Engineers. IMC team provides technical expertise and engineering solutions locally and globally through our representatives in different countries.",
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
        <h1 className={styles["focus-in-expand"]}>{`About Us`}</h1>
        <div className={styles["button-container"]}>
          <div className={styles["additional-info"]}>
            <h3>
              <FontAwesomeIcon icon={faCalendarDays} /> {yearsText}
            </h3>
            <h3>
              <FontAwesomeIcon icon={faBellConcierge} /> {servicesText}
            </h3>
          </div>
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
            link="/contact"
            text="Contact us"
            size="1.2rem"
            onClick={handleButton}
            cursorPointer={true}
          />
        </div>

        <div className={styles["more-info"]}>
          Our company profile
          <a
            href="https://drive.google.com/file/d/1tX6xTpx7n93WE2tffv6_qT2yZ40vDctt/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faDownload} />
          </a>
        </div>
      </div>
    </>
  );
};

export default AboutContent;
