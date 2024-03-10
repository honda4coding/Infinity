"use client";
4;
// import React, { useState, useEffect } from "react";
// import styles from "../../styles/pages/services.module.scss";
// import AsideComponent from "../../../components/services/aside";
// import MainComponent from "../../../components/services/main";
// import Popup from "../../../components/common/popup";
// import Aos from "aos";
// import "aos/dist/aos.css";
// const mainData = [
//   {
//     logo: "https://img.icons8.com/ios/50/000000/signing-a-document.png",
//     title: "Ship registration services",
//     contentList: [
//       "Flag registration including processing of Navigation license, Ship station license, Minimum safe manning and Continuous synopsis record under Panama, Serra Leone, Bolivia, Georgia, Moldova and St. Vincent, Togo, Belize, Dominica, Malta, and Saint Kitts and Nevis",
//       "Registration of mortgages",
//       "Registration of title",
//       "Change of ownership and change of name",
//       "Deletion certificates",
//       "Free of encumbrance certificate",
//     ],
//     img: "https://i.ibb.co/D4ksJGw/ship-registration-e1623403355938.jpg",
//     showPopup: false,
//   },
//   {
//     logo: "https://img.icons8.com/ios/50/000000/cargo-ship.png",
//     title: "New ships designs",
//     contentPara:
//       "We offer a complete set of design with building supervision at owner request.",
//     img: "https://i.ibb.co/JB6gxNz/photo-1585713181935-d5f622cc2415.webp",
//     showPopup: false,
//   },
//   {
//     logo: "https://img.icons8.com/ios/50/000000/commercial-development-management.png",
//     title: "Ballast Water Management Solutions",
//     contentPara:
//       "Ballast water management system (BWMS) means any system which processes ballast water to kill, render harmless, or remove organisms. The BWMS includesall ballast water treatment equipment and all associated control and monitoringequipment,We present a cost-effective solution for complying with Ballast Water Management Convention and Non-Applicability of the convention Exemptions ",
//     img: "https://i.ibb.co/LDy0zcq/maxresdefault.webp",
//     showPopup: true,
//     imgPop: [
//       "https://i.ibb.co/10fnq2h/Whats-App-Image-2024-01-29-at-14-30-51-57ac9f15.jpg",
//       "https://i.ibb.co/Rj4MyTw/Whats-App-Image-2024-01-29-at-14-31-35-63280565.jpg",
//       "https://i.ibb.co/sg7qYfG/Whats-App-Image-2024-01-29-at-14-33-41-40c46481.jpg",
//       "https://i.ibb.co/Fkrsh6t/Whats-App-Image-2024-01-29-at-14-35-11-2424bb8b.jpg",
//       "https://i.ibb.co/4s9gHxh/Whats-App-Image-2024-01-29-at-14-48-31-6295bd96.jpg",
//       "https://i.ibb.co/n6xdhVq/Whats-App-Image-2024-01-29-at-14-52-39-3b4af2da.jpg",
//     ],
//     textPop: [
//       "NAME OF VESSEL : M/V ABDULLAH ",
//       "NAME OF VESSEL : M/V ABDULLAH ",
//       "NAME OF VESSEL : M/V DANIA",
//       "NAME OF VESSEL : M/V DANIA",
//       "NAME OF VESSEL : M/V SEA MAJESTY ",
//       "NAME OF VESSEL : M/V SEA MAJESTY ",
//     ],
//     textPop1: [
//       "TYPE OF BWTS: OPTIMARIN 190/167 ",
//       "TYPE OF BWTS: OPTIMARIN 190/167 ",
//       "TYPE OF BWTS : DESMI 170 ",
//       "TYPE OF BWTS : DESMI 170 ",
//       "TYPE OF BWTS : DESMI 190 ",
//       "TYPE OF BWTS : DESMI 190 ",
//     ],
//     numberPop: [
//       " pro-num #1",
//       " pro-num #1",
//       " pro-num #2",
//       " pro-num #2",
//       " pro-num #3",
//       " pro-num #3",
//     ],
//   },
//   {
//     logo: "https://img.icons8.com/ios/50/000000/case-study.png",
//     title: "CFD Finite Element Analysis",
//     contentPara:
//       "A dedicated team of highly qualified and experienced engineers and analysts ensure that all our CFD work is performed to the very highest standards. CFD results are presented in professional engineering reports that are accepted by Classification Societies",
//     img: "https://i.ibb.co/yy1RyY8/Marine-ship-CFD-Msc-Cradle-Ansys-Fluent-Siemens-Star-ccm.webp",
//     showPopup: false,
//   },
//   {
//     logo: "https://img.icons8.com/ios/50/000000/certificate--v1.png",
//     title: "Class and statutory certification",
//     contentPara:
//       "We are approved for the following class and statutory certification under flags of Panama, Panama, Belize, Serra Leone, Bolivia, Georgia, Moldova, Togo, Saint Kitts and Nevis:",
//     contentList: [
//       "Class Hull and Machinery certification",
//       "International Tonnage certificate",
//       "International load line certificate",
//       "Cargo ship safety equipment certificate",
//       "Cargo ship safety construction certificate",
//       "Cargo ship safety radio certificate",
//       "International oil pollutions prevention certificate",
//       "Document of compliance (ISM certification for companies)",
//       "Safety management certificate (ISM certification for vessels)",
//       "International Ship Security Plan (ISPS Certification)",
//       "Certificate of inspection of crew accommodation",
//       "International air pollution prevention certificate",
//       "International sewage pollution prevention certificate",
//       "Cargo gear certification and load test",
//       "Garbage certificate",
//       "Solid bulk cargo certificate.",
//       "Cargo ship safety certificate for vessels below 500 GRT",
//       "Passenger ship safety certificate",
//     ],
//     img: "https://i.ibb.co/WHhT6sk/wood-table-business-wooden.webp",
//     showPopup: false,
//   },
//   {
//     logo: "https://img.icons8.com/ios/50/000000/contract.png",
//     title: "Seafarers endorsements and certification",
//     contentPara:
//       "Issuance of Certificates of Endorsement (COE), Certificate of competencies (COC) Continuous Discharge Certificate (CDC).",
//     img: "https://i.ibb.co/WHhT6sk/wood-table-business-wooden.webp",
//     showPopup: false,
//   },
//   {
//     logo: "https://img.icons8.com/ios/50/000000/related-companies.png",
//     title: "Corporations",
//     contentPara:
//       "Registration of incorporations /off-shore companies under Panama, Belize, Marshal Island, St.Kitts &Nevies.",
//     img: "https://i.ibb.co/k2WgwT5/desktop-wallpaper-business-corporate.webp",
//     showPopup: false,
//   },
//   {
//     logo: "https://img.icons8.com/ios/50/000000/manhole-cover.png",
//     title: "Insurance Cover, conditions surveys",
//     content: "",
//     img: "",
//     showPopup: false,
//   },
//   {
//     logo: "https://img.icons8.com/ios/50/000000/training.png",
//     title: "ISM and ISPS training and consultancy",
//     content: "",
//     img: "",
//     showPopup: false,
//   },

