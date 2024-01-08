// import React, { useEffect, useState } from "react";
// import styles from "./aside.module.scss";

// interface AsideProps {
//   mainData: { title: string }[];
//   activeTab: string;
//   openService: (
//     evt: React.MouseEvent<HTMLButtonElement>,
//     Service: string
//   ) => void;
// }

// const AsideComponent: React.FC<AsideProps> = ({
//   mainData,
//   activeTab,
//   openService,
// }) => {
//   const [collapsed, setCollapsed] = useState(window.innerWidth <= 1059);

//   const toggleCollapse = () => {
//     setCollapsed(!collapsed);
//   };

//   const handleServiceClick = (
//     e: React.MouseEvent<HTMLButtonElement>,
//     title: string
//   ) => {
//     openService(e, title);

//     if (window.innerWidth <= 1059) {
//       setCollapsed(true);
//     }
//   };
//   useEffect(() => {
//     const handleOutsideClick = (e: MouseEvent) => {
//       if (window.innerWidth <= 1059 && !collapsed) {
//         const container = document.querySelector(`.${styles.container}`);
//         if (container && !container.contains(e.target as Node)) {
//           setCollapsed(true);
//         }
//       }
//     };

//     // Add event listener for clicks on the entire document
//     document.addEventListener("click", handleOutsideClick);

//     return () => {
//       // Remove event listener when the component unmounts
//       document.removeEventListener("click", handleOutsideClick);
//     };
//   }, [collapsed]); // Dependency on 'collapsed' to update the listener

//   // ... rest of the component remains the same

//   useEffect(() => {
//     const handleResize = () => {
//       setCollapsed(window.innerWidth <= 1059);
//     };

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return (
//     <div className={styles.container}>
//       {/* Show Services button always visible on smaller screens */}
//       <button
//         onClick={toggleCollapse}
//         className={`${styles.toggleButton} ${
//           window.innerWidth <= 1059 ? "" : styles.hidden
//         }`}
//       >
//         {collapsed ? "Show Services" : "Hide Services"}
//       </button>
//       {/* Services list always visible on larger screens */}
//       <aside className={`${styles.btn} ${collapsed ? styles.collapsed : ""}`}>
//         {mainData.map((dataObj) => (
//           <button
//             className={
//               activeTab === dataObj.title
//                 ? `${styles.tabLinks} ${styles.active}`
//                 : styles.tabLinks
//             }
//             onClick={(e) => handleServiceClick(e, dataObj.title)}
//             key={dataObj.title}
//           >
//             {dataObj.title}
//           </button>
//         ))}
//       </aside>
//     </div>
//   );
// };

// export default AsideComponent;

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
