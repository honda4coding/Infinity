// MaecenasComponent.tsx

import React from "react";
import styles from "./hero.module.scss";

const Hero: React.FC = () => {
  return (
    <div className={styles["ag-maecenas_title"]}>
      <video autoPlay muted loop className={styles["ag-maecenas_video"]}>
        <source src="/My Movie.webm" type="video/webm" />
      </video>
      <div className={styles["ag-maecenas_title"]}>{`INFINITY`}</div>
    </div>
  );
};

export default Hero;
