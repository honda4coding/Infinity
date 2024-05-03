"use client";
// import Link from "next/link"; // Import Link from next/link
// import React, { useEffect, useState } from "react";
// import styles from "../../styles/pages/services.module.scss"; // Import
// import { faAngleDoubleRight, faTimes } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Aos from "aos";
// import "aos/dist/aos.css";
// import Button from "../../../components/common/readmore";
// import ImageButton from "../../../components/services/imageButton";
// import ProjectButton from "../../../components/services/projectsButton";
// interface Service {
//   id: number;
//   title: string;
//   sections: { text: string; list: string[] }[]; // Array of sections

//   imageUrl: string;
// }
// const servicesData: Service[] = [
//   {
//     id: 1,
//     title: "Annual Safety Inspections",
//     sections: [
//       {
//         text: "Ensure the safety and compliance of your vessel with our comprehensive annual safety inspections. Our experienced inspectors will thoroughly assess your vessel's condition and equipment to identify and mitigate potential risks.",
//         list: [],
//       },
//     ],

//     imageUrl: "https://i.ibb.co/F0C4drm/istockphoto-1658925458-612x612.webp",
//   },
//   {
//     id: 2,
//     title: "Ship Registration Services",
//     sections: [
//       {
//         text: "",
//         list: [
//           "Flag registration including processing of Navigation license, Ship station license, Minimum safe manning and Continuous synopsis record under Panama, Serra Leone, Bolivia, Georgia, Moldova and St. Vincent, Togo, Belize, Dominica, Malta, and Saint Kitts and Nevis",
//           "Registration of mortgages",
//           "Registration of title",
//           "Change of ownership and change of name",
//           "Deletion certificates",
//           "Free of encumbrance certificate",
//         ],
//       },
//     ],
//     imageUrl: "https://i.ibb.co/D4ksJGw/ship-registration-e1623403355938.jpg",
//   },
//   {
//     id: 3,
//     title: "New Ships Designs",
//     sections: [
//       {
//         text: "Embark on your maritime ventures with confidence with our bespoke ship design solutions. Our team of naval architects and engineers will work closely with you to bring your vision to life, delivering innovative designs tailored to your specific needs.",
//         list: [],
//       },
//     ],
//     imageUrl: "https://i.ibb.co/JB6gxNz/photo-1585713181935-d5f622cc2415.webp",
//   },
//   {
//     id: 4,
//     title: "Ballast Water Management Solutions",
//     sections: [
//       {
//         text: "Ballast water management system (BWMS) means any system which processes ballast water to kill, render harmless, or remove organisms. The BWMS includesall ballast water treatment equipment and all associated control and monitoringequipment,We present a cost-effective solution for complying with Ballast Water Management Convention and Non-Applicability of the convention Exemptions ",
//         list: [],
//       },
//     ],
//     imageUrl: "https://i.ibb.co/LDy0zcq/maxresdefault.webp",
//   },
//   {
//     id: 5,
//     title: "CFD Finite Element Analysis",
//     sections: [
//       {
//         text: "A dedicated team of highly qualified and experienced engineers and analysts ensure that all our CFD work is performed to the very highest standards. CFD results are presented in professional engineering reports that are accepted by Classification Societies",
//         list: [],
//       },
//     ],
//     imageUrl:
//       "https://i.ibb.co/yy1RyY8/Marine-ship-CFD-Msc-Cradle-Ansys-Fluent-Siemens-Star-ccm.webp",
//   },
//   {
//     id: 6,
//     title: "Class and Statutory Certification",
//     sections: [
//       {
//         text: "We are approved for the following class and statutory certification under flags of Panama, Panama, Belize, Serra Leone, Bolivia, Georgia, Moldova, Togo, Saint Kitts and Nevis:",

