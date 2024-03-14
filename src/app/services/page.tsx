"use client";
import Link from "next/link"; // Import Link from next/link
import React, { useEffect, useState } from "react";
import styles from "../../styles/pages/services.module.scss"; // Import
interface Service {
  id: number;
  title: string;
  text: string;
  imageUrl: string;
  buttonText?: string;
}
const servicesData: Service[] = [
  {
    id: 1,
    title: "Annual Safety Inspections",
    text: "Ensure the safety and compliance of your vessel with our comprehensive annual safety inspections. Our experienced inspectors will thoroughly assess your vessel's condition and equipment to identify and mitigate potential risks.",
    imageUrl: "https://i.ibb.co/F0C4drm/istockphoto-1658925458-612x612.webp",
    buttonText: "Learn More",
  },
  {
    id: 2,
    title: "Ship Registration Services",
    text: "Navigate the complex process of ship registration with ease. Our team provides expert assistance and guidance to ensure smooth registration under various flags, meeting all international regulatory requirements.",
    imageUrl: "https://i.ibb.co/D4ksJGw/ship-registration-e1623403355938.jpg",
    buttonText: "Register Now",
  },
  {
    id: 3,
    title: "New Ships Designs",
    text: "Embark on your maritime ventures with confidence with our bespoke ship design solutions. Our team of naval architects and engineers will work closely with you to bring your vision to life, delivering innovative designs tailored to your specific needs.",
    imageUrl: "https://i.ibb.co/JB6gxNz/photo-1585713181935-d5f622cc2415.webp",
    buttonText: "Explore Designs",
  },
  {
    id: 4,
    title: "Ballast Water Management Solutions",
    text: "Mitigate the environmental impact of ballast water discharge with our advanced management solutions. Our comprehensive approach ensures compliance with regulations while protecting marine ecosystems.",
    imageUrl: "https://i.ibb.co/LDy0zcq/maxresdefault.webp",
    buttonText: "Discover Solutions",
  },
  {
    id: 5,
    title: "CFD Finite Element Analysis",
    text: "Optimize the performance and efficiency of your vessel with our advanced CFD finite element analysis services. Our team employs cutting-edge simulation techniques to evaluate and improve design aspects, ensuring optimal results.",
    imageUrl:
      "https://i.ibb.co/yy1RyY8/Marine-ship-CFD-Msc-Cradle-Ansys-Fluent-Siemens-Star-ccm.webp",
    buttonText: "Learn More",
  },
  {
    id: 6,
    title: "Class and Statutory Certification",
    text: "Stay compliant with industry regulations and standards with our class and statutory certification services. Our experienced team ensures that your vessel meets all necessary requirements, providing peace of mind for your operations.",
    imageUrl: "https://i.ibb.co/WHhT6sk/wood-table-business-wooden.webp",
    buttonText: "View Certifications",
  },
  {
    id: 7,
    title: "Seafarers Endorsements and Certification",
    text: "Facilitate the certification process for your seafaring personnel with our comprehensive services. From endorsements to specialized certifications, we streamline the process to ensure compliance and efficiency.",
    imageUrl: "https://i.ibb.co/WHhT6sk/wood-table-business-wooden.webp",
    buttonText: "Get Certified",
  },
  {
    id: 8,
    title: "Corporations",
    text: "Navigate corporate requirements and regulations with our expert guidance. Our team assists with corporate structuring, compliance, and governance, ensuring smooth operations for your maritime business.",
    imageUrl:
      "https://i.ibb.co/k2WgwT5/desktop-wallpaper-business-corporate.webp",
    buttonText: "Explore Services",
  },
  {
    id: 9,
    title: "Insurance Cover, Conditions Surveys",
    text: "Protect your maritime assets with comprehensive insurance cover and condition surveys. Our team provides tailored solutions to assess risks and ensure adequate coverage, safeguarding your investments.",
    imageUrl: "/images/insurance-cover-conditions-surveys.jpg",
    buttonText: "Get Insured",
  },
  {
    id: 10,
    title: "ISM and ISPS Training and Consultancy",
    text: "Enhance safety and security measures with our ISM and ISPS training and consultancy services. Our experienced team provides customized solutions to ensure compliance and mitigate risks for your maritime operations.",
    imageUrl: "/images/ism-and-isps-training-and-consultancy.jpg",
    buttonText: "Enroll Now",
  },
  {
    id: 11,
    title: "Non-Destructive Tests",
    text: "Ensure the integrity and safety of your vessel with our non-destructive testing services. Our certified inspectors utilize advanced techniques to detect flaws and defects without causing damage, ensuring optimal performance and longevity.",
    imageUrl: "https://i.ibb.co/TbdMSH2/non-destructive.webp",
    buttonText: "Learn More",
  },
  {
    id: 12,
    title: "On Demand Surveys",
    text: "Get timely and reliable surveys for your vessel with our on-demand survey services. Our experienced team provides comprehensive assessments to meet your specific needs, ensuring compliance and peace of mind.",
    imageUrl: "https://i.ibb.co/8M91bp0/pexels-photo-669622.webp",
    buttonText: "Request Survey",
  },
  {
    id: 13,
    title:
      "Recreation of Existing Ships Drawings, Calculations, Manuals & Plans",
    text: "Revitalize your vessel's documentation with our recreation services. Our team recreates existing ship drawings, calculations, manuals, and plans with accuracy and attention to detail, ensuring compliance and efficiency.",
    imageUrl: "https://i.ibb.co/2dbFPQ0/istockphoto-1461594369-612x612.jpg",
    buttonText: "Get Started",
  },
  {
    id: 14,
    title: "EEXI / CII / EPL / OMM / SEEMP PART III – Consultation",
    text: "Stay ahead of regulatory requirements with our expert consultation services. Our team provides guidance on EEXI, CII, EPL, OMM, and SEEMP Part III compliance, ensuring smooth operations and environmental sustainability for your vessels.",
    imageUrl: "https://i.ibb.co/MCNjXHr/Screenshot-2024-01-09-165551.png",
    buttonText: "Consult Now",
  },
];
const Services: React.FC = () => {
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

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

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
  };

  return (
    <>
      <div className={styles.test}>
        <div className={styles.resNav}>
          <button onClick={toggleSidebar} className={styles.toggleButton}>
            Open Sidebar
          </button>
        </div>
        <nav
          className={`${styles.sidebar} ${isSidebarOpen ? styles.open : ""}`}
        >
          <button onClick={closeSidebar} className={styles.toggleButton}>
            Close Sidebar
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
          <div>
            <h1>Services</h1>
          </div>
          {activeService !== null && (
            <section
              id={`service-${activeService}`}
              key={activeService}
              className={`${styles.serviceSection} ${styles.activeService}`}
            >
              <h2>{servicesData[activeService - 1].title}</h2>
              <div className={styles.serviceContent}>
                <div className={styles.serviceImage}>
                  <img
                    src={servicesData[activeService - 1].imageUrl}
                    alt={servicesData[activeService - 1].title}
                  />
                </div>
                <div className={styles.serviceText}>
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
