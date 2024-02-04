"use client";
4;
import React, { useState, useEffect } from "react";
import styles from "../../styles/pages/services.module.scss";
import AsideComponent from "../../../components/services/aside";
import MainComponent from "../../../components/services/main";
import Popup from "../../../components/common/popup";

const mainData = [
  {
    logo: "https://img.icons8.com/ios/50/000000/signing-a-document.png",
    title: "Ship registration services",
    contentList: [
      "Flag registration including processing of Navigation license, Ship station license, Minimum safe manning and Continuous synopsis record under Panama, Serra Leone, Bolivia, Georgia, Moldova and St. Vincent, Togo, Belize, Dominica, Malta, and Saint Kitts and Nevis",
      "Registration of mortgages",
      "Registration of title",
      "Change of ownership and change of name",
      "Deletion certificates",
      "Free of encumbrance certificate",
    ],
    img: "https://i.ibb.co/D4ksJGw/ship-registration-e1623403355938.jpg",
    showPopup: false,
  },
  {
    logo: "https://img.icons8.com/ios/50/000000/cargo-ship.png",
    title: "New ships designs",
    contentPara:
      "We offer a complete set of design with building supervision at owner request.",
    img: "https://i.ibb.co/JB6gxNz/photo-1585713181935-d5f622cc2415.webp",
    showPopup: false,
  },
  {
    logo: "https://img.icons8.com/ios/50/000000/commercial-development-management.png",
    title: "Ballast Water Management Solutions",
    contentPara:
      "Ballast water management system (BWMS) means any system which processes ballast water to kill, render harmless, or remove organisms. The BWMS includesall ballast water treatment equipment and all associated control and monitoringequipment,We present a cost-effective solution for complying with Ballast Water Management Convention and Non-Applicability of the convention Exemptions ",
    img: "https://i.ibb.co/LDy0zcq/maxresdefault.webp",
    showPopup: true,
    imgPop: [
      "https://i.ibb.co/10fnq2h/Whats-App-Image-2024-01-29-at-14-30-51-57ac9f15.jpg",
      "https://i.ibb.co/Rj4MyTw/Whats-App-Image-2024-01-29-at-14-31-35-63280565.jpg",
    ],
    textPop: [
      "NAME OF VESSEL : M/V ABDULLAH ",
      "TYPE OF BWTS: OPTIMARIN 190/167",
      
    ],
   
  },
  {
    logo: "https://img.icons8.com/ios/50/000000/case-study.png",
    title: "CFD Finite Element Analysis",
    contentPara:
      "A dedicated team of highly qualified and experienced engineers and analysts ensure that all our CFD work is performed to the very highest standards. CFD results are presented in professional engineering reports that are accepted by Classification Societies",
    img: "https://i.ibb.co/yy1RyY8/Marine-ship-CFD-Msc-Cradle-Ansys-Fluent-Siemens-Star-ccm.webp",
    showPopup: false,
  },
  {
    logo: "https://img.icons8.com/ios/50/000000/certificate--v1.png",
    title: "Class and statutory certification",
    contentPara:
      "We are approved for the following class and statutory certification under flags of Panama, Panama, Belize, Serra Leone, Bolivia, Georgia, Moldova, Togo, Saint Kitts and Nevis:",
    contentList: [
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
    img: "https://i.ibb.co/WHhT6sk/wood-table-business-wooden.webp",
    showPopup: false,
  },
  {
    logo: "https://img.icons8.com/ios/50/000000/contract.png",
    title: "Seafarers endorsements and certification",
    contentPara:
      "Issuance of Certificates of Endorsement (COE), Certificate of competencies (COC) Continuous Discharge Certificate (CDC).",
    img: "https://i.ibb.co/WHhT6sk/wood-table-business-wooden.webp",
    showPopup: false,
  },
  {
    logo: "https://img.icons8.com/ios/50/000000/related-companies.png",
    title: "Corporations",
    contentPara:
      "Registration of incorporations /off-shore companies under Panama, Belize, Marshal Island, St.Kitts &Nevies.",
    img: "https://i.ibb.co/k2WgwT5/desktop-wallpaper-business-corporate.webp",
    showPopup: false,
  },
  {
    logo: "https://img.icons8.com/ios/50/000000/manhole-cover.png",
    title: "Insurance Cover, conditions surveys",
    content: "",
    img: "",
    showPopup: false,
  },
  {
    logo: "https://img.icons8.com/ios/50/000000/training.png",
    title: "ISM and ISPS training and consultancy",
    content: "",
    img: "",
    showPopup: false,
  },

  {
    logo: "https://img.icons8.com/ios/50/000000/advanced-search.png",
    title: "Non-destructive tests",
    contentList: ["UT Thickness Measurements"],
    img: "https://i.ibb.co/TbdMSH2/non-destructive.webp",
    showPopup: false,
  },

  {
    logo: "https://img.icons8.com/ios/50/000000/strike.png",
    title: "On demand surveys",
    contentList: [
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
    img: "https://i.ibb.co/8M91bp0/pexels-photo-669622.webp",
    showPopup: false,
  },
  {
    logo: "https://img.icons8.com/ios/50/000000/drafting-compass.png",
    title:
      "Recreation of existing ships drawings, calculations, manuals & plans",
    contentListOne: [
      "Lines Plans",
      "Construction Drawings",
      "Machinery, Shafting Layouts",
      "Shell Expansion",
      "General Plan",
      "Capacity Plan",
      "Fire Control and Safety Plan",
    ],
    contentListTwo: [
      "Hydrostatics, Stability, freeboard calculations, tonnage measurements, Dwt Increment, Torsional Vibrations, etc.",
    ],
    contentListThree: [
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
    img: "https://i.ibb.co/2dbFPQ0/istockphoto-1461594369-612x612.jpg",
    showPopup: false,
  },
  {
    logo: "https://img.icons8.com/ios/50/000000/commercial-development-management.png",
    title: "EEXI / CII / EPL / OMM / SEEMP PART III – Consultation",
    contentPara:
      "we provide complete consultation by our Expert Marine Engineers and Naval Architects for MARPOL ANNEX VI Compliance: ",
    contentList: [
      "EEXI Compliance- (Energy Efficiency Existing Ship Index)",
      "CII Compliance- (Carbon Intensity Indicator)",
      "EPL- (Engine Power Limitation)",
      "OMM- (On Board Management Manual)",
      "SEEMP Part III",
    ],
    img: "https://i.ibb.co/MCNjXHr/Screenshot-2024-01-09-165551.png",
    showPopup: false,
  },
  {
    logo: "https://img.icons8.com/ios/50/000000/maintenance--v1.png",
    title: "Annual Safety Inspections",
    contentPara:
      "Our surveyors are duly authorized form Panama, Belize, Togo, Malta, Dominica Maritime Authority to carry out Annual Safety Inspection for aforementioned administrations.",
    img: "https://i.ibb.co/F0C4drm/istockphoto-1658925458-612x612.webp",
    showPopup: false,
  },
];
const imagePaths = [
  "https://placekitten.com/200/200",
  "https://placekitten.com/201/201",
  "https://placekitten.com/202/202",
  "/MV ABDULLAH F.jpg",
];

const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Annual Safety Inspections");

  // Function to extract the service name from the URL hash
  const getServiceFromHash = () => {
    const hash = window.location.hash.substring(1);
    return decodeURIComponent(hash);
  };

  // Effect to handle initial load and hash changes
  useEffect(() => {
    // Check if there's a hash on initial load
    const initialService = getServiceFromHash();
    if (
      initialService &&
      mainData.some((data) => data.title === initialService)
    ) {
      setActiveTab(initialService);
    }

    // Add event listener for hash changes
    const handleHashChange = () => {
      const newService = getServiceFromHash();
      if (newService && mainData.some((data) => data.title === newService)) {
        setActiveTab(newService);
      }
    };

    window.addEventListener("hashchange", handleHashChange);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []); // Empty dependency array to run the effect only once on mount

  // Function to handle service selection
  const openService = (
    _evt: React.MouseEvent<HTMLButtonElement>,
    service: string
  ) => {
    setActiveTab(service);

    // Update the hash dynamically based on the selected service
    window.location.hash = encodeURIComponent(service);
  };

  const currentService = mainData.find(
    (service) => service.title === activeTab
  );

  return (
    <>
      <div className={styles["focus-in-expand"]}>Services</div>
      <div className={styles.page}>
        <div className={styles.tab}>
          <AsideComponent
            mainData={mainData}
            activeTab={activeTab}
            openService={openService}
          />
          <div className={styles.pop}>
            <MainComponent
              mainData={mainData}
              activeTab={activeTab}
              openService={openService}
            />
            {currentService && currentService.showPopup && (
              <Popup
                key={currentService.title} // Make sure to provide a unique key for each Popup
                imagePaths={currentService.imgPop}
                content={currentService.textPop}
                onClose={() => console.log("Popup closed")}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