//   {
//     logo: "https://img.icons8.com/ios/50/000000/advanced-search.png",
//     title: "Non-destructive tests",
//     contentList: ["UT Thickness Measurements"],
//     img: "https://i.ibb.co/TbdMSH2/non-destructive.webp",
//     showPopup: false,
//   },

//   {
//     logo: "https://img.icons8.com/ios/50/000000/strike.png",
//     title: "On demand surveys",
//     contentList: [
//       "Pre-purchase inspection",
//       "On hire/ Off hire inspection",
//       "Bunker Survey",
//       "Cargo, Hold’s Inspections",
//       "Insurance Cover Surveys",
//       "Conditions Surveys",
//       "UT Thickness Measurement",
//       "Wall/Wash Test",
//       "MARPOL Surveys",
//     ],
//     img: "https://i.ibb.co/8M91bp0/pexels-photo-669622.webp",
//     showPopup: false,
//   },
//   {
//     logo: "https://img.icons8.com/ios/50/000000/drafting-compass.png",
//     title:
//       "Recreation of existing ships drawings, calculations, manuals & plans",
//     contentListOne: [
//       "Lines Plans",
//       "Construction Drawings",
//       "Machinery, Shafting Layouts",
//       "Shell Expansion",
//       "General Plan",
//       "Capacity Plan",
//       "Fire Control and Safety Plan",
//     ],
//     contentListTwo: [
//       "Hydrostatics, Stability, freeboard calculations, tonnage measurements, Dwt Increment, Torsional Vibrations, etc.",
//     ],
//     contentListThree: [
//       "Intact, Damage Stability booklets",
//       "Trim Sounding Tables",
//       "Tonnage, Freeboard measurements",
//       "Cargo Securing Manuals",
//       "SOPEP",
//       "Garbage management plan",
//       "Ship security plan, Cyber Security Manual",
//       "Bulk carrier booklet",
//       "Cow operational manual",
//       "Ballast water management plan",
//       "Fire and safety training manual",
//     ],
//     img: "https://i.ibb.co/2dbFPQ0/istockphoto-1461594369-612x612.jpg",
//     showPopup: false,
//   },
//   {
//     logo: "https://img.icons8.com/ios/50/000000/commercial-development-management.png",
//     title: "EEXI / CII / EPL / OMM / SEEMP PART III – Consultation",
//     contentPara:
//       "we provide complete consultation by our Expert Marine Engineers and Naval Architects for MARPOL ANNEX VI Compliance: ",
//     contentList: [
//       "EEXI Compliance- (Energy Efficiency Existing Ship Index)",
//       "CII Compliance- (Carbon Intensity Indicator)",
//       "EPL- (Engine Power Limitation)",
//       "OMM- (On Board Management Manual)",
//       "SEEMP Part III",
//     ],
//     img: "https://i.ibb.co/MCNjXHr/Screenshot-2024-01-09-165551.png",
//     showPopup: false,
//   },
//   {
//     logo: "https://img.icons8.com/ios/50/000000/maintenance--v1.png",
//     title: "Annual Safety Inspections",
//     contentPara:
//       "Our surveyors are duly authorized form Panama, Belize, Togo, Malta, Dominica Maritime Authority to carry out Annual Safety Inspection for aforementioned administrations.",
//     img: "https://i.ibb.co/F0C4drm/istockphoto-1658925458-612x612.webp",
//     showPopup: false,
//   },
// ];
// const imagePaths = [
//   "https://placekitten.com/200/200",
//   "https://placekitten.com/201/201",
//   "https://placekitten.com/202/202",
//   "/MV ABDULLAH F.jpg",
// ];

