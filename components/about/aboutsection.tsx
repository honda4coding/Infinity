// components/AboutSection.js
import React from "react";
import styles from "./aboutsection.module.scss";
import Image from "next/image";

interface AboutSectionProps {
  title: string;
  imageSrc: string;
  description: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({
  title,
  imageSrc,
  description,
}) => {
  return (
    <>
      <div className={styles["about-section"]}>
        <div>
          <h2>{title}</h2>
          <p> {description}</p>
        </div>
        <Image src={imageSrc} alt={`${title} Image`} width={400} height={200} />
      </div>
    </>
  );
};

export default AboutSection;
// // components/AboutSection.js
// import React from "react";
// import styles from "./aboutsection.module.scss";
// import Image from "next/image";

// interface AboutSectionProps {
//   title: string;
//   imageSrc: string;
//   description: string;
// }

// const AboutSection: React.FC<AboutSectionProps> = ({
//   title,
//   imageSrc,
//   description,
// }) => {
//   return (
//     <>
//       <div className={styles["about-section"]}>
//         <div>
//           <h2>{title}</h2>
//           <p> {description}</p>
//         </div>
//         <Image src={imageSrc} alt={`${title} Image`} width={100} height={100} />
//       </div>
//     </>
//   );
// };

// export default AboutSection;
