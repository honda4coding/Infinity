"use client";

import React from "react";
import AboutContent from "../../../components/about/aboutcontent";
import styles from "../../styles/pages/about.module.scss";
const About = () => {
  return (
    <>
      <div className={styles.aboutPage}>
        <AboutContent></AboutContent>
      </div>
    </>
  );
};

export default About;
