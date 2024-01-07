import React, { useEffect, useState } from "react";
import styles from "./aside.module.scss";

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
    window.innerWidth <= 1059 ? true : false
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
    if (window.innerWidth <= 1059) {
      setCollapsed(true);
    }
  };

  useEffect(() => {
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

  return (
    <div className={styles.container}>
      <button onClick={toggleCollapse} className={styles.toggleButton}>
        {collapsed ? "Show Services" : "Hide Services"}
      </button>
      <aside className={`${styles.btn} ${collapsed ? styles.collapsed : ""}`}>
        {mainData.map((dataObj) => (
          <button
            className={
              activeTab === dataObj.title
                ? `${styles.tabLinks} ${styles.active}`
                : styles.tabLinks
            }
            onClick={(e) => handleServiceClick(e, dataObj.title)}
            key={dataObj.title}
          >
            {dataObj.title}
          </button>
        ))}
      </aside>
    </div>
  );
};

export default AsideComponent;
