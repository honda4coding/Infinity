"use client";

import React, { useState, useEffect,ReactNode } from "react";
import Image from "next/image";
import styles from "../../styles/pages/about.module.scss";
import Aos from "aos";
import "aos/dist/aos.css";
const About = () => {
  useEffect(() => {
    Aos.init({
      duration: 3000,
     
  
    });
  }, []);

  return (
    <div className={styles.aboutContainer}>
      <h1 className={styles["focus-in-expand"]}>{`About Us`}</h1>

      <div className={styles.animationOne}>
        <div className={styles.infoContainer}>
          <Image
            src="/the-company-1.jpg"
            alt="Company"
            className={styles.image}
            width={600}
            height={600}
          />
          <p className={styles.description}>
            <h2 className={styles.sectionTitle}>{`The Company`}</h2>

            {`Infinity Marine Consultants (IMC) is in the heart position of the maritime industry in EGYPT, with a highly specialized teamwork, including Naval Architects, Masters and Chief Engineers. Infinity Marine Consultants (IMC) is a dynamic and forward-thinking maritime consultancy firm based in the heart of Egypt. Established with a vision to lead and innovate within the maritime industry, IMC has evolved into a beacon of excellence, known for its specialized expertise, client-centric approach, and commitment to advancing industry standards.`}
          </p>
        </div>
      </div>

      <div className={styles.animationTwo}>
        <div className={styles.infoContainerTwo}>
          <Image src="/Our-Vision-1.jpg" alt="Vision" className={styles.image}
             width={600}
             height={600} />
          <p className={styles.description}>
            <h2 className={styles.sectionTitle}>{`Our Vision`}</h2>

            {`we envision a future where we stand proudly at the forefront of the maritime industry in Egypt, serving as the heartbeat of innovation, excellence, and reliability. Our commitment to excellence is embodied in our highly specialized and dynamic team, comprised of expert Naval Architects, seasoned Masters, and accomplished Chief Engineers. In this vision, IMC is synonymous with unparalleled quality, cutting-edge solutions, and unwavering dedication to the maritime sector. We strive to be the go-to destination for clients seeking top-tier consulting services, where our team's expertise seamlessly merges with a deep understanding of the intricacies of the maritime domain.`}
          </p>
        </div>
      </div>

      <div className={styles.animationOne}>
        <div className={styles.infoContainer}>
          <Image
            src="/Our-Mission-1.jpg"
            alt="Mission"
            className={styles.image}
            width={600}
            height={200}
          />
          <p className={styles.description}>
            <h2 className={styles.sectionTitle}> {`Our Mission`}</h2>

            {`At Infinity Marine Consultants (IMC), our mission is to be the driving force behind the evolution and advancement of the maritime industry in Egypt. We are dedicated to providing unparalleled consulting services that combine technical expertise, innovation, and a profound understanding of maritime intricacies. To achieve complete customer satisfaction by providing on-time reliable, professional services. IMC consists of a group of highly specialized teamwork of Naval Architects, Masters, and Chief Engineers. IMC team provides technical expertise and engineering solutions locally and globally through our representatives in different countries.`}
          </p>
        </div>
      </div>

      <h2 className={styles.sectionTitle}>{`Service`}</h2>
      <Image src="/Dark.png" alt="Services" className={styles.image_service}
         width={800}
         height={900} />

      <h2 className={styles.sectionTitle}>{`Years in Business`}</h2>
      <Image src="/Info.png" alt="Services" className={styles.image_service}
         width={800}
         height={900} />

      <h2 className={styles.sectionTitle}>{`Company Profile`}</h2>
      <a href="https://drive.google.com/file/d/1tX6xTpx7n93WE2tffv6_qT2yZ40vDctt/view?usp=sharing" target="_blank" download className={styles.downloadLink}>
      {`Download`}
      </a>
      
      <a className={styles.a} href="/contact"><h2 className={styles.sectionTitle}>{`Contact Us`}</h2></a>
      {/* Add your contact form or contact details */}
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
