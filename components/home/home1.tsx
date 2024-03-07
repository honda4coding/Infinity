"use client";
import React, { useEffect } from "react";
import styles from "./home1.module.scss";
import Button from "../common/readmore";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";

const Home1 = () => {
  useEffect(() => {
    Aos.init({
      duration: 3000,
    });
  }, []);

  return (
    <div className={styles.container} style={{ overflowX: "hidden" }}>
      <div data-aos="fade-right" className={styles.textContainer}>
        <h2>{`Infinity Marine Consultants (IMC)`}</h2>
        <p>
          {` We are a leading maritime company in EGYPT, with international network
          of marine companies, Classification Societies, Flag administrations.
          With a highly specialized teamwork of Naval Architects, Masters and
          Chief Engineers.`}
        </p>
        <Button
          link="/about"
          text="Dive more"
          size="1.2rem"
          onClick={() => {}}
          cursorPointer={true}
        />
      </div>
      <div data-aos="fade-left" className={styles.imageContainer}>
        <Image src="/INFINITY2.jpg" alt="Icon" width={500} height={500} />
      </div>
    </div>
  );
};
export default Home1;
