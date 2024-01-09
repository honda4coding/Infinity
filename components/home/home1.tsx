import React from "react";
import styles from "./home1.module.scss";
import Button from "../common/readmore";
import Image from "next/image";

const Home1 = () => {
  function handleButtonClick(): void {}
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2>{`Infinity Marine Consultants (IMC)`}</h2>
        <p>
          {` We are a leading maritime company in EGYPT, with international network
          of marine companies, Classification Societies, Flag administrations.
          With a highly specialized teamwork of Naval Architects, Masters and
          Chief Engineers.`}
        </p>
        <Button
          link="/services"
          text="Dive more"
          size="1.5rem"
          onClick={handleButtonClick}
          cursorPointer={true}
        />
      </div>
      <div className={styles.imageContainer}>
        {/* <Image src="/logo_sign.png" alt="Icon" width={500} height={500} /> */}
        <Image src="/INFINITY2.jpg" alt="Icon" width={500} height={500} />
      </div>
    </div>
  );
};

export default Home1;
