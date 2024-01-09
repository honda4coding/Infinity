// MaecenasComponent.tsx

import React from "react";
import styles from "./hero.module.scss";

const Hero: React.FC = () => {
  return (
    <div className={styles["ag-maecenas_title"]}>
      <div className={styles["ag-maecenas_content"]}>{`INFINITY`}</div>
    </div>
  );
};

export default Hero;
