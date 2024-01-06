import React from "react";
import styles from "./home1.module.scss";
import Button from "../common/readmore";

const Home1 = () => {
  function handleButtonClick(): void {}
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2>Infinity Marine Consultants (IMC)</h2>
        <p>
          {` We are a leading maritime company in EGYPT, with international network
          of marine companies, Classification Societies, Flag administrations.
          With a highly specialized teamwork of Naval Architects, Masters and
          Chief Engineers.`}
        </p>
        <Button
          link="/services"
          text="Dive more"
          size="1em"
          onClick={handleButtonClick}
          cursorPointer={true}
        />
      </div>
      <div className={styles.imageContainer}>
        <img src="./logo_sign.png" alt="Sample Image" />
      </div>
    </div>
  );
};

export default Home1;
