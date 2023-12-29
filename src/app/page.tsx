// pages/HomePage.js
"use client";

import React from "react";
import Home1 from "../../components/home/home1";
import Services from "../../components/home/services";
import styles from "../styles/pages/home.module.scss";
import Info from "../../components/home/info";
import Button from "../../components/common/readmore";
import Hero from "../../components/home/hero";

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
            We strive to provide an expert solution everyday in maritime
            consultancies services.
          </h2>
          <div className={styles.gridContainer}>
            {/* Repeat this block to create multiple cards */}
            <Services
              number={1}
              // clickableText="Click Me"
              icon={
                <img
                  src="/sailboat.svg"
                  alt="Icon"
                  style={{ width: "50px", height: "50px" }}
                />
              }
              description={
                <>
                  <span>Ship registration services</span>
                  <span>
                    Flag registration including processing of Navigation
                    license, Ship station license.
                  </span>
                </>
              }
              buttonText={"hi"}
            />
            <Services
              number={2}
              // clickableText="Click Me"
              icon={
                <img
                  src="/sailboat.svg"
                  alt="Icon"
                  style={{ width: "50px", height: "50px" }}
                />
              }
              description={
                <>
                  <span>Annual Safety Inspections</span>
                  <span>
                    Our surveyors are duly authorized form Panama, Belize, Togo,
                    Malta, Dominica Maritime.
                  </span>
                </>
              }
              buttonText={"hi"}

              // linkTo="/services"
            />
            <Services
              number={3}
              // clickableText="Click Me"
              icon={
                <img
                  src="/sailboat.svg"
                  alt="Icon"
                  style={{ width: "50px", height: "50px" }}
                />
              }
              description={
                <>
                  <span>Corporations</span>
                  <span>
                    Registration of incorporations /off-shore companies under
                    Panama, Belize, Marshal.
                  </span>
                </>
              }
              buttonText={"hi"}
            />
            <Services
              number={4}
              // clickableText="Click Me"
              icon={
                <img
                  src="/sailboat.svg"
                  alt="Icon"
                  style={{ width: "50px", height: "50px" }}
                />
              }
              description={
                <>
                  <span>Seafarers endorsements & certification</span>
                  <span>
                    Issuance of Certificates of Endorsement (COE), Certificate
                    of competencies (COC) Continuous.
                  </span>
                </>
              }
              buttonText={"hi"}
            />
            <Services
              number={5}
              // clickableText="Click Me"
              icon={
                <img
                  src="/sailboat.svg"
                  alt="Icon"
                  style={{ width: "50px", height: "50px" }}
                />
              }
              description={
                <>
                  <span>Class & statutory certification</span>
                  <span>
                    We are approved for the following class and statutory
                    certification under flags of Panama.
                  </span>
                </>
              }
              buttonText={"hi"}
            />
            <Services
              number={6}
              // clickableText="Click Me"
              icon={
                <img
                  src="/sailboat.svg"
                  alt="Icon"
                  style={{ width: "50px", height: "50px" }}
                />
              }
              description={
                <>
                  <span>ISM & ISPS training and consultancy</span>
                  <span></span>
                </>
              }
              buttonText={"hi"}
            />
            {/* Repeat other Services components similarly */}
          </div>
        </div>
        <Button
          link="/services"
          text="Dive more"
          size="1em"
          onClick={handleButtonClick}
          cursorPointer={true}
        />

        <Info></Info>
      </div>
    </>
  );
};

export default HomePage;
