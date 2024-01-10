import React, { useRef } from "react";
import styles from "./hero.module.scss";

const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className={styles["ag-maecenas_title"]}>
      <video
        ref={videoRef}
        autoPlay
        muted
        loop // Add the loop attribute here
        className={`${styles["ag-maecenas_video"]} ${styles["enhanced-video"]}`}
      >
        <source src="/My Movie(1).webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <div className={styles["ag-maecenas_title"]}>{`INFINITY`}</div>
    </div>
  );
};

export default Hero;