// const Services: React.FC = () => {
//   const [activeTab, setActiveTab] = useState("Annual Safety Inspections");
//   const [showImage, setShowImage] = useState(false);
//   useEffect(() => {
//     Aos.init({
//       duration: 3000,
//     });
//   }, []);
//   // Function to extract the service name from the URL hash
//   const getServiceFromHash = () => {
//     const hash = window.location.hash.substring(1);
//     return decodeURIComponent(hash);
//   };

//   // Effect to handle initial load and hash changes
//   useEffect(() => {
//     // Check if there's a hash on initial load
//     const initialService = getServiceFromHash();
//     if (
//       initialService &&
//       mainData.some((data) => data.title === initialService)
//     ) {
//       setActiveTab(initialService);
//     }

//     // Add event listener for hash changes
//     const handleHashChange = () => {
//       const newService = getServiceFromHash();
//       if (newService && mainData.some((data) => data.title === newService)) {
//         setActiveTab(newService);
//       }
//     };

//     window.addEventListener("hashchange", handleHashChange);

//     // Cleanup the event listener on component unmount
//     return () => {
//       window.removeEventListener("hashchange", handleHashChange);
//     };
//   }, []); // Empty dependency array to run the effect only once on mount

//   // Function to handle service selection
//   const openService = (
//     _evt: React.MouseEvent<HTMLButtonElement>,
//     service: string
//   ) => {
//     setActiveTab(service);

//     // Update the hash dynamically based on the selected service
//     window.location.hash = encodeURIComponent(service);
//   };

