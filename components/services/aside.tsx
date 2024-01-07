// AsideComponent.tsx
import React, { useState, useEffect } from "react";
import styles from "../../src/styles/pages/services.module.scss";

interface AsideProps {
  mainData: { titile: string }[];
  activeTab: string;
  openServ: (evt: React.MouseEvent<HTMLButtonElement>, Serv: string) => void;
}

const AsideComponent: React.FC<AsideProps> = ({
  mainData,
  activeTab,
  openServ,
}) => {
  const [collapsed, setCollapsed] = useState(
    typeof window !== "undefined" && window.innerWidth <= 1059 ? true : false
  );

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const handleServiceClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    titile: string
  ) => {
    openServ(e, titile);
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

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
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
        <aside className={styles.btncnttt}>
          {mainData.map((dataObj) => (
            <button
              className={
                activeTab === dataObj.titile
                  ? `${styles.tablinks} ${styles.active}`
                  : styles.tablinks
              }
              onClick={(e) => openServ(e, dataObj.titile)}
              key={dataObj.titile}
            >
              {dataObj.titile}
            </button>
          ))}
        </aside>
      ) : (
        <div className={styles.container}>
          <button onClick={toggleCollapse} className={styles.toggleButton}>
            {collapsed ? "Show Services" : "Hide Services"}
          </button>

          <aside
            className={`${styles.btn} ${collapsed ? styles.collapsed : ""}`}
          >
            {mainData.map((dataObj) => (
              <button
                className={
                  activeTab === dataObj.titile
                    ? `${styles.tablinks} ${styles.active}`
                    : styles.tablinks
                }
                onClick={(e) => handleServiceClick(e, dataObj.titile)}
                key={dataObj.titile}
              >
                {dataObj.titile}
              </button>
            ))}
          </aside>
        </div>
      )}
    </>
  );
};
export default AsideComponent;
