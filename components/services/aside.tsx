import React, { useState } from "react";
import styles from "./aside.module.scss";

interface AsideProps {
  mainData: { title: string }[];
  activeTab: string;
  openService: (evt: React.MouseEvent<HTMLButtonElement>, Serv: string) => void;
}

const AsideComponent: React.FC<AsideProps> = ({
  mainData,
  activeTab,
  openService,
}) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

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
            onClick={(e) => openService(e, dataObj.title)}
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
