// pages/HomePage.js
"use client";

import React from "react";
import Home1 from "../../components/home/home1";
import Services from "../../components/home/services";
import styles from "../styles/pages/home.module.scss";
import Info from "../../components/home/info";
import Button from "../../components/common/readmore";
import Hero from "../../components/home/hero";
import Image from "next/image";

const HomePage = () => {
  function handleButtonClick(): void {}
  const handleServiceClick = () => {};
  return (
    <>
      <Hero></Hero>
      <div className={styles.pageContainer}>
        <Home1></Home1>
        <div className={styles.centerContainer}>
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
              href="/services#Ship%20registration%20services"
              onClick={handleServiceClick}
            />

            <Services
              title={`Annual Safety Inspections`}
              icon={
                <Image src="/sailboat.svg" alt="Icon" width={50} height={50} />
              } // Replace with your icon component
              description={`Our surveyors are duly authorized form Panama, Belize, Togo,Malta, Dominica Maritime.`}
              href="/services#annual%20safety%20inspections"
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
              href="/services#Corporations"
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
              href="/services#Seafarers%20endorsements%20and%20certification"
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
              href="/services#Class%20and%20statutory%20certification"
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
              href="/services#New%20ships%20designs"
              onClick={handleServiceClick}
            />
            {/* Repeat other Services components similarly */}
          </div>
          <Button
            link="/services"
            text="Dive more"
            size="1.5rem"
            onClick={handleButtonClick}
            cursorPointer={true}
          />
        </div>

        <Info></Info>
      </div>
    </>
  );
};

export default HomePage;