//         list: [
//           "Class Hull and Machinery certification",
//           "International Tonnage certificate",
//           "International load line certificate",
//           "Cargo ship safety equipment certificate",
//           "Cargo ship safety construction certificate",
//           "Cargo ship safety radio certificate",
//           "International oil pollutions prevention certificate",
//           "Document of compliance (ISM certification for companies)",
//           "Safety management certificate (ISM certification for vessels)",
//           "International Ship Security Plan (ISPS Certification)",
//           "Certificate of inspection of crew accommodation",
//           "International air pollution prevention certificate",
//           "International sewage pollution prevention certificate",
//           "Cargo gear certification and load test",
//           "Garbage certificate",
//           "Solid bulk cargo certificate.",
//           "Cargo ship safety certificate for vessels below 500 GRT",
//           "Passenger ship safety certificate",
//         ],
//       },
//     ],
//     imageUrl: "https://i.ibb.co/WHhT6sk/wood-table-business-wooden.webp",
//   },
//   {
//     id: 7,
//     title: "Seafarers Endorsements and Certification",
//     sections: [
//       {
//         text: "Issuance of Certificates of Endorsement (COE), Certificate of competencies (COC) Continuous Discharge Certificate (CDC).",
//         list: [],
//       },
//     ],
//     imageUrl: "https://i.ibb.co/WHhT6sk/wood-table-business-wooden.webp",
//   },
//   {
//     id: 8,
//     title: "Corporations",
//     sections: [
//       {
//         text: "Registration of incorporations /off-shore companies under Panama, Belize, Marshal Island, St.Kitts &Nevies.",
//         list: [],
//       },
//     ],
//     imageUrl:
//       "https://i.ibb.co/k2WgwT5/desktop-wallpaper-business-corporate.webp",
//   },
//   {
//     id: 9,
//     title: "Insurance Cover, Conditions Surveys",
//     sections: [
//       {
//         text: "Protect your maritime assets with comprehensive insurance cover and condition surveys. Our team provides tailored solutions to assess risks and ensure adequate coverage, safeguarding your investments.",
//         list: [],
//       },
//     ],
//     imageUrl: "/images/insurance-cover-conditions-surveys.jpg",
//   },
//   {
//     id: 10,
//     title: "ISM and ISPS Training and Consultancy",
//     sections: [
//       {
//         text: "Enhance safety and security measures with our ISM and ISPS training and consultancy services. Our experienced team provides customized solutions to ensure compliance and mitigate risks for your maritime operations.",
//         list: [],
//       },
//     ],
//     imageUrl: "/images/ism-and-isps-training-and-consultancy.jpg",
//   },
//   {
//     id: 11,
//     title: "Non-Destructive Tests",
//     sections: [
//       {
//         text: "",
//         list: [
//           "UT Thickness Measurements",
//           "Ensure the integrity and safety of your vessel with our non-destructive testing services. Our certified inspectors utilize advanced techniques to detect flaws and defects without causing damage, ensuring optimal performance and longevity.",
//         ],
//       },
//     ],
//     imageUrl: "https://i.ibb.co/TbdMSH2/non-destructive.webp",
//   },
//   {
//     id: 12,
//     title: "On Demand Surveys",
//     sections: [
//       {
//         text: "",
//         list: [
//           "Pre-purchase inspection",
//           "On hire/ Off hire inspection",
//           "Bunker Survey",
//           "Cargo, Hold’s Inspections",
//           "Insurance Cover Surveys",
//           "Conditions Surveys",
//           "UT Thickness Measurement",
//           "Wall/Wash Test",
//           "MARPOL Surveys",
//         ],
//       },
//     ],
//     imageUrl: "https://i.ibb.co/8M91bp0/pexels-photo-669622.webp",
//   },
//   {
//     id: 13,
//     title:
//       "Recreation of Existing Ships Drawings, Calculations, Manuals & Plans",
//     sections: [
//       {
//         text: "Drawings",
//         list: [
//           "Lines Plans",
//           "Construction Drawings",
//           "Machinery, Shafting Layouts",
//           "Shell Expansion",
//           "General Plan",
//           "Capacity Plan",
//           "Fire Control and Safety Plan",
//         ],
//       },
//       {
//         text: "Calculations",
//         list: [
//           "Hydrostatics, Stability, freeboard calculations, tonnage measurements, Dwt Increment, Torsional Vibrations, etc.",
//         ],
//       },
//       {
//         text: "Manuals",
//         list: [
//           "Intact, Damage Stability booklets",
//           "Trim Sounding Tables",
//           "Tonnage, Freeboard measurements",
//           "Cargo Securing Manuals",
//           "SOPEP",
//           "Garbage management plan",
//           "Ship security plan, Cyber Security Manual",
//           "Bulk carrier booklet",
//           "Cow operational manual",
//           "Ballast water management plan",
//           "Fire and safety training manual",
//         ],
//       },
//     ],
//     imageUrl: "https://i.ibb.co/2dbFPQ0/istockphoto-1461594369-612x612.jpg",
//   },
//   {
//     id: 14,
//     title: "EEXI / CII / EPL / OMM / SEEMP PART III – Consultation",
//     sections: [
//       {
//         text: "we provide complete consultation by our Expert Marine Engineers and Naval Architects for MARPOL ANNEX VI Compliance: ",

