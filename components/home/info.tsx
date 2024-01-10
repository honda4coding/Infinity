import React from "react";
import Button from "../common/readmore";
import styles from "./info.module.scss"; // Import the SCSS module

const Info: React.FC = () => {
  function handleButtonClick(): void {}

  return (
    <>
      <div className={styles.text}>About us</div>
      <div className={styles.features}>
        <div className={styles.cardsContainer}>
          <a href="/about" className={`${styles.featureCard} ${styles.card1}`}>
            <p>
              {` Explore Our Company: Discover who we are, our story, and the
              passion that fuels our maritime expertise.`}
            </p>
          </a>
          <a href="/about" className={`${styles.featureCard} ${styles.card2}`}>
            <p>
              {` Visionary Horizons: Unveil the vistas of our vision, where we
              envision a maritime world that's not just traversed but
              transformed.`}
            </p>
          </a>
          <a href="/about" className={`${styles.featureCard} ${styles.card3}`}>
            <p>
              {`  MissionMinds Unveiled: Delve into the heart of our mission, where
              every endeavor is infused with purpose, safety, and client
              empowerment.`}
            </p>
          </a>
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