//   const currentService = mainData.find(
//     (service) => service.title === activeTab
//   );

//   return (
//     <>
//       <div data-aos="fade-down" className={styles["focus-in-expand"]}>
//         Services
//       </div>
//       <div className={styles.text}>
//         <div className={styles.text1}>
//           <h2>
//             we offer a comprehensive range of marine consulting services to meet
//             the diverse needs of our clients in the maritime industry. With
//             years of experience and a team of seasoned experts, we are committed
//             to delivering exceptional solutions tailored to your specific
//             requirements.
//           </h2>
//         </div>
//         <div className={styles.page}>
//           <div className={styles.tab}>
//             <div data-aos="fade-right">
//               <AsideComponent
//                 mainData={mainData}
//                 activeTab={activeTab}
//                 openService={openService}
//               />
//             </div>
//             <div data-aos="fade-left" className={styles.pop}>
//               <MainComponent
//                 mainData={mainData}
//                 activeTab={activeTab}
//                 openService={openService}
//               />
//               {currentService && currentService.showPopup && (
//                 <Popup
//                   key={currentService.title} // Make sure to provide a unique key for each Popup
//                   imagePaths={currentService.imgPop}
//                   content={currentService.textPop}
//                   content1={currentService.textPop1}
//                   content2={currentService.numberPop}
//                   onClose={() => console.log("Popup closed")}
//                 />
//               )}
//               {currentService &&
//                 currentService.title === "Ship registration services" && (
//                   <button
//                     className={styles.button}
//                     onClick={() => setShowImage(!showImage)}
//                   >
//                     {showImage ? "Our Registration" : "Our Registration "}
//                   </button>
//                 )}
//               {showImage && (
//                 <div
//                   className={styles.overlay}
//                   onClick={() => setShowImage(false)}
//                 >
//                   <img
//                     src="https://i.ibb.co/CW2g8Xm/Copy-of-Untitled.png"
//                     alt="Your Image"
//                   />
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Services;
// services.js

import Link from "next/link"; // Import Link from next/link
import React, { useEffect, useState } from "react";
// import Layout from '../components/Layout'; // Assuming you have a Layout component
import styles from "../../styles/pages/services.module.scss"; // Import your SCSS file