//         list: [
//           "EEXI Compliance- (Energy Efficiency Existing Ship Index)",
//           "CII Compliance- (Carbon Intensity Indicator)",
//           "EPL- (Engine Power Limitation)",
//           "OMM- (On Board Management Manual)",
//           "SEEMP Part III",
//         ],
//       },
//     ],
//     imageUrl: "https://i.ibb.co/MCNjXHr/Screenshot-2024-01-09-165551.png",
//   },
// ];
// const Services: React.FC = () => {
//   useEffect(() => {
//     Aos.init({
//       duration: 3000,
//     });
//   }, []);
//   const defaultServiceId = 1; // Assuming "Annual Safety Inspections" has ID 1
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [activeService, setActiveService] = useState<number>(defaultServiceId);

//   useEffect(() => {
//     const handleHashChange = () => {
//       const hash = window.location.hash;
//       const id = parseInt(hash.substring(9), 10); // Extracting the service ID from the hash

//       if (!isNaN(id) && id > 0 && id <= servicesData.length) {
//         setActiveService(id);
//       }
//     };

//     // Listen for hash changes
//     window.addEventListener("hashchange", handleHashChange);

//     // Initial check for active service
//     handleHashChange();

//     return () => {
//       // Cleanup function to remove event listener
//       window.removeEventListener("hashchange", handleHashChange);
//     };
//   }, []); // Empty dependency array to run only once on mount

