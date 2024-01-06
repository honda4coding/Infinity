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
              // number={1}
              icon={
                <Image src="/sailboat.svg" alt="Icon" width={50} height={50} />
              }
              description={
                <>
                  <p>
                    {`  Flag registration including processing of Navigation
                    license, Ship station license.`}
                  </p>
                </>
              }
              // number={}
              title={"Ship registration services"}
              buttonText={""}
            />
            <Services
              // number={2}
              icon={
                <img
                  src="/sailboat.svg"
                  alt="Icon"
                  style={{ width: "50px", height: "50px" }}
                />
              }
              description={
                <>
                  <p>
                    {`Our surveyors are duly authorized form Panama, Belize, Togo,
                    Malta, Dominica Maritime.`}
                  </p>
                </>
              }
              title={"Annual Safety Inspections"}
              buttonText={""} // linkTo="/services"
            />
            <Services
              // number={3}
              icon={
                <img
                  src="/sailboat.svg"
                  alt="Icon"
                  style={{ width: "50px", height: "50px" }}
                />
              }
              description={
                <>
                  <p>
                    {`Registration of incorporations /off-shore companies under
                    Panama, Belize, Marshal.`}
                  </p>
                </>
              }
              title={"Corporations"}
              buttonText={""}
            />
            <Services
              // number={4}
              icon={
                <img
                  src="/sailboat.svg"
                  alt="Icon"
                  style={{ width: "50px", height: "50px" }}
                />
              }
              description={
                <>
                  <p>
                    {` Issuance of Certificates of Endorsement (COE), Certificate
                    of competencies (COC) Continuous.`}
                  </p>
                </>
              }
              title={"Seafarers endorsements & certification"}
              buttonText={""}
            />
            <Services
              // number={5}
              icon={
                <img
                  src="/sailboat.svg"
                  alt="Icon"
                  style={{ width: "50px", height: "50px" }}
                />
              }
              description={
                <>
                  <p>
                    {`We are approved for the following class and statutory
                    certification under flags of Panama.`}
                  </p>
                </>
              }
              title={"Class & statutory certification"}
              buttonText={""}
            />
            <Services
              // number={6}
              icon={
                <img
                  src="/sailboat.svg"
                  alt="Icon"
                  style={{ width: "50px", height: "50px" }}
                />
              }
              description={<></>}
              title={"ISM & ISPS training and consultancy"}
              buttonText={""}
            />
            {/* Repeat other Services components similarly */}
          </div>
          <Button
            link="/services"
            text="Dive more"
            size="1em"
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