const Services = () => {
  // const [sidebarFixed, setSidebarFixed] = useState(true);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const service14 = document.getElementById("service14");
  //     if (service14) {
  //       const service14Offset = service14.getBoundingClientRect().top;
  //       const scrollPosition = window.pageYOffset + window.innerHeight;
  //       if (scrollPosition >= service14Offset) {
  //         setSidebarFixed(false);
  //       } else {
  //         setSidebarFixed(true);
  //       }
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  const [sidebarFixed, setSidebarFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.getElementById("footer");
      const serviceContainer = document.getElementById("service-container");

      if (footer && serviceContainer) {
        const footerOffset = footer.getBoundingClientRect().top;
        const serviceContainerOffset =
          serviceContainer.getBoundingClientRect().top;

        if (footerOffset > window.innerHeight && serviceContainerOffset < 0) {
          setSidebarFixed(true);
        } else {
          setSidebarFixed(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className={styles["page"]}>
        {/* <aside
          className={`${styles["sidebar"]} ${
            sidebarFixed ? styles["sidebarFixed"] : ""
          }`}
        > */}
        <aside
          className={`${styles["sidebar"]} ${
            sidebarFixed ? styles["sidebarFixed"] : ""
          }`}
        >
          <h2>Navigation</h2>
          <ul>
            <li>
              <Link href="#service1">
                <div>Service 1</div>
              </Link>
            </li>
            <li>
              <Link href="#service2">
                <div>Service 2</div>
              </Link>
            </li>
            <li>
              <Link href="#service3">
                <div>Service 3</div>
              </Link>
            </li>
            <li>
              <Link href="#service4">
                <div>Service 4</div>
              </Link>
            </li>
            <li>
              <Link href="#service5">
                <div>Service 5</div>
              </Link>
            </li>
            <li>
              <Link href="#service6">
                <div>Service 6</div>
              </Link>
            </li>
            <li>
              <Link href="#service7">
                <div>Service 7</div>
              </Link>
            </li>
            <li>
              <Link href="#service8">
                <div>Service 8</div>
              </Link>
            </li>
            <li>
              <Link href="#service9">
                <div>Service 9</div>
              </Link>
            </li>
            <li>
              <Link href="#service10">
                <div>Service 10</div>
              </Link>
            </li>
            <li>
              <Link href="#service11">
                <div>Service 11</div>
              </Link>
            </li>
            <li>
              <Link href="#service12">
                <div>Service 12</div>
              </Link>
            </li>
            <li>
              <Link href="#service13">
                <div>Service 13</div>
              </Link>
            </li>
            <li>
              <Link href="#service14">
                <div>Service 14</div>
              </Link>
            </li>

            {/* Add more service links as needed */}
          </ul>
        </aside>
        <div className={styles["services-page"]}>
          <div className={styles["main-content"]}>
            <h1>Our Services</h1>
            <section id="service1" className={styles["service-section"]}>
              <h2>Annual Safety Inspections</h2>
              <div className={styles["service-container"]}>
                <div className={styles["service-text"]}>
                  <p>
                    Our surveyors are duly authorized form Panama, Belize, Togo,
                    Malta, Dominica Maritime Authority to carry out Annual
                    Safety Inspection for aforementioned administrations.
                  </p>
                </div>
                <div className={styles["service-image"]}>
                  <img
                    src="https://i.ibb.co/F0C4drm/istockphoto-1658925458-612x612.webp"
                    alt="Service 1"
                  />
                </div>
              </div>
            </section>
            <section id="service2" className={styles["service-section"]}>
              <h2>Ship registration services</h2>
              <div className={styles["service-container"]}>
                <div className={styles["service-text"]}>
                  <ul>
                    <li>
                      Flag registration including processing of Navigation
                      license, Ship station license, Minimum safe manning and
                      Continuous synopsis record under Panama, Serra Leone,
                      Bolivia, Georgia, Moldova and St. Vincent, Togo, Belize,
                      Dominica, Malta, and Saint Kitts and Nevis
                    </li>
                    <li>Registration of mortgages</li>
                    <li>Registration of title</li>
                    <li>Change of ownership and change of name</li>
                    <li>Deletion certificates</li>
                    <li>Free of encumbrance certificate</li>
                  </ul>
                </div>
                <div className={styles["service-image"]}>
                  <img
                    src="https://i.ibb.co/D4ksJGw/ship-registration-e1623403355938.jpg"
                    alt="Service 2"
                  />
                </div>
              </div>
            </section>
            <section id="service3" className={styles["service-section"]}>
              <h2>New ships designs</h2>
              <div className={styles["service-container"]}>
                <div className={styles["service-text"]}>
                  <p>
                    We offer a complete set of design with building supervision
                    at owner request.
                  </p>
                </div>
                <div className={styles["service-image"]}>
                  <img
                    src="https://i.ibb.co/JB6gxNz/photo-1585713181935-d5f622cc2415.webp"
                    alt="Service 3"
                  />
                </div>
              </div>
            </section>
            <section id="service4" className={styles["service-section"]}>
              <h2>Ballast Water Management Solutions</h2>
              <div className={styles["service-container"]}>
                <div className={styles["service-text"]}>
                  <p>
                    Ballast water management system (BWMS) means any system
                    which processes ballast water to kill, render harmless, or
                    remove organisms. The BWMS includesall ballast water
                    treatment equipment and all associated control and
                    monitoringequipment,We present a cost-effective solution for
                    complying with Ballast Water Management Convention and
                    Non-Applicability of the convention Exemptions
                  </p>
                </div>
                <div className={styles["service-image"]}>
                  <img
                    src="https://i.ibb.co/LDy0zcq/maxresdefault.webp"
                    alt="Service 4"
                  />
                </div>
              </div>
            </section>
            <section id="service5" className={styles["service-section"]}>
              <h2>CFD Finite Element Analysis</h2>
              <div className={styles["service-container"]}>
                <div className={styles["service-text"]}>
                  <p>
                    A dedicated team of highly qualified and experienced
                    engineers and analysts ensure that all our CFD work is
                    performed to the very highest standards. CFD results are
                    presented in professional engineering reports that are
                    accepted by Classification Societies
                  </p>
                </div>
                <div className={styles["service-image"]}>
                  <img
                    src="https://i.ibb.co/yy1RyY8/Marine-ship-CFD-Msc-Cradle-Ansys-Fluent-Siemens-Star-ccm.webp"
                    alt="Service 5"
                  />
                </div>
              </div>
            </section>
            <section id="service6" className={styles["service-section"]}>
              <h2>Class and statutory certification</h2>
              <div className={styles["service-container"]}>
                <div className={styles["service-text"]}>
                  <p>
                    We are approved for the following class and statutory
                    certification under flags of Panama, Panama, Belize, Serra
                    Leone, Bolivia, Georgia, Moldova, Togo, Saint Kitts and
                    Nevis:
                  </p>
                  <ul>
                    <li>Class Hull and Machinery certification</li>
                    <li>International Tonnage certificate</li>
                    <li>International load line certificate</li>
                    <li>Cargo ship safety equipment certificate</li>
                    <li>Cargo ship safety construction certificate</li>
                    <li>Cargo ship safety radio certificate</li>
                    <li>International oil pollutions prevention certificate</li>
                    <li>
                      Document of compliance (ISM certification for companies)
                    </li>
                    <li>
                      Safety management certificate (ISM certification for
                      vessels)
                    </li>
                    <li>
                      International Ship Security Plan (ISPS Certification)
                    </li>
                    <li>Certificate of inspection of crew accommodation</li>
                    <li>International air pollution prevention certificate</li>
                    <li>
                      International sewage pollution prevention certificate
                    </li>
                    <li>Cargo gear certification and load test</li>
                    <li>Garbage certificate</li>
                    <li>Solid bulk cargo certificate.</li>
                    <li>
                      Cargo ship safety certificate for vessels below 500 GRT
                    </li>
                    <li>Passenger ship safety certificate</li>
                  </ul>
                </div>
                <div className={styles["service-image"]}>
                  <img
                    src="https://i.ibb.co/WHhT6sk/wood-table-business-wooden.webp"
                    alt="Service 6"
                  />
                </div>
              </div>
            </section>
            <section id="service7" className={styles["service-section"]}>
              <h2>Seafarers endorsements and certification</h2>
              <div className={styles["service-container"]}>
                <div className={styles["service-text"]}>
                  <p>
                    Issuance of Certificates of Endorsement (COE), Certificate
                    of competencies (COC) Continuous Discharge Certificate
                    (CDC).
                  </p>
                </div>
                <div className={styles["service-image"]}>
                  <img
                    src="https://i.ibb.co/WHhT6sk/wood-table-business-wooden.webp"
                    alt="Service 7"
                  />
                </div>
              </div>
            </section>
            <section id="service8" className={styles["service-section"]}>
              <h2>Corporations</h2>
              <div className={styles["service-container"]}>
                <div className={styles["service-text"]}>
                  <p>
                    Registration of incorporations /off-shore companies under
                    Panama, Belize, Marshal Island, St.Kitts &Nevies.
                  </p>
                </div>
                <div className={styles["service-image"]}>
                  <img
                    src="https://i.ibb.co/k2WgwT5/desktop-wallpaper-business-corporate.webp"
                    alt="Service 8"
                  />
                </div>
              </div>
            </section>
            <section id="service9" className={styles["service-section"]}>
              <h2>Insurance Cover, conditions surveys</h2>
              <div className={styles["service-container"]}>
                <div className={styles["service-text"]}>
                  <p></p>
                </div>
                <div className={styles["service-image"]}>
                  {/* <img src="/service9.jpg" alt="Service 9" /> */}
                </div>
              </div>
            </section>
            <section id="service10" className={styles["service-section"]}>
              <h2>ISM and ISPS training and consultancy</h2>
              <div className={styles["service-container"]}>
                <div className={styles["service-text"]}>
                  <p></p>
                </div>
                <div className={styles["service-image"]}>
                  {/* <img src="/service10.jpg" alt="Service 10" /> */}
                </div>
              </div>
            </section>
            <section id="service11" className={styles["service-section"]}>
              <h2>Non-destructive tests</h2>
              <div className={styles["service-container"]}>
                <div className={styles["service-text"]}>
                  <p>UT Thickness Measurements</p>
                </div>
                <div className={styles["service-image"]}>
                  <img
                    src="https://i.ibb.co/TbdMSH2/non-destructive.webp"
                    alt="Service 11"
                  />
                </div>
              </div>
            </section>
            <section id="service12" className={styles["service-section"]}>
              <h2>On demand surveys</h2>
              <div className={styles["service-container"]}>
                <div className={styles["service-text"]}>
                  <ul>
                    <li>Pre-purchase inspection</li>
                    <li>On hire/ Off hire inspection</li>
                    <li>Bunker Survey</li>
                    <li>Cargo, Hold’s Inspections</li>
                    <li>Insurance Cover Surveys</li>
                    <li>Conditions Surveys</li>
                    <li>UT Thickness Measurement</li>
                    <li>Wall/Wash Test</li>
                    <li>MARPOL Surveys</li>
                  </ul>
                </div>
                <div className={styles["service-image"]}>
                  <img
                    src="https://i.ibb.co/8M91bp0/pexels-photo-669622.webp"
                    alt="Service 12"
                  />
                </div>
              </div>
            </section>
            <section id="service13" className={styles["service-section"]}>
              <h2>
                Recreation of existing ships drawings, calculations, manuals &
                plans
              </h2>
              <div className={styles["service-container"]}>
                <div className={styles["service-text"]}>
                  <p>Drawings</p>
                  <ul>
                    <li>Lines Plans</li>
                    <li>Construction Drawings</li>
                    <li>Machinery, Shafting Layouts</li>
                    <li>Shell Expansion</li>
                    <li>General Plan</li>
                    <li>Capacity Plan</li>
                    <li>Fire Control and Safety Plan</li>
                  </ul>
                  <p>Calculations</p>
                  <ul>
                    <li>
                      Hydrostatics, Stability, freeboard calculations, tonnage
                      measurements, Dwt Increment, Torsional Vibrations, etc.
                    </li>
                  </ul>
                  <p>Manuals</p>
                  <ul>
                    <li>Intact, Damage Stability booklets</li>
                    <li>Trim Sounding Tables</li>
                    <li>Tonnage, Freeboard measurements</li>
                    <li>Cargo Securing Manuals</li>
                    <li>SOPEP</li>
                    <li>Garbage management plan</li>
                    <li>Ship security plan, Cyber Security Manual</li>
                    <li>Bulk carrier booklet</li>
                    <li>Cow operational manual</li>
                    <li>Ballast water management plan</li>
                    <li>Fire and safety training manual</li>
                  </ul>
                </div>
                <div className={styles["service-image"]}>
                  <img
                    src="https://i.ibb.co/2dbFPQ0/istockphoto-1461594369-612x612.jpg"
                    alt="Service 13"
                  />
                </div>
              </div>
            </section>
            <section id="service14" className={styles["service-section"]}>
              <h2>EEXI / CII / EPL / OMM / SEEMP PART III – Consultation</h2>
              <div className={styles["service-container"]}>
                <div className={styles["service-text"]}>
                  <p>
                    we provide complete consultation by our Expert Marine
                    Engineers and Naval Architects for MARPOL ANNEX VI
                    Compliance:
                  </p>
                  <ul>
                    <li>
                      EEXI Compliance- (Energy Efficiency Existing Ship Index)
                    </li>
                    <li>CII Compliance- (Carbon Intensity Indicator)</li>
                    <li>EPL- (Engine Power Limitation)</li>
                    <li>OMM- (On Board Management Manual)</li>
                    <li>SEEMP Part III</li>
                  </ul>
                </div>
                <div className={styles["service-image"]}>
                  <img
                    src="https://i.ibb.co/MCNjXHr/Screenshot-2024-01-09-165551.png"
                    alt="Service 14"
                  />
                </div>
              </div>
            </section>

            {/* Add more sections for other services */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
