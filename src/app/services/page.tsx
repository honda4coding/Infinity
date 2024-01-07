"use client";
import React, { useState } from "react";
import styles from "../../styles/pages/services.module.scss";
import Image from "next/image";
import AsideComponent from "../../../components/services/aside";
import MainComponent from "../../../components/services/main";

const mainData = [
  {
    logo: "https://img.icons8.com/ios/50/000000/maintenance--v1.png",
    titile: "Annual Safety Inspections",
    contantPara:
      "Our surveyors are duly authorized form Panama, Belize, Togo, Malta, Dominica Maritime Authority to carry out Annual Safety Inspection for aforementioned administrations.",
    img: "https://i.ibb.co/F0C4drm/istockphoto-1658925458-612x612.webp",
  },
  {
    logo: "https://img.icons8.com/ios/50/000000/commercial-development-management.png",
    titile: "Ballast Water Management Solutions",
    contantPara:
      "Ballast water management system (BWMS) means any system which processes ballast water to kill, render harmless, or remove organisms. The BWMS includesall ballast water treatment equipment and all associated control and monitoringequipment,We present a cost-effective solution for complying with Ballast Water Management Convention and Non-Applicability of the convention Exemptions ",
    img: "https://i.ibb.co/LDy0zcq/maxresdefault.webp",
  },
  {
    logo: "https://img.icons8.com/ios/50/000000/case-study.png",
    titile: "CFD Finite Element Analysis",
    contantPara:
      "A dedicated team of highly qualified and experienced engineers and analysts ensure that all our CFD work is performed to the very highest standards. CFD results are presented in professional engineering reports that are accepted by Classification Societies",
    img: "https://i.ibb.co/yy1RyY8/Marine-ship-CFD-Msc-Cradle-Ansys-Fluent-Siemens-Star-ccm.webp",
  },
  {
    logo: "https://img.icons8.com/ios/50/000000/certificate--v1.png",
    titile: "Class and statutory certification",
    contantPara:
      "We are approved for the following class and statutory certification under flags of Panama, Panama, Belize, Serra Leone, Bolivia, Georgia, Moldova, Togo, Saint Kitts and Nevis:",
    contantList: [
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
  },
  {
    logo: "https://img.icons8.com/ios/50/000000/related-companies.png",
    titile: "Corporations",
    contantPara:
      "Registration of incorporations /off-shore companies under Panama, Belize, Marshal Island, St.Kitts &Nevies.",
    img: "https://i.ibb.co/k2WgwT5/desktop-wallpaper-business-corporate.webp",
  },
  {
    logo: "https://img.icons8.com/ios/50/000000/manhole-cover.png",
    titile: "Insurance Cover, conditions surveys",
    contant: "",
    img: "",
  },
  {
    logo: "https://img.icons8.com/ios/50/000000/training.png",
    titile: "ISM and ISPS training and consultancy",
    contant: "",
    img: "",
  },

  {
    logo: "https://img.icons8.com/ios/50/000000/cargo-ship.png",
    titile: "New ships designs",
    contantPara:
      "We offer a complete set of design with building supervision at owner request.",
    img: "https://i.ibb.co/JB6gxNz/photo-1585713181935-d5f622cc2415.webp",
  },
  {
    logo: "https://img.icons8.com/ios/50/000000/advanced-search.png",
    titile: "Non-destructive tests",
    contantList: ["UT Thickness Measurements"],
    img: "https://i.ibb.co/TbdMSH2/non-destructive.webp",
  },
  {
    logo: "https://img.icons8.com/ios/50/000000/strike.png",
    titile: "On demand surveys",
    contantList: [
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
  },
  {
    logo: "https://img.icons8.com/ios/50/000000/drafting-compass.png",
    titile:
      "Recreation of existing ships drawings, calculations, manuals & plans",
    contantListOne: [
      "Lines Plans",
      "Construction Drawings",
      "Machinery, Shafting Layouts",
      "Shell Expansion",
      "General Plan",
      "Capacity Plan",
      "Fire Control and Safety Plan",
    ],
    contantListTwo: [
      "Hydrostatics, Stability, freeboard calculations, tonnage measurements, Dwt Increment, Torsional Vibrations, etc.",
    ],
    contantListThree: [
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
  },
  {
    logo: "https://img.icons8.com/ios/50/000000/contract.png",
    titile: "Seafarers endorsements and certification",
    contantPara:
      "Issuance of Certificates of Endorsement (COE), Certificate of competencies (COC) Continuous Discharge Certificate (CDC).",
    img: "https://i.ibb.co/WHhT6sk/wood-table-business-wooden.webp",
  },
  {
    logo: "https://img.icons8.com/ios/50/000000/signing-a-document.png",
    titile: "Ship registration services",
    contantList: [
      "Flag registration including processing of Navigation license, Ship station license, Minimum safe manning and Continuous synopsis record under Panama, Serra Leone, Bolivia, Georgia, Moldova and St. Vincent, Togo, Belize, Dominica, Malta, and Saint Kitts and Nevis",
      "Registration of mortgages",
      "Registration of title",
      "Change of ownership and change of name",
      "Deletion certificates",
      "Free of encumbrance certificate",
    ],
    img: "https://i.ibb.co/D4ksJGw/ship-registration-e1623403355938.jpg",
  },
];

const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Annual Safety Inspections");
  function openServ(evt: React.MouseEvent<HTMLButtonElement>, Serv: string) {
    setActiveTab(Serv);
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
  }

  return (
    <>
      <div className={styles.tab}>
        {/* side bar */}
        <AsideComponent
          mainData={mainData}
          activeTab={activeTab}
          openServ={openServ}
        />

        {/* Contant of tabs: */}
        <MainComponent
          mainData={mainData}
          activeTab={activeTab}
          openServ={openServ}
        />
      </div>
    </>
  );
};

export default Services;
