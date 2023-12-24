// pages/HomePage.js
"use client";

import React from "react";
import Home1 from "../../components/home/home1";
import Services from "../../components/home/services";
import styles from "../styles/pages/home.module.scss";
import Info from "../../components/home/info";

const HomePage = () => {
  return (
    <div className={styles.pageContainer}>
      <Home1></Home1>
      <div className={styles.centerContainer}>
        <div className={styles.gridContainer}>
          {/* Repeat this block to create multiple cards */}
          <Services
            number={1}
            clickableText="Click Me"
            icon={
              <img
                src="/sailboat.svg"
                alt="Icon"
                style={{ width: "50px", height: "50px" }}
              />
            }
            description="Ship registration services
            Flag registration including processing of Navigation license, Ship station license.Ship registration services
            Flag registration including processing of Navigation license, Ship station license.Ship registration services
            Flag registration including processing of Navigation license, Ship station license.Ship registration services
            Flag registration including processing of Navigation license, Ship station license.Ship registration services
            Flag registration including processing of Navigation license, Ship station license."
          />
          <Services
            number={1}
            clickableText="Click Me"
            icon={<img src="/your-icon.png" alt="Icon" />}
            description="Ship registration services Flag registration including processing of Navigation license, Ship station license."
          />
          <Services
            number={1}
            clickableText="Click Me"
            icon={<img src="/your-icon.png" alt="Icon" />}
            description="Ship registration services Flag registration including processing of Navigation license, Ship station license."
          />
          <Services
            number={1}
            clickableText="Click Me"
            icon={<img src="/your-icon.png" alt="Icon" />}
            description="Ship registration services Flag registration including processing of Navigation license, Ship station license."
          />
          <Services
            number={1}
            clickableText="Click Me"
            icon={<img src="/your-icon.png" alt="Icon" />}
            description="Ship registration services Flag registration including processing of Navigation license, Ship station license."
          />
          {/* Repeat other Services components similarly */}
        </div>
      </div>
      <Info></Info>
    </div>
  );
};

export default HomePage;