//   const handleServiceClick = (id: number) => {
//     setActiveService(id);
//     window.location.hash = `#service-${id}`; // Update hash in URL
//   };

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   const closeSidebar = () => {
//     setIsSidebarOpen(false);
//   };
//   const selectService = (
//     serviceId: number,
//     event: React.MouseEvent<HTMLAnchorElement>
//   ) => {
//     event.preventDefault(); // Prevent default anchor behavior
//     setActiveService(serviceId); // Set active service
//     window.location.hash = `service-${serviceId}`; // Update hash in URL

//     // Close the sidebar in mobile view
//     if (window.innerWidth <= 768) {
//       setIsSidebarOpen(false);
//     }
//   };

//   function handleButtonClick(): void {
//     throw new Error("Function not implemented.");
//   }
//   const projectData = [
//     {
//       projectTitle: "First Project",
//       projectDescription: [
//         "NAME OF VESSEL:M/V ABDULLAH",
//         "TYPE OF BWTS: OPTIMARIN 190/167",
//       ],

//       imageUrl:
//         "https://i.ibb.co/10fnq2h/Whats-App-Image-2024-01-29-at-14-30-51-57ac9f15.jpg",
//     },
//     {
//       projectTitle: "First Project",
//       projectDescription: [
//         "NAME OF VESSEL:M/V ABDULLAH",
//         "TYPE OF BWTS: OPTIMARIN 190/167",
//       ],

//       imageUrl:
//         "https://i.ibb.co/Rj4MyTw/Whats-App-Image-2024-01-29-at-14-31-35-63280565.jpg",
//     },
//     {
//       projectTitle: "Second Project",
//       projectDescription: [
//         "NAME OF VESSEL:M/V DANIA",
//         "TYPE OF BWTS: DESMI 170",
//       ],
//       imageUrl:
//         "https://i.ibb.co/sg7qYfG/Whats-App-Image-2024-01-29-at-14-33-41-40c46481.jpg",
//     },
//     {
//       projectTitle: "Second Project",
//       projectDescription: [
//         "NAME OF VESSEL:M/V DANIA",
//         "TYPE OF BWTS: DESMI 170",
//       ],
//       imageUrl:
//         "https://i.ibb.co/Fkrsh6t/Whats-App-Image-2024-01-29-at-14-35-11-2424bb8b.jpg",
//     },
//     {
//       projectTitle: "Third Project",
//       projectDescription: [
//         "NAME OF VESSEL:M/V SEA MAJESTY",
//         "TYPE OF BWTS: DESMI 190",
//       ],
//       imageUrl:
//         "https://i.ibb.co/4s9gHxh/Whats-App-Image-2024-01-29-at-14-48-31-6295bd96.jpg",
//     },
//     {
//       projectTitle: "Third Project",
//       projectDescription: [
//         "NAME OF VESSEL:M/V SEA MAJESTY",
//         "TYPE OF BWTS: DESMI 190",
//       ],
//       imageUrl:
//         "  https://i.ibb.co/n6xdhVq/Whats-App-Image-2024-01-29-at-14-52-39-3b4af2da.jpg",
//     },
//     // Add more projects as needed
//   ];
//   return (
//     <>
//       <div className={styles.test}>
//         <div className={styles.resNav}>
//           <button onClick={toggleSidebar} className={styles.toggleButton}>
//             <FontAwesomeIcon
//               icon={isSidebarOpen ? faTimes : faAngleDoubleRight}
//             />
//           </button>
//         </div>
//         <nav
//           className={`${styles.sidebar} ${isSidebarOpen ? styles.open : ""}`}
//         >
//           <button onClick={closeSidebar} className={styles.toggleButton}>
//             <FontAwesomeIcon icon={faTimes} />
//           </button>
//           <h1 className={styles.logo}>our services</h1>

//           <div className={styles.menuContent}>
//             <ul className={styles.menuItems}>
//               {servicesData.map((service) => (
//                 <li className={styles.item} key={service.id}>
//                   <Link
//                     href={`#service-${service.id}`}
//                     className={`${styles.serviceLink} ${
//                       activeService === service.id ? styles.activeService : ""
//                     }`}
//                     onClick={(event) => selectService(service.id, event)}
//                   >
//                     {service.title}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </nav>
//         <main className={styles.main}>
//           {activeService !== null && (
//             <section
//               id={`service-${activeService}`}
//               key={activeService}
//               className={`${styles.serviceSection} ${styles.activeService}`}
//             >
//               <h2 data-aos="fade-down">
//                 {servicesData[activeService - 1].title}
//               </h2>
//               <div className={styles.serviceContent}>
//                 <div data-aos="fade-up" className={styles.serviceImage}>
//                   <img
//                     src={servicesData[activeService - 1].imageUrl}
//                     alt={servicesData[activeService - 1].title}
//                   />
//                 </div>
//                 <div>{/* <p>{servicesData[activeService - 1].text}</p> */}</div>
//                 {/* Render the list if it exists */}
//                 {servicesData[activeService - 1].sections.map(
//                   (section, index) => (
//                     <div key={index} data-aos="zoom-in" className={styles.lol}>
//                       <h3 className={styles.serviceText}>{section.text}</h3>
//                       <ul className={styles.serviceList}>
//                         {section.list.map((item, itemIndex) => (
//                           <li key={itemIndex}>{item}</li>
//                         ))}
//                       </ul>
//                     </div>
//                   )
//                 )}
//                 {servicesData[activeService - 1].title ===
//                   "Ship Registration Services" && (
//                   <ImageButton imageUrl={""}></ImageButton>
//                 )}
//                 {servicesData[activeService - 1].title ===
//                   "Ballast Water Management Solutions" && (
//                   <ProjectButton projectData={projectData} />
//                 )}
//               </div>
//             </section>
//           )}
//         </main>
//       </div>
//     </>
//   );
// };

// export default Services;
// pages/services.js
import React, { useState, useEffect, useRef } from "react";
import styles from "../../styles/pages/services.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import ImageButton from "../../../components/services/imageButton";
import ProjectButton from "../../../components/services/projectsButton";
interface Service {
  id: number;
  title: string;
  sections: { text: string; list: string[] }[];
  imageUrl: string;
}

const servicesData: Service[] = [
  {
    id: 1,
    title: "Annual Safety Inspections",
    sections: [
      {
        text: "Ensure the safety and compliance of your vessel with our comprehensive annual safety inspections. Our experienced inspectors will thoroughly assess your vessel's condition and equipment to identify and mitigate potential risks.",
        list: [],
      },
    ],

    imageUrl:
      "https://i.ibb.co/7Y6sST3/How-To-Build-A-Safety-Inspection-Checklist-7-Steps-768x512.jpg",
  },
  {
    id: 2,
    title: "Ship Registration Services",
    sections: [
      {
        text: "",
        list: [
          "Flag registration including processing of Navigation license, Ship station license, Minimum safe manning and Continuous synopsis record under Panama, Serra Leone, Bolivia, Georgia, Moldova and St. Vincent, Togo, Belize, Dominica, Malta, and Saint Kitts and Nevis",
          "Registration of mortgages",
          "Registration of title",
          "Change of ownership and change of name",
          "Deletion certificates",
          "Free of encumbrance certificate",
        ],
      },
    ],
    imageUrl: "https://i.ibb.co/D4ksJGw/ship-registration-e1623403355938.jpg",
  },
  {
    id: 3,
    title: "New Ships Designs",
    sections: [
      {
        text: "Embark on your maritime ventures with confidence with our bespoke ship design solutions. Our team of naval architects and engineers will work closely with you to bring your vision to life, delivering innovative designs tailored to your specific needs.",
        list: [],
      },
    ],
    imageUrl: "https://i.ibb.co/JB6gxNz/photo-1585713181935-d5f622cc2415.webp",
  },
  {
    id: 4,
    title: "Ballast Water Management Solutions",
    sections: [
      {
        text: "Ballast water management system (BWMS) means any system which processes ballast water to kill, render harmless, or remove organisms. The BWMS includesall ballast water treatment equipment and all associated control and monitoringequipment,We present a cost-effective solution for complying with Ballast Water Management Convention and Non-Applicability of the convention Exemptions ",
        list: [],
      },
    ],
    imageUrl: "https://i.ibb.co/LDy0zcq/maxresdefault.webp",
  },
  {
    id: 5,
    title: "CFD Finite Element Analysis",
    sections: [
      {
        text: "A dedicated team of highly qualified and experienced engineers and analysts ensure that all our CFD work is performed to the very highest standards. CFD results are presented in professional engineering reports that are accepted by Classification Societies",
        list: [],
      },
    ],
    imageUrl:
      "https://i.ibb.co/yy1RyY8/Marine-ship-CFD-Msc-Cradle-Ansys-Fluent-Siemens-Star-ccm.webp",
  },
  {
    id: 6,
    title: "Class and Statutory Certification",
    sections: [
      {
        text: "We are approved for the following class and statutory certification under flags of Panama, Panama, Belize, Serra Leone, Bolivia, Georgia, Moldova, Togo, Saint Kitts and Nevis:",

        list: [
          "Class Hull and Machinery certification",
          "International Tonnage certificate",
          "International load line certificate",
          "Cargo ship safety equipment certificate",
          "Cargo ship safety construction certificate",
          "Cargo ship safety radio certificate",
          "International oil pollutions prevention certificate",
          "Document of compliance (ISM certification for companies)",
          "Safety management certificate (ISM certification for vessels)",
          "International Ship Security Plan (ISPS Certification)",
          "Certificate of inspection of crew accommodation",
          "International air pollution prevention certificate",
          "International sewage pollution prevention certificate",
          "Cargo gear certification and load test",
          "Garbage certificate",
          "Solid bulk cargo certificate.",
          "Cargo ship safety certificate for vessels below 500 GRT",
          "Passenger ship safety certificate",
        ],
      },
    ],
    imageUrl: "https://i.ibb.co/WHhT6sk/wood-table-business-wooden.webp",
  },
  {
    id: 7,
    title: "Seafarers Endorsements and Certification",
    sections: [
      {
        text: "Issuance of Certificates of Endorsement (COE), Certificate of competencies (COC) Continuous Discharge Certificate (CDC).",
        list: [],
      },
    ],
    imageUrl: "https://i.ibb.co/Fqjg3vH/R-1.jpg",
  },
  {
    id: 8,
    title: "Corporations",
    sections: [
      {
        text: "Registration of incorporations /off-shore companies under Panama, Belize, Marshal Island, St.Kitts &Nevies.",
        list: [],
      },
    ],
    imageUrl:
      " https://i.ibb.co/FsdWvWp/The-Problems-with-Corporations-and-Phantom-Wealth-feat.jpg",
    // imageUrl:
    //   "https://i.ibb.co/k2WgwT5/desktop-wallpaper-business-corporate.webp",
  },
  {
    id: 9,
    title: "Insurance Cover, Conditions Surveys",
    sections: [
      {
        text: "Protect your maritime assets with comprehensive insurance cover and condition surveys. Our team provides tailored solutions to assess risks and ensure adequate coverage, safeguarding your investments.",
        list: [],
      },
    ],
    imageUrl: "https://i.ibb.co/fdJqdZC/635719714858770000.jpg",
    // imageUrl: "https://i.ibb.co/GPD0y4g/OIP-1.jpg",
  },
  {
    id: 10,
    title: "ISM and ISPS Training and Consultancy",
    sections: [
      {
        text: "Enhance safety and security measures with our ISM and ISPS training and consultancy services. Our experienced team provides customized solutions to ensure compliance and mitigate risks for your maritime operations.",
        list: [],
      },
    ],
    imageUrl:
      "https://i.ibb.co/Y8Gfzcx/b1752cbf-3b3f-4503-9c3f-2a56007343c8-2.jpg",
  },
  {
    id: 11,
    title: "Non-Destructive Tests",
    sections: [
      {
        text: "",
        list: [
          "UT Thickness Measurements",
          "Ensure the integrity and safety of your vessel with our non-destructive testing services. Our certified inspectors utilize advanced techniques to detect flaws and defects without causing damage, ensuring optimal performance and longevity.",
        ],
      },
    ],
    imageUrl: "https://i.ibb.co/TbdMSH2/non-destructive.webp",
  },
  {
    id: 12,
    title: "On Demand Surveys",
    sections: [
      {
        text: "",
        list: [
          "Pre-purchase inspection",
          "On hire/ Off hire inspection",
          "Bunker Survey",
          "Cargo, Hold’s Inspections",
          "Insurance Cover Surveys",
          "Conditions Surveys",
          "UT Thickness Measurement",
          "Wall/Wash Test",
          "MARPOL Surveys",
        ],
      },
    ],
    imageUrl:
      "https://i.ibb.co/BTqP7dc/download-it-budget-stress-hardware-maintenance-hero.jpg",
    // imageUrl: "https://i.ibb.co/8M91bp0/pexels-photo-669622.webp",
  },
  {
    id: 13,
    title:
      "Recreation of Existing Ships Drawings, Calculations, Manuals & Plans",
    sections: [
      {
        text: "Drawings",
        list: [
          "Lines Plans",
          "Construction Drawings",
          "Machinery, Shafting Layouts",
          "Shell Expansion",
          "General Plan",
          "Capacity Plan",
          "Fire Control and Safety Plan",
        ],
      },
      {
        text: "Calculations",
        list: [
          "Hydrostatics, Stability, freeboard calculations, tonnage measurements, Dwt Increment, Torsional Vibrations, etc.",
        ],
      },
      {
        text: "Manuals",
        list: [
          "Intact, Damage Stability booklets",
          "Trim Sounding Tables",
          "Tonnage, Freeboard measurements",
          "Cargo Securing Manuals",
          "SOPEP",
          "Garbage management plan",
          "Ship security plan, Cyber Security Manual",
          "Bulk carrier booklet",
          "Cow operational manual",
          "Ballast water management plan",
          "Fire and safety training manual",
        ],
      },
    ],
    imageUrl: "https://i.ibb.co/PYyfsCG/engineering.jpg",
    // imageUrl: "https://i.ibb.co/2dbFPQ0/istockphoto-1461594369-612x612.jpg",
  },
  {
    id: 14,
    title: "EEXI / CII / EPL / OMM / SEEMP PART III – Consultation",
    sections: [
      {
        text: "we provide complete consultation by our Expert Marine Engineers and Naval Architects for MARPOL ANNEX VI Compliance: ",

        list: [
          "EEXI Compliance- (Energy Efficiency Existing Ship Index)",
          "CII Compliance- (Carbon Intensity Indicator)",
          "EPL- (Engine Power Limitation)",
          "OMM- (On Board Management Manual)",
          "SEEMP Part III",
        ],
      },
    ],
    imageUrl: "https://i.ibb.co/9vxvhSX/maxresdefault.jpg",
    // imageUrl: "https://i.ibb.co/MCNjXHr/Screenshot-2024-01-09-165551.png",
  },
];

const projectData = [
  {
    projectTitle: "First Project",
    projectDescription: [
      "NAME OF VESSEL:M/V ABDULLAH",
      "TYPE OF BWTS: OPTIMARIN 190/167",
    ],

    imageUrl:
      "https://i.ibb.co/10fnq2h/Whats-App-Image-2024-01-29-at-14-30-51-57ac9f15.jpg",
  },
  {
    projectTitle: "First Project",
    projectDescription: [
      "NAME OF VESSEL:M/V ABDULLAH",
      "TYPE OF BWTS: OPTIMARIN 190/167",
    ],

    imageUrl:
      "https://i.ibb.co/Rj4MyTw/Whats-App-Image-2024-01-29-at-14-31-35-63280565.jpg",
  },
  {
    projectTitle: "Second Project",
    projectDescription: ["NAME OF VESSEL:M/V DANIA", "TYPE OF BWTS: DESMI 170"],
    imageUrl:
      "https://i.ibb.co/sg7qYfG/Whats-App-Image-2024-01-29-at-14-33-41-40c46481.jpg",
  },
  {
    projectTitle: "Second Project",
    projectDescription: ["NAME OF VESSEL:M/V DANIA", "TYPE OF BWTS: DESMI 170"],
    imageUrl:
      "https://i.ibb.co/Fkrsh6t/Whats-App-Image-2024-01-29-at-14-35-11-2424bb8b.jpg",
  },
  {
    projectTitle: "Third Project",
    projectDescription: [
      "NAME OF VESSEL:M/V SEA MAJESTY",
      "TYPE OF BWTS: DESMI 190",
    ],
    imageUrl:
      "https://i.ibb.co/4s9gHxh/Whats-App-Image-2024-01-29-at-14-48-31-6295bd96.jpg",
  },
  {
    projectTitle: "Third Project",
    projectDescription: [
      "NAME OF VESSEL:M/V SEA MAJESTY",
      "TYPE OF BWTS: DESMI 190",
    ],
    imageUrl:
      "  https://i.ibb.co/n6xdhVq/Whats-App-Image-2024-01-29-at-14-52-39-3b4af2da.jpg",
  },
  // Add more projects as needed
];

const Services: React.FC = () => {
  const [activeService, setActiveService] = useState<number | null>(null);
  const activeServiceRef = useRef<HTMLDivElement>(null);
  const initialScrollDone = useRef<boolean>(false);

  useEffect(() => {
    if (!initialScrollDone.current && activeServiceRef.current) {
      const scrollTop = activeServiceRef.current.offsetTop - 110;
      window.scrollTo({ top: scrollTop, behavior: "smooth" });
      initialScrollDone.current = true;
    }
  }, [activeService]);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      const id = parseInt(hash.substring(9), 10);
      if (!isNaN(id) && id > 0 && id <= servicesData.length) {
        setActiveService(id);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const handleServiceClick = (
    id: number,
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    // Check if the clicked service is already active
    if (activeService === id) {
      return; // Do nothing
    }
    setActiveService(id);
    window.location.hash = `service-${id}`;
    event.preventDefault(); // Prevent default behavior of scrolling to top
  };

  return (
    <div className={styles.servicesContainer}>
      <div className={styles.underlineText}>
        <h1 className={styles.title}>Our Services</h1>
      </div>
      <div className={styles.servicesGrid}>
        {servicesData.map((service) => (
          <div
            ref={activeService === service.id ? activeServiceRef : null}
            key={service.id}
            className={`${styles.service} ${
              activeService === service.id ? styles.active : ""
            }`}
          >
            <div
              className={styles.serviceLabel}
              onClick={(e) => handleServiceClick(service.id, e)} // Pass event to the handler
            >
              <div className={styles.serviceTitle}>{service.title}</div>
              <FontAwesomeIcon
                icon={
                  activeService === service.id ? faChevronUp : faChevronDown
                }
                className={styles.serviceIcon}
              />
            </div>
            <div
              className={`${styles.serviceContent} ${
                activeService === service.id ? styles.serviceContentActive : ""
              }`}
            >
              {service.sections.map((section, index) => (
                <div key={index} className={styles.test}>
                  <p>{section.text}</p>
                  <ul>
                    {section.list.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                  {/* Render Image Button in "Ship Registration Services" */}
                  {service.id === 2 && <ImageButton imageUrl={""} />}
                  {/* Render Project Button in "Ballast Water Management Solutions" */}
                  {service.id === 4 && (
                    <ProjectButton projectData={projectData} />
                  )}
                </div>
              ))}
              <img
                src={service.imageUrl}
                alt={service.title}
                className={styles.serviceImage}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

// import React, { useEffect, useRef, useState } from "react";
// import styles from "./imageButton.module.scss"; // Import your module SCSS file

// interface CustomButton1Props {
//   imageUrl: string; // Image URL to display in the popup
// }

// const ImageButton: React.FC<CustomButton1Props> = ({ imageUrl }) => {
//   const [isPopupOpen, setIsPopupOpen] = useState(false);
//   const popupRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     // Function to handle clicks outside the popup
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         popupRef.current &&
//         !popupRef.current.contains(event.target as Node)
//       ) {
//         // Click outside the popup, close it
//         setIsPopupOpen(false);
//       }
//     };

//     // Add event listener when the popup is open
//     if (isPopupOpen) {
//       document.addEventListener("mousedown", handleClickOutside);
//       // Apply blur effect to the main content
//       document.body.style.filter = "blur(4px)";
//     } else {
//       // Remove event listener when the popup is closed
//       document.removeEventListener("mousedown", handleClickOutside);
//       // Remove blur effect
//       document.body.style.filter = "none";
//     }

//     // Cleanup function
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//       // Remove blur effect
//       document.body.style.filter = "none";
//     };
//   }, [isPopupOpen]);

//   const togglePopup = () => {
//     setIsPopupOpen(!isPopupOpen);
//   };

//   return (
//     <>
//       <button onClick={togglePopup} className={styles.clickButton}>
//         Our Registration
//       </button>
//       {isPopupOpen && (
//         <div className={styles.popupOverlay}>
//           <div className={styles.popupContent} ref={popupRef}>
//             {/* <button onClick={togglePopup}>Close</button> */}
//             <img
//               src={"https://i.ibb.co/CW2g8Xm/Copy-of-Untitled.png"}
//               alt="Popup Image"
//             />
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default ImageButton;
