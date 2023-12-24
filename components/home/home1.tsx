import React from "react";
import styles from "./home1.module.scss";

const Home1 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2>Lorem Ipsum</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex
        </p>
        <button className={styles.button}>Click me</button>
      </div>
      <div className={styles.imageContainer}>
        <img src="./ship.jpg" alt="Sample Image" />
      </div>
    </div>
  );
};

export default Home1;
