// MaecenasComponent.tsx

import React from "react";
import styles from "./hero.module.scss";

const Hero: React.FC = () => {
  return (
    <div className={styles["ag-maecenas_title"]}>
      <div className={styles["ag-maecenas_content"]}>{`Infinity`}</div>
    </div>
  );
};

export default Hero;

// // Import React and any necessary modules
// import React from "react";
// import styles from "./hero.module.scss"; // Make sure to adjust the path based on your project structure

// // Define your functional component
// const Hero: React.FC = () => {
//   return (
//     <div className={styles.main}>
//       <div className={styles.d1}></div>
//       <div className={styles.d2}></div>
//       <div className={styles.d3}></div>
//       <div className={styles.d4}></div>
//     </div>
//   );
// };
// export default Hero;
