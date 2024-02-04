"use client";
import React, { useState, useEffect } from "react";
// import styles from "../../src/styles/pages/services.module.scss";
import styles from "./aside.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
interface AsideProps {
  mainData: { title: string }[];
  activeTab: string;
  openService: (
    evt: React.MouseEvent<HTMLButtonElement>,
    Service: string
  ) => void;
}

const AsideComponent: React.FC<AsideProps> = ({
  mainData,
  activeTab,
  openService,
}) => {
  const [collapsed, setCollapsed] = useState(
    typeof window !== "undefined" && window.innerWidth <= 1059 ? true : false
  );

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const handleServiceClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    title: string
  ) => {
    openService(e, title);
    // Set collapsed to true after a service is selected in mobile view
    if (typeof window !== "undefined" && window.innerWidth <= 990) {
      setCollapsed(true);
    }
  };

  useEffect(() => {
    if (typeof window === "undefined") return; // Check if 'window' is defined

    const handleOutsideClick = (e: MouseEvent) => {
      // Check if the click occurred outside the services container
      const container = document.querySelector(`.${styles.container}`);
      if (container && !container.contains(e.target as Node)) {
        setCollapsed(true);
      }
    };

    // Add event listener when component mounts
    document.addEventListener("click", handleOutsideClick);

    // Remove event listener when component unmounts
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []); // Empty dependency array ensures that this effect runs once when the component mounts

  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {windowWidth > 991 ? (
        <div className={styles.btnClick}>
          {mainData.map((dataObj) => (
            <button
              type="button"
              className={
                activeTab === dataObj.title
                  ? `${styles.tabLinks} ${styles.active}`
                  : styles.tabLinks
              }
              onClick={(e) => openService(e, dataObj.title)}
              key={dataObj.title}
            >
              {dataObj.title}
            </button>
          ))}
        </div>
      ) : (
        <div className={styles.container}>
          <button
            type="button"
            onClick={toggleCollapse}
            className={styles.toggleButton}
          >
            {collapsed ? "Hide Services" : "Show Services"}
          </button>

          <div className={`${styles.btn} ${collapsed ? styles.collapsed : ""}`}>
            {mainData.map((dataObj) => (
              <button
                type="button"
                className={
                  activeTab === dataObj.title
                    ? `${styles.tablinks} ${styles.active}`
                    : styles.tablinks
                }
                onClick={(e) => handleServiceClick(e, dataObj.title)}
                key={dataObj.title}
              >
                {dataObj.title}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
export default AsideComponent;
