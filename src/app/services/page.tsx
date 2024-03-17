"use client";
import Link from "next/link"; // Import Link from next/link
import React, { useEffect, useState } from "react";
import styles from "../../styles/pages/services.module.scss"; // Import
import { faAngleDoubleRight, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Aos from "aos";
import "aos/dist/aos.css";
interface Service {
  id: number;
  title: string;
  text: string[];
  imageUrl: string;
  buttonText?: string;
}
const servicesData: Service[] = [
  {
    id: 1,
    title: "🧾 Annual Safety Inspections",
    text: [
      "Ensure the safety and compliance of your vessel with our comprehensive annual safety inspections. Our experienced inspectors will thoroughly assess your vessel's condition and equipment to identify and mitigate potential risks.",
    ],
    imageUrl: "https://i.ibb.co/F0C4drm/istockphoto-1658925458-612x612.webp",
    buttonText: "Learn More",
  },
  {
    id: 2,
    title: "🛳 Ship Registration Services",
    text: [
      "Flag registration including processing of Navigation license, Ship station license, Minimum safe manning and Continuous synopsis record under Panama, Serra Leone, Bolivia, Georgia, Moldova and St. Vincent, Togo, Belize, Dominica, Malta, and Saint Kitts and Nevis",
      "Registration of mortgages",
      "Registration of title",
      "Change of ownership and change of name",
      "Deletion certificates",
      "Free of encumbrance certificate",
    ],
    imageUrl: "https://i.ibb.co/D4ksJGw/ship-registration-e1623403355938.jpg",
    buttonText: "Register Now",
  },
  {
    id: 3,
    title: "⚓️ New Ships Designs",
    text: [
      "Embark on your maritime ventures with confidence with our bespoke ship design solutions. Our team of naval architects and engineers will work closely with you to bring your vision to life, delivering innovative designs tailored to your specific needs.",
    ],
    imageUrl: "https://i.ibb.co/JB6gxNz/photo-1585713181935-d5f622cc2415.webp",
    buttonText: "Explore Designs",
  },
  {
    id: 4,
    title: "🛟 Ballast Water Management Solutions",
    text: [
      "Ballast water management system (BWMS) means any system which processes ballast water to kill, render harmless, or remove organisms. The BWMS includesall ballast water treatment equipment and all associated control and monitoringequipment,We present a cost-effective solution for complying with Ballast Water Management Convention and Non-Applicability of the convention Exemptions ",
    ],
    imageUrl: "https://i.ibb.co/LDy0zcq/maxresdefault.webp",
    buttonText: "Discover Solutions",
  },
  {
    id: 5,
    title: "🪝 CFD Finite Element Analysis",
    text: [
      "A dedicated team of highly qualified and experienced engineers and analysts ensure that all our CFD work is performed to the very highest standards. CFD results are presented in professional engineering reports that are accepted by Classification Societies",
    ],
    imageUrl:
      "https://i.ibb.co/yy1RyY8/Marine-ship-CFD-Msc-Cradle-Ansys-Fluent-Siemens-Star-ccm.webp",
    buttonText: "Learn More",
  },
  {
    id: 6,
    title: "⛵️ Class and Statutory Certification",
    text: [
      "We are approved for the following class and statutory certification under flags of Panama, Panama, Belize, Serra Leone, Bolivia, Georgia, Moldova, Togo, Saint Kitts and Nevis:",
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
    imageUrl: "https://i.ibb.co/WHhT6sk/wood-table-business-wooden.webp",
    buttonText: "View Certifications",
  },
  {
    id: 7,
    title: "🌊 Seafarers Endorsements and Certification",
    text: [
      "Issuance of Certificates of Endorsement (COE), Certificate of competencies (COC) Continuous Discharge Certificate (CDC).",
    ],
    imageUrl: "https://i.ibb.co/WHhT6sk/wood-table-business-wooden.webp",
    buttonText: "Get Certified",
  },
  {
    id: 8,
    title: "📰 Corporations",
    text: [
      "Registration of incorporations /off-shore companies under Panama, Belize, Marshal Island, St.Kitts &Nevies.",
    ],
    imageUrl:
      "https://i.ibb.co/k2WgwT5/desktop-wallpaper-business-corporate.webp",
    buttonText: "Explore Services",
  },
  {
    id: 9,
    title: "📑 Insurance Cover, Conditions Surveys",
    text: [
      "Protect your maritime assets with comprehensive insurance cover and condition surveys. Our team provides tailored solutions to assess risks and ensure adequate coverage, safeguarding your investments.",
    ],
    imageUrl: "/images/insurance-cover-conditions-surveys.jpg",
    buttonText: "Get Insured",
  },
  {
    id: 10,
    title: "📜 ISM and ISPS Training and Consultancy",
    text: [
      "Enhance safety and security measures with our ISM and ISPS training and consultancy services. Our experienced team provides customized solutions to ensure compliance and mitigate risks for your maritime operations.",
    ],
    imageUrl: "/images/ism-and-isps-training-and-consultancy.jpg",
    buttonText: "Enroll Now",
  },
  {
    id: 11,
    title: "📋 Non-Destructive Tests",
    text: [
      "Ensure the integrity and safety of your vessel with our non-destructive testing services. Our certified inspectors utilize advanced techniques to detect flaws and defects without causing damage, ensuring optimal performance and longevity.",
    ],
    imageUrl: "https://i.ibb.co/TbdMSH2/non-destructive.webp",
    buttonText: "Learn More",
  },
  {
    id: 12,
    title: "📃 On Demand Surveys",
    text: [
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
    imageUrl: "https://i.ibb.co/8M91bp0/pexels-photo-669622.webp",
    buttonText: "Request Survey",
  },
  {
    id: 13,
    title:
      "📝 Recreation of Existing Ships Drawings, Calculations, Manuals & Plans",
    text: [
      "Lines Plans",
      "Construction Drawings",
      "Machinery, Shafting Layouts",
      "Shell Expansion",
      "General Plan",
      "Capacity Plan",
      "Fire Control and Safety Plan",
      "Hydrostatics, Stability, freeboard calculations, tonnage measurements, Dwt Increment, Torsional Vibrations, etc.",
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
    imageUrl: "https://i.ibb.co/2dbFPQ0/istockphoto-1461594369-612x612.jpg",
    buttonText: "Get Started",
  },
  {
    id: 14,
    title: "📦 EEXI / CII / EPL / OMM / SEEMP PART III – Consultation",
    text: [
      "we provide complete consultation by our Expert Marine Engineers and Naval Architects for MARPOL ANNEX VI Compliance: ",
      "EEXI Compliance- (Energy Efficiency Existing Ship Index)",
      "CII Compliance- (Carbon Intensity Indicator)",
      "EPL- (Engine Power Limitation)",
      "OMM- (On Board Management Manual)",
      "SEEMP Part III",
    ],
    imageUrl: "https://i.ibb.co/MCNjXHr/Screenshot-2024-01-09-165551.png",
    buttonText: "Consult Now",
  },
];
const Services: React.FC = () => {
  useEffect(() => {
    Aos.init({
      duration: 3000,
    });
  }, []);
  const defaultServiceId = 1; // Assuming "Annual Safety Inspections" has ID 1

  const [activeService, setActiveService] = useState<number>(defaultServiceId);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      const id = parseInt(hash.substring(9), 10); // Extracting the service ID from the hash

      if (!isNaN(id) && id > 0 && id <= servicesData.length) {
        setActiveService(id);
      }
    };

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);

    // Initial check for active service
    handleHashChange();

    return () => {
      // Cleanup function to remove event listener
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []); // Empty dependency array to run only once on mount

  const handleServiceClick = (id: number) => {
    setActiveService(id);
    window.location.hash = `#service-${id}`; // Update hash in URL
  };

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const selectService = (
    serviceId: number,
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault(); // Prevent default anchor behavior
    setActiveService(serviceId); // Set active service
    window.location.hash = `service-${serviceId}`; // Update hash in URL

    // Close the sidebar in mobile view
    if (window.innerWidth <= 768) {
      setIsSidebarOpen(false);
    }
  };
  return (
    <>
      <div className={styles.test}>
        <div className={styles.resNav}>
          <button onClick={toggleSidebar} className={styles.toggleButton}>
            <FontAwesomeIcon
              icon={isSidebarOpen ? faTimes : faAngleDoubleRight}
            />
          </button>
        </div>
        <nav
          className={`${styles.sidebar} ${isSidebarOpen ? styles.open : ""}`}
        >
          <button onClick={closeSidebar} className={styles.toggleButton}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <h1 className={styles.logo}>our services</h1>

          <div className={styles.menuContent}>
            <ul className={styles.menuItems}>
              {servicesData.map((service) => (
                <li className={styles.item} key={service.id}>
                  <Link
                    href={`#service-${service.id}`}
                    className={`${styles.serviceLink} ${
                      activeService === service.id ? styles.activeService : ""
                    }`}
                    onClick={(event) => selectService(service.id, event)}
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
        <main className={styles.main}>
          
          {activeService !== null && (
            <section
              id={`service-${activeService}`}
              key={activeService}
              className={`${styles.serviceSection} ${styles.activeService}`}
            >
              <h2 data-aos="fade-down">{servicesData[activeService - 1].title}</h2>
              <div className={styles.serviceContent}>
                <div data-aos="fade-up" className={styles.serviceImage}>
                  <img
                    src={servicesData[activeService - 1].imageUrl}
                    alt={servicesData[activeService - 1].title}
                  />
                </div>
                <div data-aos="zoom-in" className={styles.serviceText}>
                  <p>{servicesData[activeService - 1].text}</p>
                  {/* {servicesData[activeService - 1].buttonText && ( */}
                  <button>{servicesData[activeService - 1].buttonText}</button>
                  {/* )} */}
                </div>
              </div>
            </section>
          )}
        </main>
      </div>
    </>
  );
};

export default Services;
