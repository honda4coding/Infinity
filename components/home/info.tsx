// Info.tsx
//TODO finish this component

import React from "react";
import Button from "../common/readmore";
import styles from "./Info.module.scss"; // Import the SCSS module

// components/Features.tsx
// import React from 'react';
// import styles from './Features.module.scss';

// interface FeatureCardProps {
//   title: string;
// }

const Info: React.FC = () => {
  function handleButtonClick(): void {}
  return (
    <>
      <div className={styles.test}>
        <div className={styles.text}>
          <h2>Title</h2>
          <p>
            Embark on a journey with Infinity Marine as we navigate beyond the
            ordinary, driven by our maritime aspirations. Our commitment goes
            beyond the waves, shaping a future where excellence, innovation, and
            sustainability converge on the vast canvas of the sea.
          </p>
        </div>
        <div className={styles.features}>
          <div className={styles.cardsContainer}>
            <div className={`${styles.featureCard} ${styles.card1}`}>
              <p>
                {" "}
                🚢 Explore Our Company: Discover who we are, our story, and the
                passion that fuels our maritime expertise.
              </p>
            </div>
            <div className={`${styles.featureCard} ${styles.card2}`}>
              <p>
                🌊 Visionary Horizons: Unveil the vistas of our vision, where we
                envision a maritime world that's not just traversed but
                transformed.
              </p>
            </div>
            <div className={`${styles.featureCard} ${styles.card3}`}>
              <p>
                🔍 MissionMinds Unveiled: Delve into the heart of our mission,
                where every endeavor is infused with purpose, safety, and client
                empowerment.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Button
        link="/about"
        text="Read More"
        size="1em"
        onClick={handleButtonClick}
        // className={styles["info-button"]}
      />
    </>
  );
};

export default Info;

// const Info: React.FC = () => {
//   function handleButtonClick(): void {
//     // Implement the functionality you want when the button is clicked
//     // console.log("Button clicked");
//   }

//   return (
//     <>
//       <div className={styles["info-container"]}>
//         {/* "Beyond the Waves" in its own grid area */}
//         <div className={styles["info-intro"]}>
//           <h1>Beyond the Waves: Our Maritime Aspirations</h1>
//           <h2>
//             Embark on a journey with Infinity Marine as we navigate beyond the
//             ordinary, driven by our maritime aspirations. Our commitment goes
//             beyond the waves, shaping a future where excellence, innovation, and
//             sustainability converge on the vast canvas of the sea.
//           </h2>
//         </div>

//         {/* Cards in their respective grid areas */}
//         <div className={`${styles["info-card"]} ${styles["info-card1"]}`}>
//           <h3>
//             🚢 Explore Our Company: Discover who we are, our story, and the
//             passion that fuels our maritime expertise.
//           </h3>
//         </div>
//         <div className={`${styles["info-card"]} ${styles["info-card2"]}`}>
//           <h3>
//             🌊 Visionary Horizons: Unveil the vistas of our vision, where we
//             envision a maritime world that's not just traversed but transformed.
//           </h3>
//         </div>
//         <div className={`${styles["info-card"]} ${styles["info-card3"]}`}>
//           <h3>
//             🔍 MissionMinds Unveiled: Delve into the heart of our mission, where
//             every endeavor is infused with purpose, safety, and client
//             empowerment.
//           </h3>
//         </div>
//       </div>
//       {/* Button in its own grid area */}
//       <Button
//         link="/about"
//         text="Read More"
//         size="1em"
//         onClick={handleButtonClick}
//         // className={styles["info-button"]}
//       />
//     </>
//   );
// };

// export default Info;
