"use client";

import React from "react";

import styles from "../../styles/pages/about.module.scss";

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.animationOne}>
        <h2 className={styles.sectionTitle}>Company</h2>
        <div className={styles.infoContainer}>
          <img
            src="/test.jpeg"
            width={360}
            height={180}
            alt="Company"
            className={styles.image}
          />
          <p className={styles.description}>
            Brief description about your company.
          </p>
        </div>
      </div>
      <div className={styles.animationTwo}>
        <h2 className={styles.sectionTitle}>Vision</h2>
        <div className={styles.infoContainerTwo}>
          <img src="/Our-Vision-1.jpg" alt="Vision" className={styles.image} />
          <p className={styles.description}>
            Brief description about your vision.
          </p>
        </div>
      </div>
      <div className={styles.animationOne}>
        <h2 className={styles.sectionTitle}>Mission</h2>
        <div className={styles.infoContainer}>
          <img
            src="/Our-Mission-1.jpg"
            alt="Mission"
            className={styles.image}
          />
          <p className={styles.description}>
            Brief description about your mission.
          </p>
        </div>
      </div>
      <h2 className={styles.sectionTitle}>Services</h2>
      <p className={styles.servicesDescription}>
        We offer a total of 12 services to meet your needs.
      </p>

      <h2 className={styles.sectionTitle}>Years in Business</h2>
      <p className={styles.yearsDescription}>15 years</p>

      <h2 className={styles.sectionTitle}>Download PDF</h2>
      <a href="/path-to-pdf" download className={styles.downloadLink}>
        Download PDF
      </a>

      <h2 className={styles.sectionTitle}>Contact Us</h2>
      {/* Add your contact form or contact details */}
      <button className={styles.contactButton}>Contact Us</button>
    </div>
  );
};

export default About;
// import AboutContent from "../../../components/about/aboutcontent";
// import styles from "../../styles/pages/about.module.scss";
// const About = () => {
//   return (
//     <>
//       <div className={styles.aboutPage}>
//         <AboutContent></AboutContent>
//       </div>
//     </>
//   );
// };

// export default About;
