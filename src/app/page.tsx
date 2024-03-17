// pages/HomePage.js
"use client";

import React, { useState, useEffect } from "react";
import Home1 from "../../components/home/home1";
import Services from "../../components/home/services";
import styles from "../styles/pages/home.module.scss";
import Info from "../../components/home/info";
import Button from "../../components/common/readmore";
import Hero from "../../components/home/hero";
import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const HomePage = () => {
  useEffect(() => {
    Aos.init({
      duration: 3000,
    });
  }, []);
  function handleButtonClick(): void {}
  const handleServiceClick = () => {};

  return (
    <>
      <Hero></Hero>
      <div className={styles.pageContainer}>
        <Home1></Home1>
        <div data-aos="fade-down" className={styles.centerContainer}>
          <h1>Services</h1>
          <h2>
            {` We strive to provide an expert solution everyday in maritime
            consultancies services.`}
          </h2>
          <div className={styles.gridContainer}>
            {/* Repeat this block to create multiple cards */}

            <Services
              title={`Ship registration services`}
              icon={
                <Image src="/sailboat.svg" alt="Icon" width={50} height={50} />
              } // Replace with your icon component
              description={`  Flag registration including processing of Navigation license, Ship station license.`}
              href="/services#service-2"
              onClick={handleServiceClick}
            />

            <Services
              title={`Annual Safety Inspections`}
              icon={
                <Image src="/sailboat.svg" alt="Icon" width={50} height={50} />
              } // Replace with your icon component
              description={`Our surveyors are duly authorized form Panama, Belize, Togo,Malta, Dominica Maritime.`}
              href="/services#service-1"
              onClick={handleServiceClick}
            />
            <Services
              // number={3}
              title={`Corporations`}
              icon={
                <img
                  src="/sailboat.svg"
                  alt="Icon"
                  style={{ width: "50px", height: "50px" }}
                />
              }
              description={`Registration of incorporations /off-shore companies under Panama, Belize, Marshal.`}
              href="/services#service-8"
              onClick={handleServiceClick}
            />
            <Services
              title={`Seafarers endorsements & certification`}
              icon={
                <img
                  src="/sailboat.svg"
                  alt="Icon"
                  style={{ width: "50px", height: "50px" }}
                />
              }
              description={` Issuance of Certificates of Endorsement (COE), Certificate of competencies (COC) Continuous.`}
              href="/services#service-7"
              onClick={handleServiceClick}
            />
            <Services
              title={`Class & statutory certification`}
              icon={
                <img
                  src="/sailboat.svg"
                  alt="Icon"
                  style={{ width: "50px", height: "50px" }}
                />
              }
              description={`We are approved for the following class and statutory certification under flags of Panama.`}
              href="/services#service-6"
              onClick={handleServiceClick}
            />
            <Services
              title={`New ships designs`}
              icon={
                <img
                  src="/sailboat.svg"
                  alt="Icon"
                  style={{ width: "50px", height: "50px" }}
                />
              }
              description={`We offer a complete set of design with building supervision at owner request.`}
              href="/services#service-3"
              onClick={handleServiceClick}
            />
            {/* Repeat other Services components similarly */}
          </div>
          <Button
            link="/services"
            text="Dive more"
            size="1.2rem"
            onClick={handleButtonClick}
            cursorPointer={true}
          />
        </div>
        <div data-aos="fade-down" className={styles.topics}>
          <Info></Info>
        </div>
      </div>
    </>
  );
};

export default HomePage;
